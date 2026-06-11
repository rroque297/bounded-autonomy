// ─── GOVERNANCE INSIGHTS ─────────────────────────────────────────────────────
// Multilingual. Each language mirrors the same 8 failure mode keys.
// Keys: all_failed, delegation_boundary_reversibility, delegation_reversibility,
//       boundary_reversibility, delegation_only, boundary_only,
//       reversibility_only, none_failed

const INSIGHTS_EN = {

  all_failed: {
    interpretation: 'Every governance primitive failed. The system exceeded its delegated authority, crossed its operational boundary, produced an irreversible outcome, and no intervention was triggered. This is the baseline condition: a fully ungoverned autonomous action.',
    realWorldCase: 'COMPAS recidivism scoring (ProPublica, 2016): an algorithm exceeded its sanctioned role, produced scores that could not be contested or reversed, with no intervention mechanism available to affected individuals.',
    question: 'In your organization, who holds the authority to stop a system operating in this condition? Is that person reachable before the outcome becomes permanent?'
  },

  delegation_boundary_reversibility: {
    interpretation: 'The system exceeded its authority, breached its boundary, and produced a permanent outcome. No intervention was triggered. Governance failed at every layer simultaneously.',
    realWorldCase: 'Amazon warehouse algorithmic management (Dzieza, The Verge, 2020): workers were automatically disciplined and terminated by a system that exceeded human oversight, with no appeals mechanism that could reverse outcomes in real time.',
    question: 'If this outcome affected someone outside your organization, would they have any way to know it happened? Would you?'
  },

  delegation_reversibility: {
    interpretation: 'The system operated beyond its authorized scope and produced a permanent outcome. No boundary enforcement caught the drift. The action cannot be undone.',
    realWorldCase: 'Electronic Visit Verification (EVV) surveillance (Mateescu via Chen and Metcalf; Cameron, MDRAI M3, 2025): care worker location tracking expanded beyond its stated purpose, producing permanent records used in ways recipients never consented to.',
    question: 'At what point does scope expansion become a governance failure? Who in your organization monitors for it?'
  },

  boundary_reversibility: {
    interpretation: 'The system stayed within its delegated authority but crossed an operational boundary and produced an irreversible outcome. The boundary was visible but did not hold.',
    realWorldCase: 'Ofqual exam algorithm (UK, 2020): the system operated within its mandate but produced grade outcomes that could not be reversed before affecting university admissions, with no rollback mechanism available at scale.',
    question: 'Does your system have a rollback procedure? Has it been tested under operational conditions, or only in theory?'
  },

  delegation_only: {
    interpretation: 'The system exceeded its delegated authority, but boundary enforcement and reversibility mechanisms limited the damage. This is the recoverable version of authority drift.',
    realWorldCase: 'Google Health diabetic retinopathy screening (Thailand deployment): the system operated beyond its validated context, but clinical workflow protocols provided a human check that contained the scope of impact.',
    question: 'Your system has some governance structure. But who authorized the delegation scope it is currently operating within? Is that authorization documented?'
  },

  boundary_only: {
    interpretation: 'The system crossed an operational boundary. Delegation was appropriate and the outcome was reversible, but the perimeter was breached. Intervention contained it.',
    realWorldCase: 'Algorithmic trading flash crash (CFTC/SEC, 2010): automated systems crossed operational thresholds but circuit breakers (a boundary-intervention mechanism) allowed partial recovery.',
    question: 'Your boundary was breached but intervention fired. How long did that take? In your domain, is that fast enough?'
  },

  reversibility_only: {
    interpretation: 'The system produced an irreversible outcome. Delegation was appropriate and no boundary was crossed, but the action cannot be undone. Permanence is the residual risk.',
    realWorldCase: 'SepsisWatch clinical decision support (Duke Health): recommendations were acted on before clinicians could assess them independently, creating care pathway decisions that were difficult to reverse without clinical harm.',
    question: 'Which actions in your system are irreversible? Are they classified that way before deployment, or discovered after harm occurs?'
  },

  none_failed: {
    interpretation: 'All governance primitives held. The system operated within its delegated authority, respected its boundaries, produced reversible outcomes, and intervention capacity was available. This is the target configuration.',
    realWorldCase: 'IBM AI governance three-state framework (Simons, MDRAI M5, 2026): systems validated before deployment, monitored continuously, and retired when no longer fit for purpose: governance operating as designed.',
    question: 'Your configuration scored well. Now consider: who defined these boundaries? Were the people most affected by this system involved in setting them?'
  }
}

