// ─────────────────────────────────────────────────────────────────────────────
// results.js — Results section
// Three-part structure:
//   Part 1 — This Run: live results from the simulator, sorted by severity
//   Part 2 — Verified Scores: theoretical domain-invariant scores
//   Part 3 — Complete Picture: head-to-head chart and comparison matrix
// ─────────────────────────────────────────────────────────────────────────────

import { MODELS, SCENARIOS, ALL_MODEL_KEYS } from './data/scenarios.js'
import { DOMAINS } from './data/domains.js'
import { HARMS } from './data/harms.js'
import { HARMS_FR } from './data/harms.fr.js'
import { HARMS_DE } from './data/harms.de.js'
import { HARMS_ES } from './data/harms.es.js'
import { runScenario } from './simulator.js'
import { t, getLang, onLangChange } from './i18n.js'

// ─── STATE ────────────────────────────────────────────────────────────────────

let hasData = false
let lastDomainKey = 'abstract'
let lastModelKey  = 'baseline'
let lastRunResults = []
let lastScenarios  = []

// ─── THEORETICAL RESULTS ──────────────────────────────────────────────────────
// Pre-computed once. Used for verified scores (Part 2) and comparison chart.

let RESULTS_DATA = {}
const ABSTRACT_SCENARIOS = DOMAINS['abstract'].scenarios

function computeResultsData(scenarios) {
  const data = {}
  ALL_MODEL_KEYS.forEach(m => {
    data[m] = scenarios.map(s => runScenario(m, s))
  })
  return data
}

RESULTS_DATA = computeResultsData(ABSTRACT_SCENARIOS)

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

function getHarms(lang) {
  const map = { en: HARMS, fr: HARMS_FR, de: HARMS_DE, es: HARMS_ES }
  return map[lang] || HARMS
}

const SEVERITY_ORDER = ['irreversible', 'violation', 'intervention', 'compliant']

function severityRank(output) {
  return SEVERITY_ORDER.indexOf(output)
}

const MODEL_COLORS = {
  baseline:           'var(--red)',
  boundaries_only:    'var(--amber)',
  reversibility_only: 'var(--yellow)',
  partial:            'var(--cyan)',
  full:               'var(--green)',
}

const MODEL_DISPLAY_NAMES = {
  baseline:           { en: 'Baseline Model',        fr: 'Modele de base',           de: 'Basismodell',         es: 'Modelo base'        },
  boundaries_only:    { en: 'Boundaries Only',        fr: 'Limites uniquement',       de: 'Nur Grenzen',         es: 'Solo limites'       },
  reversibility_only: { en: 'Reversibility Only',     fr: 'Reversibilite uniquement', de: 'Nur Reversibilitat',  es: 'Solo reversibilidad'},
  partial:            { en: 'Partial Model',          fr: 'Modele partiel',           de: 'Teilmodell',          es: 'Modelo parcial'     },
  full:               { en: 'Full Model',             fr: 'Modele complet',           de: 'Vollmodell',          es: 'Modelo completo'    },
}

// ─── PART 1: THIS RUN ─────────────────────────────────────────────────────────

