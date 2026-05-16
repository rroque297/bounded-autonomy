// ─────────────────────────────────────────────────────────────────────────────
// main.js — Entry point
//
// This is the first JavaScript file Vite loads. Its job is simple:
// import the CSS (so Vite knows to process it) and import + initialise
// the two feature modules.
//
// Think of this as the "on/off switch" for the whole page.
// ─────────────────────────────────────────────────────────────────────────────

// Importing the CSS here tells Vite to include it in the final bundle.
// You never load CSS via a <link> tag when using Vite — this is the modern way.
import './style.css'

// Import the initialisation functions from our two feature modules.
import { initSimulator, selectModel, runNext, runAll, selectDomain } from './simulator.js'
import { initResults } from './results.js'
import { DOMAINS, DOMAIN_KEYS } from './data/domains.js'

// Attach to window so onclick handlers in HTML can reach them
window.selectModel = selectModel
window.runNext = runNext
window.runAll = runAll
window.selectDomain = selectDomain

document.addEventListener('DOMContentLoaded', () => {
  // Build the domain selector buttons dynamically from domains.js
  const selectorEl = document.getElementById('domain-selector')
  if (selectorEl) {
    DOMAIN_KEYS.forEach(key => {
      const d = DOMAINS[key]
      const btn = document.createElement('button')
      btn.className = 'domain-btn' + (key === 'abstract' ? ' active' : '')
      btn.dataset.domain = key
      btn.onclick = () => selectDomain(key)
      btn.innerHTML = `<span class="domain-icon">${d.icon}</span><span class="domain-label">${d.label}</span>`
      selectorEl.appendChild(btn)
    })
  }

  initSimulator()
  initResults()
})
