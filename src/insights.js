// ─── GOVERNANCE INSIGHTS ─────────────────────────────────────────────────────
// Mapped to failure mode combinations from runScenario() output.
// Each insight has: interpretation, realWorldCase, question

export const INSIGHTS = {

  // All primitives failed — full governance absence
  all_failed: {
    interpretation: 'Every governance primitive failed. The system exceeded its delegated authority, crossed its operational boundary, produced an irreversible outcome, and no intervention was triggered. This is the baseline condition: a fully ungoverned autonomous action.',
    realWorldCase: 'COMPAS recidivism scoring (ProPublica, 2016): an algorithm exceeded its sanctioned role, produced scores that could not be contested or reversed, with no intervention mechanism available to affected individuals.',
    question: 'In your organization, who holds the authority to stop a system operating in this condition? Is that person reachable before the outcome becomes permanent?'
  },

  // Delegation exceeded, boundary breached, reversibility failed, no intervention
  delegation_boundary_reversibility: {
    interpretation: 'The system exceeded its authority, breached its boundary, and produced a permanent outcome. No intervention was triggered. Governance failed at every layer simultaneously.',
    realWorldCase: 'Amazon warehouse algorithmic management (Dzieza, The Verge, 2020): workers were automatically disciplined and terminated by a system that exceeded human oversight, with no appeals mechanism that could reverse outcomes in real time.',
    question: 'If this outcome affected someone outside your organization, would they have any way to know it happened? Would you?'
  },

  // Delegation exceeded, no boundary, reversibility failed
  delegation_reversibility: {
    interpretation: 'The system operated beyond its authorized scope and produced a permanent outcome. No boundary enforcement caught the drift. The action cannot be undone.',
    realWorldCase: 'Electronic Visit Verification (EVV) surveillance (Mateescu via Chen and Metcalf; Cameron, MDRAI M3, 2025): care worker location tracking expanded beyond its stated purpose, producing permanent records used in ways recipients never consented to.',
    question: 'At what point does scope expansion become a governance failure? Who in your organization monitors for it?'
  },

  // Boundary breached, reversibility failed, no delegation issue
  boundary_reversibility: {
    interpretation: 'The system stayed within its delegated authority but crossed an operational boundary and produced an irreversible outcome. The boundary was visible but did not hold.',
    realWorldCase: 'Ofqual exam algorithm (UK, 2020): the system operated within its mandate but produced grade outcomes that could not be reversed before affecting university admissions, with no rollback mechanism available at scale.',
    question: 'Does your system have a rollback procedure? Has it been tested under operational conditions, or only in theory?'
  },

  // Only delegation exceeded
  delegation_only: {
    interpretation: 'The system exceeded its delegated authority, but boundary enforcement and reversibility mechanisms limited the damage. This is the recoverable version of authority drift.',
    realWorldCase: 'Google Health diabetic retinopathy screening (Thailand deployment): the system operated beyond its validated context, but clinical workflow protocols provided a human check that contained the scope of impact.',
    question: 'Your system has some governance structure. But who authorized the delegation scope it is currently operating within? Is that authorization documented?'
  },

  // Only boundary breached
  boundary_only: {
    interpretation: 'The system crossed an operational boundary. Delegation was appropriate and the outcome was reversible, but the perimeter was breached. Intervention contained it.',
    realWorldCase: 'Algorithmic trading flash crash (CFTC/SEC, 2010): automated systems crossed operational thresholds but circuit breakers (a boundary-intervention mechanism) allowed partial recovery.',
    question: 'Your boundary was breached but intervention fired. How long did that take? In your domain, is that fast enough?'
  },

  // Only reversibility failed
  reversibility_only: {
    interpretation: 'The system produced an irreversible outcome. Delegation was appropriate and no boundary was crossed, but the action cannot be undone. Permanence is the residual risk.',
    realWorldCase: 'SepsisWatch clinical decision support (Duke Health): recommendations were acted on before clinicians could assess them independently, creating care pathway decisions that were difficult to reverse without clinical harm.',
    question: 'Which actions in your system are irreversible? Are they classified that way before deployment, or discovered after harm occurs?'
  },

  // Nothing failed — all primitives held
  none_failed: {
    interpretation: 'All governance primitives held. The system operated within its delegated authority, respected its boundaries, produced reversible outcomes, and intervention capacity was available. This is the target configuration.',
    realWorldCase: 'IBM AI governance three-state framework (Simons, MDRAI M5, 2026): systems validated before deployment, monitored continuously, and retired when no longer fit for purpose — governance operating as designed.',
    question: 'Your configuration scored well. Now consider: who defined these boundaries? Were the people most affected by this system involved in setting them?'
  }
}

// ─── INSIGHT SELECTOR ────────────────────────────────────────────────────────
// Maps a runScenario() result to the correct insight key

export function selectInsight(result) {
  const { delegationExceeded, boundaryBreached, reversibilityFailed } = result

  if (!delegationExceeded && !boundaryBreached && !reversibilityFailed) return INSIGHTS.none_failed
  if (delegationExceeded && boundaryBreached && reversibilityFailed)    return INSIGHTS.all_failed
  if (delegationExceeded && !boundaryBreached && reversibilityFailed)   return INSIGHTS.delegation_reversibility
  if (!delegationExceeded && boundaryBreached && reversibilityFailed)   return INSIGHTS.boundary_reversibility
  if (delegationExceeded && boundaryBreached && !reversibilityFailed)   return INSIGHTS.delegation_boundary_reversibility
  if (delegationExceeded && !boundaryBreached && !reversibilityFailed)  return INSIGHTS.delegation_only
  if (!delegationExceeded && boundaryBreached && !reversibilityFailed)  return INSIGHTS.boundary_only
  if (!delegationExceeded && !boundaryBreached && reversibilityFailed)  return INSIGHTS.reversibility_only

  return INSIGHTS.none_failed
}