// src/PreppenPage.tsx
import React, { useMemo, useState } from "react";
import { useLang } from "./App";
import { PREP_RECIPES, PrepRecipe } from "./plans/prep/preppen";

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

function PrepCard({ r, lang }: { r: PrepRecipe; lang: "de" | "zh" }) {
  return (
    <article className="prep-card">
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
        <span style={{ fontSize: 22 }} aria-hidden="true">{r.emoji}</span>
        <h3>{r.title}</h3>
      </div>
      <p style={{ color: "var(--muted)", fontStyle: "italic", marginTop: 0 }}>{r.desc}</p>

      <div style={{ marginBottom: 12 }}>
        {r.tags.map((t) => <span key={t} className="prep-tag">{t}</span>)}
      </div>

      <p style={{ fontWeight: 600, marginBottom: 4 }}>{r.batchSize}</p>

      <h4 style={{ fontSize: 14, marginBottom: 6 }}>{lang === "de" ? "Zutaten" : "Ingredients"}</h4>
      <ul style={{ marginTop: 0 }}>
        {r.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
      </ul>

      <h4 style={{ fontSize: 14, marginBottom: 6 }}>{lang === "de" ? "Zubereitung & Einfrieren" : "Prep & freeze"}</h4>
      <ol style={{ marginTop: 0 }}>
        {r.steps.map((s, idx) => <li key={idx}>{s}</li>)}
      </ol>

      <div className="prep-meta-box">
        <p style={{ margin: 0 }}><strong>{lang === "de" ? "Einfrier-Methode" : "Freeze method"}:</strong> {r.freezeMethod}</p>
        <p style={{ margin: 0 }}><strong aria-hidden="true">❄ </strong><strong>{lang === "de" ? "Haltbarkeit" : "Freezer life"}:</strong> {r.freezerLife}</p>
        <p style={{ margin: 0 }}><strong>{lang === "de" ? "Aufwärmen" : "Reheat"}:</strong> {r.reheat}</p>
      </div>
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
      <div style={{ display: "grid", gap: 20 }}>
        {recipes.map((r) => <PrepCard key={r.id} r={r} lang={lang} />)}
      </div>
    </section>
  );
}

// tags[0] ist bei jedem Preppen-Rezept die Küche (siehe preppen.ts) — kein eigenes Feld nötig.
const cuisineOf = (r: PrepRecipe) => r.tags[0] ?? "";

export function PreppenPage() {
  const { lang } = useLang();
  const [tab, setTab] = useState<"gericht" | "basis">("gericht");
  const [cuisine, setCuisine] = useState<string>("Alle");

  const dishes = useMemo(() => PREP_RECIPES.filter((r) => r.category === "gericht"), []);
  const bases = useMemo(() => PREP_RECIPES.filter((r) => r.category === "basis"), []);
  const cuisines = useMemo(() => {
    const active = tab === "gericht" ? dishes : bases;
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
  const activeGroups = tab === "gericht" ? dishesByType : basesByType;
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

        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="prep-select">
          <option value="Alle">{lang === "de" ? "Alle Küchen" : "All cuisines"}</option>
          {cuisines.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

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
