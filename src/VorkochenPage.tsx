// src/VorkochenPage.tsx
// Vorkochplan als Buchrolle: ein Faden, vier Stationen, Stempel 済 wenn ein Wochenende fertig ist.
// Bewusst ohne Datum (Seite ist öffentlich), die Termine stehen im privaten Kalender.
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "./App";
import { localizedPrep } from "./plans/prep/localized";
import { SHOP_ZH } from "./plans/prep/shop.zh";
import { PREP_RECIPES, PREP_SCHEDULE, PrepRecipe } from "./plans/prep/preppen";
import { shoppingList, formatLine, STORES } from "./utils/shoppingList";
import { useStoredSet } from "./hooks/useStoredSet";
import { ExportBar } from "./components/ExportBar";
import { PawPrint } from "./components/Cats";

const NUM = ["一", "二", "三", "四"];
// "Festtage Di, Rest als Reserve" → Chinesisch
const USE_ZH: [RegExp, string][] = [
  [/Festtage /g, "节日周 "], [/Woche 1 /g, "第1周 "], [/Rest als Reserve/g, "余下备用"], [/Silvester/g, "除夕(31.12)"], [/Neujahr/g, "元旦"],
  [/Basis für das Sesamöl-Huhn – zuerst kochen/g, "麻油鸡的汤底，先做"], [/halbe Menge reicht, Jod/g, "做一半即可（碘）"],
  [/\bMo\b/g, "周一"], [/\bDi\b/g, "周二"], [/\bMi\b/g, "周三"], [/\bDo\b/g, "周四"], [/\bFr\b/g, "周五"], [/\bSa\b/g, "周六"], [/\bSo\b/g, "周日"],
];
const zhUse = (s: string) => USE_ZH.reduce((x, [re, z]) => x.replace(re, z), s);
const times = (f: number) => `${String(f).replace(".", ",")}×`;

function Dish({ recipe, factor, use, done, onToggle }: { recipe: PrepRecipe; factor: number; use: string; done: boolean; onToggle: () => void }) {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
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
        {open ? t("Schließen", "收起") : t("Rezept", "做法")}
      </button>
      {open && (
        <div className="roll-recipe">
          <p>{recipe.batchSize}{factor !== 1 && t(` · hier ${times(factor)} kochen (Mengen unten: 1×)`, ` · 这次做${times(factor)}（下面是1份的量）`)}</p>
          <div className="prep-ingredients">{recipe.ingredients.map((i) => <span key={i} className="prep-ingredient-chip">{i}</span>)}</div>
          <ol className="prep-steps">{recipe.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          <p><strong>{t("Einfrieren:", "冷冻：")}</strong> {recipe.freezeMethod} {recipe.freezerLife}. <strong>{t("Aufwärmen:", "加热：")}</strong> {recipe.reheat}</p>
        </div>
      )}
    </li>
  );
}

