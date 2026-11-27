// src/HomePage.tsx
// Startseite als kleine Geschichte: Titelblatt → warum wir kochen → heute auf dem Tisch → Kapitel.
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLang, usePlanData, pickCurrent, PlanRecord, SUPPORT_URL } from "./App";
import { CatPair, CatsAsleep, Lantern } from "./components/Cats";
import { dayTime, isNewYear } from "./utils/catMood";

const DAY_IDS = ["so", "mo", "di", "mi", "do", "fr", "sa"];
const MEALS: [string, string, string][] = [["f", "Morgen", "早"], ["m", "Mittag", "中"], ["a", "Abend", "晚"]];

type Pair = [de: string, zh: string];

const STORY: { kanji: string; title: Pair; text: Pair }[] = [
  {
    kanji: "旅",
    title: ["Von Reisen mitgebracht", "从旅途带回来"],
    text: [
      "Auf Reisen nach China haben wir viele Gerichte gegessen, die wir daheim selbst kochen wollten. Daraus ist diese Sammlung geworden.",
      "每次去中国，都有很多菜让我们想回家自己做。这本菜谱就是这样来的。",
    ],
  },
  {
    kanji: "家",
    title: ["Für Familie und Freunde", "为家人和朋友"],
    text: [
      "Wir kochen für unsere Familie hier, für Freunde – und die Familie in China liest mit.",
      "我们为这边的家人和朋友做饭，远在中国的家人也能一起看。",
    ],
  },
  {
    kanji: "備",
    title: ["Vorkochen gegen den Stress", "提前备餐，忙也不慌"],
    text: [
      "Der Alltag ist oft voll. Darum kochen wir vor und frieren ein, damit trotzdem etwas Warmes auf dem Tisch steht.",
      "日子常常很忙。所以我们提前做好冷冻起来，再忙也有一口热饭。",
    ],
  },
  {
    kanji: "味",
    title: ["Einfach, mit Ausreißern", "简单为主，偶有惊喜"],
    text: [
      "Gesunde, leichte Küche, meistens gut und einfach. Dazwischen Besonderes und Ausgefallenes.",
      "健康清淡的家常菜为主，好吃又简单，中间也有特别的、新鲜的花样。",
    ],
  },
];

