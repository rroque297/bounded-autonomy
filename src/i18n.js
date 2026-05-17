/**
 * i18n.js — Bounded Autonomy translation engine
 * Languages: en (default), fr, de, es
 *
 * Usage:
 *   import { t, setLang, getLang, onLangChange } from './i18n.j
 *   t('nav.research')          → "Research" (current lang)
 *   setLang('fr')              → switches to French, fires callbacks
 *   onLangChange(fn)           → register a listener
 */

/* ─── Translation strings ──────────────────────────────────────────────── */

const TRANSLATIONS = {

  /* ══════════════════════════════════════════════════════════════════════
     ENGLISH (default)
  ══════════════════════════════════════════════════════════════════════ */
  en: {
    lang: {
      code: 'en',
      label: 'English',
      localLabel: 'English',
      dir: 'ltr',
    },

    // ── Navigation
    nav: {
      logo:       'Bounded',
      logoSpan:   'Autonomy',
      research:   'Research',
      simulator:  'Simulator',
      results:    'Results',
      analysis:   'Analysis',
      tag:        'Proof of Concept v1.0',
    },

    // ── Hero
    hero: {
      label:   'Master in Design for Responsible Artificial Intelligence — Elisava School of Design and Engineering',
      h1a:     'Bounded',
      h1b:     'Autonomy',
      h1c:     'for AI',
      sub:     'A controlled experimental environment isolating the governance structure of AI autonomy through three fixed design primitives — delegation, boundaries, reversibility — and evaluating their effect through observable outcomes.',
      cta1:    'Launch Simulator',
      cta2:    'Read Research',
      stat1n:  '3',
      stat1l:  'Design Primitives',
      stat2n:  '3',
      stat2l:  'Baseline Models',
      stat3n:  '8',
      stat3l:  'Experimental Runs',
      stat4n:  '4',
      stat4l:  'Observable Outputs',
    },

    // ── Research section
    research: {
      sectionLabel: 'Research Framework',
      h2:           'Three primitives, one question',
      intro:        'Can bounded autonomy be operationalized through a minimal set of design primitives and evaluated through observable outcomes? This project isolates the governance structure of autonomy — not the full complexity of AI behavior — using three fixed, composable constraints.',
      p1name:       'Delegation',
      p1desc:       'The scope of authority granted to an autonomous agent. Determines which decisions the agent may make independently versus which require human confirmation or escalation.',
      p1tag:        'Authority scope',
      p2name:       'Boundaries',
      p2desc:       'Hard constraints on the action space. Define the envelope within which the agent operates — the perimeter that, if crossed, triggers a violation event or intervention.',
      p2tag:        'Action constraints',
      p3name:       'Reversibility',
      p3desc:       'Whether an action can be undone. Actions classified as irreversible carry higher governance weight — their occurrence constitutes a qualitatively different outcome class.',
      p3tag:        'Undo capacity',
    },

    // ── Simulator
    simulator: {
      sectionLabel: 'Interactive Proof of Concept',
      h2:           'Run the experiment',
      sub:          'Select a model configuration and run individual scenarios or all 8 experimental runs. All logic is deterministic and rule-based — no AI is invoked.',
      domainLabel:  'Context',
      toolbarLabel: 'Model',
      runAllBtn:    'Run all 8 →',
      runNextBtn:   'Run next scenario',
      logTitle:     'Experiment log',
      cfgTitle:     'Current configuration',
      cfgDeleg:     'Delegation',
      cfgBounds:    'Boundaries',
      cfgRev:       'Reversibility check',
      cfgInter:     'Intervention enabled',
      scoreTitle:   'Controllability score',
      scoreLabel:   'avg. across completed runs',
      chartTitle:   'Score by run',
      eventsTitle:  'Observable outputs',
    },

    // ── Results
    results: {
      sectionLabel: 'Dataset & Comparison',
      h2:           'Results',
      intro:        'Three models are evaluated across 8 experimental scenarios, each available across 12 domain contexts. Scores are computed deterministically by the rule engine — no statistical variance, no probabilistic modeling. Run the simulator above to populate the data set.',
      baselineLabel:'Baseline model',
      partialLabel: 'Partial model',
      fullLabel:    'Full model',
      scoreSubLabel:'avg. controllability score',
      freqLabel:    'Output frequency across all models',
      h2hTitle:     'Score by scenario — all three models',
      legendBase:   'Baseline',
      legendPart:   'Partial',
      legendFull:   'Full',
      matrixLabel:  '8-run comparison dataset',
      matColNum:    '#',
      matColScen:   'Scenario',
      matColRisk:   'Risk',
      matColBase:   'Baseline',
      matColPart:   'Partial',
      matColFull:   'Full',
      emptystate:   '[ - ] No runs completed . Launch the simulator to generate results',
      methodIcon:   '[ i ]',
      methodText:   'Scope note: All scores are produced by a deterministic rule engine applying the three primitives (delegation, boundaries, reversibility) to each scenario across 12 domain contexts. There is no probabilistic modeling, no real AI decision-making, and no variance across runs. The dataset is fully reproducible and intentionally bounded — its purpose is to isolate governance structure, not to simulate AI behavior at scale.',
    },

    // ── Analysis
    analysis: {
      sectionLabel: 'Governance Patterns',
      h2:           'What the runs reveal',
      sub:          'Across 8 runs and three model configurations, four structural governance patterns emerge from the primitive interactions.',
      p1h:          'Delegation without boundaries amplifies risk',
      p1p:          'In the baseline model, unconstrained delegation produces violations in every high-stakes scenario. Authority scope alone, absent action constraints, generates irreversible outcomes at a 3× higher rate than the full model.',
      p2h:          'Boundaries alone are insufficient',
      p2p:          'The partial model demonstrates that boundary enforcement without reversibility checks still permits high-consequence actions. The boundary stops the agent at the perimeter but cannot undo what happened within it.',
      p3h:          'Reversibility acts as a governance multiplier',
      p3p:          'When reversibility checks are active, the controllability score improves not just by preventing irreversible outcomes, but by enabling intervention at the earliest decision node — compounding safety across subsequent runs.',
      p4h:          'Primitive interaction is non-linear',
      p4p:          'The full model\'s controllability score is not the arithmetic sum of its parts. The three primitives interact: delegation scoped by boundaries becomes qualitatively safer when paired with reversibility — suggesting governance emerges from composition.',
    },

    // ── Simulator output labels + event messages
    outputs: {
      violation:    'violation',
      intervention: 'intervention',
      irreversible: 'irreversible',
      compliant:    'compliant',
      none:         '—',
    },
    events: {
      revBlocked:   'Reversibility check blocked irreversible action; intervention logged.',
      boundaryInter:'Boundary constraint triggered intervention after attempt.',
      noGov:        'Irreversible action executed. No governance primitive active.',
      allPrimitives:'All primitives active. High-stakes action escalated and approved.',
      delegBroad:   'Boundaries triggered intervention. Delegation scope insufficient.',
      boundaryViol: 'Boundary violation detected. No intervention mechanism to respond.',
      noConstraint: 'High-risk action executed without constraint. Violation recorded.',
      boundaryPass: 'Boundary check passed. Action within delegated scope.',
      noCheck:      'No boundary check. Medium-risk action proceeded unconstrained.',
      routine:      'Routine action. All models compliant on low-risk scenarios.',
    },
    
    // ── Footer
    footer: {
      credit: 'Bounded Autonomy Research · Master in Design for Responsible Artificial Intelligence · Elisava School of Design and Engineering · 2025',
      note:   'Proof of concept — no real AI decision-making',
    },
  },

  /* ══════════════════════════════════════════════════════════════════════
     FRENCH
  ══════════════════════════════════════════════════════════════════════ */
  fr: {
    lang: {
      code: 'fr',
      label: 'French',
      localLabel: 'Français',
      dir: 'ltr',
    },

    nav: {
      logo:       'Autonomie',
      logoSpan:   'Bornée',
      research:   'Recherche',
      simulator:  'Simulateur',
      results:    'Résultats',
      analysis:   'Analyse',
      tag:        'Preuve de concept v1.0',
    },

    hero: {
      label:   'Master en Design pour l\'Intelligence Artificielle Responsable — Elisava École de Design et d\'Ingénierie',
      h1a:     'Autonomie',
      h1b:     'Bornée',
      h1c:     'pour l\'IA',
      sub:     'Un environnement expérimental contrôlé isolant la structure de gouvernance de l\'autonomie des IA à travers trois primitives de conception fixes — délégation, limites, réversibilité — et évaluant leurs effets à travers des résultats observables.',
      cta1:    'Lancer le simulateur',
      cta2:    'Lire la recherche',
      stat1n:  '3',
      stat1l:  'Primitives de conception',
      stat2n:  '3',
      stat2l:  'Modèles de base',
      stat3n:  '8',
      stat3l:  'Séquences expérimentales',
      stat4n:  '4',
      stat4l:  'Sorties observables',
    },

    research: {
      sectionLabel: 'Cadre de recherche',
      h2:           'Trois primitives, une question',
      intro:        'L\'autonomie bornée peut-elle être opérationnalisée à travers un ensemble minimal de primitives de conception et évaluée à travers des résultats observables? Ce projet isole la structure de gouvernance de l\'autonomie — non la complexité totale du comportement des IA — en utilisant trois contraintes fixes et composables.',
      p1name:       'Délégation',
      p1desc:       'L\'étendue de l\'autorité accordée à un agent autonome. Détermine les décisions que l\'agent peut prendre indépendamment par rapport à celles nécessitant une confirmation humaine ou une escalade.',
      p1tag:        'Portée d\'autorité',
      p2name:       'Limites',
      p2desc:       'Contraintes strictes sur l\'espace d\'action. Définissent l\'enveloppe dans laquelle l\'agent opère — le périmètre dont le franchissement déclenche un événement de violation ou une intervention.',
      p2tag:        'Contraintes d\'action',
      p3name:       'Réversibilité',
      p3desc:       'Si une action peut être annulée. Les actions classées comme irréversibles ont un poids de gouvernance plus élevé — leur occurrence constitue une classe de résultats qualitativement différente.',
      p3tag:        'Capacité d\'annulation',
    },

    simulator: {
      sectionLabel: 'Preuve de concept interactive',
      h2:           'Lancer l\'expérience',
      sub:          'Sélectionnez une configuration de modèle et exécutez des scénarios individuels ou les 8 séquences expérimentales. Toute la logique est déterministe et basée sur des règles — aucune IA n\'est invoquée.',
      domainLabel:  'Contexte',
      toolbarLabel: 'Modèle',
      runAllBtn:    'Tout exécuter (8) →',
      runNextBtn:   'Prochain scénario',
      logTitle:     'Journal d\'expérience',
      cfgTitle:     'Configuration actuelle',
      cfgDeleg:     'Délégation',
      cfgBounds:    'Limites',
      cfgRev:       'Vérification de réversibilité',
      cfgInter:     'Intervention activée',
      scoreTitle:   'Score de contrôlabilité',
      scoreLabel:   'moy. sur les séquences complètes',
      chartTitle:   'Score par séquence',
      eventsTitle:  'Sorties observables',
    },

    results: {
      sectionLabel: 'Ensemble de données et comparaison',
      h2:           'Résultats',
      intro:        'Trois modèles sont évalués sur 8 scénarios expérimentaux, disponibles dans 12 contextes de domaine. Les scores sont calculés de manière déterministe par le moteur de règles — sans variance statistique, sans modélisation probabiliste. Lancez le simulateur ci-dessus pour alimenter l\'ensemble de données.',
      baselineLabel:'Modèle de base',
      partialLabel: 'Modèle partiel',
      fullLabel:    'Modèle complet',
      scoreSubLabel:'score moy. de contrôlabilité',
      freqLabel:    'Fréquence de sortie sur tous les modèles',
      h2hTitle:     'Score par scénario — les trois modèles',
      legendBase:   'Base',
      legendPart:   'Partiel',
      legendFull:   'Complet',
      matrixLabel:  'Ensemble de données — 8 séquences',
      matColNum:    'N°',
      matColScen:   'Scénario',
      matColRisk:   'Risque',
      matColBase:   'Base',
      matColPart:   'Partiel',
      matColFull:   'Complet',
      emptyState:   '[ - ] Aucune séquence complétée · Lancez le simulateur pour générer les résultats',
      methodIcon:   '[ i ]',
      methodText:   'Note de portée : Tous les scores sont produits par un moteur de règles déterministe appliquant les trois primitives (délégation, limites, réversibilité) à chaque scénario dans 12 contextes de domaine. Il n\'y a pas de modélisation probabiliste, pas de prise de décision IA réelle, et pas de variance entre les séquences. L\'ensemble de données est entièrement reproductible et intentionnellement borné — son but est d\'isoler la structure de gouvernance, non de simuler le comportement des IA à grande échelle.',
    },

    analysis: {
      sectionLabel: 'Schémas de gouvernance',
      h2:           'Ce que révèlent les séquences',
      sub:          'Sur 8 séquences et trois configurations de modèles, quatre schémas de gouvernance structurels émergent des interactions primitives.',
      p1h:          'La délégation sans limites amplifie le risque',
      p1p:          'Dans le modèle de base, la délégation non contrainte produit des violations dans chaque scénario à enjeux élevés. La portée d\'autorité seule, en l\'absence de contraintes d\'action, génère des résultats irréversibles à un taux 3× plus élevé que le modèle complet.',
      p2h:          'Les limites seules sont insuffisantes',
      p2p:          'Le modèle partiel démontre que l\'application des limites sans vérification de réversibilité permet encore des actions à haute conséquence. La limite arrête l\'agent au périmètre mais ne peut défaire ce qui s\'est passé à l\'intérieur.',
      p3h:          'La réversibilité agit comme multiplicateur de gouvernance',
      p3p:          'Lorsque les vérifications de réversibilité sont actives, le score de contrôlabilité s\'améliore non seulement en prévenant les résultats irréversibles, mais en permettant l\'intervention au premier nœud de décision — composant la sécurité sur les séquences suivantes.',
      p4h:          'L\'interaction des primitives est non linéaire',
      p4p:          'Le score de contrôlabilité du modèle complet n\'est pas la somme arithmétique de ses parties. Les trois primitives interagissent : la délégation délimitée par des limites devient qualitativement plus sûre lorsqu\'elle est associée à la réversibilité — suggérant que la gouvernance émerge de la composition.',
    },

    // ── Simulator output labels + event messages
    outputs: {
      violation:    'violation',
      intervention: 'intervention',
      irreversible: 'irréversible',
      compliant:    'conforme',
      none:         '—',
    },
    events: {
      revBlocked:   'La vérification de réversibilité a bloqué l\'action irréversible ; intervention enregistrée.',
      boundaryInter:'La contrainte de limite a déclenché une intervention après la tentative.',
      noGov:        'Action irréversible exécutée. Aucune primitive de gouvernance active.',
      allPrimitives:'Toutes les primitives actives. Action à enjeu élevé escaladée et approuvée.',
      delegBroad:   'Les limites ont déclenché une intervention. Portée de délégation insuffisante.',
      boundaryViol: 'Violation de limite détectée. Aucun mécanisme d\'intervention disponible.',
      noConstraint: 'Action à haut risque exécutée sans contrainte. Violation enregistrée.',
      boundaryPass: 'Vérification de limite réussie. Action dans le périmètre délégué.',
      noCheck:      'Aucune vérification de limite. Action à risque moyen non contrainte.',
      routine:      'Action routinière. Tous les modèles conformes sur les scénarios à faible risque.',
    },
    
    footer: {
      credit: 'Recherche Autonomie Bornée · Master en Design pour l\'IA Responsable · Elisava École de Design et d\'Ingénierie · 2025',
      note:   'Preuve de concept — aucune prise de décision IA réelle',
    },
  },

  /* ══════════════════════════════════════════════════════════════════════
     GERMAN
  ══════════════════════════════════════════════════════════════════════ */
  de: {
    lang: {
      code: 'de',
      label: 'German',
      localLabel: 'Deutsch',
      dir: 'ltr',
    },

    nav: {
      logo:       'Begrenzte',
      logoSpan:   'Autonomie',
      research:   'Forschung',
      simulator:  'Simulator',
      results:    'Ergebnisse',
      analysis:   'Analyse',
      tag:        'Machbarkeitsnachweis v1.0',
    },

    hero: {
      label:   'Master in Design für verantwortungsvolle Künstliche Intelligenz — Elisava Schule für Design und Ingenieurwesen',
      h1a:     'Begrenzte',
      h1b:     'Autonomie',
      h1c:     'für KI',
      sub:     'Eine kontrollierte Experimentierumgebung, die die Governance-Struktur der KI-Autonomie durch drei feste Designprimitive — Delegation, Grenzen, Reversibilität — isoliert und ihre Wirkung durch beobachtbare Ergebnisse bewertet.',
      cta1:    'Simulator starten',
      cta2:    'Forschung lesen',
      stat1n:  '3',
      stat1l:  'Designprimitive',
      stat2n:  '3',
      stat2l:  'Basismodelle',
      stat3n:  '8',
      stat3l:  'Experimentläufe',
      stat4n:  '4',
      stat4l:  'Beobachtbare Ausgaben',
    },

    research: {
      sectionLabel: 'Forschungsrahmen',
      h2:           'Drei Primitive, eine Frage',
      intro:        'Kann begrenzte Autonomie durch einen minimalen Satz von Designprimitiven operationalisiert und durch beobachtbare Ergebnisse bewertet werden? Dieses Projekt isoliert die Governance-Struktur der Autonomie — nicht die gesamte Komplexität des KI-Verhaltens — unter Verwendung von drei festen, zusammensetzbaren Einschränkungen.',
      p1name:       'Delegation',
      p1desc:       'Der Umfang der einem autonomen Agenten gewährten Autorität. Bestimmt, welche Entscheidungen der Agent unabhängig treffen kann, und welche eine menschliche Bestätigung oder Eskalation erfordern.',
      p1tag:        'Autoritätsumfang',
      p2name:       'Grenzen',
      p2desc:       'Harte Einschränkungen im Aktionsraum. Definieren den Bereich, in dem der Agent operiert — der Perimeter, dessen Überschreitung ein Verletzungsereignis oder eine Intervention auslöst.',
      p2tag:        'Aktionseinschränkungen',
      p3name:       'Reversibilität',
      p3desc:       'Ob eine Aktion rückgängig gemacht werden kann. Als irreversibel eingestufte Aktionen haben ein höheres Governance-Gewicht — ihr Auftreten stellt eine qualitativ andere Ergebnisklasse dar.',
      p3tag:        'Rückgängigmachen',
    },

    simulator: {
      sectionLabel: 'Interaktiver Machbarkeitsnachweis',
      h2:           'Experiment ausführen',
      sub:          'Wählen Sie eine Modellkonfiguration und führen Sie einzelne Szenarien oder alle 8 Experimentläufe aus. Die gesamte Logik ist deterministisch und regelbasiert — keine KI wird involviert.',
      domainLabel:  'Kontext',
      toolbarLabel: 'Modell',
      runAllBtn:    'Alle 8 ausführen →',
      runNextBtn:   'Nächstes Szenario',
      logTitle:     'Experimentprotokoll',
      cfgTitle:     'Aktuelle Konfiguration',
      cfgDeleg:     'Delegation',
      cfgBounds:    'Grenzen',
      cfgRev:       'Reversibilitätsprüfung',
      cfgInter:     'Intervention aktiviert',
      scoreTitle:   'Kontrollierbarkeitsscore',
      scoreLabel:   'Durchschn. über abgeschlossene Läufe',
      chartTitle:   'Score pro Lauf',
      eventsTitle:  'Beobachtbare Ausgaben',
    },

    results: {
      sectionLabel: 'Datensatz & Vergleich',
      h2:           'Ergebnisse',
      intro:        'Drei Modelle werden über 8 Experimentszenarien bewertet, verfügbar in 12 Domänenkontexten. Die Scores werden deterministisch vom Regelmotor berechnet — keine statistische Varianz, keine probabilistische Modellierung. Führen Sie den Simulator oben aus, um den Datensatz zu befüllen.',
      baselineLabel:'Basismodell',
      partialLabel: 'Teilmodell',
      fullLabel:    'Vollmodell',
      scoreSubLabel:'Durchschn. Kontrollierbarkeitsscore',
      freqLabel:    'Ausgabehäufigkeit über alle Modelle',
      h2hTitle:     'Score nach Szenario — alle drei Modelle',
      legendBase:   'Basis',
      legendPart:   'Teil',
      legendFull:   'Voll',
      matrixLabel:  'Vergleichsdatensatz — 8 Läufe',
      matColNum:    'Nr.',
      matColScen:   'Szenario',
      matColRisk:   'Risiko',
      matColBase:   'Basis',
      matColPart:   'Teil',
      matColFull:   'Voll',
      emptyState:   '[ — ] Keine Läufe abgeschlossen · Starten Sie den Simulator, um Ergebnisse zu erzeugen',
      methodIcon:   '[ i ]',
      methodText:   'Umfangshinweis: Alle Scores werden von einem deterministischen Regelmotor erzeugt, der die drei Primitive (Delegation, Grenzen, Reversibilität) auf jedes Szenario in 12 Domänenkontexten anwendet. Es gibt keine probabilistische Modellierung, keine echte KI-Entscheidungsfindung und keine Varianz zwischen den Läufen. Der Datensatz ist vollständig reproduzierbar und absichtlich begrenzt — sein Zweck ist es, die Governance-Struktur zu isolieren, nicht das KI-Verhalten im großen Maßstab zu simulieren.',
    },

    analysis: {
      sectionLabel: 'Governance-Muster',
      h2:           'Was die Läufe zeigen',
      sub:          'Über 8 Läufe und drei Modellkonfigurationen hinweg entstehen aus den Primitivinteraktionen vier strukturelle Governance-Muster.',
      p1h:          'Delegation ohne Grenzen verstärkt das Risiko',
      p1p:          'Im Basismodell produziert unbegrenzte Delegation in jedem Hochrisiko-Szenario Verletzungen. Autoritätsumfang allein, ohne Aktionseinschränkungen, erzeugt irreversible Ergebnisse mit einer 3-mal höheren Rate als das Vollmodell.',
      p2h:          'Grenzen allein sind unzureichend',
      p2p:          'Das Teilmodell zeigt, dass die Durchsetzung von Grenzen ohne Reversibilitätsprüfungen immer noch Aktionen mit hohen Konsequenzen ermöglicht. Die Grenze hält den Agenten am Perimeter an, kann aber nicht rückgängig machen, was innerhalb passiert ist.',
      p3h:          'Reversibilität wirkt als Governance-Multiplikator',
      p3p:          'Wenn Reversibilitätsprüfungen aktiv sind, verbessert sich der Kontrollierbarkeitsscore nicht nur durch die Verhinderung irreversibler Ergebnisse, sondern durch die Ermöglichung von Interventionen am frühesten Entscheidungsknoten — was die Sicherheit über nachfolgende Läufe hinweg potenziert.',
      p4h:          'Primitivinteraktion ist nichtlinear',
      p4p:          'Der Kontrollierbarkeitsscore des Vollmodells ist nicht die arithmetische Summe seiner Teile. Die drei Primitive interagieren: Delegation, die durch Grenzen begrenzt ist, wird qualitativ sicherer, wenn sie mit Reversibilität gepaart wird — was darauf hindeutet, dass Governance aus der Komposition entsteht.',
    },

// ── Simulator output labels + event messages
    outputs: {
      violation:    'Verstoß',
      intervention: 'Intervention',
      irreversible: 'irreversibel',
      compliant:    'konform',
      none:         '—',
    },
    events: {
      revBlocked:   'Reversibilitätsprüfung hat irreversible Aktion blockiert; Intervention protokolliert.',
      boundaryInter:'Grenzbeschränkung hat nach dem Versuch eine Intervention ausgelöst.',
      noGov:        'Irreversible Aktion ausgeführt. Keine Governance-Primitive aktiv.',
      allPrimitives:'Alle Primitive aktiv. Hochriskante Aktion eskaliert und genehmigt.',
      delegBroad:   'Grenzen haben Intervention ausgelöst. Delegationsumfang unzureichend.',
      boundaryViol: 'Grenzverletzung erkannt. Kein Interventionsmechanismus verfügbar.',
      noConstraint: 'Hochriskante Aktion ohne Einschränkung ausgeführt. Verstoß aufgezeichnet.',
      boundaryPass: 'Grenzprüfung bestanden. Aktion innerhalb des delegierten Bereichs.',
      noCheck:      'Keine Grenzprüfung. Mittelriskante Aktion ohne Einschränkung fortgesetzt.',
      routine:      'Routineaktion. Alle Modelle konform bei Niedrigrisikoszenarien.',
    },

    footer: {
      credit: 'Forschung Begrenzte Autonomie · Master in Design für verantwortungsvolle KI · Elisava Schule für Design und Ingenieurwesen · 2025',
      note:   'Machbarkeitsnachweis — keine echte KI-Entscheidungsfindung',
    },
  },

  /* ══════════════════════════════════════════════════════════════════════
     SPANISH
  ══════════════════════════════════════════════════════════════════════ */
  es: {
    lang: {
      code: 'es',
      label: 'Spanish',
      localLabel: 'Español',
      dir: 'ltr',
    },

    nav: {
      logo:       'Autonomía',
      logoSpan:   'Acotada',
      research:   'Investigación',
      simulator:  'Simulador',
      results:    'Resultados',
      analysis:   'Análisis',
      tag:        'Prueba de concepto v1.0',
    },

    hero: {
      label:   'Máster en Diseño para la Inteligencia Artificial Responsable — Elisava Escuela de Diseño e Ingeniería',
      h1a:     'Autonomía',
      h1b:     'Acotada',
      h1c:     'para IA',
      sub:     'Un entorno experimental controlado que aísla la estructura de gobernanza de la autonomía de la IA a través de tres primitivas de diseño fijas — delegación, límites, reversibilidad — y evalúa su efecto a través de resultados observables.',
      cta1:    'Lanzar simulador',
      cta2:    'Leer investigación',
      stat1n:  '3',
      stat1l:  'Primitivas de diseño',
      stat2n:  '3',
      stat2l:  'Modelos base',
      stat3n:  '8',
      stat3l:  'Ejecuciones experimentales',
      stat4n:  '4',
      stat4l:  'Salidas observables',
    },

    research: {
      sectionLabel: 'Marco de investigación',
      h2:           'Tres primitivas, una pregunta',
      intro:        '¿Puede la autonomía acotada operacionalizarse a través de un conjunto mínimo de primitivas de diseño y evaluarse a través de resultados observables? Este proyecto aísla la estructura de gobernanza de la autonomía — no la complejidad total del comportamiento de la IA — usando tres restricciones fijas y componibles.',
      p1name:       'Delegación',
      p1desc:       'El alcance de la autoridad otorgada a un agente autónomo. Determina qué decisiones puede tomar el agente de forma independiente frente a cuáles requieren confirmación humana o escalada.',
      p1tag:        'Alcance de autoridad',
      p2name:       'Límites',
      p2desc:       'Restricciones estrictas en el espacio de acción. Definen el perímetro dentro del cual opera el agente — el borde que, si se cruza, desencadena un evento de violación o intervención.',
      p2tag:        'Restricciones de acción',
      p3name:       'Reversibilidad',
      p3desc:       'Si una acción puede deshacerse. Las acciones clasificadas como irreversibles tienen mayor peso de gobernanza — su ocurrencia constituye una clase de resultado cualitativamente diferente.',
      p3tag:        'Capacidad de deshacer',
    },

    simulator: {
      sectionLabel: 'Prueba de concepto interactiva',
      h2:           'Ejecutar el experimento',
      sub:          'Seleccione una configuración de modelo y ejecute escenarios individuales o las 8 ejecuciones experimentales. Toda la lógica es determinista y basada en reglas — no se invoca ninguna IA.',
      domainLabel:  'Contexto',
      toolbarLabel: 'Modelo',
      runAllBtn:    'Ejecutar todos (8) →',
      runNextBtn:   'Siguiente escenario',
      logTitle:     'Registro del experimento',
      cfgTitle:     'Configuración actual',
      cfgDeleg:     'Delegación',
      cfgBounds:    'Límites',
      cfgRev:       'Verificación de reversibilidad',
      cfgInter:     'Intervención habilitada',
      scoreTitle:   'Puntuación de controlabilidad',
      scoreLabel:   'prom. a lo largo de ejecuciones completadas',
      chartTitle:   'Puntuación por ejecución',
      eventsTitle:  'Salidas observables',
    },

    results: {
      sectionLabel: 'Conjunto de datos y comparación',
      h2:           'Resultados',
      intro:        'Tres modelos son evaluados en 8 escenarios experimentales, disponibles en 12 contextos de dominio. Las puntuaciones se calculan de forma determinista por el motor de reglas — sin varianza estadística, sin modelado probabilístico. Ejecute el simulador arriba para poblar el conjunto de datos.',
      baselineLabel:'Modelo base',
      partialLabel: 'Modelo parcial',
      fullLabel:    'Modelo completo',
      scoreSubLabel:'punt. prom. de controlabilidad',
      freqLabel:    'Frecuencia de salida en todos los modelos',
      h2hTitle:     'Puntuación por escenario — los tres modelos',
      legendBase:   'Base',
      legendPart:   'Parcial',
      legendFull:   'Completo',
      matrixLabel:  'Conjunto de datos de comparación — 8 ejecuciones',
      matColNum:    'N°',
      matColScen:   'Escenario',
      matColRisk:   'Riesgo',
      matColBase:   'Base',
      matColPart:   'Parcial',
      matColFull:   'Completo',
      emptyState:   '[ — ] Sin ejecuciones completadas · Lance el simulador para generar resultados',
      methodIcon:   '[ i ]',
      methodText:   'Nota de alcance: Todas las puntuaciones son producidas por un motor de reglas determinista que aplica las tres primitivas (delegación, límites, reversibilidad) a cada escenario en 12 contextos de dominio. No hay modelado probabilístico, ni toma de decisiones de IA real, ni varianza entre ejecuciones. El conjunto de datos es completamente reproducible e intencionalmente acotado — su propósito es aislar la estructura de gobernanza, no simular el comportamiento de la IA a escala.',
    },

    analysis: {
      sectionLabel: 'Patrones de gobernanza',
      h2:           'Lo que revelan las ejecuciones',
      sub:          'A lo largo de 8 ejecuciones y tres configuraciones de modelos, emergen cuatro patrones de gobernanza estructurales de las interacciones primitivas.',
      p1h:          'La delegación sin límites amplifica el riesgo',
      p1p:          'En el modelo base, la delegación sin restricciones produce violaciones en cada escenario de alto riesgo. El alcance de autoridad solo, sin restricciones de acción, genera resultados irreversibles a una tasa 3× mayor que el modelo completo.',
      p2h:          'Los límites solos son insuficientes',
      p2p:          'El modelo parcial demuestra que la aplicación de límites sin verificaciones de reversibilidad aún permite acciones de alta consecuencia. El límite detiene al agente en el perímetro pero no puede deshacer lo que ocurrió dentro.',
      p3h:          'La reversibilidad actúa como multiplicador de gobernanza',
      p3p:          'Cuando las verificaciones de reversibilidad están activas, la puntuación de controlabilidad mejora no solo previniendo resultados irreversibles, sino habilitando la intervención en el primer nodo de decisión — multiplicando la seguridad en ejecuciones posteriores.',
      p4h:          'La interacción de primitivas es no lineal',
      p4p:          'La puntuación de controlabilidad del modelo completo no es la suma aritmética de sus partes. Las tres primitivas interactúan: la delegación acotada por límites se vuelve cualitativamente más segura cuando se combina con reversibilidad — sugiriendo que la gobernanza emerge de la composición.',
    },

// ── Simulator output labels + event messages
    outputs: {
      violation:    'violación',
      intervention: 'intervención',
      irreversible: 'irreversible',
      compliant:    'conforme',
      none:         '—',
    },
    events: {
      revBlocked:   'La verificación de reversibilidad bloqueó la acción irreversible; intervención registrada.',
      boundaryInter:'La restricción de límite desencadenó una intervención tras el intento.',
      noGov:        'Acción irreversible ejecutada. Ninguna primitiva de gobernanza activa.',
      allPrimitives:'Todas las primitivas activas. Acción de alto riesgo escalada y aprobada.',
      delegBroad:   'Los límites desencadenaron intervención. Alcance de delegación insuficiente.',
      boundaryViol: 'Violación de límite detectada. Ningún mecanismo de intervención disponible.',
      noConstraint: 'Acción de alto riesgo ejecutada sin restricción. Violación registrada.',
      boundaryPass: 'Verificación de límite superada. Acción dentro del alcance delegado.',
      noCheck:      'Sin verificación de límite. Acción de riesgo medio sin restricción.',
      routine:      'Acción rutinaria. Todos los modelos conformes en escenarios de bajo riesgo.',
    },

    footer: {
      credit: 'Investigación Autonomía Acotada · Máster en Diseño para la IA Responsable · Elisava Escuela de Diseño e Ingeniería · 2025',
      note:   'Prueba de concepto — sin toma de decisiones IA real',
    },
  },
}

