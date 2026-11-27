// Reis-Alternative zu jedem Rezept mit Reis (frühe Diabetes). Reine Logik, Test: scripts/test-rice.mjs.
// ponytail: gerundete Richtwerte statt Nährwertdatenbank (KH je 100 g: Reis roh 78, gekocht 28, Blumenkohl 3).

const ONLY_BARLEY = /klebreis|klebrig|sushi/i;

/** Liefert den Hinweistext oder null, wenn das Rezept keinen Reis enthält. */
export function riceAlternative(ingredients: string[], title = "", lang = "de"): string | null {
  const say = (de: string, zh: string) => (lang === "zh" ? zh : de);
  let raw = 0, cooked = 0, risotto = 0, sticky = false, noodles = false, brown = false, unquantified = false;
  for (const line of ingredients) {
    const s = line.toLowerCase();
    if (/reisnudeln/.test(s)) { noodles = true; continue; }
    // Reisessig, Reismehl, Reispapier, Reiskuchen sind kein Reis als Beilage.
    if (!/(reis(?![a-zäöü])|risottoreis|rundkornreis)/.test(s)) continue;
    const g = Number(s.match(/(\d+)\s?g(?![a-z])/)?.[1] ?? 0);
    if (ONLY_BARLEY.test(s)) sticky = true;
    if (/vollkorn|brauner/.test(s)) brown = true;
    if (!g) unquantified = true;
    else if (/risotto/.test(s)) risotto += g;
    else if (/gekocht/.test(s)) cooked += g;
    else raw += g;
  }
  const half = (g: number) => Math.round(g / 10) * 5;

  if (risotto) {
    return say(`Statt ${risotto} g Risottoreis: ${risotto} g Rollgerste als „Gersotto“ (länger garen, mehr Ballaststoffe, langsamerer Blutzuckeranstieg).`, `${risotto}克意大利米可换成${risotto}克大麦仁（煮久一些，膳食纤维更多，血糖上升更慢）。`);
  }
  const congee = /congee|brei|粥|죽|がゆ|粥/i.test(title);
  if (raw && (congee || sticky)) {
    const h = half(raw);
    return say(`Statt ${raw} g Reis: ${raw - h} g Reis + ${h} g Rollgerste (ca. 20 Min. länger garen, mehr Ballaststoffe, langsamerer Blutzuckeranstieg).`, `${raw}克米可换成${raw - h}克米加${h}克大麦仁（多煮约20分钟，膳食纤维更多，血糖上升更慢）。`);
  }
  if (raw) {
    const h = half(raw), cauli = h * 2;
    const saved = Math.round((h * 0.78 - cauli * 0.03) / 5) * 5;
    const whole = brown ? "Rollgerste" : "Vollkornreis oder Rollgerste";
    return say(`Statt ${raw} g Reis: ${raw - h} g Reis + ${cauli} g Blumenkohlreis (etwa ${saved} g KH weniger für 2 P.). Oder ${raw} g ${whole} (ähnlich viele KH, mehr Ballaststoffe, längere Garzeit).`, `${raw}克米可换成${raw - h}克米加${cauli}克花椰菜米（两人份约少${saved}克碳水）。或用${raw}克${brown ? "大麦仁" : "糙米或大麦仁"}（碳水相近，膳食纤维更多，煮的时间更长）。`);
  }
  if (cooked && !sticky) {
    const h = half(cooked);
    const saved = Math.round((h * 0.25) / 5) * 5;
    return say(`Statt ${cooked} g gekochtem Reis: ${cooked - h} g Reis + ${h} g Blumenkohlreis, durchgegart (etwa ${saved} g KH weniger für 2 P.).`, `${cooked}克熟米饭可换成${cooked - h}克米饭加${h}克熟透的花椰菜米（两人份约少${saved}克碳水）。`);
  }
  if (cooked || sticky || unquantified) return say("Reis zur Hälfte durch gekochte Rollgerste ersetzen (mehr Ballaststoffe, langsamerer Blutzuckeranstieg).", "一半米饭换成熟大麦仁（膳食纤维更多，血糖上升更慢）。");
  if (noodles) return say("Statt Reisnudeln: gleich viel Soba mit hohem Buchweizenanteil oder Vollkornnudeln (mehr Ballaststoffe).", "米粉可换成等量的高荞麦含量荞麦面或全麦面（膳食纤维更多）。");
  return null;
}
