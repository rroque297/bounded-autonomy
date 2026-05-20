// ─────────────────────────────────────────────────────────────────────────────
// analysis.js — Dynamic analysis section
//
// Reads the active domain and model results from the simulator,
// then renders four evidence-grounded paragraphs.
// Follows the same pattern as results.js — populateAnalysis() is called
// by the simulator after every run.
// ─────────────────────────────────────────────────────────────────────────────

import { runScenario, getActiveDomain } from './simulator.js'
import { HARMS } from './data/harms.js'
import { HARMS_FR } from './data/harms.fr.js'
import { HARMS_DE } from './data/harms.de.js'
import { HARMS_ES } from './data/harms.es.js'
import { MODELS, ALL_MODEL_KEYS } from './data/scenarios.js'
import { DOMAINS } from './data/domains.js'
import { t, getLang, onLangChange } from './i18n.js'

// ─── HELPERS ──────────────────────────────────────────────────────────────────

// Run all 8 scenarios for a given model against a given scenario set
function runAll(modelKey, scenarios) {
  return scenarios.map(s => ({ scenario: s, result: runScenario(modelKey, s) }))
}

// Get the domain label in the current language
function domainLabel(domainKey) {
  return DOMAINS[domainKey]?.label[getLang()] || DOMAINS[domainKey]?.label.en || domainKey
}

// Count how many runs produced a given output for a model
function countOutput(runs, outputType) {
  return runs.filter(r => r.result.output === outputType).length
}

// Find the first HIGH-RISK scenario that produced a given output for a model
// Skips low-risk routine runs (delegationRequired: 'low') to ensure
// evidence points to meaningful governance failures, not routine actions
function firstMatch(runs, outputType) {
  return runs.find(r =>
    r.result.output === outputType &&
    r.scenario.delegationRequired !== 'low'
  )
}

// Score color class
function scoreColor(s) {
  return s >= 80 ? 'var(--green)' : s >= 45 ? 'var(--amber)' : 'var(--red)'
}

// ─── STAKES HEADER ────────────────────────────────────────────────────────────
// Builds the Tier 1 narrative block — three findings in descending severity,
// each grounded in domain-specific harm descriptions from harms.js

const SEVERITY_ORDER = ['irreversible', 'violation', 'intervention']

const SEVERITY_LABELS = {
  irreversible: { en: 'Irreversible', fr: 'Irréversible', de: 'Irreversibel', es: 'Irreversible' },
  violation:    { en: 'Violation',    fr: 'Violation',    de: 'Verstoß',      es: 'Violación'    },
  intervention: { en: 'Intervention', fr: 'Intervention', de: 'Intervention', es: 'Intervención' },
}

const PRIMITIVE_LABELS = {
  en: {
    delegationExceeded:  'Delegation exceeded',
    boundaryBreached:    'Boundary breached',
    reversibilityFailed: 'Reversibility failed',
    interventionActive:  'Intervention active — escalated',
    noIntervention:      'No intervention active',
  },
  fr: {
    delegationExceeded:  'Délégation dépassée',
    boundaryBreached:    'Limite franchie',
    reversibilityFailed: 'Réversibilité échouée',
    interventionActive:  'Intervention active — escaladée',
    noIntervention:      'Aucune intervention active',
  },
  de: {
    delegationExceeded:  'Delegation überschritten',
    boundaryBreached:    'Grenze verletzt',
    reversibilityFailed: 'Reversibilität fehlgeschlagen',
    interventionActive:  'Intervention aktiv — eskaliert',
    noIntervention:      'Keine Intervention aktiv',
  },
  es: {
    delegationExceeded:  'Delegación excedida',
    boundaryBreached:    'Límite vulnerado',
    reversibilityFailed: 'Reversibilidad fallida',
    interventionActive:  'Intervención activa — escalada',
    noIntervention:      'Sin intervención activa',
  },
}

