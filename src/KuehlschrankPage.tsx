// src/KuehlschrankPage.tsx
// "Kühlschrank": vorhandene Zutaten eingeben → passende Rezepte aus der ganzen Sammlung,
// dazu Alternativen mit Ersatzzutaten. Abgleich: utils/fridgeMatch.ts.
// Durchsucht immer die deutschen Rezepte (der Abgleich arbeitet mit deutschen Zutatennamen).
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLang, planDataCache, loadPlanData, PlanRecord } from "./App";
import { COLD_DISHES } from "./plans/coldDishes";
import { FESTIVE_DISHES } from "./plans/festtagsgerichte";
import { PREP_RECIPES } from "./plans/prep/preppen";
import { matchRecipes, Match, Ingredient } from "./utils/fridgeMatch";

type Entry = {
  key: string;
  title: string;
  ingredients: Ingredient[];
  steps: string[];
  swaps?: string;
  source: string;
  to: string;
};

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

function ResultCard({ m, t }: { m: Match<Entry>; t: (de: string, zh: string) => string }) {
  const r = m.recipe;
  return (
    <article className="fridge-card">
      <div className="prep-card-kicker">{r.source}</div>
      <h3 className="prep-card-title">{r.title}</h3>
      <p className="fridge-line"><strong>{t("Vorhanden", "已有")}:</strong> {m.have.join(", ")}</p>
      {m.substitutes.length > 0 && (
        <p className="fridge-line fridge-sub">
          <strong>{t("Ersatz", "替换")}:</strong> {m.substitutes.map((s) => `${s.use} ${t("statt", "代替")} ${s.missing}`).join(", ")}
        </p>
      )}
      {m.open.length > 0 && <p className="fridge-line"><strong>{t("Fehlt", "缺少")}:</strong> {m.open.join(", ")}</p>}
      <details>
        <summary className="prep-card-toggle">{t("Rezept ansehen", "查看做法")}</summary>
        <div className="prep-ingredients" style={{ marginTop: 12 }}>
          {r.ingredients.map((i, idx) => <span key={idx} className="prep-ingredient-chip">{typeof i === "string" ? i : i.name}</span>)}
        </div>
        <ol className="prep-steps">{r.steps.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
        {r.swaps && r.swaps !== "-" && <p className="fridge-line">{t("Austausche", "替换")}: {r.swaps}</p>}
        <Link to={r.to} className="prep-card-toggle">{t("In der Sammlung öffnen →", "打开所在页面 →")}</Link>
      </details>
    </article>
  );
}

function Section({ title, hint, items, t }: { title: string; hint: string; items: Match<Entry>[]; t: (de: string, zh: string) => string }) {
  const [limit, setLimit] = useState(PAGE);
  if (!items.length) return null;
  return (
    <section style={{ marginBottom: 32 }}>
      <h2 className="fridge-heading">{title} <span>{items.length}</span></h2>
      <p className="fridge-hint">{hint}</p>
      <div className="prep-grid">
        {items.slice(0, limit).map((m) => <ResultCard key={m.recipe.key} m={m} t={t} />)}
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

  useEffect(() => {
    let alive = true;
    Promise.allSettled(dePlans.map(loadPlanData)).then((res) => {
      if (!alive) return;
      setFailed(res.filter((r) => r.status === "rejected").length);
      setLoading(false);
    });
    return () => { alive = false; };
  }, [dePlans]);

  const entries = useMemo(() => {
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
  }, [dePlans, loading]);

  const matches = useMemo(() => matchRecipes(entries, fridge, pantry), [entries, fridge, pantry]);
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
          {t("Zutaten eingeben, mit Komma trennen. Die Suche nimmt Rezepte aus allen Wochen und Sammlungen.", "请用德语输入食材，用逗号分隔。")}
        </p>
      </header>

      <form className="fridge-form" onSubmit={(e) => { e.preventDefault(); add(input); }}>
        <input
          className="fridge-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("z. B. Eier, Tofu, Karotte", "例如 Eier, Tofu")}
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
        {QUICK.filter((q) => !fridge.includes(q)).map((q) => (
          <button key={q} type="button" className="fridge-chip fridge-chip-quick" onClick={() => add(q)}>+ {q}</button>
        ))}
      </div>

      <label className="fridge-pantry">
        <input type="checkbox" checked={pantry} onChange={(e) => setPantry(e.target.checked)} />
        {t("Grundvorrat ist da (Reis, Öl, Sojasauce, Essig, Salz, Zucker, Mehl, Stärke, Sesam, Brühe)", "常备食材已有（米、油、酱油等）")}
      </label>

      {failed > 0 && <p className="fridge-hint">{t(`${failed} Wochen konnten nicht geladen werden. Bitte Seite neu laden.`, "部分菜单加载失败，请刷新。")}</p>}

      <div aria-live="polite">
        {loading ? (
          <p className="fridge-hint">{t("Lädt alle Rezepte…", "加载中…")}</p>
        ) : fridge.length === 0 ? (
          <p className="fridge-hint">{t("Noch nichts im Kühlschrank.", "还没有食材。")}</p>
        ) : matches.length === 0 ? (
          <p className="fridge-hint">{t("Keine Treffer. Probier einen allgemeineren Begriff wie „Fisch“ oder „Pilze“.", "没有结果。")}</p>
        ) : (
          // key: neue Eingabe klappt die Listen wieder auf die erste Seite zurück
          <div key={`${fridge.join("|")}${pantry}`}>
            <Section t={t} items={ready} title={t("Passt sofort", "马上能做")} hint={t("Alle Zutaten sind da.", "食材齐全。")} />
            <Section t={t} items={swapped} title={t("Mit Ersatz machbar", "替换后能做")} hint={t("Was fehlt, lässt sich durch etwas Vorhandenes ersetzen.", "缺少的食材可以替换。")} />
            <Section t={t} items={almost} title={t("Fast: 1–2 Zutaten fehlen", "只差一两样")} hint={t("Kurz einkaufen oder weglassen.", "少量补买即可。")} />
            {ready.length + swapped.length + almost.length === 0 && (
              <Section t={t} items={rest} title={t("Alternativen", "其他建议")} hint={t("Verwerten etwas aus deinem Kühlschrank, brauchen aber mehr Einkauf.", "需要多买几样。")} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
