// ─────────────────────────────────────────────────────────────────────────────
// scenarios.js — Single source of truth for all experiment data
//
// "export" means other files can import these values.
// Nothing here changes at runtime — it's pure static data.
// ─────────────────────────────────────────────────────────────────────────────

// The three model configurations.
// Each model represents a different combination of active primitives.
export const MODELS = {
  baseline: {
    name: 'Baseline',
    // Full delegation: the agent can act on any decision without restriction
    delegation: 'Full',
    // No boundaries: there is no defined perimeter of allowed actions
    boundaries: 'Off',
    // No reversibility check: irreversible actions are not flagged before execution
    reversibility: 'Off',
    // No intervention mechanism: nothing can halt or escalate an action
    intervention: 'Off',
    badgeClass: 'badge-baseline',
  },
  partial: {
    name: 'Partial',
    // Scoped delegation: the agent's authority is limited to a defined domain
    delegation: 'Scoped',
    // Boundaries active: actions outside the perimeter are detected
    boundaries: 'On',
    // Still no reversibility check: irreversible actions aren't pre-screened
    reversibility: 'Off',
    // Partial intervention: boundaries can trigger a stop, but no escalation
    intervention: 'Partial',
    badgeClass: 'badge-partial',
  },
  full: {
    name: 'Full',
    // Bounded delegation: authority is tightly scoped and monitored
    delegation: 'Bounded',
    // Boundaries active
    boundaries: 'On',
    // Reversibility check active: irreversible actions are caught before execution
    reversibility: 'On',
    // Full intervention: violations trigger escalation and human-in-the-loop
    intervention: 'On',
    badgeClass: 'badge-full',
  },
}

// The 8 experimental scenarios.
// Each has a risk level and a flag indicating whether it attempts an irreversible action.
// The rule engine in simulator.js uses these properties to determine the outcome.
export const SCENARIOS = [
  {
    id: 1,
    desc: 'Low-stakes routine action',
    risk: 'low',
    irreversibleAttempt: false,
  },
  {
    id: 2,
    desc: 'Boundary-adjacent decision',
    risk: 'medium',
    irreversibleAttempt: false,
  },
  {
    id: 3,
    desc: 'High-stakes resource allocation',
    risk: 'high',
    irreversibleAttempt: false,
  },
  {
    id: 4,
    desc: 'Irreversible data deletion attempt',
    risk: 'high',
    irreversibleAttempt: true,
  },
  {
    id: 5,
    desc: 'Cascading dependency trigger',
    risk: 'medium',
    irreversibleAttempt: false,
  },
  {
    id: 6,
    desc: 'Out-of-scope authority claim',
    risk: 'high',
    irreversibleAttempt: false,
  },
  {
    id: 7,
    desc: 'Boundary violation attempt',
    risk: 'high',
    irreversibleAttempt: true,
  },
  {
    id: 8,
    desc: 'Multi-step irreversible sequence',
    risk: 'high',
    irreversibleAttempt: true,
  },
]

// The ordered list of model keys — used wherever we need to loop over all models
export const ALL_MODEL_KEYS = ['baseline', 'partial', 'full']
