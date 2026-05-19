// ─────────────────────────────────────────────────────────────────────────────
// results.js — Results section
// Renders summary cards, frequency breakdown, head-to-head chart, and
// comparison matrix. Empty state shown to new visitors until simulator runs.
// ─────────────────────────────────────────────────────────────────────────────

import { MODELS, SCENARIOS, ALL_MODEL_KEYS } from './data/scenarios.js'
import { DOMAINS } from './data/domains.js'
import { runScenario } from './simulator.js'
import { t, getLang, onLangChange } from './i18n.js'

// ─── STATE ────────────────────────────────────────────────────────────────────
// hasData tracks whether the simulator has been run at least once.
// Until it has, we show the empty state.

let hasData = false

// ─── PRE-COMPUTE ALL RESULTS ──────────────────────────────────────────────────
// Results are still pre-computed — the rule engine runs all combinations up
// front. The difference is we don't RENDER them until the visitor runs the
// simulator. This keeps the numbers consistent with the simulator at all times.

const RESULTS_DATA = {}
const ABSTRACT_SCENARIOS = DOMAINS['abstract'].scenarios
ALL_MODEL_KEYS.forEach(m => {
  RESULTS_DATA[m] = ABSTRACT_SCENARIOS.map(s => runScenario(m, s))
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
    violation:    'ob-violation',
    intervention: 'ob-intervention',
    irreversible: 'ob-irreversible',
    compliant:    'ob-compliant',
  }
  const cls = map[output] || 'ob-none'
  const label = t(`outputs.${output}`) || t('outputs.none')
  return `<span class="output-badge ${cls}">${label}</span>`
}

function scoreColor(s) {
  return s >= 80 ? 'var(--green)' : s >= 45 ? 'var(--amber)' : 'var(--red)'
}

// ─── EMPTY STATE ──────────────────────────────────────────────────────────────
// Shown to new visitors before any simulator run.
// Cards are visible but all numbers show dashes and bars sit at zero.

function renderEmptyState() {
  // Status line
  const statusEl = document.getElementById('rs-status')
  if (statusEl) {
    statusEl.textContent = t('results.emptyState')
    statusEl.style.display = 'block'
  }

  // Summary cards — dashes + zero bars
  const cardMap = { baseline: 'b', boundaries_only: 'bo', reversibility_only: 'ro', partial: 'p', full: 'f' }
  ALL_MODEL_KEYS.forEach(m => {
    const k = cardMap[m]
    const scoreEl = document.getElementById(`rs-score-${k}`)
    const barEl   = document.getElementById(`rs-bar-${k}`)
    const pillsEl = document.getElementById(`rs-pills-${k}`)
    if (scoreEl) { scoreEl.textContent = '—'; scoreEl.style.color = 'var(--text3)' }
    if (barEl)   { barEl.style.width = '0%' }
    if (pillsEl) { pillsEl.innerHTML = '' }
  })

  // Frequency bars — all flat
  const freqIds = ['freq-v', 'freq-i', 'freq-ir', 'freq-c']
  const modelDotColors = {
    baseline:           'var(--red)',
    boundaries_only:    'var(--amber)',
    reversibility_only: 'var(--yellow)',
    partial:            'var(--cyan)',
    full:               'var(--green)',
  }
  freqIds.forEach(id => {
    const el = document.getElementById(id)
    if (!el) return
    el.innerHTML = ALL_MODEL_KEYS.map(m => `
      <div class="freq-bar-row">
        <div class="freq-model-dot" style="background:${modelDotColors[m]}"></div>
        <div class="freq-bar-bg"><div class="freq-bar-fg" style="width:0%"></div></div>
        <span class="freq-count">—</span>
      </div>`).join('')
  })

  // Head-to-head chart — empty rows with scenario labels
  const h2hEl = document.getElementById('h2h-chart')
  if (h2hEl) {
    h2hEl.innerHTML = ABSTRACT_SCENARIOS.map((s, i) => {
      const bars = ALL_MODEL_KEYS.map(m => `
        <div class="h2h-bar-row">
          <div class="h2h-bar-track">
            <div class="h2h-bar-inner" style="width:0%;background:${
              m === 'baseline' ? 'var(--cyan)' : m === 'partial' ? 'var(--amber)' : 'var(--green)'
            }"></div>
          </div>
          <span class="h2h-val" style="color:var(--text3)">—</span>
        </div>`).join('')
      return `<div style="display:grid;grid-template-columns:180px 1fr;align-items:center;gap:1rem;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.03);">
        <span style="font-family:var(--mono);font-size:0.68rem;color:var(--text2);line-height:1.4;">#${i + 1} ${s.desc[getLang()] || s.desc.en}</span>
        <div style="display:flex;flex-direction:column;gap:3px;">${bars}</div>
      </div>`
    }).join('')
  }

  // Comparison matrix — headers only, no rows
  const tbody = document.getElementById('matrix-body')
  if (tbody) { tbody.innerHTML = '' }
}

