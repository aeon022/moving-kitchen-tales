// src/plans/techniques.ts
// "Kochtechniken" — Referenz-Bereich (kein Rezept-Format): erklärt wiederkehrende Handgriffe der
// chinesischen/japanischen/koreanischen Küche (Marinieren, Zart machen, Blanchieren, ...), die in
// vielen Rezepten der App vorkommen, aber nirgends erklärt werden.

export type Technique = {
  id: string;
  /** Kapitel-Gruppierung, z.B. "Marinieren & Zart machen", "Vorgaren & Blanchieren". */
  category: string;
  emoji: string;
  title: string;
  desc: string;
  method: string[];
  tips: string[];
  usedIn: string;
  tags: string[];
};

export const TECHNIQUES: Technique[] = [
  {
    id: "china-shang-jiang-velveting",
    category: "Marinieren & Zart machen",
    emoji: "🥢",
    title: "Shang Jiang — Velveting (上漿)",
    desc: "Die chinesische Restaurant-Technik für seidig-zartes Fleisch in Wok-Gerichten: dünn geschnittenes Fleisch wird in einer Eiweiß-Stärke-Marinade beschichtet und vor dem eigentlichen Braten kurz in warmem Öl oder Wasser vorgegart.",
    method: [
      "Fleisch (Hähnchen, Rind oder Garnelen) in dünne Scheiben oder Streifen schneiden.",
      "Mit 1 Eiweiß, 1–2 EL Speisestärke, 1 EL Shaoxing-Wein und 1 TL Wasser vermengen, 15–20 Min. im Kühlschrank ziehen lassen.",
      "In moderat warmem Öl (ca. 120–140 °C) oder leicht köchelndem Wasser 20–30 Sek. vorgaren, bis die Oberfläche gerade opak ist — nicht durchgaren.",
      "Abtropfen lassen, dann erst im heißen Wok mit der eigentlichen Sauce kurz fertig braten.",
    ],
    tips: [
      "Bei zähen Fleischstücken (z. B. günstigeres Rind) eine Prise Natron zur Marinade geben — macht zusätzlich zart (siehe auch die separate Natron-Technik).",
      "Das Vorgaren nur kurz halten — Ziel ist eine schützende Außenschicht, das Fleisch gart im Wok fertig.",
      "Funktioniert auch im Wasserbad statt in Öl, wenn weniger Fett gewünscht ist.",
    ],
    usedIn: "Klassische Wok-Gerichte wie Kung-Pao-Hähnchen, Rind mit Brokkoli, süß-saure Garnelen.",
    tags: ["China", "Zart machen", "Wok"],
  },
  {
    id: "china-natron-zartmachen",
    category: "Marinieren & Zart machen",
    emoji: "🧂",
    title: "Natron-Zartmachen (嫩肉)",
    desc: "Eine kleine Menge Natron (Backpulver-Basis, nicht Backpulver selbst) hebt den pH-Wert der Fleischoberfläche an und macht dünn geschnittenes Fleisch für Wok-Gerichte deutlich zarter — die Standard-Restaurant-Technik hinter besonders zartem Rind oder Hähnchen.",
    method: [
      "Ca. 1/4–1/2 TL Natron auf 250 g dünn geschnittenes Fleisch geben.",
      "Mit den Händen 2–3 Min. gründlich einmassieren, bis das Fleisch leicht klebrig wirkt.",
      "15–20 Min. im Kühlschrank ruhen lassen (nicht länger, sonst wird die Textur seifig).",
      "Vor dem Weiterverarbeiten gründlich unter kaltem Wasser abspülen und trockentupfen, dann normal marinieren/velveten.",
    ],
    tips: [
      "Nicht überdosieren — zu viel Natron hinterlässt einen seifigen Nachgeschmack, der auch durch Abspülen nicht mehr weggeht.",
      "Lässt sich gut mit Shang-Jiang-Velveting kombinieren: erst Natron, abspülen, dann die Eiweiß-Stärke-Marinade.",
      "Besonders wirksam bei günstigeren, faserigeren Fleischstücken.",
    ],
    usedIn: "Günstigere Rindfleisch-Cuts in Wok-Gerichten, manchmal auch bei Hähnchenbrust.",
    tags: ["China", "Zart machen", "Wok"],
  },
  {
    id: "china-pai-smash-technik",
    category: "Marinieren & Zart machen",
    emoji: "🔨",
    title: "Pai — Plattklopfen (拍)",
    desc: "Mit der Breitseite eines Messers oder Wok-Wenders werden Knoblauch, Ingwer oder Gemüse wie Gurke grob zerschlagen statt geschnitten — die aufgerissene Oberfläche nimmt Marinaden und Saucen viel schneller und gleichmäßiger auf.",
    method: [
      "Zutat (z. B. Knoblauchzehe oder Salatgurke) auf ein Schneidebrett legen.",
      "Mit der breiten Seite eines Kochmessers oder der flachen Hand kräftig, aber kontrolliert draufschlagen, bis sie aufreißt.",
      "Grob in unregelmäßige Stücke weiterzerteilen — die unregelmäßigen Bruchkanten sind gewollt.",
      "Direkt mit Marinade/Dressing vermengen — zieht durch die aufgerissene Struktur deutlich schneller ein.",
    ],
    tips: [
      "Bei Gurken vor dem Plattklopfen die Kerne bei Bedarf entfernen, sonst wird der Salat wässrig.",
      "Nicht zu fein zerkleinern — die unregelmäßige Textur ist Teil des gewünschten Ergebnisses (siehe Smashed-Gurken-Salat).",
      "Bei Knoblauch/Ingwer lässt sich so auch die Schale leichter entfernen.",
    ],
    usedIn: "Smashed-Gurken-Salat (拍黃瓜), Knoblauch-/Ingwer-Basen für Saucen und Marinaden.",
    tags: ["China", "Vorbereitung", "Kalte Küche"],
  },
  {
    id: "japan-shio-koji-marinade",
    category: "Marinieren & Zart machen",
    emoji: "🍶",
    title: "Shio-Koji-Marinade (塩麹漬け)",
    desc: "Fermentierter Reis-Koji mit Salz enthält aktive Enzyme (Protease, Amylase), die Fleisch und Fisch von innen heraus zart machen und gleichzeitig einen milden, umami-reichen Süße-Geschmack entwickeln — ganz ohne Zucker.",
    method: [
      "Fleisch oder Fisch dünn mit Shio Koji (fertig im Asia-Laden erhältlich oder aus Koji-Reis + Salz + Wasser selbst angesetzt) bestreichen.",
      "In einem verschlossenen Beutel 30 Min. bis 24 Std. im Kühlschrank ziehen lassen — je länger, desto intensiver und zarter.",
      "Vor dem Braten überschüssige Koji-Paste abwischen (nicht abspülen, das nimmt den Geschmack wieder mit).",
      "Bei mittlerer Hitze braten/grillen — Koji enthält natürlichen Zucker und verbrennt bei zu hoher Hitze schnell.",
    ],
    tips: [
      "Für Fisch reichen meist 30–60 Min., für zähere Fleischstücke ruhig über Nacht.",
      "Restliche Marinade nicht weiterverwenden (war in Kontakt mit rohem Fleisch/Fisch).",
      "Funktioniert auch bei Tofu für eine vegetarische Variante mit mehr Umami.",
    ],
    usedIn: "Shio-Koji-Lachs im Ofen, generell als Alternative zu Sojasauce-Marinaden mit weniger Salz.",
    tags: ["Japan", "Zart machen", "Fermentiert"],
  },
  {
    id: "korea-yangnyeom-marinade",
    category: "Marinieren & Zart machen",
    emoji: "🍐",
    title: "Yangnyeom-Marinade (양념)",
    desc: "Die koreanische Basis-Marinadentechnik für Bulgogi & Co.: eine dickflüssige Würzpaste aus Sojasauce, Knoblauch, Sesamöl und geriebener Birne oder Kiwi — die Fruchtenzyme machen das Fleisch zusätzlich zart.",
    method: [
      "Birne (oder Kiwi) fein reiben oder pürieren — die enthaltenen Enzyme (u. a. Bromelain-ähnlich) brechen Muskelfasern auf.",
      "Mit Sojasauce, Knoblauch, Ingwer, Sesamöl, etwas Zucker und Frühlingszwiebel zu einer dicken Paste verrühren.",
      "Dünn geschnittenes Fleisch großzügig mit der Paste vermengen, mindestens 30 Min., besser 2–24 Std. im Kühlschrank ziehen lassen.",
      "Direkt aus der Marinade scharf anbraten oder grillen — die Zuckeranteile karamellisieren gut bei hoher Hitze.",
    ],
    tips: [
      "Kiwi ist enzymatisch stärker als Birne — bei empfindlicheren Fleischstücken vorsichtig dosieren, sonst wird die Textur matschig statt zart.",
      "Für Freezer-Bags: Fleisch direkt roh in der Marinade einfrieren, dann im Kühlschrank auftauen und braten.",
      "Funktioniert genauso gut mit magerem Hähnchen wie mit Rind oder Schwein.",
    ],
    usedIn: "Bulgogi, Dak-Bulgogi, Dwaeji-Bulgogi und die meisten koreanischen Grill-Marinaden dieser App.",
    tags: ["Korea", "Zart machen", "Grill/Wok"],
  },
  {
    id: "china-chao-shui-blanchieren",
    category: "Vorgaren & Blanchieren",
    emoji: "♨️",
    title: "Chao Shui — Blanchieren (焯水)",
    desc: "Kurzes Vorkochen von Fleisch, Knochen oder Gemüse in Wasser, um Blut, Schaum und unerwünschte Aromen zu entfernen, bevor das eigentliche Gericht weitergegart wird — die Basis für klare Brühen und sauber schmeckende Schmorgerichte.",
    method: [
      "Für Fleisch/Knochen: mit KALTEM Wasser (plus Ingwer/Frühlingszwiebel/etwas Wein) aufsetzen, langsam zum Kochen bringen — so tritt Blut gleichmäßig aus statt an der Oberfläche zu versiegeln.",
      "Sobald grauer Schaum aufsteigt, 1–2 Min. weiterköcheln, dann Fleisch herausnehmen und unter fließendem Wasser abspülen.",
      "Für Gemüse: in bereits KOCHENDES Wasser geben (umgekehrtes Prinzip) — kurz blanchieren, dann sofort in Eiswasser abschrecken, um Farbe und Biss zu erhalten.",
      "Blanchierwasser bei Fleisch/Knochen wegschütten, nicht als Brühen-Basis weiterverwenden.",
    ],
    tips: [
      "Kalt starten bei Fleisch, heiß starten bei Gemüse — die Eselsbrücke, die sich die meisten Regeln merkt.",
      "Besonders wichtig vor Schmorgerichten wie Hong Shao Rou oder vor dem Ansetzen klarer Brühen.",
      "Holzohrpilze und ähnliche getrocknete Pilze sollten aus Sicherheitsgründen immer blanchiert werden, nie roh gegessen.",
    ],
    usedIn: "Rinderknochenbrühe, Hong Shao Rou, Löwenkopf-Fleischbällchen, Holzohrpilz-Salat.",
    tags: ["China", "Vorgaren", "Brühe"],
  },
  {
    id: "japan-shimofuri-blutabspuelen",
    category: "Vorgaren & Blanchieren",
    emoji: "🧊",
    title: "Shimofuri (霜降り)",
    desc: "Fleisch, Fisch oder Innereien werden nur wenige Sekunden in kochendes Wasser getaucht und sofort in Eiswasser abgeschreckt — die Oberfläche gerinnt, Blut und Geruchsstoffe treten aus, das Innere bleibt roh.",
    method: [
      "Wasser zum Kochen bringen, parallel eine Schüssel Eiswasser bereitstellen.",
      "Fleisch/Fisch für nur 5–15 Sek. ins kochende Wasser geben, bis die Oberfläche sichtbar grau-weiß wird.",
      "Sofort mit einer Schaumkelle herausnehmen und direkt ins Eiswasser geben, um den Garvorgang zu stoppen.",
      "Trockentupfen, dann erst danach weiterverarbeiten (z. B. in den Nabe-Topf geben oder aufschneiden).",
    ],
    tips: [
      "Zeit ist entscheidend — bei zu langem Blanchieren gart das Fleisch durch statt nur an der Oberfläche zu gerinnen.",
      "Das Eiswasser-Bad ist kein optionaler Schritt: ohne sofortiges Abschrecken gart der Kern nach.",
      "Klassisch vor allem bei Rindfleisch, Hühnchen und manchen Innereien für Nabe (Hot Pot) verwendet.",
    ],
    usedIn: "Vorbereitung für Nabe-Hot-Pot, generell zum Entfernen von Blut/Fischgeruch vor dem Weiterverarbeiten.",
    tags: ["Japan", "Vorgaren", "Hot Pot"],
  },
  {
    id: "korea-dechigi-blanchieren",
    category: "Vorgaren & Blanchieren",
    emoji: "🥬",
    title: "Dechigi — Gemüse blanchieren (데치기)",
    desc: "Blattgemüse wie Spinat wird kurz in kochendem Salzwasser blanchiert und danach in kaltem Wasser abgeschreckt — die Standard-Vorbereitung für viele koreanische Namul-/Banchan-Beilagen.",
    method: [
      "Wasser mit einer Prise Salz zum Kochen bringen.",
      "Gemüse (z. B. Spinat, Sojasprossen) für 30–60 Sek. blanchieren, bis es gerade weich, aber noch farbintensiv ist.",
      "Sofort in kaltem Wasser abschrecken, um Farbe und Nährstoffe zu erhalten.",
      "Gründlich ausdrücken, bevor es mit Sesamöl, Knoblauch und Sojasauce zu Namul angemacht wird.",
    ],
    tips: [
      "Sojasprossen brauchen etwas länger (2–3 Min.) und sollten dabei nicht umgerührt werden, sonst wird der Geruch bitter.",
      "Blanchiertes Gemüse gut ausdrücken — überschüssiges Wasser verwässert das spätere Dressing.",
      "Lässt sich gut vorbereiten und portionsweise im Kühlschrank für spätere Banchan-Zubereitung lagern.",
    ],
    usedIn: "Sigeumchi-Namul (Spinat-Beilage), Sukjunamul (Sojasprossen-Beilage) und andere Banchan.",
    tags: ["Korea", "Vorgaren", "Banchan"],
  },
];
