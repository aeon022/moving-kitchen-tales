// src/PreppenPage.tsx
import React, { useMemo, useState } from "react";
import { useLang } from "./App";
import { PREP_RECIPES, PrepRecipe, PrepCategory } from "./plans/prep/preppen";

// Kapitel-Nummerierung wie im Register (一·二·三…) statt nackter Sektions-Labels — Preppen
// bekommt so das gleiche "Buch"-Gefühl, nicht nur eine Filter-Seite.
const KANJI_NUM = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六"];
const kanjiOf = (i: number) => KANJI_NUM[i] ?? String(i + 1);
const anchorOf = (type: string) => `prep-${type.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

function groupByType(recipes: PrepRecipe[]) {
  const map = new Map<string, PrepRecipe[]>();
  for (const r of recipes) {
    if (!map.has(r.type)) map.set(r.type, []);
    map.get(r.type)!.push(r);
  }
  return map;
}

// Magazin-Stil statt Datenbank-Liste: editorielle Kicker-Zeile + kursive Headline (Cormorant
// Garamond, hier groß genug um elegant statt dünn/schwer lesbar zu wirken), Zutaten als
// Chip-Reihe statt Aufzählung, keine Icons — nur Typografie trägt die Hierarchie.
function PrepCard({ r, lang }: { r: PrepRecipe; lang: "de" | "zh" }) {
  // Kontrollierter State statt <details>/<summary> — ein natives <details> hat keinen
  // deklarativen Schließen-Button, den bräuchten wir aber für die Volle-Breite-Ansicht.
  const [open, setOpen] = useState(false);
  return (
    <article className={`prep-card${open ? " prep-card-open" : ""}`}>
      <div className="prep-card-kicker">{r.tags[0]}</div>
      <h3 className="prep-card-title">{r.title}</h3>
      <p className="prep-card-desc">{r.desc}</p>

      <div className="prep-tags-row">
        {r.tags.map((t) => <span key={t} className="prep-tag">{t}</span>)}
      </div>

      {!open ? (
        // Geschlossen: Karte bleibt im Raster, wie ein Zeitschriften-Teaser.
        <button type="button" className="prep-card-toggle" onClick={() => setOpen(true)}>
          {lang === "de" ? "Details ansehen" : "Show details"}
        </button>
      ) : (
        // Offen: Karte bricht auf volle Rasterbreite aus (siehe .prep-card-open in app.css),
        // Zutaten/Zubereitung laufen dort zweispaltig nebeneinander statt gequetscht.
        <div className="prep-card-full">
          <button type="button" className="prep-card-close" onClick={() => setOpen(false)}>
            {lang === "de" ? "Schließen ×" : "Close ×"}
          </button>
          <div className="prep-card-full-grid">
            <div>
              <div className="prep-card-batch">{r.batchSize}</div>
              <div className="prep-card-label">{lang === "de" ? "Zutaten" : "Ingredients"}</div>
              <div className="prep-ingredients">
                {r.ingredients.map((i, idx) => <span key={idx} className="prep-ingredient-chip">{i}</span>)}
              </div>
              <div className="prep-meta-box">
                <div className="prep-meta-row"><span className="prep-meta-label">{lang === "de" ? "Einfrieren" : "Freeze"}</span>{r.freezeMethod}</div>
                <div className="prep-meta-row"><span className="prep-meta-label">{lang === "de" ? "Haltbarkeit" : "Freezer life"}</span>{r.freezerLife}</div>
                <div className="prep-meta-row"><span className="prep-meta-label">{lang === "de" ? "Aufwärmen" : "Reheat"}</span>{r.reheat}</div>
              </div>
            </div>
            <div>
              <div className="prep-card-label">{lang === "de" ? "Zubereitung & Einfrieren" : "Prep & freeze"}</div>
              <ol className="prep-steps">
                {r.steps.map((s, idx) => <li key={idx}>{s}</li>)}
              </ol>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function TypeSection({ index, type, recipes, lang }: { index: number; type: string; recipes: PrepRecipe[]; lang: "de" | "zh" }) {
  return (
    <section id={anchorOf(type)} style={{ marginBottom: 28, scrollMarginTop: 24 }}>
      <h3 className="prep-type-label">
        <span className="prep-type-num" aria-hidden="true">{kanjiOf(index)}</span>
        {type}
      </h3>
      <div className="prep-grid">
        {recipes.map((r) => <PrepCard key={r.id} r={r} lang={lang} />)}
      </div>
    </section>
  );
}

// tags[0] ist bei jedem Preppen-Rezept die Küche (siehe preppen.ts) — kein eigenes Feld nötig.
const cuisineOf = (r: PrepRecipe) => r.tags[0] ?? "";

export function PreppenPage() {
  const { lang } = useLang();
  const [tab, setTab] = useState<PrepCategory>("gericht");
  const [cuisine, setCuisine] = useState<string>("Alle");

  const dishes = useMemo(() => PREP_RECIPES.filter((r) => r.category === "gericht"), []);
  const bases = useMemo(() => PREP_RECIPES.filter((r) => r.category === "basis"), []);
  // Baby-Beikost: tags[0] ist hier eine Altersangabe, keine Küche — die Küchen-Auswahl ergibt für
  // diesen Tab keinen Sinn und bleibt ausgeblendet, die "type"-Gruppierung (Altersstufe) reicht.
  const babies = useMemo(() => PREP_RECIPES.filter((r) => r.category === "baby"), []);
  const cuisines = useMemo(() => {
    const active = tab === "gericht" ? dishes : tab === "basis" ? bases : [];
    return Array.from(new Set(active.map(cuisineOf))).sort();
  }, [tab, dishes, bases]);
  const dishesByType = useMemo(
    () => groupByType(cuisine === "Alle" ? dishes : dishes.filter((r) => cuisineOf(r) === cuisine)),
    [dishes, cuisine]
  );
  const basesByType = useMemo(
    () => groupByType(cuisine === "Alle" ? bases : bases.filter((r) => cuisineOf(r) === cuisine)),
    [bases, cuisine]
  );
  const babiesByType = useMemo(() => groupByType(babies), [babies]);
  const activeGroups = tab === "gericht" ? dishesByType : tab === "basis" ? basesByType : babiesByType;
  const activeGroupsArr = Array.from(activeGroups.entries());

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">备餐 · Vorrat</div>
        <h1 style={{ marginBottom: 4 }}>{lang === "de" ? "Preppen" : "Meal Prep"}</h1>
        <p style={{ color: "var(--muted)" }}>
          {lang === "de"
            ? "Einmal kochen, mehrmals essen: Vorrats- und Gefrier-Rezepte, unabhängig von der Wochenplanung."
            : "Cook once, eat many times: freezer/prep recipes independent of the weekly plans."}
        </p>
      </header>

      <div className="prep-tabs">
        <button
          type="button"
          className="prep-tab"
          onClick={() => { setTab("gericht"); setCuisine("Alle"); }}
          aria-pressed={tab === "gericht"}
        >
          {lang === "de" ? `Volle Gerichte (${dishes.length})` : `Full dishes (${dishes.length})`}
        </button>
        <button
          type="button"
          className="prep-tab"
          onClick={() => { setTab("basis"); setCuisine("Alle"); }}
          aria-pressed={tab === "basis"}
        >
          {lang === "de" ? `Basis & Saucen (${bases.length})` : `Bases & sauces (${bases.length})`}
        </button>
        <button
          type="button"
          className="prep-tab"
          onClick={() => { setTab("baby"); setCuisine("Alle"); }}
          aria-pressed={tab === "baby"}
        >
          {lang === "de" ? `Baby-Beikost (${babies.length})` : `Baby food (${babies.length})`}
        </button>

        {tab !== "baby" && (
          <select value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="prep-select">
            <option value="Alle">{lang === "de" ? "Alle Küchen" : "All cuisines"}</option>
            {cuisines.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        )}
      </div>

      {tab === "baby" && (
        <div className="prep-notice">
          <p>
            {lang === "de"
              ? "Beikost ist erst ab ca. 6 Monaten nötig — Muttermilch/Pre-Nahrung deckt den Bedarf davor allein. Kein Ersatz für die Beratung durch Kinderarzt/Hebamme."
              : "Solid food isn't needed before ~6 months — breast milk/formula alone covers everything before that. Not a substitute for advice from a pediatrician/midwife."}
          </p>
        </div>
      )}

      {/* Mini-Register: Kapitelübersicht mit Sprunglinks, bevor die eigentlichen Karten kommen —
          gleiche Idee wie das 一·二·三-Register im Hauptmenü, nur für Preppen-Kapitel. */}
      {activeGroupsArr.length > 1 && (
        <nav className="prep-index" aria-label={lang === "de" ? "Kapitel" : "Chapters"}>
          {activeGroupsArr.map(([type], i) => (
            <a
              key={type}
              href={`#${anchorOf(type)}`}
              className="prep-index-row"
              onClick={(e) => {
                // Plain #anchor hrefs collide with HashRouter's own routing (it would try to
                // navigate to "/prep-..." as a new route instead of scrolling) — same reason
                // the search-result jump-to-recipe links need a manual scrollIntoView.
                e.preventDefault();
                document.getElementById(anchorOf(type))?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className="prep-index-num" aria-hidden="true">{kanjiOf(i)}</span>
              <span>{type}</span>
              <span className="prep-index-count">{activeGroups.get(type)!.length}</span>
            </a>
          ))}
        </nav>
      )}

      {activeGroupsArr.map(([type, recipes], i) => (
        <TypeSection key={type} index={i} type={type} recipes={recipes} lang={lang} />
      ))}
    </div>
  );
}
