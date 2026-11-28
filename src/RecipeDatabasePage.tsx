// src/RecipeDatabasePage.tsx
// Die ganze Sammlung (Wochenpläne, Preppen, Vorrat-Generator, Kalte und Festtagsgerichte),
// filterbar nach Hauptzutat, Herkunft und Art. Lädt dafür alle Wochen, deshalb eine eigene Seite.
import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLang, planDataCache, loadPlanData, PlanRecord } from "./App";
import { COLD_DISHES } from "./plans/coldDishes";
import { FESTIVE_DISHES } from "./plans/festtagsgerichte";
import { PREP_RECIPES } from "./plans/prep/preppen";
import { localizedRecipes } from "./plans/prep/localized";
import { WAYS, CUTS } from "./plans/vorrat";
import { ORIGIN_NAMES } from "./plans/vorrat/labels";
import { mainOf, originOf, formOf, Main, Form } from "./utils/classify";

type Entry = {
  key: string;
  title: string;
  desc?: string;
  /** Titel und Zutaten in der gezeigten Sprache, für die Suche. */
  hay: string;
  to: string;
  source: string;
  where: string;
  main: Main;
  origin: keyof typeof ORIGIN_NAMES;
  form: Form;
  meal?: string;
  rice?: boolean;
  viral?: boolean;
};

type Pair = [string, string];
const MAINS: Record<Main, Pair> = {
  haehnchen: ["Hähnchen", "鸡肉"], pute: ["Pute", "火鸡"], ente: ["Ente", "鸭肉"], schwein: ["Schwein", "猪肉"], rind: ["Rind", "牛肉"],
  lamm: ["Lamm", "羊肉"], fisch: ["Fisch", "鱼"], meeresfruechte: ["Meeresfrüchte", "虾贝海鲜"], tofu: ["Tofu", "豆腐"], ei: ["Ei", "蛋"],
  gemuese: ["Gemüse", "蔬菜"], getreide: ["Reis, Getreide & Süßes", "主食和甜食"],
};
const FORMS: Record<Form, Pair> = {
  suppe: ["Suppe", "汤"], brei: ["Brei & Congee", "粥"], reis: ["Reisgericht", "饭"], nudeln: ["Nudeln", "面"], pfanne: ["Pfanne & Wok", "炒菜"],
  schmor: ["Schmorgericht & Eintopf", "炖煮"], teig: ["Teigiges & Gebäck", "面点"], salat: ["Salat", "凉拌"], sonstiges: ["Sonstiges", "其他"],
};
const SOURCES: Record<string, Pair> = {
  woche: ["Wochenpläne", "每周菜单"], prep: ["Preppen", "备餐食谱"], vorrat: ["Was tun mit …?", "食材怎么做"], kalt: ["Kalte Gerichte", "凉菜"], fest: ["Festtagsgerichte", "节日菜"],
};
const MEALS: Record<string, Pair> = { f: ["Frühstück", "早餐"], m: ["Mittag", "午餐"], a: ["Abend", "晚餐"] };
const PAGE = 60;

const classify = (title: string, ingredients: string[]) => ({ main: mainOf(ingredients), origin: originOf(title), form: formOf(title, ingredients) });

function collections(lang: "de" | "zh"): Entry[] {
  const i = lang === "zh" ? 1 : 0;
  const prep = localizedRecipes(lang).map((r, n) => {
    const de = PREP_RECIPES[n];
    return { key: `p-${r.id}`, title: r.title, desc: r.desc, hay: [r.title, ...r.ingredients].join(" "), to: "/preppen", source: "prep", where: SOURCES.prep[i], ...classify(de.title, de.ingredients) };
  });
  const ways = WAYS.map((w) => {
    const cut = CUTS.find((c) => c.id === w.cuts[0])!;
    const main: Main = cut.id === "garnelen" ? "meeresfruechte" : cut.id === "tofu" ? "tofu" : cut.group === "pflanzlich" ? "gemuese" : (cut.group as Main);
    return {
      key: `v-${w.id}`, title: w[lang].title, hay: [w[lang].title, cut[lang], ...w.ingredients.map((x) => x[i])].join(" "), to: `/verarbeiten?zutat=${cut.id}`,
      source: "vorrat", where: SOURCES.vorrat[i], main, origin: w.origin, form: formOf(w.de.title),
    };
  });
  // Kalte und Festtagsgerichte gibt es nur auf Deutsch.
  const german = lang === "zh" ? [] : ([["kalt", COLD_DISHES, "/kalte-gerichte"], ["fest", FESTIVE_DISHES, "/festtagsgerichte"]] as const).flatMap(([source, list, to]) =>
    list.map((r) => ({ key: `${source}-${r.id}`, title: r.title, desc: r.desc, hay: [r.title, ...r.ingredients].join(" "), to, source, where: SOURCES[source][0], ...classify(r.title, r.ingredients) }))
  );
  return [...ways, ...prep, ...german];
}

