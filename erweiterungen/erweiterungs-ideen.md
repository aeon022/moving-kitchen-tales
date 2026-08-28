# Erweiterungs-Ideen für Moving Kitchen Tales

Dieses Dokument enthält die bestätigten Ideen zur Erweiterung des Projekts "Moving Kitchen Tales". Die Ideen bauen auf der bestehenden Architektur (React, TypeScript, Vite) auf und berücksichtigen die Gesundheits-Leitplanken.

## 1. Pinwände (Merklisten als Pinnwand-Bereich) ✅ IMPLEMENTIERT
- **Beschreibung**: Mehrere Merklisten als Pinnwand-Bereich implementieren. Listen können benannt werden (z.B. "Lieblingsrezepte", "Gesunde Snacks").
- **Herausforderung**: Wie umsetzen ohne Benutzerverwaltung? Verwende localStorage für lokale Speicherung der Listen und Pins. Jede Liste ist eine Sammlung von Rezept-IDs oder Plan-Referenzen.
- **Umsetzung**: Erweitere useBookmarks.ts um Listen-Unterstützung; füge UI-Komponenten für Pinnwand-Ansicht hinzu (z.B. in PlanBrowser.tsx).
- **Nutzen**: Benutzer können Rezepte/Pläne gruppieren und schnell zugreifen, ohne Account.

## 2. Einkaufslisten-Integration ✅ TEILWEISE IMPLEMENTIERT (im Template)
- **Beschreibung**: Synchronisiere generierte Einkaufslisten mit externen Apps.
- **Warum keine Google/Apple/Todoist-API**: Die Seite läuft rein statisch über GitHub Pages (kein Backend, keine Secrets) und soll für beliebig viele Besucher funktionieren — OAuth-Flows (Google Tasks, iCloud) brauchen einen Server und Client-IDs, die man nicht in einer öffentlichen Static-Site verstecken kann.
- **Umsetzung (implementiert)**: `buildShoppingListText`, `shareOrCopyText`, `downloadTextFile` in `utils/exporters.js` — nutzt nur Web-Standards (Web Share API, Clipboard API, Blob-Download). Funktioniert für jeden Besucher ohne Login/Backend: Handy → "Teilen" öffnet das native Sheet (WhatsApp, Notizen, Erinnerungen, ...); Desktop → landet in der Zwischenablage. Bisher nur in `PlanTemplate.jsx` verdrahtet (Referenz-Template), Rollout auf alle live existierenden Wochen-Dateien folgt mit Punkt "Code-Duplikation" unten.
- **Persönliche Bridge zu taskctl/notectl (missionctl-Suite)**: Direkte Live-Integration ist von einer öffentlichen Static-Site aus nicht möglich (taskctl läuft nur lokal, keine HTTP-API). Der "Teilen/Kopieren"-Button liefert aber schon den Text, den man sich selbst z. B. mit `pbpaste` lokal abholen und in `taskctl create_task` einspeisen kann — kein Auto-Sync, aber ein Copy-Paste-Bridge ohne zusätzlichen Code.

## 3. Rezept-Suche und Filter
- **Beschreibung**: Suche nach Rezepten/Zutaten (z.B. "salzarm", "vegetarisch") und Filter für Ernährungspräferenzen (Diabetes, Schwangerschaft).
- **Umsetzung**: Baue eine Suchleiste in PlanBrowser.tsx auf; indexiere Rezepte aus allen Plänen (nutze vorhandene Datenstruktur); füge Filter-Buttons hinzu.
- **Nutzen**: Schneller Zugriff auf passende Rezepte, besonders für spezielle Diäten.

## 4. Community- und Sharing-Funktionen
- **Beschreibung**: Teilen von Plänen (z.B. via Links oder Social Media); Bewertungen und Kommentare für Rezepte.
- **Umsetzung**: Integriere eine Backend-API (z.B. Firebase für einfache User-Accounts und Sharing); füge Kommentar-Felder und Share-Buttons hinzu.
- **Nutzen**: Community-Building, Inspiration für neue Rezepte und Feedback.

## 5. Mobile-Optimierung und PWA
- **Beschreibung**: Mache die App als Progressive Web App (PWA) installierbar; optimiere für Mobile (Touch-Gesten für Navigation, responsive Design).
- **Umsetzung**: Aktualisiere vite.config.ts für PWA-Support (Service Worker, Manifest); passe UI für kleine Bildschirme an (z.B. in App.tsx und styles/).
- **Nutzen**: Bessere Zugänglichkeit unterwegs, z.B. beim Einkaufen oder Kochen.

## 6. Code-Duplikation eliminieren ⏳ GEPLANT (noch nicht umgesetzt)
- **Beschreibung**: Jede Wochendatei (`src/plans/*/Woche-N-...jsx`) ist ~1150 Zeilen, aber nur der `DATA`-Block + ein paar Meta-Strings sind pro Woche einzigartig. Der Rest (Theme, `MealCard`, `WeekOverview`, `RiceCookerSection`, `aggregateList`, `CANON`-Zutatenliste, Styles, `ThemeSwitch`) ist über 40+ Dateien fast 1:1 kopiert.
- **Umsetzung**: `PlanTemplate.jsx` als echten gemeinsamen Component nutzen (`<PlanTemplate data={DATA} meta={meta} .../>`), den jede Wochendatei importiert statt den Code zu duplizieren. Bringt neue Features (z. B. den Einkaufslisten-Export oben) automatisch auf alle Wochen, statt sie 40× einzeln nachzuziehen.
- **Nebeneffekt**: behebt auch den `ImageBanner`-Bug (hartkodierter `weekFolder`-Default, der beim Copy-Paste jeder Woche manuell mitgezogen werden muss).
- **Status**: bewusst zurückgestellt, bis die 10 nachgezogenen Wochen (27–36) fertig sind, um keine Schreibkonflikte mit der parallel laufenden Generierung zu bekommen.

## 7. Aufräumen ✅ IMPLEMENTIERT
- Toter Code entfernt: `src/plans/registry.ts` und `src/PlanBrowser.tsx` waren nirgends importiert (App.tsx lädt Pläne komplett selbst über `import.meta.glob`).
- Datei-Typo entfernt: `Woche-2-2015-10-06.de.jsx` (Jahr-Verschreiber, Karteileiche neben der korrekten `.zh.jsx`-Version).

## 8. Lücken-Erkennung ✅ IMPLEMENTIERT
- **Beschreibung**: `pickCurrent()` zeigt bei fehlendem neuen Plan stillschweigend den letzten bekannten Plan als "aktuell" an — genau das Problem, das die 9-Wochen-Lücke (26→36) unbemerkt gemacht hat.
- **Umsetzung**: `StalePlanBanner` in `App.tsx`, zeigt auf der Startseite eine Warnung, sobald die Woche des neuesten Plans seit >0 Tagen vorbei ist.

## Nächste Schritte
- Priorisiere Implementierung: Duplikations-Refactor (Punkt 6) als nächstes, dann Suche/Filter (teils schon in Sidebar vorhanden), PWA, Community.
- Branch: Erstelle eine neue Git-Branch für diese Erweiterungen.
- Validierung: Teste gegen Gesundheits-Leitplanken und bestehende Funktionen.