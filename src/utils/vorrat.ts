// Mengenrechnung für den Vorrat-Generator. Test: scripts/test-planer.mjs.
import type { Unit } from "../plans/vorrat/types";

export type Amount = "g" | "kg" | "Stk";

export const toGrams = (n: number, unit: Amount, piece = 0) => Math.round(n * (unit === "kg" ? 1000 : unit === "Stk" ? piece : 1));

/** Teilt total in n möglichst gleiche Teile in Schritten von `step`; der Rest geht an die vorderen. */
export function split(total: number, n: number, step = 1): number[] {
  if (n <= 0) return [];
  const units = Math.floor(total / step);
  return Array.from({ length: n }, (_, i) => (Math.floor(units / n) + (i < units % n ? 1 : 0)) * step);
}

const ZH: Record<Unit, string> = { g: "克", ml: "毫升", EL: "汤匙", TL: "茶匙", Stk: "个", Zehe: "瓣", Prise: "撮" };

/** Menge je 500 g auf `grams` hochrechnen: g/ml grob gerundet, Löffel und Stück in Vierteln. */
export function scaled(base: number, unit: Unit, grams: number, lang: "de" | "zh"): string {
  const x = (base * grams) / 500;
  const metric = unit === "g" || unit === "ml";
  const v = metric ? (x >= 100 ? Math.round(x / 10) * 10 : Math.max(1, Math.round(x))) : Math.max(0.25, Math.round(x * 4) / 4);
  const whole = Math.floor(v);
  const frac = ({ 0.25: "¼", 0.5: "½", 0.75: "¾" } as Record<number, string>)[v - whole] ?? "";
  const num = metric ? String(v) : `${whole || ""}${frac}`;
  const name = lang === "zh" ? ZH[unit] : unit === "Stk" ? "Stück" : unit === "Zehe" && v > 1 ? "Zehen" : unit === "Prise" && v > 1 ? "Prisen" : unit;
  return `${num} ${name}`;
}

/** Rund 125 g Rohware je Portion. */
export const portions = (grams: number) => Math.max(1, Math.round(grams / 125));
