// src/GefrierschrankPage.tsx
// Was liegt im Eis? Einträge kommen beim Abhaken im Vorkochplan dazu oder von Hand.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "./App";
import { useFreezer } from "./hooks/useFreezer";
import { daysLeft, isoDay, eatBy } from "./utils/freezer";
import { localizedRecipes } from "./plans/prep/localized";
import { ShareState } from "./TeilenPage";

export function GefrierschrankPage() {
  const { lang } = useLang();
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
  const freezer = useFreezer();
  const recipes = localizedRecipes(lang);
  const [name, setName] = useState("");
  const [portions, setPortions] = useState(2);
  const [months, setMonths] = useState(1);
  const today = new Date();
  const sorted = [...freezer.items].sort((a, b) => eatBy(a).localeCompare(eatBy(b)));
  const total = sorted.reduce((n, f) => n + f.portions, 0);

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">冷凍 · {t("Bestand", "库存")}</div>
        <h1>{t("Gefrierschrank", "冷冻室")}</h1>
        <p style={{ color: "var(--muted)" }}>
          {t("Was im Vorkochplan abgehakt wird, landet hier. Zuerst essen, was oben steht.", "备餐计划里勾选的菜会出现在这里。请先吃排在前面的。")}
        </p>
        <p className="export-msg">{t(`${sorted.length} Gerichte · ${total} Portionen`, `${sorted.length} 种菜 · ${total} 份`)}</p>
      </header>

      {sorted.length === 0 ? (
        <p className="fridge-hint">{t("Noch leer.", "还是空的。")} <Link to="/vorkochen">{t("Zum Vorkochplan →", "去备餐计划 →")}</Link></p>
      ) : (
        <ul className="freezer-list">
          {sorted.map((f) => {
            const left = daysLeft(f, today);
            const title = recipes.find((r) => r.id === f.id)?.title ?? f.name;
            return (
              <li key={f.id} className={left < 0 ? "is-over" : left <= 7 ? "is-soon" : ""}>
                <div>
                  <strong>{title}</strong>
                  <small>
                    {t("eingefroren", "冷冻于")}{" "}
                    <input type="date" value={f.frozenOn} max={isoDay(today)} onChange={(e) => e.target.value && freezer.update(f.id, { frozenOn: e.target.value })} aria-label={t("Eingefroren am", "冷冻日期")} />
                    {" · "}{t("verbrauchen bis", "最好在此之前吃完")} {eatBy(f)}
                    {left < 0 ? t(" · abgelaufen", " · 已过期") : left <= 7 ? t(" · bald essen", " · 尽快吃") : ""}
                  </small>
                </div>
                <div className="freezer-count">
                  <button type="button" onClick={() => freezer.update(f.id, { portions: f.portions - 1 })} aria-label={t("Eine Portion entnehmen", "取出一份")}>−</button>
                  <span>{f.portions}</span>
                  <button type="button" onClick={() => freezer.update(f.id, { portions: f.portions + 1 })} aria-label={t("Eine Portion dazu", "增加一份")}>+</button>
                  <button type="button" onClick={() => freezer.remove(f.id)} aria-label={t("Entfernen", "删除")}>×</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <form
        className="freezer-add"
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim()) return;
          freezer.add({ id: `own-${Date.now()}`, name: name.trim(), portions: Math.max(1, Math.round(portions) || 1), frozenOn: isoDay(new Date()), months });
          setName("");
        }}
      >
        <input className="fridge-input" value={name} onChange={(e) => setName(e.target.value)} placeholder={t("Selbst eintragen, z. B. Jiaozi", "手动添加，例如 饺子")} aria-label={t("Gericht", "菜名")} maxLength={120} />
        <label>{t("Portionen", "份数")} <input type="number" min={1} max={99} value={portions} onChange={(e) => setPortions(Number(e.target.value))} /></label>
        <label>{t("Haltbar", "保存")} <select value={months} onChange={(e) => setMonths(Number(e.target.value))}>{[1, 2, 3].map((m) => <option key={m} value={m}>{m} {t("Mon.", "个月")}</option>)}</select></label>
        <button type="submit" className="prep-tab">{t("Hinzufügen", "添加")}</button>
      </form>

      <ShareState />
    </div>
  );
}
