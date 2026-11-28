export type Ratings = { up: string[]; down: string[] };

/** Noch einmal dasselbe nimmt die Bewertung zurück, das andere ersetzt sie. */
export function rate(r: Ratings, title: string, value: "up" | "down"): Ratings {
  const had = r[value].includes(title);
  const without = (list: string[]) => list.filter((x) => x !== title);
  const next = { up: without(r.up), down: without(r.down) };
  if (!had) next[value] = [...next[value], title];
  return next;
}