function renderThisRun(domainKey, modelKey, runResults, scenarios) {
  const lang = getLang()

  // Handle null/empty state
  if (!domainKey || !modelKey || !runResults || runResults.length === 0) {
    const emptyEl = document.getElementById('this-run-empty')
    const popEl   = document.getElementById('this-run-populated')
    if (emptyEl) emptyEl.style.display = 'flex'
    if (popEl)   popEl.style.display   = 'none'
    return
  }

  const domainLabel = DOMAINS[domainKey]?.label[lang] || DOMAINS[domainKey]?.label.en || domainKey
  const modelLabel  = MODEL_DISPLAY_NAMES[modelKey]?.[lang] || MODEL_DISPLAY_NAMES[modelKey]?.en || modelKey
  const modelColor  = MODEL_COLORS[modelKey] || 'var(--text2)'
  const domainHarms = getHarms(lang)[domainKey] || getHarms(lang)['abstract']
  const emptyEl     = document.getElementById('this-run-empty')
  const popEl       = document.getElementById('this-run-populated')
  const headerEl    = document.getElementById('this-run-header')
  const cardsEl     = document.getElementById('this-run-cards')

  if (emptyEl) emptyEl.style.display = 'none'
  if (popEl)   popEl.style.display   = 'block'

  // Count outputs
  const counts = { irreversible: 0, violation: 0, intervention: 0, compliant: 0 }
  runResults.forEach(r => { if (counts[r.output] !== undefined) counts[r.output]++ })

  const total     = runResults.length
  const completed = `${total} of 8`

  // Summary line
  const summaryParts = []
  if (counts.irreversible) summaryParts.push(`<span style="color:var(--red)">${counts.irreversible} irreversible</span>`)
  if (counts.violation)    summaryParts.push(`<span style="color:var(--amber)">${counts.violation} violation</span>`)
  if (counts.intervention) summaryParts.push(`<span style="color:var(--cyan)">${counts.intervention} intervention</span>`)
  if (counts.compliant)    summaryParts.push(`<span style="color:var(--green)">${counts.compliant} compliant</span>`)

  if (headerEl) {
    headerEl.innerHTML = `
      <div class="tr-header-row">
        <div class="tr-meta">
          <span class="tr-domain" style="color:var(--purple)">${domainLabel}</span>
          <span class="tr-model" style="color:${modelColor}">${modelLabel}</span>
        </div>
        <div class="tr-summary">
          <span class="tr-count">${completed} runs</span>
          <span class="tr-divider">·</span>
          ${summaryParts.join('<span class="tr-divider">·</span>')}
        </div>
      </div>`
  }

  // Sort runs by severity
  const sortedRuns = runResults
    .map((r, i) => ({ result: r, scenario: scenarios[i], index: i }))
    .sort((a, b) => severityRank(a.result.output) - severityRank(b.result.output))

  if (cardsEl) {
    cardsEl.innerHTML = sortedRuns.map(({ result, scenario, index }) => {
      const harmEntry = scenario ? domainHarms[scenario.id] : null
      const harmValue = harmEntry
        ? (harmEntry[result.output] || harmEntry['violation'] || harmEntry['intervention'] || null)
        : null
      const harm = harmValue || t('results.routineHarm')

      const primitives = []
      if (result.reversibilityFailed) primitives.push('Reversibility failed')
      if (result.boundaryBreached)    primitives.push('Boundary breached')
      if (result.delegationExceeded)  primitives.push('Delegation exceeded')
      if (result.output === 'intervention') primitives.push('Intervention active')

      const scenarioDesc = scenario
        ? (scenario.desc[lang] || scenario.desc.en)
        : `Run #${index + 1}`

      return `
        <div class="tr-card tr-${result.output}">
          <div class="tr-card-header">
            <span class="output-badge ob-${result.output}">${t(`outputs.${result.output}`)}</span>
            <span class="tr-scenario">${scenarioDesc}</span>
            <span class="tr-score" style="color:${scoreColor(result.score)}">${result.score}</span>
          </div>
          ${harm ? `<p class="tr-harm">${harm}</p>` : ''}
          ${primitives.length ? `<div class="tr-attribution">↳ ${primitives.join(' · ')}</div>` : ''}
        </div>`
    }).join('')
  }
}

// ─── PART 2: VERIFIED SCORES ──────────────────────────────────────────────────

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
    if (counts.violation)    pillsEl.innerHTML += `<span class="rs-pill v">${counts.violation}x violation</span>`
    if (counts.intervention) pillsEl.innerHTML += `<span class="rs-pill i">${counts.intervention}x intervention</span>`
    if (counts.irreversible) pillsEl.innerHTML += `<span class="rs-pill ir">${counts.irreversible}x irreversible</span>`
    if (counts.compliant)    pillsEl.innerHTML += `<span class="rs-pill c">${counts.compliant}x compliant</span>`
  })

  // Show verified scores label
  const vsLabel = document.getElementById('verified-scores-label')
  if (vsLabel) vsLabel.style.display = 'flex'
}

// ─── PART 3: NARRATIVE BRIDGE ────────────────────────────────────────────────

function renderNarrative() {
  const el = document.getElementById('results-narrative')
  if (!el) return

  const baselineResults = RESULTS_DATA['baseline']
  const fullResults     = RESULTS_DATA['full']

  const baseIrrev  = baselineResults.filter(r => r.output === 'irreversible').length
  const baseViol   = baselineResults.filter(r => r.output === 'violation').length
  const baseScore  = modelAvgScore('baseline')
  const fullScore  = modelAvgScore('full')
  const gap        = fullScore - baseScore

  el.innerHTML = `
    <p class="results-narrative-text">
      ${t('results.narrativeP1')
        .replace('{baseIrrev}', baseIrrev)
        .replace('{baseViol}', baseViol)
        .replace('{baseScore}', baseScore)}
    </p>
    <p class="results-narrative-text results-narrative-p2">
      ${t('results.narrativeP2')
        .replace('{fullScore}', fullScore)
        .replace('{gap}', gap)}
    </p>`

  const fwd = document.getElementById('results-forward')
  if (fwd) fwd.style.display = 'flex'
}

// ─── RENDER: HEAD-TO-HEAD CHART ───────────────────────────────────────────────

