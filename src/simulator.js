// ─────────────────────────────────────────────────────────────────────────────
// simulator.js — Rule engine + interactive simulator UI
//
// Imports shared data from our single source of truth.
// The "import" statement tells the browser: "go get these values from that file."
// ─────────────────────────────────────────────────────────────────────────────

import { MODELS, SCENARIOS, ALL_MODEL_KEYS } from './data/scenarios.js'
import { populateResults } from './results.js'
import { DOMAINS } from './data/domains.js'
import { t, getLang } from './i18n.js'
import { populateAnalysis, populateDrift } from './analysis.js'
import { selectInsight } from './insights.js'

var LEVELS = {
  none: 0,
  low: 1,
  medium: 2,
  high: 3,
  moderate: 2,
  strong: 3,
  wide: 1,
  narrow: 3,
  fast: 3,
}

// Active scenario set — defaults to the abstract domain from domains.js
// which has multilingual desc objects
let activeDomain = 'abstract'
let activeScenarios = DOMAINS['abstract'].scenarios

// ─── RULE ENGINE ─────────────────────────────────────────────────────────────
// This is the core of the proof of concept.
// It takes a model name and a scenario, applies the primitive rules
// deterministically, and returns an outcome object.
//
// "Deterministic" means: given the same inputs, it ALWAYS produces
// the same output. No randomness, no AI, no network calls.
// ─── HELPER: PRIMITIVE LEVEL COMPARISON ──────────────────────────────────────
// Converts named levels to numbers so we can compare scenario demand
// against model supply mathematically.
// Example: scenario needs 'high' delegation, model only provides 'low'
// → delegationExceeded = true

function primitiveExceeds(scenarioDemand, configSupply) {
  const L = { none: 0, low: 1, medium: 2, high: 3, strong: 3, moderate: 2 }
  return L[scenarioDemand] > L[configSupply]
}

function reversibilityFails(scenarioWindow, modelSpeed) {
  const WINDOW = { wide: 1, moderate: 2, narrow: 3 }
  const SPEED  = { none: 0, fast: 3 }
  // Only fails if scenario window demand EXCEEDS model speed by more than 1
  return WINDOW[scenarioWindow] - SPEED[modelSpeed] > 1
}

// ─── HELPER: COMPUTE SCORE ───────────────────────────────────────────────────
// Derives the controllability score from primitive evaluation results.
// Weights are grounded in the theoretical references:
// — Reversibility carries highest penalty (Perrow: permanent harm is least recoverable)
// — Boundaries carry second penalty (Leveson: control structure failure)
// — Delegation carries lowest penalty (Meadows: scope violation is precondition, not harm)
// — Intervention partially recovers a boundary breach (detection + response > detection alone)

function computeScore(delegationExceeded, boundaryBreached,
                      reversibilityFailed, interventionActive) {
  let score = 100
  if (reversibilityFailed)                              score -= 40
  if (boundaryBreached)                                 score -= 35
  if (delegationExceeded)                               score -= 25
  if ((boundaryBreached || delegationExceeded)
      && interventionActive)                            score += 15
  if (boundaryBreached && delegationExceeded
      && interventionActive)                            score -= 8
  return Math.max(0, Math.min(100, score))
}

// ─── HELPER: DERIVE OUTPUT ───────────────────────────────────────────────────
// Determines the observable outcome from primitive evaluation results.
// Outcomes in order of severity:
// irreversible → intervention → violation → compliant

function deriveOutput(delegationExceeded, boundaryBreached,
                      reversibilityFailed, interventionActive) {
  // Irreversible: action cannot be undone — intervention cannot help here
  // This takes priority over everything else
  if (reversibilityFailed) {
    return 'irreversible'
  }
  // Intervention: boundary or delegation breached but governance responded
  if ((boundaryBreached || delegationExceeded) && interventionActive) {
    return 'intervention'
  }
  // Violation: boundary or delegation breached, no response
  if (boundaryBreached || delegationExceeded) {
    return 'violation'
  }
  // Compliant: no primitive failures
  return 'compliant'
}

