// Etiketten für Dosen und Beutel: Name zweisprachig, Datum, Aufwärmen. Zum Ausdrucken und Aufkleben.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "./App";
import { useFreezer } from "./hooks/useFreezer";
import { labelsFor } from "./utils/labels";
import { PREP_RECIPES } from "./plans/prep/preppen";
import { localizedRecipes } from "./plans/prep/localized";
import { WAYS } from "./plans/vorrat";

const day = (iso: string) => iso.split("-").reverse().join(".");

export function EtikettenPage() {
  const { lang } = useLang();
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
  const { items } = useFreezer();
  const [off, setOff] = useState<string[]>([]);
  const [copies, setCopies] = useState(2);
  const zhPrep = localizedRecipes("zh");
  const labels = labelsFor(items, { prep: PREP_RECIPES.map((r, i) => ({ id: r.id, de: r, zh: zhPrep[i] })), ways: WAYS });
  const printed = labels.filter((l) => !off.includes(l.id)).flatMap((l) => Array.from({ length: copies }, (_, n) => ({ ...l, key: `${l.id}-${n}` })));

  return (
    <div className="main-inner etiketten" style={{ padding: "0 20px" }}>
      <header className="prep-header ghk-no-print">
        <div className="prep-kicker">标签 · {t("Für Dosen und Beutel", "贴在盒子和袋子上")}</div>
        <h1>{t("Etiketten", "标签")}</h1>
        {items.length === 0 ? (
          <p className="fridge-hint">{t("Der Gefrierschrank ist noch leer.", "冷冻室还是空的。")} <Link to="/gefrierschrank">{t("Zum Gefrierschrank →", "去冷冻室 →")}</Link></p>
        ) : (
          <>
            {labels.map((l) => (
              <label key={l.id} className="check-row">
                <input type="checkbox" checked={!off.includes(l.id)} onChange={() => setOff(off.includes(l.id) ? off.filter((x) => x !== l.id) : [...off, l.id])} />
                <span>{lang === "zh" && l.zh ? l.zh.title : l.de.title}</span>
              </label>
            ))}
            <div className="export-bar">
              <label>{t("Je Gericht", "每道菜")} <input type="number" className="fridge-input planer-amount" min={1} max={12} value={copies} onChange={(e) => setCopies(Math.max(1, Math.min(12, Number(e.target.value) || 1)))} /></label>
              <button type="button" className="prep-tab" disabled={!printed.length} onClick={() => window.print()}>{t(`${printed.length} Etiketten drucken`, `打印${printed.length}张标签`)}</button>
            </div>
          </>
        )}
      </header>
      <div className="label-sheet">
        {printed.map((l) => (
          <div key={l.key} className="label">
            <strong>{l.de.title}</strong>
            {l.zh && <strong lang="zh-CN">{l.zh.title}</strong>}
            <div className="label-dates">eingefroren 冷冻 {day(l.frozenOn)}<br /><b>verbrauchen bis 期限 {day(l.until)}</b></div>
            {l.de.reheat && <p>{l.de.reheat}</p>}
            {l.zh && <p lang="zh-CN">{l.zh.reheat}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
