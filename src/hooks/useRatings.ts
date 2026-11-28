import { useSyncExternalStore } from "react";
import { rate, Ratings } from "../utils/rating";

const KEYS = { up: "mkt.rating.up", down: "mkt.rating.down" } as const;
const listeners = new Set<() => void>();

function read(): Ratings {
  const list = (key: string): string[] => {
    try {
      const v = JSON.parse(localStorage.getItem(key) ?? "[]");
      return Array.isArray(v) ? v : [];
    } catch {
      return [];
    }
  };
  return { up: list(KEYS.up), down: list(KEYS.down) };
}

// Ein gemeinsamer Stand, damit alle Knöpfe zum selben Rezept gleich aussehen.
let state: Ratings | undefined;
const snapshot = () => (state ??= read());
const subscribe = (fn: () => void) => {
  if (!listeners.size) state = read(); // nach einem Import frisch lesen
  listeners.add(fn);
  return () => void listeners.delete(fn);
};

export function useRatings() {
  const ratings = useSyncExternalStore(subscribe, snapshot);
  const toggle = (title: string, value: "up" | "down") => {
    state = rate(snapshot(), title, value);
    try {
      localStorage.setItem(KEYS.up, JSON.stringify(state.up));
      localStorage.setItem(KEYS.down, JSON.stringify(state.down));
    } catch { /* privates Fenster */ }
    listeners.forEach((fn) => fn());
  };
  return { ...ratings, toggle };
}
