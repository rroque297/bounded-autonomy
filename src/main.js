// ─────────────────────────────────────────────────────────────────────────────
// main.js — Bounded Autonomy entry point
//
// Order of operations:
//  1. Import CSS (Vite bundles these)
//  2. Import all modules
//  3. Init i18n (detect lang, apply translations to DOM)
//  4. Mount language switcher in nav
//  5. Register onLangChange callback
//  6. Expose simulator functions to window (used by onclick in HTML)
//  7. Build domain selector UI
//  8. Init simulator + results
// ─────────────────────────────────────────────────────────────────────────────

import './style.css'
import './lang-switcher.css'

import { initI18n, onLangChange, applyTranslations } from './i18n.js'
import { mountLangSwitcher } from './langSwitcher.js'
import { initSimulator, selectModel, runNext, runAll, selectDomain } from './simulator.js'
import { initResults } from './results.js'
import { initAnalysis, populateAnalysis } from './analysis.js'
import { DOMAINS, DOMAIN_KEYS } from './data/domains.js'
import { getLang } from './i18n.js'

// ── 1. Init i18n before anything renders
initI18n()

// ── 2. Mount language switcher into the nav slot
const switcherMount = document.getElementById('lang-switcher-mount')
mountLangSwitcher(switcherMount)

// ── 3. When language changes, re-apply static translations
onLangChange((lang) => {
  applyTranslations()
  document.querySelectorAll('.domain-btn').forEach(btn => {
    const key = btn.dataset.domain
    if (key && DOMAINS[key]) btn.textContent = DOMAINS[key].label[lang] || DOMAINS[key].label.en
  })
  const descEl = document.getElementById('domain-desc')
  const activeBtn = document.querySelector('.domain-btn.active')
  if (descEl && activeBtn) {
    const key = activeBtn.dataset.domain
    if (DOMAINS[key]) descEl.textContent = DOMAINS[key].description[lang] || DOMAINS[key].description.en
  }
  console.log(`[i18n] Language switched to: ${lang}`)
})

// ── 4. Expose simulator actions to window
//    The HTML uses onclick="selectModel(...)" etc. — these need to be
//    reachable from the global window object.
window.selectModel  = selectModel
window.runNext      = runNext
window.runAll       = runAll
window.selectDomain = selectDomain

// ── 5. Build the domain selector buttons
function buildDomainSelector() {
  const container = document.getElementById('domain-selector')
  const descEl    = document.getElementById('domain-desc')
  if (!container) return

  DOMAIN_KEYS.forEach((key, i) => {
    const domain = DOMAINS[key]
    const btn = document.createElement('button')
    btn.className = 'domain-btn' + (i === 0 ? ' active' : '')
    btn.dataset.domain = key
    btn.textContent = domain.label[getLang()] || domain.label.en
    btn.addEventListener('click', () => selectDomain(key))
    container.appendChild(btn)
  })

  // Set initial description
  if (descEl) descEl.textContent = DOMAINS[DOMAIN_KEYS[0]].description[getLang()] || DOMAINS[DOMAIN_KEYS[0]].description.en
}

// ── 6. Init everything
buildDomainSelector()
initSimulator()
initResults()
initAnalysis()