// ─── RENDER: SUMMARY CARDS ────────────────────────────────────────────────────

function renderSummaryCards() {
  const cardMap = { baseline: 'b', boundaries_only: 'bo', reversibility_only: 'ro', partial: 'p', full: 'f' }

  ALL_MODEL_KEYS.forEach(m => {
    const k = cardMap[m]
    const avg = modelAvgScore(m)
    const counts = countOutputs(m)

    const scoreEl = document.getElementById(`rs-score-${k}`)
    const barEl   = document.getElementById(`rs-bar-${k}`)
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

function renderFrequency() {
  const outputKeys = [
    { key: 'violation',    elId: 'freq-v',  dotColor: 'var(--red)' },
    { key: 'intervention', elId: 'freq-i',  dotColor: 'var(--amber)' },
    { key: 'irreversible', elId: 'freq-ir', dotColor: '#ff2050' },
    { key: 'compliant',    elId: 'freq-c',  dotColor: 'var(--green)' },
  ]
  const modelDotColors = {
    baseline:           'var(--red)',
    boundaries_only:    'var(--amber)',
    reversibility_only: 'var(--yellow)',
    partial:            'var(--cyan)',
    full:               'var(--green)',
  }

  outputKeys.forEach(({ key, elId, dotColor }) => {
    const el = document.getElementById(elId)
    if (!el) return
    el.innerHTML = ALL_MODEL_KEYS.map(m => {
      const n = countOutputs(m)[key]
      const pct = Math.round((n / 8) * 100)
      return `<div class="freq-bar-row">
        <div class="freq-model-dot" style="background:${modelDotColors[m]}"></div>
        <div class="freq-bar-bg"><div class="freq-bar-fg" style="width:${pct}%;background:${dotColor}"></div></div>
        <span class="freq-count">${n}</span>
      </div>`
    }).join('')
  })
}

// ─── RENDER: HEAD-TO-HEAD CHART ───────────────────────────────────────────────

function renderH2HChart() {
  const el = document.getElementById('h2h-chart')
  if (!el) return

  const modelColors = {
    baseline:           'var(--red)',
    boundaries_only:    'var(--amber)',
    reversibility_only: 'var(--yellow)',
    partial:            'var(--cyan)',
    full:               'var(--green)',
  }

  el.innerHTML = ABSTRACT_SCENARIOS.map((s, i) => {    const bars = ALL_MODEL_KEYS.map(m => {
      const r = RESULTS_DATA[m][i]
      return `<div class="h2h-bar-row">
        <div class="h2h-bar-track">
          <div class="h2h-bar-inner" style="width:${r.score}%;background:${modelColors[m]}"></div>
        </div>
        <span class="h2h-val">${r.score}</span>
      </div>`
    }).join('')

    return `<div style="display:grid;grid-template-columns:180px 1fr;align-items:center;gap:1rem;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.03);">
       <span style="font-family:var(--mono);font-size:0.68rem;color:var(--text2);line-height:1.4;">#${i + 1} ${s.desc[getLang()] || s.desc.en}</span>
      <div style="display:flex;flex-direction:column;gap:3px;">${bars}</div>
    </div>`
  }).join('')
}

// ─── RENDER: COMPARISON MATRIX ────────────────────────────────────────────────

function renderMatrix() {
  const tbody = document.getElementById('matrix-body')
  if (!tbody) return

  tbody.innerHTML = ABSTRACT_SCENARIOS.map((s, i) => {
    const riskClass =
      s.risk === 'high'   ? 'risk-high'
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
      <td class="col-scenario" style="font-size:0.78rem;color:var(--text2)">${s.desc[getLang()] || s.desc.en}</td>
      <td><span class="risk-badge ${riskClass}">${s.risk}</span></td>
      ${cells}
    </tr>`
  }).join('')
}

// ─── POPULATE RESULTS ─────────────────────────────────────────────────────────
// Called by the simulator after any run completes.
// Reveals the status line, populates all four sub-sections.

export function populateResults() {
  hasData = true

  // Hide the empty-state status line
  const statusEl = document.getElementById('rs-status')
  if (statusEl) statusEl.style.display = 'none'

  renderSummaryCards()
  renderFrequency()
  renderH2HChart()
  renderMatrix()
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
// Called once on page load. Shows the empty state.
// Re-renders empty state text when language switches.

export function initResults() {
  renderEmptyState()

  onLangChange(() => {
    if (!hasData) {
      const statusEl = document.getElementById('rs-status')
      if (statusEl) statusEl.textContent = t('results.emptyState')
      renderEmptyState()
    } else {
      renderSummaryCards()
      renderFrequency()
      renderH2HChart()
      renderMatrix()
    }
  })
}