# Vorrat-Generator und Rezeptsammlung

**Ziel:** Zutat und Menge eingeben → Aufteilung, Rezepte (de/zh), Einfrieren, Eintrag in den Gefrierschrank.
Dazu alle Rezepte filterbar nach Hauptzutat, Herkunft und Art.

**Ansätze:** feste, geprüfte Rezepte im Repo (gewählt: offline, kostenlos, vorab prüfbar) · KI zur Laufzeit
(verworfen: Dienst, Schlüssel, ungeprüft).

**Teile:** `src/plans/vorrat/` (Daten) · `src/utils/vorrat.ts` (Mengen) · `src/VorratPlanerPage.tsx` ·
`src/utils/classify.ts` · Ausbau `src/RecipeDatabasePage.tsx`.

**Nicht dabei:** freie Zutaten ohne Rezept, Online-Abgleich.