const INSIGHTS_FR = {

  all_failed: {
    interpretation: 'Toutes les primitives de gouvernance ont échoué. Le système a dépassé son autorité déléguée, franchi sa limite opérationnelle, produit un résultat irréversible, et aucune intervention n\'a été déclenchée. Il s\'agit de la condition de référence: une action autonome totalement non gouvernée.',
    realWorldCase: 'Notation de récidive COMPAS (ProPublica, 2016): un algorithme a dépassé son rôle autorisé, produit des scores qui ne pouvaient être ni contestés ni inversés, sans mécanisme d\'intervention disponible pour les personnes concernées.',
    question: 'Dans votre organisation, qui détient l\'autorité pour arrêter un système fonctionnant dans cette condition? Cette personne est-elle joignable avant que le résultat ne devienne permanent?'
  },

  delegation_boundary_reversibility: {
    interpretation: 'Le système a dépassé son autorité, franchi sa limite et produit un résultat permanent. Aucune intervention n\'a été déclenchée. La gouvernance a échoué à chaque niveau simultanément.',
    realWorldCase: 'Gestion algorithmique des entrepôts Amazon (Dzieza, The Verge, 2020): des travailleurs ont été automatiquement sanctionnés et licenciés par un système dépassant la supervision humaine, sans mécanisme d\'appel pouvant inverser les résultats en temps réel.',
    question: 'Si ce résultat affectait quelqu\'un en dehors de votre organisation, aurait-il un moyen de savoir ce qui s\'est passé? Et vous?'
  },

  delegation_reversibility: {
    interpretation: 'Le système a opéré au-delà de son périmètre autorisé et produit un résultat permanent. Aucune application des limites n\'a détecté la dérive. L\'action ne peut être annulée.',
    realWorldCase: 'Surveillance EVV (Mateescu via Chen et Metcalf; Cameron, MDRAI M3, 2025): le suivi de localisation des travailleurs de soins a étendu sa portée au-delà de son objectif déclaré, produisant des enregistrements permanents utilisés de manières auxquelles les bénéficiaires n\'ont jamais consenti.',
    question: 'À quel moment l\'expansion du périmètre devient-elle un échec de gouvernance? Qui dans votre organisation surveille cela?'
  },

  boundary_reversibility: {
    interpretation: 'Le système est resté dans son autorité déléguée mais a franchi une limite opérationnelle et produit un résultat irréversible. La limite était visible mais n\'a pas tenu.',
    realWorldCase: 'Algorithme d\'examens Ofqual (Royaume-Uni, 2020): le système a opéré dans son mandat mais produit des résultats de notes qui ne pouvaient être inversés avant d\'affecter les admissions universitaires, sans mécanisme de retour arrière disponible à grande échelle.',
    question: 'Votre système dispose-t-il d\'une procédure de retour arrière? A-t-elle été testée dans des conditions opérationnelles, ou seulement en théorie?'
  },

  delegation_only: {
    interpretation: 'Le système a dépassé son autorité déléguée, mais les mécanismes d\'application des limites et de réversibilité ont limité les dommages. Il s\'agit de la version récupérable de la dérive d\'autorité.',
    realWorldCase: 'Dépistage de rétinopathie diabétique Google Health (déploiement en Thaïlande): le système a opéré au-delà de son contexte validé, mais les protocoles de flux clinique ont fourni un contrôle humain qui a contenu la portée de l\'impact.',
    question: 'Votre système dispose d\'une certaine structure de gouvernance. Mais qui a autorisé le périmètre de délégation dans lequel il opère actuellement? Cette autorisation est-elle documentée?'
  },

  boundary_only: {
    interpretation: 'Le système a franchi une limite opérationnelle. La délégation était appropriée et le résultat était réversible, mais le périmètre a été franchi. L\'intervention l\'a contenu.',
    realWorldCase: 'Flash crash des marchés financiers (CFTC/SEC, 2010): des systèmes automatisés ont franchi des seuils opérationnels mais des disjoncteurs (un mécanisme limite-intervention) ont permis une récupération partielle.',
    question: 'Votre limite a été franchie mais l\'intervention a fonctionné. Combien de temps cela a-t-il pris? Dans votre domaine, est-ce suffisamment rapide?'
  },

  reversibility_only: {
    interpretation: 'Le système a produit un résultat irréversible. La délégation était appropriée et aucune limite n\'a été franchie, mais l\'action ne peut être annulée. La permanence est le risque résiduel.',
    realWorldCase: 'Aide à la décision clinique SepsisWatch (Duke Health): des recommandations ont été appliquées avant que les cliniciens puissent les évaluer indépendamment, créant des décisions de parcours de soins difficiles à inverser sans préjudice clinique.',
    question: 'Quelles actions de votre système sont irréversibles? Sont-elles classifiées ainsi avant le déploiement, ou découvertes après qu\'un préjudice survient?'
  },

  none_failed: {
    interpretation: 'Toutes les primitives de gouvernance ont tenu. Le système a opéré dans son autorité déléguée, respecté ses limites, produit des résultats réversibles, et la capacité d\'intervention était disponible. Il s\'agit de la configuration cible.',
    realWorldCase: 'Cadre de gouvernance IA trois états IBM (Simons, MDRAI M5, 2026): systèmes validés avant déploiement, surveillés en continu, et retirés lorsqu\'ils ne sont plus adaptés à leur objectif: gouvernance fonctionnant comme prévu.',
    question: 'Votre configuration a bien scoré. Considérez maintenant: qui a défini ces limites? Les personnes les plus affectées par ce système ont-elles été impliquées dans leur définition?'
  }
}

