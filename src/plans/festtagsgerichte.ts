// src/plans/festtagsgerichte.ts
// Eigene Rubrik für Gerichte außerhalb der Wochenplanung, die nicht "kalt" sind: Suppen
// (Innereien/Wochenbett-Klassiker), gedämpfter Fisch, Festtags-/Familienfestgerichte. Gleiche
// Datenform wie ColdDish/PrepRecipe (siehe coldDishes.ts, prep/preppen.ts) — bewusst kein
// gemeinsamer Typ, weil "kalt", "Prep" und "Festtag" eigenständige Domänen mit eigener
// Bedeutung sind, auch wenn die Feldliste identisch ist.
export type FestiveDish = {
  id: string;
  /** Kapitel-Gruppierung, z.B. "Suppe/Innereien", "Gedämpfter Fisch", "Festtagsgericht". */
  type: string;
  emoji: string;
  title: string;
  desc: string;
  batchSize: string;
  ingredients: string[];
  steps: string[];
  freezeMethod: string;
  freezerLife: string;
  reheat: string;
  tags: string[];
};

export const FESTIVE_DISHES: FestiveDish[] = [
  {
    id: "china-suppe-schweineleber-ingwer",
    type: "Suppe/Innereien",
    emoji: "🍲",
    title: "Schweineleber-Ingwer-Suppe, eisenreich (薑絲豬肝湯)",
    desc: "Schnelle, eisenreiche Suppe — Leber nur ganz kurz mitköcheln, sonst wird sie zäh. Klassiker der chinesischen Hausmannskost bei Blutarmut/Erschöpfung.",
    batchSize: "Ergibt 2 Portionen (frisch zubereiten empfohlen)",
    ingredients: [
      "Schweineleber (dünn geschnitten) 200 g",
      "Ingwer (feine Streifen) 20 g",
      "Getrocknete Goji-Beeren 1 EL",
      "Sesamöl 1 TL",
      "Brühe oder Wasser 500 ml",
      "Salz nach Geschmack (wenig)",
    ],
    steps: [
      "Leber 10 Min. in kaltem Wasser wässern, Sehnen entfernen, dünn aufschneiden.",
      "Ingwer in Sesamöl kurz andünsten, mit Brühe aufgießen, aufkochen.",
      "Goji-Beeren zugeben, 5 Min. köcheln lassen.",
      "Leber zugeben, 2–3 Min. köcheln bis vollständig durchgegart (nicht länger, sonst zäh), mit wenig Salz abschmecken.",
    ],
    freezeMethod: "Leber roh, dünn geschnitten, flach eingefroren — direkt aus dem Gefrierfach in die kochende Brühe geben.",
    freezerLife: "bis zu 1 Monat (roh)",
    reheat: "Brühe komplett neu aufkochen, Leber erst am Schluss zugeben und vollständig durchgaren.",
    tags: ["China", "Suppe", "Eisenreich", "Vollständig durchgegart"],
  },
  {
    id: "china-suppe-schweinsfuss-erdnuss",
    type: "Suppe/Innereien",
    emoji: "🥜",
    title: "Schweinsfüße-Erdnuss-Suppe (花生豬腳湯)",
    desc: "Klassische, lange geschmorte Kraftsuppe der chinesischen Küche — große Menge, friert gut portionsweise ein.",
    batchSize: "Ergibt 6–8 Portionen",
    ingredients: [
      "Schweinsfüße (geputzt, halbiert) 1 kg",
      "Rohe Erdnüsse 150 g (über Nacht eingeweicht)",
      "Ingwer 4 Scheiben",
      "Frühlingszwiebel 2 Stück",
      "Sojasauce natriumarm 2 EL",
      "Wasser 1,5 L",
    ],
    steps: [
      "Schweinsfüße kurz blanchieren, abspülen.",
      "Mit Erdnüssen, Ingwer, Frühlingszwiebel, Sojasauce und Wasser aufsetzen, aufkochen.",
      "2–2,5 Std. bei niedriger Hitze köcheln (oder 1 Std. im Schnellkochtopf), bis die Füße butterweich sind.",
      "Fett von der Oberfläche abschöpfen, nach Geschmack abschmecken.",
    ],
    freezeMethod: "Portionsweise mit Brühe einfrieren.",
    freezerLife: "bis zu 2 Monate",
    reheat: "Im Topf langsam vollständig durcherhitzen, bei Bedarf etwas Wasser nachgießen.",
    tags: ["China", "Suppe", "Slow-Cooker", "Fettreich: Fett vor dem Servieren abschöpfen"],
  },
  {
    id: "china-fisch-gedaempft-ingwer",
    type: "Gedämpfter Fisch",
    emoji: "🐟",
    title: "Ganzer gedämpfter Fisch, Ingwer-Frühlingszwiebel (薑蔥蒸魚)",
    desc: "Kantonesischer Klassiker für Festtage — schonend gegart, in unter 15 Minuten fertig. Nur quecksilberarme Fischsorten verwenden.",
    batchSize: "Ergibt 2–3 Portionen",
    ingredients: [
      "Wolfsbarsch oder Kabeljau, ganz oder als Filet, 500–600 g (nur quecksilberarme Sorten)",
      "Ingwer (feine Streifen) 20 g",
      "Frühlingszwiebel 3 Stück",
      "Sojasauce natriumarm 2 EL",
      "Neutrales Öl 2 EL",
    ],
    steps: [
      "Fisch trockentupfen, mit der Hälfte des Ingwers innen und außen belegen.",
      "8–12 Min. im Dampfgarer dämpfen, bis das Fleisch sich leicht vom Knochen löst und vollständig durchgegart ist.",
      "Austretende Flüssigkeit abgießen, mit restlichem Ingwer und Frühlingszwiebel belegen.",
      "Öl in einer kleinen Pfanne stark erhitzen, heiß über den Fisch gießen, mit Sojasauce beträufeln.",
    ],
    freezeMethod: "Fisch roh, ganz oder filetiert, einzeln verpackt einfrierbar — vor dem Dämpfen vollständig auftauen.",
    freezerLife: "bis zu 2 Monate (roh, tiefgekühlt)",
    reheat: "Nicht aufwärmen — frisch dämpfen, am besten direkt vor dem Servieren.",
    tags: ["China", "Fisch", "Nur quecksilberarmer Fisch", "Vollständig durchgegart", "Festtagsgericht"],
  },
  {
    id: "china-festtag-rotgeschmortes-schwein",
    type: "Festtagsgericht",
    emoji: "🥩",
    title: "Rotgeschmorter Schweinebauch (紅燒肉)",
    desc: "Ikonisches Festtagsgericht für Neujahr und Familienfeiern — süß-herzhaft geschmort bis butterweich. Reichhaltig, daher eher kleine Portion zum Fest als Alltagsgericht.",
    batchSize: "Ergibt 6 Portionen (kleine Festtagsportion)",
    ingredients: [
      "Schweinebauch 600 g",
      "Ingwer 4 Scheiben",
      "Frühlingszwiebel 2 Stück",
      "Sojasauce natriumarm 3 EL",
      "Dunkle Sojasauce 1 EL (für die Farbe)",
      "Kandiszucker 1 EL",
      "Sternanis 1 Stück",
    ],
    steps: [
      "Schweinebauch würfeln, kurz blanchieren, abspülen.",
      "Mit dem Zucker in etwas Öl leicht karamellisieren.",
      "Ingwer, Frühlingszwiebel, Sternanis und beide Sojasaucen zugeben, mit Wasser knapp bedecken.",
      "60–75 Min. bei niedriger Hitze köcheln, bis die Sauce eindickt und das Fleisch butterweich ist.",
    ],
    freezeMethod: "Fertig geschmort portionsweise mit Sauce einfrieren.",
    freezerLife: "bis zu 2 Monate",
    reheat: "Im Topf langsam mit etwas Wasser vollständig durcherhitzen.",
    tags: ["China", "Festtagsgericht", "Fettreich: kleine Portion", "Diabetes: nur kleine Portion, zuckerhaltige Sauce"],
  },
  {
    id: "china-festtag-weissgekochtes-huhn",
    type: "Festtagsgericht",
    emoji: "🐓",
    title: "Weiß gekochtes Huhn mit Ingwer-Frühlingszwiebel-Öl (白切雞)",
    desc: "Traditionelles Gericht für Familienfeste — pochiert statt gebraten, dadurch besonders zart und mager.",
    batchSize: "Ergibt 4–6 Portionen",
    ingredients: [
      "Ganzes Huhn (oder Hähnchenschenkel) 1,2 kg",
      "Ingwer 4 Scheiben, Frühlingszwiebel 3 Stück, Salz 1 TL (zum Garziehen)",
      "Ingwer fein gehackt 2 EL",
      "Frühlingszwiebel fein gehackt 3 EL",
      "Neutrales Öl 3 EL",
      "Sojasauce natriumarm 1 EL",
    ],
    steps: [
      "Huhn mit Ingwer, Frühlingszwiebel und Salz in Wasser bei sanfter Hitze gar ziehen lassen (nicht sprudelnd kochen), 35–40 Min. je nach Größe, bis vollständig durchgegart.",
      "Huhn direkt in Eiswasser abschrecken, abtropfen lassen.",
      "Für die Sauce: gehackten Ingwer und Frühlingszwiebel mit Salz vermengen, heißes Öl darübergießen, mit Sojasauce abschmecken.",
      "Huhn tranchieren, mit der Sauce separat servieren.",
    ],
    freezeMethod: "Gegartes Huhn ohne Sauce portionsweise einfrieren; Sauce separat frisch zubereiten.",
    freezerLife: "bis zu 2 Monate (Huhn)",
    reheat: "Im Kühlschrank auftauen, kalt oder leicht angewärmt servieren, Kerntemperatur beim Erwärmen prüfen.",
    tags: ["China", "Festtagsgericht", "Vollständig durchgegart", "Diabetes: mageres Protein"],
  },
];
