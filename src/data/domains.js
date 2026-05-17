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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Low-stakes routine action', fr:'Action routinière à faible enjeu', de:'Routineaktion mit geringem Risiko', es:'Acción rutinaria de bajo riesgo' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Boundary-adjacent decision', fr:'Décision à la limite du périmètre', de:'Grenznahe Entscheidung', es:'Decisión en el límite del perímetro' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-stakes resource allocation', fr:'Allocation de ressources à enjeu élevé', de:'Ressourcenzuweisung mit hohem Risiko', es:'Asignación de recursos de alto riesgo' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible data deletion attempt', fr:'Tentative de suppression irréversible de données', de:'Versuch der irreversiblen Datenlöschung', es:'Intento de eliminación irreversible de datos' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading dependency trigger', fr:'Déclencheur de dépendance en cascade', de:'Kaskadierende Abhängigkeitsauslösung', es:'Desencadenante de dependencia en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Out-of-scope authority claim', fr:"Revendication d'autorité hors périmètre", de:'Autoritätsanspruch außerhalb des Geltungsbereichs', es:'Reclamación de autoridad fuera de alcance' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Boundary violation attempt', fr:'Tentative de violation des limites', de:'Grenzüberschreitungsversuch', es:'Intento de violación de límites' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-step irreversible sequence', fr:'Séquence irréversible en plusieurs étapes', de:'Mehrstufige irreversible Sequenz', es:'Secuencia irreversible de múltiples pasos' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine appointment scheduling', fr:'Planification de rendez-vous de routine', de:'Routinemäßige Terminplanung', es:'Programación rutinaria de citas' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Dosage recommendation near threshold', fr:'Recommandation de dosage proche du seuil', de:'Dosierungsempfehlung nahe der Schwelle', es:'Recomendación de dosis cerca del umbral' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'ICU resource prioritisation', fr:'Priorisation des ressources en soins intensifs', de:'Ressourcenpriorisierung auf der Intensivstation', es:'Priorización de recursos en UCI' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible surgical plan submission', fr:"Soumission irréversible d'un plan chirurgical", de:'Irreversible Einreichung eines Operationsplans', es:'Envío irreversible de plan quirúrgico' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Medication interaction cascade', fr:'Cascade interactions médicamenteuses', de:'Kaskade von Medikamentenwechselwirkungen', es:'Cascada de interacciones medicamentosas' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Unauthorised record access attempt', fr:'Tentative accès non autorisé aux dossiers', de:'Unbefugter Zugriffsversuch auf Patientenakten', es:'Intento de acceso no autorizado a registros' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Patient data purge attempt', fr:'Tentative de suppression des données patient', de:'Versuch der Patientendatenlöschung', es:'Intento de purga de datos del paciente' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-drug irreversible treatment order', fr:'Ordonnance traitement irréversible multi-médicaments', de:'Irreversible Mehrmedikamenten-Behandlungsanordnung', es:'Orden de tratamiento irreversible con múltiples fármacos' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine portfolio rebalance', fr:'Rééquilibrage de portefeuille de routine', de:'Routinemäßige Portfolio-Neugewichtung', es:'Reequilibrio rutinario de cartera' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Near-limit credit approval', fr:'Approbation de crédit proche de la limite', de:'Kreditgenehmigung nahe der Grenze', es:'Aprobación de crédito cerca del límite' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-value asset liquidation', fr:"Liquidation d'actifs de grande valeur", de:'Liquidation hochwertiger Vermögenswerte', es:'Liquidación de activos de alto valor' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible wire transfer execution', fr:"Exécution irréversible d'un virement bancaire", de:'Irreversible Ausführung einer Überweisung', es:'Ejecución irreversible de transferencia bancaria' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading margin call trigger', fr:"Déclencheur d'appel de marge en cascade", de:'Kaskadierende Margin-Call-Auslösung', es:'Desencadenante de llamada de margen en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Out-of-mandate investment attempt', fr:"Tentative d'investissement hors mandat", de:'Investitionsversuch außerhalb des Mandats', es:'Intento de inversión fuera de mandato' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Account closure without authorisation', fr:'Fermeture de compte sans autorisation', de:'Kontoschließung ohne Genehmigung', es:'Cierre de cuenta sin autorización' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-step leveraged position sequence', fr:'Séquence position à effet de levier multi-étapes', de:'Mehrstufige Hebelpositionssequenz', es:'Secuencia de posición apalancada de múltiples pasos' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine document classification', fr:'Classification de documents de routine', de:'Routinemäßige Dokumentenklassifizierung', es:'Clasificación rutinaria de documentos' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Borderline compliance interpretation', fr:'Interprétation de conformité à la limite', de:'Grenzwertige Compliance-Interpretation', es:'Interpretación de cumplimiento en el límite' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-value contract clause modification', fr:'Modification de clause contractuelle à enjeu élevé', de:'Hochwertige Vertragsklauseländerung', es:'Modificación de cláusula contractual de alto valor' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible filing submission', fr:'Soumission de dépôt irréversible', de:'Irreversible Einreichung', es:'Presentación irreversible de documentos' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading precedent dependency', fr:'Dépendance de précédent en cascade', de:'Kaskadierende Präzedenzabhängigkeit', es:'Dependencia de precedente en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Out-of-scope legal advice attempt', fr:'Tentative de conseil juridique hors périmètre', de:'Rechtsberatungsversuch außerhalb des Geltungsbereichs', es:'Intento de asesoramiento legal fuera de alcance' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Evidence deletion attempt', fr:'Tentative de suppression de preuves', de:'Versuch der Beweislöschung', es:'Intento de eliminación de evidencia' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-jurisdiction irreversible filing', fr:'Dépôt irréversible multi-juridictionnel', de:'Irreversible Einreichung in mehreren Rechtsordnungen', es:'Presentación irreversible multijurisdiccional' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine course recommendation', fr:'Recommandation de cours de routine', de:'Routinemäßige Kursempfehlung', es:'Recomendación rutinaria de curso' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Grade boundary adjustment', fr:'Ajustement de la limite de note', de:'Anpassung der Notengrenze', es:'Ajuste del límite de calificación' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-stakes admissions decision', fr:"Décision d'admission à enjeu élevé", de:'Hochriskante Zulassungsentscheidung', es:'Decisión de admisión de alto riesgo' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible transcript modification', fr:'Modification irréversible de relevé de notes', de:'Irreversible Notentranskriptänderung', es:'Modificación irreversible de expediente académico' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading curriculum dependency change', fr:'Changement de dépendance curriculaire en cascade', de:'Kaskadierende Lehrplanabhängigkeitsänderung', es:'Cambio de dependencia curricular en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Unauthorised student data access', fr:'Accès non autorisé aux données étudiantes', de:'Unbefugter Zugriff auf Studentendaten', es:'Acceso no autorizado a datos de estudiantes' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Permanent student record deletion', fr:'Suppression permanente du dossier étudiant', de:'Dauerhafte Löschung der Studentenakte', es:'Eliminación permanente del expediente estudiantil' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-step irreversible enrolment action', fr:"Action d'inscription irréversible en plusieurs étapes", de:'Mehrstufige irreversible Einschreibungsaktion', es:'Acción de matriculación irreversible de múltiples pasos' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine shipment routing update', fr:"Mise à jour de routage d'expédition de routine", de:'Routinemäßige Versandrouten-Aktualisierung', es:'Actualización rutinaria de ruta de envío' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Near-capacity warehouse allocation', fr:'Allocation entrepôt proche de la capacité', de:'Lagerplatzzuweisung nahe der Kapazitätsgrenze', es:'Asignación de almacén cerca de la capacidad' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-value freight rerouting', fr:'Reroutage de fret de grande valeur', de:'Umleitung von hochwertigem Frachtgut', es:'Redirección de carga de alto valor' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible supplier contract termination', fr:'Résiliation irréversible de contrat fournisseur', de:'Irreversible Lieferantenvertragskündigung', es:'Terminación irreversible de contrato con proveedor' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading inventory dependency failure', fr:"Défaillance de dépendance d'inventaire en cascade", de:'Kaskadierende Bestandsabhängigkeitsauslösung', es:'Fallo de dependencia de inventario en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Out-of-zone autonomous vehicle dispatch', fr:'Déploiement de véhicule autonome hors zone', de:'Einsatz eines autonomen Fahrzeugs außerhalb der Zone', es:'Despacho de vehículo autónomo fuera de zona' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Permanent route data deletion', fr:'Suppression permanente des données de route', de:'Dauerhafte Löschung von Routendaten', es:'Eliminación permanente de datos de ruta' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-step irreversible dispatch sequence', fr:'Séquence de déploiement irréversible en plusieurs étapes', de:'Mehrstufige irreversible Versandsequenz', es:'Secuencia de despacho irreversible de múltiples pasos' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine permit approval', fr:'Approbation de permis de routine', de:'Routinemäßige Genehmigung', es:'Aprobación rutinaria de permisos' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Borderline zoning classification', fr:'Classification de zonage à la limite', de:'Grenzwertige Zonenklassifizierung', es:'Clasificación de zonificación en el límite' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-impact budget reallocation', fr:'Réaffectation budgétaire à fort impact', de:'Haushaltsumverteilung mit hoher Auswirkung', es:'Reasignación presupuestaria de alto impacto' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible policy enforcement action', fr:"Action d'application de politique irréversible", de:'Irreversible politische Durchsetzungsmaßnahme', es:'Acción de cumplimiento de política irreversible' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading regulatory dependency', fr:'Dépendance réglementaire en cascade', de:'Kaskadierende regulatorische Abhängigkeit', es:'Dependencia regulatoria en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Out-of-jurisdiction authority claim', fr:"Revendication d'autorité hors juridiction", de:'Autoritätsanspruch außerhalb der Zuständigkeit', es:'Reclamación de autoridad fuera de jurisdicción' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Citizen record purge attempt', fr:'Tentative de purge des dossiers citoyens', de:'Versuch der Bürgeraktenbereinigung', es:'Intento de purga de registros ciudadanos' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-agency irreversible enforcement', fr:'Enforcement irréversible multi-agences', de:'Irreversible behördenübergreifende Durchsetzung', es:'Cumplimiento irreversible multiagencia' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine vulnerability scan', fr:'Analyse de vulnérabilité de routine', de:'Routinemäßiger Schwachstellenscan', es:'Análisis rutinario de vulnerabilidades' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Anomalous access pattern flagged', fr:"Modèle d'accès anormal signalé", de:'Anomales Zugriffsmuster gemeldet', es:'Patrón de acceso anómalo detectado' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-severity intrusion response', fr:'Réponse à une intrusion de haute gravité', de:'Reaktion auf hochgradigen Einbruch', es:'Respuesta a intrusión de alta gravedad' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible system quarantine execution', fr:'Exécution irréversible de quarantaine système', de:'Irreversible Systemquarantäne-Ausführung', es:'Ejecución irreversible de cuarentena del sistema' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading firewall rule conflict', fr:'Conflit de règle de pare-feu en cascade', de:'Kaskadierende Firewall-Regelkonflikte', es:'Conflicto de regla de firewall en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Out-of-scope network access attempt', fr:'Tentative accès réseau hors périmètre', de:'Netzwerkzugriffsversuch außerhalb des Geltungsbereichs', es:'Intento de acceso a red fuera de alcance' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Permanent log deletion attempt', fr:'Tentative de suppression permanente des journaux', de:'Versuch der dauerhaften Protokolllöschung', es:'Intento de eliminación permanente de registros' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-vector irreversible lockout sequence', fr:'Séquence de verrouillage irréversible multi-vecteurs', de:'Mehrvektorige irreversible Sperrsequenz', es:'Secuencia de bloqueo irreversible multivector' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine CV screening', fr:'Filtrage de CV de routine', de:'Routinemäßige Lebenslaufprüfung', es:'Cribado rutinario de currículums' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Borderline performance rating', fr:'Évaluation de performance à la limite', de:'Grenzwertige Leistungsbeurteilung', es:'Calificación de rendimiento en el límite' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-stakes promotion decision', fr:'Décision de promotion à enjeu élevé', de:'Hochriskante Beförderungsentscheidung', es:'Decisión de promoción de alto riesgo' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible termination action', fr:'Action de licenciement irréversible', de:'Irreversible Kündigungsmaßnahme', es:'Acción de despido irreversible' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading team restructure dependency', fr:"Dépendance de restructuration d'équipe en cascade", de:'Kaskadierende Teamrestrukturierungsabhängigkeit', es:'Dependencia de reestructuración de equipo en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Unauthorised personnel file access', fr:'Accès non autorisé aux dossiers du personnel', de:'Unbefugter Zugriff auf Personalakten', es:'Acceso no autorizado a archivos de personal' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Employee record deletion attempt', fr:'Tentative de suppression du dossier employé', de:'Versuch der Mitarbeiterakte-Löschung', es:'Intento de eliminación de registro de empleado' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-step irreversible workforce action', fr:"Action de main-d'œuvre irréversible en plusieurs étapes", de:'Mehrstufige irreversible Personalmaßnahme', es:'Acción de personal irreversible de múltiples pasos' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine emissions data logging', fr:"Enregistrement de données d'émissions de routine", de:'Routinemäßige Emissionsdatenerfassung', es:'Registro rutinario de datos de emisiones' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Near-threshold pollution alert', fr:'Alerte de pollution proche du seuil', de:'Nahezu schwellenwertiger Verschmutzungsalarm', es:'Alerta de contaminación cerca del umbral' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-impact land use reallocation', fr:"Réaffectation d'utilisation des terres à fort impact", de:'Landnutzungsumverteilung mit hoher Auswirkung', es:'Reasignación de uso del suelo de alto impacto' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible habitat clearance approval', fr:"Approbation irréversible de défrichement d'habitat", de:'Irreversible Habitatfreigabegenehmigung', es:'Aprobación irreversible de limpieza de hábitat' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading ecosystem dependency trigger', fr:'Déclencheur de dépendance écosystémique en cascade', de:'Kaskadierende Ökosystem-Abhängigkeitsauslösung', es:'Desencadenante de dependencia ecosistémica en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Out-of-scope conservation zone action', fr:'Action hors périmètre en zone de conservation', de:'Maßnahme außerhalb des Geltungsbereichs in der Schutzzone', es:'Acción fuera de alcance en zona de conservación' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Environmental baseline data deletion', fr:'Suppression des données de base environnementales', de:'Löschung von Umwelt-Basisdaten', es:'Eliminación de datos de referencia ambiental' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-step irreversible extraction sequence', fr:"Séquence d'extraction irréversible en plusieurs étapes", de:'Mehrstufige irreversible Extraktionssequenz', es:'Secuencia de extracción irreversible de múltiples pasos' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine content tagging', fr:'Étiquetage de contenu de routine', de:'Routinemäßige Inhaltsmarkierung', es:'Etiquetado rutinario de contenido' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Borderline moderation decision', fr:'Décision de modération à la limite', de:'Grenzwertige Moderationsentscheidung', es:'Decisión de moderación en el límite' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-reach algorithmic amplification', fr:'Amplification algorithmique à grande portée', de:'Algorithmische Verstärkung mit großer Reichweite', es:'Amplificación algorítmica de alto alcance' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible account suspension', fr:'Suspension de compte irréversible', de:'Irreversible Kontosperrung', es:'Suspensión irreversible de cuenta' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading recommendation feedback loop', fr:'Boucle de rétroaction de recommandation en cascade', de:'Kaskadierende Empfehlungsrückkopplungsschleife', es:'Bucle de retroalimentación de recomendación en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Out-of-policy content promotion attempt', fr:'Tentative de promotion de contenu hors politique', de:'Inhaltsförderungsversuch außerhalb der Richtlinien', es:'Intento de promoción de contenido fuera de política' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Permanent content archive deletion', fr:'Suppression permanente des archives de contenu', de:'Dauerhafte Löschung des Inhaltsarchivs', es:'Eliminación permanente del archivo de contenido' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-platform irreversible takedown', fr:'Retrait irréversible multi-plateformes', de:'Plattformübergreifende irreversible Sperrung', es:'Retirada irreversible multiplataforma' }},
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
      { id:1, risk:'low',    irreversibleAttempt:false, desc:{ en:'Routine grid load balancing', fr:'Équilibrage de charge du réseau de routine', de:'Routinemäßiger Netzlastausgleich', es:'Equilibrio rutinario de carga de red' }},
      { id:2, risk:'medium', irreversibleAttempt:false, desc:{ en:'Near-capacity utility threshold event', fr:'Événement de seuil utilité proche de la capacité', de:'Versorgungsschwellenereignis nahe der Kapazität', es:'Evento de umbral de servicio cerca de la capacidad' }},
      { id:3, risk:'high',   irreversibleAttempt:false, desc:{ en:'High-impact power rerouting decision', fr:"Décision de reroutage d'énergie à fort impact", de:'Hochauswirkende Stromumleitung', es:'Decisión de redirección eléctrica de alto impacto' }},
      { id:4, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Irreversible grid segment shutdown', fr:"Arrêt irréversible d'un segment du réseau", de:'Irreversible Netzabschnittabschaltung', es:'Apagado irreversible de segmento de red' }},
      { id:5, risk:'medium', irreversibleAttempt:false, desc:{ en:'Cascading system dependency failure', fr:'Défaillance de dépendance système en cascade', de:'Kaskadierende Systemabhängigkeitsauslösung', es:'Fallo de dependencia del sistema en cascada' }},
      { id:6, risk:'high',   irreversibleAttempt:false, desc:{ en:'Out-of-zone autonomous control action', fr:'Action de contrôle autonome hors zone', de:'Autonome Steuerungsmaßnahme außerhalb der Zone', es:'Acción de control autónomo fuera de zona' }},
      { id:7, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Sensor calibration data deletion', fr:'Suppression des données de calibration des capteurs', de:'Löschung von Sensorkalibrierungsdaten', es:'Eliminación de datos de calibración de sensores' }},
      { id:8, risk:'high',   irreversibleAttempt:true,  desc:{ en:'Multi-system irreversible shutdown sequence', fr:"Séquence d'arrêt irréversible multi-systèmes", de:'Mehrsystemige irreversible Abschaltsequenz', es:'Secuencia de apagado irreversible multisistema' }},
    ],
  },

}

export const DOMAIN_KEYS = [
  'abstract','healthcare','finance','legal','education',
  'logistics','publicPolicy','cybersecurity','humanResources',
  'environment','media','infrastructure',
]