// ─── HELPER: DERIVE EVENT MESSAGE ────────────────────────────────────────────
// Returns the translation key for the event log entry.
// These keys must exist in i18n.js under events.

function deriveEventMsg(delegationExceeded, boundaryBreached,
                        reversibilityFailed, interventionActive) {
  if (reversibilityFailed && !interventionActive) return 'noGov'
  if (reversibilityFailed && interventionActive)  return 'revBlocked'
  if (boundaryBreached && interventionActive)      return 'boundaryInter'
  if (boundaryBreached && !interventionActive)     return 'noConstraint'
  if (delegationExceeded)                          return 'delegBroad'
  return 'routine'
}

// ─── RULE ENGINE ─────────────────────────────────────────────────────────────
// Takes a model key and a scenario, evaluates each primitive independently,
// and returns an outcome object.
// Deterministic: same inputs always produce same outputs.

export function runScenario(modelKey, scenario) {
  const cfg = MODELS[modelKey]

  // Each primitive evaluates independently against scenario conditions
  const delegationExceeded = primitiveExceeds(
    scenario.delegationRequired,
    cfg.delegationLevel
  )
  const boundaryBreached = primitiveExceeds(
    scenario.boundaryPressure,
    cfg.boundaryStrength
  )
  const reversibilityFailed = reversibilityFails(
    scenario.reversibilityWindow,
    cfg.reversibilitySpeed
  )

  // Derive all outputs from primitive evaluations
  const output    = deriveOutput(delegationExceeded, boundaryBreached,
                                  reversibilityFailed, cfg.interventionActive)
  const score     = computeScore(delegationExceeded, boundaryBreached,
                                  reversibilityFailed, cfg.interventionActive)
  const eventMsg  = deriveEventMsg(delegationExceeded, boundaryBreached,
                                    reversibilityFailed, cfg.interventionActive)

  // Socio-technical harm comes from the scenario data, not the rule engine
  const sociotechnicalHarm = scenario.sociotechnicalRisk || null

  return {
    output,
    score,
    eventMsg,
    sociotechnicalHarm,
    delegationExceeded,
    boundaryBreached,
    reversibilityFailed,
  }
}

// ─── SIMULATOR STATE ──────────────────────────────────────────────────────────
// These variables track what's happening in the simulator right now.
// They live here (not in the HTML) so they're easy to find and modify.

let currentModel = 'baseline'
let runResults = []   // array of result objects from completed runs
let runIndex = 0      // which scenario comes next (0–7)
let running = false   // prevents double-clicks during the animation delay

// ─── UI: CONFIG PANEL ─────────────────────────────────────────────────────────
// Updates the "Current configuration" panel on the right side of the simulator
// to reflect whichever model is selected.

export function updateConfig() {
  const cfg = MODELS[currentModel]

  function setVal(id, val, isGood) {
    const el = document.getElementById(id)
    if (!el) return
    el.textContent = val
    el.className = 'config-val'
    if (isGood)      el.classList.add('on')
    else if (!isGood && val !== '—') el.classList.add('off')
    else             el.classList.add('partial-val')
  }

  // Delegation: low is good (tightly scoped), high is risky
  const delegLabel = cfg.delegationLevel === 'low' ? t('simulator.cfgValBounded') :
  cfg.delegationLevel === 'medium' ? t('simulator.cfgValScoped') : t('simulator.cfgValFull')
  setVal('cfg-delegation', delegLabel, cfg.delegationLevel === 'low')
  // Boundaries: strong is good, none is risky
  const boundLabel = cfg.boundaryStrength === 'strong' ? t('simulator.cfgValOn') : t('simulator.cfgValOff')
  setVal('cfg-boundaries', boundLabel, cfg.boundaryStrength === 'strong')
  // Reversibility: fast is good, none is risky
  const revLabel = cfg.reversibilitySpeed === 'fast' ? t('simulator.cfgValOn') : t('simulator.cfgValOff')
  setVal('cfg-reversibility', revLabel, cfg.reversibilitySpeed === 'fast')
  // Intervention: true is good, false is risky
  const interLabel = cfg.interventionActive ? t('simulator.cfgValOn') : t('simulator.cfgValOff')
  setVal('cfg-intervention', interLabel, cfg.interventionActive)
}

