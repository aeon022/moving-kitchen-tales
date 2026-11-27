// src/PreppenPage.tsx
import React, { useMemo, useState } from "react";
import { useLang } from "./App";
import { PREP_RECIPES, PrepRecipe, PrepCategory } from "./plans/prep/preppen";
import { localizedRecipes } from "./plans/prep/localized";
import { riceAlternative } from "./utils/riceAlternative";
import { Link } from "react-router-dom";

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
  // Nicht bei Beikost: für Babys wird nichts kohlenhydratreduziert.
  // Aus dem deutschen Original berechnet.
  const source = PREP_RECIPES.find((x) => x.id === r.id)!;
  const riceAlt = r.category === "baby" ? null : riceAlternative(source.ingredients, source.title, lang);
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
          {lang === "de" ? "Details ansehen" : "查看详情"}
        </button>
      ) : (
        // Offen: Karte bricht auf volle Rasterbreite aus (siehe .prep-card-open in app.css),
        // Zutaten/Zubereitung laufen dort zweispaltig nebeneinander statt gequetscht.
        <div className="prep-card-full">
          <button type="button" className="prep-card-close" onClick={() => setOpen(false)}>
            {lang === "de" ? "Schließen ×" : "收起 ×"}
          </button>
          <div className="prep-card-full-grid">
            <div>
              <div className="prep-card-batch">{r.batchSize}</div>
              <div className="prep-card-label">{lang === "de" ? "Zutaten" : "食材"}</div>
              <div className="prep-ingredients">
                {r.ingredients.map((i, idx) => <span key={idx} className="prep-ingredient-chip">{i}</span>)}
              </div>
              {riceAlt && <p className="rice-alt"><strong>{lang === "de" ? "Reis-Alternative" : "米饭替代"}:</strong> {riceAlt}</p>}
              <div className="prep-meta-box">
                <div className="prep-meta-row"><span className="prep-meta-label">{lang === "de" ? "Einfrieren" : "冷冻"}</span>{r.freezeMethod}</div>
                <div className="prep-meta-row"><span className="prep-meta-label">{lang === "de" ? "Haltbarkeit" : "保存期限"}</span>{r.freezerLife}</div>
                <div className="prep-meta-row"><span className="prep-meta-label">{lang === "de" ? "Aufwärmen" : "加热"}</span>{r.reheat}</div>
              </div>
            </div>
            <div>
              <div className="prep-card-label">{lang === "de" ? "Zubereitung & Einfrieren" : "制作和冷冻"}</div>
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
  // Beim Sprachwechsel heißen die Küchen anders, also Filter zurücksetzen.
  React.useEffect(() => setCuisine("Alle"), [lang]);

  const all = useMemo(() => localizedRecipes(lang), [lang]);
  const dishes = useMemo(() => all.filter((r) => r.category === "gericht"), [all]);
  const bases = useMemo(() => all.filter((r) => r.category === "basis"), [all]);
  const konserven = useMemo(() => all.filter((r) => r.category === "konserve"), [all]);
  // Baby-Beikost: tags[0] ist hier eine Altersangabe, keine Küche — die Küchen-Auswahl ergibt für
  // diesen Tab keinen Sinn und bleibt ausgeblendet, die "type"-Gruppierung (Altersstufe) reicht.
  const babies = useMemo(() => all.filter((r) => r.category === "baby"), [all]);
  const cuisines = useMemo(() => {
    const active = tab === "gericht" ? dishes : tab === "basis" ? bases : tab === "konserve" ? konserven : [];
    return Array.from(new Set(active.map(cuisineOf))).sort();
  }, [tab, dishes, bases, konserven]);
  const dishesByType = useMemo(
    () => groupByType(cuisine === "Alle" ? dishes : dishes.filter((r) => cuisineOf(r) === cuisine)),
    [dishes, cuisine]
  );
  const basesByType = useMemo(
    () => groupByType(cuisine === "Alle" ? bases : bases.filter((r) => cuisineOf(r) === cuisine)),
    [bases, cuisine]
  );
  const konservenByType = useMemo(
    () => groupByType(cuisine === "Alle" ? konserven : konserven.filter((r) => cuisineOf(r) === cuisine)),
    [konserven, cuisine]
  );
  const babiesByType = useMemo(() => groupByType(babies), [babies]);
  const activeGroups =
    tab === "gericht" ? dishesByType : tab === "basis" ? basesByType : tab === "konserve" ? konservenByType : babiesByType;
  const activeGroupsArr = Array.from(activeGroups.entries());

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">备餐 · {lang === "de" ? "Vorrat" : "储备"}</div>
        <h1 style={{ marginBottom: 4 }}>{lang === "de" ? "Preppen" : "备餐"}</h1>
        <p style={{ color: "var(--muted)" }}>
          {lang === "de"
            ? "Einmal kochen, mehrmals essen: Vorrats- und Gefrier-Rezepte, unabhängig von der Wochenplanung."
            : "一次做好，多次享用：独立于每周菜单的冷冻和备餐食谱。"}
        </p>
      </header>

      <Link to="/vorkochen" className="roll-teaser">
        <span aria-hidden="true">備え</span>
        {lang === "de" ? "Vorkochplan: vier Wochenenden mit Einkaufszetteln →" : "备餐计划：四个周末，附购物清单 →"}
      </Link>

      <div className="prep-tabs">
        <button
          type="button"
          className="prep-tab"
          onClick={() => { setTab("gericht"); setCuisine("Alle"); }}
          aria-pressed={tab === "gericht"}
        >
          {lang === "de" ? `Volle Gerichte (${dishes.length})` : `成品菜 (${dishes.length})`}
        </button>
        <button
          type="button"
          className="prep-tab"
          onClick={() => { setTab("basis"); setCuisine("Alle"); }}
          aria-pressed={tab === "basis"}
        >
          {lang === "de" ? `Basis & Saucen (${bases.length})` : `高汤酱料 (${bases.length})`}
        </button>
        <button
          type="button"
          className="prep-tab"
          onClick={() => { setTab("konserve"); setCuisine("Alle"); }}
          aria-pressed={tab === "konserve"}
        >
          {lang === "de" ? `Konservieren & Einlegen (${konserven.length})` : `腌制保存 (${konserven.length})`}
        </button>
        <button
          type="button"
          className="prep-tab"
          onClick={() => { setTab("baby"); setCuisine("Alle"); }}
          aria-pressed={tab === "baby"}
        >
          {lang === "de" ? `Baby-Beikost (${babies.length})` : `宝宝辅食 (${babies.length})`}
        </button>

        {tab !== "baby" && (
          <select value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="prep-select">
            <option value="Alle">{lang === "de" ? "Alle Küchen" : "所有菜系"}</option>
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
              : "约6个月前不需要辅食，母乳或配方奶就够了。本页不能代替儿科医生或助产士的建议。"}
          </p>
        </div>
      )}

      {/* Mini-Register: Kapitelübersicht mit Sprunglinks, bevor die eigentlichen Karten kommen —
          gleiche Idee wie das 一·二·三-Register im Hauptmenü, nur für Preppen-Kapitel. */}
      {activeGroupsArr.length > 1 && (
        <nav className="prep-index" aria-label={lang === "de" ? "Kapitel" : "章节"}>
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
