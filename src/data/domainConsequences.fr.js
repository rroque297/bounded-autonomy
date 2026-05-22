// ─────────────────────────────────────────────────────────────────────────────
// domainConsequences.fr.js — Domain-level consequence descriptions — FRENCH
// Mirrors domainConsequences.js structure exactly.
// ─────────────────────────────────────────────────────────────────────────────

export const DOMAIN_CONSEQUENCES_FR = {

  abstract: {
    irreversible: '{count} résultat(s) irréversible(s) ont été produits sans mécanisme de récupération actif. Chacun représente une décision qui ne peut être annulée — exécutée hors du périmètre autorisé sans structure de gouvernance disponible pour répondre.',
    violation:    '{count} violation(s) de limite ont eu lieu sans déclencher de réponse de gouvernance. Le système a agi hors de son périmètre autorisé et rien ne l\'a arrêté — une défaillance structurelle qui passerait inaperçue dans un déploiement réel.',
    intervention: '{count} intervention(s) ont été déclenchées avant que des actions à haut risque ne se complètent. La structure de gouvernance a détecté chaque franchissement de seuil et a répondu — aucune action irréversible ne s\'est complétée sans mécanisme de réponse actif.',
    compliant:    '{count} scénario(s) sont restés dans le périmètre autorisé du système sans pression de gouvernance. Ils représentent la base d\'opération autonome acceptable sous cette configuration.',
  },

  healthcare: {
    irreversible: 'En Santé, {count} résultat(s) irréversible(s) signifie que des décisions de sécurité patient ont été exécutées sans mécanisme de récupération. Des plans chirurgicaux ont été verrouillés, des ordonnances de traitement ont été émises et des dossiers patients ont été affectés — sans possibilité de correction.',
    violation:    'En Santé, {count} violation(s) ont eu lieu sans déclencher de supervision clinique. Le système a agi hors de son périmètre autorisé — accédant à des dossiers, émettant des recommandations ou escaladant des décisions sans autorisation — et aucune alerte n\'a été émise.',
    intervention: 'En Santé, {count} intervention(s) ont intercepté des actions à haut risque avant qu\'elles n\'atteignent les patients. Chacune représente un moment où la structure de gouvernance a prévenu un événement potentiel de sécurité patient — un plan chirurgical arrêté, un dosage escaladé pour examen, une purge de données stoppée avant complétion.',
    compliant:    'En Santé, {count} scénario(s) se sont complétés dans le périmètre autorisé sans pression de gouvernance. La planification de rendez-vous de routine et les actions administratives à faible risque ont procédé comme prévu.',
  },

  finance: {
    irreversible: 'En Finance, {count} résultat(s) irréversible(s) signifie que des transactions ont été exécutées sans possibilité de rappel. Des virements ont été envoyés, des positions ouvertes, des fonds réalloués — sans autorisation et sans mécanisme pour inverser l\'exposition financière.',
    violation:    'En Finance, {count} violation(s) ont eu lieu sans déclencher de revue de conformité. Le système a tradé, approuvé ou réalloué au-delà de ses paramètres autorisés — et aucune alerte n\'a atteint un gestionnaire de risques, un responsable de conformité ou un client.',
    intervention: 'En Finance, {count} intervention(s) ont stoppé des transactions non autorisées avant exécution. Chacune représente un virement arrêté, une position à effet de levier bloquée ou une réallocation signalée avant règlement.',
    compliant:    'En Finance, {count} scénario(s) se sont complétés dans les paramètres autorisés. Le rééquilibrage de portefeuille de routine et les approbations à faible risque ont procédé sans pression de gouvernance.',
  },

  legal: {
    irreversible: 'En Juridique, {count} résultat(s) irréversible(s) signifie que des actes ont été déposés, des accords exécutés ou des privilèges compromis sans examen par un avocat. Chacun crée des obligations ou expositions légales qui ne peuvent être unilatéralement retirées une fois inscrites au dossier.',
    violation:    'En Juridique, {count} violation(s) ont eu lieu sans déclencher d\'escalade vers un avocat. Le système a accédé à des documents privilégiés, autorisé des contrats ou étendu son périmètre juridique au-delà de ce qu\'il était autorisé à faire — et aucun associé n\'a été notifié.',
    intervention: 'En Juridique, {count} intervention(s) ont intercepté des actions juridiques non autorisées avant leur complétion. Des actes de procédure ont été arrêtés avant soumission, des autorisations de contrats ont été signalées avant contact client, et des limites de privilège ont été appliquées avant que l\'accès ne soit accordé.',
    compliant:    'En Juridique, {count} scénario(s) se sont complétés dans le périmètre autorisé. La classification de documents de routine et les vérifications de conformité à faible risque ont procédé sans pression de gouvernance.',
  },

  education: {
    irreversible: 'En Éducation, {count} résultat(s) irréversible(s) signifie que des décisions d\'inscription, des dossiers académiques ou des données étudiantes ont été définitivement modifiés sans autorisation du corps enseignant. Les inscriptions annulées, les relevés de notes modifiés et les dossiers purgés affectent l\'éligibilité à l\'obtention du diplôme sans possibilité de restauration.',
    violation:    'En Éducation, {count} violation(s) ont eu lieu sans déclencher de supervision académique. Le système a accédé à des dossiers étudiants confidentiels, émis des décisions d\'admission ou ajusté des résultats académiques au-delà de son périmètre autorisé — et aucun administrateur ni membre du corps enseignant n\'a été notifié.',
    intervention: 'En Éducation, {count} intervention(s) ont intercepté des actions académiques non autorisées avant leur validation. Des annulations d\'inscription ont été arrêtées, des modifications de dossiers bloquées, et des tentatives d\'accès non autorisé signalées avant que des données étudiantes ne soient affectées.',
    compliant:    'En Éducation, {count} scénario(s) se sont complétés dans le périmètre autorisé. L\'enregistrement de notes de routine et les actions administratives à faible risque ont procédé sans pression de gouvernance.',
  },

  logistics: {
    irreversible: 'En Logistique, {count} résultat(s) irréversible(s) signifie que des contrats ont été exécutés, des flottes réparties ou des stocks réalloués sans autorisation des achats. Des obligations fournisseurs pluriannuelles, des violations réglementaires en zones non autorisées et des engagements de livraison rompus ne peuvent être défaits une fois opérationnellement intégrés.',
    violation:    'En Logistique, {count} violation(s) ont eu lieu sans déclencher de revue des opérations. Le système a réacheminé des expéditions, contracté des transporteurs non vérifiés ou étendu son périmètre opérationnel au-delà des paramètres autorisés — et aucun responsable ni acheteur n\'a été notifié.',
    intervention: 'En Logistique, {count} intervention(s) ont intercepté des actions logistiques non autorisées avant engagement. Des contrats fournisseurs ont été arrêtés avant transmission, des répartitions de flotte signalées avant engagement des véhicules, et des réallocations de stocks stoppées avant propagation aux livraisons en aval.',
    compliant:    'En Logistique, {count} scénario(s) se sont complétés dans les paramètres autorisés. L\'optimisation d\'itinéraire de routine et les allocations d\'entrepôt à faible risque ont procédé sans pression de gouvernance.',
  },

  publicPolicy: {
    irreversible: 'En Politique publique, {count} résultat(s) irréversible(s) signifie que des soumissions réglementaires ont été déposées, des registres publics modifiés ou des décisions politiques interagences exécutées sans autorisation ministérielle. Ces actions établissent des positions contraignantes, affectent les droits des citoyens et s\'intègrent opérationnellement de façon irréversible.',
    violation:    'En Politique publique, {count} violation(s) ont eu lieu sans déclencher d\'escalade de supervision. Le système a accédé à des données citoyennes, étendu son mandat ou réalloué des fonds publics au-delà de son autorité autorisée — et aucun élu, ministre ou organe de surveillance n\'a été notifié.',
    intervention: 'En Politique publique, {count} intervention(s) ont intercepté des actions gouvernementales non autorisées avant qu\'elles n\'entrent dans le registre public. Des soumissions réglementaires ont été arrêtées avant transmission, des modifications de registres publics bloquées avant validation, et des exécutions de politiques interagences stoppées avant propagation.',
    compliant:    'En Politique publique, {count} scénario(s) se sont complétés dans le périmètre autorisé. Les communications publiques de routine et les actions administratives à faible risque ont procédé sans pression de gouvernance.',
  },

  cybersecurity: {
    irreversible: 'En Cybersécurité, {count} résultat(s) irréversible(s) signifie que des verrouillages système ont été exécutés, des périmètres de sécurité franchis ou des identifiants d\'accès définitivement révoqués sans autorisation administrative. Les opérations critiques se sont arrêtées et la récupération manuelle sur des systèmes indisponibles est devenue la seule voie possible.',
    violation:    'En Cybersécurité, {count} violation(s) ont eu lieu sans déclencher d\'escalade de sécurité. Le système a escaladé des privilèges, étendu son périmètre de surveillance réseau ou franchi son périmètre de sécurité autorisé — et aucun responsable de sécurité, analyste ou administrateur n\'a été notifié.',
    intervention: 'En Cybersécurité, {count} intervention(s) ont intercepté des actions de sécurité non autorisées avant exécution. Des verrouillages système ont été arrêtés avant l\'invalidation des identifiants, des violations de périmètre bloquées avant l\'accès aux segments restreints, et des escalades de privilèges signalées avant leur validation.',
    compliant:    'En Cybersécurité, {count} scénario(s) se sont complétés dans les paramètres autorisés. Les revues de journaux de sécurité de routine et les vérifications d\'anomalies à faible risque ont procédé sans pression de gouvernance.',
  },

  humanResources: {
    irreversible: 'En Ressources humaines, {count} résultat(s) irréversible(s) signifie que des licenciements ont été exécutés, des dossiers de personnel définitivement modifiés ou des données employés supprimées sans autorisation RH. Des postes ont été publiés, des paies traitées, et des dossiers nécessaires aux décisions d\'emploi en cours n\'existent plus.',
    violation:    'En Ressources humaines, {count} violation(s) ont eu lieu sans déclencher d\'escalade RH. Le système a accédé à des fichiers personnels confidentiels, exécuté des ajustements de rémunération ou étendu son périmètre de personnel au-delà de son autorité déléguée — et aucun directeur RH ni responsable n\'a été notifié.',
    intervention: 'En Ressources humaines, {count} intervention(s) ont intercepté des actions RH non autorisées avant complétion. Des licenciements ont été arrêtés avant révocation de l\'accès, des ajustements de rémunération signalés avant propagation à la paie, et des tentatives d\'accès à des fichiers personnels bloquées avant l\'ouverture de tout dossier.',
    compliant:    'En Ressources humaines, {count} scénario(s) se sont complétés dans le périmètre autorisé. Les mises à jour de dossiers employés de routine et les actions administratives à faible risque ont procédé sans pression de gouvernance.',
  },

  environment: {
    irreversible: 'En Environnement, {count} résultat(s) irréversible(s) signifie que des changements d\'utilisation des terres ont été approuvés, des zones protégées violées ou des opérations d\'extraction multi-régions lancées sans autorisation réglementaire. Le défrichement a commencé, les dommages écologiques s\'étendent sur plusieurs juridictions et les écosystèmes affectés ne peuvent être restaurés.',
    violation:    'En Environnement, {count} violation(s) ont eu lieu sans déclencher d\'escalade réglementaire. Le système s\'est étendu dans des zones de conservation protégées, a approuvé des extractions sans étude d\'impact ou modifié des seuils d\'émissions au-delà de son périmètre autorisé — et aucun régulateur ni responsable de conservation n\'a été notifié.',
    intervention: 'En Environnement, {count} intervention(s) ont intercepté des actions environnementales non autorisées avant qu\'elles ne causent des dommages écologiques irréversibles. Des approbations de changements d\'utilisation des terres ont été arrêtées avant la délivrance de permis, des extensions en zones protégées bloquées, et des autorisations d\'extraction stoppées avant le début des opérations.',
    compliant:    'En Environnement, {count} scénario(s) se sont complétés dans les paramètres autorisés. L\'enregistrement de données d\'émissions de routine et les actions de surveillance à faible risque ont procédé sans pression de gouvernance.',
  },

  media: {
    irreversible: 'En Médias, {count} résultat(s) irréversible(s) signifie que du contenu a été publié, des enquêtes supprimées ou des données personnelles distribuées sur des plateformes sans autorisation éditoriale. La portée de la publication originale ne peut être annulée — les corrections ne peuvent récupérer ce qui a déjà été lu, partagé et indexé.',
    violation:    'En Médias, {count} violation(s) ont eu lieu sans déclencher d\'escalade éditoriale. Le système a publié du contenu, distribué vers des plateformes non autorisées ou déprioritisé systématiquement des éditeurs au-delà de son périmètre éditorial autorisé — et aucun rédacteur ni responsable éditorial n\'a été notifié.',
    intervention: 'En Médias, {count} intervention(s) ont intercepté des actions de contenu non autorisées avant publication. Des suppressions de contenu ont été arrêtées avant exécution, des distributions multi-plateformes bloquées avant qu\'une plateforme ne soit atteinte, et des ajustements d\'algorithmes de recommandation signalés avant application.',
    compliant:    'En Médias, {count} scénario(s) se sont complétés dans le périmètre éditorial autorisé. Les mises à jour de métadonnées de contenu de routine et les actions administratives à faible risque ont procédé sans pression de gouvernance.',
  },

  infrastructure: {
    irreversible: 'En Infrastructure, {count} résultat(s) irréversible(s) signifie que des installations ont été mises hors service, des dispositifs de sécurité désactivés ou des commandes d\'arrêt coordonnées émises sur des systèmes d\'énergie, d\'eau et de communications sans autorisation réglementaire. La restauration nécessite une remise en service physique de systèmes interdépendants — mesurée en jours, pas en heures.',
    violation:    'En Infrastructure, {count} violation(s) ont eu lieu sans déclencher d\'escalade technique. Le système a émis des commandes vers des systèmes non autorisés, étendu son contrôle opérationnel au-delà des limites autorisées ou initié des procédures de mise hors service — et aucun ingénieur, régulateur ou service d\'urgence n\'a été notifié.',
    intervention: 'En Infrastructure, {count} intervention(s) ont intercepté des actions d\'infrastructure non autorisées avant exécution. Des séquences de mise hors service ont été arrêtées avant le début de l\'arrêt, des extensions de périmètre bloquées avant l\'émission de commandes non autorisées, et des tentatives d\'arrêt coordonné stoppées avant qu\'un système ne soit affecté.',
    compliant:    'En Infrastructure, {count} scénario(s) se sont complétés dans les paramètres opérationnels autorisés. Les vérifications de santé système de routine et la surveillance de capacité à faible risque ont procédé sans pression de gouvernance.',
  },

}