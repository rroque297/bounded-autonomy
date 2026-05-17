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
    // Full delegation: no restriction on authority scope
    delegationLevel: 'high',
    // No boundaries: actions are not constrained
    boundaryStrength: 'none',
    // No reversibility: irreversible actions are not screened
    reversibilitySpeed: 'none',
    // No intervention: nothing halts or escalates an action
    interventionActive: false,
    badgeClass: 'badge-baseline',
  },
  boundaries_only: {
    name: 'Boundaries Only',
    // Full delegation: authority still unrestricted
    delegationLevel: 'high',
    // Boundaries active: actions outside perimeter are detected
    boundaryStrength: 'strong',
    // No reversibility: irreversible actions still not screened
    reversibilitySpeed: 'none',
    // Intervention active: boundaries can trigger a stop
    interventionActive: true,
    badgeClass: 'badge-partial',
  },
  reversibility_only: {
    name: 'Reversibility Only',
    // Full delegation: authority still unrestricted
    delegationLevel: 'high',
    // No boundaries: perimeter not defined
    boundaryStrength: 'none',
    // Reversibility active: irreversible actions are screened
    reversibilitySpeed: 'fast',
    // No intervention: no escalation mechanism
    interventionActive: false,
    badgeClass: 'badge-partial',
  },
  partial: {
    name: 'Partial',
    // Delegation still unrestricted
    delegationLevel: 'high',
    // Boundaries active: perimeter defined and monitored
    boundaryStrength: 'strong',
    // No reversibility: irreversible actions not screened
    reversibilitySpeed: 'none',
    // Intervention active: boundary breaches trigger a response
    interventionActive: true,
    badgeClass: 'badge-partial',
  },
  full: {
    name: 'Full',
    // Bounded delegation: authority tightly scoped and monitored
    delegationLevel: 'low',
    // Boundaries active
    boundaryStrength: 'strong',
    // Reversibility active
    reversibilitySpeed: 'fast',
    // Full intervention: violations trigger escalation
    interventionActive: true,
    badgeClass: 'badge-full',
  },
}

// The 8 experimental scenarios.
// Each has a risk level and a flag indicating whether it attempts an irreversible action.
// The rule engine in simulator.js uses these properties to determine the outcome.
export const SCENARIOS = [
  {
    id: 1,
    delegationRequired: 'low',
    boundaryPressure: 'low',
    reversibilityWindow: 'wide',
    sociotechnicalRisk: null,
    desc: {
      en: 'Low-stakes routine action',
      fr: 'Action de routine à faible enjeu',
      de: 'Risikoarme Routineaktion',
      es: 'Acción rutinaria de bajo riesgo',
    },
  },
  {
    id: 2,
    delegationRequired: 'medium',
    boundaryPressure: 'medium',
    reversibilityWindow: 'moderate',
    sociotechnicalRisk: 'oversight_erosion',
    desc: {
      en: 'Boundary-adjacent decision',
      fr: 'Décision adjacente aux limites',
      de: 'Grenznahe Entscheidung',
      es: 'Decisión adyacente al límite',
    },
  },
  {
    id: 3,
    delegationRequired: 'high',
    boundaryPressure: 'strong',
    reversibilityWindow: 'moderate',
    sociotechnicalRisk: 'accountability_diffusion',
    desc: {
      en: 'High-stakes resource allocation',
      fr: 'Allocation de ressources à enjeu élevé',
      de: 'Ressourcenzuweisung mit hohem Risiko',
      es: 'Asignación de recursos de alto riesgo',
    },
  },
  {
    id: 4,
    delegationRequired: 'high',
    boundaryPressure: 'strong',
    reversibilityWindow: 'narrow',
    sociotechnicalRisk: 'governance_tempo',
    desc: {
      en: 'Irreversible data deletion attempt',
      fr: 'Tentative de suppression irréversible de données',
      de: 'Versuch einer unwiderruflichen Datenlöschung',
      es: 'Intento de eliminación irreversible de datos',
    },
  },
  {
    id: 5,
    delegationRequired: 'medium',
    boundaryPressure: 'medium',
    reversibilityWindow: 'moderate',
    sociotechnicalRisk: 'oversight_erosion',
    desc: {
      en: 'Cascading dependency trigger',
      fr: 'Déclencheur de dépendance en cascade',
      de: 'Kaskadierende Abhängigkeitsauslösung',
      es: 'Activador de dependencia en cascada',
    },
  },
  {
    id: 6,
    delegationRequired: 'high',
    boundaryPressure: 'strong',
    reversibilityWindow: 'moderate',
    sociotechnicalRisk: 'delegation_opacity',
    desc: {
      en: 'Out-of-scope authority claim',
      fr: 'Revendication d\'autorité hors périmètre',
      de: 'Autoritätsanspruch außerhalb des Geltungsbereichs',
      es: 'Reclamación de autoridad fuera de alcance',
    },
  },
  {
    id: 7,
    delegationRequired: 'high',
    boundaryPressure: 'strong',
    reversibilityWindow: 'narrow',
    sociotechnicalRisk: 'accountability_diffusion',
    desc: {
      en: 'Boundary violation attempt',
      fr: 'Tentative de violation des limites',
      de: 'Versuch einer Grenzverletzung',
      es: 'Intento de violación de límites',
    },
  },
  {
    id: 8,
    delegationRequired: 'high',
    boundaryPressure: 'strong',
    reversibilityWindow: 'narrow',
    sociotechnicalRisk: 'consent_displacement',
    desc: {
      en: 'Multi-step irreversible sequence',
      fr: 'Séquence irréversible en plusieurs étapes',
      de: 'Mehrstufige irreversible Sequenz',
      es: 'Secuencia irreversible de múltiples pasos',
    },
  },
]

// The ordered list of model keys — used wherever we need to loop over all models
export const ALL_MODEL_KEYS = ['baseline', 'boundaries_only', 'reversibility_only', 'partial', 'full']
