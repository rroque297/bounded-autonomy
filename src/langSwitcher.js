/**
 * langSwitcher.js — Language switcher UI for Bounded Autonomy
 *
 * Renders a compact nav pill (e.g. "EN ▾") that expands to a dropdown
 * listing all 4 languages. Keyboard-accessible, animated, ARIA-compliant.
 *
 * Call mountLangSwitcher(containerEl) once, after initI18n().
 */

import { getLang, getAllLangs, setLang } from './i18n.js'

/* ─── Build & mount ─────────────────────────────────────────────────────── */

export function mountLangSwitcher(container) {
  if (!container) return

  const wrapper = document.createElement('div')
  wrapper.className = 'lang-switcher'
  wrapper.setAttribute('role', 'navigation')
  wrapper.setAttribute('aria-label', 'Language selector')

  // ── Trigger button
  const trigger = document.createElement('button')
  trigger.className = 'lang-trigger'
  trigger.setAttribute('aria-haspopup', 'listbox')
  trigger.setAttribute('aria-expanded', 'false')
  trigger.setAttribute('aria-label', 'Select language')
  trigger.innerHTML = `
    <span class="lang-trigger-globe" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.6"
           stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10
                 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    </span>
    <span class="lang-trigger-code">${getLang().toUpperCase()}</span>
    <span class="lang-trigger-chevron" aria-hidden="true">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </span>
  `

  // ── Dropdown
  const dropdown = document.createElement('ul')
  dropdown.className = 'lang-dropdown'
  dropdown.setAttribute('role', 'listbox')
  dropdown.setAttribute('aria-label', 'Available languages')

  const langs = getAllLangs()

  langs.forEach(lang => {
    const li = document.createElement('li')
    li.setAttribute('role', 'option')
    li.setAttribute('data-lang', lang.code)
    li.setAttribute('aria-selected', lang.code === getLang() ? 'true' : 'false')
    li.className = `lang-option${lang.code === getLang() ? ' active' : ''}`

    li.innerHTML = `
      <span class="lang-option-code">${lang.code.toUpperCase()}</span>
      <span class="lang-option-local">${lang.localLabel}</span>
      <span class="lang-option-check" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
    `

    li.addEventListener('click', () => {
      selectLang(lang.code)
    })

    li.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        selectLang(lang.code)
      }
    })

    li.setAttribute('tabindex', '0')
    dropdown.appendChild(li)
  })

  wrapper.appendChild(trigger)
  wrapper.appendChild(dropdown)
  container.appendChild(wrapper)

  // ── Toggle open/close
  let isOpen = false

  function open() {
    isOpen = true
    wrapper.classList.add('open')
    trigger.setAttribute('aria-expanded', 'true')
    // focus first item
    const first = dropdown.querySelector('.lang-option')
    if (first) first.focus()
  }

  function close() {
    isOpen = false
    wrapper.classList.remove('open')
    trigger.setAttribute('aria-expanded', 'false')
  }

  trigger.addEventListener('click', () => {
    isOpen ? close() : open()
  })

  // close on outside click
  document.addEventListener('click', e => {
    if (!wrapper.contains(e.target)) close()
  })

  // keyboard: Escape to close, arrow keys to navigate
  dropdown.addEventListener('keydown', e => {
    const options = [...dropdown.querySelectorAll('.lang-option')]
    const current = document.activeElement
    const idx = options.indexOf(current)

    if (e.key === 'Escape') { close(); trigger.focus() }
    if (e.key === 'ArrowDown') { e.preventDefault(); options[(idx + 1) % options.length]?.focus() }
    if (e.key === 'ArrowUp')   { e.preventDefault(); options[(idx - 1 + options.length) % options.length]?.focus() }
  })

  // ── Language selection handler
  function selectLang(code) {
    setLang(code)
    close()
    trigger.focus()

    // update trigger label
    trigger.querySelector('.lang-trigger-code').textContent = code.toUpperCase()

    // update option states
    dropdown.querySelectorAll('.lang-option').forEach(li => {
      const isActive = li.dataset.lang === code
      li.classList.toggle('active', isActive)
      li.setAttribute('aria-selected', isActive ? 'true' : 'false')
    })

    // subtle page-level transition: flash a translucent overlay
    flashTransition()
  }

  return wrapper
}

/* ─── Transition overlay ─────────────────────────────────────────────────── */
// A brief, tasteful fade-flash signals the page language changed.
function flashTransition() {
  const flash = document.createElement('div')
  flash.className = 'lang-flash'
  document.body.appendChild(flash)

  // Force reflow then animate out
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      flash.classList.add('lang-flash--out')
      flash.addEventListener('transitionend', () => flash.remove(), { once: true })
    })
  })
}