function buildPrimitiveAttribution(result, lang) {
  const labels = PRIMITIVE_LABELS[lang] || PRIMITIVE_LABELS.en
  const parts = []
  if (result.reversibilityFailed) parts.push(labels.reversibilityFailed)
  if (result.boundaryBreached)    parts.push(labels.boundaryBreached)
  if (result.delegationExceeded)  parts.push(labels.delegationExceeded)
  if (result.output === 'intervention') parts.push(labels.interventionActive)
  else if (!result.delegationExceeded && !result.boundaryBreached && !result.reversibilityFailed) {
    parts.push(labels.noIntervention)
  }
  return parts.join(' · ')
}

function buildStakesHeader(domainKey, scenarios) {
  const lang = getLang()
  const label = domainLabel(domainKey)
  const HARMS_MAP = { en: HARMS, fr: HARMS_FR, de: HARMS_DE, es: HARMS_ES }
  const activeHarms = HARMS_MAP[getLang()] || HARMS
  const domainHarms = activeHarms[domainKey] || activeHarms['abstract']

  // Run baseline model — it surfaces the most failures and gives the
  // richest evidence for the stakes header
  const baselineRuns = runAll('baseline', scenarios)

  // Collect exactly one finding per severity level
  // We look across ALL five models to guarantee we find
  // at least one example of each output type
  const findings = []

  for (const severity of SEVERITY_ORDER) {
    // Try each model in order from least to most governed
    // so the harm description matches the actual failure mode
    const modelOrder = ['baseline', 'reversibility_only', 'boundaries_only', 'partial', 'full']
    let found = false

    for (const modelKey of modelOrder) {
      if (found) break
      const modelRuns = runAll(modelKey, scenarios)
      const match = modelRuns.find(r =>
        r.result.output === severity &&
        r.scenario.delegationRequired !== 'low' &&
        domainHarms[r.scenario.id]?.[severity] &&
        // Don't reuse a scenario already shown in a higher severity finding
        !findings.some(f => f.scenario.id === r.scenario.id)
      )
      if (match) {
        findings.push({
          severity,
          scenario: match.scenario,
          result:   match.result,
          harm:     domainHarms[match.scenario.id][severity],
          model:    modelKey,
        })
        found = true
      }
    }
  }

  // Fully compliant run — no failures to surface
  if (findings.length === 0) {
    return `<div class="stakes-compliant">
      <span class="stakes-compliant-icon">✓</span>
      <p class="stakes-compliant-text">${t('analysis.stakesCompliant').replace('{domain}', label)}</p>
    </div>`
  }

  // Build the three finding cards
  const findingCards = findings.map(({ severity, scenario, result, harm }) => {
    const severityLabel = SEVERITY_LABELS[severity][lang] || SEVERITY_LABELS[severity].en
    const attribution   = buildPrimitiveAttribution(result, lang)
    const scenarioDesc  = scenario.desc[lang] || scenario.desc.en

    return `
      <div class="stakes-finding sf-${severity}">
        <div class="sf-header">
          <span class="sf-badge sb-${severity}">${severityLabel}</span>
          <span class="sf-scenario">${scenarioDesc}</span>
        </div>
        <p class="sf-harm">${harm}</p>
        <div class="sf-attribution">↳ ${attribution}</div>
      </div>`
  }).join('')

  return `
    <div class="stakes-header">
      <div class="stakes-intro">
        <span class="stakes-domain-label">${label}</span>
        <p class="stakes-intro-text">${t('analysis.stakesIntro').replace('{domain}', label)}</p>
        <p class="stakes-selection-logic">${t("analysis.stakesSelectionLogic")}</p>
      </div>
      <div class="stakes-findings">
        ${findingCards}
      </div>
    </div>`
}

// ─── PARAGRAPH BUILDERS ───────────────────────────────────────────────────────
// Each function returns an HTML string for one analysis paragraph.
// They read from the active domain and current language at render time.