export function RecipeDatabasePage({ plans }: { plans: PlanRecord[] }) {
  const { lang } = useLang();
  const i = lang === "zh" ? 1 : 0;
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
  const [loading, setLoading] = useState(true);
  const langPlans = useMemo(() => plans.filter((p) => p.lang === lang), [plans, lang]);
  const dePlans = useMemo(() => plans.filter((p) => p.lang === "de"), [plans]);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    // Einzelne alte Wochen ohne Daten dürfen die Seite nicht aufhalten.
    Promise.allSettled([...langPlans, ...dePlans].map(loadPlanData)).then(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, [langPlans, dePlans]);

  // Filter stehen in der Adresse, damit „zurück“ sie behält.
  const [params, setParams] = useSearchParams();
  const get = (k: string) => params.get(k) ?? "";
  const set = (k: string, v: string) => {
    const next = new URLSearchParams(params);
    if (v) next.set(k, v); else next.delete(k);
    setParams(next, { replace: true });
    setShown(PAGE);
  };
  const [shown, setShown] = useState(PAGE);

  const all = useMemo(() => {
    if (loading) return [];
    const weeks: Entry[] = [];
    const seen = new Set<string>();
    for (const p of langPlans) {
      const de = dePlans.find((d) => d.baseId === p.baseId);
      const deData = (de && planDataCache.get(de.slug)?.DATA) || [];
      for (const r of planDataCache.get(p.slug)?.DATA ?? []) {
        if (seen.has(r.title)) continue;
        seen.add(r.title);
        const base = deData.find((x) => x.id === r.id) ?? r;
        const meal = r.id.slice(-1);
        weeks.push({
          key: `${p.slug}-${r.id}`, title: r.title, desc: r.desc, hay: [r.title, r.desc, ...(r.ingredients ?? [])].join(" "),
          to: `/plan/${p.slug}#meal-${r.id}`, source: "woche", where: p.meta.title ?? "", meal: MEALS[meal] ? meal : undefined,
          rice: !!r.riceCooker?.enabled, viral: !!r.isViral, ...classify(base.title, (base.ingredients ?? []).filter((x: unknown) => typeof x === "string")),
        });
      }
    }
    return [...collections(lang), ...weeks];
  }, [loading, langPlans, dePlans, lang]);

  const q = get("q").trim().toLowerCase();
  const matches = (e: Entry, skip?: string) =>
    (["main", "origin", "form", "source", "meal"] as const).every((k) => k === skip || !get(k) || e[k] === get(k)) &&
    (!get("rice") || e.rice) && (!get("viral") || e.viral) && (!q || e.hay.toLowerCase().includes(q));
  const filtered = all.filter((e) => matches(e));

  const pick = (k: "main" | "origin" | "form" | "source" | "meal", label: string, names: Record<string, Pair>) => {
    const pool = all.filter((e) => matches(e, k));
    return (
      <select className="prep-select" value={get(k)} onChange={(e) => set(k, e.target.value)} aria-label={label}>
        <option value="">{label}</option>
        {Object.entries(names).map(([v, name]) => {
          const n = pool.filter((e) => e[k] === v).length;
          return n || get(k) === v ? <option key={v} value={v}>{name[i]} ({n})</option> : null;
        })}
      </select>
    );
  };

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">食谱库 · {t("Alles an einem Ort", "全部菜谱")}</div>
        <h1>{t("Rezeptsammlung", "食谱库")}</h1>
        <p className="export-msg" aria-live="polite">{loading ? t("Lädt alle Rezepte…", "正在加载全部食谱…") : t(`${filtered.length} von ${all.length} Rezepten`, `${all.length}道中的${filtered.length}道`)}</p>
      </header>

      <div className="export-bar rezept-filter">
        <input type="search" className="fridge-input" value={get("q")} onChange={(e) => set("q", e.target.value)} placeholder={t("Titel, Zutaten…", "菜名、食材…")} aria-label={t("Suche", "搜索")} />
        {pick("main", t("Jede Hauptzutat", "所有主料"), MAINS)}
        {pick("origin", t("Jede Herkunft", "所有菜系"), ORIGIN_NAMES)}
        {pick("form", t("Jede Art", "所有类型"), FORMS)}
        {pick("source", t("Alle Quellen", "所有来源"), SOURCES)}
        {pick("meal", t("Jede Mahlzeit", "所有餐次"), MEALS)}
        <button type="button" className="prep-tab" aria-pressed={!!get("rice")} onClick={() => set("rice", get("rice") ? "" : "1")}>{t("Nur Reiskocher", "只看电饭煲菜")}</button>
        <button type="button" className="prep-tab" aria-pressed={!!get("viral")} onClick={() => set("viral", get("viral") ? "" : "1")}>{t("Nur Trends", "只看网红菜")}</button>
      </div>
      <p className="export-msg">{t("Hauptzutat, Herkunft und Art sind automatisch zugeordnet und stimmen nicht in jedem Fall.", "主料、菜系和类型为自动归类，个别可能不准确。")}</p>

      {!loading && filtered.length === 0 ? (
        <p className="fridge-hint">{t("Keine Treffer.", "没有找到结果。")}</p>
      ) : (
        <ul className="rezept-list">
          {filtered.slice(0, shown).map((e) => (
            <li key={e.key}>
              <Link to={e.to}>
                <span className="prep-card-kicker">{MAINS[e.main][i]} · {ORIGIN_NAMES[e.origin][i]} · {FORMS[e.form][i]}</span>
                <strong>{e.title}</strong>
                <small>{e.where}</small>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {filtered.length > shown && (
        <button type="button" className="prep-tab" onClick={() => setShown(shown + PAGE)}>{t(`Mehr zeigen (${filtered.length - shown})`, `显示更多（${filtered.length - shown}）`)}</button>
      )}
    </div>
  );
}
