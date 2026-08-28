/*
  Moving Kitchen Tales – Woche 10 (Start: 2026-03-02)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Virale Airfryer-Hacks, Udon-Trends, Reiskocher-Magie, CN/JP/KR + EU.
*/

import React from "react";
import PlanTemplate from "../PlanTemplate";

export const meta = {
  title: "Woche 10",
  startDate: "2026-03-02",
  id: "woche-10-2026-03-02",
  lang: "de",
  sidebar: "Woche 10 (2026-03-02)",
};

const DAY_NAME_DE = {
  mo: "Montag (2026-03-02)",
  di: "Dienstag (2026-03-03)",
  mi: "Mittwoch (2026-03-04)",
  do: "Donnerstag (2026-03-05)",
  fr: "Freitag (2026-03-06)",
  sa: "Samstag (2026-03-07)",
  so: "Sonntag (2026-03-08)",
};

const UI_TITLES = {
  main: "Rezepte Woche 10",
  list: "Einkaufsliste Woche 10",
};

export const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Airfryer Baked Oatmeal 烤燕麦",
    desc: "Wie ein kleiner Kuchen zum Frühstück. Haferflocken, Apfel und Zimt aus dem Airfryer.",
    story: "Ein riesiger Internet-Trend! Haferflocken werden mit etwas Milch und Backpulver vermischt und gebacken. Außen knusprig, innen wie ein warmer Muffin. Perfekt für kalte Morgen.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch 150 ml",
      "Apfel (gewürfelt) 1 Stück",
      "Eier 2 Stück",
      "Backpulver 1 TL",
      "Zimt 1 TL"
    ],
    steps: [
      "Alle Zutaten in einer Schüssel gut verrühren.",
      "In eine kleine, ofenfeste (bzw. airfryer-geeignete) Form füllen.",
      "Im Airfryer bei 170°C für ca. 12-15 Minuten backen, bis es aufgeht und durchgestockt ist."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Komplexe KH) · Schwangerschaft ✓ (Eier komplett durchgebacken)",
    swaps: "Apfel ↔ Beeren (TK)",
    side: "Ein Klecks Naturjoghurt.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Udon Cacio e Pepe",
    desc: "Die dicken japanischen Nudeln treffen auf den italienischen Käse-Pfeffer-Klassiker.",
    story: "Eine geniale Fusion. Die Stärke der dicken Udon-Nudeln bindet den Parmesan im Handumdrehen zu einer unfassbar cremigen Sauce. Ganz ohne Sahne!",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Parmesan (pasteurisiert, fein gerieben) 50 g",
      "Butter 20 g",
      "Schwarzer Pfeffer (frisch gemahlen) 1 TL",
      "Edamame (geschält) 50 g"
    ],
    steps: [
      "Udon in wenig Wasser kurz kochen, Wasser auffangen.",
      "Butter in einer Pfanne schmelzen, Pfeffer darin anrösten.",
      "Nudeln und etwas Nudelwasser in die Pfanne geben.",
      "Hitze reduzieren, Parmesan schrittweise einrühren bis es cremig wird. Edamame unterheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse ist pasteurisiert/Hartkäse) · Diabetes ✓",
    swaps: "Udon ↔ Spaghetti",
    side: "Tomatensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Hainan-Style Lachs 海南三文鱼 (Reiskocher)",
    desc: "Lachsfilet gart schonend im Ingwer-Reis und übernimmt die Aromen von Knoblauch und Soja.",
    story: "Eine Abwandlung des berühmten Hainan Chicken. Der Fisch gart im Dampf des Reises unglaublich sanft, während der Ingwer den Reis aromatisiert. Super gesund!",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Ingwer (fein gehackt) 15 g",
      "Knoblauch 2 Zehen",
      "Hühnerbrühe 240 ml",
      "Pak Choi 150 g"
    ],
    steps: [
      "Reis mit Brühe, Knoblauch und der Hälfte des Ingwers in den Reiskocher geben.",
      "Lachs mit restlichem Ingwer belegen und auf den Reis setzen.",
      "Reiskocher starten. Pak Choi in den letzten 5 Minuten in den Dämpfaufsatz legen.",
      "Mit etwas Sojasauce beträufeln und servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart im Topf >80°C sicher durch)",
    swaps: "Lachs ↔ Kabeljau",
    side: "Gedämpfter Pak Choi.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Fisch gibt noch Feuchtigkeit ab." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Warmer Seidentofu (Douhua) 豆花",
    desc: "Samtig weicher Tofu, warm serviert mit einer herzhaften Soja-Sesam-Sauce.",
    story: "Das klassische Straßen-Frühstück in China und Taiwan. Es gleitet wärmend den Hals hinunter und ist in 3 Minuten fertig. Ein purer Magenschmeichler.",
    target: "≈60 g KH (2 P.) · Protein ≈18 g p. P. (mit Brot)",
    ingredients: [
      "Seidentofu 300 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Frühlingszwiebel 10 g",
      "Vollkornbrot 4 Scheiben",
      "Getrocknete Mini-Garnelen (optional) 1 TL"
    ],
    steps: [
      "Seidentofu vorsichtig in eine Schüssel geben und 2 Minuten in der Mikrowelle oder im Wasserbad wärmen.",
      "Überschüssiges Wasser abgießen.",
      "Sojasauce und Sesamöl darüber träufeln. Mit Frühlingszwiebeln und (optional) Garnelen toppen.",
      "Dazu geröstetes Vollkornbrot essen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen müssen gut erhitzt/getrocknet sein)",
    swaps: "Vollkornbrot ↔ Reis",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Pyttipanna (Schwedische Pfanne)",
    desc: "Der schwedische Resteklassiker. Kartoffeln, Rinderhack-Bällchen und Zwiebeln aus der Heißluftfritteuse.",
    story: "Pyttipanna bedeutet 'Kleines in der Pfanne'. Im Airfryer werden die Kartoffeln perfekt knusprig und das Hackfleisch brät sich von ganz alleine sicher durch.",
    target: "≈85 g KH (2 P.) · Protein ≈25 g p. P.",
    ingredients: [
      "Kartoffeln (gewürfelt) 300 g",
      "Rinderhack (mager, in kleinen Bällchen) 150 g",
      "Zwiebel (grob gehackt) 1 Stück",
      "Olivenöl 1 EL",
      "Spiegelei (Eier) 2 Stück"
    ],
    steps: [
      "Kartoffelwürfel mit Öl und Gewürzen mischen. Im Airfryer bei 200°C 10 Min backen.",
      "Hackbällchen und Zwiebeln dazugeben, weitere 10 Min backen (bis das Fleisch komplett durch ist).",
      "In der Zwischenzeit Eier in der Pfanne braten (Eigelb vollständig stocken lassen!).",
      "Ei auf die Kartoffel-Fleisch-Mischung legen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch und Ei komplett durchgaren)",
    swaps: "Rinderhack ↔ Veganes Hack",
    side: "Eingelegte Rote Bete oder Gurken.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Nan Gua Fan 南瓜饭 (Kürbis-Schwein-Reis)",
    desc: "Kürbis und Schweinehack dämpfen zusammen im Reiskocher. Ein süß-herzhafter Traum.",
    story: "Ein Wohlfühlessen aus Südchina. Der Kürbis zerfällt fast und hüllt jedes Reiskorn in ein cremiges, süßliches Gold.",
    target: "≈80 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kürbis (z.B. Hokkaido, gewürfelt) 150 g",
      "Schweinehack (mager) 150 g",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Wasser"
    ],
    steps: [
      "Schweinehack kurz mit Sojasauce und Knoblauch vermengen.",
      "Reis waschen, in den Topf geben und Wasser (minimal weniger als normal) hinzufügen.",
      "Hackfleisch (zerpflückt!) und Kürbis auf dem Reis verteilen.",
      "Start drücken. Danach alles sorgfältig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack gart im Topf sicher durch) · Diabetes ✓",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "Miso-Suppe.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Etwas weniger als normal", notes: "Kürbis gibt Wasser ab." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Bánh Tráng Nướng (Reispapier-Pizza)",
    desc: "Vietnamesisches Streetfood aus dem Airfryer. Reispapier, Ei und Frühlingszwiebeln knusprig gebacken.",
    story: "Auf den Straßen Vietnams wird dieses 'Pizza' auf dem Grill gemacht. Im Airfryer plustert sich das Reispapier herrlich auf und das Ei stockt rasend schnell. Ein genialer Trend!",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reispapier 4 Blatt",
      "Eier 2 Stück",
      "Frühlingszwiebeln 20 g",
      "Reibekäse (pasteurisiert) 30 g",
      "Süße Chilisauce 1 EL",
      "Vollkorn-Toast (als Beilage) 2 Scheiben"
    ],
    steps: [
      "Ein Reispapier in den Airfryer legen. Ein halbes, verquirltes Ei mit Frühlingszwiebeln darauf verstreichen.",
      "Käse darüber streuen.",
      "Bei 180°C ca. 4-5 Minuten backen, bis das Ei vollkommen fest und der Rand knusprig ist.",
      "Falten, mit Chilisauce toppen. Toast dazu."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durch, Käse pasteurisiert)",
    swaps: "Käse ↔ Schinkenwürfel",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Gnocchi mit Edamame-Pesto",
    desc: "Proteinreiches Fusions-Pesto aus japanischen Edamame, serviert mit italienischen Gnocchi.",
    story: "Edamame haben extrem viel Protein. Püriert mit etwas Knoblauch und Öl ergeben sie ein cremiges Pesto, das leuchtend grün ist und fantastisch satt macht.",
    target: "≈85 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Gnocchi 300 g",
      "Edamame (geschält, TK) 150 g",
      "Knoblauch 1 Zehe",
      "Olivenöl 2 EL",
      "Zitronensaft 1 EL",
      "Parmesan 20 g"
    ],
    steps: [
      "Edamame in kochendem Wasser 3 Min weich kochen.",
      "Edamame mit Knoblauch, Öl, Zitrone und etwas Nudelwasser im Mixer pürieren.",
      "Gnocchi kochen, bis sie aufsteigen.",
      "Gnocchi in der Edamame-Sauce schwenken und mit Parmesan bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓ (Gute Fette und Proteine)",
    swaps: "Gnocchi ↔ Vollkorn-Penne",
    side: "Tomatensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Tomate & Mozzarella Risotto (Reiskocher)",
    desc: "Der asiatische 'Whole Tomato'-Trend trifft auf Italien. Kein Rühren nötig!",
    story: "Die Tomate schmilzt beim Kochen, und zusammen mit dem Käse entsteht am Ende ein cremiges Risotto. Absolut narrensicher.",
    target: "≈82 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Risottoreis 120 g",
      "Tomate (sehr groß und reif) 1 Stück",
      "Gemüsebrühe 240 ml",
      "Olivenöl 1 EL",
      "Mozzarella (pasteurisiert) 100 g",
      "Basilikum"
    ],
    steps: [
      "Reis, Brühe und Öl in den Topf geben.",
      "Strunk der Tomate entfernen und die Tomate im Ganzen in die Mitte setzen.",
      "Reiskocher starten.",
      "Am Ende die Tomate zerdrücken, Mozzarella unterheben bis er Fäden zieht."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Mozzarella aus pasteurisierter Milch) · Diabetes ✓",
    swaps: "Mozzarella ↔ Feta",
    side: "Gedämpftes Hühnchen oder Tofu für mehr Protein.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Brühe (etwas weniger als normal)", notes: "Tomate gut zerdrücken." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Tamagoyaki Sandwich たまごサンド",
    desc: "Ein gigantischer, fluffiger Ei-Block, eingeklemmt in Toast. Vollständig durchgegart.",
    story: "In Japanischen Konbinis (Supermärkten) ein Bestseller. Wir machen das Rührei extra dick, falten es in der Pfanne und packen es in Brot. Ein Traum.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 4 Stück",
      "Milch 20 ml",
      "Sojasauce 1 TL",
      "Mayonnaise (pasteurisiert) 1 EL"
    ],
    steps: [
      "Eier, Milch und Sojasauce gut verquirlen.",
      "In einer eckigen (oder normalen) Pfanne ein dickes Omelett braten, dabei immer wieder falten, bis es ein kompakter, dicker Block ist (komplett durchgaren!).",
      "Toast mit Mayo bestreichen, Ei-Block dazwischenklemmen.",
      "Warm servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett fest, Mayo aus Tube/Pasteurisiert)",
    swaps: "Vollkorn-Toast ↔ Normales Brot",
    side: "Kaffee oder Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Airfryer Tofu-Nuggets Sweet & Sour",
    desc: "Außen krosse Tofu-Bisse, geschwenkt in einer süß-sauren Sauce. Wie beim Chinesen, nur in gesund.",
    story: "Tofu kann knusprig! Das Geheimnis ist Maisstärke und der Airfryer. Er saugt danach die Sauce förmlich auf.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Fester Tofu 300 g",
      "Maisstärke 2 EL",
      "Sojasauce, Ketchup, Reisessig je 1 EL",
      "Zucker 1 TL",
      "Reis (gekocht) 150 g",
      "Paprika 100 g"
    ],
    steps: [
      "Tofu würfeln, gut abtupfen und in Maisstärke wenden.",
      "Im Airfryer bei 200°C für 15 Min knusprig backen.",
      "Saucen-Zutaten und Paprikawürfel in der Pfanne aufkochen.",
      "Tofu durchschwenken und mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Takikomi Gohan 炊き込みご飯 (Hühnchen & Shiitake)",
    desc: "Japanischer Würzreis aus dem Reiskocher mit Hühnchen und Pilzen.",
    story: "Das klassischste aller japanischen Reiskocher-Gerichte. Es gibt unzählige Variationen, aber Huhn und Shiitake sind die Könige des Umami.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust 200 g",
      "Shiitake-Pilze 100 g",
      "Karotte 50 g",
      "Dashi oder Hühnerbrühe 240 ml",
      "Sojasauce 2 EL"
    ],
    steps: [
      "Hähnchen in Würfel schneiden, Pilze und Karotten in feine Streifen.",
      "Reis und Brühe in den Topf. Sojasauce dazugeben.",
      "Zutaten oben auflegen (nicht einrühren!).",
      "Kochen und danach alles fluffig vermischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn durch) · Diabetes ✓",
    swaps: "Hähnchen ↔ Schweinefleisch",
    side: "Miso-Suppe.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe", notes: "Sojasauce zählt zur Flüssigkeit dazu." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Schwarzer Sesam Porridge 黑芝麻糊",
    desc: "Cremiger Haferbrei, eingefärbt und parfümiert mit schwarzer Sesampaste.",
    story: "Schwarzer Sesam ist ein Superfood der TCM (Traditionelle Chinesische Medizin). Er gibt dem Brei eine tiefschwarze Farbe und einen nussigen, reichen Geschmack.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch 400 ml",
      "Schwarze Sesampaste 2 EL",
      "Agavendicksaft 1 EL",
      "Walnüsse 20 g"
    ],
    steps: [
      "Haferflocken in der Milch aufkochen, bis der Brei andickt.",
      "Sesampaste und Agavendicksaft unterrühren.",
      "Mit gehackten Walnüssen garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Schwarze Sesampaste ↔ Erdnussbutter",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Gochujang-Sahne Pasta (Viral Trend)",
    desc: "Vollkorn-Penne in einer cremigen Sauce, gewürzt mit einer milden koreanischen Chilipaste.",
    story: "Italien trifft Korea. Gochujang ist leicht süßlich und umami-reich. Wenn man sie mit Sahne mischt, entsteht eine Sauce, die der berühmten 'Penne alla Vodka' Konkurrenz macht.",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Nudeln 130 g",
      "Gochujang (milde Paste) 1 EL",
      "Sahne (oder Sojasahne) 100 ml",
      "Knoblauch 1 Zehe",
      "Spinat 100 g",
      "Parmesan 20 g"
    ],
    steps: [
      "Nudeln kochen. Etwas Nudelwasser aufheben.",
      "Knoblauch in einer Pfanne anbraten. Gochujang kurz mitrösten.",
      "Sahne und Nudelwasser angießen, einköcheln lassen.",
      "Nudeln und Spinat unterheben, mit Parmesan bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse/Sahne erhitzt/pasteurisiert) · Diabetes ✓",
    swaps: "Gochujang ↔ Tomatenmark (falls es komplett mild sein soll)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Cola-Chicken-Wings-Reis 可乐鸡翅饭 (Reiskocher)",
    desc: "Ein verrückter Trend aus China: Hühnchen gart in Cola und Sojasauce butterzart auf dem Reis.",
    story: "Klingt absurd, schmeckt unglaublich! Die Säure und der Zucker der Cola karamellisieren das Fleisch und machen es butterzart. Für den Reiskocher nehmen wir Hühnerbrust oder entbeinte Keulen statt Flügel mit Knochen.",
    target: "≈86 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenfleisch (o. Knochen) 200 g",
      "Cola (Normal, kein Zero!) 100 ml",
      "Sojasauce 2 EL",
      "Ingwer 5 g",
      "Brokkoli 100 g"
    ],
    steps: [
      "Fleisch mit Sojasauce und Cola kurz marinieren.",
      "Reis mit Wasser in den Topf (weniger Wasser nehmen, Cola zählt mit!).",
      "Fleisch und Marinade darüber gießen.",
      "Kochen. Danach Brokkoli dämpfen und dazu servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn gart sicher durch, Zucker verkocht größtenteils) · Diabetes ⚠ (Cola enthält Zucker, aber portion ist moderat)",
    swaps: "Cola ↔ Hühnerbrühe mit 1 TL Honig",
    side: "Viel gedämpfter Brokkoli.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice", water: "Cola + Wasser (zusammen auf Standard-Level)", notes: "Macht den Reis herrlich dunkel." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Zucchini-Feta Frittata (Airfryer)",
    desc: "Eine unkomplizierte Eierspeise, die im Airfryer wie ein Soufflé aufgeht.",
    story: "Der Airfryer ist perfekt für Frittatas, weil die Hitze von allen Seiten zirkuliert. So verbrennt der Boden nicht, und das Ei stockt absolut gleichmäßig.",
    target: "≈45 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Eier 4 Stück",
      "Zucchini (geraspelt, ausgedrückt) 150 g",
      "Feta (pasteurisiert) 50 g",
      "Milch 20 ml",
      "Vollkornbrot 2 Scheiben"
    ],
    steps: [
      "Zucchini raspeln und das Wasser gut ausdrücken.",
      "Eier, Milch und Feta verquirlen, Zucchini unterheben.",
      "In eine airfryer-geeignete Form füllen.",
      "Bei 160°C ca. 15 Minuten backen, bis die Masse komplett durchgestockt und fest ist.",
      "Mit Brot servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett fest, Feta erhitzt) · Diabetes ✓",
    swaps: "Zucchini ↔ Karotte",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Dan Dan Mian 担担面 (Hühnerhack-Version)",
    desc: "Der Sichuan-Nudelklassiker: Milde Sesam-Soja-Sauce mit gebratenem Hackfleisch.",
    story: "Normalerweise schwimmt dieses Gericht in Chili-Öl. Wir fokussieren uns auf die reichhaltige Sesam-Tahini-Sauce und nutzen mageres Hühnerhack für eine leichte, umamireiche Mahlzeit.",
    target: "≈85 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Weizennudeln 150 g",
      "Hähnchenhack 150 g",
      "Tahini (Sesampaste) 2 EL",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Pak Choi 100 g"
    ],
    steps: [
      "Hackfleisch und Knoblauch im Wok krümelig und gut durch braten.",
      "Tahini, Sojasauce und etwas warmes Nudelwasser zu einer dicken Sauce rühren.",
      "Nudeln und Pak Choi kochen.",
      "Nudeln in die Sauce geben, Hackfleisch darüber häufen, gut umrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchenhack komplett durchbraten!)",
    swaps: "Hähnchenhack ↔ Tofu-Crumble",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Garnelen-Erbsen-Paella (Asia-Style Reiskocher)",
    desc: "Gelber Reis dank Kurkuma, gepaart mit Meeresfrüchten direkt aus dem Topf.",
    story: "Ein Crossover, das den Reiskocher feiert. Kurkuma ist extrem gesund und färbt den Reis wunderschön gelb. Schmeckt nach Urlaub am Mittelmeer.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (TK, aufgetaut) 200 g",
      "Erbsen (TK) 80 g",
      "Kurkuma-Pulver 1/2 TL",
      "Gemüsebrühe 240 ml",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Reis, Brühe, Kurkuma und Knoblauchzehe in den Topf geben.",
      "Garnelen und Erbsen oben auflegen.",
      "Start drücken.",
      "Nach dem Kochen die Knoblauchzehe zerdrücken, alles vermischen und servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen dämpfen im Topf sicher durch)",
    swaps: "Garnelen ↔ Hähnchenbrust",
    side: "Ein Spritzer Zitrone.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Kurkuma färbt stark, vorsicht beim Rühren." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Earl Grey Oatmeal",
    desc: "Haferflocken, gekocht in Milch und starkem Earl Grey Tee.",
    story: "Die Bergamotte-Note des Tees gibt dem Haferbrei einen unfassbar eleganten Geschmack. Ein 'London Fog' zum Löffeln.",
    target: "≈65 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Milch 300 ml",
      "Earl Grey Tee (stark aufgebrüht) 100 ml",
      "Honig 1 EL",
      "Mandeln 20 g"
    ],
    steps: [
      "Tee aufbrühen.",
      "Haferflocken mit Milch und Tee aufkochen und eindicken lassen.",
      "Mit Honig und Mandeln servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Teemenge moderat)",
    swaps: "Earl Grey ↔ Chai Tee",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Crispy Rice Paper Dumplings (Airfryer)",
    desc: "Quadratische, knusprige Teigtaschen aus Reispapier, gefüllt mit Tofu und Gemüse.",
    story: "Noch ein Reispapier-Hack! Statt Teig zu kneten, falten wir Reispapier wie Briefumschläge um die Füllung. Der Airfryer macht sie knusprig und fettarm.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reispapier 8 Blatt",
      "Fester Tofu 150 g",
      "Karotten & Kohl (fein gehackt) 100 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Reis (als Beilage) 100 g"
    ],
    steps: [
      "Tofu zerdrücken und mit Gemüse, Soja und Sesamöl mischen.",
      "Reispapier nass machen, 2 EL Füllung in die Mitte, zu einem Quadrat falten (am besten 2 Blätter pro Dumpling für Stabilität).",
      "Im Airfryer bei 190°C ca. 10 Min backen, bis sie aufgebläht und knusprig sind.",
      "Mit Reis und Dip servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Tofu ↔ Schweinehack (vorher anbraten!)",
    side: "Sojasauce zum Dippen.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Curry-Hühnchen-Pilaf (Reiskocher)",
    desc: "Reis, der mit mildem Currypulver, Hühnchen und Erbsen gedämpft wird.",
    story: "Ein Klassiker aus den Yoshoku-Küchen (westliche Speisen auf japanisch) Japans. Das Currypulver bringt Wärme, das Hühnchen gart buttrig weich.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust 200 g",
      "Erbsen (TK) 80 g",
      "Mildes Currypulver 1 TL",
      "Hühnerbrühe 240 ml",
      "Zwiebel 50 g"
    ],
    steps: [
      "Hühnchen in Würfel schneiden, Zwiebel fein hacken.",
      "Reis, Brühe, Currypulver und Zwiebel in den Topf. Gut mischen.",
      "Hühnchen und Erbsen darauflegen.",
      "Start drücken und am Ende alles durchheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hühnchen gart im Dampf komplett durch)",
    swaps: "Hähnchen ↔ Kichererbsen",
    side: "Ein Klecks Joghurt obendrauf.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Currypulver gut mit der Brühe verrühren." },
  },
];

export default function Woche10DE() {
  return (
    <PlanTemplate
      meta={meta}
      data={DATA}
      dayNames={DAY_NAME_DE}
      uiTitles={UI_TITLES}
      subtitle="Airfryer Hacks · Udon-Trends · Reiskocher-Magie · Balanced"
      heroChips={["Woche 10", "Udon Cacio e Pepe & Reiskocher-Hacks", "Täglich 1× 🍚 Reiskocher"]}
    />
  );
}