const INSIGHTS_DE = {

  all_failed: {
    interpretation: 'Alle Governance-Primitive sind ausgefallen. Das System überschritt seine delegierte Autorität, durchbrach seine operative Grenze, produzierte ein irreversibles Ergebnis, und keine Intervention wurde ausgelöst. Dies ist der Basiszustand: eine vollständig ungesteuerte autonome Aktion.',
    realWorldCase: 'COMPAS Rückfallbewertung (ProPublica, 2016): ein Algorithmus überschritt seine genehmigte Rolle, produzierte Bewertungen, die weder angefochten noch rückgängig gemacht werden konnten, ohne verfügbaren Interventionsmechanismus für betroffene Personen.',
    question: 'Wer in Ihrer Organisation hat die Befugnis, ein System in diesem Zustand zu stoppen? Ist diese Person erreichbar, bevor das Ergebnis permanent wird?'
  },

  delegation_boundary_reversibility: {
    interpretation: 'Das System überschritt seine Autorität, durchbrach seine Grenze und produzierte ein permanentes Ergebnis. Keine Intervention wurde ausgelöst. Die Governance versagte auf jeder Ebene gleichzeitig.',
    realWorldCase: 'Amazon Lager-Algorithmus-Management (Dzieza, The Verge, 2020): Arbeiter wurden automatisch diszipliniert und entlassen durch ein System, das menschliche Aufsicht überschritt, ohne Berufungsmechanismus zur Echtzeit-Umkehrung von Ergebnissen.',
    question: 'Wenn dieses Ergebnis jemanden außerhalb Ihrer Organisation betreffen würde, hätte diese Person eine Möglichkeit zu erfahren, was passiert ist? Hätten Sie es?'
  },

  delegation_reversibility: {
    interpretation: 'Das System operierte jenseits seines genehmigten Bereichs und produzierte ein permanentes Ergebnis. Keine Grenzdurchsetzung erkannte die Drift. Die Aktion kann nicht rückgängig gemacht werden.',
    realWorldCase: 'EVV-Überwachung (Mateescu via Chen und Metcalf; Cameron, MDRAI M3, 2025): die Standortverfolgung von Pflegearbeitern wurde über ihren erklärten Zweck hinaus ausgeweitet, mit permanenten Aufzeichnungen verwendet auf Weisen, denen die Empfänger nie zugestimmt hatten.',
    question: 'Ab welchem Punkt wird Bereichsausweitung zu einem Governance-Versagen? Wer in Ihrer Organisation überwacht dies?'
  },

  boundary_reversibility: {
    interpretation: 'Das System blieb innerhalb seiner delegierten Autorität, überschritt aber eine operative Grenze und produzierte ein irreversibles Ergebnis. Die Grenze war sichtbar, hielt aber nicht stand.',
    realWorldCase: 'Ofqual Prüfungsalgorithmus (UK, 2020): das System operierte innerhalb seines Mandats, produzierte aber Benotungsergebnisse, die nicht vor der Auswirkung auf Universitätszulassungen rückgängig gemacht werden konnten, ohne verfügbaren Rollback-Mechanismus in großem Maßstab.',
    question: 'Verfügt Ihr System über ein Rollback-Verfahren? Wurde es unter operativen Bedingungen getestet, oder nur in der Theorie?'
  },

  delegation_only: {
    interpretation: 'Das System überschritt seine delegierte Autorität, aber Grenzdurchsetzungs- und Reversibilitätsmechanismen begrenzten den Schaden. Dies ist die wiederherstellbare Version der Autoritätsdrift.',
    realWorldCase: 'Google Health Diabetische Retinopathie-Screening (Thailand-Einsatz): das System operierte jenseits seines validierten Kontexts, aber klinische Workflow-Protokolle boten eine menschliche Kontrolle, die den Umfang der Auswirkungen begrenzte.',
    question: 'Ihr System hat eine gewisse Governance-Struktur. Aber wer hat den Delegationsbereich autorisiert, in dem es derzeit operiert? Ist diese Autorisierung dokumentiert?'
  },

  boundary_only: {
    interpretation: 'Das System überschritt eine operative Grenze. Die Delegation war angemessen und das Ergebnis war reversibel, aber der Perimeter wurde durchbrochen. Die Intervention enthielt es.',
    realWorldCase: 'Algorithmischer Handels-Flash-Crash (CFTC/SEC, 2010): automatisierte Systeme überschritten operative Schwellenwerte, aber Leistungsschalter (ein Grenz-Interventions-Mechanismus) ermöglichten eine teilweise Wiederherstellung.',
    question: 'Ihre Grenze wurde durchbrochen, aber die Intervention funktionierte. Wie lange hat das gedauert? In Ihrer Domäne: ist das schnell genug?'
  },

  reversibility_only: {
    interpretation: 'Das System produzierte ein irreversibles Ergebnis. Die Delegation war angemessen und keine Grenze wurde überschritten, aber die Aktion kann nicht rückgängig gemacht werden. Permanenz ist das Restrisiko.',
    realWorldCase: 'SepsisWatch klinische Entscheidungsunterstützung (Duke Health): Empfehlungen wurden umgesetzt, bevor Kliniker sie unabhängig beurteilen konnten, was zu Pfadentscheidungen führte, die ohne klinischen Schaden schwer umzukehren waren.',
    question: 'Welche Aktionen in Ihrem System sind irreversibel? Werden sie vor der Bereitstellung so klassifiziert, oder nach einem Schadensfall entdeckt?'
  },

  none_failed: {
    interpretation: 'Alle Governance-Primitive hielten stand. Das System operierte innerhalb seiner delegierten Autorität, respektierte seine Grenzen, produzierte reversible Ergebnisse, und Interventionskapazität war verfügbar. Dies ist die Zielkonfiguration.',
    realWorldCase: 'IBM KI-Governance Drei-Zustands-Framework (Simons, MDRAI M5, 2026): Systeme vor der Bereitstellung validiert, kontinuierlich überwacht und zurückgezogen, wenn sie nicht mehr zweckdienlich sind: Governance funktioniert wie vorgesehen.',
    question: 'Ihre Konfiguration hat gut abgeschnitten. Bedenken Sie nun: wer hat diese Grenzen definiert? Waren die von diesem System am stärksten betroffenen Personen an ihrer Festlegung beteiligt?'
  }
}

