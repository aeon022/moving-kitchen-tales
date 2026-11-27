// src/VorratskammerPage.tsx
// Vorratskammer: Must-haves der Küche. Haken = "nachkaufen", daraus entsteht eine Einkaufsliste.
import React, { useEffect, useState } from "react";
import { PANTRY_GROUPS } from "./plans/pantry";
import { STORES } from "./utils/shoppingList";
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
  const [buy, setBuy] = useState<string[]>(load);
  useEffect(() => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(buy)); } catch { /* privates Fenster */ }
  }, [buy]);

  const wanted = PANTRY_GROUPS.flatMap((g) => g.items).filter((i) => buy.includes(i.name));
  const text = STORES.map((s) => ({ s, list: wanted.filter((i) => i.store === s) }))
    .filter((x) => x.list.length)
    .map((x) => [x.s, ...x.list.map((i) => `- ${i.name}`)].join("\n"))
    .join("\n\n");

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">常備 · Grundvorrat</div>
        <h1>Vorratskammer</h1>
        <p style={{ color: "var(--muted)" }}>
          Was immer da sein sollte. Fehlt etwas, abhaken – daraus entsteht deine Nachkaufliste. Bei Saucen und Pasten aufs Etikett schauen: möglichst ohne Alkoholzusatz.
        </p>
      </header>

      {wanted.length > 0 && (
        <div className="prep-notice" style={{ marginTop: 0 }}>
          <p><strong>Nachkaufen ({wanted.length})</strong></p>
          <pre className="pantry-list">{text}</pre>
          <ExportBar lines={wanted.map((i) => `${i.name} (${i.store})`)} />
          <button type="button" className="prep-card-toggle" onClick={() => setBuy([])}>Liste leeren</button>
        </div>
      )}

      <div className="prep-grid">
        {PANTRY_GROUPS.map((g) => (
          <section key={g.title} className="fridge-card">
            <h3 className="prep-type-label"><span className="prep-type-num" aria-hidden="true">{g.jp}</span>{g.title}</h3>
            {g.items.map((i) => (
              <label key={i.name} className="check-row">
                <input
                  type="checkbox"
                  checked={buy.includes(i.name)}
                  onChange={(e) => setBuy(e.target.checked ? [...buy, i.name] : buy.filter((n) => n !== i.name))}
                />
                <span>{i.name}<small>{i.use} · {i.store}</small></span>
              </label>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
