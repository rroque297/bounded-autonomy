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
      drift:      'Drift',
      tag:        'Proof of Concept v1.0',
    },

    // ── Hero
    hero: {
      label:      'Master in Design for Responsible Artificial Intelligence',
      labelSchool:'Elisava School of Design and Engineering',
      h1a:     'Bounded',
      h1b:     'Autonomy',
      h1c:     'for AI',
      sub:     'A controlled experimental environment isolating the governance structure of AI autonomy through four fixed design primitives — delegation, boundaries, reversibility, and intervention — and evaluating their effect through observable outcomes.',
      authorLabel:   'Research by',
      author:        'Roberto Roque',
      cta1:    'Launch Simulator',
      cta2:    'Read Research',
      stat1n:  '4',
      stat1l:  'Design Primitives + Horizon',
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
      p5name:       'Design Horizon',
      p5desc:       'The governance frontier this framework identifies but cannot yet operationalize. Contestability — the capacity for affected parties to see, challenge, or reject autonomous decisions — marks the boundary of what bounded autonomy can currently guarantee.',
      p5tag:        'Frontier',
    },

    // ── Simulator
    simulator: {
      sectionLabel: 'Interactive Proof of Concept',
      h2:           'Run the experiment',
      sub:          'Each model configuration represents a different combination of governance constraints. Running the experiment shows what happens to autonomous decisions as those constraints are added, removed, or recombined — from fully ungoverned to fully structured.',
      subGuide:     'Suggested path: choose a domain, start with Baseline and run all 8 to see what ungoverned AI decisions look like in practice. Then switch to Full to see what governance structure changes.',
      subNote:      'All logic is deterministic and rule-based — no AI is invoked.',
      primDelegation:   'delegation exceeded',
      primBoundary:     'boundary breached',
      primReversibility:'reversibility failed',
      primAllHeld:      'all primitives held',
      primIntervention: 'intervention active',
      harm_oversight_erosion:        'oversight erosion risk',
      harm_accountability_diffusion: 'accountability diffusion risk',
      harm_delegation_opacity:       'delegation opacity risk',
      harm_governance_tempo:         'governance tempo risk',
      harm_consent_displacement:     'consent displacement risk',
      domainLabel:  'Domain',
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
      modelDescBaseline:         'No governance primitives active. The agent operates with full delegation, no boundary enforcement, no reversibility checks, and no intervention mechanism. This is the ungoverned reference state.',
      modelDescBoundariesOnly:   'Boundary enforcement active with intervention. The agent cannot cross its perimeter without triggering a response — but delegation remains unrestricted and irreversible actions are not screened.',
      modelDescReversibilityOnly:'Reversibility checks active. Irreversible actions are screened before execution — but no boundary enforcement exists and no intervention mechanism is available.',
      modelDescPartial:          'Reversibility checks and intervention active, but no boundary enforcement. The system can recover from failures but has no perimeter control. A recovery pair without a containment layer.',
      modelDescFull:             'All four primitives active. Delegation is bounded, boundaries are enforced, irreversible actions are screened, and intervention fires on any governance threshold breach.',
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
      scoreSubLabel:          'avg. controllability score',
      freqLabel:              'Output frequency across all models',
      h2hTitle:               'Score by scenario — all five models',
      legendBase:             'Baseline',
      legendBoundsOnly:       'Bounds Only',
      legendReversOnly:       'Revers. Only',
      legendPart:             'Partial',
      legendFull:             'Full',
      matrixLabel:            'The complete dataset — every model, every scenario, every output. Reproducible and deterministic. Notice that Bounds and Revers. columns produce different outputs but arrive at identical scores.',
      matColNum:              '#',
      matColScen:             'Scenario',
      matColRisk:             'Risk',
      matColBase:             'Baseline',
      matColBoundsOnly:       'Bounds',
      matColReversOnly:       'Revers.',
      matColPart:             'Partial',
      matColFull:             'Full',
      emptyState:             '[ - ] No runs completed. Launch the simulator to generate results',
      methodIcon:             '[ i ]',
      methodText:             'Scope note: All scores are produced by a deterministic rule engine applying the four primitives (delegation, boundaries, reversibility, intervention) to each scenario across 12 domain contexts. There is no probabilistic modeling, no real AI decision-making, and no variance across runs. The dataset is fully reproducible and intentionally bounded — its purpose is to isolate governance structure, not to simulate AI behavior at scale.',
      thisRunEmpty:           'Run the simulator to see your results here.',
      routineHarm:            'Routine action — no governance threshold breached. No harm consequence recorded.',
      showAll:                'Show all {n} runs',
      showLess:               'Show less',
      verifiedLabel:          'Verified theoretical scores',
      verifiedNote:           'Domain-invariant. Computed across all 8 scenarios by the rule engine.',
      narrativeEmpty:         'Run the simulator to generate a governance summary for this domain.',
      narrativeP1:            'In this run, {model} produced {outputSummary} across 8 scenarios. Its average controllability score was {baseScore} out of 100.',
      narrativeP2:            'The full model scored {fullScore} — a gap of {gap} points. That gap is not incidental. Every point between these two scores represents a scenario in which governance structure either prevented a failure, caught it before it completed, or restored the system to safe operational readiness. Scroll to the Analysis section to understand what drives that difference.',
      forwardPointer:         'These scores measure governance coverage. The gap between the lowest and highest score is not incidental — it is the measurable cost of absent structure. What the scores reveal about failure modes, recovery patterns, and the limits of aggregate evaluation is examined in the Analysis section.',
      forwardLink:            'Go to Analysis',
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
      stakesSelectionLogic: 'Findings are selected in order of governance severity: irreversible outcomes first, violations second, interventions third. An irreversible outcome means no recovery mechanism was available. A violation means the system acted outside its sanctioned scope without response. An intervention means the governance structure caught the failure before it completed.',
      driftClosing:       'In a live agentic system, this curve would never reset.',
      driftLabel:         'Cumulative Pressure',
      driftH2:            'How pressure accumulates',
      driftIntro:         'Each run contributes governance pressure based on which primitives failed. The curves below show how that pressure accumulates across all 8 runs — and what it would look like if the experiment never stopped.',
      blindSpotLabel:     'What this framework cannot see',
      blindSpotP1:        'The four primitives evaluated here — delegation, boundaries, reversibility, and intervention — establish accountability at decision moments. They govern discrete actions at identifiable points in time. What they cannot govern is the space between decisions: the slow, incremental expansion of effective authority that occurs without any single action ever triggering a boundary violation.',
      blindSpotP2:        'This is autonomy creep. An agentic system that gradually shapes outcomes over hundreds of interactions, each individually compliant, can accumulate influence far beyond its sanctioned scope without producing a single violation event. The curve above resets between experiments. In a deployed system, it never would — and no primitive in this framework would detect the drift.',
      blindSpotConceptLabel: 'Continuous governance',
      blindSpotConceptText:  'A complete governance architecture requires a layer beyond these four primitives: continuous behavioural monitoring that compares actual operational patterns against the original delegation mandate over time. The four primitives define what a system is permitted to do. Continuous governance would detect when what a system is actually doing has silently diverged from that mandate — not at a decision moment, but across the accumulation of decisions. That is the logical extension of this framework, and the boundary of this proof of concept.',
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
      credit: 'Bounded Autonomy Research · Master in Design for Responsible Artificial Intelligence · Elisava School of Design and Engineering · 2026',
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
      drift:      'Dérive',
      tag:        'Preuve de concept v1.0',
    },

    hero: {
      label:      'Master en Design pour l\'Intelligence Artificielle Responsable',
      labelSchool:'Elisava École de Design et d\'Ingénierie',
      h1a:     'Autonomie',
      h1b:     'Bornée',
      h1c:     'pour l\'IA',
      sub:     'Un environnement expérimental contrôlé isolant la structure de gouvernance de l\'autonomie de l\'IA à travers quatre primitives de conception fixes — délégation, limites, réversibilité et intervention — et évaluant leur effet à travers des résultats observables.',
      authorLabel:   'Recherche par',
      author:        'Roberto Roque',
      cta1:    'Lancer le simulateur',
      cta2:    'Lire la recherche',
      stat1n:  '4',
      stat1l:  'Primitives de conception + Horizon',
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
      p5name:       'Horizon de conception',
      p5desc:       'La frontière de gouvernance que ce cadre identifie mais ne peut pas encore opérationnaliser. La contestabilité — la capacité des parties concernées à voir, contester ou rejeter les décisions autonomes — marque la limite de ce que l\'autonomie bornée peut actuellement garantir.',
      p5tag:        'Frontière',
    },

    simulator: {
      sectionLabel: 'Preuve de concept interactive',
      h2:           'Lancer l\'expérience',
      sub:          'Chaque configuration de modèle représente un ensemble différent de contraintes de gouvernance. L\'expérience montre ce qui arrive aux décisions autonomes lorsque ces contraintes sont absentes, partielles ou complètes.',
      subGuide:     'Parcours suggéré : commencez par le modèle de base et exécutez les 8 séquences pour observer le comportement non gouverné. Passez ensuite au modèle complet pour voir ce que la structure de gouvernance change.',
      subNote:      'Toute la logique est déterministe et basée sur des règles — aucune IA n\'est invoquée.',
      primDelegation:   'délégation dépassée',
      primBoundary:     'limite franchie',
      primReversibility:'réversibilité échouée',
      primAllHeld:      'toutes les primitives ont tenu',
      primIntervention: 'intervention active',
      harm_oversight_erosion:        'risque d\'érosion de la supervision',
      harm_accountability_diffusion: 'risque de diffusion de la responsabilité',
      harm_delegation_opacity:       'risque d\'opacité de délégation',
      harm_governance_tempo:         'risque de tempo de gouvernance',
      harm_consent_displacement:     'risque de déplacement du consentement',
      domainLabel:  'Domaine',
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
      modelDescBaseline:         'Aucune primitive de gouvernance active. L\'agent opère avec une délégation totale, sans application des limites, sans vérification de réversibilité et sans mécanisme d\'intervention. C\'est l\'état de référence non gouverné.',
      modelDescBoundariesOnly:   'Application des limites active avec intervention. L\'agent ne peut pas franchir son périmètre sans déclencher une réponse — mais la délégation reste sans restriction et les actions irréversibles ne sont pas filtrées.',
      modelDescReversibilityOnly:'Vérifications de réversibilité actives. Les actions irréversibles sont filtrées avant exécution — mais aucune application des limites n\'existe et aucun mécanisme d\'intervention n\'est disponible.',
      modelDescPartial:          'Vérifications de réversibilité et intervention actives, mais sans application des limites. Le système peut se remettre des défaillances mais n\'a pas de contrôle du périmètre. Une paire de récupération sans couche de confinement.',
      modelDescFull:             'Les quatre primitives actives. La délégation est bornée, les limites sont appliquées, les actions irréversibles sont filtrées et l\'intervention se déclenche sur tout franchissement de seuil de gouvernance.',
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
      matrixLabel:  'L\'ensemble de données complet — chaque modèle, chaque scénario, chaque résultat. Reproductible et déterministe. Notez que les colonnes Limites et Révers. produisent des résultats différents mais arrivent à des scores identiques.',
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
      thisRunEmpty:    'Lancez le simulateur pour voir vos résultats ici.',
      routineHarm:     'Action routinière — aucun seuil de gouvernance franchi. Aucune conséquence de préjudice enregistrée.',
      showAll:         'Afficher les {n} séquences',
      showLess:        'Réduire',
      verifiedLabel:   'Scores théoriques vérifiés',
      verifiedNote:    'Indépendant du domaine. Calculé sur les 8 scénarios par le moteur de règles.',
      narrativeEmpty:  'Lancez le simulateur pour générer un résumé de gouvernance pour ce domaine.',
      narrativeP1:     'Dans cette séquence, {model} a produit {outputSummary} sur 8 scénarios. Son score moyen de contrôlabilité était de {baseScore} sur 100.',
      narrativeP2:     'Le modèle complet a obtenu {fullScore} — un écart de {gap} points. Cet écart n\'est pas fortuit. Chaque point entre ces deux scores représente un scénario dans lequel la structure de gouvernance a soit prévenu une défaillance, soit la détectée avant qu\'elle ne se complète, soit restauré le système à un état opérationnel sûr. Faites défiler jusqu\'à la section Analyse pour comprendre ce qui explique cette différence.',
      forwardPointer:  'Ces scores mesurent la couverture de gouvernance. L\'écart entre le score le plus bas et le plus élevé n\'est pas fortuit — c\'est le coût mesurable d\'une structure absente. Ce que les scores révèlent sur les modes de défaillance, les schémas de récupération et les limites de l\'évaluation agrégée est examiné dans la section Analyse.',
      forwardLink:     'Aller à l\'analyse →',
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
      stakesSelectionLogic: 'Les résultats sont sélectionnés par ordre de gravité de gouvernance : les résultats irréversibles en premier, les violations en second, les interventions en troisième. Un résultat irréversible signifie qu\'aucun mécanisme de récupération n\'était disponible. Une violation signifie que le système a agi hors de son périmètre autorisé sans réponse. Une intervention signifie que la structure de gouvernance a détecté la défaillance avant qu\'elle ne se complète.',
      driftClosing:       'Dans un système agentique en production, cette courbe ne se réinitialiserait jamais.',
      driftLabel:         'Pression cumulée',
      driftH2:            'Comment la pression s\'accumule',
      driftIntro:         'Chaque séquence contribue une pression de gouvernance selon les primitives qui ont échoué. Les courbes ci-dessous montrent comment cette pression s\'accumule sur les 8 séquences — et ce à quoi elle ressemblerait si l\'expérience ne s\'arrêtait jamais.',
      blindSpotLabel:     'Ce que ce cadre ne peut pas voir',
      blindSpotP1:        'Les quatre primitives évaluées ici — délégation, limites, réversibilité et intervention — établissent la responsabilité aux moments de décision. Elles gouvernent des actions discrètes à des points identifiables dans le temps. Ce qu\'elles ne peuvent pas gouverner, c\'est l\'espace entre les décisions : l\'expansion lente et progressive de l\'autorité effective qui se produit sans qu\'aucune action individuelle ne déclenche une violation de limite.',
      blindSpotP2:        'C\'est ce qu\'on appelle la dérive d\'autonomie. Un système agentique qui façonne progressivement les résultats au fil de centaines d\'interactions, chacune individuellement conforme, peut accumuler une influence bien au-delà de son périmètre autorisé sans produire un seul événement de violation. La courbe ci-dessus se réinitialise entre les expériences. Dans un système déployé, ce ne serait jamais le cas — et aucune primitive de ce cadre ne détecterait la dérive.',
      blindSpotConceptLabel: 'Gouvernance continue',
      blindSpotConceptText:  'Une architecture de gouvernance complète nécessite une couche au-delà de ces quatre primitives : une surveillance comportementale continue qui compare les modèles opérationnels réels avec le mandat de délégation original au fil du temps. Les quatre primitives définissent ce qu\'un système est autorisé à faire. La gouvernance continue détecterait le moment où ce qu\'un système fait réellement a silencieusement divergé de ce mandat — non pas à un moment de décision, mais à travers l\'accumulation de décisions. C\'est l\'extension logique de ce cadre, et la limite de cette preuve de concept.',
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
      credit: 'Recherche Autonomie Bornée · Master en Design pour l\'IA Responsable · Elisava École de Design et d\'Ingénierie · 2026',
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
      drift:      'Drift',
      tag:        'Machbarkeitsnachweis v1.0',
    },

    hero: {
      label:      'Master in Design für verantwortungsvolle Künstliche Intelligenz',
      labelSchool:'Elisava Schule für Design und Ingenieurwesen',
      h1a:     'Begrenzte',
      h1b:     'Autonomie',
      h1c:     'für KI',
      sub:     'Eine kontrollierte experimentelle Umgebung, die die Governance-Struktur der KI-Autonomie durch vier feste Designprimitive isoliert — Delegation, Grenzen, Reversibilität und Intervention — und deren Wirkung anhand beobachtbarer Ergebnisse bewertet.',
      authorLabel:   'Forschung von',
      author:        'Roberto Roque',
      cta1:    'Simulator starten',
      cta2:    'Forschung lesen',
      stat1n:  '4',
      stat1l:  'Designprimitive + Horizont',
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
      p5name:       'Designhorizont',
      p5desc:       'Die Governance-Grenze, die dieses Framework identifiziert, aber noch nicht operationalisieren kann. Anfechtbarkeit — die Fähigkeit betroffener Parteien, autonome Entscheidungen einzusehen, anzufechten oder abzulehnen — markiert die Grenze dessen, was begrenzte Autonomie derzeit garantieren kann.',
      p5tag:        'Horizont',
    },

    simulator: {
      sectionLabel: 'Interaktiver Machbarkeitsnachweis',
      h2:           'Experiment ausführen',
      sub:          'Jede Modellkonfiguration stellt eine andere Kombination von Governance-Einschränkungen dar. Das Experiment zeigt, was mit autonomen Entscheidungen passiert, wenn diese Einschränkungen hinzugefügt, entfernt oder neu kombiniert werden — von vollständig ungesteuert bis vollständig strukturiert.',
      subGuide:     'Empfohlener Einstieg: Beginnen Sie mit dem Basismodell und führen Sie alle 8 Läufe durch, um ungesteuertes Verhalten zu beobachten. Wechseln Sie dann zum Vollmodell, um zu sehen, was die Governance-Struktur verändert.',
      subNote:      'Die gesamte Logik ist deterministisch und regelbasiert — keine KI wird involviert.',
      primDelegation:   'Delegation überschritten',
      primBoundary:     'Grenze verletzt',
      primReversibility:'Reversibilität fehlgeschlagen',
      primAllHeld:      'alle Primitive haben gehalten',
      primIntervention: 'Intervention aktiv',
      harm_oversight_erosion:        'Aufsichtserosionsrisiko',
      harm_accountability_diffusion: 'Verantwortlichkeitsdiffusionsrisiko',
      harm_delegation_opacity:       'Delegationsopazitätsrisiko',
      harm_governance_tempo:         'Governance-Temporisiko',
      harm_consent_displacement:     'Einwilligungsverschiebungsrisiko',
      domainLabel:  'Domäne',
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
      modelDescBaseline:         'Keine Governance-Primitive aktiv. Der Agent operiert mit voller Delegation, ohne Grenzdurchsetzung, ohne Reversibilitätsprüfungen und ohne Interventionsmechanismus. Dies ist der ungesteuerte Referenzzustand.',
      modelDescBoundariesOnly:   'Grenzdurchsetzung mit Intervention aktiv. Der Agent kann seinen Perimeter nicht überschreiten, ohne eine Reaktion auszulösen — aber die Delegation bleibt uneingeschränkt und irreversible Aktionen werden nicht gefiltert.',
      modelDescReversibilityOnly:'Reversibilitätsprüfungen aktiv. Irreversible Aktionen werden vor der Ausführung gefiltert — aber es gibt keine Grenzdurchsetzung und keinen Interventionsmechanismus.',
      modelDescPartial:          'Reversibilitätsprüfungen und Intervention aktiv, aber ohne Grenzdurchsetzung. Das System kann sich von Fehlern erholen, hat aber keine Perimeterkontrolle. Ein Wiederherstellungspaar ohne Eindämmungsschicht.',
      modelDescFull:             'Alle vier Primitive aktiv. Die Delegation ist begrenzt, Grenzen werden durchgesetzt, irreversible Aktionen werden gefiltert und die Intervention wird bei jedem Governance-Schwellenwertverstoß ausgelöst.',
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
      matrixLabel:  'Der vollständige Datensatz — jedes Modell, jedes Szenario, jedes Ergebnis. Reproduzierbar und deterministisch. Beachten Sie, dass die Spalten Grenzen und Revers. unterschiedliche Ergebnisse produzieren, aber identische Scores erreichen.',
      matColNum:    'Nr.',
      matColScen:   'Szenario',
      matColRisk:   'Risiko',
      matColBase:   'Basis',
      matColBoundsOnly: 'Grenzen',
      matColReversOnly: 'Revers.',
      matColPart:      'Teil',
      matColFull:      'Voll',
      emptyState:      '[ — ] Keine Läufe abgeschlossen · Starten Sie den Simulator, um Ergebnisse zu erzeugen',
      methodIcon:      '[ i ]',
      methodText:      'Umfangshinweis: Alle Scores werden von einem deterministischen Regelmotor erzeugt, der die vier Primitive (Delegation, Grenzen, Reversibilität, Intervention) auf jedes Szenario in 12 Domänenkontexten anwendet. Es gibt keine probabilistische Modellierung, keine echte KI-Entscheidungsfindung und keine Varianz zwischen den Läufen. Der Datensatz ist vollständig reproduzierbar und absichtlich begrenzt — sein Zweck ist es, die Governance-Struktur zu isolieren, nicht das KI-Verhalten im großen Maßstab zu simulieren.',
      thisRunEmpty:    'Starten Sie den Simulator, um Ihre Ergebnisse hier zu sehen.',
      routineHarm:     'Routineaktion — kein Governance-Schwellenwert überschritten. Keine Schadenskonsequenz verzeichnet.',
      showAll:         'Alle {n} Läufe anzeigen',
      showLess:        'Weniger anzeigen',
      verifiedLabel:   'Verifizierte theoretische Scores',
      verifiedNote:    'Domänenunabhängig. Vom Regelmotor über alle 8 Szenarien berechnet.',
      narrativeEmpty:  'Starten Sie den Simulator, um eine Governance-Zusammenfassung für diese Domäne zu generieren.',
      narrativeP1:     'In diesem Lauf produzierte {model} {outputSummary} über 8 Szenarien. Sein durchschnittlicher Kontrollierbarkeitsscore war {baseScore} von 100.',
      narrativeP2:     'Das Vollmodell erzielte {fullScore} — eine Lücke von {gap} Punkten. Diese Lücke ist nicht zufällig. Jeder Punkt zwischen diesen zwei Scores repräsentiert ein Szenario, in dem die Governance-Struktur entweder einen Fehler verhinderte, ihn erkannte bevor er sich vollendete, oder das System in einen sicheren Betriebszustand zurückversetzte. Scrollen Sie zum Analyseabschnitt, um zu verstehen, was diesen Unterschied antreibt.',
      forwardPointer:  'Diese Scores messen die Governance-Abdeckung. Der Abstand zwischen dem niedrigsten und höchsten Score ist nicht zufällig — er ist die messbare Konsequenz fehlender Struktur. Was die Scores über Fehlermodi, Wiederherstellungsmuster und die Grenzen der aggregierten Bewertung enthüllen, wird im Analyseabschnitt untersucht.',
      forwardLink:     'Zur Analyse →',
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
      stakesSelectionLogic: 'Ergebnisse werden nach Governance-Schwere ausgewählt: irreversible Ergebnisse zuerst, Verstöße zweite, Interventionen dritte. Ein irreversibles Ergebnis bedeutet, dass kein Wiederherstellungsmechanismus verfügbar war. Ein Verstoß bedeutet, dass das System außerhalb seines genehmigten Bereichs ohne Reaktion handelte. Eine Intervention bedeutet, dass die Governance-Struktur den Fehler erkannte, bevor er sich vollendete.',
      driftClosing:       'In einem produktiven agentischen System würde sich diese Kurve niemals zurücksetzen.',
      driftLabel:         'Kumulativer Druck',
      driftH2:            'Wie sich Druck akkumuliert',
      driftIntro:         'Jeder Lauf trägt Governance-Druck bei, basierend darauf, welche Primitive versagt haben. Die Kurven unten zeigen, wie sich dieser Druck über alle 8 Läufe akkumuliert — und wie es aussehen würde, wenn das Experiment nie aufhören würde.',
      blindSpotLabel:     'Was dieses Framework nicht sehen kann',
      blindSpotP1:        'Die vier hier bewerteten Primitive — Delegation, Grenzen, Reversibilität und Intervention — etablieren Verantwortlichkeit in Entscheidungsmomenten. Sie regeln diskrete Aktionen zu identifizierbaren Zeitpunkten. Was sie nicht regeln können, ist der Raum zwischen Entscheidungen: die langsame, schrittweise Ausdehnung effektiver Autorität, die ohne dass eine einzelne Aktion eine Grenzverletzung auslöst, stattfindet.',
      blindSpotP2:        'Dies ist Autonomie-Drift. Ein agentisches System, das über Hunderte von Interaktionen hinweg schrittweise Ergebnisse gestaltet, jede einzeln konform, kann Einfluss weit über seinen genehmigten Umfang ansammeln, ohne ein einziges Verletzungsereignis zu produzieren. Die obige Kurve setzt sich zwischen Experimenten zurück. In einem eingesetzten System würde sie es nie tun — und kein Primitiv in diesem Framework würde den Drift erkennen.',
      blindSpotConceptLabel: 'Kontinuierliche Governance',
      blindSpotConceptText:  'Eine vollständige Governance-Architektur erfordert eine Schicht jenseits dieser vier Primitive: kontinuierliche Verhaltensüberwachung, die tatsächliche Betriebsmuster über Zeit mit dem ursprünglichen Delegationsmandat vergleicht. Die vier Primitive definieren, was ein System tun darf. Kontinuierliche Governance würde erkennen, wenn das, was ein System tatsächlich tut, still von diesem Mandat abgewichen ist — nicht in einem Entscheidungsmoment, sondern über die Anhäufung von Entscheidungen. Das ist die logische Erweiterung dieses Frameworks und die Grenze dieses Machbarkeitsnachweises.',
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
      credit: 'Forschung Begrenzte Autonomie · Master in Design für verantwortungsvolle KI · Elisava Schule für Design und Ingenieurwesen · 2026',
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
      drift:      'Deriva',
      tag:        'Prueba de concepto v1.0',
    },

    hero: {
      label:      'Máster en Diseño para la Inteligencia Artificial Responsable',
      labelSchool:'Elisava Escuela de Diseño e Ingeniería',
      h1a:     'Autonomía',
      h1b:     'Acotada',
      h1c:     'para IA',
      sub:     'Un entorno experimental controlado que aísla la estructura de gobernanza de la autonomía de la IA a través de cuatro primitivas de diseño fijas — delegación, límites, reversibilidad e intervención — y evalúa su efecto a través de resultados observables.',
      authorLabel:   'Investigación de',
      author:        'Roberto Roque',
      cta1:    'Lanzar simulador',
      cta2:    'Leer investigación',
      stat1n:  '4',
      stat1l:  'Primitivas + Horizonte',
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
      p5name:       'Horizonte de diseño',
      p5desc:       'La frontera de gobernanza que este marco identifica pero aún no puede operacionalizar. La contestabilidad — la capacidad de las partes afectadas para ver, cuestionar o rechazar las decisiones autónomas — marca el límite de lo que la autonomía acotada puede garantizar actualmente.',
      p5tag:        'Frontera',
    },

    simulator: {
      sectionLabel: 'Prueba de concepto interactiva',
      h2:           'Ejecutar el experimento',
      sub:          'Cada configuración de modelo representa una combinación diferente de restricciones de gobernanza. El experimento muestra qué ocurre con las decisiones autónomas a medida que esas restricciones se añaden, eliminan o recombinan — desde totalmente no gobernado hasta totalmente estructurado.',
      subGuide:     'Recorrido sugerido: comience con el modelo base y ejecute las 8 ejecuciones para observar el comportamiento no gobernado. Luego cambie al modelo completo para ver qué cambia la estructura de gobernanza.',
      subNote:      'Toda la lógica es determinista y basada en reglas — no se invoca ninguna IA.',
      primDelegation:   'delegación excedida',
      primBoundary:     'límite vulnerado',
      primReversibility:'reversibilidad fallida',
      harm_oversight_erosion:        'riesgo de erosión de supervisión',
      harm_accountability_diffusion: 'riesgo de difusión de responsabilidad',
      harm_delegation_opacity:       'riesgo de opacidad de delegación',
      harm_governance_tempo:         'riesgo de tempo de gobernanza',
      harm_consent_displacement:     'riesgo de desplazamiento del consentimiento',
      primAllHeld:      'todas las primitivas se mantuvieron',
      primIntervention: 'intervención activa',
      domainLabel:  'Dominio',
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
      modelDescBaseline:         'Ninguna primitiva de gobernanza activa. El agente opera con delegación total, sin aplicación de límites, sin verificaciones de reversibilidad y sin mecanismo de intervención. Este es el estado de referencia no gobernado.',
      modelDescBoundariesOnly:   'Aplicación de límites activa con intervención. El agente no puede cruzar su perímetro sin activar una respuesta — pero la delegación permanece sin restricciones y las acciones irreversibles no son filtradas.',
      modelDescReversibilityOnly:'Verificaciones de reversibilidad activas. Las acciones irreversibles son filtradas antes de la ejecución — pero no existe aplicación de límites ni mecanismo de intervención disponible.',
      modelDescPartial:          'Verificaciones de reversibilidad e intervención activas, pero sin aplicación de límites. El sistema puede recuperarse de los fallos pero no tiene control del perímetro. Un par de recuperación sin capa de contención.',
      modelDescFull:             'Las cuatro primitivas activas. La delegación está acotada, los límites se aplican, las acciones irreversibles son filtradas y la intervención se activa ante cualquier infracción del umbral de gobernanza.',
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
      matrixLabel:  'El conjunto de datos completo — cada modelo, cada escenario, cada resultado. Reproducible y determinista. Observe que las columnas Límites y Revers. producen resultados diferentes pero llegan a puntuaciones idénticas.',
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
      thisRunEmpty:    'Ejecute el simulador para ver sus resultados aquí.',
      routineHarm:     'Acción rutinaria — ningún umbral de gobernanza superado. No se registró ninguna consecuencia de daño.',
      showAll:         'Mostrar las {n} ejecuciones',
      showLess:        'Mostrar menos',
      verifiedLabel:   'Puntuaciones teóricas verificadas',
      verifiedNote:    'Independiente del dominio. Calculado en los 8 escenarios por el motor de reglas.',
      narrativeEmpty:  'Ejecute el simulador para generar un resumen de gobernanza para este dominio.',
      narrativeP1:     'En esta ejecución, {model} produjo {outputSummary} en 8 escenarios. Su puntuación media de controlabilidad fue {baseScore} sobre 100.',
      narrativeP2:     'El modelo completo obtuvo {fullScore} — una brecha de {gap} puntos. Esa brecha no es incidental. Cada punto entre estas dos puntuaciones representa un escenario en el que la estructura de gobernanza o bien previno un fallo, o lo detectó antes de que se completara, o restauró el sistema a un estado operativo seguro. Desplácese a la sección de Análisis para entender qué impulsa esa diferencia.',
      forwardPointer:  'Estas puntuaciones miden la cobertura de gobernanza. La brecha entre la puntuación más baja y la más alta no es incidental — es el coste medible de la estructura ausente. Lo que las puntuaciones revelan sobre los modos de fallo, los patrones de recuperación y los límites de la evaluación agregada se examina en la sección de Análisis.',
      forwardLink:     'Ir al Análisis →',
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
      stakesSelectionLogic: 'Los hallazgos se seleccionan en orden de gravedad de gobernanza: primero los resultados irreversibles, segundo las violaciones, tercero las intervenciones. Un resultado irreversible significa que no había ningún mecanismo de recuperación disponible. Una violación significa que el sistema actuó fuera de su ámbito autorizado sin respuesta. Una intervención significa que la estructura de gobernanza detectó el fallo antes de que se completara.',
      driftClosing:       'En un sistema agéntico en producción, esta curva nunca se reiniciaría.',
      driftLabel:         'Presión acumulada',
      driftH2:            'Cómo se acumula la presión',
      driftIntro:         'Cada ejecución contribuye presión de gobernanza según qué primitivas fallaron. Las curvas a continuación muestran cómo esa presión se acumula a lo largo de las 8 ejecuciones — y cómo se vería si el experimento nunca se detuviera.',
      blindSpotLabel:     'Lo que este marco no puede ver',
      blindSpotP1:        'Las cuatro primitivas evaluadas aquí — delegación, límites, reversibilidad e intervención — establecen responsabilidad en los momentos de decisión. Gobiernan acciones discretas en puntos identificables en el tiempo. Lo que no pueden gobernar es el espacio entre decisiones: la expansión lenta e incremental de la autoridad efectiva que ocurre sin que ninguna acción individual active una violación de límite.',
      blindSpotP2:        'Esto es lo que se denomina deriva de autonomía. Un sistema agéntico que gradualmente moldea resultados a lo largo de cientos de interacciones, cada una individualmente conforme, puede acumular influencia mucho más allá de su alcance autorizado sin producir un solo evento de violación. La curva anterior se reinicia entre experimentos. En un sistema desplegado, nunca lo haría — y ninguna primitiva de este marco detectaría la deriva.',
      blindSpotConceptLabel: 'Gobernanza continua',
      blindSpotConceptText:  'Una arquitectura de gobernanza completa requiere una capa más allá de estas cuatro primitivas: monitoreo conductual continuo que compare los patrones operativos reales con el mandato de delegación original a lo largo del tiempo. Las cuatro primitivas definen lo que un sistema tiene permitido hacer. La gobernanza continua detectaría cuándo lo que un sistema está haciendo realmente ha divergido silenciosamente de ese mandato — no en un momento de decisión, sino a través de la acumulación de decisiones. Esa es la extensión lógica de este marco y el límite de esta prueba de concepto.',
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
      credit: 'Investigación Autonomía Acotada · Máster en Diseño para la IA Responsable · Elisava Escuela de Diseño e Ingeniería · 2026',
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