export function HomePage({ plans }: { plans: PlanRecord[] }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
  const pick = (p: Pair) => p[lang === "de" ? 0 : 1];

  // Klick hält das Titelbild auch ohne Hover offen (Touch).
  const [portraitOpen, setPortraitOpen] = useState(false);
  const plan = pickCurrent(plans, lang);
  const data = usePlanData(plan)?.DATA ?? [];

  // "Heute" nur, wenn der Plan die heutige Woche abdeckt, sonst sein erster Tag.
  const now = new Date();
  const age = plan ? (now.getTime() - new Date(plan.startDate + "T00:00:00").getTime()) / 86_400_000 : -1;
  const isThisWeek = age >= 0 && age < 7;
  const day = isThisWeek ? DAY_IDS[now.getDay()] : "mo";
  const today = MEALS.map(([m, de, zh]) => ({ label: t(de, zh), recipe: data.find((r) => r.id === `${day}-${m}`) })).filter((x) => x.recipe);

  const mood = dayTime(now);
  const festive = isNewYear(now);

  const planPath = plan ? `/plan/${plan.slug}?lang=${lang}` : "/";
  const chapters: { to: string; title: Pair; text: Pair }[] = [
    { to: planPath, title: ["Wochenplan", "本周菜单"], text: ["Drei Mahlzeiten am Tag, mit Einkaufsliste", "一日三餐和购物清单"] },
    { to: "/kuehlschrank", title: ["Kühlschrank", "冰箱找菜谱"], text: ["Was ist da? Das passende Rezept dazu", "家里有什么，就做什么"] },
    { to: "/vorkochen", title: ["Vorkochen", "提前备餐"], text: ["Vier Wochenenden mit Einkaufszettel", "四个周末和购物单"] },
    { to: "/preppen", title: ["Preppen", "备餐食谱"], text: ["Einfrieren, einlegen, vorbereiten", "冷冻、腌制、预处理"] },
    { to: "/vorratskammer", title: ["Vorratskammer", "储藏室"], text: ["Was immer im Haus sein soll", "家里常备的东西"] },
    { to: "/festtagsgerichte", title: ["Festtagsgerichte", "节日菜"], text: ["Wenn es etwas Besonderes sein darf", "想吃点特别的时候"] },
    { to: "/kalte-gerichte", title: ["Kalte Gerichte", "凉菜"], text: ["Salate, Eingelegtes, Beilagen", "凉拌、腌菜、小菜"] },
    { to: "/kochtechniken", title: ["Kochtechniken", "烹饪技法"], text: ["Wie es gelingt", "怎样做得好"] },
    { to: "/katzen", title: ["Finn & Fleur", "Finn 和 Fleur"], text: ["Ein kleines Bilderbuch", "一本小绘本"] },
    { to: "/bookmarks", title: ["Merkliste", "我的收藏"], text: ["Deine Lieblinge", "你喜欢的菜"] },
  ];
  const numbers = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];

  return (
    <div className="home-page">
      <section className="cover">
        <div className="cover-header">
          <span className="seal-mark" aria-hidden="true"><span>厨</span><span>房</span></span>
          <span className="cover-volume" lang="zh-CN" title="Gesamtwerk in einem Band">全一册</span>
        </div>
        <div className="cover-center">
          <div
            className={`cover-portrait${portraitOpen ? " is-open" : ""}`}
            onClick={() => setPortraitOpen((v) => !v)}
            role="button"
            tabIndex={0}
            aria-pressed={portraitOpen}
            aria-label={t("Titelbild vollständig anzeigen", "显示完整封面图")}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setPortraitOpen((v) => !v); } }}
          >
            <img src={`${import.meta.env.BASE_URL}hero-bg.webp`} alt="" />
          </div>
          <h1 className="cover-title">Moving Kitchen Tales</h1>
          <div className="cover-rule" aria-hidden="true" />
          <p className="cover-subtitle">{t("Gesunde, leichte Küche für zuhause.", "健康清淡的家常菜。")}</p>
          <div className="hero-btns">
            <Link className="btn-primary" to={planPath}>{t("Zum aktuellen Plan", "查看本周菜单")}</Link>
            <Link className="btn-secondary" to="/kuehlschrank">{t("Was ist im Kühlschrank?", "冰箱里有什么？")}</Link>
          </div>
          <div className="cover-tategaki" aria-hidden="true">流动厨房的故事</div>
        </div>
      </section>

      <section className="story" aria-labelledby="story-title">
        <div className="section-kicker">为什么 · {t("Warum", "缘起")}</div>
        <h2 id="story-title">{t("Warum wir kochen", "我们为什么做饭")}</h2>
        <ol className="story-thread">
          {STORY.map((s) => (
            <li key={s.kanji}>
              <span className="story-node" aria-hidden="true">{s.kanji}</span>
              <h3>{pick(s.title)}</h3>
              <p>{pick(s.text)}</p>
            </li>
          ))}
        </ol>
        <figure className="story-cats">
          {festive && <span className="story-lantern"><Lantern /></span>}
          {mood === "night" ? <CatsAsleep festive={festive} /> : <CatPair mood={mood === "morning" ? "stretch" : "sit"} festive={festive} />}
          <figcaption>
            {t("Finn, sieben Kilo Ruhe und heimlicher Schelm. Fleur, flink und der Kopf der Bande.", "Finn：七公斤的淡定，偷偷调皮。Fleur：身手敏捷，是出主意的那个。")}{" "}
            <Link to="/katzen">{t("Ihre Abenteuer →", "他们的历险记 →")}</Link>
          </figcaption>
        </figure>
      </section>

      {plan && today.length > 0 && (
        <section className="today" aria-labelledby="today-title">
          <div className="section-kicker">今天 · {plan.meta.title}</div>
          <h2 id="today-title">{isThisWeek ? t("Heute auf dem Tisch", "今天吃什么") : t("Als Nächstes auf dem Tisch", "接下来吃什么")}</h2>
          <div className="today-list">
            {today.map(({ label, recipe }) => (
              <Link key={recipe!.id} to={`/plan/${plan.slug}#meal-${recipe!.id}`}>
                <span className="today-meal">{label}</span>
                <strong>{recipe!.title}</strong>
                {recipe!.desc && <span className="today-desc">{recipe!.desc}</span>}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="chapters" aria-labelledby="chapters-title">
        <div className="section-kicker">目录 · {t("Register", "目录")}</div>
        <h2 id="chapters-title">{t("Die Kapitel", "章节")}</h2>
        <ul>
          {chapters.map((c, i) => (
            <li key={c.to + c.title[0]}>
              <button type="button" onClick={() => navigate(c.to)}>
                <span className="chapter-num" aria-hidden="true">{numbers[i]}</span>
                <span><strong>{pick(c.title)}</strong><small>{pick(c.text)}</small></span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <footer className="home-footer">
        <div className="home-footer-links">
          <a href={SUPPORT_URL} target="_blank" rel="noreferrer">{t("Projekt unterstützen", "支持项目")}</a>
          <a href="https://abteilung83.at" target="_blank" rel="noreferrer">abteilung83</a>
          <Link to="/datenschutz">{t("Datenschutz", "隐私说明")}</Link>
        </div>
      </footer>
    </div>
  );
}
