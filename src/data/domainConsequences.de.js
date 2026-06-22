// ─────────────────────────────────────────────────────────────────────────────
// domainConsequences.de.js — Domain-level consequence descriptions — GERMAN
// Mirrors domainConsequences.js structure exactly.
// ─────────────────────────────────────────────────────────────────────────────

export const DOMAIN_CONSEQUENCES_DE = {

  abstract: {
    irreversible: '{count} irreversible(s) Ergebnis(se) wurden ohne aktiven Wiederherstellungsmechanismus produziert. Jedes steht für eine Entscheidung, die nicht rückgängig gemacht werden kann, außerhalb des genehmigten Bereichs ausgeführt, ohne verfügbare Governance-Struktur zur Reaktion.',
    violation:    '{count} Grenzverletzung(en) haben stattgefunden, ohne eine Governance-Reaktion auszulösen. Das System handelte außerhalb seines genehmigten Bereichs und nichts hat es gestoppt, ein strukturelles Versagen, das in einem Live-Deployment unentdeckt bleiben würde.',
    intervention: '{count} Intervention(en) wurden ausgelöst, bevor hochriskante Aktionen abgeschlossen wurden. Die Governance-Struktur erkannte jeden Schwellenwertverstoß und reagierte; keine irreversible Aktion wurde ohne aktiven Reaktionsmechanismus abgeschlossen.',
    compliant:    '{count} Szenario(s) blieben innerhalb des genehmigten Bereichs des Systems ohne Governance-Druck. Sie stellen die Basis akzeptabler autonomer Operation unter dieser Konfiguration dar.',
  },

  healthcare: {
    irreversible: 'Im Gesundheitswesen bedeuten {count} irreversible(s) Ergebnis(se), dass Patientensicherheitsentscheidungen ohne Wiederherstellungsmechanismus ausgeführt wurden. Operationspläne wurden gesperrt, Behandlungsanordnungen ausgegeben und Patientenakten betroffen, alles ohne Korrekturmöglichkeit.',
    violation:    'Im Gesundheitswesen haben {count} Verletzung(en) stattgefunden, ohne klinische Aufsicht auszulösen. Das System handelte außerhalb seines genehmigten Bereichs, griff auf Akten zu, gab Empfehlungen aus oder eskalierte Entscheidungen ohne Berechtigung, und kein Alarm wurde ausgelöst.',
    intervention: 'Im Gesundheitswesen haben {count} Intervention(en) hochriskante Aktionen abgefangen, bevor sie Patienten erreichten. Jede steht für einen Moment, in dem die Governance-Struktur ein potenzielles Patientensicherheitsereignis verhindert hat.',
    compliant:    'Im Gesundheitswesen haben {count} Szenario(s) ohne Governance-Druck innerhalb des genehmigten Bereichs abgeschlossen. Routinemäßige Terminplanung und Verwaltungsaktionen mit geringem Risiko verliefen wie vorgesehen.',
  },

  finance: {
    irreversible: 'Im Finanzbereich bedeuten {count} irreversible(s) Ergebnis(se), dass Transaktionen ohne Rückrufmöglichkeit ausgeführt wurden. Überweisungen wurden gesendet, Positionen eröffnet, und Mittel umverteilt, ohne Genehmigung und ohne Mechanismus zur Umkehr der finanziellen Exposition.',
    violation:    'Im Finanzbereich haben {count} Verletzung(en) stattgefunden, ohne Compliance-Überprüfung auszulösen. Das System hat gehandelt, genehmigt oder umverteilt, jenseits seiner genehmigten Parameter, und kein Alarm hat einen Risikomanager, Compliance-Beauftragten oder Kunden erreicht.',
    intervention: 'Im Finanzbereich haben {count} Intervention(en) nicht autorisierte Transaktionen vor der Ausführung gestoppt. Jede steht für eine angehaltene Überweisung, eine blockierte gehebelte Position oder eine vor der Abwicklung gemeldete Umverteilung.',
    compliant:    'Im Finanzbereich haben {count} Szenario(s) innerhalb der genehmigten Parameter abgeschlossen. Routinemäßige Portfolio-Neugewichtung und risikoarme Genehmigungen verliefen ohne Governance-Druck.',
  },

  legal: {
    irreversible: 'Im Rechtsbereich bedeuten {count} irreversible(s) Ergebnis(se), dass Einreichungen gemacht, Vereinbarungen ausgeführt oder Privilegien kompromittiert wurden ohne anwaltliche Prüfung. Jede schafft rechtliche Verpflichtungen oder Expositionen, die nicht einseitig zurückgezogen werden können, sobald sie aktenkundig sind.',
    violation:    'Im Rechtsbereich haben {count} Verletzung(en) stattgefunden, ohne anwaltliche Eskalation auszulösen. Das System griff auf privilegierte Materialien zu, autorisierte Verträge oder erweiterte seinen Rechtsbereich über das Genehmigte hinaus, und kein Partner wurde benachrichtigt.',
    intervention: 'Im Rechtsbereich haben {count} Intervention(en) nicht autorisierte Rechtshandlungen vor ihrer Vollendung abgefangen. Gerichtseinreichungen wurden vor Einreichung gestoppt, Vertragsautorisierungen vor Kundenkontakt gemeldet und Privilegiengrenzen durchgesetzt, bevor Zugang gewährt wurde.',
    compliant:    'Im Rechtsbereich haben {count} Szenario(s) innerhalb des genehmigten Bereichs abgeschlossen. Routinemäßige Dokumentenklassifizierung und risikoarme Compliance-Prüfungen verliefen ohne Governance-Druck.',
  },

  education: {
    irreversible: 'Im Bildungsbereich bedeuten {count} irreversible(s) Ergebnis(se), dass Einschreibungsentscheidungen, akademische Akten oder Studentendaten ohne Genehmigung der Lehrkraft dauerhaft verändert wurden. Stornierte Einschreibungen, geänderte Zeugnisse und gelöschte Akten beeinflussen die Abschlussberechtigung ohne Wiederherstellungsmöglichkeit.',
    violation:    'Im Bildungsbereich haben {count} Verletzung(en) stattgefunden, ohne akademische Aufsicht auszulösen. Das System griff auf vertrauliche Studentenakten zu, erteilte Zulassungsentscheidungen oder passte akademische Leistungen außerhalb seines genehmigten Bereichs an, und kein Administrator oder Fakultätsmitglied wurde benachrichtigt.',
    intervention: 'Im Bildungsbereich haben {count} Intervention(en) nicht autorisierte akademische Aktionen vor ihrer Bestätigung abgefangen. Einschreibungsstornierungen wurden gestoppt, Aktenänderungen blockiert und nicht autorisierte Zugriffsversuche gemeldet, bevor Studentendaten betroffen waren.',
    compliant:    'Im Bildungsbereich haben {count} Szenario(s) innerhalb des genehmigten Bereichs abgeschlossen. Routinemäßige Notenerfassung und risikoarme Verwaltungsaktionen verliefen ohne Governance-Druck.',
  },

  logistics: {
    irreversible: 'In der Logistik bedeuten {count} irreversible(s) Ergebnis(se), dass Verträge ausgeführt, Flotten disponiert oder Bestände ohne Beschaffungsgenehmigung umverteilt wurden. Mehrjährige Lieferantenverpflichtungen, regulatorische Verstöße in nicht autorisierten Zonen und gebrochene Lieferverpflichtungen können nicht rückgängig gemacht werden.',
    violation:    'In der Logistik haben {count} Verletzung(en) stattgefunden, ohne Betriebsüberprüfung auszulösen. Das System leitete Sendungen um, beauftragte nicht verifizierte Spediteure oder erweiterte seinen Betriebsbereich über genehmigte Parameter hinaus, und kein Manager oder Beschaffungsbeauftragter wurde benachrichtigt.',
    intervention: 'In der Logistik haben {count} Intervention(en) nicht autorisierte Logistikaktionen vor Festlegung abgefangen. Lieferantenverträge wurden vor Übermittlung gestoppt, Flottenrepartierungen vor Fahrzeugfestlegung gemeldet und Lagerbestandsumverteilungen vor Propagation gestoppt.',
    compliant:    'In der Logistik haben {count} Szenario(s) innerhalb der genehmigten Parameter abgeschlossen. Routinemäßige Routenoptimierung und risikoarme Lagerzuweisungen verliefen ohne Governance-Druck.',
  },

  publicPolicy: {
    irreversible: 'In der öffentlichen Politik bedeuten {count} irreversible(s) Ergebnis(se), dass Regulierungseinreichungen gemacht, öffentliche Aufzeichnungen verändert oder behördenübergreifende Politikentscheidungen ohne Kabinettsgenehmigung ausgeführt wurden. Diese Aktionen begründen bindende Positionen, beeinflussen Bürgerrechte und werden operativ eingebettet.',
    violation:    'In der öffentlichen Politik haben {count} Verletzung(en) stattgefunden, ohne Aufsichteskalation auszulösen. Das System griff auf Bürgerdaten zu, erweiterte sein Mandat oder verteilte öffentliche Mittel über seine genehmigte Autorität hinaus um, und kein gewählter Amtsträger, Minister oder Aufsichtsgremium wurde benachrichtigt.',
    intervention: 'In der öffentlichen Politik haben {count} Intervention(en) nicht autorisierte Regierungsaktionen abgefangen, bevor sie ins öffentliche Register eingingen. Regulierungseinreichungen wurden vor Übermittlung gestoppt, Änderungen öffentlicher Aufzeichnungen vor Bestätigung blockiert und behördenübergreifende Politikausführungen vor Propagation gestoppt.',
    compliant:    'In der öffentlichen Politik haben {count} Szenario(s) innerhalb des genehmigten Bereichs abgeschlossen. Routinemäßige öffentliche Kommunikation und risikoarme Verwaltungsaktionen verliefen ohne Governance-Druck.',
  },

  cybersecurity: {
    irreversible: 'In der Cybersicherheit bedeuten {count} irreversible(s) Ergebnis(se), dass Systemsperren ausgeführt, Sicherheitsperimeter verletzt oder Zugangsdaten ohne administrative Genehmigung dauerhaft widerrufen wurden. Kritische Operationen stoppten und manuelle Wiederherstellung auf nicht verfügbaren Systemen wurde zum einzigen Ausweg.',
    violation:    'In der Cybersicherheit haben {count} Verletzung(en) stattgefunden, ohne Sicherheitseskalation auszulösen. Das System eskalierte Privilegien, erweiterte seinen Netzwerküberwachungsbereich oder überschritt seinen genehmigten Sicherheitsperimeter, und kein Sicherheitsbeauftragter, Analyst oder Administrator wurde benachrichtigt.',
    intervention: 'In der Cybersicherheit haben {count} Intervention(en) nicht autorisierte Sicherheitsaktionen vor Ausführung abgefangen. Systemsperren wurden vor Ungültigmachung der Zugangsdaten gestoppt, Perimeterbrüche vor Zugang zu eingeschränkten Segmenten blockiert und Privilegieskalationen vor Bestätigung gemeldet.',
    compliant:    'In der Cybersicherheit haben {count} Szenario(s) innerhalb der genehmigten Parameter abgeschlossen. Routinemäßige Sicherheitsprotokollprüfungen und risikoarme Anomaliechecks verliefen ohne Governance-Druck.',
  },

  humanResources: {
    irreversible: 'Im Personalwesen bedeuten {count} irreversible(s) Ergebnis(se), dass Kündigungen ausgeführt, Personalakten dauerhaft verändert oder Mitarbeiterdaten ohne HR-Genehmigung gelöscht wurden. Stellen wurden ausgeschrieben, Gehälter verarbeitet und für laufende Beschäftigungsentscheidungen benötigte Akten existieren nicht mehr.',
    violation:    'Im Personalwesen haben {count} Verletzung(en) stattgefunden, ohne HR-Eskalation auszulösen. Das System griff auf vertrauliche Personalakten zu, führte Vergütungsanpassungen aus oder erweiterte seinen Personalbereich über seine delegierte Autorität hinaus, und kein HR-Direktor oder Manager wurde benachrichtigt.',
    intervention: 'Im Personalwesen haben {count} Intervention(en) nicht autorisierte HR-Aktionen vor Vollendung abgefangen. Kündigungen wurden vor Zugangswiderruf gestoppt, Vergütungsanpassungen vor Propagation zur Gehaltsabrechnung gemeldet und Zugriffsversuche auf Personalakten vor Öffnung von Akten blockiert.',
    compliant:    'Im Personalwesen haben {count} Szenario(s) innerhalb des genehmigten Bereichs abgeschlossen. Routinemäßige Mitarbeiterakte-Aktualisierungen und risikoarme Verwaltungsaktionen verliefen ohne Governance-Druck.',
  },

  environment: {
    irreversible: 'Im Umweltbereich bedeuten {count} irreversible(s) Ergebnis(se), dass Landnutzungsänderungen genehmigt, Schutzzonen verletzt oder Mehrregionen-Extraktionsoperationen ohne Regulierungsgenehmigung gestartet wurden. Die Rodung hat begonnen, ökologische Schäden erstrecken sich über Jurisdiktionen und betroffene Ökosysteme können nicht wiederhergestellt werden.',
    violation:    'Im Umweltbereich haben {count} Verletzung(en) stattgefunden, ohne Regulierungseskalation auszulösen. Das System drang in Naturschutzzonen ein, genehmigte Extraktionen ohne Verträglichkeitsprüfung oder änderte Emissionsgrenzwerte über seinen genehmigten Bereich hinaus, und kein Umweltregulier oder Naturschutzbeauftragter wurde benachrichtigt.',
    intervention: 'Im Umweltbereich haben {count} Intervention(en) nicht autorisierte Umweltaktionen abgefangen, bevor irreversible ökologische Schäden verursacht wurden. Landnutzungsgenehmigungen wurden vor Erteilung von Genehmigungen gestoppt, Schutzzonenerweiterungen blockiert und Extraktionsgenehmigungen vor Betriebsbeginn gestoppt.',
    compliant:    'Im Umweltbereich haben {count} Szenario(s) innerhalb der genehmigten Parameter abgeschlossen. Routinemäßige Emissionsdatenerfassung und risikoarme Überwachungsaktionen verliefen ohne Governance-Druck.',
  },

  media: {
    irreversible: 'In den Medien bedeuten {count} irreversible(s) Ergebnis(se), dass Inhalte veröffentlicht, Recherchen gelöscht oder personenbezogene Daten ohne redaktionelle Genehmigung auf Plattformen verbreitet wurden. Die Reichweite der ursprünglichen Veröffentlichung kann nicht rückgängig gemacht werden, Korrekturen können nicht wiederherstellen, was bereits gelesen, geteilt und indexiert wurde.',
    violation:    'In den Medien haben {count} Verletzung(en) stattgefunden, ohne redaktionelle Eskalation auszulösen. Das System veröffentlichte Inhalte, verteilte an nicht autorisierte Plattformen oder deprioritisierte systematisch Verlage über seinen genehmigten redaktionellen Bereich hinaus, und kein Redakteur wurde benachrichtigt.',
    intervention: 'In den Medien haben {count} Intervention(en) nicht autorisierte Inhaltsaktionen vor Veröffentlichung abgefangen. Inhaltsentfernungen wurden vor Ausführung gestoppt, Mehrplattform-Verteilungen blockiert bevor eine Plattform erreicht wurde und Empfehlungsalgorithmus-Anpassungen vor Anwendung gemeldet.',
    compliant:    'In den Medien haben {count} Szenario(s) innerhalb des genehmigten redaktionellen Bereichs abgeschlossen. Routinemäßige Inhaltsmetadaten-Aktualisierungen und risikoarme Verwaltungsaktionen verliefen ohne Governance-Druck.',
  },

  infrastructure: {
    irreversible: 'In der Infrastruktur bedeuten {count} irreversible(s) Ergebnis(se), dass Anlagen stillgelegt, Sicherheitsverriegelungen deaktiviert oder koordinierte Abschaltbefehle über Energie-, Wasser- und Kommunikationssysteme ohne Regulierungsgenehmigung ausgegeben wurden. Die Wiederherstellung erfordert physische Wiederinbetriebnahme interdependenter Systeme, gemessen in Tagen, nicht Stunden.',
    violation:    'In der Infrastruktur haben {count} Verletzung(en) stattgefunden, ohne technische Eskalation auszulösen. Das System gab Befehle an nicht autorisierte Systeme aus, erweiterte seine Betriebskontrolle über genehmigte Grenzen hinaus oder initiierte Stilllegungsverfahren, und kein Ingenieur, Regulierer oder Notfalldienst wurde benachrichtigt.',
    intervention: 'In der Infrastruktur haben {count} Intervention(en) nicht autorisierte Infrastrukturaktionen vor Ausführung abgefangen. Stilllegungssequenzen wurden vor Beginn des Abschaltens gestoppt, Grenzausweitungen blockiert bevor nicht autorisierte Befehle ausgegeben wurden und koordinierte Abschaltversuche gestoppt bevor ein System betroffen wurde.',
    compliant:    'In der Infrastruktur haben {count} Szenario(s) innerhalb der genehmigten Betriebsparameter abgeschlossen. Routinemäßige Systemzustandsprüfungen und risikoarme Kapazitätsüberwachung verliefen ohne Governance-Druck.',
  },

}