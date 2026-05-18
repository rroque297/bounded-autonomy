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
  if (reversibilityFailed)                    score -= 40
  if (boundaryBreached)                       score -= 35
  if (delegationExceeded)                     score -= 25
  if (boundaryBreached && interventionActive) score += 15
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

function updateConfig() {
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
  const delegLabel = cfg.delegationLevel === 'low' ? 'Bounded' :
                     cfg.delegationLevel === 'medium' ? 'Scoped' : 'Full'
  setVal('cfg-delegation', delegLabel, cfg.delegationLevel === 'low')

  // Boundaries: strong is good, none is risky
  const boundLabel = cfg.boundaryStrength === 'strong' ? 'On' : 'Off'
  setVal('cfg-boundaries', boundLabel, cfg.boundaryStrength === 'strong')

  // Reversibility: fast is good, none is risky
  const revLabel = cfg.reversibilitySpeed === 'fast' ? 'On' : 'Off'
  setVal('cfg-reversibility', revLabel, cfg.reversibilitySpeed === 'fast')

  // Intervention: true is good, false is risky
  const interLabel = cfg.interventionActive ? 'On' : 'Off'
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
      if (r.delegationExceeded)  primitives.push('delegation exceeded')
      if (r.boundaryBreached)    primitives.push('boundary breached')
      if (r.reversibilityFailed) primitives.push('reversibility failed')
      const primitiveText = primitives.length > 0 ? primitives.join(' · ') : 'all primitives held'

      // Build sociotechnical harm label
      const harmLabels = {
        oversight_erosion:        'oversight erosion risk',
        accountability_diffusion: 'accountability diffusion risk',
        delegation_opacity:       'delegation opacity risk',
        governance_tempo:         'governance tempo risk',
        consent_displacement:     'consent displacement risk',
      }
      const harmText = s.sociotechnicalRisk ? harmLabels[s.sociotechnicalRisk] : null

      row.innerHTML = `
        <span class="run-num">#${i + 1}</span>
        <span class="run-model-badge ${cfg.badgeClass}">${cfg.name}</span>
        <span class="run-desc">${s.desc[getLang()] || s.desc.en}</span>
        <span class="output-badge ob-${r.output}">${t(`outputs.${r.output}`)}</span>
        <span class="score-chip ${r.score >= 80 ? 'score-high' : r.score >= 45 ? 'score-mid' : 'score-low'}">${r.score}</span>
        <span class="run-attribution">↳ ${primitiveText}${harmText ? ' · <span class="harm-tag">' + harmText + '</span>' : ''}</span>
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
  const recent = runResults.slice(-5)
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

export function selectModel(model, btn) {
  currentModel = model
  document.querySelectorAll('.model-btn').forEach(b => {
    b.classList.remove('active', 'baseline', 'partial', 'full')
  })
  btn.classList.add('active', model)
  updateConfig()
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
  if (btn) { btn.disabled = false; btn.textContent = 'Run next scenario' }
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

    populateResults ()
    running = false
    btn.classList.remove('running')
    if (runIndex >= activeScenarios.length) {
      btn.textContent = 'All runs complete'
      btn.disabled = true
    } else {
      btn.textContent = 'Run next scenario'
      btn.disabled = false
    }
  }, 480)
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
    populateResults()
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

  // Update the domain description text below the selector
  const descEl = document.getElementById('domain-desc')
  if (descEl) descEl.textContent = domain.description[getLang()] || domain.description.en

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
export function initSimulator() {
  updateConfig()
  renderLog()

// Re-render log when language switches so descriptions update immediately
  import('./i18n.js').then(({ onLangChange }) => {
    onLangChange(() => {
      renderLog()
      updateEvents()
    })
  })
}