function buildP1(domainKey, scenarios) {
  const lang = getLang()
  const label = domainLabel(domainKey)

  // Count irreversible outcomes for baseline in this domain
  const baselineRuns = runAll('baseline', scenarios)
  const fullRuns     = runAll('full', scenarios)
  const baseIrrev    = countOutput(baselineRuns, 'irreversible')
  const fullIrrev    = countOutput(fullRuns, 'irreversible')

  // Static score facts (verified, domain-invariant)
  const baseScore = 30
  const fullScore = 91

  const domainEvidence = baseIrrev > 0
    ? t('analysis.p1p_evidence')
        .replace('{domain}', label)
        .replace('{n}', baseIrrev)
    : ''

  return `
    <div class="analysis-evidence">
      <div class="ae-scores">
        <span class="ae-score" style="color:var(--red)">${baseScore}</span>
        <span class="ae-arrow">→</span>
        <span class="ae-score" style="color:var(--green)">${fullScore}</span>
      </div>
      <p class="ae-text">${t('analysis.p1p')}</p>
      ${domainEvidence ? `<p class="ae-domain">${domainEvidence}</p>` : ''}
    </div>`
}

function buildP2(domainKey, scenarios) {
  const lang = getLang()
  const label = domainLabel(domainKey)

  const partialRuns = runAll('partial', scenarios)
  const boundsRuns  = runAll('boundaries_only', scenarios)
  const reversRuns  = runAll('reversibility_only', scenarios)

  // Find a scenario where partial intervened despite no boundaries
  const recoveryExample = firstMatch(partialRuns, 'intervention')

  const exampleText = recoveryExample
    ? t('analysis.p2p_evidence')
        .replace('{domain}', label)
        .replace('{scenario}', recoveryExample.scenario.desc[lang] || recoveryExample.scenario.desc.en)
    : ''

  return `
    <div class="analysis-evidence">
      <div class="ae-scores">
        <span class="ae-score" style="color:var(--amber)">65</span>
        <span class="ae-label">${t('analysis.scoreLabel_bounds')}</span>
        <span class="ae-score" style="color:var(--cyan)">80</span>
        <span class="ae-label">${t('analysis.scoreLabel_partial')}</span>
        <span class="ae-score" style="color:var(--yellow)">65</span>
        <span class="ae-label">${t('analysis.scoreLabel_revers')}</span>
      </div>
      <p class="ae-text">${t('analysis.p2p')}</p>
      ${exampleText ? `<p class="ae-domain">${exampleText}</p>` : ''}
    </div>`
}

function buildP3(domainKey, scenarios) {
  const lang = getLang()
  const label = domainLabel(domainKey)

  const boundsRuns = runAll('boundaries_only', scenarios)
  const reversRuns = runAll('reversibility_only', scenarios)

  // Boundaries-only fails on irreversibility
  const boundsFailExample = firstMatch(boundsRuns, 'irreversible')
  
  // Reversibility-only fails on violation — find a DIFFERENT scenario than bounds if possible
  const boundsScenarioId = boundsFailExample?.scenario.id
  const reversFailExample =
    reversRuns.find(r =>
      r.result.output === 'violation' &&
      r.scenario.delegationRequired !== 'low' &&
      r.scenario.id !== boundsScenarioId
    ) || firstMatch(reversRuns, 'violation')

  const boundsText = boundsFailExample
    ? t('analysis.p3p_evidence_bounds')
        .replace('{domain}', label)
        .replace('{scenario}', boundsFailExample.scenario.desc[lang] || boundsFailExample.scenario.desc.en)
    : ''

  const reversText = reversFailExample
    ? t('analysis.p3p_evidence_revers')
        .replace('{domain}', label)
        .replace('{scenario}', reversFailExample.scenario.desc[lang] || reversFailExample.scenario.desc.en)
    : ''

  return `
    <div class="analysis-evidence">
      <div class="ae-scores">
        <span class="ae-score" style="color:var(--amber)">65</span>
        <span class="ae-sep">≡</span>
        <span class="ae-score" style="color:var(--yellow)">65</span>
      </div>
      <p class="ae-text">${t('analysis.p3p')}</p>
      ${boundsText ? `<p class="ae-domain">${boundsText}</p>` : ''}
      ${reversText ? `<p class="ae-domain">${reversText}</p>` : ''}
    </div>`
}

