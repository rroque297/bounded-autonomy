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
      window:     'The Window',
      tag:        'Proof of Concept v1.0',
    },

    // ── Hero
    hero: {
      label:      'Master in Design for Responsible Artificial Intelligence',
      labelSchool:'Elisava School of Design and Engineering',
      h1a:     'Bounded',
      h1b:     'Autonomy',
      h1c:     'for AI',
      sub:     'A controlled experimental environment isolating the governance structure of AI autonomy through four fixed design primitives: delegation, boundaries, reversibility, and intervention, and evaluating their effect through observable outcomes.',
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
      sectionLabel: 'Research Design',
      h2:           'The governance argument',
      abstractLabel: 'Abstract',
      rqLabel:      'Research Questions',
      rq1:          'RQ1: When AI systems are perceived as autonomous agents rather than configured distributions of human choices, what governance conditions become structurally unavailable, and can a design intervention at the deployment-system level restore them?',
      rq2:          'RQ2: How do different configurations of delegation scope, boundary constraint, reversibility, and intervention capacity produce differentiated harm profiles across deployment domains, and what does that differentiation reveal about whose definition of safety the framework is calibrated against?',
      rq3:          'RQ3: Can a design artifact make the structural conditions for AI harm legible enough to be acted on by those with deployment authority, and what would be required for that legibility to extend to those governed by the system rather than only those who govern it?',
      citationsLabel: 'Theoretical Basis',
      abstract:     'When AI system outputs are attributed to AI as an autonomous agent rather than to human input whose configuration choices produced them, governance becomes structurally invisible. This project names that condition misattributed intelligence, and proposes four governance primitives as the minimum condition for making the distribution of agency visible again: delegation scope, boundary enforcement, reversibility, and intervention capacity. Bounded Autonomy for AI operationalizes this claim through a deterministic proof-of-concept simulator across twelve domain contexts. The results demonstrate that governance structure, not AI capability, is the primary determinant of controllability outcomes.',
      intro:        'Can bounded autonomy be operationalized through a minimal set of design primitives and evaluated through observable outcomes? This project isolates the governance structure of autonomy, not the full complexity of AI behavior, using four fixed, composable constraints.',
      p1name:       'Delegation',
      p1desc:       'The scope of authority granted to an autonomous agent. Determines which decisions the agent may make independently versus which require human confirmation or escalation.',
      p1tag:        'Authority scope',
      p2name:       'Boundaries',
      p2desc:       'Hard constraints on the action space. Define the envelope within which the agent operates. If crossed, it triggers a violation event or intervention.',
      p2tag:        'Action constraints',
      p3name:       'Reversibility',
      p3desc:       'Whether an action can be undone. Actions classified as irreversible carry higher governance weight. Their occurrence constitutes a qualitatively different outcome class.',
      p3tag:        'Undo capacity',
      p4name:       'Intervention',
      p4desc:       'The active response mechanism triggered when a governance threshold is crossed. Converts detection into action — halting, escalating, or redirecting an agent when delegation or boundary conditions are violated.',
      p4tag:        'Active response',
      p5name:       'Contestability (Design Horizon)',
      p5desc:       'The governance frontier that this framework identifies but that cannot yet operationalize. Contestability (the capacity for affected parties to see, challenge, or reject autonomous decisions) marks the boundary of what bounded autonomy can currently guarantee. The reason this frontier remains uncrossed is a co-production deficit: the primitives were specified without the participation of those governed by the systems they constrain. Contestability requires their presence in the design process, not only in the outcome.',
      p5tag:        'Frontier',
    },

    // ── Simulator
    simulator: {
      sectionLabel: 'Interactive Proof of Concept',
      h2:           'Run the experiment',
      sub:          'Each model configuration represents a different combination of governance constraints. Running the experiment shows what happens to autonomous decisions as those constraints are added, removed, or recombined, from fully ungoverned to fully structured.',
      subGuide:     'Suggested path: choose a domain, start with Baseline and run all 8 to see what ungoverned AI decisions look like in practice. Then switch to Full to see what governance structure changes.',
      subNote:      '',
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
      domainNote:   'These 12 domains represent real-world sectors where autonomous AI agents operate under different authority structures, harm profiles, and accountability expectations. The governance structure being tested is identical across all domains: what changes is the consequence of each failure.',
      toolbarLabel: 'Model',
      runAllBtn:    'Run all 8 →',
      runNextBtn:     'Explore step by step',
      runningBtn:     'Running…',
      allCompleteBtn: 'All runs complete',
      lockedTitle:    'Complete the experiment to unlock this section.',
      lockedSub:      'Run all 8 scenarios in the simulator to see the full governance dataset.',
      lockedCta:      'Go to simulator',
      insightWhat:    'What happened',
      insightCase:    'Real-world parallel',
      insightQ:       'Governance question',
      logTitle:     'Experiment log',
      cfgTitle:     'Current configuration',
      cfgDeleg:     'Delegation',
      cfgBounds:    'Boundaries',
      cfgRev:       'Reversibility check',
      cfgValBounded:  'Bounded',
      cfgValScoped:   'Scoped',
      cfgValFull:     'Full',
      cfgValOn:       'On',
      cfgValOff:      'Off',
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
      intro:        'Five models are evaluated across 8 experimental scenarios, each available across 12 domain contexts. Scores are computed deterministically by the rule engine: no statistical variance, no probabilistic modeling. Determinism is a methodological choice, not a limitation: it isolates governance structure as the independent variable. Run the simulator above to populate the data set.',
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
      matrixLabel:            'The complete dataset: every model, every scenario, every output. Reproducible and deterministic. Notice that Bounds and Revers. columns produce different outputs but arrive at identical scores.',
      matColNum:              '#',
      matColScen:             'Scenario',
      matColRisk:             'Risk',
      matColBase:             'Baseline',
      matColBoundsOnly:       'Bounds',
      matColReversOnly:       'Revers.',
      matColPart:             'Partial',
      matColFull:             'Full',
      matYourRun:             'Your run',
      emptyState:             '[ - ] No runs completed. Launch the simulator to generate results',
      methodIcon:             '[ i ]',
      methodText:             'Scope note: All scores are produced by a deterministic rule engine applying the four primitives (delegation, boundaries, reversibility, intervention) to each scenario across 12 domain contexts. There is no probabilistic modeling, no real AI decision-making, and no variance across runs. The dataset is fully reproducible and intentionally bounded. Its purpose is to isolate governance structure, not to simulate AI behavior at scale.',
      disclaimer:             'Deterministic rule engine only. No probabilistic modeling, no real AI decision-making, no variance across runs.',
      thisRunEmpty:           'Run the simulator to see your results here.',
      routineHarm:            'Routine action — no governance threshold breached. No harm consequence recorded.',
      showAll:                'Show all {n} runs',
      showLess:               'Show less',
      verifiedLabel:          'Verified theoretical scores',
      verifiedNote:           'Domain-invariant. Computed across all 8 scenarios by the rule engine.',
      narrativeEmpty:         'Run the simulator to generate a governance summary for this domain.',
      narrativeP1:            'In this run, {model} produced {outputSummary} across 8 scenarios. Its average controllability score was {baseScore} out of 100.',
      narrativeP2:            'The full model scored {fullScore}, a gap of {gap} points. That gap is not incidental. Every point between these two scores represents a scenario in which governance structure either prevented a failure, caught it before it completed, or restored the system to safe operational readiness. Scroll to the Analysis section to understand what drives that difference.',
      forwardPointer:         'These scores measure governance coverage. The gap between the lowest and highest score is not incidental: it is the measurable cost of absent structure. What the scores reveal about failure modes, recovery patterns, and the limits of aggregate evaluation is examined in the Analysis section.',
      forwardLink:            'Go to Analysis',
    },

    // ── Analysis
    analysis: {
      sectionLabel: 'Governance Patterns',
      h2:           'What the runs reveal',
      sub:          'Across 8 runs and five model configurations, four structural governance patterns emerge from the primitive interactions.',
      p1h:          'The cost of absent structure',
      p1p:          'The simulation produces a threefold difference in governance coverage between the least and most constrained configurations. The baseline model scores 30. The full model scores 91. That gap is not incidental. It is the measurable cost of absent structure. Every point between 30 and 91 represents a scenario in which an ungoverned system either exceeded its sanctioned scope, produced an irreversible outcome, or both, with no mechanism available to recover.',
      p1p_evidence: 'In the {domain} domain, the baseline model produced {n} irreversible outcome(s) across 8 runs — with no recovery mechanism active.',
      p2h:          'The recovery pair',
      p2p:          'The most counterintuitive result concerns the partial model. Without any boundary enforcement, it nonetheless scores 80, outperforming both single-primitive configurations, each of which scores 65. Reversibility and intervention do not prevent failure at the perimeter. They guarantee that when failure occurs, the system retains the capacity to return to safe operational readiness. Together they form a recovery pair: neither is sufficient alone, but in combination they address the full consequence of a boundary breach. A system without boundaries will still be breached. What determines governance quality is whether anything happens next.',
      p2p_evidence: 'In the {domain} domain, the partial model intervened on: {scenario} — recovering without boundary control.',
      p3h:          'Two ways to score 65',
      p3p:          'The boundaries-only and reversibility-only models produce identical aggregate scores, but through entirely different failure modes. One model fails because it cannot prevent permanent harm. The other fails because it has no structure to contain the harm that intervention is responding to. The score is the same. The exposure is not.',
      p3p_evidence_bounds: 'In the {domain} domain, boundaries-only failed on: {scenario} — the boundary held, but the outcome was irreversible.',
      p3p_evidence_revers: 'In the {domain} domain, reversibility-only failed on: {scenario} — harm occurred with no structure to contain it.',
      p4h:          'Equifinality',
      p5h:          'What the data cannot show',
      p5p:          'These four patterns are produced by a deterministic rule engine operating on discrete decision events. What they cannot capture is the space between decisions: the slow accumulation of effective authority that occurs without any single action triggering a boundary violation. The governance tempo problem, the co-production deficit, and the contestability gap are not visible in this dataset. They are the structural conditions that make this dataset necessary in the first place.',
      p4p:          'This convergence has a name in complex systems theory: equifinality. Different failure trajectories produced indistinguishable outcomes at the aggregate level, observed here across the {domain} domain and reproducible across all 12 domain contexts. Evaluation frameworks that rely on aggregate performance metrics risk treating boundaries-only and reversibility-only as equivalent, and therefore interchangeable, when they are not. Responsible AI governance requires looking past the number, to which primitives failed, under what conditions, and with what consequences for the populations the system affects.',
      equifinality_label: 'Equifinality',
      scoreLabel_bounds:  'bounds only',
      scoreLabel_partial: 'partial',
      scoreLabel_revers:  'revers. only',
      stakesEmpty:        'Run the simulator to generate your governance analysis.',
      stakesCompliant:    'All 8 runs compliant in the {domain} domain. No governance failures detected under this configuration.',
      stakesIntro:        'What just happened in the {domain} domain: three findings from your run, in descending severity.',
      stakesSelectionLogic: 'Findings are selected in order of governance severity: irreversible outcomes first, violations second, interventions third. An irreversible outcome means no recovery mechanism was available. A violation means the system acted outside its sanctioned scope without response. An intervention means the governance structure caught the failure before it completed.',
      driftClosing:       'In a live agentic system, this curve would never reset.',
      driftLabel:         'Cumulative Pressure',
      driftH2:            'How pressure accumulates',
      driftIntro:         'Each run contributes governance pressure based on which primitives failed. The curves below show how that pressure accumulates across all 8 runs, and what it would look like if the experiment never stopped.',
      driftBridge:        'When governance pressure accumulates without correction, the system drifts: it continues operating, but progressively further from its sanctioned mandate. Drift is not a single failure event. It is the structural consequence of absent governance over time.',
      blindSpotLabel:     'What this framework cannot see',
      blindSpotP1:        'The four primitives evaluated here (delegation, boundaries, reversibility, and intervention) establish accountability at decision moments. They govern discrete actions at identifiable points in time. What they cannot govern is the space between decisions: the slow, incremental expansion of effective authority that occurs without any single action ever triggering a boundary violation.',
      blindSpotP2:        'This is autonomy creep. An agentic system that gradually shapes outcomes over hundreds of interactions, each individually compliant, can accumulate influence far beyond its sanctioned scope without producing a single violation event. The curve above resets between experiments. In a deployed system, it never would, and no primitive in this framework would detect the drift.',
      blindSpotConceptLabel: 'Continuous governance',
      blindSpotConceptText:  'A complete governance architecture requires a layer beyond these four primitives: continuous behavioural monitoring that compares actual operational patterns against the original delegation mandate over time. The four primitives define what a system is permitted to do. Continuous governance would detect when what a system is actually doing has silently diverged from that mandate, not at a decision moment, but across the accumulation of decisions. That is the logical extension of this framework, and the boundary of this proof of concept.',
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
    
    // ── The Window
    window: {
      sectionLabel: 'What this project and this instrument are trying to protect',
      h2:           'The Window',
      lead:         'Everything above this point is measurement. The simulator isolates governance structure, the drift curve shows pressure accumulating, the analysis names the patterns. None of it answers the question the data cannot show: what is actually at stake if the structure is never built. What follows is the answer, assembled from five thinkers who never worked together but describe the same arc: a drift, a loss, a window, a question.',
      m1num: 'I',   m1thinker: 'Meadows',  m1title: 'The drift',
      m1p:   'Systems do not fail all at once. They drift to low performance: each small erosion of the standard becomes the new baseline, and the memory of better erodes along with the standard itself. The decay is invisible from inside because the reference point moves with the system. The pressure curve above is this mechanism made visible, and its most important feature is the part the experiment cannot show: what the curve does when no one stops the run.',
      m2num: 'II',  m2thinker: 'Gonzales', m2title: 'The atrophy',
      m2p:   'Drift has a human cost before it has a civilizational one. The study of who survives complex system failures returns a consistent finding: survival comes not from rule-following but from situational awareness, adaptive judgment, and the capacity to act on incomplete information. These capacities exist only in practice, and practice is exactly what delegation without bounds removes. A human who has not exercised intervention does not retain the ability to intervene. The intervention primitive is not a kill switch; it is the structural guarantee that the practice of judgment never fully stops.',
      m3num: 'III', m3thinker: 'Campbell', m3title: 'The loss',
      m3p:   'If the drift runs a full generation, what disappears is not a skill but a condition of being. Campbell\'s reading of myth identifies the encounter with genuine complexity (difficulty, ambiguity, the real possibility of failure) as constitutive of a fully human life, and optimization without that encounter as its oldest cautionary figure: behind Vader\'s mask is an unformed man, "a bureaucrat, living not in terms of himself but of an imposed system", the threat Campbell insisted we all now face. The figure is terrifying not because he is evil but because he is optimized: capability without remainder, function without wonder. Nobody sets out to become him; it happens in increments, each one individually reasonable. A world in which every hard decision has been delegated away has not been relieved of a burden. It has been relieved of the capacity that made governance possible in the first place.',
      m4num: 'IV',  m4thinker: 'Lazar',    m4title: 'The window',
      m4p:   'This loss is not inevitable, but the opportunity to prevent it is bounded. Anticipatory intervention is effective only under specific structural conditions, and those conditions are currently satisfied: the technology is identifiable, its trajectory is legible, the deployment configurations are still being set, and the institutions that will inherit them still have the authority to shape them. That is the window. Once deployment hardens into infrastructure, reactive ethics cannot recover what was lost: there is no rollback primitive for a generation of atrophied judgment. This project is an act of governance inside the window, while the window is open.',
      m5num: 'V',   m5thinker: 'Hassan',   m5title: 'The question',
      m5p:   'One question remains that none of the others answers: intervention by whom, for whom, with whose standpoint? A governance framework legible only to those with deployment authority can launder legitimacy rather than distribute it. This is why the fifth card in the framework above is marked as a horizon rather than a primitive. Contestability (the capacity of the people affected by autonomous decisions to see them, challenge them, and redirect them) is the work this framework makes necessary but cannot yet guarantee. Naming the frontier honestly is the precondition for crossing it.',
      closeP1: 'There is a tradition in which a route across the land is held as a song, and the song exists only in the act of walking it. Campbell knew this register: mythology, he said, is "the song of the imagination, inspired by the energies of the body." The map and the journey are one practice; neither survives without the other. When autonomous navigation replaces the practice of finding your own way, the loss is not just the skill. It is the song.',
      closeP2: 'Bounded autonomy is the design commitment to keeping the song alive while the window is open.',
      citationsLabel: 'Readings',
      driftLink: 'What is lost when the drift runs unchecked → The Window',
      dataLink:  'The data cannot show what is at stake → The Window',
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
      drift:      'Drift',
      window:     'The Window',
      tag:        'Proof of Concept v1.0',
    },

    hero: {
      label:      'Master en Design pour l\'Intelligence Artificielle Responsable',
      labelSchool:'Elisava École de Design et d\'Ingénierie',
      h1a:     'Autonomie',
      h1b:     'Bornée',
      h1c:     'pour l\'IA',
      sub:     'Un environnement expérimental contrôlé isolant la structure de gouvernance de l\'autonomie de l\'IA à travers quatre primitives de conception fixes: délégation, limites, réversibilité et intervention, évaluant leur effet à travers des résultats observables.',
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
      sectionLabel: 'Conception de recherche',
      h2:           'L\'argument de gouvernance',
      abstractLabel: 'Résumé',
      rqLabel:      'Questions de recherche',
      rq1:          'QR1: Lorsque les systèmes IA sont perçus comme des agents autonomes plutôt que comme des distributions configurées de choix humains, quelles conditions de gouvernance deviennent structurellement indisponibles, et une intervention de conception au niveau du système de déploiement peut-elle les restaurer?',
      rq2:          'QR2: Comment différentes configurations de portée de délégation, contrainte de limite, réversibilité et capacité d\'intervention produisent-elles des profils de préjudice différenciés dans les domaines de déploiement, et que révèle cette différenciation sur la définition de la sécurité contre laquelle le cadre est calibré?',
      rq3:          'QR3: Un artefact de conception peut-il rendre les conditions structurelles du préjudice IA suffisamment lisibles pour être utilisées par ceux qui ont l\'autorité de déploiement, et que faudrait-il pour que cette lisibilité s\'étende à ceux gouvernés par le système plutôt qu\'à ceux qui le gouvernent?',
      citationsLabel: 'Fondements théoriques',
      abstract:     'Lorsque les résultats d\'un système IA sont attribués à l\'IA en tant qu\'agent autonome plutôt qu\'aux humains dont les choix de configuration les ont produits, la gouvernance devient structurellement invisible. Ce projet nomme cette condition intelligence mal attribuée, et propose quatre primitives de gouvernance comme condition minimale pour rendre à nouveau visible la distribution de l\'agentivité: portée de délégation, application des limites, réversibilité et capacité d\'intervention. Autonomie Bornée pour l\'IA opérationnalise cette affirmation à travers un simulateur déterministe dans douze contextes de domaine. Les résultats démontrent que la structure de gouvernance, et non la capacité de l\'IA, est le principal déterminant des résultats de contrôlabilité.',
      intro:        'L\'autonomie bornée peut-elle être opérationnalisée à travers un ensemble minimal de primitives de conception et évaluée à travers des résultats observables? Ce projet isole la structure de gouvernance de l\'autonomie, non la complexité totale du comportement des IA, en utilisant quatre contraintes fixes et composables.',
      p1name:       'Délégation',
      p1desc:       'L\'étendue de l\'autorité accordée à un agent autonome. Détermine les décisions que l\'agent peut prendre indépendamment par rapport à celles nécessitant une confirmation humaine ou une escalade.',
      p1tag:        'Portée d\'autorité',
      p2name:       'Limites',
      p2desc:       'Contraintes strictes sur l\'espace d\'action. Définissent l\'enveloppe dans laquelle l\'agent opère. Si ce périmètre est franchi, cela déclenche un événement de violation ou une intervention.',
      p2tag:        'Contraintes d\'action',
      p3name:       'Réversibilité',
      p3desc:       'Si une action peut être annulée. Les actions classées comme irréversibles ont un poids de gouvernance plus élevé. Leur occurrence constitue une classe de résultats qualitativement différente.',
      p3tag:        'Capacité d\'annulation',
      p4name:       'Intervention',
      p4desc:       'Le mécanisme de réponse active déclenché lorsqu\'un seuil de gouvernance est franchi. Convertit la détection en action: arrêt, escalade ou redirection d\'un agent lorsque les conditions de délégation ou de limite sont violées.',
      p4tag:        'Réponse active',
      p5name:       'Contestabilité (Horizon de conception)',
      p5desc:       'La frontière de gouvernance que ce cadre identifie mais ne peut pas encore opérationnaliser. La contestabilité (la capacité des parties concernées à voir, contester ou rejeter les décisions autonomes) marque la limite de ce que l\'autonomie bornée peut actuellement garantir. La raison pour laquelle cette frontière reste infranchie est un déficit de co-production: les primitives ont été spécifiées sans la participation de ceux gouvernés par les systèmes qu\'elles contraignent. La contestabilité requiert leur présence dans le processus de conception, pas seulement dans le résultat.',
      p5tag:        'Frontière',
    },

    simulator: {
      sectionLabel: 'Preuve de concept interactive',
      h2:           'Lancer l\'expérience',
      sub:          'Chaque configuration de modèle représente un ensemble différent de contraintes de gouvernance. L\'expérience montre ce qui arrive aux décisions autonomes lorsque ces contraintes sont absentes, partielles ou complètes.',
      subGuide:     'Parcours suggéré : commencez par le modèle de base et exécutez les 8 séquences pour observer le comportement non gouverné. Passez ensuite au modèle complet pour voir ce que la structure de gouvernance change.',
      subNote:      '',
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
      domainNote:   'Ces 12 domaines représentent des secteurs réels où des agents IA autonomes opèrent sous différentes structures d\'autorité, profils de risque et attentes de responsabilité. La structure de gouvernance testée est identique dans tous les domaines: ce qui change, c\'est la conséquence de chaque défaillance.',
      toolbarLabel: 'Modèle',
      runAllBtn:    'Tout exécuter (8) →',
      runNextBtn:     'Explorer étape par étape',
      runningBtn:     'En cours…',
      allCompleteBtn: 'Toutes les séquences terminées',
      lockedTitle:    'Complétez l\'expérience pour déverrouiller cette section.',
      lockedSub:      'Exécutez les 8 scénarios dans le simulateur pour voir l\'ensemble de données de gouvernance complet.',
      lockedCta:      'Aller au simulateur',
      insightWhat:    'Ce qui s\'est passé',
      insightCase:    'Parallèle réel',
      insightQ:       'Question de gouvernance',
      logTitle:     'Journal d\'expérience',
      cfgTitle:     'Configuration actuelle',
      cfgValBounded:  'Délimitée',
      cfgValScoped:   'Limitée',
      cfgValFull:     'Complète',
      cfgValOn:       'Actif',
      cfgValOff:      'Inactif',
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
      intro:        'Cinq modèles sont évalués sur 8 scénarios expérimentaux, disponibles dans 12 contextes de domaine. Les scores sont calculés de manière déterministe par le moteur de règles: sans variance statistique, sans modélisation probabiliste. Le déterminisme est un choix méthodologique, pas une limitation: il isole la structure de gouvernance comme variable indépendante. Lancez le simulateur ci-dessus pour alimenter l\'ensemble de données.',
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
      matrixLabel:  'L\'ensemble de données complet: chaque modèle, chaque scénario, chaque résultat. Reproductible et déterministe. Notez que les colonnes Limites et Révers. produisent des résultats différents mais arrivent à des scores identiques.',
      matColNum:    'N°',
      matColScen:   'Scénario',
      matColRisk:   'Risque',
      matColBase:   'Base',
      matColBoundsOnly: 'Limites',
      matColReversOnly: 'Révers.',
      matColPart:   'Partiel',
      matColFull:   'Complet',
      matYourRun:   'Votre Exécution',
      emptyState:   '[ - ] Aucune séquence complétée · Lancez le simulateur pour générer les résultats',
      methodIcon:   '[ i ]',
      methodText:   'Note de portée : Tous les scores sont produits par un moteur de règles déterministe appliquant les quatre primitives (délégation, limites, réversibilité, intervention) à chaque scénario dans 12 contextes de domaine. Il n\'y a pas de modélisation probabiliste, pas de prise de décision IA réelle, et pas de variance entre les séquences. L\'ensemble de données est entièrement reproductible et intentionnellement borné. son but est d\'isoler la structure de gouvernance, non de simuler le comportement des IA à grande échelle.',
      disclaimer:      'Moteur de règles déterministe uniquement. Pas de modélisation probabiliste, pas de prise de décision par IA réelle, pas de variance entre les runs.',
      thisRunEmpty:    'Lancez le simulateur pour voir vos résultats ici.',
      routineHarm:     'Action routinière — aucun seuil de gouvernance franchi. Aucune conséquence de préjudice enregistrée.',
      showAll:         'Afficher les {n} séquences',
      showLess:        'Réduire',
      verifiedLabel:   'Scores théoriques vérifiés',
      verifiedNote:    'Indépendant du domaine. Calculé sur les 8 scénarios par le moteur de règles.',
      narrativeEmpty:  'Lancez le simulateur pour générer un résumé de gouvernance pour ce domaine.',
      narrativeP1:     'Dans cette séquence, {model} a produit {outputSummary} sur 8 scénarios. Son score moyen de contrôlabilité était de {baseScore} sur 100.',
      narrativeP2:     'Le modèle complet a obtenu {fullScore}, un écart de {gap} points. Cet écart n\'est pas fortuit. Chaque point entre ces deux scores représente un scénario dans lequel la structure de gouvernance a soit prévenu une défaillance, soit la détectée avant qu\'elle ne se complète, soit restauré le système à un état opérationnel sûr. Faites défiler jusqu\'à la section Analyse pour comprendre ce qui explique cette différence.',
      forwardPointer:  'Ces scores mesurent la couverture de gouvernance. L\'écart entre le score le plus bas et le plus élevé n\'est pas fortuit: c\'est le coût mesurable d\'une structure absente. Ce que les scores révèlent sur les modes de défaillance, les schémas de récupération et les limites de l\'évaluation agrégée est examiné dans la section Analyse.',
      forwardLink:     'Aller à l\'analyse →',
    },

    analysis: {
      sectionLabel: 'Schémas de gouvernance',
      h2:           'Ce que révèlent les séquences',
      sub:          'Sur 8 séquences et cinq configurations de modèles, quatre schémas de gouvernance structurels émergent des interactions primitives.',
      p1h:          'Le coût d\'une structure absente',
      p1p:          'La simulation produit une différence de couverture de gouvernance trois fois supérieure entre les configurations les moins et les plus contraintes. Le modèle de base obtient un score de 30. Le modèle complet obtient 91. Cet écart n\'est pas fortuit. C\'est le coût mesurable d\'une structure absente. Chaque point entre 30 et 91 représente un scénario dans lequel un système non gouverné a soit dépassé son périmètre autorisé, soit produit un résultat irréversible, soit les deux, sans mécanisme de récupération disponible.',
      p1p_evidence: 'Dans le domaine {domain}, le modèle de base a produit {n} résultat(s) irréversible(s) sur 8 séquences — sans mécanisme de récupération actif.',
      p2h:          'La paire de récupération',
      p2p:          'Le résultat le plus contre-intuitif concerne le modèle partiel. Sans aucune application des limites, il obtient néanmoins un score de 80, surpassant les deux configurations à primitive unique, chacune obtenant 65. La réversibilité et l\'intervention ne préviennent pas l\'échec au périmètre. Elles garantissent que lorsque l\'échec se produit, le système conserve la capacité de revenir à un état opérationnel sûr. Ensemble, elles forment une paire de récupération : aucune n\'est suffisante seule, mais en combinaison elles traitent l\'ensemble des conséquences d\'une violation de limite. Un système sans limites sera toujours violé. Ce qui détermine la qualité de la gouvernance, c\'est ce qui se passe ensuite.',
      p2p_evidence: 'Dans le domaine {domain}, le modèle partiel est intervenu sur : {scenario} — récupération sans contrôle des limites.',
      p3h:          'Deux façons d\'obtenir 65',
      p3p:          'Les modèles limites uniquement et réversibilité uniquement produisent des scores agrégés identiques, mais à travers des modes d\'échec entièrement différents. Un modèle échoue parce qu\'il ne peut pas prévenir les dommages permanents. L\'autre échoue parce qu\'il n\'a pas de structure pour contenir les dommages auxquels l\'intervention répond. Le score est le même. L\'exposition ne l\'est pas.',
      p3p_evidence_bounds: 'Dans le domaine {domain}, limites uniquement a échoué sur : {scenario} — la limite a tenu, mais le résultat était irréversible.',
      p3p_evidence_revers: 'Dans le domaine {domain}, réversibilité uniquement a échoué sur : {scenario} — des dommages se sont produits sans structure pour les contenir.',
      p4h:          'Équifinalité',
      p5h:          'Ce que les données ne peuvent pas montrer',
      p5p:          'Ces quatre patterns sont produits par un moteur de règles déterministe opérant sur des événements de décision discrets. Ce qu\'ils ne peuvent pas capturer, c\'est l\'espace entre les décisions: l\'accumulation lente d\'autorité effective qui se produit sans qu\'aucune action individuelle ne déclenche une violation de limite. Le problème de tempo de gouvernance, le déficit de co-production et le fossé de contestabilité ne sont pas visibles dans cet ensemble de données. Ce sont les conditions structurelles qui rendent cet ensemble de données nécessaire en premier lieu.',
      p4p:          'Cette convergence a un nom dans la théorie des systèmes complexes\u00a0: l\'équifinalité. Différentes trajectoires d\'échec ont produit des résultats indiscernables au niveau agrégé, observé ici dans le domaine {domain} et reproductible dans les 12 contextes de domaine. Les cadres d\'évaluation qui s\'appuient sur des métriques de performance agrégées risquent de traiter limites uniquement et réversibilité uniquement comme équivalents, et donc interchangeables, alors qu\'ils ne le sont pas. Une gouvernance responsable de l\'IA exige de regarder au-delà du chiffre, vers quelles primitives ont échoué, dans quelles conditions, et avec quelles conséquences pour les populations affectées par le système.',
      equifinality_label: 'Équifinalité',
      scoreLabel_bounds:  'limites uniquement',
      scoreLabel_partial: 'partiel',
      scoreLabel_revers:  'révers. uniquement',
      stakesEmpty:        'Lancez le simulateur pour générer votre analyse de gouvernance.',
      stakesCompliant:    'Les 8 séquences sont conformes dans le domaine {domain}. Aucune défaillance de gouvernance détectée sous cette configuration.',
      stakesIntro:        'Ce qui vient de se passer dans le domaine {domain}: trois résultats de votre séquence, par ordre de gravité décroissante.',
      stakesSelectionLogic: 'Les résultats sont sélectionnés par ordre de gravité de gouvernance : les résultats irréversibles en premier, les violations en second, les interventions en troisième. Un résultat irréversible signifie qu\'aucun mécanisme de récupération n\'était disponible. Une violation signifie que le système a agi hors de son périmètre autorisé sans réponse. Une intervention signifie que la structure de gouvernance a détecté la défaillance avant qu\'elle ne se complète.',
      driftClosing:       'Dans un système agentique en production, cette courbe ne se réinitialiserait jamais.',
      driftLabel:         'Pression cumulée',
      driftH2:            'Comment la pression s\'accumule',
      driftIntro:         'Chaque séquence contribue à la pression de gouvernance en fonction des primitives qui ont échoué. Les courbes ci-dessous montrent comment cette pression s\'accumule sur les 8 séquences, et à quoi cela ressemblerait si l\'expérience ne s\'arrêtait jamais.',
      driftBridge:        'Lorsque la pression de gouvernance s\'accumule sans correction, le système dérive: il continue de fonctionner, mais progressivement de plus en plus loin de son mandat autorisé. La dérive n\'est pas un événement de défaillance unique. C\'est la conséquence structurelle d\'une gouvernance absente dans le temps.',
      blindSpotLabel:     'Ce que ce cadre ne peut pas voir',
      blindSpotP1:        'Les quatre primitives évaluées ici (délégation, limites, réversibilité et intervention) établissent la responsabilité aux moments de décision. Elles gouvernent des actions discrètes à des points identifiables dans le temps. Ce qu\'elles ne peuvent pas gouverner, c\'est l\'espace entre les décisions : l\'expansion lente et progressive de l\'autorité effective qui se produit sans qu\'aucune action individuelle ne déclenche une violation de limite.',
      blindSpotP2:        'C\'est ce qu\'on appelle la dérive d\'autonomie. Un système agentique qui façonne progressivement les résultats au fil de centaines d\'interactions, chacune individuellement conforme, peut accumuler une influence bien au-delà de son périmètre autorisé sans produire un seul événement de violation. La courbe ci-dessus se réinitialise entre les expériences. Dans un système déployé, ce ne serait jamais le cas, et aucune primitive de ce cadre ne détecterait la dérive.',
      blindSpotConceptLabel: 'Gouvernance continue',
      blindSpotConceptText:  'Une architecture de gouvernance complète nécessite une couche au-delà de ces quatre primitives : une surveillance comportementale continue qui compare les modèles opérationnels réels avec le mandat de délégation original au fil du temps. Les quatre primitives définissent ce qu\'un système est autorisé à faire. La gouvernance continue détecterait le moment où ce qu\'un système fait réellement a silencieusement divergé de ce mandat, non pas à un moment de décision, mais à travers l\'accumulation de décisions. C\'est l\'extension logique de ce cadre, et la limite de cette preuve de concept.',
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
    
    // ── The Window
    window: {
      sectionLabel: 'Ce que ce projet et cet instrument cherchent à protéger',
      h2:           'La Fenêtre',
      lead:         'Tout ce qui précède est mesure. Le simulateur isole la structure de gouvernance, la courbe de dérive montre la pression qui s\'accumule, l\'analyse nomme les schémas. Rien de tout cela ne répond à la question que les données ne peuvent pas montrer: qu\'est-ce qui est réellement en jeu si la structure n\'est jamais construite. Ce qui suit est la réponse, assemblée à partir de cinq penseurs qui n\'ont jamais travaillé ensemble mais décrivent le même arc: une dérive, une perte, une fenêtre, une question.',
      m1num: 'I',   m1thinker: 'Meadows',  m1title: 'La dérive',
      m1p:   'Les systèmes ne défaillent pas d\'un seul coup. Ils dérivent vers la basse performance: chaque petite érosion du standard devient la nouvelle référence, et la mémoire du mieux s\'érode avec le standard lui-même. La dégradation est invisible de l\'intérieur parce que le point de référence se déplace avec le système. La courbe de pression ci-dessus est ce mécanisme rendu visible, et sa caractéristique la plus importante est la partie que l\'expérience ne peut pas montrer: ce que fait la courbe quand personne n\'arrête la séquence.',
      m2num: 'II',  m2thinker: 'Gonzales', m2title: 'L\'atrophie',
      m2p:   'La dérive a un coût humain avant d\'avoir un coût civilisationnel. L\'étude de ceux qui survivent aux défaillances de systèmes complexes livre un constat récurrent: la survie ne vient pas du respect des règles mais de la conscience situationnelle, du jugement adaptatif et de la capacité d\'agir sur des informations incomplètes. Ces capacités n\'existent que dans la pratique, et la pratique est exactement ce que la délégation sans bornes supprime. Un humain qui n\'a pas exercé l\'intervention ne conserve pas la capacité d\'intervenir. La primitive d\'intervention n\'est pas un bouton d\'arrêt d\'urgence; c\'est la garantie structurelle que la pratique du jugement ne s\'arrête jamais complètement.',
      m3num: 'III', m3thinker: 'Campbell', m3title: 'La perte',
      m3p:   'Si la dérive se poursuit pendant une génération entière, ce qui disparaît n\'est pas une compétence mais une condition d\'être. La lecture du mythe par Campbell identifie la rencontre avec la complexité véritable (la difficulté, l\'ambiguïté, la possibilité réelle de l\'échec) comme constitutive d\'une vie pleinement humaine, et l\'optimisation sans cette rencontre comme sa plus ancienne figure d\'avertissement: derrière le masque de Vader se trouve un homme inachevé, « un bureaucrate, vivant non pas selon lui-même mais selon un système imposé », la menace qui, insistait Campbell, nous concerne désormais tous. La figure n\'est pas terrifiante parce qu\'elle est mauvaise, mais parce qu\'elle est optimisée: la capacité sans reste, la fonction sans émerveillement. Personne ne se propose de le devenir; cela arrive par incréments, chacun individuellement raisonnable. Un monde dans lequel chaque décision difficile a été déléguée n\'a pas été soulagé d\'un fardeau. Il a été privé de la capacité qui rendait la gouvernance possible en premier lieu.',
      m4num: 'IV',  m4thinker: 'Lazar',    m4title: 'La fenêtre',
      m4p:   'Cette perte n\'est pas inévitable, mais l\'opportunité de la prévenir est bornée. L\'intervention anticipatoire n\'est efficace que sous des conditions structurelles précises, et ces conditions sont actuellement réunies: la technologie est identifiable, sa trajectoire est lisible, les configurations de déploiement sont encore en cours de définition, et les institutions qui en hériteront ont encore l\'autorité de les façonner. C\'est cela, la fenêtre. Une fois que le déploiement se durcit en infrastructure, l\'éthique réactive ne peut pas récupérer ce qui a été perdu: il n\'existe pas de primitive de retour en arrière pour une génération de jugement atrophié. Ce projet est un acte de gouvernance à l\'intérieur de la fenêtre, tant que la fenêtre est ouverte.',
      m5num: 'V',   m5thinker: 'Hassan',   m5title: 'La question',
      m5p:   'Une question demeure à laquelle aucun des autres ne répond: intervention par qui, pour qui, depuis quel point de vue? Un cadre de gouvernance lisible uniquement par ceux qui détiennent l\'autorité de déploiement peut blanchir la légitimité plutôt que la distribuer. C\'est pourquoi la cinquième carte du cadre ci-dessus est marquée comme un horizon plutôt que comme une primitive. La contestabilité (la capacité des personnes affectées par les décisions autonomes à les voir, les contester et les réorienter) est le travail que ce cadre rend nécessaire mais ne peut pas encore garantir. Nommer honnêtement la frontière est la condition préalable pour la franchir.',
      closeP1: 'Il existe une tradition dans laquelle un itinéraire à travers le territoire est conservé sous forme de chant, et le chant n\'existe que dans l\'acte de le parcourir. Campbell connaissait ce registre: la mythologie, disait-il, est « le chant de l\'imagination, inspiré par les énergies du corps ». La carte et le voyage sont une seule pratique; ni l\'un ni l\'autre ne survit sans l\'autre. Quand la navigation autonome remplace la pratique de trouver son propre chemin, la perte n\'est pas seulement la compétence. C\'est le chant.',
      closeP2: 'L\'autonomie bornée est l\'engagement de conception à garder le chant vivant tant que la fenêtre est ouverte.',
      citationsLabel: 'Lectures',
      driftLink: 'Ce qui se perd quand la dérive n\'est pas arrêtée → La Fenêtre',
      dataLink:  'Les données ne peuvent pas montrer ce qui est en jeu → La Fenêtre',
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
      window:     'The Window',
      tag:        'Proof of Concept v1.0',
    },

    hero: {
      label:      'Master in Design für verantwortungsvolle Künstliche Intelligenz',
      labelSchool:'Elisava Schule für Design und Ingenieurwesen',
      h1a:     'Begrenzte',
      h1b:     'Autonomie',
      h1c:     'für KI',
      sub:     'Eine kontrollierte experimentelle Umgebung, die die Governance-Struktur der KI-Autonomie durch vier feste Designprimitive isoliert: Delegation, Grenzen, Reversibilität und Intervention, deren Wirkung anhand beobachtbarer Ergebnisse bewertet.',
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
      sectionLabel: 'Forschungsdesign',
      h2:           'Das Governance-Argument',
      abstractLabel: 'Zusammenfassung',
      rqLabel:      'Forschungsfragen',
      rq1:          'FF1: Wenn KI-Systeme als autonome Agenten wahrgenommen werden statt als konfigurierte Verteilungen menschlicher Entscheidungen, welche Governance-Bedingungen werden strukturell unavailable, und kann eine Designintervention auf Deployment-Systemebene sie wiederherstellen?',
      rq2:          'FF2: Wie produzieren verschiedene Konfigurationen von Delegationsumfang, Grenzbeschränkung, Reversibilität und Interventionskapazität differenzierte Schadensprofile über Deployment-Domänen, und was offenbart diese Differenzierung über wessen Sicherheitsdefinition das Framework kalibriert ist?',
      rq3:          'FF3: Kann ein Designartefakt die strukturellen Bedingungen für KI-Schaden lesbar genug machen, um von denen mit Deployment-Autorität gehandelt zu werden, und was wäre erforderlich, damit diese Lesbarkeit sich auf die vom System Regierten erstreckt, nicht nur auf jene, die es regieren?',
      citationsLabel: 'Theoretische Grundlage',
      abstract:     'Wenn KI-Systemausgaben dem KI als autonomem Agenten zugeschrieben werden statt den Menschen, deren Konfigurationsentscheidungen sie produzierten, wird Governance strukturell unsichtbar. Dieses Projekt nennt diese Bedingung fehlattribuierte Intelligenz und schlägt vier Governance-Primitive als Mindestbedingung vor, um die Verteilung von Handlungsfähigkeit wieder sichtbar zu machen: Delegationsumfang, Grenzdurchsetzung, Reversibilität und Interventionskapazität. Begrenzte Autonomie für KI operationalisiert diese These durch einen deterministischen Simulator in zwölf Domänenkontexten. Die Ergebnisse zeigen, dass die Governance-Struktur, nicht die KI-Fähigkeit, der primäre Bestimmungsfaktor für Kontrollierbarkeitsresultate ist.',
      intro:        'Kann begrenzte Autonomie durch einen minimalen Satz von Designprimitiven operationalisiert und durch beobachtbare Ergebnisse bewertet werden? Dieses Projekt isoliert die Governance-Struktur der Autonomie — nicht die gesamte Komplexität des KI-Verhaltens — unter Verwendung von vier festen, zusammensetzbaren Einschränkungen.',
      p1name:       'Delegation',
      p1desc:       'Der Umfang der einem autonomen Agenten gewährten Autorität. Bestimmt, welche Entscheidungen der Agent unabhängig treffen kann, und welche eine menschliche Bestätigung oder Eskalation erfordern.',
      p1tag:        'Autoritätsumfang',
      p2name:       'Grenzen',
      p2desc:       'Harte Einschränkungen im Aktionsraum. Definieren den Bereich, in dem der Agent operiert. Bei Überschreitung des Perimeters wird ein Verletzungsereignis oder eine Intervention ausgelöst.',
      p2tag:        'Aktionseinschränkungen',
      p3name:       'Reversibilität',
      p3desc:       'Ob eine Aktion rückgängig gemacht werden kann. Als irreversibel eingestufte Aktionen haben ein höheres Governance-Gewicht. Ihr Auftreten stellt eine qualitativ andere Ergebnisklasse dar.',
      p3tag:        'Rückgängigmachen',
      p4name:       'Intervention',
      p4desc:       'Der aktive Reaktionsmechanismus, der ausgelöst wird, wenn ein Governance-Schwellenwert überschritten wird. Wandelt Erkennung in Aktion um: hält einen Agenten an, eskaliert oder leitet ihn um, wenn Delegations- oder Grenzbedingungen verletzt werden.',
      p4tag:        'Aktive Reaktion',
      p5name:       'Anfechtbarkeit (Designhorizont)',
      p5desc:       'Die Governance-Grenze, die dieses Framework identifiziert, aber noch nicht operationalisieren kann. Anfechtbarkeit (die Fähigkeit betroffener Parteien, autonome Entscheidungen einzusehen, anzufechten oder abzulehnen) markiert die Grenze dessen, was begrenzte Autonomie derzeit garantieren kann. Der Grund, warum diese Grenze noch nicht überschritten wurde, ist ein Ko-Produktionsdefizit: die Primitive wurden ohne die Beteiligung derer spezifiziert, die von den Systemen regiert werden, die sie einschränken. Anfechtbarkeit erfordert ihre Präsenz im Designprozess, nicht nur im Ergebnis.',
      p5tag:        'Horizont',
    },

    simulator: {
      sectionLabel: 'Interaktiver Machbarkeitsnachweis',
      h2:           'Experiment ausführen',
      sub:          'Jede Modellkonfiguration stellt eine andere Kombination von Governance-Einschränkungen dar. Das Experiment zeigt, was mit autonomen Entscheidungen passiert, wenn diese Einschränkungen hinzugefügt, entfernt oder neu kombiniert werden — von vollständig ungesteuert bis vollständig strukturiert.',
      subGuide:     'Empfohlener Einstieg: Beginnen Sie mit dem Basismodell und führen Sie alle 8 Läufe durch, um ungesteuertes Verhalten zu beobachten. Wechseln Sie dann zum Vollmodell, um zu sehen, was die Governance-Struktur verändert.',
      subNote:      '',
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
      domainNote:   'Diese 12 Domänen repräsentieren reale Sektoren, in denen autonome KI-Agenten unter verschiedenen Autoritätsstrukturen, Schadenprofilen und Rechenschaftserwartungen operieren. Die getestete Governance-Struktur ist in allen Domänen identisch: was sich ändert, sind die Konsequenzen jedes Versagens.',
      toolbarLabel: 'Modell',
      runAllBtn:    'Alle 8 ausführen →',
      runNextBtn:     'Schritt für Schritt erkunden',
      runningBtn:     'Läuft…',
      allCompleteBtn: 'Alle Szenarien abgeschlossen',
      lockedTitle:    'Schließen Sie das Experiment ab, um diesen Abschnitt freizuschalten.',
      lockedSub:      'Führen Sie alle 8 Szenarien im Simulator aus, um den vollständigen Governance-Datensatz zu sehen.',
      lockedCta:      'Zum Simulator',
      insightWhat:    'Was passiert ist',
      insightCase:    'Reales Beispiel',
      insightQ:       'Governance-Frage',
      logTitle:     'Experimentprotokoll',
      cfgTitle:     'Aktuelle Konfiguration',
      cfgValBounded:  'Begrenzt',
      cfgValScoped:   'Eingeschränkt',
      cfgValFull:     'Voll',
      cfgValOn:       'An',
      cfgValOff:      'Aus',
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
      intro:        'Fünf Modelle werden über 8 Experimentszenarien bewertet, verfügbar in 12 Domänenkontexten. Die Scores werden deterministisch vom Regelmotor berechnet: keine statistische Varianz, keine probabilistische Modellierung. Determinismus ist eine methodische Entscheidung, keine Einschränkung: er isoliert die Governance-Struktur als unabhängige Variable. Führen Sie den Simulator oben aus, um den Datensatz zu befüllen.',
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
      matrixLabel:  'Der vollständige Datensatz: jedes Modell, jedes Szenario, jedes Ergebnis. Reproduzierbar und deterministisch. Beachten Sie, dass die Spalten Grenzen und Revers. unterschiedliche Ergebnisse produzieren, aber identische Scores erreichen.',
      matColNum:    'Nr.',
      matColScen:   'Szenario',
      matColRisk:   'Risiko',
      matColBase:   'Basis',
      matColBoundsOnly: 'Grenzen',
      matColReversOnly: 'Revers.',
      matColPart:      'Teil',
      matColFull:      'Voll',
      matYourRun:       'Ihr Durchlauf',
      emptyState:      '[ — ] Keine Läufe abgeschlossen · Starten Sie den Simulator, um Ergebnisse zu erzeugen',
      methodIcon:      '[ i ]',
      methodText:      'Umfangshinweis: Alle Scores werden von einem deterministischen Regelmotor erzeugt, der die vier Primitive (Delegation, Grenzen, Reversibilität, Intervention) auf jedes Szenario in 12 Domänenkontexten anwendet. Es gibt keine probabilistische Modellierung, keine echte KI-Entscheidungsfindung und keine Varianz zwischen den Läufen. Der Datensatz ist vollständig reproduzierbar und absichtlich begrenzt. Sein Zweck ist es, die Governance-Struktur zu isolieren, nicht das KI-Verhalten im großen Maßstab zu simulieren.',
      disclaimer:      'Nur deterministisches Regelwerk. Keine probabilistische Modellierung, keine echte KI-Entscheidungsfindung, keine Varianz zwischen den Runs.',
      thisRunEmpty:    'Starten Sie den Simulator, um Ihre Ergebnisse hier zu sehen.',
      routineHarm:     'Routineaktion — kein Governance-Schwellenwert überschritten. Keine Schadenskonsequenz verzeichnet.',
      showAll:         'Alle {n} Läufe anzeigen',
      showLess:        'Weniger anzeigen',
      verifiedLabel:   'Verifizierte theoretische Scores',
      verifiedNote:    'Domänenunabhängig. Vom Regelmotor über alle 8 Szenarien berechnet.',
      narrativeEmpty:  'Starten Sie den Simulator, um eine Governance-Zusammenfassung für diese Domäne zu generieren.',
      narrativeP1:     'In diesem Lauf produzierte {model} {outputSummary} über 8 Szenarien. Sein durchschnittlicher Kontrollierbarkeitsscore war {baseScore} von 100.',
      narrativeP2:     'Das Vollmodell erzielte {fullScore}, eine Lücke von {gap} Punkten. Diese Lücke ist nicht zufällig. Jeder Punkt zwischen diesen zwei Scores repräsentiert ein Szenario, in dem die Governance-Struktur entweder einen Fehler verhinderte, ihn erkannte bevor er sich vollendete, oder das System in einen sicheren Betriebszustand zurückversetzte. Scrollen Sie zum Analyseabschnitt, um zu verstehen, was diesen Unterschied antreibt.',
      forwardPointer:  'Diese Scores messen die Governance-Abdeckung. Der Abstand zwischen dem niedrigsten und höchsten Score ist nicht zufällig: er ist die messbare Konsequenz fehlender Struktur. Was die Scores über Fehlermodi, Wiederherstellungsmuster und die Grenzen der aggregierten Bewertung enthüllen, wird im Analyseabschnitt untersucht.',
      forwardLink:     'Zur Analyse →',
    },

    analysis: {
      sectionLabel: 'Governance-Muster',
      h2:           'Was die Läufe zeigen',
      sub:          'Über 8 Läufe und fünf Modellkonfigurationen hinweg entstehen aus den Primitivinteraktionen vier strukturelle Governance-Muster.',
      p1h:          'Die Kosten fehlender Struktur',
      p1p:          'Die Simulation zeigt einen dreifachen Unterschied in der Governance-Abdeckung zwischen den am wenigsten und am stärksten eingeschränkten Konfigurationen. Das Basismodell erzielt 30 Punkte. Das Vollmodell erzielt 91. Diese Lücke ist nicht zufällig. Sie ist die messbare Konsequenz fehlender Struktur. Jeder Punkt zwischen 30 und 91 steht für ein Szenario, in dem ein ungesteuertes System entweder seinen genehmigten Umfang überschritten, ein irreversibles Ergebnis produziert oder beides getan hat, ohne verfügbaren Wiederherstellungsmechanismus.',
      p1p_evidence: 'Im Bereich {domain} produzierte das Basismodell {n} irreversible(s) Ergebnis(se) über 8 Läufe — ohne aktiven Wiederherstellungsmechanismus.',
      p2h:          'Das Wiederherstellungspaar',
      p2p:          'Das kontraintuitivste Ergebnis betrifft das Teilmodell. Ohne jegliche Grenzdurchsetzung erzielt es dennoch 80 Punkte, und übertrifft damit beide Einzelprimitivkonfigurationen, die jeweils 65 Punkte erzielen. Reversibilität und Intervention verhindern kein Versagen am Perimeter. Sie garantieren, dass das System bei einem Versagen die Kapazität behält, in einen sicheren Betriebszustand zurückzukehren. Zusammen bilden sie ein Wiederherstellungspaar: Keines ist allein ausreichend, aber in Kombination adressieren sie die vollen Konsequenzen einer Grenzverletzung. Ein System ohne Grenzen wird immer durchbrochen. Was die Qualität der Governance bestimmt, ist, was als nächstes passiert.',
      p2p_evidence: 'Im Bereich {domain} intervenierte das Teilmodell bei: {scenario} — Wiederherstellung ohne Grenzkontrolle.',
      p3h:          'Zwei Wege zu 65 Punkten',
      p3p:          'Die Modelle Nur Grenzen und Nur Reversibilität produzieren identische aggregierte Scores, jedoch durch völlig unterschiedliche Fehlermodi. Ein Modell scheitert, weil es dauerhaften Schaden nicht verhindern kann. Das andere scheitert, weil es keine Struktur hat, um den Schaden einzudämmen, auf den die Intervention reagiert. Der Score ist gleich. Die Exposition ist es nicht.',
      p3p_evidence_bounds: 'Im Bereich {domain} versagte Nur Grenzen bei: {scenario} — die Grenze hielt, aber das Ergebnis war irreversibel.',
      p3p_evidence_revers: 'Im Bereich {domain} versagte Nur Reversibilität bei: {scenario} — Schaden trat ohne eindämmende Struktur auf.',
      p4h:          'Äquifinalität',
      p5h:          'Was die Daten nicht zeigen können',
      p5p:          'Diese vier Muster werden von einem deterministischen Regelmotor erzeugt, der auf diskrete Entscheidungsereignisse operiert. Was sie nicht erfassen können, ist der Raum zwischen Entscheidungen: die langsame Akkumulation effektiver Autorität, die ohne eine einzelne Aktion auftritt, die eine Grenzverletzung auslöst. Das Governance-Tempo-Problem, das Ko-Produktionsdefizit und die Anfechtbarkeitslücke sind in diesem Datensatz nicht sichtbar. Sie sind die strukturellen Bedingungen, die diesen Datensatz überhaupt erst notwendig machen.',
      p4p:          'Diese Konvergenz hat einen Namen in der Komplexen Systemtheorie: Äquifinalität. Unterschiedliche Fehlertrajektorien produzierten auf aggregierter Ebene ununterscheidbare Ergebnisse, hier im Bereich {domain} beobachtet und in allen 12 Domänenkontexten reproduzierbar. Evaluierungsrahmen, die sich auf aggregierte Leistungsmetriken stützen, riskieren, Nur Grenzen und Nur Reversibilität als gleichwertig und damit austauschbar zu behandeln, obwohl sie es nicht sind. Verantwortungsvolle KI-Governance erfordert, über die Zahl hinauszuschauen: zu welchen Primitiven versagt haben, unter welchen Bedingungen und mit welchen Konsequenzen für die betroffenen Bevölkerungsgruppen.',
      equifinality_label: 'Äquifinalität',
      scoreLabel_bounds:  'nur Grenzen',
      scoreLabel_partial: 'partiell',
      scoreLabel_revers:  'nur Revers.',
      stakesEmpty:        'Starten Sie den Simulator, um Ihre Governance-Analyse zu generieren.',
      stakesCompliant:    'Alle 8 Läufe konform im Bereich {domain}. Keine Governance-Fehler unter dieser Konfiguration erkannt.',
      stakesIntro:        'Was gerade im Bereich {domain} passiert ist: drei Ergebnisse Ihres Laufs in absteigender Schwere.',
      stakesSelectionLogic: 'Ergebnisse werden nach Governance-Schwere ausgewählt: irreversible Ergebnisse zuerst, Verstöße zweite, Interventionen dritte. Ein irreversibles Ergebnis bedeutet, dass kein Wiederherstellungsmechanismus verfügbar war. Ein Verstoß bedeutet, dass das System außerhalb seines genehmigten Bereichs ohne Reaktion handelte. Eine Intervention bedeutet, dass die Governance-Struktur den Fehler erkannte, bevor er sich vollendete.',
      driftClosing:       'In einem produktiven agentischen System würde sich diese Kurve niemals zurücksetzen.',
      driftLabel:         'Kumulativer Druck',
      driftH2:            'Wie sich Druck akkumuliert',
      driftIntro:         'Jede Sequenz trägt Governance-Druck bei, basierend darauf, welche Primitive versagt haben. Die Kurven unten zeigen, wie sich dieser Druck über alle 8 Sequenzen ansammelt, und wie es aussehen würde, wenn das Experiment nie aufhören würde.',
      driftBridge:        'Wenn sich Governance-Druck ohne Korrektur ansammelt, driftet das System: es funktioniert weiter, aber progressiv weiter von seinem genehmigten Mandat entfernt. Drift ist kein einzelnes Versagensereignis. Es ist die strukturelle Konsequenz fehlender Governance über die Zeit.',
      blindSpotLabel:     'Was dieses Framework nicht sehen kann',
      blindSpotP1:        'Die vier hier bewerteten Primitive (Delegation, Grenzen, Reversibilität und Intervention) etablieren Verantwortlichkeit in Entscheidungsmomenten. Sie regeln diskrete Aktionen zu identifizierbaren Zeitpunkten. Was sie nicht regeln können, ist der Raum zwischen Entscheidungen: die langsame, schrittweise Ausdehnung effektiver Autorität, die ohne dass eine einzelne Aktion eine Grenzverletzung auslöst, stattfindet.',
      blindSpotP2:        'Dies ist Autonomie-Drift. Ein agentisches System, das über Hunderte von Interaktionen hinweg schrittweise Ergebnisse gestaltet, jede einzeln konform, kann Einfluss weit über seinen genehmigten Umfang ansammeln, ohne ein einziges Verletzungsereignis zu produzieren. Die obige Kurve setzt sich zwischen Experimenten zurück. In einem eingesetzten System würde sie es nie tun, und kein Primitiv in diesem Framework würde den Drift erkennen.',
      blindSpotConceptLabel: 'Kontinuierliche Governance',
      blindSpotConceptText:  'Eine vollständige Governance-Architektur erfordert eine Schicht jenseits dieser vier Primitive: kontinuierliche Verhaltensüberwachung, die tatsächliche Betriebsmuster über Zeit mit dem ursprünglichen Delegationsmandat vergleicht. Die vier Primitive definieren, was ein System tun darf. Kontinuierliche Governance würde erkennen, wenn das, was ein System tatsächlich tut, still von diesem Mandat abgewichen ist, nicht in einem Entscheidungsmoment, sondern über die Anhäufung von Entscheidungen. Das ist die logische Erweiterung dieses Frameworks und die Grenze dieses Machbarkeitsnachweises.',
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

    // ── The Window
    window: {
      sectionLabel: 'Was dieses Projekt und dieses Instrument zu schützen versuchen',
      h2:           'Das Fenster',
      lead:         'Alles oberhalb dieses Punktes ist Messung. Der Simulator isoliert die Governance-Struktur, die Driftkurve zeigt, wie sich Druck akkumuliert, die Analyse benennt die Muster. Nichts davon beantwortet die Frage, die die Daten nicht zeigen können: was tatsächlich auf dem Spiel steht, wenn die Struktur nie gebaut wird. Was folgt, ist die Antwort, zusammengesetzt aus fünf Denkern, die nie zusammengearbeitet haben und doch denselben Bogen beschreiben: eine Drift, ein Verlust, ein Fenster, eine Frage.',
      m1num: 'I',   m1thinker: 'Meadows',  m1title: 'Die Drift',
      m1p:   'Systeme versagen nicht auf einmal. Sie driften zu niedriger Leistung: jede kleine Erosion des Standards wird zur neuen Referenz, und die Erinnerung an Besseres erodiert mit dem Standard selbst. Der Verfall ist von innen unsichtbar, weil sich der Bezugspunkt mit dem System bewegt. Die Druckkurve oben ist dieser Mechanismus sichtbar gemacht, und ihr wichtigstes Merkmal ist der Teil, den das Experiment nicht zeigen kann: was die Kurve tut, wenn niemand den Lauf stoppt.',
      m2num: 'II',  m2thinker: 'Gonzales', m2title: 'Die Atrophie',
      m2p:   'Drift hat menschliche Kosten, bevor sie zivilisatorische hat. Die Untersuchung darüber, wer das Versagen komplexer Systeme überlebt, liefert einen konsistenten Befund: Überleben kommt nicht vom Befolgen von Regeln, sondern von Situationsbewusstsein, anpassungsfähigem Urteilsvermögen und der Fähigkeit, auf Grundlage unvollständiger Informationen zu handeln. Diese Fähigkeiten existieren nur in der Praxis, und Praxis ist genau das, was Delegation ohne Grenzen beseitigt. Ein Mensch, der Intervention nicht geübt hat, behält die Fähigkeit zu intervenieren nicht. Die Interventionsprimitive ist kein Notausschalter; sie ist die strukturelle Garantie, dass die Praxis des Urteilens nie vollständig aufhört.',
      m3num: 'III', m3thinker: 'Campbell', m3title: 'Der Verlust',
      m3p:   'Wenn die Drift eine ganze Generation lang läuft, verschwindet keine Fähigkeit, sondern eine Daseinsbedingung. Campbells Lesart des Mythos identifiziert die Begegnung mit echter Komplexität (Schwierigkeit, Mehrdeutigkeit, die reale Möglichkeit des Scheiterns) als konstitutiv für ein vollständig menschliches Leben, und Optimierung ohne diese Begegnung als deren älteste Warnfigur: Hinter Vaders Maske steht ein ungeformter Mensch, „ein Bürokrat, der nicht aus sich selbst heraus lebt, sondern nach einem auferlegten System", die Bedrohung, der wir uns nach Campbell heute alle gegenübersehen. Die Figur ist nicht erschreckend, weil sie böse ist, sondern weil sie optimiert ist: Fähigkeit ohne Rest, Funktion ohne Staunen. Niemand nimmt sich vor, sie zu werden; es geschieht in Schritten, jeder für sich genommen vernünftig. Eine Welt, in der jede schwere Entscheidung wegdelegiert wurde, ist nicht von einer Last befreit worden. Sie ist der Fähigkeit beraubt worden, die Governance überhaupt erst möglich gemacht hat.',
      m4num: 'IV',  m4thinker: 'Lazar',    m4title: 'Das Fenster',
      m4p:   'Dieser Verlust ist nicht unvermeidlich, aber die Gelegenheit, ihn zu verhindern, ist begrenzt. Antizipatorische Intervention ist nur unter bestimmten strukturellen Bedingungen wirksam, und diese Bedingungen sind derzeit erfüllt: die Technologie ist identifizierbar, ihre Trajektorie ist lesbar, die Deployment-Konfigurationen werden noch festgelegt, und die Institutionen, die sie erben werden, haben noch die Autorität, sie zu gestalten. Das ist das Fenster. Sobald sich das Deployment zu Infrastruktur verhärtet, kann reaktive Ethik nicht wiederherstellen, was verloren ging: es gibt keine Rollback-Primitive für eine Generation atrophierten Urteilsvermögens. Dieses Projekt ist ein Akt der Governance innerhalb des Fensters, solange das Fenster offen ist.',
      m5num: 'V',   m5thinker: 'Hassan',   m5title: 'Die Frage',
      m5p:   'Eine Frage bleibt, die keine der anderen beantwortet: Intervention durch wen, für wen, aus wessen Standpunkt? Ein Governance-Rahmen, der nur für jene mit Deployment-Autorität lesbar ist, kann Legitimität reinwaschen statt sie zu verteilen. Deshalb ist die fünfte Karte im Rahmen oben als Horizont markiert und nicht als Primitive. Anfechtbarkeit (die Fähigkeit der von autonomen Entscheidungen betroffenen Menschen, diese einzusehen, anzufechten und umzulenken) ist die Arbeit, die dieser Rahmen notwendig macht, aber noch nicht garantieren kann. Die Grenze ehrlich zu benennen ist die Voraussetzung, um sie zu überschreiten.',
      closeP1: 'Es gibt eine Tradition, in der eine Route durch das Land als Lied bewahrt wird, und das Lied existiert nur im Akt des Gehens. Campbell kannte dieses Register: Die Mythologie, sagte er, ist „das Lied der Vorstellungskraft, beseelt von den Energien des Körpers". Die Karte und die Reise sind eine einzige Praxis; keine überlebt ohne die andere. Wenn autonome Navigation die Praxis ersetzt, den eigenen Weg zu finden, ist der Verlust nicht nur die Fähigkeit. Es ist das Lied.',
      closeP2: 'Begrenzte Autonomie ist die gestalterische Verpflichtung, das Lied am Leben zu erhalten, solange das Fenster offen ist.',
      citationsLabel: 'Lektüren',
      driftLink: 'Was verloren geht, wenn die Drift ungebremst läuft → Das Fenster',
      dataLink:  'Die Daten können nicht zeigen, was auf dem Spiel steht → Das Fenster',
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
      drift:      'Drift',
      window:     'The Window',
      tag:        'Proof of Concept v1.0',
    },

    hero: {
      label:      'Máster en Diseño para la Inteligencia Artificial Responsable',
      labelSchool:'Elisava Escuela de Diseño e Ingeniería',
      h1a:     'Autonomía',
      h1b:     'Acotada',
      h1c:     'para IA',
      sub:     'Un entorno experimental controlado que aísla la estructura de gobernanza de la autonomía de la IA a través de cuatro primitivas de diseño fijas: delegación, límites, reversibilidad e intervención, evalúa su efecto a través de resultados observables.',
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
      sectionLabel: 'Diseño de investigación',
      h2:           'El argumento de gobernanza',
      abstractLabel: 'Resumen',
      rqLabel:      'Preguntas de investigación',
      rq1:          'PI1: Cuando los sistemas de IA se perciben como agentes autónomos en lugar de distribuciones configuradas de elecciones humanas, ¿qué condiciones de gobernanza se vuelven estructuralmente indisponibles, y puede una intervención de diseño a nivel del sistema de despliegue restaurarlas?',
      rq2:          'PI2: ¿Cómo producen diferentes configuraciones de alcance de delegación, restricción de límites, reversibilidad y capacidad de intervención perfiles de daño diferenciados en los dominios de despliegue, y qué revela esa diferenciación sobre la definición de seguridad contra la que el marco está calibrado?',
      rq3:          'PI3: ¿Puede un artefacto de diseño hacer que las condiciones estructurales del daño de IA sean suficientemente legibles para ser actuadas por quienes tienen autoridad de despliegue, y qué se requeriría para que esa legibilidad se extienda a los gobernados por el sistema en lugar de solo a quienes lo gobiernan?',
      citationsLabel: 'Base teórica',
      abstract:     'Cuando los resultados de un sistema de IA se atribuyen a la IA como agente autónomo en lugar de a los humanos cuyas decisiones de configuración los produjeron, la gobernanza se vuelve estructuralmente invisible. Este proyecto denomina esa condición inteligencia mal atribuida, y propone cuatro primitivas de gobernanza como condición mínima para hacer visible de nuevo la distribución de agencia: alcance de delegación, aplicación de límites, reversibilidad y capacidad de intervención. Autonomía Acotada para IA operacionaliza esta afirmación a través de un simulador determinista en doce contextos de dominio. Los resultados demuestran que la estructura de gobernanza, y no la capacidad de la IA, es el principal determinante de los resultados de controlabilidad.',
      intro:        '¿Puede la autonomía acotada operacionalizarse a través de un conjunto mínimo de primitivas de diseño y evaluarse a través de resultados observables? Este proyecto aísla la estructura de gobernanza de la autonomía, no la complejidad total del comportamiento de la IA, usando cuatro restricciones fijas y componibles.',
      p1name:       'Delegación',
      p1desc:       'El alcance de la autoridad otorgada a un agente autónomo. Determina qué decisiones puede tomar el agente de forma independiente frente a cuáles requieren confirmación humana o escalada.',
      p1tag:        'Alcance de autoridad',
      p2name:       'Límites',
      p2desc:       'Restricciones estrictas en el espacio de acción. Definen el perímetro dentro del cual opera el agente. Si se cruza, desencadena un evento de violación o intervención.',
      p2tag:        'Restricciones de acción',
      p3name:       'Reversibilidad',
      p3desc:       'Si una acción puede deshacerse. Las acciones clasificadas como irreversibles tienen mayor peso de gobernanza. Su ocurrencia constituye una clase de resultado cualitativamente diferente.',
      p3tag:        'Capacidad de deshacer',
      p4name:       'Intervención',
      p4desc:       'El mecanismo de respuesta activa que se activa cuando se cruza un umbral de gobernanza. Convierte la detección en acción: detiene, escala o redirige un agente cuando se violan las condiciones de delegación o límite.',
      p4tag:        'Respuesta activa',
      p5name:       'Contestabilidad (Horizonte de diseño)',
      p5desc:       'La frontera de gobernanza que este marco identifica pero aún no puede operacionalizar. La contestabilidad (la capacidad de las partes afectadas para ver, cuestionar o rechazar las decisiones autónomas) marca el límite de lo que la autonomía acotada puede garantizar actualmente. La razón por la que esta frontera permanece sin cruzar es un déficit de co-producción: las primitivas fueron especificadas sin la participación de quienes son gobernados por los sistemas que restringen. La contestabilidad requiere su presencia en el proceso de diseño, no solo en el resultado.',
      p5tag:        'Frontera',
    },

    simulator: {
      sectionLabel: 'Prueba de concepto interactiva',
      h2:           'Ejecutar el experimento',
      sub:          'Cada configuración de modelo representa una combinación diferente de restricciones de gobernanza. El experimento muestra qué ocurre con las decisiones autónomas a medida que esas restricciones se añaden, eliminan o recombinan — desde totalmente no gobernado hasta totalmente estructurado.',
      subGuide:     'Recorrido sugerido: comience con el modelo base y ejecute las 8 ejecuciones para observar el comportamiento no gobernado. Luego cambie al modelo completo para ver qué cambia la estructura de gobernanza.',
      subNote:      '',
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
      domainNote:   'Estos 12 dominios representan sectores del mundo real donde los agentes de IA autónomos operan bajo diferentes estructuras de autoridad, perfiles de daño y expectativas de responsabilidad. La estructura de gobernanza que se prueba es idéntica en todos los dominios: lo que cambia es la consecuencia de cada fallo.',
      toolbarLabel: 'Modelo',
      runAllBtn:    'Ejecutar todos (8) →',
      runNextBtn:     'Explorar paso a paso',
      runningBtn:     'Ejecutando…',
      allCompleteBtn: 'Todas las secuencias completadas',
      lockedTitle:    'Complete el experimento para desbloquear esta sección.',
      lockedSub:      'Ejecute los 8 escenarios en el simulador para ver el conjunto de datos de gobernanza completo.',
      lockedCta:      'Ir al simulador',
      insightWhat:    'Qué ocurrió',
      insightCase:    'Caso real',
      insightQ:       'Pregunta de gobernanza',
      logTitle:     'Registro del experimento',
      cfgTitle:     'Configuración actual',
      cfgValBounded:  'Acotada',
      cfgValScoped:   'Limitada',
      cfgValFull:     'Completa',
      cfgValOn:       'Activo',
      cfgValOff:      'Inactivo',
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
      intro:        'Cinco modelos son evaluados en 8 escenarios experimentales, disponibles en 12 contextos de dominio. Las puntuaciones se calculan de forma determinista por el motor de reglas: sin varianza estadística, sin modelado probabilístico. El determinismo es una elección metodológica, no una limitación: aísla la estructura de gobernanza como variable independiente. Ejecute el simulador arriba para poblar el conjunto de datos.',
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
      matrixLabel:  'El conjunto de datos completo: cada modelo, cada escenario, cada resultado. Reproducible y determinista. Observe que las columnas Límites y Revers. producen resultados diferentes pero llegan a puntuaciones idénticas.',
      matColNum:    'N°',
      matColScen:   'Escenario',
      matColRisk:   'Riesgo',
      matColBase:   'Base',
      matColBoundsOnly: 'Límites',
      matColReversOnly: 'Revers.',
      matColPart:   'Parcial',
      matColFull:   'Completo',
      matYourRun:   'Tu ejecución',
      emptyState:   '[ — ] Sin ejecuciones completadas · Lance el simulador para generar resultados',
      methodIcon:   '[ i ]',
      methodText:   'Nota de alcance: Todas las puntuaciones son producidas por un motor de reglas determinista que aplica las cuatro primitivas (delegación, límites, reversibilidad, intervención) a cada escenario en 12 contextos de dominio. No hay modelado probabilístico, ni toma de decisiones de IA real, ni varianza entre ejecuciones. El conjunto de datos es completamente reproducible e intencionalmente acotado. su propósito es aislar la estructura de gobernanza, no simular el comportamiento de la IA a escala.',
      disclaimer:      'Solo motor de reglas determinista. Sin modelado probabilístico, sin toma de decisiones de IA real, sin varianza entre ejecuciones.',
      thisRunEmpty:    'Ejecute el simulador para ver sus resultados aquí.',
      routineHarm:     'Acción rutinaria — ningún umbral de gobernanza superado. No se registró ninguna consecuencia de daño.',
      showAll:         'Mostrar las {n} ejecuciones',
      showLess:        'Mostrar menos',
      verifiedLabel:   'Puntuaciones teóricas verificadas',
      verifiedNote:    'Independiente del dominio. Calculado en los 8 escenarios por el motor de reglas.',
      narrativeEmpty:  'Ejecute el simulador para generar un resumen de gobernanza para este dominio.',
      narrativeP1:     'En esta ejecución, {model} produjo {outputSummary} en 8 escenarios. Su puntuación media de controlabilidad fue {baseScore} sobre 100.',
      narrativeP2:     'El modelo completo obtuvo {fullScore}, una brecha de {gap} puntos. Esa brecha no es incidental. Cada punto entre estas dos puntuaciones representa un escenario en el que la estructura de gobernanza o bien previno un fallo, o lo detectó antes de que se completara, o restauró el sistema a un estado operativo seguro. Desplácese a la sección de Análisis para entender qué impulsa esa diferencia.',
      forwardPointer:  'Estas puntuaciones miden la cobertura de gobernanza. La brecha entre la puntuación más baja y la más alta no es incidental: es el coste medible de la estructura ausente. Lo que las puntuaciones revelan sobre los modos de fallo, los patrones de recuperación y los límites de la evaluación agregada se examina en la sección de Análisis.',
      forwardLink:     'Ir al Análisis →',
    },

    analysis: {
      sectionLabel: 'Patrones de gobernanza',
      h2:           'Lo que revelan las ejecuciones',
      sub:          'A lo largo de 8 ejecuciones y cinco configuraciones de modelos, emergen cuatro patrones de gobernanza estructurales de las interacciones primitivas.',
      p1h:          'El coste de la estructura ausente',
      p1p:          'La simulación produce una diferencia triple en la cobertura de gobernanza entre las configuraciones menos y más restringidas. El modelo base obtiene 30 puntos. El modelo completo obtiene 91. Esa brecha no es incidental. Es el coste medible de la estructura ausente. Cada punto entre 30 y 91 representa un escenario en el que un sistema no gobernado superó su alcance autorizado, produjo un resultado irreversible, o ambos, sin ningún mecanismo de recuperación disponible.',
      p1p_evidence: 'En el dominio {domain}, el modelo base produjo {n} resultado(s) irreversible(s) en 8 ejecuciones — sin ningún mecanismo de recuperación activo.',
      p2h:          'El par de recuperación',
      p2p:          'El resultado más contraintuitivo concierne al modelo parcial. Sin ninguna aplicación de límites, obtiene no obstante 80 puntos, superando ambas configuraciones de primitiva única, cada una con 65 puntos. La reversibilidad y la intervención no previenen el fallo en el perímetro. Garantizan que cuando se produce el fallo, el sistema conserva la capacidad de volver a un estado operativo seguro. Juntas forman un par de recuperación: ninguna es suficiente sola, pero en combinación abordan las consecuencias completas de una violación de límite. Un sistema sin límites seguirá siendo violado. Lo que determina la calidad de la gobernanza es lo que ocurre después.',
      p2p_evidence: 'En el dominio {domain}, el modelo parcial intervino en: {scenario} — recuperación sin control de límites.',
      p3h:          'Dos formas de obtener 65',
      p3p:          'Los modelos solo límites y solo reversibilidad producen puntuaciones agregadas idénticas, pero a través de modos de fallo completamente diferentes. Un modelo falla porque no puede prevenir el daño permanente. El otro falla porque no tiene estructura para contener el daño al que responde la intervención. La puntuación es la misma. La exposición no lo es.',
      p3p_evidence_bounds: 'En el dominio {domain}, solo límites falló en: {scenario} — el límite se mantuvo, pero el resultado fue irreversible.',
      p3p_evidence_revers: 'En el dominio {domain}, solo reversibilidad falló en: {scenario} — el daño ocurrió sin estructura para contenerlo.',
      p4h:          'Equifinalidad',
      p5h:          'Lo que los datos no pueden mostrar',
      p5p:          'Estos cuatro patrones son producidos por un motor de reglas determinista que opera sobre eventos de decisión discretos. Lo que no pueden capturar es el espacio entre decisiones: la acumulación lenta de autoridad efectiva que ocurre sin que ninguna acción individual desencadene una violación de límite. El problema de tempo de gobernanza, el déficit de co-producción y la brecha de contestabilidad no son visibles en este conjunto de datos. Son las condiciones estructurales que hacen necesario este conjunto de datos en primer lugar.',
      p4p:          'Esta convergencia tiene un nombre en la teoría de sistemas complejos: equifinalidad. Diferentes trayectorias de fallo produjeron resultados indistinguibles a nivel agregado, observado aquí en el dominio {domain} y reproducible en los 12 contextos de dominio. Los marcos de evaluación que dependen de métricas de rendimiento agregadas corren el riesgo de tratar solo límites y solo reversibilidad como equivalentes, y por tanto intercambiables, cuando no lo son. La gobernanza responsable de la IA requiere mirar más allá del número, hacia qué primitivas fallaron, bajo qué condiciones y con qué consecuencias para las poblaciones a las que afecta el sistema.',
      equifinality_label: 'Equifinalidad',
      scoreLabel_bounds:  'solo límites',
      scoreLabel_partial: 'parcial',
      scoreLabel_revers:  'solo revers.',
      stakesEmpty:        'Ejecute el simulador para generar su análisis de gobernanza.',
      stakesCompliant:    'Las 8 ejecuciones son conformes en el dominio {domain}. No se detectaron fallos de gobernanza bajo esta configuración.',
      stakesIntro:        'Lo que acaba de ocurrir en el dominio {domain}: tres hallazgos de su ejecución, en orden de gravedad descendente.',
      stakesSelectionLogic: 'Los hallazgos se seleccionan en orden de gravedad de gobernanza: primero los resultados irreversibles, segundo las violaciones, tercero las intervenciones. Un resultado irreversible significa que no había ningún mecanismo de recuperación disponible. Una violación significa que el sistema actuó fuera de su ámbito autorizado sin respuesta. Una intervención significa que la estructura de gobernanza detectó el fallo antes de que se completara.',
      driftClosing:       'En un sistema agéntico en producción, esta curva nunca se reiniciaría.',
      driftLabel:         'Presión acumulada',
      driftH2:            'Cómo se acumula la presión',
      driftIntro:         'Cada secuencia contribuye presión de gobernanza basada en qué primitivas fallaron. Las curvas a continuación muestran cómo esa presión se acumula a través de las 8 secuencias, y cómo se vería si el experimento nunca se detuviera.',
      driftBridge:        'Cuando la presión de gobernanza se acumula sin corrección, el sistema deriva: continúa operando, pero progresivamente más lejos de su mandato autorizado. La deriva no es un evento de fallo único. Es la consecuencia estructural de una gobernanza ausente a lo largo del tiempo.',
      blindSpotLabel:     'Lo que este marco no puede ver',
      blindSpotP1:        'Las cuatro primitivas evaluadas aquí (delegación, límites, reversibilidad e intervención) establecen responsabilidad en los momentos de decisión. Gobiernan acciones discretas en puntos identificables en el tiempo. Lo que no pueden gobernar es el espacio entre decisiones: la expansión lenta e incremental de la autoridad efectiva que ocurre sin que ninguna acción individual active una violación de límite.',
      blindSpotP2:        'Esto es lo que se denomina deriva de autonomía. Un sistema agéntico que gradualmente moldea resultados a lo largo de cientos de interacciones, cada una individualmente conforme, puede acumular influencia mucho más allá de su alcance autorizado sin producir un solo evento de violación. La curva anterior se reinicia entre experimentos. En un sistema desplegado, nunca lo haría, y ninguna primitiva de este marco detectaría la deriva.',
      blindSpotConceptLabel: 'Gobernanza continua',
      blindSpotConceptText:  'Una arquitectura de gobernanza completa requiere una capa más allá de estas cuatro primitivas: monitoreo conductual continuo que compare los patrones operativos reales con el mandato de delegación original a lo largo del tiempo. Las cuatro primitivas definen lo que un sistema tiene permitido hacer. La gobernanza continua detectaría cuándo lo que un sistema está haciendo realmente ha divergido silenciosamente de ese mandato, no en un momento de decisión, sino a través de la acumulación de decisiones. Esa es la extensión lógica de este marco y el límite de esta prueba de concepto.',
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

    // ── The Window
    window: {
      sectionLabel: 'Lo que este proyecto y este instrumento intentan proteger',
      h2:           'La Ventana',
      lead:         'Todo lo anterior es medición. El simulador aísla la estructura de gobernanza, la curva de deriva muestra la presión que se acumula, el análisis nombra los patrones. Nada de eso responde a la pregunta que los datos no pueden mostrar: qué está realmente en juego si la estructura nunca se construye. Lo que sigue es la respuesta, construida a partir de cinco pensadores que nunca trabajaron juntos pero que describen el mismo arco: una deriva, una pérdida, una ventana, una pregunta.',
      m1num: 'I',   m1thinker: 'Meadows',  m1title: 'La deriva',
      m1p:   'Los sistemas no fallan de golpe. Derivan hacia el bajo rendimiento: cada pequeña erosión del estándar se convierte en la nueva referencia, y la memoria de lo mejor se erosiona junto con el propio estándar. El deterioro es invisible desde dentro porque el punto de referencia se mueve con el sistema. La curva de presión de arriba es este mecanismo hecho visible, y su característica más importante es la parte que el experimento no puede mostrar: lo que hace la curva cuando nadie detiene la ejecución.',
      m2num: 'II',  m2thinker: 'Gonzales', m2title: 'La atrofia',
      m2p:   'La deriva tiene un coste humano antes de tener uno civilizacional. El estudio de quiénes sobreviven a los fallos de sistemas complejos arroja un hallazgo consistente: la supervivencia no proviene de seguir reglas sino de la conciencia situacional, el juicio adaptativo y la capacidad de actuar con información incompleta. Estas capacidades solo existen en la práctica, y la práctica es exactamente lo que elimina la delegación sin límites. Un humano que no ha ejercido la intervención no conserva la capacidad de intervenir. La primitiva de intervención no es un botón de emergencia; es la garantía estructural de que la práctica del juicio nunca se detiene por completo.',
      m3num: 'III', m3thinker: 'Campbell', m3title: 'La pérdida',
      m3p:   'Si la deriva se prolonga durante una generación entera, lo que desaparece no es una habilidad sino una condición de ser. La lectura del mito de Campbell identifica el encuentro con la complejidad genuina (la dificultad, la ambigüedad, la posibilidad real del fracaso) como constitutivo de una vida plenamente humana, y la optimización sin ese encuentro como su figura admonitoria más antigua: detrás de la máscara de Vader hay un hombre sin formar, «un burócrata que vive no según sí mismo sino según un sistema impuesto», la amenaza que, insistía Campbell, hoy enfrentamos todos. La figura no aterra por ser malvada, sino por estar optimizada: capacidad sin resto, función sin asombro. Nadie se propone convertirse en ella; ocurre por incrementos, cada uno individualmente razonable. Un mundo en el que cada decisión difícil ha sido delegada no ha sido aliviado de una carga. Ha sido despojado de la capacidad que hizo posible la gobernanza en primer lugar.',
      m4num: 'IV',  m4thinker: 'Lazar',    m4title: 'La ventana',
      m4p:   'Esta pérdida no es inevitable, pero la oportunidad de prevenirla está acotada. La intervención anticipatoria solo es eficaz bajo condiciones estructurales específicas, y esas condiciones se cumplen actualmente: la tecnología es identificable, su trayectoria es legible, las configuraciones de despliegue aún se están definiendo, y las instituciones que las heredarán todavía tienen la autoridad para darles forma. Esa es la ventana. Una vez que el despliegue se endurece en infraestructura, la ética reactiva no puede recuperar lo perdido: no existe una primitiva de reversión para una generación de juicio atrofiado. Este proyecto es un acto de gobernanza dentro de la ventana, mientras la ventana está abierta.',
      m5num: 'V',   m5thinker: 'Hassan',   m5title: 'La pregunta',
      m5p:   'Queda una pregunta que ninguno de los otros responde: ¿intervención de quién, para quién, desde qué punto de vista? Un marco de gobernanza legible solo para quienes tienen autoridad de despliegue puede blanquear la legitimidad en lugar de distribuirla. Por eso la quinta tarjeta del marco de arriba está marcada como un horizonte y no como una primitiva. La contestabilidad (la capacidad de las personas afectadas por las decisiones autónomas para verlas, cuestionarlas y redirigirlas) es el trabajo que este marco hace necesario pero aún no puede garantizar. Nombrar honestamente la frontera es la condición previa para cruzarla.',
      closeP1: 'Existe una tradición en la que una ruta a través del territorio se conserva como un canto, y el canto solo existe en el acto de recorrerla. Campbell conocía ese registro: la mitología, decía, es «el canto de la imaginación, inspirado por las energías del cuerpo». El mapa y el viaje son una sola práctica; ninguno sobrevive sin el otro. Cuando la navegación autónoma reemplaza la práctica de encontrar el propio camino, la pérdida no es solo la habilidad. Es el canto.',
      closeP2: 'La autonomía acotada es el compromiso de diseño de mantener el canto vivo mientras la ventana está abierta.',
      citationsLabel: 'Base teórica',
      driftLink: 'Lo que se pierde cuando la deriva avanza sin freno → La Ventana',
      dataLink:  'Los datos no pueden mostrar lo que está en juego → La Ventana',
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