const INSIGHTS_ES = {

  all_failed: {
    interpretation: 'Todas las primitivas de gobernanza fallaron. El sistema superó su autoridad delegada, cruzó su límite operativo, produjo un resultado irreversible, y no se activó ninguna intervención. Esta es la condición de referencia: una acción autónoma completamente no gobernada.',
    realWorldCase: 'Puntuación de reincidencia COMPAS (ProPublica, 2016): un algoritmo superó su rol autorizado, produjo puntuaciones que no podían ser contestadas ni revertidas, sin mecanismo de intervención disponible para las personas afectadas.',
    question: '¿En su organización, quién tiene la autoridad para detener un sistema operando en esta condición? ¿Es esa persona accesible antes de que el resultado se vuelva permanente?'
  },

  delegation_boundary_reversibility: {
    interpretation: 'El sistema superó su autoridad, cruzó su límite y produjo un resultado permanente. No se activó ninguna intervención. La gobernanza falló en cada capa simultáneamente.',
    realWorldCase: 'Gestión algorítmica de almacenes Amazon (Dzieza, The Verge, 2020): trabajadores fueron automáticamente disciplinados y despedidos por un sistema que superó la supervisión humana, sin mecanismo de apelación que pudiera revertir resultados en tiempo real.',
    question: 'Si este resultado afectara a alguien fuera de su organización, ¿tendrían alguna manera de saber qué pasó? ¿Lo sabría usted?'
  },

  delegation_reversibility: {
    interpretation: 'El sistema operó más allá de su alcance autorizado y produjo un resultado permanente. Ninguna aplicación de límites detectó la deriva. La acción no puede deshacerse.',
    realWorldCase: 'Vigilancia EVV (Mateescu via Chen y Metcalf; Cameron, MDRAI M3, 2025): el seguimiento de ubicación de trabajadores de cuidado se expandió más allá de su propósito declarado, produciendo registros permanentes usados de maneras a las que los beneficiarios nunca consintieron.',
    question: '¿En qué momento la expansión del alcance se convierte en un fallo de gobernanza? ¿Quién en su organización lo monitorea?'
  },

  boundary_reversibility: {
    interpretation: 'El sistema permaneció dentro de su autoridad delegada pero cruzó un límite operativo y produjo un resultado irreversible. El límite era visible pero no se mantuvo.',
    realWorldCase: 'Algoritmo de exámenes Ofqual (Reino Unido, 2020): el sistema operó dentro de su mandato pero produjo resultados de calificaciones que no podían revertirse antes de afectar las admisiones universitarias, sin mecanismo de reversión disponible a escala.',
    question: '¿Tiene su sistema un procedimiento de reversión? ¿Ha sido probado en condiciones operativas, o solo en teoría?'
  },

  delegation_only: {
    interpretation: 'El sistema superó su autoridad delegada, pero los mecanismos de aplicación de límites y reversibilidad limitaron el daño. Esta es la versión recuperable de la deriva de autoridad.',
    realWorldCase: 'Detección de retinopatía diabética Google Health (despliegue en Tailandia): el sistema operó más allá de su contexto validado, pero los protocolos de flujo clínico proporcionaron una verificación humana que contuvo el alcance del impacto.',
    question: 'Su sistema tiene cierta estructura de gobernanza. Pero ¿quién autorizó el alcance de delegación en el que opera actualmente? ¿Está documentada esa autorización?'
  },

  boundary_only: {
    interpretation: 'El sistema cruzó un límite operativo. La delegación era apropiada y el resultado era reversible, pero el perímetro fue violado. La intervención lo contuvo.',
    realWorldCase: 'Flash crash de trading algorítmico (CFTC/SEC, 2010): sistemas automatizados cruzaron umbrales operativos pero interruptores de circuito (un mecanismo límite-intervención) permitieron una recuperación parcial.',
    question: 'Su límite fue violado pero la intervención funcionó. ¿Cuánto tardó? En su dominio, ¿es eso suficientemente rápido?'
  },

  reversibility_only: {
    interpretation: 'El sistema produjo un resultado irreversible. La delegación era apropiada y no se cruzó ningún límite, pero la acción no puede deshacerse. La permanencia es el riesgo residual.',
    realWorldCase: 'Soporte de decisión clínica SepsisWatch (Duke Health): las recomendaciones se actuaron antes de que los clínicos pudieran evaluarlas independientemente, creando decisiones de ruta de atención difíciles de revertir sin daño clínico.',
    question: '¿Qué acciones en su sistema son irreversibles? ¿Se clasifican así antes del despliegue, o se descubren después de que ocurre el daño?'
  },

  none_failed: {
    interpretation: 'Todas las primitivas de gobernanza se mantuvieron. El sistema operó dentro de su autoridad delegada, respetó sus límites, produjo resultados reversibles, y la capacidad de intervención estaba disponible. Esta es la configuración objetivo.',
    realWorldCase: 'Marco de gobernanza IA de tres estados IBM (Simons, MDRAI M5, 2026): sistemas validados antes del despliegue, monitoreados continuamente, y retirados cuando ya no son aptos para su propósito: gobernanza funcionando como fue diseñada.',
    question: 'Su configuración obtuvo buenos resultados. Ahora considere: ¿quién definió estos límites? ¿Estuvieron involucradas las personas más afectadas por este sistema en su definición?'
  }
}

// ─── LANGUAGE MAP ─────────────────────────────────────────────────────────────
const INSIGHTS_MAP = {
  en: INSIGHTS_EN,
  fr: INSIGHTS_FR,
  de: INSIGHTS_DE,
  es: INSIGHTS_ES
}

// ─── INSIGHT SELECTOR ────────────────────────────────────────────────────────
export function selectInsight(result, lang = 'en') {
  const { delegationExceeded, boundaryBreached, reversibilityFailed } = result
  const INSIGHTS = INSIGHTS_MAP[lang] || INSIGHTS_EN

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