function buildP4(domainKey, scenarios) {
  const lang = getLang()
  const label = domainLabel(domainKey)

  return `
    <div class="analysis-evidence">
      <p class="ae-text">${t('analysis.p4p').replace('{domain}', label)}</p>
    </div>`
}

// ─── DRIFT INDICATOR ──────────────────────────────────────────────────────────
// Computes cumulative governance pressure across all 8 runs for each model
// and renders a five-curve SVG line chart.
//
// Pressure per run:
//   +3 if reversibilityFailed
//   +2 if boundaryBreached
//   +1 if delegationExceeded
//   -1 if interventionActive and (boundaryBreached or delegationExceeded)
// Cumulative pressure is the running total across all 8 runs.

const MODEL_COLORS = {
  baseline:           'var(--red)',
  boundaries_only:    'var(--amber)',
  reversibility_only: 'var(--yellow)',
  partial:            'var(--cyan)',
  full:               'var(--green)',
}

const MODEL_NAMES = {
  en: {
    baseline:           'Baseline',
    boundaries_only:    'Bounds Only',
    reversibility_only: 'Revers. Only',
    partial:            'Partial',
    full:               'Full',
  },
  fr: {
    baseline:           'Base',
    boundaries_only:    'Limites',
    reversibility_only: 'Révers.',
    partial:            'Partiel',
    full:               'Complet',
  },
  de: {
    baseline:           'Basis',
    boundaries_only:    'Grenzen',
    reversibility_only: 'Revers.',
    partial:            'Teil',
    full:               'Voll',
  },
  es: {
    baseline:           'Base',
    boundaries_only:    'Límites',
    reversibility_only: 'Revers.',
    partial:            'Parcial',
    full:               'Completo',
  },
}

function computePressure(result) {
  let p = 0
  if (result.reversibilityFailed) p += 3
  if (result.boundaryBreached)    p += 2
  if (result.delegationExceeded)  p += 1
  if (result.interventionActive &&
     (result.boundaryBreached || result.delegationExceeded)) p -= 1
  return p
}

function computeCumulativePressure(modelKey, scenarios) {
  const runs = runAll(modelKey, scenarios)
  let cumulative = 0
  return runs.map(({ result }) => {
    cumulative += computePressure(result)
    return Math.max(0, cumulative)
  })
}

function buildDriftChart(scenarios) {
  const lang = getLang()
  const names = MODEL_NAMES[lang] || MODEL_NAMES.en

  // Compute curves for all five models
  const curves = {}
  ALL_MODEL_KEYS.forEach(m => {
    curves[m] = computeCumulativePressure(m, scenarios)
  })

  // Chart dimensions
  const W = 800
  const H = 280
  const padL = 40
  const padR = 100
  const padT = 20
  const padB = 40

  const chartW = W - padL - padR
  const chartH = H - padT - padB
  const runs = scenarios.length
  
  // Find max pressure across all models for Y scale
  const allValues = Object.values(curves).flat()
  const maxP = Math.max(...allValues, 1)

  // Scale helpers
  const xPos = i => padL + (i / (runs - 1)) * chartW
  const yPos = v => padT + chartH - (v / maxP) * chartH

  // Build polyline points per model
  const lines = ALL_MODEL_KEYS.map(m => {
    const points = curves[m]
      .map((v, i) => `${xPos(i)},${yPos(v)}`)
      .join(' ')
    return `<polyline
      points="${points}"
      fill="none"
      stroke="${MODEL_COLORS[m]}"
      stroke-width="2"
      stroke-linejoin="round"
      stroke-linecap="round"
      opacity="0.9"
    />`
  }).join('')

  // End-of-line labels — offset duplicates to prevent overlap
  const usedYPositions = []
  const endLabels = ALL_MODEL_KEYS.map(m => {
    const lastVal = curves[m][runs - 1]
    const x = xPos(runs - 1) + 6
    let y = yPos(lastVal) + 4

    // If this Y position is already taken, offset downward
    while (usedYPositions.some(usedY => Math.abs(usedY - y) < 12)) {
      y += 12
    }
    usedYPositions.push(y)

    return `<text
      x="${x}" y="${y}"
      fill="${MODEL_COLORS[m]}"
      font-family="IBM Plex Mono, monospace"
      font-size="9"
      dominant-baseline="middle"
    >${names[m]}</text>`
  }).join('')

  // X axis labels — run numbers
  const xLabels = scenarios.map((_, i) => `
    <text
      x="${xPos(i)}" y="${padT + chartH + 18}"
      fill="rgba(200,204,232,0.4)"
      font-family="IBM Plex Mono, monospace"
      font-size="9"
      text-anchor="middle"
    >#${i + 1}</text>`).join('')

  // Y axis gridlines
  const gridSteps = 4
  const gridLines = Array.from({ length: gridSteps + 1 }, (_, i) => {
    const v = (maxP / gridSteps) * i
    const y = yPos(v)
    return `
      <line
        x1="${padL}" y1="${y}"
        x2="${padL + chartW}" y2="${y}"
        stroke="rgba(255,255,255,0.05)"
        stroke-width="1"
      />
      <text
        x="${padL - 6}" y="${y}"
        fill="rgba(200,204,232,0.3)"
        font-family="IBM Plex Mono, monospace"
        font-size="8"
        text-anchor="end"
        dominant-baseline="middle"
      >${Math.round(v)}</text>`
  }).join('')

  return `
    <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg"
         style="width:100%;height:auto;display:block;">
      ${gridLines}
      ${lines}
      ${endLabels}
      ${xLabels}
    </svg>`
}

