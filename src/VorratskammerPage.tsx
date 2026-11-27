// src/VorratskammerPage.tsx
// Vorratskammer: Must-haves der Küche. Haken = "nachkaufen", daraus entsteht eine Einkaufsliste.
import React, { useEffect, useState } from "react";
import { PANTRY_GROUPS } from "./plans/pantry";
import { STORES } from "./utils/shoppingList";
import { useLang } from "./App";
import { SHOP_ZH } from "./plans/prep/shop.zh";
import { ExportBar } from "./components/ExportBar";

const STORE_KEY = "mkt.pantry.buy";

function load(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(STORE_KEY) ?? "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export function VorratskammerPage() {
  const { lang } = useLang();
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
  const storeName = (s: string) => (lang === "zh" ? SHOP_ZH[s] ?? s : s);
  const [buy, setBuy] = useState<string[]>(load);
  useEffect(() => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(buy)); } catch { /* privates Fenster */ }
  }, [buy]);

  const wanted = PANTRY_GROUPS.flatMap((g) => g.items).filter((i) => buy.includes(i.name));
  const text = STORES.map((s) => ({ s, list: wanted.filter((i) => i.store === s) }))
    .filter((x) => x.list.length)
    .map((x) => [storeName(x.s), ...x.list.map((i) => `- ${t(i.name, i.zh)}`)].join("\n"))
    .join("\n\n");

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">常備 · {t("Grundvorrat", "常备食材")}</div>
        <h1>{t("Vorratskammer", "储藏室")}</h1>
        <p style={{ color: "var(--muted)" }}>
          {t("Was immer da sein sollte. Fehlt etwas, abhaken – daraus entsteht deine Nachkaufliste. Bei Saucen und Pasten aufs Etikett schauen: möglichst ohne Alkoholzusatz.", "家里应该常备的东西。缺了就打勾，会生成补货清单。买酱料请看配料表，尽量选不含酒精的。")}
        </p>
      </header>

      {wanted.length > 0 && (
        <div className="prep-notice" style={{ marginTop: 0 }}>
          <p><strong>{t("Nachkaufen", "需要补货")} ({wanted.length})</strong></p>
          <pre className="pantry-list">{text}</pre>
          <ExportBar lines={wanted.map((i) => `${t(i.name, i.zh)} (${storeName(i.store)})`)} />
          <button type="button" className="prep-card-toggle" onClick={() => setBuy([])}>{t("Liste leeren", "清空")}</button>
        </div>
      )}

      <div className="prep-grid">
        {PANTRY_GROUPS.map((g) => (
          <section key={g.title} className="fridge-card">
            <h3 className="prep-type-label"><span className="prep-type-num" aria-hidden="true">{g.jp}</span>{t(g.title, g.zh)}</h3>
            {g.items.map((i) => (
              <label key={i.name} className="check-row">
                <input
                  type="checkbox"
                  checked={buy.includes(i.name)}
                  onChange={(e) => setBuy(e.target.checked ? [...buy, i.name] : buy.filter((n) => n !== i.name))}
                />
                <span>{t(i.name, i.zh)}<small>{t(i.use, i.zhUse)} · {storeName(i.store)}</small></span>
              </label>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
