// Vorrat-Generator: Rohware und Menge eingeben → Wege wählen, Menge aufteilen, einfrieren.
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLang } from "./App";
import { WAYS, CUTS, Group, Origin, Art } from "./plans/vorrat";
import { GROUPS, ORIGIN_NAMES, ARTS } from "./plans/vorrat/labels";
import { toGrams, allocate, scaled, portions, Amount } from "./utils/vorrat";
import { Rating } from "./components/Rating";
import { isoDay } from "./utils/freezer";
import { useFreezer } from "./hooks/useFreezer";
import { ExportBar } from "./components/ExportBar";

const STORE = "mkt.planer";
type State = { cut: string; amount: number; unit: Amount; chosen: string[]; shares?: Record<string, number> };

function load(): State {
  const fallback: State = { cut: "huhn-schenkel", amount: 1, unit: "kg", chosen: [] };
  try {
    const v = JSON.parse(localStorage.getItem(STORE) ?? "null");
    return v && CUTS.some((c) => c.id === v.cut) && v.amount > 0 && ["g", "kg", "Stk"].includes(v.unit) && Array.isArray(v.chosen) ? v : fallback;
  } catch {
    return fallback;
  }
}

export function VorratPlanerPage() {
  const { lang } = useLang();
  const i = lang === "zh" ? 1 : 0;
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
  const [params] = useSearchParams();
  const [s, setS] = useState<State>(() => {
    const saved = load();
    // Sprung aus der Rezeptsammlung: ?zutat=… wählt die Rohware.
    const cut = params.get("zutat");
    return cut && cut !== saved.cut && CUTS.some((c) => c.id === cut) ? { ...saved, cut, chosen: [], shares: {} } : saved;
  });
  const [origin, setOrigin] = useState<Origin | "">("");
  const [art, setArt] = useState<Art | "">("");
  const freezer = useFreezer();
  useEffect(() => {
    try { localStorage.setItem(STORE, JSON.stringify(s)); } catch { /* privates Fenster */ }
  }, [s]);

  const cut = CUTS.find((c) => c.id === s.cut)!;
  const unit: Amount = s.unit === "Stk" && !cut.piece ? "g" : s.unit;
  const total = toGrams(s.amount || 0, unit, cut.piece);
  const ways = WAYS.filter((w) => w.cuts.includes(cut.id));
  const chosen = s.chosen.flatMap((id) => ways.filter((w) => w.id === id));
  // Eigene Anteile stehen in der gewählten Einheit (Stück bzw. Gramm). Der Rest wird gleich verteilt:
  // Stückware in ganzen Stück, alles andere in 10-g-Schritten.
  const pieces = unit === "Stk";
  const whole = pieces ? Math.round(s.amount || 0) : total;
  const shares = allocate(whole, chosen.map((w) => w.id), s.shares ?? {}, pieces ? 1 : 10);
  const parts = shares.map((n) => (pieces ? n * cut.piece! : n));
  const over = shares.reduce((a, b) => a + b, 0) - whole;
  const setShare = (id: string, value: string) => {
    const next = { ...s.shares };
    if (value === "") delete next[id];
    else next[id] = Math.max(0, Math.min(Math.round(Number(value)), 100000));
    setS({ ...s, shares: next });
  };
  const shownShare = (g: number) => (unit === "Stk" ? `${g / cut.piece!} ${t("Stück", "个")}` : `${g} ${t("g", "克")}`);

  const toggle = (id: string) => setS({ ...s, chosen: s.chosen.includes(id) ? s.chosen.filter((x) => x !== id) : [...s.chosen, id], shares: Object.fromEntries(Object.entries(s.shares ?? {}).filter(([k]) => k !== id)) });
  const shopping = chosen.flatMap((w, n) =>
    parts[n] ? w.ingredients.map((x) => ({ name: x[i] as string, amount: x[2], unit: x[3], grams: parts[n] })) : []
  );
  // Gleiche Zutat aus mehreren Wegen zusammenzählen.
  const lines = [...shopping.reduce((m, x) => {
    const key = `${x.name}|${x.unit}`;
    return m.set(key, { name: x.name, unit: x.unit, sum: (m.get(key)?.sum ?? 0) + (x.amount * x.grams) / 500 });
  }, new Map<string, { name: string; unit: (typeof shopping)[number]["unit"]; sum: number }>()).values()]
    .map((x) => `${x.name}: ${scaled(x.sum, x.unit, 500, lang)}`);

  return (
    <div className="main-inner planer" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">囤货 · {t("Aus dem Vorrat", "食材处理")}</div>
        <h1>{t("Was tun mit …?", "这些食材怎么做？")}</h1>
        <p style={{ color: "var(--muted)" }}>
          {t("Rohware und Menge eingeben, Wege wählen. Die Menge wird gleich aufgeteilt.", "选择食材和数量，再选做法。数量会平均分配。")}
        </p>
        <div className="export-bar ghk-no-print">
          <select className="prep-select" value={cut.id} aria-label={t("Rohware", "食材")} onChange={(e) => setS({ ...s, cut: e.target.value, chosen: [], shares: {} })}>
            {(Object.keys(GROUPS) as Group[]).map((g) => (
              <optgroup key={g} label={GROUPS[g][i]}>
                {CUTS.filter((c) => c.group === g).map((c) => <option key={c.id} value={c.id}>{c[lang]}</option>)}
              </optgroup>
            ))}
          </select>
          <input className="fridge-input planer-amount" type="number" min="0" step="any" inputMode="decimal" aria-label={t("Menge", "数量")}
            value={s.amount || ""} onChange={(e) => setS({ ...s, amount: Math.max(0, Math.min(Number(e.target.value), 100000)) })} />
          <select className="prep-select" value={unit} aria-label={t("Einheit", "单位")} onChange={(e) => setS({ ...s, unit: e.target.value as Amount, shares: {} })}>
            <option value="g">{t("g", "克")}</option>
            <option value="kg">{t("kg", "公斤")}</option>
            {cut.piece && <option value="Stk">{t("Stück", "个")}</option>}
          </select>
        </div>
        <p className="export-msg">
          {t(`Etwa ${total} g, rund ${portions(total)} Portionen.`, `约${total}克，大约${portions(total)}份。`)}
          {unit === "Stk" && t(` Gerechnet mit ${cut.piece} g je Stück.`, `按每个${cut.piece}克计算。`)}
        </p>
        <div className="export-bar ghk-no-print">
          <select className="prep-select" value={origin} aria-label={t("Herkunft", "菜系")} onChange={(e) => setOrigin(e.target.value as Origin | "")}>
            <option value="">{t("Jede Herkunft", "所有菜系")}</option>
            {(Object.keys(ORIGIN_NAMES) as Origin[]).filter((o) => ways.some((w) => w.origin === o)).map((o) => <option key={o} value={o}>{ORIGIN_NAMES[o][i]}</option>)}
          </select>
          <select className="prep-select" value={art} aria-label={t("Art", "方式")} onChange={(e) => setArt(e.target.value as Art | "")}>
            <option value="">{t("Jede Art", "所有方式")}</option>
            {(Object.keys(ARTS) as Art[]).map((a) => <option key={a} value={a}>{ARTS[a][i]}</option>)}
          </select>
        </div>
      </header>

      <div className="planer-list">
        {ways.filter((w) => s.chosen.includes(w.id) || ((!origin || w.origin === origin) && (!art || w.art === art))).map((w) => {
          const n = chosen.indexOf(w);
          const grams = n >= 0 ? parts[n] : total;
          const text = w[lang];
          const id = `vg-${w.id}-${isoDay(new Date())}`;
          const stored = freezer.items.some((f) => f.id === id);
          return (
            <article key={w.id} className={`fridge-card${n >= 0 ? " is-chosen" : ""}`}>
              <div className="prep-card-kicker">{ORIGIN_NAMES[w.origin][i]} · {ARTS[w.art][i]} · {t(`bis ${w.months} ${w.months === 1 ? "Monat" : "Monate"}`, `最长${w.months}个月`)}</div>
              <h3 className="prep-card-title">{text.title}</h3>
              <button type="button" className="prep-tab ghk-no-print" aria-pressed={n >= 0} onClick={() => toggle(w.id)}>
                {n >= 0 ? t(`Gewählt: ${shownShare(grams)}`, `已选：${shownShare(grams)}`) : t("Wählen", "选择")}
              </button>
              {n >= 0 && (
                <label className="planer-share ghk-no-print">
                  {t("Anteil", "份量")}
                  <input type="number" className="fridge-input planer-amount" min={0} inputMode="numeric" value={s.shares?.[w.id] ?? ""} placeholder={String(shares[n])} onChange={(e) => setShare(w.id, e.target.value)} />
                  {pieces ? t("Stück", "个") : t("g", "克")}{s.shares?.[w.id] === undefined && t(" (automatisch)", "（自动）")}
                </label>
              )}
              <details>
                <summary className="prep-card-toggle">{t("Rezept ansehen", "查看做法")}</summary>
                <p className="fridge-line">{t(`Zutaten für ${grams} g ${cut.de}`, `${grams}克${cut.zh}所需配料`)}:</p>
                <div className="prep-ingredients">
                  {w.ingredients.map((x) => <span key={x[0]} className="prep-ingredient-chip">{x[i]} {scaled(x[2], x[3], grams, lang)}</span>)}
                </div>
                <ol className="prep-steps">{text.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                <p className="fridge-line"><strong>{t("Einfrieren", "冷冻")}:</strong> {text.freeze}</p>
                <p className="fridge-line"><strong>{t("Auftischen", "加热食用")}:</strong> {text.reheat}</p>
              </details>
              {n >= 0 && grams > 0 && (
                <button type="button" className="prep-tab ghk-no-print" disabled={stored}
                  onClick={() => freezer.add({ id, name: text.title, portions: Math.min(portions(grams), 999), frozenOn: isoDay(new Date()), months: w.months })}>
                  {stored ? t("Im Gefrierschrank eingetragen", "已记入冷冻室") : t(`Als eingefroren eintragen (${portions(grams)} Port.)`, `记为已冷冻（${portions(grams)}份）`)}
                </button>
              )}
              <div><Rating title={w.de.title} /></div>
            </article>
          );
        })}
      </div>

      {chosen.length > 0 && over !== 0 && (
        <p className="export-msg" role="status">
          {over > 0
            ? t(`Die Anteile ergeben ${over} ${pieces ? "Stück" : "g"} mehr, als da ist.`, `份量比现有的多${over}${pieces ? "个" : "克"}。`)
            : t(`Noch ${-over} ${pieces ? "Stück" : "g"} nicht verteilt.`, `还有${-over}${pieces ? "个" : "克"}没有分配。`)}
        </p>
      )}

      {lines.length > 0 && (
        <section className="planer-shop">
          <h2>{t("Zutaten für alle gewählten Wege", "所选做法的配料")}</h2>
          <ul>{lines.map((l) => <li key={l}>{l}</li>)}</ul>
          <ExportBar lines={lines} />
        </section>
      )}
      <p className="export-msg">
        {t("Rezepte nicht probegekocht. Rohes rasch verarbeiten; bereits Aufgetautes erst durchgaren, dann einfrieren. Bei Sojasauce, Miso, Pasten und fertigen Teigblättern auf der Packung nach Alkohol schauen.", "这些菜谱未经试做。生食材要尽快处理；解冻过的要先做熟再冷冻。酱油、味噌、各种酱料和现成面皮请查看配料表是否含酒精。")}{" "}
        <Link to="/gefrierschrank">{t("Zum Gefrierschrank →", "去冷冻室 →")}</Link>
      </p>
    </div>
  );
}
