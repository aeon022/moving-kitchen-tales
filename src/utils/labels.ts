// Etiketten aus dem Gefrierschrank-Bestand. Test: scripts/test-extras.mjs.
import { eatBy, type Frozen } from "./freezer.ts";

type Text = { title: string; reheat: string };
type Source = { id: string; de: Text; zh?: Text };
export type Label = { id: string; de: { title: string; reheat?: string }; zh?: Text; frozenOn: string; until: string };

export function labelsFor(items: Frozen[], sources: { prep: Source[]; ways: Source[] }): Label[] {
  return items.map((f) => {
    // Einträge aus dem Vorrat-Generator heißen vg-<weg>-<JJJJ-MM-TT>.
    const hit = f.id.startsWith("vg-") ? sources.ways.find((w) => w.id === f.id.slice(3, -11)) : sources.prep.find((p) => p.id === f.id);
    return { id: f.id, de: hit?.de ?? { title: f.name }, zh: hit?.zh, frozenOn: f.frozenOn, until: eatBy(f) };
  });
}
