// ─────────────────────────────────────────────────────────────────────────────
// results.js — Results section: pre-computes all model × scenario combinations
// and renders the summary cards, frequency breakdown, head-to-head chart,
// and comparison matrix.
// ─────────────────────────────────────────────────────────────────────────────

import { MODELS, SCENARIOS, ALL_MODEL_KEYS } from './data/scenarios.js'
import { runScenario } from './simulator.js'

// ─── PRE-COMPUTE ALL RESULTS ──────────────────────────────────────────────────
// Run every model against every scenario once, up front, at page load.
// This means the Results section is always consistent with the Simulator —
// they share the same rule engine, so the numbers always agree.

const RESULTS_DATA = {}
ALL_MODEL_KEYS.forEach(m => {
  RESULTS_DATA[m] = SCENARIOS.map(s => runScenario(m, s))
})

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function modelAvgScore(m) {
  const scores = RESULTS_DATA[m].map(r => r.score)
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
}

function countOutputs(m) {
  const counts = { violation: 0, intervention: 0, irreversible: 0, compliant: 0 }
  RESULTS_DATA[m].forEach(r => { counts[r.output]++ })
  return counts
}

function outputBadgeHTML(output) {
  const map = {
    violation:    ['ob-violation',    'violation'],
    intervention: ['ob-intervention', 'intervention'],
    irreversible: ['ob-irreversible', 'irreversible'],
    compliant:    ['ob-compliant',    'compliant'],
  }
  const [cls, label] = map[output] || ['ob-none', '—']
  return `<span class="output-badge ${cls}">${label}</span>`
}

function scoreColor(s) {
  return s >= 80 ? 'var(--green)' : s >= 45 ? 'var(--amber)' : 'var(--red)'
}

// ─── RENDER: SUMMARY CARDS ────────────────────────────────────────────────────
// Three cards at the top — one per model — showing the average score
// and a breakdown of how many of each output type occurred.

function renderSummaryCards() {
  const cardMap = { baseline: 'b', partial: 'p', full: 'f' }

  ALL_MODEL_KEYS.forEach(m => {
    const k = cardMap[m]
    const avg = modelAvgScore(m)
    const counts = countOutputs(m)

    const scoreEl = document.getElementById(`rs-score-${k}`)
    const barEl = document.getElementById(`rs-bar-${k}`)
    const pillsEl = document.getElementById(`rs-pills-${k}`)
    if (!scoreEl || !barEl || !pillsEl) return

    scoreEl.textContent = avg
    scoreEl.style.color = scoreColor(avg)
    barEl.style.width = avg + '%'

    pillsEl.innerHTML = ''
    if (counts.violation)    pillsEl.innerHTML += `<span class="rs-pill v">${counts.violation}× violation</span>`
    if (counts.intervention) pillsEl.innerHTML += `<span class="rs-pill i">${counts.intervention}× intervention</span>`
    if (counts.irreversible) pillsEl.innerHTML += `<span class="rs-pill ir">${counts.irreversible}× irreversible</span>`
    if (counts.compliant)    pillsEl.innerHTML += `<span class="rs-pill c">${counts.compliant}× compliant</span>`
  })
}

// ─── RENDER: OUTPUT FREQUENCY BARS ───────────────────────────────────────────
// Four cards — one per output type — each showing a bar for each model.
// Makes it easy to see at a glance which model produces which outcomes most.

function renderFrequency() {
  const outputKeys = [
    { key: 'violation',    elId: 'freq-v',  dotColor: 'var(--red)' },
    { key: 'intervention', elId: 'freq-i',  dotColor: 'var(--amber)' },
    { key: 'irreversible', elId: 'freq-ir', dotColor: '#ff2050' },
    { key: 'compliant',    elId: 'freq-c',  dotColor: 'var(--green)' },
  ]
  const modelDotColors = {
    baseline: 'var(--cyan)',
    partial:  'var(--amber)',
    full:     'var(--green)',
  }

  outputKeys.forEach(({ key, elId, dotColor }) => {
    const el = document.getElementById(elId)
    if (!el) return
    el.innerHTML = ALL_MODEL_KEYS.map(m => {
      const n = countOutputs(m)[key]
      const pct = Math.round((n / 8) * 100) // 8 = total scenarios
      return `<div class="freq-bar-row">
        <div class="freq-model-dot" style="background:${modelDotColors[m]}"></div>
        <div class="freq-bar-bg"><div class="freq-bar-fg" style="width:${pct}%;background:${dotColor}"></div></div>
        <span class="freq-count">${n}</span>
      </div>`
    }).join('')
  })
}

// ─── RENDER: HEAD-TO-HEAD CHART ───────────────────────────────────────────────
// One row per scenario. Each row shows three stacked bars — one per model —
// so you can compare scores across models for the exact same situation.

function renderH2HChart() {
  const el = document.getElementById('h2h-chart')
  if (!el) return

  const modelColors = {
    baseline: 'var(--cyan)',
    partial:  'var(--amber)',
    full:     'var(--green)',
  }

  el.innerHTML = SCENARIOS.map((s, i) => {
    const bars = ALL_MODEL_KEYS.map(m => {
      const r = RESULTS_DATA[m][i]
      return `<div class="h2h-bar-row">
        <div class="h2h-bar-track">
          <div class="h2h-bar-inner" style="width:${r.score}%;background:${modelColors[m]}"></div>
        </div>
        <span class="h2h-val">${r.score}</span>
      </div>`
    }).join('')

    return `<div style="display:grid;grid-template-columns:180px 1fr;align-items:center;gap:1rem;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.03);">
      <span style="font-family:var(--mono);font-size:0.68rem;color:var(--text2);line-height:1.4;">#${i + 1} ${s.desc}</span>
      <div style="display:flex;flex-direction:column;gap:3px;">${bars}</div>
    </div>`
  }).join('')
}

// ─── RENDER: COMPARISON MATRIX ────────────────────────────────────────────────
// The full dataset in table form. Every scenario × every model.
// Each cell shows the output type badge and the numerical score.

function renderMatrix() {
  const tbody = document.getElementById('matrix-body')
  if (!tbody) return

  tbody.innerHTML = SCENARIOS.map((s, i) => {
    const riskClass =
      s.risk === 'high' ? 'risk-high'
      : s.risk === 'medium' ? 'risk-medium'
      : 'risk-low'

    const cells = ALL_MODEL_KEYS.map(m => {
      const r = RESULTS_DATA[m][i]
      return `<td>
        <div style="display:flex;align-items:center;gap:8px;">
          ${outputBadgeHTML(r.output)}
          <span style="font-family:var(--mono);font-size:0.68rem;color:${scoreColor(r.score)}">${r.score}</span>
        </div>
      </td>`
    }).join('')

    return `<tr>
      <td class="col-run">${i + 1}</td>
      <td class="col-scenario" style="font-size:0.78rem;color:var(--text2)">${s.desc}</td>
      <td><span class="risk-badge ${riskClass}">${s.risk}</span></td>
      ${cells}
    </tr>`
  }).join('')
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
// Call this once on page load. Renders all four Results sub-sections.

export function initResults() {
  renderSummaryCards()
  renderFrequency()
  renderH2HChart()
  renderMatrix()
}
