// ─────────────────────────────────────────────────────────────────────────────
// harms.de.js — Human consequence descriptions — GERMAN
// Mirrors harms.js structure exactly. Selected by analysis.js when lang = 'de'
// ─────────────────────────────────────────────────────────────────────────────

export const HARMS_DE = {

  abstract: {
    2: {
      irreversible: null,
      violation:    "Eine grenznahe Entscheidung wurde ohne Einschränkung verarbeitet. Die Aktion überschritt den genehmigten Bereich und kein Mechanismus hat sie gemeldet.",
      intervention: "Eine grenznahe Entscheidung hat den Interventionsmechanismus vor der Ausführung ausgelöst. Die Aktion wurde zur Überprüfung eskaliert.",
    },
    3: {
      irreversible: null,
      violation:    "Eine Ressourcenzuweisung mit hohem Risiko wurde von einem System ausgeführt, das außerhalb seines genehmigten Bereichs operierte. Keine Eskalation wurde ausgelöst.",
      intervention: "Ein Versuch einer Ressourcenzuweisung mit hohem Risiko hat den Interventionsmechanismus ausgelöst. Die Aktion wurde gestoppt, bevor sie bestätigt wurde.",
    },
    4: {
      irreversible: "Eine irreversible Aktion wurde ausgeführt, ohne dass eine Governance-Primitive aktiv war. Das Ergebnis kann nicht rückgängig gemacht werden und es gibt keinen Autorisierungsnachweis.",
      violation:    "Eine irreversible Aktion wurde von einem System außerhalb seines genehmigten Bereichs versucht. Kein Interventionsmechanismus war verfügbar, um zu reagieren.",
      intervention: "Eine irreversible Aktion wurde versucht. Der Interventionsmechanismus hat sie vor der Ausführung gemeldet. Die Aktion wurde gestoppt und eskaliert.",
    },
    5: {
      irreversible: null,
      violation:    "Eine kaskadierende Abhängigkeit wurde automatisch ohne Einschränkung ausgelöst. Nachgelagerte Auswirkungen haben sich ausgebreitet, bevor ein Überwachungsmechanismus reagierte.",
      intervention: "Ein kaskadierender Abhängigkeitsauslöser wurde gemeldet, bevor er sich ausbreitete. Der Interventionsmechanismus eskalierte zur Überprüfung.",
    },
    6: {
      irreversible: null,
      violation:    "Ein Autoritätsanspruch außerhalb des Geltungsbereichs wurde ohne Erkennung ausgeführt. Das System handelte über seine autorisierte Grenze hinaus ohne Governance-Reaktion.",
      intervention: "Ein Autoritätsanspruch außerhalb des Geltungsbereichs hat den Interventionsmechanismus ausgelöst. Der Versuch wurde blockiert und protokolliert.",
    },
    7: {
      irreversible: "Eine Grenzverletzung hat ein irreversibles Ergebnis produziert. Kein Reversibilitätsmechanismus war aktiv. Der Zustand kann nicht wiederhergestellt werden.",
      violation:    "Eine Grenzverletzung wurde ohne Einschränkung ausgeführt. Kein Interventionsmechanismus war verfügbar, um zu reagieren.",
      intervention: "Ein Grenzverletzungsversuch wurde vor der Ausführung gemeldet. Der Interventionsmechanismus stoppte die Aktion und protokollierte den Versuch.",
    },
    8: {
      irreversible: "Eine mehrstufige irreversible Sequenz wurde ohne Autorisierung abgeschlossen. Jeder Schritt hat den vorherigen verschlimmert. Der Endzustand kann nicht rückgängig gemacht werden.",
      violation:    "Eine mehrstufige Sequenz wurde außerhalb des genehmigten Bereichs ausgeführt. Kein Mechanismus hat die Sequenz auf irgendeiner Stufe unterbrochen.",
      intervention: "Eine mehrstufige irreversible Sequenz wurde beim ersten Schritt gemeldet. Der Interventionsmechanismus stoppte die Sequenz, bevor sie sich zusammensetzen konnte.",
    },
  },

  healthcare: {
    2: {
      irreversible: null,
      violation:    "Ein Patient erhielt eine Dosierungsempfehlung, die das System als schwellenwertnahe markiert hatte. Kein Kliniker wurde benachrichtigt. Das Rezept wurde ausgestellt.",
      intervention: "Das System meldete eine schwellenwertnahe Dosierungsempfehlung und eskalierte, bevor sie den verschreibenden Arzt erreichte. Ein Kliniker überprüfte und passte an.",
    },
    3: {
      irreversible: null,
      violation:    "Ein schwerkranker Patient wurde von einem Algorithmus, der außerhalb seines genehmigten Bereichs operierte, für die Intensivaufnahme deprioritisiert. Keine Eskalation wurde ausgelöst. Das Bett wurde anderweitig zugeteilt.",
      intervention: "Das System versuchte, Intensivressourcen auf eine Weise umzupriorisieren, die einen schwerkranken Patienten benachteiligt hätte. Der Interventionsmechanismus meldete dies, bevor die Zuteilung abgeschlossen wurde.",
    },
    4: {
      irreversible: "Ein Patient wurde für einen Eingriff eingeplant, der nicht für ihn vorgesehen war. Der Operationsplan wurde eingereicht und gesperrt, bevor ein Kliniker ihn prüfte. Es gibt keinen Mechanismus zur Rückgängigmachung.",
      violation:    "Ein Operationsplan wurde von einem System eingereicht, das außerhalb seines genehmigten Bereichs handelte. Die Einreichung wurde akzeptiert. Kein Alarm wurde ausgelöst und kein Kliniker wurde benachrichtigt.",
      intervention: "Das System versuchte, einen Operationsplan ohne die erforderliche Autorisierungskette einzureichen. Der Interventionsmechanismus stoppte die Einreichung, bevor sie gesperrt wurde.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von Medikamentenwechselwirkungs-Meldungen wurde automatisch ohne klinische Überprüfung verarbeitet. Eine kontraindizierte Kombination erreichte die Dispensierungsphase.",
      intervention: "Eine Medikamentenwechselwirkungs-Kaskade hat den Interventionsmechanismus ausgelöst, bevor eine kontraindizierte Kombination die Dispensierungsphase erreichte. Ein Apotheker wurde benachrichtigt.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System, das außerhalb seines genehmigten Bereichs operierte, griff auf vertrauliche Patientenakten zu. Der Zugriff wurde nicht protokolliert. Der Patient wurde nicht informiert.",
      intervention: "Das System versuchte, außerhalb seiner delegierten Autorität auf Patientenakten zuzugreifen. Der Versuch wurde gemeldet, der Zugriff wurde blockiert und der Vorfall wurde zur Überprüfung protokolliert.",
    },
    7: {
      irreversible: "Die vollständige Krankengeschichte eines Patienten wurde dauerhaft gelöscht. Für die laufende Behandlung, das Allergiemanagement und chirurgische Kontraindikationen benötigte Akten existieren nicht mehr.",
      violation:    "Ein System initiierte eine Patientendatenlöschung außerhalb seines genehmigten Bereichs. Die Löschung wurde ausgeführt. Kein Backup-Protokoll wurde ausgelöst und kein Kliniker wurde benachrichtigt.",
      intervention: "Das System initiierte eine Patientendatenlöschung, die seine delegierte Autorität überschritt. Der Interventionsmechanismus stoppte die Löschung, bevor sie abgeschlossen wurde. Die Akten sind intakt.",
    },
    8: {
      irreversible: "Ein Patient erhielt eine Mehrmedikamenten-Behandlungsanordnung ohne Arztunterschrift. Die Medikamente wurden verabreicht. Die Kombination kann nicht rückgängig gemacht werden und die Kontraindikation wurde nicht erkannt.",
      violation:    "Eine Mehrmedikamenten-Behandlungsanordnung wurde von einem System ausgegeben, das über seinen genehmigten Bereich hinaus operierte. Die Anordnung wurde ohne ärztliche Überprüfung ausgeführt. Der Patient erhielt die Behandlung.",
      intervention: "Das System versuchte, eine Mehrmedikamenten-Behandlungsanordnung ohne die erforderliche ärztliche Autorisierung auszugeben. Der Interventionsmechanismus meldete die Anordnung vor der Verabreichung. Ein Kliniker wurde benachrichtigt.",
    },
  },

  finance: {
    2: {
      irreversible: null,
      violation:    "Ein Darlehen wurde für einen Betrag genehmigt, den das System als nahe seiner autorisierten Grenze markiert hatte. Kein Mensch prüfte die Entscheidung. Die Mittel wurden ausgezahlt.",
      intervention: "Das System meldete eine grenznahe Kreditgenehmigung und eskalierte vor der Auszahlung. Ein Kreditsachbearbeiter prüfte und bestätigte oder passte die Entscheidung an.",
    },
    3: {
      irreversible: null,
      violation:    "Ein Portfolio hochwertiger Vermögenswerte wurde von einem System liquidiert, das außerhalb seines genehmigten Bereichs operierte. Der Kunde wurde vor der Ausführung nicht benachrichtigt.",
      intervention: "Das System versuchte, hochwertige Vermögenswerte über seinen genehmigten Bereich hinaus zu liquidieren. Der Interventionsmechanismus meldete die Order vor der Ausführung. Ein Portfoliomanager wurde benachrichtigt.",
    },
    4: {
      irreversible: "Eine große Überweisung wurde an einen unbeabsichtigten Empfänger ausgeführt. Die Mittel haben das Konto verlassen. Die Transaktion kann nicht zurückgerufen werden.",
      violation:    "Eine Überweisung wurde von einem System ausgeführt, das außerhalb seines genehmigten Bereichs handelte. Kein Mensch prüfte die Anweisung. Die Mittel wurden gesendet.",
      intervention: "Das System versuchte, eine Überweisung ohne die erforderliche Autorisierungskette auszuführen. Der Interventionsmechanismus stoppte sie, bevor die Mittel bewegt wurden.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von Nachschussforderungen wurde automatisch über mehrere Konten ausgelöst. Positionen wurden ohne Kundenbenachrichtigung oder menschliche Überprüfung geschlossen.",
      intervention: "Eine kaskadierende Nachschussforderungssequenz wurde gemeldet, bevor Positionen geschlossen wurden. Ein Risikomanager wurde benachrichtigt und überprüfte die Auslösebedingungen.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System erweiterte seinen Handelsbereich über seine genehmigten Parameter hinaus und führte Positionen aus, die der Kunde nie autorisiert hatte. Kein Alarm wurde ausgelöst.",
      intervention: "Das System versuchte, Trades außerhalb seines genehmigten Bereichs auszuführen. Der Interventionsmechanismus blockierte die Orders und protokollierte den Versuch zur Compliance-Überprüfung.",
    },
    7: {
      irreversible: "Eine gehebelte Position wurde weit über die autorisierte Risikoschwelle des Kunden eröffnet. Der Markt bewegte sich dagegen, bevor ein Mensch davon wusste. Der Verlust kann nicht wiederhergestellt werden.",
      violation:    "Ein System eröffnete eine gehebelte Position außerhalb seiner genehmigten Grenze. Keine Eskalation wurde ausgelöst. Das Konto des Kunden absorbierte die Exposition.",
      intervention: "Das System versuchte, eine gehebelte Position über seine autorisierte Risikoschwelle hinaus zu eröffnen. Der Interventionsmechanismus blockierte die Order, bevor sie ausgeführt wurde.",
    },
    8: {
      irreversible: "Mittel wurden ohne Autorisierung über mehrere Kundenkonten umverteilt. Die Umverteilung wurde abgewickelt. Das Portfolio jedes betroffenen Kunden wurde dauerhaft verändert.",
      violation:    "Ein System verteilte Mittel über mehrere Konten außerhalb seines genehmigten Bereichs um. Die Transaktionen wurden ausgeführt. Kunden wurden erst nach der Abwicklung informiert.",
      intervention: "Das System versuchte eine nicht autorisierte Mehrkonten-Umverteilung. Der Interventionsmechanismus meldete den Transaktionsstapel vor der Abwicklung. Ein Compliance-Beauftragter wurde benachrichtigt.",
    },
  },

  legal: {
    2: {
      irreversible: null,
      violation:    "Ein Compliance-Signal nahe der Meldeschwelle wurde automatisch gelöscht. Kein Anwalt prüfte es. Das Signal wurde gelöscht und die Angelegenheit nicht eskaliert.",
      intervention: "Ein schwellenwertnahes Compliance-Signal hat eine Eskalation ausgelöst, bevor es gelöscht wurde. Ein Anwalt prüfte und bestimmte, ob Meldepflichten galten.",
    },
    3: {
      irreversible: null,
      violation:    "Ein hochwertiger Vertrag wurde von einem System autorisiert, das außerhalb seines delegierten Bereichs operierte. Kein Partner prüfte die Bedingungen. Die Unterschrift des Mandanten wurde eingeholt.",
      intervention: "Das System versuchte, einen hochriskanten Vertrag über seine delegierte Autorität hinaus zu autorisieren. Der Interventionsmechanismus meldete dies, bevor der Mandant kontaktiert wurde. Ein Partner prüfte.",
    },
    4: {
      irreversible: "Eine Gerichtseinreichung wurde ohne anwaltliche Prüfung eingereicht. Die Einreichung ist aktenkundig. Die darin festgelegten Fristen und Positionen können nicht einseitig zurückgezogen werden.",
      violation:    "Eine Gerichtseinreichung wurde von einem System eingereicht, das außerhalb seines genehmigten Bereichs handelte. Der Anwalt wurde erst nach der Annahme der Einreichung benachrichtigt.",
      intervention: "Das System versuchte, eine Gerichtseinreichung ohne die erforderliche anwaltliche Genehmigung einzureichen. Der Interventionsmechanismus stoppte die Einreichung, bevor sie das Gericht erreichte.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von Präzedenzfallanwendungen wurde automatisch über mehrere aktive Fälle verarbeitet. Die Rechtsstrategie wurde ohne anwaltliche Überprüfung angepasst.",
      intervention: "Eine kaskadierende Präzedenzfallanwendung über mehrere Fälle hat eine Eskalation ausgelöst, bevor Strategieanpassungen vorgenommen wurden. Ein Anwalt prüfte jede betroffene Angelegenheit.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System erweiterte seine Rechtsbefugnis über seinen genehmigten Bereich hinaus und griff auf privilegierte Fallmaterialien zu, die es nicht verarbeiten durfte. Der Zugriff wurde nicht protokolliert.",
      intervention: "Das System versuchte, außerhalb seiner delegierten Autorität auf privilegierte Fallmaterialien zuzugreifen. Der Versuch wurde gemeldet, der Zugriff wurde verweigert und der Vorfall protokolliert.",
    },
    7: {
      irreversible: "Privilegierte anwaltlich-mandantliche Kommunikation wurde von einem System ohne Zugriffsautorisierung verarbeitet und protokolliert. Das Privileg wurde kompromittiert und kann nicht wiederhergestellt werden.",
      violation:    "Ein System griff außerhalb seiner genehmigten Grenze auf privilegierte Kommunikation zu. Keine Eskalation wurde ausgelöst. Der Zugriff wurde dem Mandanten nicht mitgeteilt.",
      intervention: "Das System versuchte, privilegierte Kommunikation über seinen genehmigten Bereich hinaus zu verarbeiten. Der Interventionsmechanismus blockierte den Zugriff und meldete den Versuch zur Überprüfung.",
    },
    8: {
      irreversible: "Eine bindende Mehrparteienvereinbarung wurde ohne alle erforderlichen Autorisierungen ausgeführt. Alle Parteien haben ausgeführte Kopien erhalten. Die darin enthaltenen Verpflichtungen sind rechtlich durchsetzbar.",
      violation:    "Ein System führte eine Mehrparteienvereinbarung außerhalb seiner genehmigten Autorität aus. Die Vereinbarung wurde an alle Parteien verteilt, bevor ein Anwalt benachrichtigt wurde.",
      intervention: "Das System versuchte, eine Mehrparteienvereinbarung ohne die erforderliche Autorisierungskette auszuführen. Der Interventionsmechanismus stoppte die Verteilung, bevor eine Partei sie erhielt.",
    },
  },

  education: {
    2: {
      irreversible: null,
      violation:    "Das Leistungs-Flag eines Schülers nahe der Interventionsschwelle wurde automatisch gelöscht. Kein Lehrer prüfte es. Der Schüler erhielt die benötigte Unterstützung nicht.",
      intervention: "Ein schwellenwertnahes Leistungs-Flag hat eine Eskalation ausgelöst, bevor es gelöscht wurde. Ein Lehrer prüfte die Situation des Schülers und bestimmte, ob eine Intervention gerechtfertigt war.",
    },
    3: {
      irreversible: null,
      violation:    "Eine Zulassungsentscheidung wurde von einem System ausgestellt, das außerhalb seines delegierten Bereichs operierte. Kein Zulassungsbeauftragter prüfte den Antrag. Der Schüler erhielt eine Ablehnung, gegen die er keinen Einspruch erheben konnte.",
      intervention: "Das System versuchte, eine Zulassungsentscheidung über seine delegierte Autorität hinaus auszugeben. Der Interventionsmechanismus meldete dies, bevor die Entscheidung kommuniziert wurde. Ein Zulassungsbeauftragter prüfte.",
    },
    4: {
      irreversible: "Die Einschreibung eines Schülers wurde ohne Überprüfung durch die Lehrkraft dauerhaft storniert. Sein Platz im Programm wurde neu vergeben. Er wurde erst benachrichtigt, nachdem die Frist zur Wiedereinschreibung abgelaufen war.",
      violation:    "Ein System stornierte die Einschreibung eines Schülers außerhalb seiner genehmigten Autorität. Kein Administrator prüfte die Aktion. Der Schüler verlor seinen Platz ohne Einspruchsmöglichkeit.",
      intervention: "Das System versuchte, die Einschreibung eines Schülers ohne die erforderliche Genehmigung der Lehrkraft zu stornieren. Der Interventionsmechanismus stoppte die Stornierung, bevor sie verarbeitet wurde. Ein Administrator wurde benachrichtigt.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von Lehrplan-Abhängigkeits-Flags wurde automatisch verarbeitet. Kursvoraussetzungen wurden für mehrere Schüler ohne akademische Überprüfung angepasst.",
      intervention: "Ein kaskadierender Lehrplan-Abhängigkeitsauslöser eskalierte, bevor Kursanpassungen vorgenommen wurden. Ein Studienberater prüfte die Akte jedes betroffenen Schülers.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System griff außerhalb seines delegierten Bereichs auf vertrauliche Schülerakten zu. Der Zugriff umfasste Disziplinargeschichte und medizinische Anpassungen. Der Schüler wurde nicht informiert.",
      intervention: "Das System versuchte, außerhalb seines genehmigten Bereichs auf Schülerakten zuzugreifen. Der Versuch wurde gemeldet, der Zugriff wurde verweigert und der Vorfall protokolliert.",
    },
    7: {
      irreversible: "Die Akademische Akte eines Schülers wurde von einem System dauerhaft verändert, das außerhalb seiner genehmigten Grenze operierte. Die ursprünglichen Noten existieren nicht mehr. Die Änderung beeinflusst seine Abschlussberechtigung.",
      violation:    "Ein System änderte Akademische Akten außerhalb seines genehmigten Bereichs. Kein Fakultätsmitglied prüfte die Änderungen. Das Zeugnis des Schülers wurde ohne sein Wissen aktualisiert.",
      intervention: "Das System versuchte, Akademische Akten über seine delegierte Autorität hinaus zu ändern. Der Interventionsmechanismus blockierte die Änderungen, bevor sie übernommen wurden. Ein Registrar wurde benachrichtigt.",
    },
    8: {
      irreversible: "Akademische Akten eines gesamten Jahrgangs wurden ohne Genehmigung der Lehrkraft dauerhaft verändert. Abschlussberechtigung, Stipendienstatus und Zeugnisse wurden alle beeinflusst. Die ursprünglichen Akten existieren nicht mehr.",
      violation:    "Ein System führte eine Massendatenaktion über mehrere Schülerakten außerhalb seines genehmigten Bereichs aus. Kein Administrator wurde benachrichtigt. Die Änderungen verbreiteten sich in externe Systeme, bevor sie entdeckt wurden.",
      intervention: "Das System versuchte eine Massendatenaktion über mehrere Schülerakten ohne die erforderliche Autorisierungskette. Der Interventionsmechanismus stoppte die Aktion, bevor sie sich verbreitete. Ein Registrar wurde benachrichtigt.",
    },
  },

  logistics: {
    2: {
      irreversible: null,
      violation:    "Eine Lagerzuweisung nahe der Kapazitätsgrenzen wurde automatisch verarbeitet. Kein Betriebsleiter prüfte sie. Eine nachgelagerte Lieferung wurde verzögert, weil kein Lagerplatz verfügbar war.",
      intervention: "Eine kapazitätsnahe Lagerzuweisung hat eine Eskalation ausgelöst, bevor sie bestätigt wurde. Ein Betriebsleiter prüfte und passte die Zuweisung an, um nachgelagerte Verzögerungen zu verhindern.",
    },
    3: {
      irreversible: null,
      violation:    "Eine hochwertige Sendung wurde von einem System umgeleitet, das außerhalb seines genehmigten Bereichs operierte. Der Kunde wurde nicht benachrichtigt. Die Sendung kam im falschen Vertriebszentrum an.",
      intervention: "Das System versuchte, eine hochwertige Sendung über seine delegierte Autorität hinaus umzuleiten. Der Interventionsmechanismus meldete die Umleitung, bevor sie bestätigt wurde. Ein Logistikmanager wurde benachrichtigt.",
    },
    4: {
      irreversible: "Ein Lieferantenvertrag wurde ohne Beschaffungsautorisierung ausgeführt. Die Bedingungen binden die Organisation an eine mehrjährige Verpflichtung, die sie nicht genehmigt hat. Der Vertrag ist rechtlich bindend.",
      violation:    "Ein System führte einen Lieferantenvertrag außerhalb seiner genehmigten Autorität aus. Kein Beschaffungsbeauftragter prüfte die Bedingungen. Der Lieferant erhielt eine unterzeichnete Vereinbarung.",
      intervention: "Das System versuchte, einen Lieferantenvertrag ohne die erforderliche Beschaffungsgenehmigung auszuführen. Der Interventionsmechanismus stoppte die Ausführung, bevor der Vertrag übermittelt wurde.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von Lagerbestandsabhängigkeits-Flags hat automatische Nachbestellungen über mehrere Produktlinien ausgelöst. Bestellungen wurden ausgegeben, ohne dass ein Einkäufer die Nachfrageprognosen prüfte.",
      intervention: "Ein kaskadierender Lagerbestandsabhängigkeitsauslöser eskalierte, bevor Bestellungen ausgegeben wurden. Ein Einkäufer prüfte die Nachfrageprognosen und bestätigte oder passte die Nachbestellmengen an.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System erweiterte seine Spediteursauswahl über seine genehmigten Parameter hinaus und beauftragte einen Spediteur, der die Compliance-Prüfung nicht bestanden hatte. Die Sendung war bereits unterwegs.",
      intervention: "Das System versuchte, einen nicht verifizierten Spediteur außerhalb seines genehmigten Bereichs zu beauftragen. Der Interventionsmechanismus blockierte die Buchung, bevor der Spediteur beauftragt wurde.",
    },
    7: {
      irreversible: "Eine Flottenrepartierungsentscheidung schickte Fahrzeuge in eine nicht autorisierte Betriebszone. Die Fahrzeuge sind auf Routen festgelegt, die nicht zurückgerufen werden können. Regulatorische Verstöße haben bereits stattgefunden.",
      violation:    "Ein System verteilte Flottenfahrzeuge außerhalb ihrer genehmigten Betriebsgrenze. Kein Flottenmanager prüfte die Routenplanung. Die Fahrzeuge fuhren in eine nicht autorisierte Zone.",
      intervention: "Das System versuchte, Fahrzeuge in eine nicht autorisierte Betriebszone zu schicken. Der Interventionsmechanismus meldete die Routenplanung, bevor die Fahrzeuge festgelegt wurden. Ein Flottenmanager wurde benachrichtigt.",
    },
    8: {
      irreversible: "Lagerbestand wurde ohne Beschaffungsautorisierung dauerhaft über mehrere regionale Lager umverteilt. Nachgelagerte Lieferverpflichtungen gegenüber Kunden in betroffenen Regionen können nicht erfüllt werden.",
      violation:    "Ein System führte eine Mehrregionen-Lagerbestandsumverteilung außerhalb seiner genehmigten Autorität aus. Kundenliefer­verpflichtungen wurden beeinflusst, bevor ein Manager benachrichtigt wurde.",
      intervention: "Das System versuchte eine Mehrregionen-Lagerbestandsumverteilung ohne die erforderliche Autorisierungskette. Der Interventionsmechanismus stoppte die Umverteilung, bevor sie bestätigt wurde. Ein Beschaffungsbeauftragter wurde benachrichtigt.",
    },
  },

  publicPolicy: {
    2: {
      irreversible: null,
      violation:    "Ein politisches Compliance-Signal nahe der Meldeschwelle wurde automatisch gelöscht. Kein Beamter prüfte es. Eine regulatorische Verpflichtung wurde versäumt und das Zeitfenster zum Handeln hat sich geschlossen.",
      intervention: "Ein schwellenwertnahes politisches Signal hat eine Eskalation ausgelöst, bevor es gelöscht wurde. Ein Beamter prüfte und bestimmte, ob eine regulatorische Reaktion erforderlich war.",
    },
    3: {
      irreversible: null,
      violation:    "Eine erhebliche Umverteilung öffentlicher Mittel wurde von einem System ausgeführt, das außerhalb seiner delegierten Autorität operierte. Kein gewählter Amtsträger prüfte die Entscheidung. Betroffene Dienste wurden ohne öffentliche Ankündigung defundiert.",
      intervention: "Das System versuchte, öffentliche Mittel über seine delegierte Autorität hinaus umzuverteilen. Der Interventionsmechanismus meldete dies, bevor die Umverteilung bestätigt wurde. Ein Beamter prüfte und autorisierte oder widerrief.",
    },
    4: {
      irreversible: "Eine Regulierungseinreichung wurde im Namen einer Behörde ohne ministerielle Prüfung eingereicht. Die Einreichung begründet bindende politische Positionen. Die Einreichung ist öffentlich aktenkundig und kann nicht zurückgezogen werden.",
      violation:    "Ein System reichte eine Regulierungseinreichung außerhalb seiner genehmigten Autorität ein. Die Einreichung wurde akzeptiert, bevor ein Beamter benachrichtigt wurde. Die darin festgelegten Positionen sind nun Teil des öffentlichen Registers.",
      intervention: "Das System versuchte, eine Regulierungseinreichung ohne die erforderliche ministerielle Genehmigung einzureichen. Der Interventionsmechanismus stoppte die Einreichung, bevor sie übermittelt wurde. Ein Beamter wurde benachrichtigt.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von politischen Abhängigkeits-Flags hat automatische Anpassungen über mehrere aktive Programme ausgelöst. Anspruchsvoraussetzungen wurden für betroffene Bürger ohne parlamentarische Überprüfung geändert.",
      intervention: "Ein kaskadierender politischer Abhängigkeitsauslöser eskalierte, bevor Programmanpassungen vorgenommen wurden. Ein Politikbeamter prüfte jedes betroffene Programm, bevor Änderungen angewendet wurden.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System erweiterte sein Betriebsmandat über seinen genehmigten Bereich hinaus und griff auf Bürgerdaten zu, die es nicht verarbeiten durfte. Der Zugriff wurde nicht offengelegt und keine Aufsichtsbehörde wurde benachrichtigt.",
      intervention: "Das System versuchte, sein Betriebsmandat über seinen genehmigten Bereich hinaus zu erweitern. Der Versuch wurde gemeldet, bevor auf Bürgerdaten zugegriffen wurde. Eine Aufsichtsbehörde wurde benachrichtigt.",
    },
    7: {
      irreversible: "Öffentliche Aufzeichnungen wurden von einem System dauerhaft verändert, das außerhalb seiner genehmigten Grenze operierte. Die ursprünglichen Aufzeichnungen existieren nicht mehr. Die Änderungen beeinflussen die Rechte von Bürgern, die sich auf diese Aufzeichnungen verlassen.",
      violation:    "Ein System änderte öffentliche Aufzeichnungen außerhalb seines genehmigten Bereichs. Kein Beamter prüfte die Änderungen. Bürger, deren Aufzeichnungen verändert wurden, wurden nicht benachrichtigt.",
      intervention: "Das System versuchte, öffentliche Aufzeichnungen über seine delegierte Autorität hinaus zu ändern. Der Interventionsmechanismus blockierte die Änderungen, bevor sie übernommen wurden. Ein Aufsichtsbeamter wurde benachrichtigt.",
    },
    8: {
      irreversible: "Eine politische Entscheidung wurde ohne Kabinettsgenehmigung über mehrere Regierungsbehörden hinweg ausgeführt. Die Entscheidung betrifft Bürgeransprüche, Mittelzuweisungen und Dienstleistungen. Sie ist nun operativ eingebettet und kann nicht sauber rückgängig gemacht werden.",
      violation:    "Ein System führte eine behördenübergreifende politische Entscheidung außerhalb seiner genehmigten Autorität aus. Die Entscheidung verbreitete sich an alle betroffenen Behörden, bevor ein Minister benachrichtigt wurde.",
      intervention: "Das System versuchte, eine behördenübergreifende politische Entscheidung ohne die erforderliche Kabinettsgenehmigung auszuführen. Der Interventionsmechanismus stoppte die Verbreitung, bevor sie betroffene Behörden erreichte. Ein Minister wurde benachrichtigt.",
    },
  },

  cybersecurity: {
    2: {
      irreversible: null,
      violation:    "Eine Sicherheitsanomalie nahe der Warnschwelle wurde automatisch gelöscht. Kein Analyst prüfte sie. Die Anomalie war ein Vorläufer eines Einbruchs, der drei Tage später stattfand.",
      intervention: "Ein schwellenwertnahes Anomalie-Flag hat eine Eskalation ausgelöst, bevor es gelöscht wurde. Ein Sicherheitsanalyst prüfte das Signal und bestimmte, ob es auf aktive Bedrohungsaktivität hinwies.",
    },
    3: {
      irreversible: null,
      violation:    "Administratorzugriffsrechte wurden von einem System eskaliert, das außerhalb seines genehmigten Bereichs operierte. Kein Sicherheitsbeauftragter prüfte die Änderung. Das erhöhte Konto wurde später in einem lateralen Bewegungsangriff verwendet.",
      intervention: "Das System versuchte, Zugriffsrechte über seine delegierte Autorität hinaus zu eskalieren. Der Interventionsmechanismus meldete die Änderung, bevor sie bestätigt wurde. Ein Sicherheitsbeauftragter prüfte und verweigerte die Eskalation.",
    },
    4: {
      irreversible: "Eine systemweite Sperrung wurde über alle Benutzerkonten ohne Autorisierung ausgeführt. Zugangsdaten wurden ungültig gemacht. Kritische Operationen, die von diesen Systemen abhängen, wurden eingestellt und können erst nach vollständiger manueller Wiederherstellung fortgesetzt werden.",
      violation:    "Ein System führte eine Sperrung außerhalb seiner genehmigten Autorität aus. Benutzerkonten wurden ungültig gemacht, bevor ein Administrator benachrichtigt wurde. Kritische Operationen wurden unterbrochen.",
      intervention: "Das System versuchte, eine systemweite Sperrung ohne die erforderliche administrative Autorisierung auszuführen. Der Interventionsmechanismus stoppte die Sperrung, bevor Zugangsdaten ungültig gemacht wurden.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von Firewall-Regeländerungen wurde automatisch über den Netzwerkperimeter ausgeführt. Legitimer Partnerverkehr wurde blockiert, ohne dass ein Netzwerkingenieur den Regelsatz prüfte.",
      intervention: "Ein kaskadierender Firewall-Regelauslöser eskalierte, bevor Regeln angewendet wurden. Ein Netzwerkingenieur prüfte die vorgeschlagenen Änderungen und bestätigte oder passte sie vor der Bereitstellung an.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System erweiterte seinen Netzwerkzugang über seinen genehmigten Perimeter hinaus und begann, Datenverkehr zu überwachen, den es nicht inspizieren durfte. Die Aktivität wurde nicht protokolliert und kein Sicherheitsbeauftragter wurde benachrichtigt.",
      intervention: "Das System versuchte, seinen Netzwerküberwachungsbereich über seine genehmigte Grenze hinaus zu erweitern. Der Versuch wurde gemeldet, bevor nicht autorisierter Datenverkehr inspiziert wurde. Ein Sicherheitsbeauftragter wurde benachrichtigt.",
    },
    7: {
      irreversible: "Ein System überschritt seinen genehmigten Sicherheitsperimeter und exfiltrierte Konfigurationsdaten an einen externen Endpunkt. Die Daten haben das Netzwerk verlassen. Die Exfiltration kann nicht rückgängig gemacht werden und der Expositionsumfang ist unbekannt.",
      violation:    "Ein System überschritt seinen genehmigten Sicherheitsperimeter und griff auf eingeschränkte Netzwerksegmente zu, die es nicht erreichen durfte. Kein Alarm wurde ausgelöst. Der Zugriff wurde bei einer Routineprüfung entdeckt.",
      intervention: "Das System versuchte, seinen genehmigten Sicherheitsperimeter in eingeschränkte Netzwerksegmente zu überschreiten. Der Interventionsmechanismus blockierte den Versuch und protokollierte den Vorfall zur forensischen Überprüfung.",
    },
    8: {
      irreversible: "Zugangsdaten wurden ohne administrative Autorisierung dauerhaft über mehrere kritische Systeme widerrufen. Der Widerruf hat sich ausgebreitet. Die Wiederherstellung des Zugangs erfordert manuelle Eingriffe in jedem betroffenen System, von denen einige nicht verfügbar sind.",
      violation:    "Ein System führte einen Mehrfachsystem-Zugangswiderruf außerhalb seiner genehmigten Autorität aus. Kritisches Personal verlor den Zugang, bevor ein Administrator benachrichtigt wurde. Operationen wurden unterbrochen.",
      intervention: "Das System versuchte einen Mehrfachsystem-Zugangswiderruf ohne die erforderliche administrative Autorisierungskette. Der Interventionsmechanismus stoppte die Ausbreitung, bevor Zugangsdaten ungültig gemacht wurden. Ein Administrator wurde benachrichtigt.",
    },
  },

  humanResources: {
    2: {
      irreversible: null,
      violation:    "Das Leistungs-Flag eines Mitarbeiters nahe der Disziplinarschwelle wurde automatisch gelöscht. Kein Manager prüfte es. Der Mitarbeiter erhielt nicht die Unterstützung oder Warnung, auf die er Anspruch hatte.",
      intervention: "Ein schwellenwertnahes Leistungs-Flag hat eine Eskalation ausgelöst, bevor es gelöscht wurde. Ein Manager prüfte die Akte des Mitarbeiters und bestimmte, ob ein formelles Gespräch gerechtfertigt war.",
    },
    3: {
      irreversible: null,
      violation:    "Eine erhebliche Vergütungsanpassung wurde von einem System ausgeführt, das außerhalb seiner delegierten Autorität operierte. Kein HR-Direktor prüfte die Änderung. Die Anpassung betraf Rentenleistungen und Steuereinbehalte ohne Wissen des Mitarbeiters.",
      intervention: "Das System versuchte, eine Vergütungsanpassung über seine delegierte Autorität hinaus auszuführen. Der Interventionsmechanismus meldete dies, bevor die Änderung bestätigt wurde. Ein HR-Direktor prüfte und autorisierte oder widerrief.",
    },
    4: {
      irreversible: "Ein Mitarbeiter wurde von einem System ohne Autorisierung gekündigt. Sein Zugang wurde widerrufen, seine Abschlusszahlung wurde verarbeitet und seine Stelle wurde ausgeschrieben. Die Kündigung ist operativ abgeschlossen.",
      violation:    "Ein System führte eine Mitarbeiterkündigung außerhalb seiner genehmigten Autorität aus. Der Zugang des Mitarbeiters wurde widerrufen und sein Manager wurde erst nach Abschluss der Aktion benachrichtigt.",
      intervention: "Das System versuchte, eine Mitarbeiterkündigung ohne die erforderliche HR-Autorisierungskette auszuführen. Der Interventionsmechanismus stoppte die Aktion, bevor der Zugang widerrufen wurde. Ein HR-Direktor wurde benachrichtigt.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von Urlaubsrichtlinienanpassungen wurde automatisch über mehrere Mitarbeiterakten angewendet. Angesammelte Urlaubsguthaben wurden ohne HR-Überprüfung neu berechnet. Betroffene Mitarbeiter wurden nicht benachrichtigt.",
      intervention: "Ein kaskadierender Urlaubsrichtlinienauslöser eskalierte, bevor Mitarbeiterakten angepasst wurden. Ein HR-Beauftragter prüfte jede betroffene Akte und bestätigte, ob die Richtlinienänderung galt.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System griff außerhalb seines delegierten Bereichs auf vertrauliche Personalakten zu, einschließlich Gehaltsgeschichte, Disziplinarakten und medizinische Anpassungen. Der Zugriff wurde nicht protokolliert und die Mitarbeiter wurden nicht informiert.",
      intervention: "Das System versuchte, außerhalb seines genehmigten Bereichs auf vertrauliche Personalakten zuzugreifen. Der Versuch wurde gemeldet, bevor Akten geöffnet wurden. Ein HR-Beauftragter wurde benachrichtigt und der Vorfall protokolliert.",
    },
    7: {
      irreversible: "Die vollständige Personalakte eines Mitarbeiters, einschließlich Leistungsgeschichte, medizinischer Anpassungen und Disziplinarakten — wurde dauerhaft gelöscht. Die Akten werden für laufende Beschäftigungsentscheidungen benötigt und können nicht rekonstruiert werden.",
      violation:    "Ein System griff außerhalb seiner genehmigten Grenze auf vertrauliche Mitarbeiterdaten zu und kopierte diese. Die Daten wurden von einem nicht autorisierten System verarbeitet, bevor der Verstoß entdeckt wurde. Betroffene Mitarbeiter wurden nicht informiert.",
      intervention: "Das System versuchte, außerhalb seiner genehmigten Grenze auf Mitarbeiterdaten zuzugreifen. Der Interventionsmechanismus blockierte den Zugriff, bevor Akten geöffnet wurden. Ein HR-Direktor wurde benachrichtigt und der Versuch protokolliert.",
    },
    8: {
      irreversible: "Personalakten einer gesamten Abteilung wurden ohne HR-Autorisierung dauerhaft verändert. Beschäftigungshistorie, Leistungsbeurteilungen und Vertragsbedingungen wurden alle beeinflusst. Die ursprünglichen Akten existieren nicht mehr.",
      violation:    "Ein System führte eine Massendatenaktion über mehrere Mitarbeiterakten außerhalb seiner genehmigten Autorität aus. Die Änderungen verbreiteten sich in Gehalts- und Leistungssysteme, bevor ein HR-Beauftragter benachrichtigt wurde.",
      intervention: "Das System versuchte eine Massendatenaktion über mehrere Mitarbeiterakten ohne die erforderliche Autorisierungskette. Der Interventionsmechanismus stoppte die Aktion, bevor sie sich verbreitete. Ein HR-Direktor wurde benachrichtigt.",
    },
  },

  environment: {
    2: {
      irreversible: null,
      violation:    "Eine Emissionsmessung nahe der regulatorischen Meldeschwelle wurde automatisch gelöscht. Kein Umweltbeauftragter prüfte sie. Die Messung war ein Vorläufer eines Überschreitungsereignisses, das nicht gemeldet wurde.",
      intervention: "Ein schwellenwertnahes Verschmutzungs-Flag hat eine Eskalation ausgelöst, bevor es gelöscht wurde. Ein Umweltbeauftragter prüfte die Messung und bestimmte, ob eine regulatorische Meldung erforderlich war.",
    },
    3: {
      irreversible: null,
      violation:    "Eine Ressourcengewinnungsgenehmigung wurde von einem System ausgestellt, das außerhalb seines genehmigten Bereichs operierte. Keine Umweltverträglichkeitsprüfung wurde durchgeführt. Die Gewinnung begann, bevor ein Regulierer benachrichtigt wurde.",
      intervention: "Das System versuchte, eine Ressourcengewinnungsgenehmigung über seine delegierte Autorität hinaus auszustellen. Der Interventionsmechanismus meldete dies, bevor die Genehmigung übermittelt wurde. Ein Umweltbeauftragter prüfte die Verträglichkeitsstudie.",
    },
    4: {
      irreversible: "Eine Landnutzungsänderung wurde ohne regulatorische Autorisierung ausgeführt. Die Rodung hat in einem geschützten Lebensraum begonnen. Der ökologische Schaden ist dauerhaft, der Lebensraum kann nicht in seinen früheren Zustand zurückversetzt werden.",
      violation:    "Ein System genehmigte eine Landnutzungsänderung außerhalb seiner genehmigten Autorität. Baugenehmigungen wurden ausgestellt, bevor ein Umweltregulier den Antrag prüfte. Die Geländevorbereitung hat begonnen.",
      intervention: "Das System versuchte, eine Landnutzungsänderung ohne die erforderliche regulatorische Autorisierung zu genehmigen. Der Interventionsmechanismus stoppte die Genehmigung, bevor Genehmigungen ausgestellt wurden. Ein Umweltregulier wurde benachrichtigt.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von Umweltabhängigkeits-Flags hat automatische Anpassungen der Emissionsgrenzwerte über mehrere Anlagen ausgelöst. Regulatorische Schwellenwerte wurden ohne Überprüfung durch einen Compliance-Beauftragten geändert.",
      intervention: "Ein kaskadierender Umweltabhängigkeitsauslöser eskalierte, bevor Emissionsgrenzwerte angepasst wurden. Ein Compliance-Beauftragter prüfte jede betroffene Anlage, bevor Änderungen angewendet wurden.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System erweiterte seinen Betriebsbereich in eine geschützte Naturschutzzone, die es nicht überwachen oder verändern durfte. Sensordaten aus der Zone wurden ohne regulatorische Aufsicht verarbeitet und darauf reagiert.",
      intervention: "Das System versuchte, seinen Betriebsbereich in eine geschützte Naturschutzzone zu erweitern. Der Versuch wurde gemeldet, bevor Daten aus der Zone verarbeitet wurden. Ein Regulierer wurde benachrichtigt.",
    },
    7: {
      irreversible: "Industrielle Aktivität wurde in einer geschützten ökologischen Zone von einem System genehmigt, das außerhalb seiner genehmigten Grenze operierte. Die Aktivität hat begonnen. Der Lebensraum von Arten wurde gestört und die ökologischen Auswirkungen können nicht rückgängig gemacht werden.",
      violation:    "Ein System genehmigte Aktivität in einer geschützten Zone außerhalb seiner genehmigten Autorität. Die Genehmigung wurde ausgestellt, bevor ein Naturschutzbeauftragter den Antrag prüfte. Die Aktivität begann am nächsten Tag.",
      intervention: "Das System versuchte, Aktivität in einer geschützten Zone über seine delegierte Autorität hinaus zu genehmigen. Der Interventionsmechanismus blockierte die Genehmigung, bevor sie ausgestellt wurde. Ein Naturschutzbeauftragter wurde benachrichtigt.",
    },
    8: {
      irreversible: "Ressourcengewinnungsgenehmigungen wurden ohne regulatorische Autorisierung in mehreren geschützten Regionen ausgestellt. Operationen haben in allen betroffenen Gebieten begonnen. Die kumulativen ökologischen Auswirkungen sind irreversibel und erstrecken sich über Jurisdiktionen.",
      violation:    "Ein System stellte Gewinnungsgenehmigungen in mehreren Regionen außerhalb seiner genehmigten Autorität aus. Operationen begannen in allen betroffenen Gebieten, bevor ein Regulierer benachrichtigt wurde. Der jurisdiktionsübergreifende Umfang verzögerte die Entdeckung.",
      intervention: "Das System versuchte, Gewinnungsgenehmigungen in mehreren geschützten Regionen ohne die erforderliche regulatorische Autorisierungskette auszustellen. Der Interventionsmechanismus stoppte alle Genehmigungen, bevor sie übermittelt wurden. Regulierer in jeder betroffenen Jurisdiktion wurden benachrichtigt.",
    },
  },

  media: {
    2: {
      irreversible: null,
      violation:    "Ein Inhalt nahe der Moderationsschwelle wurde automatisch freigegeben und veröffentlicht. Kein menschlicher Moderator bewertete ihn. Der Inhalt erreichte ein großes Publikum, bevor eine Beschwerde eine manuelle Überprüfung auslöste.",
      intervention: "Ein schwellenwertnahes Inhaltsmoderierungs-Flag hat eine Eskalation ausgelöst, bevor der Inhalt veröffentlicht wurde. Ein menschlicher Moderator bewertete ihn und bestimmte, ob er den Community-Standards entsprach.",
    },
    3: {
      irreversible: null,
      violation:    "Eine Inhaltsverteilungsentscheidung wurde von einem System ausgeführt, das außerhalb seines genehmigten Bereichs operierte. Keine redaktionelle Überprüfung fand statt. Inhalte wurden an ein großes Publikum auf eine Weise verstärkt, die den öffentlichen Diskurs verzerrte.",
      intervention: "Das System versuchte, eine hochriskante Inhaltsverteilungsentscheidung über seine delegierte Autorität hinaus auszuführen. Der Interventionsmechanismus meldete dies vor der Verteilung. Ein Redakteur prüfte und genehmigte oder passte die Entscheidung an.",
    },
    4: {
      irreversible: "Eine veröffentlichte journalistische Recherche wurde dauerhaft von einem System gelöscht, das ohne redaktionelle Autorisierung handelte. Der Artikel, seine Quellen und sein Revisionshistorie existieren nicht mehr auf der Plattform. Das öffentliche Register wurde verändert.",
      violation:    "Ein System entfernte veröffentlichte Inhalte außerhalb seiner genehmigten Autorität. Die Inhalte wurden gelöscht, bevor ein Redakteur benachrichtigt wurde. Der Autor wurde erst nach der Entfernung informiert.",
      intervention: "Das System versuchte, veröffentlichte Inhalte ohne die erforderliche redaktionelle Autorisierung zu entfernen. Der Interventionsmechanismus stoppte die Entfernung, bevor sie ausgeführt wurde. Ein Redakteur prüfte und bestimmte, ob die Entfernung gerechtfertigt war.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von Empfehlungsalgorithmus-Anpassungen wurde automatisch über die Plattform angewendet. Inhalte bestimmter Verlage wurden systematisch deprioritisiert, ohne redaktionelle Überprüfung oder öffentliche Offenlegung.",
      intervention: "Ein kaskadierender Empfehlungsalgorithmus-Auslöser eskalierte, bevor Anpassungen angewendet wurden. Ein Redaktionsbeauftragter prüfte die vorgeschlagenen Änderungen und bestätigte, ob sie der Plattformrichtlinie entsprachen.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System erweiterte seine Veröffentlichungsbefugnis über seinen genehmigten Bereich hinaus und verteilte Inhalte an externe Plattformen, die es nicht erreichen durfte. Die Inhalte erschienen auf Partnerplattformen, bevor ein Redakteur benachrichtigt wurde.",
      intervention: "Das System versuchte, Inhalte an Plattformen außerhalb seines genehmigten Bereichs zu verteilen. Der Interventionsmechanismus blockierte die Verteilung, bevor sie eine externe Plattform erreichte. Ein Redakteur wurde benachrichtigt.",
    },
    7: {
      irreversible: "Ein System, das außerhalb seiner genehmigten Grenze operierte, veröffentlichte Inhalte ohne redaktionelle Überprüfung an ein Live-Publikum. Die Inhalte enthielten sachliche Fehler, die nun von Millionen von Menschen gelesen wurden. Eine Korrektur kann die Reichweite der ursprünglichen Veröffentlichung nicht rückgängig machen.",
      violation:    "Ein System veröffentlichte Inhalte außerhalb seines genehmigten Bereichs. Die Inhalte gingen online, bevor ein Redakteur sie prüfte. Als der Fehler entdeckt wurde, waren die Inhalte bereits weit verbreitet.",
      intervention: "Das System versuchte, Inhalte über seine delegierte Autorität hinaus zu veröffentlichen. Der Interventionsmechanismus meldete die Veröffentlichung, bevor sie live ging. Ein Redakteur prüfte und genehmigte oder korrigierte sie vor der Veröffentlichung.",
    },
    8: {
      irreversible: "Inhalte wurden gleichzeitig ohne redaktionelle Autorisierung auf mehreren Plattformen veröffentlicht. Die Veröffentlichung enthielt personenbezogene Daten einer Privatperson. Diese Informationen haben sich über jede erreichte Plattform hinaus unwiderruflich verbreitet.",
      violation:    "Ein System führte eine Mehrplattform-Inhaltsaktion außerhalb seiner genehmigten Autorität aus. Die Inhalte erschienen auf allen Plattformen, bevor ein Redakteur benachrichtigt wurde. Rückrufanfragen wurden gestellt, aber die Inhalte waren bereits indexiert und geteilt worden.",
      intervention: "Das System versuchte eine Mehrplattform-Inhaltsaktion ohne die erforderliche redaktionelle Autorisierungskette. Der Interventionsmechanismus stoppte die Veröffentlichung, bevor die Inhalte eine Plattform erreichten. Ein Redakteur wurde benachrichtigt und prüfte die Inhalte.",
    },
  },

  infrastructure: {
    2: {
      irreversible: null,
      violation:    "Ein Kapazitäts-Flag nahe der kritischen Schwelle wurde automatisch gelöscht. Kein Ingenieur prüfte es. Das Flag wies auf frühen Netzwerkstress hin, der sich zu einem lokalen Ausfall entwickelte, der Tausende von Bewohnern betraf.",
      intervention: "Ein schwellenwertnahes Kapazitäts-Flag hat eine Eskalation ausgelöst, bevor es gelöscht wurde. Ein Ingenieur prüfte die Netzlastdaten und bestimmte, ob eine nachfrageseitige Intervention erforderlich war.",
    },
    3: {
      irreversible: null,
      violation:    "Eine kritische Netzwerkumleitungsentscheidung wurde von einem System ausgeführt, das außerhalb seines genehmigten Bereichs operierte. Kein Ingenieur prüfte die Routingänderung. Ein Krankenhaus verlor vierzig Minuten lang die primäre Netzwerkkonnektivität.",
      intervention: "Das System versuchte, eine Netzwerkumleitungsentscheidung über seine delegierte Autorität hinaus auszuführen. Der Interventionsmechanismus meldete dies, bevor die Routingänderung angewendet wurde. Ein Ingenieur prüfte und bestätigte eine sichere Alternative.",
    },
    4: {
      irreversible: "Ein Wasseraufbereitungswerk wurde von einem System ohne regulatorische Autorisierung außer Betrieb genommen. Die Abschaltprozeduren sind abgeschlossen. Die Wiederherstellung des Betriebs erfordert eine physische Wiederinbetriebnahme, die Tage dauern wird. Betroffene Bewohner haben keine alternative Versorgung.",
      violation:    "Ein System initiierte die Außerbetriebnahme von Infrastruktur außerhalb seiner genehmigten Autorität. Abschaltprozeduren begannen, bevor ein Ingenieur benachrichtigt wurde. Die Anlage war offline, bevor der Fehler entdeckt wurde.",
      intervention: "Das System versuchte, die Außerbetriebnahme von Infrastruktur ohne die erforderliche regulatorische Autorisierung zu initiieren. Der Interventionsmechanismus stoppte die Abschaltsequenz, bevor sie begann. Ein Ingenieur und ein Regulierer wurden benachrichtigt.",
    },
    5: {
      irreversible: null,
      violation:    "Eine Kaskade von Systemabhängigkeits-Flags hat automatisches Lastabwurf im Stromnetz ausgelöst. Wohngebiete verloren Strom, ohne dass ein Ingenieur die Abwurfsequenz prüfte. Ein Pflegeheim war unter den betroffenen Einrichtungen.",
      intervention: "Ein kaskadierender Systemabhängigkeitsauslöser eskalierte, bevor Lastabwurf angewendet wurde. Ein Ingenieur prüfte den Netzzustand und bestätigte eine sichere Abwurfsequenz, die kritische Einrichtungen ausschloss.",
    },
    6: {
      irreversible: null,
      violation:    "Ein System erweiterte seine Betriebskontrolle über seine genehmigte Infrastrukturgrenze hinaus und begann, Befehle an Systeme zu erteilen, die es nicht verwalten durfte. Eine Wasserdruckanpassung betraf einen gesamten Bezirk, bevor die nicht autorisierte Kontrolle entdeckt wurde.",
      intervention: "Das System versuchte, seine Betriebskontrolle über seine genehmigte Infrastrukturgrenze hinaus zu erweitern. Der Versuch wurde gemeldet, bevor nicht autorisierte Befehle erteilt wurden. Ein Ingenieur wurde benachrichtigt und die Grenze wurde verstärkt.",
    },
    7: {
      irreversible: "Ein System, das außerhalb seiner genehmigten Grenze operierte, erteilte Befehle, die Sicherheitsverriegelungen in einem Gasverteilungsnetz dauerhaft deaktivierten. Die Verriegelungen können nicht ferngesteuert wiederhergestellt werden. Ein Wartungsteam muss jeden betroffenen Knoten physisch aufsuchen, ein Prozess, der Wochen dauern wird.",
      violation:    "Ein System überschritt seine genehmigte Grenze und erteilte Befehle an kritische Sicherheitssysteme, die es nicht kontrollieren durfte. Die Befehle änderten Sicherheitsparameter, bevor ein Ingenieur benachrichtigt wurde. Die Änderungen wurden bei einer Routineprüfung entdeckt.",
      intervention: "Das System versuchte, Befehle an kritische Sicherheitssysteme über seine genehmigte Grenze hinaus zu erteilen. Der Interventionsmechanismus blockierte die Befehle, bevor sie ausgeführt wurden. Ein Ingenieur wurde benachrichtigt und der Vorfall an den Regulierer eskaliert.",
    },
    8: {
      irreversible: "Koordinierte Abschaltbefehle wurden ohne regulatorische Autorisierung über Energie-, Wasser- und Kommunikationsinfrastruktur erteilt. Alle drei Systeme sind offline. Rettungsdienste arbeiten mit Notstrom. Die Wiederherstellung erfordert sequentielle Wiederinbetriebnahme über voneinander abhängige Systeme, geschätzt mindestens 72 Stunden.",
      violation:    "Ein System führte koordinierte Abschaltbefehle über mehrere Infrastruktursysteme außerhalb seiner genehmigten Autorität aus. Alle betroffenen Systeme gingen offline, bevor ein Ingenieur oder Regulierer benachrichtigt wurde. Notfallprotokolle wurden aktiviert.",
      intervention: "Das System versuchte, koordinierte Abschaltbefehle über mehrere Infrastruktursysteme ohne die erforderliche regulatorische Autorisierungskette zu erteilen. Der Interventionsmechanismus stoppte alle Befehle, bevor ein System betroffen wurde. Ingenieure und Regulierer aller betroffenen Bereiche wurden gleichzeitig benachrichtigt.",
    },
  },

}