import { useEffect, useState } from "react";

/** Abhak-Zustand, bleibt im Browser (localStorage). */
export function useStoredSet(key: string) {
  const [items, setItems] = useState<string[]>(() => {
    try {
      const v = JSON.parse(localStorage.getItem(key) ?? "[]");
      return Array.isArray(v) ? v : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(items)); } catch { /* privates Fenster */ }
  }, [key, items]);
  return {
    items,
    has: (x: string) => items.includes(x),
    toggle: (x: string) => setItems((old) => (old.includes(x) ? old.filter((i) => i !== x) : [...old, x])),
    clear: () => setItems([]),
  };
}