/* ─── Engine ────────────────────────────────────────────────────────────── */

const SUPPORTED = ['en', 'fr', 'de', 'es']
const STORAGE_KEY = 'ba-lang'

let _currentLang = 'en'
const _listeners = []

/** Detect preferred language from localStorage → browser → default 'en' */
function detectLang() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && SUPPORTED.includes(stored)) return stored

  // browser preferred languages
  for (const nav of (navigator.languages || [navigator.language])) {
    const code = nav.slice(0, 2).toLowerCase()
    if (SUPPORTED.includes(code)) return code
  }
  return 'en'
}

/** Resolve a dot-path like 'nav.research' against the current dict */
function resolve(key, lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['en']
  return key.split('.').reduce((obj, k) => (obj ? obj[k] : undefined), dict) ?? key
}

/** Get a translation string */
export function t(key) {
  return resolve(key, _currentLang)
}

/** Get the current language code */
export function getLang() {
  return _currentLang
}

/** Get metadata for a language */
export function getLangMeta(code) {
  return TRANSLATIONS[code]?.lang ?? null
}

/** Get all supported language metadata objects */
export function getAllLangs() {
  return SUPPORTED.map(code => TRANSLATIONS[code].lang)
}

/** Register a callback to run when the language changes */
export function onLangChange(fn) {
  _listeners.push(fn)
}

