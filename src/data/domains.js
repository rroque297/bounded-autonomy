// ─────────────────────────────────────────────────────────────────────────────
// domains.js — 12 domain contexts, fully translated in EN / FR / DE / ES
// ─────────────────────────────────────────────────────────────────────────────

export const DOMAINS = {

  abstract: {
    label: { en: 'Abstract', fr: 'Abstrait', de: 'Abstrakt', es: 'Abstracto' },
    description: {
      en: 'Domain-agnostic scenarios isolating governance structure. Intended for academic and technical audiences.',
      fr: 'Scénarios neutres isolant la structure de gouvernance. Destinés à un public académique et technique.',
      de: 'Domänenunabhängige Szenarien zur Isolierung der Governance-Struktur. Für akademische und technische Zielgruppen.',
      es: 'Escenarios neutros que aíslan la estructura de gobernanza. Dirigidos a audiencias académicas y técnicas.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                       desc:{ en:'Low-stakes routine action',           fr:'Action routinière à faible enjeu',                    de:'Routineaktion mit geringem Risiko',                          es:'Acción rutinaria de bajo riesgo' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Boundary-adjacent decision',          fr:'Décision à la limite du périmètre',                   de:'Grenznahe Entscheidung',                                     es:'Decisión en el límite del perímetro' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-stakes resource allocation',     fr:'Allocation de ressources à enjeu élevé',              de:'Ressourcenzuweisung mit hohem Risiko',                        es:'Asignación de recursos de alto riesgo' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible data deletion attempt',  fr:'Tentative de suppression irréversible de données',    de:'Versuch der irreversiblen Datenlöschung',                    es:'Intento de eliminación irreversible de datos' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading dependency trigger',        fr:'Déclencheur de dépendance en cascade',                de:'Kaskadierende Abhängigkeitsauslösung',                        es:'Desencadenante de dependencia en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Out-of-scope authority claim',        fr:"Revendication d'autorité hors périmètre",             de:'Autoritätsanspruch außerhalb des Geltungsbereichs',          es:'Reclamación de autoridad fuera de alcance' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Boundary violation attempt',          fr:'Tentative de violation des limites',                  de:'Grenzüberschreitungsversuch',                                es:'Intento de violación de límites' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-step irreversible sequence',    fr:'Séquence irréversible en plusieurs étapes',           de:'Mehrstufige irreversible Sequenz',                           es:'Secuencia irreversible de múltiples pasos' }},
    ],
  },

  healthcare: {
    label: { en:'Healthcare', fr:'Santé', de:'Gesundheit', es:'Sanidad' },
    description: {
      en: 'Clinical and administrative AI decisions in hospital and patient-care environments.',
      fr: "Décisions cliniques et administratives de l'IA dans les environnements hospitaliers et de soins aux patients.",
      de: 'Klinische und administrative KI-Entscheidungen in Krankenhaus- und Patientenversorgungsumgebungen.',
      es: 'Decisiones clínicas y administrativas de IA en entornos hospitalarios y de atención al paciente.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine appointment scheduling',            fr:'Planification de rendez-vous de routine',              de:'Routinemäßige Terminplanung',                                es:'Programación rutinaria de citas' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Dosage recommendation near threshold',      fr:'Recommandation de dosage proche du seuil',             de:'Dosierungsempfehlung nahe der Schwelle',                     es:'Recomendación de dosis cerca del umbral' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'ICU resource prioritisation',               fr:'Priorisation des ressources en soins intensifs',       de:'Ressourcenpriorisierung auf der Intensivstation',            es:'Priorización de recursos en UCI' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible surgical plan submission',     fr:"Soumission irréversible d'un plan chirurgical",        de:'Irreversible Einreichung eines Operationsplans',             es:'Envío irreversible de plan quirúrgico' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Medication interaction cascade',            fr:'Cascade interactions médicamenteuses',                 de:'Kaskade von Medikamentenwechselwirkungen',                   es:'Cascada de interacciones medicamentosas' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised record access attempt',        fr:'Tentative accès non autorisé aux dossiers',            de:'Unbefugter Zugriffsversuch auf Patientenakten',              es:'Intento de acceso no autorizado a registros' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Patient data purge attempt',                fr:'Tentative de suppression des données patient',         de:'Versuch der Patientendatenlöschung',                         es:'Intento de purga de datos del paciente' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-drug irreversible treatment order',   fr:'Ordonnance traitement irréversible multi-médicaments', de:'Irreversible Mehrmedikamenten-Behandlungsanordnung',         es:'Orden de tratamiento irreversible con múltiples fármacos' }},
    ],
  },

  finance: {
    label: { en:'Finance', fr:'Finance', de:'Finanzen', es:'Finanzas' },
    description: {
      en: 'Autonomous trading, lending, and risk-assessment decisions in financial services.',
      fr: "Décisions autonomes de trading, de prêt et d'évaluation des risques dans les services financiers.",
      de: 'Autonome Handels-, Kredit- und Risikobeurteilungsentscheidungen im Finanzdienstleistungsbereich.',
      es: 'Decisiones autónomas de trading, préstamos y evaluación de riesgos en servicios financieros.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine portfolio rebalance',              fr:'Rééquilibrage de portefeuille de routine',             de:'Routinemäßige Portfolio-Neugewichtung',                      es:'Reequilibrio rutinario de cartera' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Near-limit credit approval',              fr:'Approbation de crédit proche de la limite',            de:'Kreditgenehmigung nahe der Grenze',                         es:'Aprobación de crédito cerca del límite' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-value asset liquidation',            fr:"Liquidation d'actifs de grande valeur",                de:'Liquidation hochwertiger Vermögenswerte',                    es:'Liquidación de activos de alto valor' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible wire transfer execution',    fr:"Exécution irréversible d'un virement bancaire",        de:'Irreversible Ausführung einer Überweisung',                  es:'Ejecución irreversible de transferencia bancaria' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading margin call trigger',           fr:"Déclencheur d'appel de marge en cascade",              de:'Kaskadierende Margin-Call-Auslösung',                        es:'Desencadenante de llamada de margen en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised trading scope expansion',   fr:'Expansion non autorisée du périmètre de trading',     de:'Unbefugte Erweiterung des Handelsbereichs',                  es:'Expansión no autorizada del ámbito de trading' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Leveraged position boundary breach',     fr:'Violation de limite de position à effet de levier',   de:'Grenzverletzung bei gehebelter Position',                    es:'Violación de límite de posición apalancada' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-account irreversible reallocation', fr:'Réallocation irréversible multi-comptes',              de:'Irreversible Mehrkonten-Umverteilung',                       es:'Reasignación irreversible multi-cuenta' }},
    ],
  },

  legal: {
    label: { en:'Legal', fr:'Juridique', de:'Recht', es:'Legal' },
    description: {
      en: 'Contract analysis, case management, and compliance decisions in legal practice.',
      fr: 'Analyse de contrats, gestion de dossiers et décisions de conformité dans la pratique juridique.',
      de: 'Vertragsanalyse, Fallmanagement und Compliance-Entscheidungen in der Rechtspraxis.',
      es: 'Análisis de contratos, gestión de casos y decisiones de cumplimiento en la práctica legal.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine document classification',         fr:'Classification de documents de routine',               de:'Routinemäßige Dokumentenklassifizierung',                   es:'Clasificación rutinaria de documentos' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Near-threshold compliance flag',          fr:'Signal de conformité proche du seuil',                 de:'Compliance-Flag nahe der Schwelle',                         es:'Alerta de cumplimiento cerca del umbral' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-stakes contract authorisation',      fr:'Autorisation de contrat à enjeu élevé',                de:'Vertragsautorisierung mit hohem Risiko',                    es:'Autorización de contrato de alto riesgo' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible filing submission',          fr:'Soumission irréversible de dossier',                   de:'Irreversible Einreichung von Unterlagen',                   es:'Presentación irreversible de expediente' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading precedent application',        fr:'Application de précédent en cascade',                  de:'Kaskadierende Präzedenzfallanwendung',                      es:'Aplicación de precedente en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised legal scope expansion',     fr:'Expansion non autorisée du périmètre juridique',      de:'Unbefugte Erweiterung des Rechtsbereichs',                  es:'Expansión no autorizada del ámbito legal' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Privilege boundary violation attempt',   fr:'Tentative de violation des limites de privilège',     de:'Versuch der Verletzung von Privilegiengrenzen',             es:'Intento de violación de límites de privilegio' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-party irreversible agreement execution', fr:'Exécution irréversible accord multi-parties',        de:'Irreversible Mehrparteien-Vertragsausführung',              es:'Ejecución irreversible de acuerdo multipartes' }},
    ],
  },

  education: {
    label: { en:'Education', fr:'Éducation', de:'Bildung', es:'Educación' },
    description: {
      en: 'Personalised learning, assessment, and institutional decisions in academic settings.',
      fr: 'Apprentissage personnalisé, évaluation et décisions institutionnelles dans les milieux académiques.',
      de: 'Personalisiertes Lernen, Bewertung und institutionelle Entscheidungen im akademischen Umfeld.',
      es: 'Aprendizaje personalizado, evaluación y decisiones institucionales en entornos académicos.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine grade recording',                 fr:'Enregistrement de notes de routine',                   de:'Routinemäßige Notenerfassung',                              es:'Registro rutinario de calificaciones' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Near-threshold performance flag',         fr:'Signal de performance proche du seuil',                de:'Leistungs-Flag nahe der Schwelle',                          es:'Alerta de rendimiento cerca del umbral' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-stakes admissions decision',         fr:'Décision d\'admission à enjeu élevé',                  de:'Zulassungsentscheidung mit hohem Risiko',                   es:'Decisión de admisión de alto riesgo' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible enrolment cancellation',     fr:'Annulation irréversible d\'inscription',               de:'Irreversible Stornierung der Einschreibung',                es:'Cancelación irreversible de matrícula' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading curriculum dependency trigger', fr:'Déclencheur de dépendance curriculaire en cascade',   de:'Kaskadierende Lehrplan-Abhängigkeitsauslösung',             es:'Desencadenante de dependencia curricular en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised access to student records',  fr:'Accès non autorisé aux dossiers étudiants',           de:'Unbefugter Zugriff auf Studentenakten',                     es:'Acceso no autorizado a registros estudiantiles' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Academic record boundary violation',     fr:'Violation des limites du dossier académique',          de:'Grenzverletzung bei akademischen Unterlagen',               es:'Violación de límites de expediente académico' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-student irreversible data action',  fr:'Action irréversible sur données multi-étudiants',     de:'Irreversible Datenaktion für mehrere Studenten',             es:'Acción irreversible de datos multi-estudiante' }},
    ],
  },

  logistics: {
    label: { en:'Logistics', fr:'Logistique', de:'Logistik', es:'Logística' },
    description: {
      en: 'Supply chain, routing, and inventory decisions in autonomous logistics systems.',
      fr: "Décisions de chaîne d'approvisionnement, de routage et d'inventaire dans les systèmes logistiques autonomes.",
      de: 'Lieferketten-, Routing- und Bestandsentscheidungen in autonomen Logistiksystemen.',
      es: 'Decisiones de cadena de suministro, enrutamiento e inventario en sistemas logísticos autónomos.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine delivery route optimisation',     fr:'Optimisation d\'itinéraire de livraison de routine',   de:'Routinemäßige Lieferroutenoptimierung',                     es:'Optimización rutinaria de ruta de entrega' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Near-capacity warehouse allocation',      fr:'Allocation d\'entrepôt proche de la capacité',         de:'Lagerzuweisung nahe der Kapazitätsgrenze',                  es:'Asignación de almacén cerca de la capacidad' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-value shipment rerouting',           fr:'Réacheminement d\'expédition de grande valeur',        de:'Umleitung einer hochwertigen Sendung',                      es:'Reencaminamiento de envío de alto valor' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible supplier contract execution', fr:'Exécution irréversible de contrat fournisseur',       de:'Irreversible Ausführung eines Lieferantenvertrags',          es:'Ejecución irreversible de contrato con proveedor' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading inventory dependency trigger',  fr:'Déclencheur de dépendance inventaire en cascade',     de:'Kaskadierende Lagerbestandsabhängigkeitsauslösung',          es:'Desencadenante de dependencia de inventario en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised carrier scope expansion',   fr:'Expansion non autorisée du périmètre transporteur',   de:'Unbefugte Erweiterung des Spediteurbereichs',               es:'Expansión no autorizada del ámbito de transportista' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Fleet boundary violation attempt',        fr:'Tentative de violation des limites de flotte',         de:'Versuch der Flottengrenzenverletzung',                      es:'Intento de violación de límites de flota' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-region irreversible stock reallocation', fr:'Réallocation irréversible de stock multi-région',    de:'Irreversible Mehrregionen-Lagerbestandsumverteilung',        es:'Reasignación irreversible de stock multi-región' }},
    ],
  },

  publicPolicy: {
    label: { en:'Public Policy', fr:'Politique publique', de:'Öffentliche Politik', es:'Política pública' },
    description: {
      en: 'Civic resource allocation, regulatory enforcement, and government service decisions.',
      fr: 'Allocation de ressources civiques, application réglementaire et décisions de services gouvernementaux.',
      de: 'Zivile Ressourcenzuweisung, regulatorische Durchsetzung und Regierungsdienstleistungsentscheidungen.',
      es: 'Asignación de recursos cívicos, aplicación regulatoria y decisiones de servicios gubernamentales.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine public communication draft',      fr:'Projet de communication publique de routine',          de:'Routinemäßiger Entwurf einer öffentlichen Mitteilung',      es:'Borrador rutinario de comunicación pública' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Near-threshold policy flag',              fr:'Signal de politique proche du seuil',                  de:'Richtlinien-Flag nahe der Schwelle',                        es:'Alerta de política cerca del umbral' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-stakes budget reallocation',         fr:'Réallocation budgétaire à enjeu élevé',                de:'Haushaltsumlage mit hohem Risiko',                          es:'Reasignación presupuestaria de alto riesgo' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible regulatory submission',      fr:'Soumission réglementaire irréversible',                de:'Irreversible regulatorische Einreichung',                   es:'Presentación regulatoria irreversible' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading policy dependency trigger',    fr:'Déclencheur de dépendance politique en cascade',      de:'Kaskadierende Richtlinienabhängigkeitsauslösung',            es:'Desencadenante de dependencia de política en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised mandate scope expansion',   fr:'Expansion non autorisée du périmètre de mandat',      de:'Unbefugte Erweiterung des Mandatsbereichs',                 es:'Expansión no autorizada del ámbito de mandato' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Public record boundary violation attempt', fr:'Tentative de violation des limites des archives publiques', de:'Versuch der Verletzung öffentlicher Aufzeichnungsgrenzen', es:'Intento de violación de límites de registros públicos' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-agency irreversible policy execution', fr:'Exécution irréversible de politique multi-agences',  de:'Irreversible Mehrfachbehörden-Richtlinienausführung',        es:'Ejecución irreversible de política multi-agencia' }},
    ],
  },

  cybersecurity: {
    label: { en:'Cybersecurity', fr:'Cybersécurité', de:'Cybersicherheit', es:'Ciberseguridad' },
    description: {
      en: 'Threat detection, incident response, and access control in autonomous security systems.',
      fr: "Détection des menaces, réponse aux incidents et contrôle d'accès dans les systèmes de sécurité autonomes.",
      de: 'Bedrohungserkennung, Reaktion auf Vorfälle und Zugangskontrolle in autonomen Sicherheitssystemen.',
      es: 'Detección de amenazas, respuesta a incidentes y control de acceso en sistemas de seguridad autónomos.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine security log review',             fr:'Examen de journal de sécurité de routine',             de:'Routinemäßige Sicherheitsprotokollprüfung',                 es:'Revisión rutinaria de registro de seguridad' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Near-threshold anomaly flag',             fr:'Signal d\'anomalie proche du seuil',                   de:'Anomalie-Flag nahe der Schwelle',                           es:'Alerta de anomalía cerca del umbral' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-stakes access privilege escalation', fr:'Escalade de privilèges d\'accès à enjeu élevé',        de:'Zugriffsprivileg-Eskalation mit hohem Risiko',              es:'Escalada de privilegios de acceso de alto riesgo' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible system lockout execution',   fr:'Exécution irréversible de verrouillage système',      de:'Irreversible Systemsperrausführung',                        es:'Ejecución irreversible de bloqueo del sistema' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading firewall rule trigger',         fr:'Déclencheur de règle pare-feu en cascade',             de:'Kaskadierende Firewall-Regelauslösung',                     es:'Desencadenante de regla de firewall en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised network scope expansion',   fr:'Expansion non autorisée du périmètre réseau',         de:'Unbefugte Erweiterung des Netzwerkbereichs',                es:'Expansión no autorizada del ámbito de red' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Security perimeter boundary violation',  fr:'Violation du périmètre de sécurité',                   de:'Verletzung des Sicherheitsperimeters',                      es:'Violación del perímetro de seguridad' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-system irreversible access revocation', fr:'Révocation d\'accès irréversible multi-système',     de:'Irreversible Mehrfachsystem-Zugangssperrung',               es:'Revocación irreversible de acceso multi-sistema' }},
    ],
  },

  humanResources: {
    label: { en:'Human Resources', fr:'Ressources humaines', de:'Personalwesen', es:'Recursos humanos' },
    description: {
      en: 'Hiring, performance assessment, and workforce decisions in AI-assisted HR systems.',
      fr: "Recrutement, évaluation des performances et décisions sur la main-d'œuvre dans les systèmes RH assistés par IA.",
      de: 'Einstellungs-, Leistungsbeurteilungs- und Personalentscheidungen in KI-gestützten HR-Systemen.',
      es: 'Contratación, evaluación del rendimiento y decisiones de personal en sistemas de RR.HH. asistidos por IA.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine employee record update',          fr:'Mise à jour de dossier employé de routine',            de:'Routinemäßige Mitarbeiterakte-Aktualisierung',              es:'Actualización rutinaria de registro de empleado' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Near-threshold performance review flag',  fr:'Signal d\'évaluation de performance proche du seuil', de:'Leistungsbeurteilungs-Flag nahe der Schwelle',              es:'Alerta de evaluación de rendimiento cerca del umbral' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-stakes compensation adjustment',    fr:'Ajustement de rémunération à enjeu élevé',             de:'Vergütungsanpassung mit hohem Risiko',                      es:'Ajuste de compensación de alto riesgo' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible termination execution',      fr:'Exécution irréversible de licenciement',               de:'Irreversible Kündigungsausführung',                         es:'Ejecución irreversible de despido' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading leave policy trigger',         fr:'Déclencheur de politique de congé en cascade',        de:'Kaskadierende Urlaubsrichtlinienauslösung',                 es:'Desencadenante de política de permisos en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised personnel scope expansion', fr:'Expansion non autorisée du périmètre du personnel',   de:'Unbefugte Erweiterung des Personalbereichs',               es:'Expansión no autorizada del ámbito de personal' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Employee data boundary violation attempt', fr:'Tentative de violation des limites des données employés', de:'Versuch der Mitarbeiterdaten-Grenzverletzung',            es:'Intento de violación de límites de datos de empleados' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-employee irreversible data action', fr:'Action irréversible sur données multi-employés',      de:'Irreversible Datenaktion für mehrere Mitarbeiter',          es:'Acción irreversible de datos multi-empleado' }},
    ],
  },

  environment: {
    label: { en:'Environment', fr:'Environnement', de:'Umwelt', es:'Medio ambiente' },
    description: {
      en: 'Resource management, emissions monitoring, and conservation decisions in environmental AI.',
      fr: "Gestion des ressources, surveillance des émissions et décisions de conservation dans l'IA environnementale.",
      de: 'Ressourcenmanagement, Emissionsüberwachung und Naturschutzentscheidungen in der Umwelt-KI.',
      es: 'Gestión de recursos, monitoreo de emisiones y decisiones de conservación en IA ambiental.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine emissions data recording',        fr:'Enregistrement de données d\'émissions de routine',   de:'Routinemäßige Emissionsdatenerfassung',                     es:'Registro rutinario de datos de emisiones' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Near-threshold pollution flag',           fr:'Signal de pollution proche du seuil',                  de:'Verschmutzungs-Flag nahe der Schwelle',                     es:'Alerta de contaminación cerca del umbral' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-stakes resource extraction approval', fr:'Approbation d\'extraction de ressources à enjeu élevé', de:'Ressourcengewinnungsgenehmigung mit hohem Risiko',       es:'Aprobación de extracción de recursos de alto riesgo' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible land use change execution',  fr:'Exécution irréversible de changement d\'utilisation des terres', de:'Irreversible Landnutzungsänderungsausführung',       es:'Ejecución irreversible de cambio de uso del suelo' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading environmental dependency trigger', fr:'Déclencheur de dépendance environnementale en cascade', de:'Kaskadierende Umweltabhängigkeitsauslösung',            es:'Desencadenante de dependencia ambiental en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised environmental scope expansion', fr:'Expansion non autorisée du périmètre environnemental', de:'Unbefugte Erweiterung des Umweltbereichs',              es:'Expansión no autorizada del ámbito ambiental' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Protected zone boundary violation attempt', fr:'Tentative de violation des limites de zone protégée', de:'Versuch der Schutzzonengrenzverletzung',                    es:'Intento de violación de límites de zona protegida' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-region irreversible ecosystem action', fr:'Action irréversible sur écosystème multi-région',    de:'Irreversible Mehrregionen-Ökosystemaktion',                 es:'Acción irreversible de ecosistema multi-región' }},
    ],
  },

  media: {
    label: { en:'Media', fr:'Médias', de:'Medien', es:'Medios' },
    description: {
      en: 'Content moderation, recommendation, and publishing decisions in AI-driven media platforms.',
      fr: 'Modération de contenu, recommandations et décisions de publication sur les plateformes médiatiques pilotées par IA.',
      de: 'Inhaltsmoderation, Empfehlungen und Veröffentlichungsentscheidungen auf KI-gesteuerten Medienplattformen.',
      es: 'Moderación de contenido, recomendaciones y decisiones de publicación en plataformas de medios impulsadas por IA.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine content metadata update',         fr:'Mise à jour de métadonnées de contenu de routine',    de:'Routinemäßige Inhaltsmetadaten-Aktualisierung',             es:'Actualización rutinaria de metadatos de contenido' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Near-threshold content moderation flag',  fr:'Signal de modération de contenu proche du seuil',     de:'Inhaltsmoderation-Flag nahe der Schwelle',                  es:'Alerta de moderación de contenido cerca del umbral' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-stakes content distribution decision', fr:'Décision de distribution de contenu à enjeu élevé',  de:'Inhaltsverteilungsentscheidung mit hohem Risiko',           es:'Decisión de distribución de contenido de alto riesgo' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible content removal execution',  fr:'Exécution irréversible de suppression de contenu',    de:'Irreversible Inhaltsentfernungsausführung',                 es:'Ejecución irreversible de eliminación de contenido' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading recommendation algorithm trigger', fr:'Déclencheur d\'algorithme de recommandation en cascade', de:'Kaskadierende Empfehlungsalgorithmus-Auslösung',         es:'Desencadenante de algoritmo de recomendación en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised publishing scope expansion', fr:'Expansion non autorisée du périmètre de publication', de:'Unbefugte Erweiterung des Veröffentlichungsbereichs',       es:'Expansión no autorizada del ámbito de publicación' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Platform boundary violation attempt',    fr:'Tentative de violation des limites de la plateforme',  de:'Versuch der Plattformgrenzverletzung',                      es:'Intento de violación de límites de plataforma' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-platform irreversible content action', fr:'Action irréversible sur contenu multi-plateforme',   de:'Irreversible Mehrplattform-Inhaltsaktion',                  es:'Acción irreversible de contenido multi-plataforma' }},
    ],
  },

  infrastructure: {
    label: { en:'Infrastructure', fr:'Infrastructure', de:'Infrastruktur', es:'Infraestructura' },
    description: {
      en: 'Operational decisions in AI-managed energy, water, and urban systems.',
      fr: "Décisions opérationnelles dans les systèmes d'énergie, d'eau et urbains gérés par IA.",
      de: 'Betriebliche Entscheidungen in KI-gesteuerten Energie-, Wasser- und Stadtsystemen.',
      es: 'Decisiones operativas en sistemas de energía, agua y urbanos gestionados por IA.',
    },
    scenarios: [
      { id:1, delegationRequired:'low',    boundaryPressure:'low',    reversibilityWindow:'wide',     sociotechnicalRisk: null,                      desc:{ en:'Routine system health check',             fr:'Contrôle de santé système de routine',                 de:'Routinemäßige Systemzustandsprüfung',                       es:'Verificación rutinaria de salud del sistema' }},
      { id:2, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Near-threshold capacity flag',            fr:'Signal de capacité proche du seuil',                   de:'Kapazitäts-Flag nahe der Schwelle',                         es:'Alerta de capacidad cerca del umbral' }},
      { id:3, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'High-stakes network rerouting decision',  fr:'Décision de reroutage réseau à enjeu élevé',           de:'Netzwerkumleitung-Entscheidung mit hohem Risiko',           es:'Decisión de reencaminamiento de red de alto riesgo' }},
      { id:4, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'governance_tempo',         desc:{ en:'Irreversible infrastructure decommission', fr:'Désaffectation irréversible d\'infrastructure',       de:'Irreversible Infrastrukturstilllegung',                     es:'Desmantelamiento irreversible de infraestructura' }},
      { id:5, delegationRequired:'medium', boundaryPressure:'medium', reversibilityWindow:'moderate', sociotechnicalRisk: 'oversight_erosion',        desc:{ en:'Cascading system dependency trigger',    fr:'Déclencheur de dépendance système en cascade',        de:'Kaskadierende Systemabhängigkeitsauslösung',                es:'Desencadenante de dependencia del sistema en cascada' }},
      { id:6, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'moderate', sociotechnicalRisk: 'delegation_opacity',       desc:{ en:'Unauthorised infrastructure scope expansion', fr:'Expansion non autorisée du périmètre d\'infrastructure', de:'Unbefugte Erweiterung des Infrastrukturbereichs',        es:'Expansión no autorizada del ámbito de infraestructura' }},
      { id:7, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'accountability_diffusion', desc:{ en:'Critical system boundary violation attempt', fr:'Tentative de violation des limites système critique', de:'Versuch der Verletzung kritischer Systemgrenzen',           es:'Intento de violación de límites de sistema crítico' }},
      { id:8, delegationRequired:'high',   boundaryPressure:'strong', reversibilityWindow:'narrow',   sociotechnicalRisk: 'consent_displacement',     desc:{ en:'Multi-system irreversible shutdown execution', fr:'Exécution irréversible d\'arrêt multi-système',      de:'Irreversible Mehrfachsystem-Abschaltungsausführung',        es:'Ejecución irreversible de apagado multi-sistema' }},
    ],
  },

}

export const DOMAIN_KEYS = [
  'abstract','healthcare','finance','legal','education',
  'logistics','publicPolicy','cybersecurity','humanResources',
  'environment','media','infrastructure',
]