// ─── UI: RUN LOG ──────────────────────────────────────────────────────────────
// Renders all 8 scenario rows. Completed runs show their results;
// upcoming runs show as dimmed placeholders.

function renderLog() {
  const log = document.getElementById('run-log')
  if (!log) return
  log.innerHTML = ''

  const total = activeScenarios.length

  for (let i = 0; i < total; i++) {
    const row = document.createElement('div')
    row.className = 'run-row' + (i >= runIndex ? ' empty' : '')
    const cfg = MODELS[currentModel]

    if (i < runResults.length) {
      const r = runResults[i]
      const s = activeScenarios[i]

      // Build primitive attribution string
      const primitives = []
      if (r.delegationExceeded)  primitives.push(t('simulator.primDelegation'))
      if (r.boundaryBreached)    primitives.push(t('simulator.primBoundary'))
      if (r.reversibilityFailed) primitives.push(t('simulator.primReversibility'))
      const primitiveText = primitives.length > 0 ? primitives.join(' · ') : t('simulator.primAllHeld')

      // Build sociotechnical harm label
      const harmText = s.sociotechnicalRisk ? t(`simulator.harm_${s.sociotechnicalRisk}`) : null

      row.innerHTML = `
        <span class="run-num">#${i + 1}</span>
        <span class="run-model-badge ${cfg.badgeClass}">${cfg.name}</span>
        <span class="run-desc">${s.desc[getLang()] || s.desc.en}</span>
        <span class="output-badge ob-${r.output}">${t(`outputs.${r.output}`)}</span>
        <span class="score-chip ${r.score >= 80 ? 'score-high' : r.score >= 45 ? 'score-mid' : 'score-low'}">${r.score}</span>
        <div class="run-attribution">
          <span>↳ ${primitiveText}</span>
          ${harmText ? `<span class="harm-tag">${harmText}</span>` : ''}
        </div>
      `
    
    } else {
      const s = activeScenarios[i]
      row.innerHTML = `
        <span class="run-num">#${i + 1}</span>
        <span class="run-model-badge" style="color:var(--text3);font-size:0.66rem">—</span>
        <span class="run-desc" style="color:var(--text3)">${s.desc[getLang()] || s.desc.en}</span>
        <span class="output-badge ob-none">${t('outputs.none')}</span>
        <span class="score-chip" style="color:var(--text3)">—</span>
      `
    }
    log.appendChild(row)
  }
}

// ─── UI: SCORE DISPLAY ────────────────────────────────────────────────────────

function updateScore() {
  if (runResults.length === 0) return
  const avg = Math.round(runResults.reduce((s, r) => s + r.score, 0) / runResults.length)
  const scoreEl = document.getElementById('score-big')
  if (!scoreEl) return
  scoreEl.textContent = avg
  scoreEl.style.color = avg >= 80 ? 'var(--green)' : avg >= 45 ? 'var(--amber)' : 'var(--red)'
  const bar = document.getElementById('score-bar')
  if (!bar) return
  bar.style.width = avg + '%'
  bar.style.background = avg >= 80 ? 'var(--green)' : avg >= 45 ? 'var(--amber)' : 'var(--red)'
}

// ─── UI: MINI SCORE CHART ─────────────────────────────────────────────────────

