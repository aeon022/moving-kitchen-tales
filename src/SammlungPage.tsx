// src/SammlungPage.tsx
// Gemeinsame Seite für Familienrezepte und Reisetagebuch (Daten: plans/sammlungen.ts).
import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "./App";
import { FAMILY_RECIPES, TRAVEL_DIARY } from "./plans/sammlungen";
import { Cat } from "./components/Cats";

const PAGES = {
  familie: {
    items: FAMILY_RECIPES, kicker: "家传",
    title: ["Familienrezepte", "家传菜谱"],
    intro: ["Gerichte aus der Familie, mit ihrer Geschichte.", "家里的菜，和它们的故事。"],
    empty: ["Noch leer. Fleur wartet auf das erste Familienrezept.", "还没有内容。Fleur 在等第一道家传菜。"],
  },
  reisen: {
    items: TRAVEL_DIARY, kicker: "游记",
    title: ["Reisetagebuch", "美食游记"],
    intro: ["Was wir unterwegs gegessen haben und daheim nachkochen.", "旅途中吃到的菜，回家自己做。"],
    empty: ["Noch leer. Finn hütet die erste Seite.", "还没有内容。Finn 守着第一页。"],
  },
} as const;

export function SammlungPage({ kind }: { kind: keyof typeof PAGES }) {
  const { lang } = useLang();
  const i = lang === "de" ? 0 : 1;
  const page = PAGES[kind];
  return (
    <div className="main-inner storybook">
      <header className="prep-header">
        <div className="prep-kicker">{page.kicker}</div>
        <h1>{page.title[i]}</h1>
        <p style={{ color: "var(--muted)" }}>{page.intro[i]}</p>
      </header>
      {page.items.length === 0 ? (
        <div className="memory-empty">
          <div>{kind === "familie" ? <Cat who="fleur" pose="sit" /> : <Cat who="finn" pose="onpaper" />}</div>
          <p>{page.empty[i]}</p>
        </div>
      ) : (
        <ol>
          {page.items.map((m) => (
            <li key={m.id}>
              {m.photo && <img src={`${import.meta.env.BASE_URL}sammlung/${m.photo}`} alt={m.title[lang]} style={{ width: "100%" }} loading="lazy" />}
              <h2>{m.title[lang]}</h2>
              <div className="prep-card-label">{m.from[lang]}</div>
              <p style={{ textAlign: "left" }}>{m.story[lang]}</p>
              {m.recipe && <Link to={m.recipe}>{lang === "de" ? "Daheim nachgekocht →" : "在家复刻 →"}</Link>}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
