// Welche Vorrats-Rezepte braucht ein Gericht, und muss man sie am Vorabend auftauen?
// Die Wochenpläne nennen den Vorrat in der Beschreibung als „Titel“. Test: scripts/test-thaw.mjs.
export const referenced = (desc: string, titles: string[]) =>
  [...desc.matchAll(/„([^“]+)“/g)].map((m) => titles.indexOf(m[1])).filter((i) => i >= 0);

/** false, wenn das Rezept gefroren in Topf, Pfanne oder Mikrowelle darf. */
export const needsThaw = (reheat: string) =>
  /auftauen/i.test(reheat) && !/direkt gefroren|kein auftauen|^\s*(gefroren|aus dem gefrierfach)/i.test(reheat);

/**
 * Welche Vorräte eines Gerichts am Vorabend raus müssen. Das Wochenrezept geht vor: nennt es den
 * Vorabend, wird aufgetaut, auch wenn das Vorratsrezept allein gefroren in den Topf dürfte.
 */
export function thawList(meal: { desc?: string; steps?: string[] }, stock: { title: string; reheat: string }[]): number[] {
  const refs = referenced(meal.desc ?? "", stock.map((r) => r.title));
  const marked = refs.filter((i) => needsThaw(stock[i].reheat));
  if (marked.length) return marked;
  return (meal.steps ?? []).some((s) => /vorabend/i.test(s) && /auftauen/i.test(s)) ? refs : [];
}