function updateChart() {
  const section = document.getElementById('chart-section')
  if (!section) return
  section.style.display = 'block'
  const bars = document.getElementById('chart-bars')
  bars.innerHTML = ''
  runResults.forEach((r, i) => {
    const color = r.score >= 80 ? 'var(--green)' : r.score >= 45 ? 'var(--amber)' : 'var(--red)'
    bars.innerHTML += `
      <div class="chart-row">
        <span class="chart-label">#${i + 1}</span>
        <div class="chart-bar-bg"><div class="chart-bar-fg" style="width:${r.score}%;background:${color}"></div></div>
        <span class="chart-val">${r.score}</span>
      </div>`
  })
}

// ─── UI: EVENT LOG ────────────────────────────────────────────────────────────

function updateEvents() {
  const section = document.getElementById('events-section')
  if (!section) return
  section.style.display = 'block'
  const list = document.getElementById('event-list')
  const recent = runResults.slice(0)
  list.innerHTML = recent
    .map((r, i) => {
      const dotClass =
        r.output === 'violation' ? 'dot-v'
        : r.output === 'intervention' ? 'dot-i'
        : r.output === 'irreversible' ? 'dot-ir'
        : 'dot-c'
      return `<div class="event-row"><div class="event-dot ${dotClass}"></div><span>Run #${runResults.length - recent.length + i + 1}: ${t(`events.${r.eventMsg}`)}</span></div>`
    })
    .join('')
}

// ─── ACTIONS: MODEL SELECTION ─────────────────────────────────────────────────
// Called when the user clicks a model button. Updates state + resets the log.
const MODEL_DESC_KEYS = {
  baseline:           'simulator.modelDescBaseline',
  boundaries_only:    'simulator.modelDescBoundariesOnly',
  reversibility_only: 'simulator.modelDescReversibilityOnly',
  partial:            'simulator.modelDescPartial',
  full:               'simulator.modelDescFull',
}

const MODEL_DISPLAY_NAMES = {
  baseline:           { en: 'Baseline Model',       fr: 'Modèle de base',        de: 'Basismodell',        es: 'Modelo base'       },
  boundaries_only:    { en: 'Boundaries Only',       fr: 'Limites uniquement',    de: 'Nur Grenzen',        es: 'Solo límites'      },
  reversibility_only: { en: 'Reversibility Only',    fr: 'Réversibilité uniquement', de: 'Nur Reversibilität', es: 'Solo reversibilidad' },
  partial:            { en: 'Partial Model',         fr: 'Modèle partiel',        de: 'Teilmodell',         es: 'Modelo parcial'    },
  full:               { en: 'Full Model',            fr: 'Modèle complet',        de: 'Vollmodell',         es: 'Modelo completo'   },
}

const MODEL_COLORS = {
  baseline:           { color: 'var(--red)',    border: 'rgba(255,77,109,0.3)',  bg: 'rgba(255,77,109,0.04)'  },
  boundaries_only:    { color: 'var(--amber)',  border: 'rgba(245,166,35,0.3)',  bg: 'rgba(245,166,35,0.04)'  },
  reversibility_only: { color: 'var(--yellow)', border: 'rgba(247,201,72,0.3)',  bg: 'rgba(247,201,72,0.04)'  },
  partial:            { color: 'var(--cyan)',   border: 'rgba(0,229,200,0.3)',   bg: 'rgba(0,229,200,0.04)'   },
  full:               { color: 'var(--green)',  border: 'rgba(57,217,138,0.3)',  bg: 'rgba(57,217,138,0.04)'  },
}

function updateModelDesc(model) {
  const lang = getLang()
  const nameEl  = document.getElementById('model-desc-name')
  const descEl  = document.getElementById('model-desc')
  const wrapEl  = document.querySelector('.model-desc-wrap')
  const colors  = MODEL_COLORS[model]

  if (nameEl) nameEl.textContent = MODEL_DISPLAY_NAMES[model][lang] || MODEL_DISPLAY_NAMES[model].en
  if (descEl) descEl.textContent = t(MODEL_DESC_KEYS[model])
  if (wrapEl && colors) {
    wrapEl.style.borderColor     = colors.border
    wrapEl.style.background      = colors.bg
    nameEl.style.color           = colors.color
  }
}

