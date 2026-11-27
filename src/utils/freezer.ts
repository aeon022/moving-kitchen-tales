// Gefrierschrank-Bestand. Reine Logik, Test: scripts/test-freezer.mjs.
export type Frozen = {
  /** Rezept-ID bei Einträgen aus dem Vorkochplan, sonst "own-…". */
  id: string;
  name: string;
  portions: number;
  /** YYYY-MM-DD */
  frozenOn: string;
  months: number;
};

export const isoDay = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

/** "bis zu 2 Monate" → 2. Unklares zählt vorsichtig als 1 Monat, nie mehr als 3. */
export function monthsOf(freezerLife: string): number {
  const n = Number(freezerLife.match(/(\d+)\s*Monat/)?.[1] ?? 1);
  return Math.min(Math.max(n, 1), 3);
}

/** "Ergibt 4 Portionen" → 4, mal Faktor, mindestens 1. */
export function portionsOf(batchSize: string, factor = 1): number {
  return Math.max(1, Math.round(Number(batchSize.match(/\d+/)?.[0] ?? 1) * factor));
}

export function eatBy(item: Frozen): string {
  const [y, m, d] = item.frozenOn.split("-").map(Number);
  // Monatsende abfangen: 31.12. + 2 Monate = 28.2., nicht 3.3.
  const last = new Date(y, m - 1 + item.months + 1, 0).getDate();
  return isoDay(new Date(y, m - 1 + item.months, Math.min(d, last)));
}

export const daysLeft = (item: Frozen, today: Date) =>
  Math.round((Date.parse(eatBy(item)) - Date.parse(isoDay(today))) / 86_400_000);

/** Daten aus fremder Quelle (Teilen-Link, alter Speicher) prüfen. */
export function validFrozen(v: unknown): Frozen[] {
  if (!Array.isArray(v)) return [];
  return v.filter(
    (x): x is Frozen =>
      !!x && typeof x.id === "string" && typeof x.name === "string" && x.name.length < 200 &&
      Number.isInteger(x.portions) && x.portions > 0 && x.portions < 1000 &&
      /^\d{4}-\d{2}-\d{2}$/.test(x.frozenOn) && [1, 2, 3].includes(x.months)
  );
}

// --- Stand als Link teilen (ohne Server) ---
export const STRING_KEYS = ["mkt.vorkochen.done", "mkt.vorkochen.bought", "mkt.pantry.buy"] as const;
export const FREEZER_KEY = "mkt.freezer";

export type Shared = { lists: Record<string, string[]>; freezer: Frozen[] };

export function encodeShare(s: Shared): string {
  const bytes = new TextEncoder().encode(JSON.stringify(s));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** null bei kaputtem Link. Übernommen werden nur bekannte Schlüssel mit gültigen Werten. */
export function decodeShare(code: string): Shared | null {
  try {
    if (code.length > 100_000) return null;
    const bin = atob(code.replace(/-/g, "+").replace(/_/g, "/"));
    const raw = JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0))));
    const lists: Shared["lists"] = {};
    for (const k of STRING_KEYS) {
      const v = raw?.lists?.[k];
      lists[k] = Array.isArray(v) ? v.filter((x: unknown) => typeof x === "string" && x.length < 200) : [];
    }
    return { lists, freezer: validFrozen(raw?.freezer) };
  } catch {
    return null;
  }
}

export function mergeShared(mine: Shared, theirs: Shared): Shared {
  const lists: Shared["lists"] = {};
  for (const k of STRING_KEYS) lists[k] = [...new Set([...(mine.lists[k] ?? []), ...(theirs.lists[k] ?? [])])];
  const byId = new Map([...mine.freezer, ...theirs.freezer].map((f) => [f.id, f]));
  return { lists, freezer: [...byId.values()] };
}
