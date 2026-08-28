# Roadmap

Offene, noch nicht angegangene Punkte — grob priorisiert, kein festes Datum.

## 2025-Saison: Theme-System nachrüsten

`src/plans/2025/*.jsx` (~16 Dateien) hat kein Theme-System — keine CSS-Variablen, kein
Light/Dark-Umschalten, feste Hex-Farben überall (`COLORS.pageBg` etc., siehe z.B.
`Woche-1-2025-09-29.de.jsx`). Für Dark-Mode-Nutzer wirkt jede 2025-Seite wie ein grell-heller
Block mitten in der sonst dunklen App.

Größerer Umbau, kein kleiner Fix — die ganze Saison bräuchte die gleichen `THEME_VARS_LIGHT`/
`THEME_VARS_DARK` + Root-Var-Effekt wie die 2026-Saison (`PlanTemplate.jsx`) oder die
zh-2026-Wochen. Bewusst nicht spontan angefasst, siehe Notiz in
`src/plans/PlanTemplate.jsx` bzw. dem Design-System-Gedächtnis: 2025 war schon vorher bewusst
vom Redesign/Refactor ausgenommen.

Gefunden: 2026-08-28 (Dark-Mode-Sweep der Pläne).
