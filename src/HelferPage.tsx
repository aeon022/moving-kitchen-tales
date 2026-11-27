// src/HelferPage.tsx
// Zettel für alle, die einspringen: was heute gekocht wird, was am Vorabend aus dem Eis muss,
// zweisprachig und zum Ausdrucken. Dazu Auftau-Erinnerungen für taskctl.
import React, { useEffect, useMemo, useState } from "react";
import { useLang, loadPlanData, planDataCache, PlanRecord } from "./App";
import { PREP_RECIPES } from "./plans/prep/preppen";
import { localizedRecipes } from "./plans/prep/localized";
import { thawList } from "./utils/thaw";
import { isoDay } from "./utils/freezer";
import { taskctlCommands } from "./utils/shoppingList";

const DAY_IDS = ["so", "mo", "di", "mi", "do", "fr", "sa"];
const MEALS: [string, string][] = [["f", "Morgen 早餐"], ["m", "Mittag 午餐"], ["a", "Abend 晚餐"]];
const shift = (iso: string, days: number) => {
  const [y, m, d] = iso.split("-").map(Number);
  return isoDay(new Date(y, m - 1, d + days));
};
const weekday = (iso: string) => new Date(iso + "T12:00:00").getDay();
const nice = (iso: string, lang: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString(lang === "zh" ? "zh-CN" : "de-AT", { weekday: "long", day: "numeric", month: "long" });

export function HelferPage({ plans }: { plans: PlanRecord[] }) {
  const { lang } = useLang();
  const t = (de: string, zh: string) => (lang === "de" ? de : zh);
  const [date, setDate] = useState(() => shift(isoDay(new Date()), 1));
  const [choice, setChoice] = useState("");
  const [, setLoaded] = useState(0);
  const [msg, setMsg] = useState("");

  const candidates = useMemo(
    () =>
      plans
        .filter((p) => p.lang === "de" && p.startDate <= date && date < shift(p.startDate, 7))
        // Wochenbett-Fassung zuerst, sie ist die mit Vorrat.
        .sort((a, b) => Number(b.baseId.includes("wochenbett")) - Number(a.baseId.includes("wochenbett"))),
    [plans, date]
  );
  const plan = candidates.find((p) => p.slug === choice) ?? candidates[0];
  const zhPlan = plan && plans.find((p) => p.lang === "zh" && p.baseId === plan.baseId);

  useEffect(() => {
    Promise.all([plan, zhPlan].filter((p): p is PlanRecord => !!p).map(loadPlanData)).then(() => setLoaded((n) => n + 1));
  }, [plan, zhPlan]);

  const data = (plan && planDataCache.get(plan.slug)?.DATA) || [];
  const zhData = (zhPlan && planDataCache.get(zhPlan.slug)?.DATA) || [];
  const zhPrep = localizedRecipes("zh");

  const mealsOn = (iso: string) =>
    MEALS.flatMap(([m, label]) => {
      const r = data.find((x) => x.id === `${DAY_IDS[weekday(iso)]}-${m}`);
      return r ? [{ label, r, zh: zhData.find((z) => z.id === r.id), thaw: thawList(r, PREP_RECIPES) }] : [];
    });
  const meals = mealsOn(date);
  const thaw = [...new Set(meals.flatMap((m) => m.thaw))];

  const reminders = () => {
    if (!plan) return;
    const today = isoDay(new Date());
    const commands = Array.from({ length: 7 }, (_, n) => shift(plan.startDate, n)).flatMap((day) =>
      mealsOn(day).flatMap((m) =>
        m.thaw
          .filter(() => shift(day, -1) >= today)
          .map((i) => `${taskctlCommands([`Auftauen für ${nice(day, "de")}: ${PREP_RECIPES[i].title}`]).replace(/ --list '[^']*'$/, "")} --due ${shift(day, -1)}`)
      )
    );
    if (!commands.length) return setMsg(t("In dieser Woche ist nichts aufzutauen.", "这周没有需要解冻的。"));
    navigator.clipboard.writeText(commands.join("\n")).then(
      () => setMsg(t(`${commands.length} taskctl-Befehle kopiert. Im Terminal einfügen.`, `已复制${commands.length}条命令。`)),
      () => setMsg(t("Kopieren nicht möglich.", "无法复制。"))
    );
  };

  return (
    <div className="main-inner helper">
      <header className="prep-header">
        <div className="prep-kicker">帮手 · {t("Für alle, die einspringen", "给帮忙的人")}</div>
        <h1>{t("Helfer-Zettel", "帮厨单")}</h1>
        <div className="export-bar ghk-no-print">
          <input type="date" className="fridge-input" style={{ flex: "0 0 auto" }} value={date} onChange={(e) => e.target.value && setDate(e.target.value)} aria-label={t("Tag", "日期")} />
          {candidates.length > 1 && (
            <select className="prep-select" value={plan?.slug} onChange={(e) => setChoice(e.target.value)} aria-label={t("Plan", "菜单")}>
              {candidates.map((p) => <option key={p.slug} value={p.slug}>{p.meta.title}</option>)}
            </select>
          )}
          <button type="button" className="prep-tab" onClick={() => window.print()}>{t("Drucken", "打印")}</button>
          <button type="button" className="prep-tab" onClick={reminders}>{t("Auftau-Erinnerungen (taskctl)", "解冻提醒 (taskctl)")}</button>
        </div>
        <p className="export-msg ghk-no-print" aria-live="polite">{msg}</p>
      </header>

      {!plan ? (
        <p>{t("Für diesen Tag gibt es keinen Plan.", "这一天没有菜单。")}</p>
      ) : (
        <article className="helper-sheet">
          <h2>{nice(date, "de")} · {nice(date, "zh")}</h2>
          <p className="export-msg">{plan.meta.title}</p>

          <section className="helper-thaw">
            <h3>Am Vorabend aus dem Gefrierfach in den Kühlschrank<br />前一天晚上从冷冻室移到冷藏室</h3>
            {thaw.length === 0 ? <p>Nichts. 不需要。</p> : (
              <ul>{thaw.map((i) => <li key={i}>☐ {PREP_RECIPES[i].title}<br /><span lang="zh-CN">{zhPrep[i].title}</span></li>)}</ul>
            )}
          </section>

          {meals.map((m) => (
            <section key={m.r.id} className="helper-meal">
              <h3>{m.label}</h3>
              <div className="helper-cols">
                {[
                  { lang: "de", title: m.r.title, steps: m.r.steps ?? [] },
                  { lang: "zh-CN", title: m.zh?.title, steps: m.zh?.steps ?? [] },
                ].map((c) => c.title && (
                  <div key={c.lang} lang={c.lang}>
                    <strong>{c.title}</strong>
                    <ol>{c.steps.map((s) => <li key={s}>{s}</li>)}</ol>
                  </div>
                ))}
              </div>
            </section>
          ))}
          <p className="helper-note">Rasch abkühlen, nur einmal auftauen, durchgehend heiß erhitzen. 尽快放凉，只解冻一次，彻底热透。</p>
        </article>
      )}
    </div>
  );
}