export function selectModel(model, btn) {
  currentModel = model
  document.querySelectorAll('.model-btn').forEach(b => {
    b.classList.remove('active', 'baseline', 'boundaries_only', 'reversibility_only', 'partial', 'full')
  })
  btn.classList.add('active', model)
  updateConfig()
  updateModelDesc(model)
  resetLog()
}

function resetLog() {
  runResults = []
  runIndex = 0
  renderLog()
  const scoreEl = document.getElementById('score-big')
  if (scoreEl) { scoreEl.textContent = '—'; scoreEl.style.color = 'var(--text3)' }
  const bar = document.getElementById('score-bar')
  if (bar) bar.style.width = '0%'
  const chartSec = document.getElementById('chart-section')
  if (chartSec) chartSec.style.display = 'none'
  const eventSec = document.getElementById('events-section')
  if (eventSec) eventSec.style.display = 'none'
  const btn = document.getElementById('run-btn')
  if (btn) { btn.disabled = false; btn.textContent = t('simulator.runNextBtn') }
  clearInsights()
  const runCountEl = document.getElementById('run-count')
  if (runCountEl) runCountEl.textContent = t('simulator.runAllBtn')
  populateResults(activeDomain, currentModel, [], activeScenarios)
  populateAnalysis(activeDomain, currentModel, [], activeScenarios)
  populateDrift()
}

// ─── ACTIONS: RUN NEXT ────────────────────────────────────────────────────────
export function runNext() {
  if (runIndex >= activeScenarios.length || running) return
  running = true
  const btn = document.getElementById('run-btn')
  btn.textContent = 'Running…'
  btn.disabled = true
  btn.classList.add('running')

  setTimeout(() => {
    const result = runScenario(currentModel, activeScenarios[runIndex])
    runResults.push(result)
    runIndex++
    renderLog()
    updateScore()
    updateChart()
    updateEvents()

    populateResults(activeDomain, currentModel, runResults, activeScenarios)
    populateAnalysis(activeDomain, currentModel, runResults, activeScenarios)
    populateDrift()
    renderInsight(result, runIndex)
    running = false
    btn.classList.remove('running')
    if (runIndex >= activeScenarios.length) {
    btn.textContent = 'All runs complete'
    btn.disabled = true
        } else {
    btn.textContent = 'Explore step by step'
    btn.disabled = false
    }
  }, 480)
}

// ─── INSIGHT STORE ────────────────────────────────────────────────────────────
let insightResults = [] // stores {result, runNumber} for re-render on lang change

function clearInsights() {
  const container = document.getElementById('insight-container')
  if (!container) return
  container.innerHTML = ''
  container.style.display = 'none'
  insightResults = []
}

export function rerenderInsights() {
  const container = document.getElementById('insight-container')
  if (!container || insightResults.length === 0) return
  container.innerHTML = ''
  // Re-render in reverse order so most recent stays on top
  const ordered = [...insightResults].reverse()
  ordered.forEach(({ result, runNumber }) => {
    const insight = selectInsight(result, getLang())
    const card = document.createElement('div')
    card.className = 'insight-card'
    card.innerHTML = `
      <div class="insight-run-label">Run ${runNumber} insight</div>
      <div class="insight-body">
        <div class="insight-block">
          <div class="insight-block-label">What happened</div>
          <p class="insight-text">${insight.interpretation}</p>
        </div>
        <div class="insight-block">
          <div class="insight-block-label">Real-world parallel</div>
          <p class="insight-text insight-case">${insight.realWorldCase}</p>
        </div>
        <div class="insight-block">
          <div class="insight-block-label">Governance question</div>
          <p class="insight-text insight-question">${insight.question}</p>
        </div>
      </div>
    `
    container.appendChild(card)
  })
}

