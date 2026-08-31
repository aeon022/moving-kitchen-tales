// src/plans/coldDishes.ts
// "Kalte Gerichte" — eigener Bereich, kein Preppen: fertig-kalt servierte Salate/Beilagen aus
// China/Japan/Korea (涼拌/漬け物/banchan), meist frisch vorzubereiten statt einzufrieren.
// Gleiche Feld-Struktur wie PrepRecipe (Karten-UI teilt sich Komponente/CSS), aber ohne
// "category" — diese Datei ist nur ein einziger Bereich, keine Tab-Unterscheidung nötig.

export type ColdDish = {
  id: string;
  /** Kapitel-Gruppierung, z.B. "Salat/Kalte Gerichte", "Eingelegt/Tsukemono", "Banchan". */
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

export const COLD_DISHES: ColdDish[] = [
  {
    id: "china-salat-gurken-smashed",
    type: "Salat/Kalte Gerichte",
    emoji: "🥒",
    title: "Smashed-Gurken-Salat, mild sauer-würzig (拍黃瓜)",
    desc: "Klassiker der chinesischen Küche — die Gurke wird plattgeklopft statt geschnitten, nimmt dadurch die Sauce viel besser auf. Für Meal-Prep: Gurke und Dressing getrennt vorbereiten, erst vor dem Servieren mischen.",
    batchSize: "Ergibt 4 Portionen (Dressing separat haltbar)",
    ingredients: [
      "Salatgurke 2 Stück",
      "Knoblauch 2 Zehen",
      "Reisessig mild 2 EL",
      "Sojasauce natriumarm 2 EL",
      "Sesamöl 1 TL",
      "Zucker 1 TL (statt der sonst üblichen 1–2 EL)",
    ],
    steps: [
      "Gurken mit der Breitseite eines Messers plattklopfen, grob zerteilen, kurz salzen, überschüssiges Wasser abgießen.",
      "Dressing aus Knoblauch, Essig, Sojasauce, Sesamöl und Zucker separat verrühren.",
      "Gurken und Dressing getrennt im Kühlschrank aufbewahren.",
      "Erst kurz vor dem Servieren vermengen, damit die Gurke knackig bleibt.",
    ],
    freezeMethod: "Kein Einfrieren — Gurke und Dressing getrennt im Kühlschrank vorbereiten, bis zu 3 Tage haltbar.",
    freezerLife: "nicht einfrieren",
    reheat: "Kalt servieren — Gurke und Dressing erst kurz vor dem Essen vermengen, sonst wird der Salat wässrig.",
    tags: ["China", "Salat", "Low Sugar ✓ (Zucker reduziert)", "Vegetarisch"],
  },
  {
    id: "china-salat-holzohrpilz",
    type: "Salat/Kalte Gerichte",
    emoji: "🍄",
    title: "Kalter Holzohrpilz-Salat, sauer-würzig (涼拌木耳)",
    desc: "Knackige schwarze Pilze in einer sauer-würzigen Sauce — proteinarm, aber ballaststoffreich, guter Beilagensalat.",
    batchSize: "Ergibt 4 Portionen",
    ingredients: [
      "Getrocknete Holzohrpilze (Mu-Err) 30 g",
      "Knoblauch 2 Zehen",
      "Reisessig mild 2 EL",
      "Sojasauce natriumarm 1 EL",
      "Sesamöl 1 TL",
    ],
    steps: [
      "Pilze in warmem Wasser 20 Min. einweichen, bis weich, gründlich abspülen, klein reißen.",
      "2 Min. blanchieren (wichtig — Holzohrpilze sollten nicht roh gegessen werden), abschrecken.",
      "Dressing aus Knoblauch, Essig, Sojasauce und Sesamöl separat verrühren.",
      "Pilze und Dressing getrennt im Kühlschrank aufbewahren, erst vor dem Servieren vermengen.",
    ],
    freezeMethod: "Kein Einfrieren — blanchierte Pilze und Dressing getrennt im Kühlschrank, bis zu 3 Tage haltbar.",
    freezerLife: "nicht einfrieren",
    reheat: "Kalt servieren, erst kurz vor dem Essen mit dem Dressing vermengen.",
    tags: ["China", "Salat", "Vegetarisch", "Holzohrpilze immer blanchiert servieren, nie roh"],
  },
  {
    id: "china-salat-rotkohl-apfel",
    type: "Salat/Kalte Gerichte",
    emoji: "🍎",
    title: "Rotkohl-Apfel-Salat, knackig (紫甘藍拌蘋果絲)",
    desc: "Fein geraspelter Rotkohl mit Apfel — süß-säuerlich, hoher Vitamin-C-Gehalt, hält sich roh mehrere Tage im Kühlschrank.",
    batchSize: "Ergibt 4 Portionen",
    ingredients: [
      "Rotkohl 300 g",
      "Apfel 1 Stück",
      "Reisessig mild 2 EL",
      "Zucker 1 TL",
      "Sesamöl 1 TL",
    ],
    steps: [
      "Rotkohl und Apfel sehr fein raspeln/hobeln (Apfel mit etwas Zitronensaft vor dem Braunwerden schützen).",
      "Dressing aus Essig, Zucker und Sesamöl separat verrühren.",
      "Kohl und Apfel können bereits Stunden vorher geraspelt werden.",
      "Dressing erst kurz vor dem Servieren untermischen.",
    ],
    freezeMethod: "Kein Einfrieren — geraspelte Zutaten und Dressing getrennt im Kühlschrank, bis zu 2 Tage haltbar.",
    freezerLife: "nicht einfrieren",
    reheat: "Kalt servieren.",
    tags: ["China", "Salat", "Vegetarisch", "Low Sugar ✓"],
  },
  {
    id: "china-salat-haehnchenbrust-gerissen",
    type: "Salat/Kalte Gerichte",
    emoji: "🍗",
    title: "Handgezupfte Hähnchenbrust-Salat (手撕雞胸肉)",
    desc: "Pochierte, in Fasern gezupfte Hähnchenbrust mit einer würzigen Sauce — proteinreicher Meal-Prep-Salat, gut vorzukochen.",
    batchSize: "Ergibt 4 Portionen",
    ingredients: [
      "Hähnchenbrust 400 g",
      "Frühlingszwiebel 2 Stück",
      "Ingwer 10 g",
      "Sojasauce natriumarm 2 EL",
      "Sesamöl 1 TL",
      "Reisessig mild 1 EL",
    ],
    steps: [
      "Hähnchenbrust mit Ingwer und Frühlingszwiebel in Wasser pochieren, bis vollständig durchgegart (kein Rosa mehr, Kerntemperatur prüfen).",
      "Abkühlen lassen, in feine Fasern zupfen.",
      "Dressing aus Sojasauce, Sesamöl und Essig separat verrühren.",
      "Gezupftes Hähnchen bis zu 3 Tage im Kühlschrank aufbewahren (auch portionsweise einfrierbar), Dressing erst vor dem Servieren untermischen.",
    ],
    freezeMethod: "Gegart und gezupft, portionsweise im Beutel — Dressing separat, nicht mit einfrieren.",
    freezerLife: "bis zu 2 Monate (gegartes Hähnchen)",
    reheat: "Im Kühlschrank auftauen, kalt mit frischem Dressing servieren (nicht erneut erhitzen — bleibt so am saftigsten).",
    tags: ["China", "Salat", "Diabetes: mageres Protein, proteinreich"],
  },
  {
    id: "china-salat-algen-streifen",
    type: "Salat/Kalte Gerichte",
    emoji: "🌊",
    title: "Kalter Algen-Streifen-Salat, mild (涼拌海帶絲)",
    desc: "Fein geschnittene Algen-/Kombu-Streifen in einer leichten Sauce — jodreich, daher in Maßen genießen, besonders in der Schwangerschaft.",
    batchSize: "Ergibt 4 Portionen",
    ingredients: [
      "Getrocknete Algenstreifen (Kombu/Wakame) 30 g",
      "Knoblauch 1 Zehe",
      "Reisessig mild 2 EL",
      "Sojasauce natriumarm 1 EL",
      "Sesamöl 1 TL",
    ],
    steps: [
      "Algen nach Packungsanweisung einweichen/blanchieren, bis weich, gründlich abspülen (reduziert Jod- und Salzgehalt).",
      "Dressing aus Knoblauch, Essig, Sojasauce und Sesamöl separat verrühren.",
      "Algen und Dressing getrennt im Kühlschrank aufbewahren.",
      "Erst kurz vor dem Servieren vermengen.",
    ],
    freezeMethod: "Kein Einfrieren — eingeweichte Algen und Dressing getrennt im Kühlschrank, bis zu 2 Tage haltbar.",
    freezerLife: "nicht einfrieren",
    reheat: "Kalt servieren, erst kurz vor dem Essen vermengen.",
    tags: ["China", "Salat", "Jod: sparsam dosieren, in Schwangerschaft nur kleine Portion", "Vegetarisch"],
  },
];