export function VorkochenPage() {
  const { lang } = useLang();
  const zh = lang === "zh";
  const t = (de: string, cn: string) => (zh ? cn : de);
  const shop = (s: string) => (zh ? SHOP_ZH[s] ?? s : s);
  const cooked = useStoredSet("mkt.vorkochen.done");
  const bought = useStoredSet("mkt.vorkochen.bought");

  const stations = useMemo(
    () =>
      PREP_SCHEDULE.map((w) => {
        const dishes = w.items.map((i) => ({ ...i, recipe: localizedPrep(i.id, lang) }));
        // Einkaufsliste immer aus dem deutschen Original rechnen, nur die Namen übersetzen.
        const list = shoppingList(w.items.map((i) => ({ ingredients: PREP_RECIPES.find((r) => r.id === i.id)!.ingredients, factor: i.factor })));
        return { ...w, dishes, list };
      }),
    [lang]
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
        <div className="prep-kicker">備え · {t("Vorrat fürs Wochenbett", "月子储备")}</div>
        <h1>{t("Vorkochen", "提前备餐")}</h1>
        <p style={{ color: "var(--muted)" }}>
          {t("Vier Wochenenden, ein voller Gefrierschrank. Haken bleiben in diesem Browser gespeichert.", "四个周末，装满冷冻室。勾选记录保存在本浏览器。")}
        </p>
        <div className="roll-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} aria-label={t("Gekochte Rezepte", "已做的菜")}>
          <span style={{ width: `${(done / total) * 100}%` }} />
        </div>
        <p className="export-msg">{t(`${done} von ${total} gekocht`, `已做${done} / ${total}`)}</p>
      </header>

      <ol className="roll">
        {stations.map((s, i) => {
          const n = doneIn(s);
          const complete = n === s.dishes.length;
          const open = openIndex === i;
          const lines = STORES.flatMap((store) => s.list[store].map((l) => ({ key: `${i}:${l.name}|${l.unit}`, store, text: formatLine(zh ? { ...l, name: shop(l.name), unit: shop(l.unit) } : l) })));
          const missing = lines.filter((l) => !bought.has(l.key));
          return (
            <li key={s.title} className={`roll-station${complete ? " is-complete" : ""}${i === current ? " is-current" : ""}`}>
              <span className="roll-node" aria-hidden="true">{NUM[i]}</span>
              <h2>
                <button type="button" aria-expanded={open} onClick={() => setChosen(open ? -1 : i)}>
                  <span className="roll-when">{t(s.title, `第${i + 1}个周末`)}</span>
                  <span className="roll-focus">{t(s.focus, s.zhFocus)}</span>
                  <span className="roll-count">{n} / {s.dishes.length}</span>
                </button>
                {complete && <span className="roll-stamp" role="img" aria-label={t("erledigt", "完成")}>済</span>}
                {complete && <span className="roll-paw"><PawPrint /></span>}
              </h2>
              {open && (
                <div className="roll-body">
                  <ul className="roll-dishes">
                    {s.dishes.map((d) => (
                      <Dish key={d.id} recipe={d.recipe} factor={d.factor} use={t(d.use, zhUse(d.use))} done={cooked.has(d.id)} onToggle={() => cooked.toggle(d.id)} />
                    ))}
                  </ul>
                  <aside className="roll-slip">
                    <h3><span aria-hidden="true">買物</span> {t("Einkaufszettel", "购物单")}</h3>
                    {STORES.filter((store) => s.list[store].length).map((store) => (
                      <div key={store}>
                        <div className="prep-card-label">{shop(store)}</div>
                        {lines.filter((l) => l.store === store).map((l) => (
                          <label key={l.key} className="check-row">
                            <input type="checkbox" checked={bought.has(l.key)} onChange={() => bought.toggle(l.key)} />
                            <span>{l.text}</span>
                          </label>
                        ))}
                      </div>
                    ))}
                    <p className="export-msg">{t("Export nimmt nur, was noch nicht abgehakt ist.", "只复制还没勾选的。")}</p>
                    <ExportBar lines={missing.map((l) => `${l.text} (${shop(l.store)})`)} />
                  </aside>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {zh ? (
        <p className="export-msg">酱料、调料、油、味噌、大酱和鲣鱼花不在购物单上，见<Link to="/vorratskammer">储藏室</Link>。新鲜配菜见每周菜单。做好的食物写上日期，尽快放凉，只解冻一次并彻底热透。</p>
      ) : (
      <p className="export-msg">
        Saucen, Gewürze, Öle, Miso, Doenjang und Katsuobushi stehen nicht auf den Zetteln, siehe <Link to="/vorratskammer">Vorratskammer</Link>.
        Frische Beilagen stehen beim jeweiligen Wochenplan. Alles beschriften, rasch abkühlen, nur einmal auftauen und durchgehend heiß erhitzen.
      </p>
      )}
    </div>
  );
}
