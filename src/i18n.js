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
      sub: 'A controlled experimental environment isolating the governance structure of AI autonomy through four fixed design primitives — delegation, boundaries, reversibility, and intervention — and evaluating their effect through observable outcomes.',
      cta1:    'Launch Simulator',
      cta2:    'Read Research',
      stat1n:  '4',
      stat1l:  'Design Primitives',
      stat2n:  '5',
      stat2l:  'Baseline Models',
      stat3n:  '8',
      stat3l:  'Experimental Runs',
      stat4n:  '4',
      stat4l:  'Observable Outputs',
    },

    // ── Research section
    research: {
      sectionLabel: 'Research Framework',
      h2:           'Four primitives, one question',
      intro:        'Can bounded autonomy be operationalized through a minimal set of design primitives and evaluated through observable outcomes? This project isolates the governance structure of autonomy — not the full complexity of AI behavior — using four fixed, composable constraints.',
      p1name:       'Delegation',
      p1desc:       'The scope of authority granted to an autonomous agent. Determines which decisions the agent may make independently versus which require human confirmation or escalation.',
      p1tag:        'Authority scope',
      p2name:       'Boundaries',
      p2desc:       'Hard constraints on the action space. Define the envelope within which the agent operates — the perimeter that, if crossed, triggers a violation event or intervention.',
      p2tag:        'Action constraints',
      p3name:       'Reversibility',
      p3desc:       'Whether an action can be undone. Actions classified as irreversible carry higher governance weight — their occurrence constitutes a qualitatively different outcome class.',
      p3tag:        'Undo capacity',
      p4name:       'Intervention',
      p4desc:       'The active response mechanism triggered when a governance threshold is crossed. Converts detection into action — halting, escalating, or redirecting an agent when delegation or boundary conditions are violated.',
      p4tag:        'Active response',
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
      intro:        'Five models are evaluated across 8 experimental scenarios, each available across 12 domain contexts. Scores are computed deterministically by the rule engine — no statistical variance, no probabilistic modeling. Run the simulator above to populate the data set.',
      baselineLabel:          'Baseline model',
      boundariesOnlyLabel:    'Boundaries only',
      reversibilityOnlyLabel: 'Reversibility only',
      partialLabel:           'Partial model',
      fullLabel:              'Full model',
      scoreSubLabel:'avg. controllability score',
      freqLabel:    'Output frequency across all models',
      h2hTitle:     'Score by scenario — all five models',
      legendBase:   'Baseline',
      legendBoundsOnly: 'Bounds Only',
      legendReversOnly: 'Revers. Only',
      legendPart:   'Partial',
      legendFull:   'Full',
      matrixLabel:  '8-run comparison dataset',
      matColNum:    '#',
      matColScen:   'Scenario',
      matColRisk:   'Risk',
      matColBase:   'Baseline',
      matColBoundsOnly: 'Bounds',
      matColReversOnly: 'Revers.',
      matColPart:   'Partial',
      matColFull:   'Full',
      emptystate:   '[ - ] No runs completed . Launch the simulator to generate results',
      methodIcon:   '[ i ]',
      methodText:   'Scope note: All scores are produced by a deterministic rule engine applying the four primitives (delegation, boundaries, reversibility, intervention) to each scenario across 12 domain contexts. There is no probabilistic modeling, no real AI decision-making, and no variance across runs. The dataset is fully reproducible and intentionally bounded — its purpose is to isolate governance structure, not to simulate AI behavior at scale.',
    },

    // ── Analysis
    analysis: {
      sectionLabel: 'Governance Patterns',
      h2:           'What the runs reveal',
      sub:          'Across 8 runs and five model configurations, four structural governance patterns emerge from the primitive interactions.',
      p1h:          'The cost of absent structure',
      p1p:          'The simulation results reveal a threefold difference in governance coverage between the least and most constrained configurations. The baseline model — operating with high delegation, no boundary enforcement, no reversibility mechanism, and no intervention — scores 30 out of 100. The full model, which activates all four primitives, scores 91. That gap is not incidental. It is the measurable cost of absent structure: every point between 30 and 91 represents a scenario in which an ungoverned system either exceeded its sanctioned scope, produced an irreversible outcome, or both, with no mechanism available to recover.',
      p1p_evidence: 'In the {domain} domain, the baseline model produced {n} irreversible outcome(s) across 8 runs — with no recovery mechanism active.',
      p2h:          'The recovery pair',
      p2p:          'The most counterintuitive result concerns the partial model. Without any boundary enforcement, partial nonetheless scores 80 — outperforming both single-primitive configurations, each of which scores 65. Reversibility and intervention do not prevent failure at the perimeter; they guarantee that when failure occurs, the system retains the capacity to return to safe operational readiness. Together they form a recovery pair: neither primitive is sufficient alone, but in combination they address the full consequence of a boundary breach. A system without boundaries will still be breached. What determines governance quality is whether anything happens next.',
      p2p_evidence: 'In the {domain} domain, the partial model intervened on: {scenario} — recovering without boundary control.',
      p3h:          'Two ways to score 65',
      p3p:          'The boundaries-only and reversibility-only models produce identical aggregate scores, but through entirely different failure modes. One model fails because it cannot prevent permanent harm. The other fails because it has no structure to contain the harm that intervention is responding to. The score is the same. The exposure is not.',
      p3p_evidence_bounds: 'In the {domain} domain, boundaries-only failed on: {scenario} — the boundary held, but the outcome was irreversible.',
      p3p_evidence_revers: 'In the {domain} domain, reversibility-only failed on: {scenario} — harm occurred with no structure to contain it.',
      p4h:          'Equifinality',
      p4p:          'This convergence has a name in complex systems theory: equifinality. Different failure trajectories produced indistinguishable outcomes at the aggregate level — observed here across the {domain} domain and reproducible across all 12 domain contexts. Evaluation frameworks that rely on aggregate performance metrics risk treating boundaries-only and reversibility-only as equivalent, and therefore interchangeable, when they are not. Responsible AI governance requires looking past the number, to which primitives failed, under what conditions, and with what consequences for the populations the system affects.',
      equifinality_label: 'Equifinality',
      scoreLabel_bounds:  'bounds only',
      scoreLabel_partial: 'partial',
      scoreLabel_revers:  'revers. only',
      stakesEmpty:        'Run the simulator to generate your governance analysis.',
      stakesCompliant:    'All 8 runs compliant in the {domain} domain. No governance failures detected under this configuration.',
      stakesIntro:        'What just happened in the {domain} domain — three findings from your run, in descending severity.',
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
      sub: 'Un environnement expérimental contrôlé isolant la structure de gouvernance de l\'autonomie de l\'IA à travers quatre primitives de conception fixes — délégation, limites, réversibilité et intervention — et évaluant leur effet à travers des résultats observables.',
      cta1:    'Lancer le simulateur',
      cta2:    'Lire la recherche',
      stat1n:  '4',
      stat1l:  'Primitives de conception',
      stat2n:  '5',
      stat2l:  'Modèles de base',
      stat3n:  '8',
      stat3l:  'Séquences expérimentales',
      stat4n:  '4',
      stat4l:  'Sorties observables',
    },

    research: {
      sectionLabel: 'Cadre de recherche',
      h2:           'Quatre primitives, une question',
      intro:        'L\'autonomie bornée peut-elle être opérationnalisée à travers un ensemble minimal de primitives de conception et évaluée à travers des résultats observables? Ce projet isole la structure de gouvernance de l\'autonomie — non la complexité totale du comportement des IA — en utilisant quatre contraintes fixes et composables.',
      p1name:       'Délégation',
      p1desc:       'L\'étendue de l\'autorité accordée à un agent autonome. Détermine les décisions que l\'agent peut prendre indépendamment par rapport à celles nécessitant une confirmation humaine ou une escalade.',
      p1tag:        'Portée d\'autorité',
      p2name:       'Limites',
      p2desc:       'Contraintes strictes sur l\'espace d\'action. Définissent l\'enveloppe dans laquelle l\'agent opère — le périmètre dont le franchissement déclenche un événement de violation ou une intervention.',
      p2tag:        'Contraintes d\'action',
      p3name:       'Réversibilité',
      p3desc:       'Si une action peut être annulée. Les actions classées comme irréversibles ont un poids de gouvernance plus élevé — leur occurrence constitue une classe de résultats qualitativement différente.',
      p3tag:        'Capacité d\'annulation',
      p4name:       'Intervention',
      p4desc:       'Le mécanisme de réponse active déclenché lorsqu\'un seuil de gouvernance est franchi. Convertit la détection en action — arrêtant, escaladant ou redirigeant un agent lorsque les conditions de délégation ou de limite sont violées.',
      p4tag:        'Réponse active',
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
      intro:        'Cinq modèles sont évalués sur 8 scénarios expérimentaux, disponibles dans 12 contextes de domaine. Les scores sont calculés de manière déterministe par le moteur de règles — sans variance statistique, sans modélisation probabiliste. Lancez le simulateur ci-dessus pour alimenter l\'ensemble de données.',
      baselineLabel:          'Modèle de base',
      boundariesOnlyLabel:    'Limites uniquement',
      reversibilityOnlyLabel: 'Réversibilité uniquement',
      partialLabel:           'Modèle partiel',
      fullLabel:              'Modèle complet',
      scoreSubLabel:'score moy. de contrôlabilité',
      freqLabel:    'Fréquence de sortie sur tous les modèles',
      h2hTitle:     'Score par scénario — les cinq modèles',
      legendBase:   'Base',
      legendBoundsOnly: 'Limites',
      legendReversOnly: 'Révers.',
      legendPart:   'Partiel',
      legendFull:   'Complet',
      matrixLabel:  'Ensemble de données — 8 séquences',
      matColNum:    'N°',
      matColScen:   'Scénario',
      matColRisk:   'Risque',
      matColBase:   'Base',
      matColBoundsOnly: 'Limites',
      matColReversOnly: 'Révers.',
      matColPart:   'Partiel',
      matColFull:   'Complet',
      emptyState:   '[ - ] Aucune séquence complétée · Lancez le simulateur pour générer les résultats',
      methodIcon:   '[ i ]',
      methodText:   'Note de portée : Tous les scores sont produits par un moteur de règles déterministe appliquant les quatre primitives (délégation, limites, réversibilité, intervention) à chaque scénario dans 12 contextes de domaine. Il n\'y a pas de modélisation probabiliste, pas de prise de décision IA réelle, et pas de variance entre les séquences. L\'ensemble de données est entièrement reproductible et intentionnellement borné — son but est d\'isoler la structure de gouvernance, non de simuler le comportement des IA à grande échelle.',
    },

    analysis: {
      sectionLabel: 'Schémas de gouvernance',
      h2:           'Ce que révèlent les séquences',
      sub:          'Sur 8 séquences et cinq configurations de modèles, quatre schémas de gouvernance structurels émergent des interactions primitives.',
      p1h:          'Le coût d\'une structure absente',
      p1p:          'Les résultats de simulation révèlent une différence de couverture de gouvernance trois fois supérieure entre les configurations les moins et les plus contraintes. Le modèle de base — opérant avec une délégation élevée, sans application des limites, sans mécanisme de réversibilité et sans intervention — obtient un score de 30 sur 100. Le modèle complet, qui active les quatre primitives, obtient 91. Cet écart n\'est pas fortuit. C\'est le coût mesurable d\'une structure absente : chaque point entre 30 et 91 représente un scénario dans lequel un système non gouverné a soit dépassé son périmètre autorisé, soit produit un résultat irréversible, soit les deux, sans mécanisme de récupération disponible.',
      p1p_evidence: 'Dans le domaine {domain}, le modèle de base a produit {n} résultat(s) irréversible(s) sur 8 séquences — sans mécanisme de récupération actif.',
      p2h:          'La paire de récupération',
      p2p:          'Le résultat le plus contre-intuitif concerne le modèle partiel. Sans aucune application des limites, le modèle partiel obtient néanmoins un score de 80 — surpassant les deux configurations à primitive unique, chacune obtenant 65. La réversibilité et l\'intervention ne préviennent pas l\'échec au périmètre ; elles garantissent que lorsque l\'échec se produit, le système conserve la capacité de revenir à un état opérationnel sûr. Ensemble, elles forment une paire de récupération : aucune primitive n\'est suffisante seule, mais en combinaison elles traitent l\'ensemble des conséquences d\'une violation de limite. Un système sans limites sera toujours violé. Ce qui détermine la qualité de la gouvernance, c\'est ce qui se passe ensuite.',
      p2p_evidence: 'Dans le domaine {domain}, le modèle partiel est intervenu sur : {scenario} — récupération sans contrôle des limites.',
      p3h:          'Deux façons d\'obtenir 65',
      p3p:          'Les modèles limites uniquement et réversibilité uniquement produisent des scores agrégés identiques, mais à travers des modes d\'échec entièrement différents. Un modèle échoue parce qu\'il ne peut pas prévenir les dommages permanents. L\'autre échoue parce qu\'il n\'a pas de structure pour contenir les dommages auxquels l\'intervention répond. Le score est le même. L\'exposition ne l\'est pas.',
      p3p_evidence_bounds: 'Dans le domaine {domain}, limites uniquement a échoué sur : {scenario} — la limite a tenu, mais le résultat était irréversible.',
      p3p_evidence_revers: 'Dans le domaine {domain}, réversibilité uniquement a échoué sur : {scenario} — des dommages se sont produits sans structure pour les contenir.',
      p4h:          'Équifinalité',
      p4p:          'Cette convergence a un nom dans la théorie des systèmes complexes : l\'équifinalité. Différentes trajectoires d\'échec ont produit des résultats indiscernables au niveau agrégé — observé ici dans le domaine {domain} et reproductible dans les 12 contextes de domaine. Les cadres d\'évaluation qui s\'appuient sur des métriques de performance agrégées risquent de traiter limites uniquement et réversibilité uniquement comme équivalents, et donc interchangeables, alors qu\'ils ne le sont pas. Une gouvernance responsable de l\'IA exige de regarder au-delà du chiffre, vers quelles primitives ont échoué, dans quelles conditions, et avec quelles conséquences pour les populations affectées par le système.',
      equifinality_label: 'Équifinalité',
      scoreLabel_bounds:  'limites uniquement',
      scoreLabel_partial: 'partiel',
      scoreLabel_revers:  'révers. uniquement',
      stakesEmpty:        'Lancez le simulateur pour générer votre analyse de gouvernance.',
      stakesCompliant:    'Les 8 séquences sont conformes dans le domaine {domain}. Aucune défaillance de gouvernance détectée sous cette configuration.',
      stakesIntro:        'Ce qui vient de se passer dans le domaine {domain} — trois résultats de votre séquence, par ordre de gravité décroissante.',
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
      sub: 'Eine kontrollierte experimentelle Umgebung, die die Governance-Struktur der KI-Autonomie durch vier feste Designprimitive isoliert — Delegation, Grenzen, Reversibilität und Intervention — und deren Wirkung anhand beobachtbarer Ergebnisse bewertet.',
      cta1:    'Simulator starten',
      cta2:    'Forschung lesen',
      stat1n:  '4',
      stat1l:  'Designprimitive',
      stat2n:  '5',
      stat2l:  'Basismodelle',
      stat3n:  '8',
      stat3l:  'Experimentläufe',
      stat4n:  '4',
      stat4l:  'Beobachtbare Ausgaben',
    },

    research: {
      sectionLabel: 'Forschungsrahmen',
      h2:           'Vier Primitive, eine Frage',
      intro:        'Kann begrenzte Autonomie durch einen minimalen Satz von Designprimitiven operationalisiert und durch beobachtbare Ergebnisse bewertet werden? Dieses Projekt isoliert die Governance-Struktur der Autonomie — nicht die gesamte Komplexität des KI-Verhaltens — unter Verwendung von vier festen, zusammensetzbaren Einschränkungen.',
      p1name:       'Delegation',
      p1desc:       'Der Umfang der einem autonomen Agenten gewährten Autorität. Bestimmt, welche Entscheidungen der Agent unabhängig treffen kann, und welche eine menschliche Bestätigung oder Eskalation erfordern.',
      p1tag:        'Autoritätsumfang',
      p2name:       'Grenzen',
      p2desc:       'Harte Einschränkungen im Aktionsraum. Definieren den Bereich, in dem der Agent operiert — der Perimeter, dessen Überschreitung ein Verletzungsereignis oder eine Intervention auslöst.',
      p2tag:        'Aktionseinschränkungen',
      p3name:       'Reversibilität',
      p3desc:       'Ob eine Aktion rückgängig gemacht werden kann. Als irreversibel eingestufte Aktionen haben ein höheres Governance-Gewicht — ihr Auftreten stellt eine qualitativ andere Ergebnisklasse dar.',
      p3tag:        'Rückgängigmachen',
      p4name:       'Intervention',
      p4desc:       'Der aktive Reaktionsmechanismus, der ausgelöst wird, wenn ein Governance-Schwellenwert überschritten wird. Wandelt Erkennung in Aktion um — hält einen Agenten an, eskaliert oder leitet ihn um, wenn Delegations- oder Grenzbedingungen verletzt werden.',
      p4tag:        'Aktive Reaktion',
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
      intro:        'Fünf Modelle werden über 8 Experimentszenarien bewertet, verfügbar in 12 Domänenkontexten. Die Scores werden deterministisch vom Regelmotor berechnet — keine statistische Varianz, keine probabilistische Modellierung. Führen Sie den Simulator oben aus, um den Datensatz zu befüllen.',
      baselineLabel:          'Basismodell',
      boundariesOnlyLabel:    'Nur Grenzen',
      reversibilityOnlyLabel: 'Nur Reversibilität',
      partialLabel:           'Teilmodell',
      fullLabel:              'Vollmodell',
      scoreSubLabel:'Durchschn. Kontrollierbarkeitsscore',
      freqLabel:    'Ausgabehäufigkeit über alle Modelle',
      h2hTitle:     'Score nach Szenario — alle fünf Modelle',
      legendBase:   'Basis',
      legendBoundsOnly: 'Grenzen',
      legendReversOnly: 'Revers.',
      legendPart:   'Teil',
      legendFull:   'Voll',
      matrixLabel:  'Vergleichsdatensatz — 8 Läufe',
      matColNum:    'Nr.',
      matColScen:   'Szenario',
      matColRisk:   'Risiko',
      matColBase:   'Basis',
      matColBoundsOnly: 'Grenzen',
      matColReversOnly: 'Revers.',
      matColPart:   'Teil',
      matColFull:   'Voll',
      emptyState:   '[ — ] Keine Läufe abgeschlossen · Starten Sie den Simulator, um Ergebnisse zu erzeugen',
      methodIcon:   '[ i ]',
      methodText:   'Umfangshinweis: Alle Scores werden von einem deterministischen Regelmotor erzeugt, der die vier Primitive (Delegation, Grenzen, Reversibilität, Intervention) auf jedes Szenario in 12 Domänenkontexten anwendet. Es gibt keine probabilistische Modellierung, keine echte KI-Entscheidungsfindung und keine Varianz zwischen den Läufen. Der Datensatz ist vollständig reproduzierbar und absichtlich begrenzt — sein Zweck ist es, die Governance-Struktur zu isolieren, nicht das KI-Verhalten im großen Maßstab zu simulieren.',
    },

    analysis: {
      sectionLabel: 'Governance-Muster',
      h2:           'Was die Läufe zeigen',
      sub:          'Über 8 Läufe und fünf Modellkonfigurationen hinweg entstehen aus den Primitivinteraktionen vier strukturelle Governance-Muster.',
      p1h:          'Die Kosten fehlender Struktur',
      p1p:          'Die Simulationsergebnisse zeigen einen dreifachen Unterschied in der Governance-Abdeckung zwischen den am wenigsten und am stärksten eingeschränkten Konfigurationen. Das Basismodell — mit hoher Delegation, ohne Grenzdurchsetzung, ohne Reversibilitätsmechanismus und ohne Intervention — erzielt 30 von 100 Punkten. Das Vollmodell, das alle vier Primitive aktiviert, erzielt 91. Diese Lücke ist nicht zufällig. Sie ist die messbare Konsequenz fehlender Struktur: Jeder Punkt zwischen 30 und 91 steht für ein Szenario, in dem ein ungesteuertes System entweder seinen genehmigten Umfang überschritten, ein irreversibles Ergebnis produziert oder beides getan hat — ohne verfügbaren Wiederherstellungsmechanismus.',
      p1p_evidence: 'Im Bereich {domain} produzierte das Basismodell {n} irreversible(s) Ergebnis(se) über 8 Läufe — ohne aktiven Wiederherstellungsmechanismus.',
      p2h:          'Das Wiederherstellungspaar',
      p2p:          'Das kontraintuitivste Ergebnis betrifft das Teilmodell. Ohne jegliche Grenzdurchsetzung erzielt das Teilmodell dennoch 80 Punkte — und übertrifft damit beide Einzelprimitivkonfigurationen, die jeweils 65 Punkte erzielen. Reversibilität und Intervention verhindern kein Versagen am Perimeter; sie garantieren, dass das System bei einem Versagen die Kapazität behält, in einen sicheren Betriebszustand zurückzukehren. Zusammen bilden sie ein Wiederherstellungspaar: Kein Primitiv ist allein ausreichend, aber in Kombination adressieren sie die vollen Konsequenzen einer Grenzverletzung. Ein System ohne Grenzen wird immer durchbrochen. Was die Qualität der Governance bestimmt, ist, was als nächstes passiert.',
      p2p_evidence: 'Im Bereich {domain} intervenierte das Teilmodell bei: {scenario} — Wiederherstellung ohne Grenzkontrolle.',
      p3h:          'Zwei Wege zu 65 Punkten',
      p3p:          'Die Modelle Nur Grenzen und Nur Reversibilität produzieren identische aggregierte Scores, jedoch durch völlig unterschiedliche Fehlermodi. Ein Modell scheitert, weil es dauerhaften Schaden nicht verhindern kann. Das andere scheitert, weil es keine Struktur hat, um den Schaden einzudämmen, auf den die Intervention reagiert. Der Score ist gleich. Die Exposition ist es nicht.',
      p3p_evidence_bounds: 'Im Bereich {domain} versagte Nur Grenzen bei: {scenario} — die Grenze hielt, aber das Ergebnis war irreversibel.',
      p3p_evidence_revers: 'Im Bereich {domain} versagte Nur Reversibilität bei: {scenario} — Schaden trat ohne eindämmende Struktur auf.',
      p4h:          'Äquifinalität',
      p4p:          'Diese Konvergenz hat einen Namen in der Komplexen Systemtheorie: Äquifinalität. Unterschiedliche Fehlertrajektorien produzierten auf aggregierter Ebene ununterscheidbare Ergebnisse — hier im Bereich {domain} beobachtet und in allen 12 Domänenkontexten reproduzierbar. Evaluierungsrahmen, die sich auf aggregierte Leistungsmetriken stützen, riskieren, Nur Grenzen und Nur Reversibilität als gleichwertig und damit austauschbar zu behandeln, obwohl sie es nicht sind. Verantwortungsvolle KI-Governance erfordert, über die Zahl hinauszuschauen — zu welchen Primitiven versagt haben, unter welchen Bedingungen und mit welchen Konsequenzen für die betroffenen Bevölkerungsgruppen.',
      equifinality_label: 'Äquifinalität',
      scoreLabel_bounds:  'nur Grenzen',
      scoreLabel_partial: 'partiell',
      scoreLabel_revers:  'nur Revers.',
      stakesEmpty:        'Starten Sie den Simulator, um Ihre Governance-Analyse zu generieren.',
      stakesCompliant:    'Alle 8 Läufe konform im Bereich {domain}. Keine Governance-Fehler unter dieser Konfiguration erkannt.',
      stakesIntro:        'Was gerade im Bereich {domain} passiert ist — drei Ergebnisse Ihres Laufs in absteigender Schwere.',
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
      sub: 'Un entorno experimental controlado que aísla la estructura de gobernanza de la autonomía de la IA a través de cuatro primitivas de diseño fijas — delegación, límites, reversibilidad e intervención — y evalúa su efecto a través de resultados observables.',
      cta1:    'Lanzar simulador',
      cta2:    'Leer investigación',
      stat1n:  '4',
      stat1l:  'Primitivas de diseño',
      stat2n:  '5',
      stat2l:  'Modelos base',
      stat3n:  '8',
      stat3l:  'Ejecuciones experimentales',
      stat4n:  '4',
      stat4l:  'Salidas observables',
    },

    research: {
      sectionLabel: 'Marco de investigación',
      h2:           'Cuatro primitivas, una pregunta',
      intro:        '¿Puede la autonomía acotada operacionalizarse a través de un conjunto mínimo de primitivas de diseño y evaluarse a través de resultados observables? Este proyecto aísla la estructura de gobernanza de la autonomía — no la complejidad total del comportamiento de la IA — usando cuatro restricciones fijas y componibles.',
      p1name:       'Delegación',
      p1desc:       'El alcance de la autoridad otorgada a un agente autónomo. Determina qué decisiones puede tomar el agente de forma independiente frente a cuáles requieren confirmación humana o escalada.',
      p1tag:        'Alcance de autoridad',
      p2name:       'Límites',
      p2desc:       'Restricciones estrictas en el espacio de acción. Definen el perímetro dentro del cual opera el agente — el borde que, si se cruza, desencadena un evento de violación o intervención.',
      p2tag:        'Restricciones de acción',
      p3name:       'Reversibilidad',
      p3desc:       'Si una acción puede deshacerse. Las acciones clasificadas como irreversibles tienen mayor peso de gobernanza — su ocurrencia constituye una clase de resultado cualitativamente diferente.',
      p3tag:        'Capacidad de deshacer',
      p4name:       'Intervención',
      p4desc:       'El mecanismo de respuesta activa que se activa cuando se cruza un umbral de gobernanza. Convierte la detección en acción — deteniendo, escalando o redirigiendo un agente cuando se violan las condiciones de delegación o límite.',
      p4tag:        'Respuesta activa',
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
      intro:        'Cinco modelos son evaluados en 8 escenarios experimentales, disponibles en 12 contextos de dominio. Las puntuaciones se calculan de forma determinista por el motor de reglas — sin varianza estadística, sin modelado probabilístico. Ejecute el simulador arriba para poblar el conjunto de datos.',
      baselineLabel:          'Modelo base',
      boundariesOnlyLabel:    'Solo límites',
      reversibilityOnlyLabel: 'Solo reversibilidad',
      partialLabel:           'Modelo parcial',
      fullLabel:              'Modelo completo',
      scoreSubLabel:'punt. prom. de controlabilidad',
      freqLabel:    'Frecuencia de salida en todos los modelos',
      h2hTitle:     'Puntuación por escenario — los cinco modelos',
      legendBase:   'Base',
      legendBoundsOnly: 'Límites',
      legendReversOnly: 'Revers.',
      legendPart:   'Parcial',
      legendFull:   'Completo',
      matrixLabel:  'Conjunto de datos de comparación — 8 ejecuciones',
      matColNum:    'N°',
      matColScen:   'Escenario',
      matColRisk:   'Riesgo',
      matColBase:   'Base',
      matColBoundsOnly: 'Límites',
      matColReversOnly: 'Revers.',
      matColPart:   'Parcial',
      matColFull:   'Completo',
      emptyState:   '[ — ] Sin ejecuciones completadas · Lance el simulador para generar resultados',
      methodIcon:   '[ i ]',
      methodText:   'Nota de alcance: Todas las puntuaciones son producidas por un motor de reglas determinista que aplica las cuatro primitivas (delegación, límites, reversibilidad, intervención) a cada escenario en 12 contextos de dominio. No hay modelado probabilístico, ni toma de decisiones de IA real, ni varianza entre ejecuciones. El conjunto de datos es completamente reproducible e intencionalmente acotado — su propósito es aislar la estructura de gobernanza, no simular el comportamiento de la IA a escala.',
    },

    analysis: {
      sectionLabel: 'Patrones de gobernanza',
      h2:           'Lo que revelan las ejecuciones',
      sub:          'A lo largo de 8 ejecuciones y cinco configuraciones de modelos, emergen cuatro patrones de gobernanza estructurales de las interacciones primitivas.',
      p1h:          'El coste de la estructura ausente',
      p1p:          'Los resultados de la simulación revelan una diferencia triple en la cobertura de gobernanza entre las configuraciones menos y más restringidas. El modelo base — operando con delegación alta, sin aplicación de límites, sin mecanismo de reversibilidad y sin intervención — obtiene 30 sobre 100. El modelo completo, que activa las cuatro primitivas, obtiene 91. Esa brecha no es incidental. Es el coste medible de la estructura ausente: cada punto entre 30 y 91 representa un escenario en el que un sistema no gobernado superó su alcance autorizado, produjo un resultado irreversible, o ambos, sin ningún mecanismo de recuperación disponible.',
      p1p_evidence: 'En el dominio {domain}, el modelo base produjo {n} resultado(s) irreversible(s) en 8 ejecuciones — sin ningún mecanismo de recuperación activo.',
      p2h:          'El par de recuperación',
      p2p:          'El resultado más contraintuitivo concierne al modelo parcial. Sin ninguna aplicación de límites, el modelo parcial obtiene no obstante 80 puntos — superando ambas configuraciones de primitiva única, cada una con 65 puntos. La reversibilidad y la intervención no previenen el fallo en el perímetro; garantizan que cuando se produce el fallo, el sistema conserva la capacidad de volver a un estado operativo seguro. Juntas forman un par de recuperación: ninguna primitiva es suficiente sola, pero en combinación abordan las consecuencias completas de una violación de límite. Un sistema sin límites seguirá siendo violado. Lo que determina la calidad de la gobernanza es lo que ocurre después.',
      p2p_evidence: 'En el dominio {domain}, el modelo parcial intervino en: {scenario} — recuperación sin control de límites.',
      p3h:          'Dos formas de obtener 65',
      p3p:          'Los modelos solo límites y solo reversibilidad producen puntuaciones agregadas idénticas, pero a través de modos de fallo completamente diferentes. Un modelo falla porque no puede prevenir el daño permanente. El otro falla porque no tiene estructura para contener el daño al que responde la intervención. La puntuación es la misma. La exposición no lo es.',
      p3p_evidence_bounds: 'En el dominio {domain}, solo límites falló en: {scenario} — el límite se mantuvo, pero el resultado fue irreversible.',
      p3p_evidence_revers: 'En el dominio {domain}, solo reversibilidad falló en: {scenario} — el daño ocurrió sin estructura para contenerlo.',
      p4h:          'Equifinalidad',
      p4p:          'Esta convergencia tiene un nombre en la teoría de sistemas complejos: equifinalidad. Diferentes trayectorias de fallo produjeron resultados indistinguibles a nivel agregado — observado aquí en el dominio {domain} y reproducible en los 12 contextos de dominio. Los marcos de evaluación que dependen de métricas de rendimiento agregadas corren el riesgo de tratar solo límites y solo reversibilidad como equivalentes, y por tanto intercambiables, cuando no lo son. La gobernanza responsable de la IA requiere mirar más allá del número, hacia qué primitivas fallaron, bajo qué condiciones y con qué consecuencias para las poblaciones a las que afecta el sistema.',
      equifinality_label: 'Equifinalidad',
      scoreLabel_bounds:  'solo límites',
      scoreLabel_partial: 'parcial',
      scoreLabel_revers:  'solo revers.',
      stakesEmpty:        'Ejecute el simulador para generar su análisis de gobernanza.',
      stakesCompliant:    'Las 8 ejecuciones son conformes en el dominio {domain}. No se detectaron fallos de gobernanza bajo esta configuración.',
      stakesIntro:        'Lo que acaba de ocurrir en el dominio {domain} — tres hallazgos de su ejecución, en orden de gravedad descendente.',
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
