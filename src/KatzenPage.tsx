// src/KatzenPage.tsx
// Kleines Bilderbuch: die Abenteuer von Finn und Fleur.
import React from "react";
import { useLang } from "./App";
import { StoryScene } from "./components/CatStory";

const PAGES: [de: string, zh: string][] = [
  ["Die Sonne kitzelt. Finn gähnt, Fleur ist längst hellwach: Heute riecht es nach Abenteuer.", "太阳晒进来了。Finn 打着哈欠，Fleur 早就清醒了：今天闻起来有冒险的味道。"],
  ["Vor dem Kühlschrank denkt Fleur nach. Ihr Plan ist gut. Nur der Griff ist schwer.", "Fleur 坐在冰箱前想办法。计划很好，就是门把手太重。"],
  ["„Lass mich“, brummt Finn. Er zieht einmal kräftig, und die Tür geht auf.", "“让我来。”Finn 嘟囔着。他用力一拉，门开了。"],
  ["Auf dem Tisch wartet ein Fisch. Finn schaut ganz unschuldig. Seine Pfote nicht.", "桌上放着一条鱼。Finn 一脸无辜，爪子可不是。"],
  ["Da pfeift der Topf! Fleur springt hoch, Finn vergisst den Fisch.", "锅突然呜呜叫！Fleur 跳了起来，Finn 把鱼忘了。"],
  ["Am Abend sind beide satt und müde. Morgen, sagt Fleur im Traum, nehmen wir den Reis.", "到了晚上，两个都吃饱了、困了。Fleur 在梦里说：明天，咱们去看看米饭。"],
];

export function KatzenPage() {
  const { lang } = useLang();
  const i = lang === "de" ? 0 : 1;
  return (
    <div className="main-inner storybook">
      <header className="prep-header">
        <div className="prep-kicker">猫 · {lang === "de" ? "Bilderbuch" : "绘本"}</div>
        <h1>{lang === "de" ? "Die Abenteuer von Finn und Fleur" : "Finn 和 Fleur 历险记"}</h1>
      </header>
      <ol>
        {PAGES.map((text, n) => (
          <li key={n}>
            <StoryScene n={(n + 1) as 1 | 2 | 3 | 4 | 5 | 6} label={text[i]} />
            <p>{text[i]}</p>
          </li>
        ))}
      </ol>
      <p className="storybook-end">{lang === "de" ? "Ende" : "完"}</p>
    </div>
  );
}