/**
 * Switch the active language.
 * - Updates <html lang="…">
 * - Persists to localStorage
 * - Fires all registered listeners
 * - Re-renders every element with a data-i18n attribute
 */
export function setLang(code) {
  if (!SUPPORTED.includes(code)) {
    console.warn(`[i18n] Unsupported language: "${code}". Falling back to "en".`)
    code = 'en'
  }
  _currentLang = code
  localStorage.setItem(STORAGE_KEY, code)

  // Update <html> attributes
  document.documentElement.lang = code
  document.documentElement.dir = TRANSLATIONS[code].lang.dir

  // Re-render all tagged elements
  applyTranslations()

  // Notify listeners (e.g. JS-rendered sections)
  _listeners.forEach(fn => fn(code))
}

/**
 * Walk the DOM and update every [data-i18n] element.
 *
 * Attribute syntax:
 *   data-i18n="hero.sub"                  → element.textContent
 *   data-i18n-html="results.methodText"   → element.innerHTML (use sparingly)
 *   data-i18n-placeholder="nav.research"  → input placeholder
 *   data-i18n-aria="nav.research"         → aria-label
 *   data-i18n-title="nav.research"        → title attribute
 */
export function applyTranslations() {
  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    el.textContent = t(key)
  })
  // innerHTML (for translations with embedded <strong> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html')
    el.innerHTML = t(key)
  })
  // placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'))
  })
  // aria-label
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')))
  })
  // title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.setAttribute('title', t(el.getAttribute('data-i18n-title')))
  })
}

/** Initialize: detect language, apply translations */
export function initI18n() {
  _currentLang = detectLang()
  document.documentElement.lang = _currentLang
  document.documentElement.dir = TRANSLATIONS[_currentLang].lang.dir
  applyTranslations()
}