function renderH2HChart(scenarios) {
  const el = document.getElementById('h2h-chart')
  if (!el) return

  const lang = getLang()
  const modelColors = {
    baseline:           'var(--red)',
    boundaries_only:    'var(--amber)',
    reversibility_only: 'var(--yellow)',
    partial:            'var(--cyan)',
    full:               'var(--green)',
  }

  el.innerHTML = scenarios.map((s, i) => {
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
      <span style="font-family:var(--mono);font-size:0.68rem;color:var(--text2);line-height:1.4;">#${i + 1} ${s.desc[lang] || s.desc.en}</span>
      <div style="display:flex;flex-direction:column;gap:3px;">${bars}</div>
    </div>`
  }).join('')
}

// ─── RENDER: COMPARISON MATRIX ────────────────────────────────────────────────

function renderMatrix(scenarios) {
  const tbody = document.getElementById('matrix-body')
  if (!tbody) return

  const lang = getLang()

  tbody.innerHTML = scenarios.map((s, i) => {
    const riskClass =
      s.boundaryPressure === 'strong' ? 'risk-high'
      : s.boundaryPressure === 'medium' ? 'risk-medium'
      : 'risk-low'

    const riskLabel =
      s.boundaryPressure === 'strong' ? 'high'
      : s.boundaryPressure === 'medium' ? 'medium'
      : 'low'

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
      <td class="col-scenario" style="font-size:0.78rem;color:var(--text2)">${s.desc[lang] || s.desc.en}</td>
      <td><span class="risk-badge ${riskClass}">${riskLabel}</span></td>
      ${cells}
    </tr>`
  }).join('')
}

// ─── EMPTY STATE ──────────────────────────────────────────────────────────────

function renderEmptyState() {
  const statusEl = document.getElementById('rs-status')
  if (statusEl) {
    statusEl.textContent = t('results.emptyState')
    statusEl.style.display = 'block'
  }

  const fwd = document.getElementById('results-forward')
  if (fwd) fwd.style.display = 'none'

  const narr = document.getElementById('results-narrative')
  if (narr) narr.innerHTML = `<p class="results-narrative-text" style="color:var(--text3)">${t('results.narrativeEmpty')}</p>`

  const vsLabel = document.getElementById('verified-scores-label')
  if (vsLabel) vsLabel.style.display = 'none'

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

  const h2hEl = document.getElementById('h2h-chart')
  if (h2hEl) {
    h2hEl.innerHTML = ABSTRACT_SCENARIOS.map((s, i) => {
      const bars = ALL_MODEL_KEYS.map(() => `
        <div class="h2h-bar-row">
          <div class="h2h-bar-track">
            <div class="h2h-bar-inner" style="width:0%"></div>
          </div>
          <span class="h2h-val" style="color:var(--text3)">—</span>
        </div>`).join('')
      return `<div style="display:grid;grid-template-columns:180px 1fr;align-items:center;gap:1rem;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.03);">
        <span style="font-family:var(--mono);font-size:0.68rem;color:var(--text2);line-height:1.4;">#${i + 1} ${s.desc[getLang()] || s.desc.en}</span>
        <div style="display:flex;flex-direction:column;gap:3px;">${bars}</div>
      </div>`
    }).join('')
  }

  const tbody = document.getElementById('matrix-body')
  if (tbody) tbody.innerHTML = ''

  renderThisRun(null, null, [], [])
}

// ─── POPULATE RESULTS ─────────────────────────────────────────────────────────

export function populateResults(domainKey, modelKey, runResults, scenarios) {
  hasData = true

  // Store for language re-renders
  lastDomainKey  = domainKey
  lastModelKey   = modelKey
  lastRunResults = runResults || []
  lastScenarios  = scenarios  || []

  // Recompute theoretical scores for this domain
  RESULTS_DATA = computeResultsData(lastScenarios.length ? lastScenarios : ABSTRACT_SCENARIOS)

  const statusEl = document.getElementById('rs-status')
  if (statusEl) statusEl.style.display = 'none'

  renderThisRun(domainKey, modelKey, runResults, scenarios)
  renderSummaryCards()
  renderNarrative()
  renderH2HChart(lastScenarios.length ? lastScenarios : ABSTRACT_SCENARIOS)
  renderMatrix(lastScenarios.length ? lastScenarios : ABSTRACT_SCENARIOS)
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

export function initResults() {
  renderEmptyState()

  onLangChange(() => {
    if (!hasData) {
      renderEmptyState()
    } else {
      renderThisRun(lastDomainKey, lastModelKey, lastRunResults, lastScenarios)
      renderSummaryCards()
      renderNarrative()
      renderH2HChart(lastScenarios.length ? lastScenarios : ABSTRACT_SCENARIOS)
      renderMatrix(lastScenarios.length ? lastScenarios : ABSTRACT_SCENARIOS)
    }
  })
}