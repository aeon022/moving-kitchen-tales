// src/KuehlschrankPage.tsx
// "Kühlschrank": vorhandene Zutaten eingeben → passende Rezepte aus der ganzen Sammlung,
// dazu Alternativen mit Ersatzzutaten. Abgleich: utils/fridgeMatch.ts.
// Der Abgleich arbeitet immer mit den deutschen Zutaten. Auf Chinesisch werden die übersetzten
// Rezepte durchsucht und Ein- und Ausgabe übersetzt (utils/fridgeZh.ts).
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLang, planDataCache, loadPlanData, PlanRecord } from "./App";
import { COLD_DISHES } from "./plans/coldDishes";
import { FESTIVE_DISHES } from "./plans/festtagsgerichte";
import { PREP_RECIPES } from "./plans/prep/preppen";
import { matchRecipes, Match, Ingredient } from "./utils/fridgeMatch";
import { riceAlternative } from "./utils/riceAlternative";
import { buildDictionary, toGerman, zhName, Pairable } from "./utils/fridgeZh";
import { localizedRecipes } from "./plans/prep/localized";

type Entry = {
  key: string;
  title: string;
  ingredients: Ingredient[];
  steps: string[];
  swaps?: string;
  source: string;
  to: string;
  /** Chinesische Fassung; Zutaten gleicher Reihenfolge wie oben. */
  zh?: { title: string; ingredients: string[]; steps: string[]; swaps?: string };
};

const QUICK_ZH = ["鸡蛋", "豆腐", "鸡肉", "三文鱼", "胡萝卜", "葱", "菠菜", "小油菜", "蘑菇", "南瓜", "黄瓜", "土豆", "面条", "牛奶"];
const pairOf = (r: Entry): Pairable => ({ de: { ingredients: r.ingredients as string[] }, zh: { ingredients: r.zh!.ingredients } });

const STORE = "mkt.fridge";
const QUICK = ["Eier", "Tofu", "Hähnchen", "Lachs", "Karotte", "Frühlingszwiebel", "Spinat", "Pak Choi", "Pilze", "Kürbis", "Gurke", "Kartoffeln", "Nudeln", "Milch"];
const PAGE = 12;

function loadFridge(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(STORE) ?? "[]");
    return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

const COLLECTIONS: Entry[] = [
  ...COLD_DISHES.map((r) => ({ ...r, key: r.id, source: "Kalte Gerichte", to: "/kalte-gerichte" })),
  ...FESTIVE_DISHES.map((r) => ({ ...r, key: r.id, source: "Festtagsgerichte", to: "/festtagsgerichte" })),
  ...PREP_RECIPES.filter((r) => r.category === "gericht").map((r) => ({ ...r, key: r.id, source: "Preppen", to: "/preppen" })),
];

