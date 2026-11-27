// Wann sich Finn und Fleur wie verhalten. Reine Logik, Test: scripts/test-cats.mjs.
export type DayTime = "morning" | "day" | "night";

export function dayTime(now: Date): DayTime {
  const h = now.getHours();
  return h >= 5 && h < 10 ? "morning" : h >= 19 || h < 5 ? "night" : "day";
}

// Chinesisches Neujahr: [Vorabend, Laternenfest] je Jahr. Neue Jahre hier ergänzen.
const NEW_YEAR: [string, string][] = [
  ["2027-02-05", "2027-02-20"],
  ["2028-01-25", "2028-02-09"],
  ["2029-02-12", "2029-02-27"],
];

export function isNewYear(now: Date): boolean {
  const iso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  return NEW_YEAR.some(([from, to]) => iso >= from && iso <= to);
}
