// Reis-Alternative zu jedem Rezept mit Reis (frühe Diabetes). Reine Logik, Test: scripts/test-rice.mjs.
// ponytail: gerundete Richtwerte statt Nährwertdatenbank (KH je 100 g: Reis roh 78, gekocht 28, Blumenkohl 3).

const ONLY_BARLEY = /klebreis|klebrig|sushi/i;

/** Liefert den Hinweistext oder null, wenn das Rezept keinen Reis enthält. */
export function riceAlternative(ingredients: string[], title = ""): string | null {
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
    return `Statt ${risotto} g Risottoreis: ${risotto} g Rollgerste als „Gersotto“ (länger garen, mehr Ballaststoffe, langsamerer Blutzuckeranstieg).`;
  }
  const congee = /congee|brei|粥|죽|がゆ|粥/i.test(title);
  if (raw && (congee || sticky)) {
    const h = half(raw);
    return `Statt ${raw} g Reis: ${raw - h} g Reis + ${h} g Rollgerste (ca. 20 Min. länger garen, mehr Ballaststoffe, langsamerer Blutzuckeranstieg).`;
  }
  if (raw) {
    const h = half(raw), cauli = h * 2;
    const saved = Math.round((h * 0.78 - cauli * 0.03) / 5) * 5;
    const whole = brown ? "Rollgerste" : "Vollkornreis oder Rollgerste";
    return `Statt ${raw} g Reis: ${raw - h} g Reis + ${cauli} g Blumenkohlreis (etwa ${saved} g KH weniger für 2 P.). Oder ${raw} g ${whole} (ähnlich viele KH, mehr Ballaststoffe, längere Garzeit).`;
  }
  if (cooked && !sticky) {
    const h = half(cooked);
    const saved = Math.round((h * 0.25) / 5) * 5;
    return `Statt ${cooked} g gekochtem Reis: ${cooked - h} g Reis + ${h} g Blumenkohlreis, durchgegart (etwa ${saved} g KH weniger für 2 P.).`;
  }
  if (cooked || sticky || unquantified) return "Reis zur Hälfte durch gekochte Rollgerste ersetzen (mehr Ballaststoffe, langsamerer Blutzuckeranstieg).";
  if (noodles) return "Statt Reisnudeln: gleich viel Soba mit hohem Buchweizenanteil oder Vollkornnudeln (mehr Ballaststoffe).";
  return null;
}