export function populateDrift() {
  const domainKey = getActiveDomain()
  const scenarios = DOMAINS[domainKey]?.scenarios
  if (!scenarios) return

  const label = domainLabel(domainKey)
  const lang  = getLang()

  const el = document.getElementById('drift-chart')
  if (!el) return

  el.innerHTML = `
    <div class="drift-chart-wrap">
      <div class="drift-domain-label">${label}</div>
      ${buildDriftChart(scenarios)}
    </div>
    <p class="drift-closing">${t('analysis.driftClosing')}</p>`
}

// ─── EMPTY STATE ──────────────────────────────────────────────────────────────

function renderEmptyState() {
  // Clear stakes header
  const header = document.getElementById('analysis-stakes')
  if (header) {
    header.innerHTML = `
      <div class="stakes-empty">
        <span class="stakes-empty-icon">[ − ]</span>
        <span class="stakes-empty-text">${t('analysis.stakesEmpty')}</span>
      </div>`
  }

  // Clear pattern cards
  const placeholders = {
    'analysis-p1': 'analysis.p1p',
    'analysis-p2': 'analysis.p2p',
    'analysis-p3': 'analysis.p3p',
    'analysis-p4': 'analysis.p4p',
  }
  Object.entries(placeholders).forEach(([id, key]) => {
    const el = document.getElementById(id)
    if (!el) return
    el.innerHTML = `<p style="color:var(--text3);font-size:0.9rem;line-height:1.75;">${t(key)}</p>`
  })
}

// ─── POPULATE ─────────────────────────────────────────────────────────────────
// Called by the simulator after every run, same as populateResults().

export function populateAnalysis() {
  const domainKey = getActiveDomain()
  const scenarios = DOMAINS[domainKey]?.scenarios
  if (!scenarios) return

  // Build stakes header first
  const stakesEl = document.getElementById('analysis-stakes')
  if (stakesEl) stakesEl.innerHTML = buildStakesHeader(domainKey, scenarios)

  // Build pattern cards
  const containers = [
    { id: 'analysis-p1', html: buildP1(domainKey, scenarios) },
    { id: 'analysis-p2', html: buildP2(domainKey, scenarios) },
    { id: 'analysis-p3', html: buildP3(domainKey, scenarios) },
    { id: 'analysis-p4', html: buildP4(domainKey, scenarios) },
  ]

  containers.forEach(({ id, html }) => {
    const el = document.getElementById(id)
    if (el) el.innerHTML = html
  })
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

export function initAnalysis() {
  renderEmptyState()

  onLangChange(() => {
    const domainKey = getActiveDomain()
    if (domainKey) {
      populateAnalysis()
      populateDrift()
    }
  })
}