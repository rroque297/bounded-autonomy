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
export function runScenario(modelKey, scenario) {
  const cfg = MODELS[modelKey]
  let output = 'compliant'
  let score = 100
  let eventMsg = ''

  if (scenario.irreversibleAttempt) {
    // Rule group 1: Irreversible action attempted
    // The reversibility primitive is checked FIRST — it's the earliest intervention point.
    if (cfg.reversibility === 'On') {
      output = 'intervention'
      score = 72
      eventMsg = 'revBlocked'
    } else if (cfg.boundaries === 'On') {
      // Boundaries catch it, but later in the decision chain — lower score
      output = 'intervention'
      score = 48
      eventMsg = 'boundaryInter'
    } else {
      // No primitive active — action executes, outcome is permanent
      output = 'irreversible'
      score = 0
      eventMsg = 'noGov'
    }
  } else if (scenario.risk === 'high') {
    // Rule group 2: High-risk action (but reversible)
    if (cfg.boundaries === 'On' && cfg.intervention !== 'Off') {
      if (cfg.delegation === 'Bounded') {
        // All three primitives working together — best governance outcome
        output = 'compliant'
        score = 95
        eventMsg = 'allPrimitives'
      } else {
        // Boundaries and intervention present, but delegation too broad
        output = 'intervention'
        score = 60
        eventMsg = 'delegBroad'
      }
    } else if (cfg.boundaries === 'On') {
      // Boundary detected a violation but no mechanism to respond
      output = 'violation'
      score = 40
      eventMsg = 'boundaryViol'
    } else {
      // No constraints — high-risk action proceeds unchecked
      output = 'violation'
      score = 18
      eventMsg = 'noConstraint'
    }
  } else if (scenario.risk === 'medium') {
    // Rule group 3: Medium-risk action
    if (cfg.boundaries === 'On') {
      output = 'compliant'
      score = 88
      eventMsg = 'boundaryPass'
    } else {
      output = 'violation'
      score = 55
      eventMsg = 'noCheck'
    }
  } else {
    // Rule group 4: Low-risk action — all models handle this correctly
    output = 'compliant'
    score = 100
    eventMsg = 'routine'
  }

  return { output, score, eventMsg }
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

  function setVal(id, val) {
    const el = document.getElementById(id)
    if (!el) return
    el.textContent = val
    el.className = 'config-val'
    if (val === 'On' || val === 'Full' || val === 'Bounded') el.classList.add('on')
    else if (val === 'Off') el.classList.add('off')
    else el.classList.add('partial-val')
  }

  setVal('cfg-delegation', cfg.delegation)
  setVal('cfg-boundaries', cfg.boundaries)
  setVal('cfg-reversibility', cfg.reversibility)
  setVal('cfg-intervention', cfg.intervention)
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
      row.innerHTML = `
        <span class="run-num">#${i + 1}</span>
        <span class="run-model-badge ${cfg.badgeClass}">${cfg.name}</span>
        <span class="run-desc">${s.desc[getLang()] || s.desc.en}</span>
        <span class="output-badge ob-${r.output}">${t(`outputs.${r.output}`)}</span>
        <span class="score-chip ${r.score >= 80 ? 'score-high' : r.score >= 45 ? 'score-mid' : 'score-low'}">${r.score}</span>
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