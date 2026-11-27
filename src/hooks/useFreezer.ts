import { useEffect, useState } from "react";
import { Frozen, validFrozen } from "../utils/freezer";
import { FREEZER_KEY } from "../utils/freezer";

export function readFreezer(): Frozen[] {
  try {
    return validFrozen(JSON.parse(localStorage.getItem(FREEZER_KEY) ?? "[]"));
  } catch {
    return [];
  }
}

export function useFreezer() {
  const [items, setItems] = useState<Frozen[]>(readFreezer);
  useEffect(() => {
    try { localStorage.setItem(FREEZER_KEY, JSON.stringify(items)); } catch { /* privates Fenster */ }
  }, [items]);
  return {
    items,
    add: (f: Frozen) => setItems((old) => (old.some((x) => x.id === f.id) ? old : [...old, f])),
    remove: (id: string) => setItems((old) => old.filter((x) => x.id !== id)),
    update: (id: string, patch: Partial<Frozen>) =>
      setItems((old) => old.flatMap((x) => (x.id !== id ? [x] : (patch.portions ?? x.portions) > 0 ? [{ ...x, ...patch }] : []))),
  };
}
