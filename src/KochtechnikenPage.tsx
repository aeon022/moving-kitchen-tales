// src/KochtechnikenPage.tsx
// Referenz-Bereich für wiederkehrende Kochtechniken (Marinieren, Zart machen, Blanchieren, ...) —
// kein Rezept-Format, sondern Methode + Tipps + Beispiele. Teilt sich die Magazin-Karten-UI/CSS
// mit Preppen/Kalte Gerichte (gleiche Klassen, rein visuell).
import React, { useMemo, useState } from "react";
import { useLang } from "./App";
import { TECHNIQUES, Technique } from "./plans/techniques";

const KANJI_NUM = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六"];
const kanjiOf = (i: number) => KANJI_NUM[i] ?? String(i + 1);
const anchorOf = (cat: string) => `tech-${cat.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
const cuisineOf = (t: Technique) => t.tags[0] ?? "";

function groupByCategory(items: Technique[]) {
  const map = new Map<string, Technique[]>();
  for (const t of items) {
    if (!map.has(t.category)) map.set(t.category, []);
    map.get(t.category)!.push(t);
  }
  return map;
}

function TechniqueCard({ t, lang }: { t: Technique; lang: "de" | "zh" }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`prep-card${open ? " prep-card-open" : ""}`}>
      <div className="prep-card-kicker">{t.tags[0]}</div>
      <h3 className="prep-card-title">{t.title}</h3>
      <p className="prep-card-desc">{t.desc}</p>

      <div className="prep-tags-row">
        {t.tags.map((x) => <span key={x} className="prep-tag">{x}</span>)}
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
              <div className="prep-card-label">{lang === "de" ? "Methode" : "方法"}</div>
              <ol className="prep-steps">
                {t.method.map((s, idx) => <li key={idx}>{s}</li>)}
              </ol>
            </div>
            <div>
              <div className="prep-card-label">{lang === "de" ? "Tipps" : "小窍门"}</div>
              <ol className="prep-steps">
                {t.tips.map((s, idx) => <li key={idx}>{s}</li>)}
              </ol>
              <div className="prep-meta-box">
                <div className="prep-meta-row"><span className="prep-meta-label">{lang === "de" ? "Verwendet in" : "适用于"}</span>{t.usedIn}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function CategorySection({ index, category, items, lang }: { index: number; category: string; items: Technique[]; lang: "de" | "zh" }) {
  return (
    <section id={anchorOf(category)} style={{ marginBottom: 28, scrollMarginTop: 24 }}>
      <h3 className="prep-type-label">
        <span className="prep-type-num" aria-hidden="true">{kanjiOf(index)}</span>
        {category}
      </h3>
      <div className="prep-grid">
        {items.map((t) => <TechniqueCard key={t.id} t={t} lang={lang} />)}
      </div>
    </section>
  );
}

export function KochtechnikenPage() {
  const { lang } = useLang();
  const [cuisine, setCuisine] = useState<string>("Alle");

  const cuisines = useMemo(() => Array.from(new Set(TECHNIQUES.map(cuisineOf))).sort(), []);
  const byCategory = useMemo(
    () => groupByCategory(cuisine === "Alle" ? TECHNIQUES : TECHNIQUES.filter((t) => cuisineOf(t) === cuisine)),
    [cuisine]
  );
  const groupsArr = Array.from(byCategory.entries());

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">{lang === "de" ? "技法 · Technik" : "技法 · 基本功"}</div>
        <h1 style={{ marginBottom: 4 }}>{lang === "de" ? "Kochtechniken" : "烹饪技法"}</h1>
        <p style={{ color: "var(--muted)" }}>
          {lang === "de"
            ? "Wiederkehrende Handgriffe der chinesischen, japanischen und koreanischen Küche — Marinieren, Zart machen, Blanchieren und mehr, einmal erklärt statt in jedem Rezept neu."
            : "中餐、日餐和韩餐里常用的手法：腌制、嫩肉、焯水等等，在这里一次讲清，不必在每道菜谱里重复。"}
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
          {groupsArr.map(([category], i) => (
            <a
              key={category}
              href={`#${anchorOf(category)}`}
              className="prep-index-row"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(anchorOf(category))?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className="prep-index-num" aria-hidden="true">{kanjiOf(i)}</span>
              <span>{category}</span>
              <span className="prep-index-count">{byCategory.get(category)!.length}</span>
            </a>
          ))}
        </nav>
      )}

      {groupsArr.map(([category, items], i) => (
        <CategorySection key={category} index={i} category={category} items={items} lang={lang} />
      ))}
    </div>
  );
}