function ResultCard({ m, t, said }: { m: Match<Entry>; t: (de: string, zh: string) => string; said: Map<string, string> }) {
  const r = m.recipe;
  const zh = r.zh;
  const name = (label: string) => (zh ? zhName(label, pairOf(r)) : label);
  const view = zh ?? { title: r.title, ingredients: r.ingredients.map((i) => (typeof i === "string" ? i : i.name)), steps: r.steps, swaps: r.swaps };
  const riceAlt = riceAlternative(r.ingredients.map((i) => (typeof i === "string" ? i : i.name)), r.title, zh ? "zh" : "de");
  return (
    <article className="fridge-card">
      <div className="prep-card-kicker">{r.source}</div>
      <h3 className="prep-card-title">{view.title}</h3>
      <p className="fridge-line"><strong>{t("Vorhanden", "已有")}:</strong> {m.have.map(name).join(", ")}</p>
      {m.substitutes.length > 0 && (
        <p className="fridge-line fridge-sub">
          <strong>{t("Ersatz", "替换")}:</strong> {m.substitutes.map((s) => `${said.get(s.use) ?? s.use} ${t("statt", "代替")} ${name(s.missing)}`).join(", ")}
        </p>
      )}
      {m.open.length > 0 && <p className="fridge-line"><strong>{t("Fehlt", "缺少")}:</strong> {m.open.map(name).join(", ")}</p>}
      <details>
        <summary className="prep-card-toggle">{t("Rezept ansehen", "查看做法")}</summary>
        <div className="prep-ingredients" style={{ marginTop: 12 }}>
          {view.ingredients.map((i, idx) => <span key={idx} className="prep-ingredient-chip">{i}</span>)}
        </div>
        {riceAlt && <p className="rice-alt"><strong>{t("Reis-Alternative", "米饭替代")}:</strong> {riceAlt}</p>}
        <ol className="prep-steps">{view.steps.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
        {view.swaps && view.swaps !== "-" && <p className="fridge-line">{t("Austausche", "替换")}: {view.swaps}</p>}
        <Link to={r.to} className="prep-card-toggle">{t("In der Sammlung öffnen →", "打开所在页面 →")}</Link>
      </details>
    </article>
  );
}

function Section({ title, hint, items, t, said }: { title: string; hint: string; items: Match<Entry>[]; t: (de: string, zh: string) => string; said: Map<string, string> }) {
  const [limit, setLimit] = useState(PAGE);
  if (!items.length) return null;
  return (
    <section style={{ marginBottom: 32 }}>
      <h2 className="fridge-heading">{title} <span>{items.length}</span></h2>
      <p className="fridge-hint">{hint}</p>
      <div className="prep-grid">
        {items.slice(0, limit).map((m) => <ResultCard key={m.recipe.key} m={m} t={t} said={said} />)}
      </div>
      {items.length > limit && (
        <button type="button" className="prep-tab" style={{ marginTop: 16 }} onClick={() => setLimit(limit + PAGE)}>
          {t("Mehr anzeigen", "显示更多")}
        </button>
      )}
    </section>
  );
}

export function KuehlschrankPage({ plans }: { plans: PlanRecord[] }) {
  const { lang } = useLang();
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);

  const [fridge, setFridge] = useState<string[]>(loadFridge);
  const [input, setInput] = useState("");
  const [pantry, setPantry] = useState(true);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(0);

  useEffect(() => {
    try { localStorage.setItem(STORE, JSON.stringify(fridge)); } catch { /* privates Fenster */ }
  }, [fridge]);

  const dePlans = useMemo(() => plans.filter((p) => p.lang === "de"), [plans]);
  // Übersetzungen ab KW45/2026 liegen deckungsgleich zum Original vor (ältere zh-Wochen nicht).
  const zhPlans = useMemo(() => (lang === "zh" ? plans.filter((p) => p.lang === "zh" && p.startDate >= "2026-11-02") : []), [plans, lang]);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    Promise.allSettled([...dePlans, ...zhPlans].map(loadPlanData)).then((res) => {
      if (!alive) return;
      setFailed(res.filter((r) => r.status === "rejected").length);
      setLoading(false);
    });
    return () => { alive = false; };
  }, [dePlans, zhPlans]);

  const entries = useMemo(() => {
    if (lang === "zh") {
      const weeks: Entry[] = [...zhPlans].reverse().flatMap((p) => {
        const de = dePlans.find((d) => d.baseId === p.baseId);
        const original = (de && planDataCache.get(de.slug)?.DATA) || [];
        return (planDataCache.get(p.slug)?.DATA ?? []).flatMap((z) => {
          const r = original.find((o) => o.id === z.id);
          if (!r) return [];
          return [{
            key: `${p.slug}-${r.id}`, title: r.title, ingredients: r.ingredients ?? [], steps: r.steps ?? [], swaps: r.swaps,
            source: `${p.meta.title} · ${p.startDate.slice(0, 4)}`, to: `/plan/${p.slug}#meal-${r.id}`,
            zh: { title: z.title, ingredients: z.ingredients ?? [], steps: z.steps ?? [], swaps: z.swaps },
          }];
        });
      });
      const translated = localizedRecipes("zh");
      const prep: Entry[] = PREP_RECIPES.flatMap((r, i) =>
        r.category !== "gericht" ? [] : [{ ...r, key: r.id, source: "备餐", to: "/preppen", zh: translated[i] }]
      );
      return [...weeks, ...prep];
    }
    // Neueste Wochen zuerst, damit bei gleichen Titeln die aktuelle Fassung gewinnt.
    const weeks: Entry[] = [...dePlans].reverse().flatMap((p) =>
      (planDataCache.get(p.slug)?.DATA ?? []).map((r) => ({
        key: `${p.slug}-${r.id}`,
        title: r.title,
        ingredients: r.ingredients ?? [],
        steps: r.steps ?? [],
        swaps: r.swaps,
        source: `${p.meta.title} · ${p.startDate.slice(0, 4)}`,
        to: `/plan/${p.slug}#meal-${r.id}`,
      }))
    );
    return [...weeks, ...COLLECTIONS];
    // eslint-disable-next-line react-hooks/exhaustive-deps -- loading signalisiert: Cache ist gefüllt
  }, [lang, dePlans, zhPlans, loading]);

  // Eingaben ins Deutsche übertragen; "said" merkt sich, was getippt wurde.
  const { terms, said, unknown } = useMemo(() => {
    const dict = buildDictionary(entries.filter((e) => e.zh).map(pairOf));
    const said = new Map<string, string>();
    const unknown: string[] = [];
    for (const f of fridge) {
      const de = toGerman(f, dict);
      if (de) said.set(de, f);
      else unknown.push(f);
    }
    return { terms: [...said.keys()], said, unknown };
  }, [entries, fridge]);

  const matches = useMemo(() => matchRecipes(entries, terms, pantry), [entries, terms, pantry]);
  const ready = matches.filter((m) => m.missing.length === 0);
  const swapped = matches.filter((m) => m.missing.length > 0 && m.open.length === 0);
  const almost = matches.filter((m) => m.open.length >= 1 && m.open.length <= 2);
  const rest = matches.filter((m) => m.open.length > 2);

  function add(text: string) {
    const parts = text.split(/[,;、，\n]/).map((s) => s.trim()).filter(Boolean);
    setFridge((old) => [...old, ...parts].filter((p, i, all) => all.findIndex((o) => o.toLowerCase() === p.toLowerCase()) === i));
    setInput("");
  }

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">冰箱 · {t("Was ist da?", "冰箱里有什么")}</div>
        <h1>{t("Kühlschrank", "冰箱找菜谱")}</h1>
        <p style={{ color: "var(--muted)" }}>
          {t("Zutaten eingeben, mit Komma trennen. Die Suche nimmt Rezepte aus allen Wochen und Sammlungen.", "输入家里的食材，用逗号分开。会在已翻译的每周菜单和备餐食谱里查找。")}
        </p>
      </header>

      <form className="fridge-form" onSubmit={(e) => { e.preventDefault(); add(input); }}>
        <input
          className="fridge-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("z. B. Eier, Tofu, Karotte", "例如 鸡蛋，豆腐，胡萝卜")}
          aria-label={t("Zutat hinzufügen", "添加食材")}
        />
        <button type="submit" className="prep-tab">{t("Hinzufügen", "添加")}</button>
      </form>

      {fridge.length > 0 && (
        <div className="fridge-chips">
          {fridge.map((f) => (
            <button key={f} type="button" className="fridge-chip" onClick={() => setFridge(fridge.filter((x) => x !== f))} aria-label={`${f} ${t("entfernen", "删除")}`}>
              {f} ×
            </button>
          ))}
          <button type="button" className="prep-card-toggle" onClick={() => setFridge([])}>{t("Alle entfernen", "清空")}</button>
        </div>
      )}

      <div className="fridge-chips">
        {(lang === "zh" ? QUICK_ZH : QUICK).filter((q) => !fridge.includes(q)).map((q) => (
          <button key={q} type="button" className="fridge-chip fridge-chip-quick" onClick={() => add(q)}>+ {q}</button>
        ))}
      </div>

      <label className="fridge-pantry">
        <input type="checkbox" checked={pantry} onChange={(e) => setPantry(e.target.checked)} />
        {t("Grundvorrat ist da (Reis, Öl, Sojasauce, Essig, Salz, Zucker, Mehl, Stärke, Sesam, Brühe)", "常备食材已有（米、油、酱油、醋、盐、糖、面粉、淀粉、芝麻、高汤）")}
      </label>

      {failed > 0 && <p className="fridge-hint">{t(`${failed} Wochen konnten nicht geladen werden. Bitte Seite neu laden.`, "部分菜单加载失败，请刷新。")}</p>}

      {!loading && unknown.length > 0 && (
        <p className="fridge-hint">{t("Nicht erkannt: ", "没认出来：")}{unknown.join(", ")}</p>
      )}

      <div aria-live="polite">
        {loading ? (
          <p className="fridge-hint">{t("Lädt alle Rezepte…", "加载中…")}</p>
        ) : fridge.length === 0 ? (
          <p className="fridge-hint">{t("Noch nichts im Kühlschrank.", "还没有食材。")}</p>
        ) : matches.length === 0 ? (
          <p className="fridge-hint">{t("Keine Treffer. Probier einen allgemeineren Begriff wie „Fisch“ oder „Pilze“.", "没有结果。")}</p>
        ) : (
          // key: neue Eingabe klappt die Listen wieder auf die erste Seite zurück
          <div key={`${fridge.join("|")}${pantry}${lang}`}>
            <Section t={t} said={said} items={ready} title={t("Passt sofort", "马上能做")} hint={t("Alle Zutaten sind da.", "食材齐全。")} />
            <Section t={t} said={said} items={swapped} title={t("Mit Ersatz machbar", "替换后能做")} hint={t("Was fehlt, lässt sich durch etwas Vorhandenes ersetzen.", "缺少的食材可以替换。")} />
            <Section t={t} said={said} items={almost} title={t("Fast: 1–2 Zutaten fehlen", "只差一两样")} hint={t("Kurz einkaufen oder weglassen.", "少量补买即可。")} />
            {ready.length + swapped.length + almost.length === 0 && (
              <Section t={t} said={said} items={rest} title={t("Alternativen", "其他建议")} hint={t("Verwerten etwas aus deinem Kühlschrank, brauchen aber mehr Einkauf.", "需要多买几样。")} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
