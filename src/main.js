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
import { initSimulator, selectModel, runNext, runAll } from './simulator.js'
import { initResults } from './results.js'

// ─── ATTACH FUNCTIONS TO window ───────────────────────────────────────────────
// The HTML uses onclick="selectModel(...)" and onclick="runNext()" directly
// in the markup. For those to work, the functions need to be accessible
// globally (on the window object). When using ES modules, functions are
// scoped by default — so we explicitly attach them here.

window.selectModel = selectModel
window.runNext = runNext
window.runAll = runAll

// ─── INITIALISE ON PAGE LOAD ──────────────────────────────────────────────────
// Wait until the HTML is fully parsed before trying to find elements by ID.
// "DOMContentLoaded" fires at that exact moment.

document.addEventListener('DOMContentLoaded', () => {
  initSimulator()  // sets up the simulator panel and empty run log
  initResults()    // pre-computes and renders the full Results section
})