// ─── INSIGHT CARD ─────────────────────────────────────────────────────────────
function renderInsight(result, runNumber) {
  const insight = selectInsight(result, getLang())
  const container = document.querySelector('#insight-container')
console.log('insight container found:', container, document.readyState)
if (!container) return

  const card = document.createElement('div')
  card.className = 'insight-card'
  card.innerHTML = `
    <div class="insight-run-label">Run ${runNumber} insight</div>
    <div class="insight-body">
      <div class="insight-block">
        <div class="insight-block-label">What happened</div>
        <p class="insight-text">${insight.interpretation}</p>
      </div>
      <div class="insight-block">
        <div class="insight-block-label">Real-world parallel</div>
        <p class="insight-text insight-case">${insight.realWorldCase}</p>
      </div>
      <div class="insight-block">
        <div class="insight-block-label">Governance question</div>
        <p class="insight-text insight-question">${insight.question}</p>
      </div>
    </div>
  `
  // Store for re-render on language change
  insightResults.push({ result, runNumber })
  // Prepend so most recent is always on top
  container.prepend(card)
  container.style.display = 'block'
}

// ─── ACTIONS: RUN ALL ─────────────────────────────────────────────────────────
export function runAll() {
  if (running) return
  resetLog()
  let i = 0
  function step() {
    if (i >= activeScenarios.length) return
    const result = runScenario(currentModel, activeScenarios[i])
    runResults.push(result)
    runIndex = i + 1
    renderLog()
    updateScore()
    updateChart()
    updateEvents()
    populateResults(activeDomain, currentModel, runResults, activeScenarios)   
    populateAnalysis(activeDomain, currentModel, runResults, activeScenarios)
    populateDrift()
    i++
    setTimeout(step, 180)
  }
  step()
  const btn = document.getElementById('run-btn')
  if (btn) { btn.disabled = true; btn.textContent = 'All runs complete' }
}

// ─── ACTIONS: SELECT DOMAIN ───────────────────────────────────────────────────
// Called when the visitor picks a domain from the selector.
// Swaps the active scenario set and resets the log — rule engine unchanged.

export function selectDomain(domainKey) {
  activeDomain = domainKey
  const domain = DOMAINS[domainKey]
  activeScenarios = domain.scenarios

  // Update the domain description text and name below the selector
  const descEl = document.getElementById('domain-desc')
  if (descEl) descEl.textContent = domain.description[getLang()] || domain.description.en
  const descNameEl = document.getElementById('domain-desc-name')
  if (descNameEl) descNameEl.textContent = domain.label[getLang()] || domain.label.en

  // Update run count label
  const countEl = document.getElementById('run-count')
  if (countEl) countEl.textContent = t('simulator.runAllBtn').replace('8', domain.scenarios.length)

  // Highlight the active domain button
  document.querySelectorAll('.domain-btn').forEach(b => {
    b.classList.remove('active')
    if (b.dataset.domain === domainKey) b.classList.add('active')
  })

  resetLog()
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
export function getActiveDomain() {
  return activeDomain
}

export function initSimulator() {
  updateConfig()
  renderLog()
  updateModelDesc('baseline')

// Re-render log when language switches so descriptions update immediately
  import('./i18n.js').then(({ onLangChange }) => {
    onLangChange((lang) => {
      renderLog()
      updateEvents()
      updateModelDesc(currentModel)
      const activeBtn = document.querySelector('.domain-btn.active')
      if (activeBtn) {
        const key = activeBtn.dataset.domain
        const domain = DOMAINS[key]
        if (domain) {
          const descEl = document.getElementById('domain-desc')
          if (descEl) descEl.textContent = domain.description[lang] || domain.description.en
          const descNameEl = document.getElementById('domain-desc-name')
          if (descNameEl) descNameEl.textContent = domain.label[lang] || domain.label.en
        }
      }
    })
  })
}