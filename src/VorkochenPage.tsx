// src/VorkochenPage.tsx
// Vorkochplan als Buchrolle: ein Faden, vier Stationen, Stempel 済 wenn ein Wochenende fertig ist.
// Bewusst ohne Datum (Seite ist öffentlich), die Termine stehen im privaten Kalender.
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PREP_RECIPES, PREP_SCHEDULE, PrepRecipe } from "./plans/prep/preppen";
import { shoppingList, formatLine, STORES } from "./utils/shoppingList";
import { useStoredSet } from "./hooks/useStoredSet";
import { ExportBar } from "./components/ExportBar";

const NUM = ["一", "二", "三", "四"];
const times = (f: number) => `${String(f).replace(".", ",")}×`;

function Dish({ recipe, factor, use, done, onToggle }: { recipe: PrepRecipe; factor: number; use: string; done: boolean; onToggle: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <li className={`roll-dish${done ? " is-done" : ""}`}>
      <label>
        <input type="checkbox" checked={done} onChange={onToggle} />
        <span>
          <span className="roll-dish-title">{factor !== 1 && <strong>{times(factor)} </strong>}{recipe.title}</span>
          <small>{use}</small>
        </span>
      </label>
      <button type="button" className="prep-card-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? "Schließen" : "Rezept"}
      </button>
      {open && (
        <div className="roll-recipe">
          <p>{recipe.batchSize}{factor !== 1 && ` · hier ${times(factor)} kochen (Mengen unten: 1×)`}</p>
          <div className="prep-ingredients">{recipe.ingredients.map((i) => <span key={i} className="prep-ingredient-chip">{i}</span>)}</div>
          <ol className="prep-steps">{recipe.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          <p><strong>Einfrieren:</strong> {recipe.freezeMethod} {recipe.freezerLife}. <strong>Aufwärmen:</strong> {recipe.reheat}</p>
        </div>
      )}
    </li>
  );
}

export function VorkochenPage() {
  const cooked = useStoredSet("mkt.vorkochen.done");
  const bought = useStoredSet("mkt.vorkochen.bought");

  const stations = useMemo(
    () =>
      PREP_SCHEDULE.map((w) => {
        const dishes = w.items.map((i) => ({ ...i, recipe: PREP_RECIPES.find((r) => r.id === i.id)! }));
        return { ...w, dishes, list: shoppingList(dishes.map((d) => ({ ingredients: d.recipe.ingredients, factor: d.factor }))) };
      }),
    []
  );
  const doneIn = (s: (typeof stations)[number]) => s.dishes.filter((d) => cooked.has(d.id)).length;
  const total = stations.reduce((n, s) => n + s.dishes.length, 0);
  const done = stations.reduce((n, s) => n + doneIn(s), 0);
  const current = stations.findIndex((s) => doneIn(s) < s.dishes.length);

  // Ohne eigenen Klick ist die aktuelle Station offen.
  const [chosen, setChosen] = useState<number | null>(null);
  const [initial] = useState(() => Math.max(current, 0));
  const openIndex = chosen ?? initial;

  return (
    <div className="main-inner" style={{ padding: "0 20px" }}>
      <header className="prep-header">
        <div className="prep-kicker">備え · Vorrat fürs Wochenbett</div>
        <h1>Vorkochen</h1>
        <p style={{ color: "var(--muted)" }}>
          Vier Wochenenden, ein voller Gefrierschrank. Haken bleiben in diesem Browser gespeichert.
        </p>
        <div className="roll-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} aria-label="Gekochte Rezepte">
          <span style={{ width: `${(done / total) * 100}%` }} />
        </div>
        <p className="export-msg">{done} von {total} gekocht</p>
      </header>

      <ol className="roll">
        {stations.map((s, i) => {
          const n = doneIn(s);
          const complete = n === s.dishes.length;
          const open = openIndex === i;
          const lines = STORES.flatMap((store) => s.list[store].map((l) => ({ key: `${i}:${l.name}|${l.unit}`, store, text: formatLine(l) })));
          const missing = lines.filter((l) => !bought.has(l.key));
          return (
            <li key={s.title} className={`roll-station${complete ? " is-complete" : ""}${i === current ? " is-current" : ""}`}>
              <span className="roll-node" aria-hidden="true">{NUM[i]}</span>
              <h2>
                <button type="button" aria-expanded={open} onClick={() => setChosen(open ? -1 : i)}>
                  <span className="roll-when">{s.title}</span>
                  <span className="roll-focus">{s.focus}</span>
                  <span className="roll-count">{n} / {s.dishes.length}</span>
                </button>
                {complete && <span className="roll-stamp" role="img" aria-label="erledigt">済</span>}
              </h2>
              {open && (
                <div className="roll-body">
                  <ul className="roll-dishes">
                    {s.dishes.map((d) => (
                      <Dish key={d.id} recipe={d.recipe} factor={d.factor} use={d.use} done={cooked.has(d.id)} onToggle={() => cooked.toggle(d.id)} />
                    ))}
                  </ul>
                  <aside className="roll-slip">
                    <h3><span aria-hidden="true">買物</span> Einkaufszettel</h3>
                    {STORES.filter((store) => s.list[store].length).map((store) => (
                      <div key={store}>
                        <div className="prep-card-label">{store}</div>
                        {lines.filter((l) => l.store === store).map((l) => (
                          <label key={l.key} className="check-row">
                            <input type="checkbox" checked={bought.has(l.key)} onChange={() => bought.toggle(l.key)} />
                            <span>{l.text}</span>
                          </label>
                        ))}
                      </div>
                    ))}
                    <p className="export-msg">Export nimmt nur, was noch nicht abgehakt ist.</p>
                    <ExportBar lines={missing.map((l) => `${l.text} (${l.store})`)} />
                  </aside>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <p className="export-msg">
        Saucen, Gewürze, Öle, Miso, Doenjang und Katsuobushi stehen nicht auf den Zetteln, siehe <Link to="/vorratskammer">Vorratskammer</Link>.
        Frische Beilagen stehen beim jeweiligen Wochenplan. Alles beschriften, rasch abkühlen, nur einmal auftauen und durchgehend heiß erhitzen.
      </p>
    </div>
  );
}
