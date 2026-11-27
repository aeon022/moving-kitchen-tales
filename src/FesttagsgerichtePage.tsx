// src/FesttagsgerichtePage.tsx
// Eigener Bereich für Gerichte, die weder in die Wochenplanung noch in "Kalte Gerichte"
// passen: Suppen/Innereien, gedämpfter Fisch, Festtagsgerichte. Teilt sich die Magazin-
// Karten-UI/CSS mit KalteGerichtePage (gleiche Klassen, rein visuell).
import React, { useMemo, useState } from "react";
import { useLang } from "./App";
import { FESTIVE_DISHES, FestiveDish } from "./plans/festtagsgerichte";

const KANJI_NUM = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六"];
const kanjiOf = (i: number) => KANJI_NUM[i] ?? String(i + 1);
const anchorOf = (type: string) => `festive-${type.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
const cuisineOf = (r: FestiveDish) => r.tags[0] ?? "";

function groupByType(dishes: FestiveDish[]) {
  const map = new Map<string, FestiveDish[]>();
  for (const d of dishes) {
    if (!map.has(d.type)) map.set(d.type, []);
    map.get(d.type)!.push(d);
  }
  return map;
}

function FestiveDishCard({ r, lang }: { r: FestiveDish; lang: "de" | "zh" }) {
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
        <button type="button" className="prep-card-toggle" onClick={() => setOpen(true)}>
          {lang === "de" ? "Details ansehen" : "查看详情"}
        </button>
      ) : (
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
              <div className="prep-meta-box">
                <div className="prep-meta-row"><span className="prep-meta-label">{lang === "de" ? "Vorbereitung" : "准备"}</span>{r.freezeMethod}</div>
                <div className="prep-meta-row"><span className="prep-meta-label">{lang === "de" ? "Haltbarkeit" : "保存期限"}</span>{r.freezerLife}</div>
                <div className="prep-meta-row"><span className="prep-meta-label">{lang === "de" ? "Servieren" : "食用方法"}</span>{r.reheat}</div>
              </div>
            </div>
            <div>
              <div className="prep-card-label">{lang === "de" ? "Zubereitung" : "做法"}</div>
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

function TypeSection({ index, type, dishes, lang }: { index: number; type: string; dishes: FestiveDish[]; lang: "de" | "zh" }) {
  return (
    <section id={anchorOf(type)} style={{ marginBottom: 28, scrollMarginTop: 24 }}>
      <h3 className="prep-type-label">
        <span className="prep-type-num" aria-hidden="true">{kanjiOf(index)}</span>
        {type}
      </h3>
      <div className="prep-grid">
        {dishes.map((r) => <FestiveDishCard key={r.id} r={r} lang={lang} />)}
      </div>
    </section>
  );
}

export function FesttagsgerichtePage() {
  const { lang } = useLang();
  const [cuisine, setCuisine] = useState<string>("Alle");

  const cuisines = useMemo(() => Array.from(new Set(FESTIVE_DISHES.map(cuisineOf))).sort(), []);
  const byType = useMemo(
    () => groupByType(cuisine === "Alle" ? FESTIVE_DISHES : FESTIVE_DISHES.filter((r) => cuisineOf(r) === cuisine)),
    [cuisine]
  );
  const groupsArr = Array.from(byType.entries());

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">{lang === "de" ? "團圓飯 · Feste & Kraftgerichte" : "团圆饭 · 节庆与滋补"}</div>
        <h1 style={{ marginBottom: 4 }}>{lang === "de" ? "Festtagsgerichte" : "节日菜"}</h1>
        <p style={{ color: "var(--muted)" }}>
          {lang === "de"
            ? "Suppen und Kraftgerichte, gedämpfter Fisch, klassische Festtagsgerichte — für besondere Anlässe statt der wöchentlichen Routine."
            : "滋补汤品、清蒸鱼和经典年节菜，适合特别的日子，不属于每周常规菜单。"}
        </p>
      </header>

      <div className="prep-tabs">
        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="prep-select">
          <option value="Alle">{lang === "de" ? "Alle Küchen" : "所有菜系"}</option>
          {cuisines.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {groupsArr.length > 1 && (
        <nav className="prep-index" aria-label={lang === "de" ? "Kapitel" : "章节"}>
          {groupsArr.map(([type], i) => (
            <a
              key={type}
              href={`#${anchorOf(type)}`}
              className="prep-index-row"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(anchorOf(type))?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className="prep-index-num" aria-hidden="true">{kanjiOf(i)}</span>
              <span>{type}</span>
              <span className="prep-index-count">{byType.get(type)!.length}</span>
            </a>
          ))}
        </nav>
      )}

      {groupsArr.map(([type, dishes], i) => (
        <TypeSection key={type} index={i} type={type} dishes={dishes} lang={lang} />
      ))}
    </div>
  );
}
