// src/plans/2026/Woche-23-2026-06-01.de.jsx
import React, { useMemo, useState, useEffect } from "react";
import { exportHTMLById, ensureScript } from "@/utils/exporters";
import { buildEmbedCss } from "@/utils/embedCss";

/*
  GhibliKitchen – Woche 23 (Start: 2026-06-01)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Japan (ausgefallen, aber extrem leicht), Reiskocher-Magie, Schwangerschaftssicher.
*/

// ---- Meta ----
export const meta = {
  title: "Woche 23",
  startDate: "2026-06-01",
  id: "woche-23-2026-06-01",
  lang: "de",
  sidebar: "Woche 23 (2026-06-01)",
};

const FILE_BASE = "Woche 23 2026-06-01";

const UI_TITLES = {
  main: "Rezepte Woche 23",
  list: "Einkaufsliste Woche 23",
};

// ---- THEME ----
const THEME_VARS_LIGHT = {
  "--bg": "#FAF7F1",
  "--text": "#111827",
  "--panel": "#FFFFFF",
  "--border": "rgba(0,0,0,.10)",
  "--muted": "#6B7280",
  "--chip-bg": "#EEF8F3",
  "--shadow": "0 8px 24px rgba(0,0,0,.12)",
  "--accent": "#e07a9a",
  "--accent-2": "#2aa769",
  "--grad-hero": "linear-gradient(135deg, rgba(224,122,154,.2), rgba(42,167,105,.18))",
  "--btn-on-bg": "#EEF8F3",
  "--btn-border": "rgba(0,0,0,.15)",
};
const THEME_VARS_DARK = {
  "--bg": "#0f1115",
  "--text": "#E5E7EB",
  "--panel": "#161A22",
  "--border": "rgba(255,255,255,.12)",
  "--muted": "#9CA3AF",
  "--chip-bg": "rgba(255,255,255,.06)",
  "--shadow": "0 10px 28px rgba(0,0,0,.45)",
  "--accent": "#e07a9a",
  "--accent-2": "#2aa769",
  "--grad-hero": "linear-gradient(135deg, rgba(224,122,154,.18), rgba(42,167,105,.15))",
  "--btn-on-bg": "rgba(255,255,255,.10)",
  "--btn-border": "rgba(255,255,255,.18)",
};

function useSystemPrefersDark() {
  const [pref, setPref] = useState(false);
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!m) return;
    setPref(m.matches);
    const fn = (e) => setPref(e.matches);
    m.addEventListener?.("change", fn);
    return () => m.removeEventListener?.("change", fn);
  }, []);
  return pref;
}
function themeVars(mode) {
  return mode === "dark" ? THEME_VARS_DARK : THEME_VARS_LIGHT;
}

function getLangFromQuery() {
  if (typeof window === "undefined") return null;
  try {
    const qs = new URLSearchParams(window.location.search);
    const fromQuery = qs.get("lang");
    return fromQuery ? String(fromQuery).slice(0, 2).toLowerCase() : null;
  } catch { return null; }
}
function useLangHint() {
  const [q, setQ] = useState(getLangFromQuery());
  useEffect(() => {
    const onChange = () => setQ(getLangFromQuery());
    window.addEventListener?.("popstate", onChange);
    window.addEventListener?.("hashchange", onChange);
    return () => {
      window.removeEventListener?.("popstate", onChange);
      window.removeEventListener?.("hashchange", onChange);
    };
  }, []);
  return q;
}

const scrollToId = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const cardPanelStyle = {
  background: "var(--panel)",
  borderRadius: 18,
  padding: 24,
  boxShadow: "var(--shadow)",
  border: "1px solid var(--border)",
};

const tagChip = (text) => (
  <span className="ghk-chip" key={text} style={{ display: "inline-block", padding: "2px 10px", borderRadius: 999, background: "var(--chip-bg)", border: "1px solid var(--border)", fontSize: 12, marginRight: 6, marginBottom: 6 }}>
    {text}
  </span>
);

const viralChip = () => (
  <span className="ghk-chip" key="viral" style={{ display: "inline-block", padding: "2px 10px", borderRadius: 999, background: "linear-gradient(135deg, #ff7e5f, #feb47b)", color: "#fff", fontWeight: "bold", border: "none", fontSize: 12, marginRight: 6, marginBottom: 6 }}>
    🔥 Viral Trend
  </span>
);

const DAYS_ORDER = ["mo", "di", "mi", "do", "fr", "sa", "so"];
const DAY_NAME_DE = {
  mo: "Montag (2026-06-01)",
  di: "Dienstag (2026-06-02)",
  mi: "Mittwoch (2026-06-03)",
  do: "Donnerstag (2026-06-04)",
  fr: "Freitag (2026-06-05)",
  sa: "Samstag (2026-06-06)",
  so: "Sonntag (2026-06-07)",
};

// -----------------------------------------------------------------------
// DATA (ALLE 21 REZEPTE)
// -----------------------------------------------------------------------
const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Airfryer Omurice-Toast オムライス風トースト",
    desc: "Ein Toast, belegt mit Ketchup-Reis, umhüllt von einem im Airfryer gebackenen Omelett.",
    story: "Omurice ist das japanische Soulfood schlechthin. Wir machen daraus ein einfaches Frühstück. Der Ketchup-Reis wird auf den Toast gedrückt und mit Ei übergossen. Im Airfryer stockt das Ei perfekt.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Reis (gekocht) 100 g",
      "Ketchup 2 EL",
      "Eier 3 Stück",
      "Käse (Gouda, gerieben) 30 g"
    ],
    steps: [
      "Gekochten Reis mit Ketchup und Käse vermengen.",
      "Die Reismasse flach auf die Toastscheiben drücken.",
      "Eier verquirlen, leicht salzen und vorsichtig über die Toastscheiben gießen, sodass der Reis bedeckt ist.",
      "Im Airfryer bei 170°C ca. 8-10 Min backen, bis das Ei komplett durchgestockt ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebacken) · Diabetes ✓",
    swaps: "Toast ↔ Reispapier",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Miso Butter Corn Udon 味噌バターコーンうどん",
    desc: "Dicke Udon-Nudeln in einer schnellen, cremigen Brühe aus Miso, Butter und Mais.",
    story: "Eine Hommage an die berühmten Hokkaido-Ramen. Miso und Butter sind eine unschlagbare Kombination. Der süße Mais bringt einen fantastischen Crunch.",
    target: "≈80 g KH (2 P.) · Protein ≈15 g p. P. (mit Beilage mehr)",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Gemüsebrühe oder Dashi 600 ml",
      "Miso-Paste (hell) 2 EL",
      "Butter 20 g",
      "Mais (Dose, abgetropft) 100 g",
      "Frühlingszwiebel 20 g"
    ],
    steps: [
      "Brühe in einem Topf erhitzen (nicht sprudelnd kochen).",
      "Udon-Nudeln und Mais hinzugeben und ca. 2-3 Minuten heiß werden lassen.",
      "Topf vom Herd nehmen. Die Miso-Paste und die Butter einrühren, bis eine cremige Emulsion entsteht.",
      "Mit gehackten Frühlingszwiebeln anrichten."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Udon ↔ Ramen-Nudeln",
    side: "Ein hartgekochtes Ei on top.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Hotate Gohan 帆立ご飯 (Jakobsmuschel-Reis)",
    desc: "Edler Reis, gegart mit Jakobsmuscheln und Bambussprossen.",
    story: "Klingt nach einem Sterne-Restaurant, ist aber ein extrem simples Reiskocher-Gericht. Die Jakobsmuscheln geben ihren eleganten, süßlichen Saft direkt an den Reis ab.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Jakobsmuscheln (TK, aufgetaut, ohne Rogen) 150 g",
      "Bambussprossen (Dose, in Streifen) 50 g",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi oder Brühe 240 ml"
    ],
    steps: [
      "Jakobsmuscheln trocken tupfen, große Exemplare halbieren.",
      "Reis, Dashi, Sojasauce und Mirin in den Reiskocher füllen.",
      "Jakobsmuscheln und Bambussprossen oben auflegen. Start drücken.",
      "Nach dem Kochen alles vorsichtig auflockern, damit die Muscheln nicht zerfallen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Muscheln dämpfen auf >80°C sicher durch)",
    swaps: "Jakobsmuscheln ↔ Garnelen",
    side: "Ein kleiner Gurkensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Bambus bringt einen grandiosen Biss." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Matcha French Toast 抹茶フレンチトースト",
    desc: "Vollkorntoast, gewendet in einer Matcha-Ei-Mischung und in der Pfanne goldbraun gebacken.",
    story: "Eine japanische Version des Frühstücksklassikers. Der Matcha verleiht dem Toast eine wunderschöne grüne Farbe und eine leicht herbe Note, die grandios zu etwas Ahornsirup passt.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 2 Stück",
      "Milch 50 ml",
      "Matcha-Pulver 1 TL",
      "Agavendicksaft 1 EL",
      "Butter (zum Braten)"
    ],
    steps: [
      "Matcha-Pulver in einem winzigen Schluck heißem Wasser klümpchenfrei auflösen.",
      "Eier, Milch, Matcha und Agavendicksaft in einem flachen Teller verquirlen.",
      "Toastscheiben von beiden Seiten gut darin tränken.",
      "In einer Pfanne mit Butter bei mittlerer Hitze braten, bis das Ei vollständig gestockt und der Toast goldbraun ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchbraten!)",
    swaps: "Matcha ↔ Zimt",
    side: "Frische Beeren.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Omu-Yakisoba オム焼きそば",
    desc: "Japanische Bratnudeln (Yakisoba), versteckt in einem dünnen, durchgebratenen Omelett.",
    story: "Auf japanischen Sommerfesten (Matsuri) ein Hit. Die Kombination aus herzhaften Bratnudeln und dem Ei-Mantel ist purer Spaß auf dem Teller.",
    target: "≈85 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Weizennudeln oder Yakisoba-Nudeln 150 g",
      "Schweineschnitzel oder Hähnchen (in feinen Streifen) 100 g",
      "Weißkohl (geschnitten) 100 g",
      "Tonkatsu-Sauce oder Yakisoba-Sauce 3 EL",
      "Eier 3 Stück"
    ],
    steps: [
      "Fleisch und Kohl in der Pfanne komplett durchbraten. Nudeln und Sauce dazugeben, kräftig anrösten. Herausnehmen.",
      "Eier verquirlen, leicht salzen. Die Hälfte der Eimasse in einer sauberen Pfanne zu einem dünnen, GANZ DURCHGEBRATENEN Omelett braten.",
      "Eine Portion Nudeln auf eine Hälfte des Omeletts legen, die andere Hälfte darüberklappen.",
      "Mit der zweiten Portion wiederholen. Mit etwas Ketchup oder Mayo garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch und Eier GANZ durchbraten)",
    swaps: "Schweinefleisch ↔ Tofu-Stifte",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Reiskocher Kare Raisu カレーライス (Japanisches Curry)",
    desc: "Mildes japanisches Curry mit Hühnchen, Kartoffeln und Karotten, als One-Pot-Meal im Reiskocher.",
    story: "Japanisches Curry schmeckt süßlich, herzhaft und sehr mild. Wir geben den Curry-Roux-Block direkt zum Reis und den Zutaten in den Reiskocher. So entsteht Reis und dicke Sauce in einem Durchgang.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Kartoffeln & Karotten (gewürfelt) 150 g",
      "Japanischer Curry-Block (Golden Curry, mild) 1 Würfel",
      "Wasser oder Hühnerbrühe 280 ml"
    ],
    steps: [
      "Reis waschen. Wasser, Reis, Kartoffeln, Karotten und das Hähnchen in den Reiskocher geben.",
      "Den Curry-Block (evtl. leicht zerkleinert) oben auflegen.",
      "Start drücken. Das Curry schmilzt während des Garens.",
      "Nach dem Öffnen sehr gründlich durchmischen, damit sich das Curry gleichmäßig als cremige Sauce um den Reis legt."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchen gart sicher durch)",
    swaps: "Hähnchen ↔ Rindergulasch",
    side: "Eingelegter Ingwer oder Gurken.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Etwas mehr als Standard (wg. Kartoffeln/Curry)", notes: "Extrem cremig, das Curry dickt stark an." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Airfryer Baked TKG (Tamago Kake Gohan) 卵かけご飯",
    isViral: true,
    desc: "Der TKG-Trend, schwangerschaftssicher gemacht: Reis-Ei-Patties, knusprig gebacken.",
    story: "TKG (rohes Ei über heißem Reis) ist das japanische Standard-Frühstück. Da rohes Ei in der Schwangerschaft riskant ist, mischen wir das Ei mit dem Reis, formen Patties und backen sie im Airfryer auf. Außen ein Crunch, innen wunderbar weich.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reis (gekocht) 200 g",
      "Eier 2 Stück",
      "Sojasauce 1 EL",
      "Sesamöl 1 TL",
      "Nori (zerbröselt) 1 Blatt"
    ],
    steps: [
      "Gekochten Reis, Eier, Sojasauce und Sesamöl gründlich vermischen.",
      "Aus der Masse 4 flache Patties formen. Leicht ölen.",
      "Im Airfryer bei 190°C ca. 12 Min backen, bis sie komplett durchgestockt und außen knusprig sind.",
      "Mit Nori bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchgebacken) · Diabetes ✓",
    swaps: "Nori ↔ Frühlingszwiebeln",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Nasu Dengaku 茄子田楽 (Airfryer)",
    desc: "Butterweiche Auberginen-Hälften mit einer süßlichen Miso-Glasur.",
    story: "Dieses Gericht sieht aus wie Kunst, ist aber unfassbar simpel. Die Miso-Glasur karamellisiert im Airfryer und die Aubergine schmilzt auf der Zunge.",
    target: "≈60 g KH (2 P.) · Protein ≈15 g p. P. (mit Beilage)",
    ingredients: [
      "Aubergine 1 große",
      "Miso-Paste (hell) 2 EL",
      "Agavendicksaft 1 EL",
      "Mirin 1 EL",
      "Reis (gekocht) 150 g",
      "Edamame (aufgetaut) 100 g"
    ],
    steps: [
      "Aubergine längs halbieren, das Fruchtfleisch rautenförmig einschneiden. Etwas einölen.",
      "Im Airfryer bei 180°C ca. 12 Min backen, bis sie weich ist.",
      "Miso, Agave und Mirin zu einer Paste verrühren.",
      "Die Paste dick auf die Auberginenhälften streichen und weitere 3-4 Min backen, bis die Glasur Blasen wirft.",
      "Mit Reis und Edamame servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓",
    swaps: "Aubergine ↔ Zucchini (groß)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Taimeshi 鯛めし (Goldbrassen-Reis)",
    desc: "Der Stolz der Ehime-Präfektur: Goldbrasse, die im Reiskocher auf einem Bett aus Ingwer und Reis dämpft.",
    story: "Ein Festtagsessen in Japan. Die Goldbrasse gibt einen feinen, unglaublich eleganten Geschmack an den Reis ab. Sobald man den Reiskocher öffnet, strömt einem ein grandioser Duft entgegen.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Goldbrassenfilet (Tai, ohne Gräten!) 200 g",
      "Ingwer (feine Streifen) 15 g",
      "Dashi-Brühe 240 ml",
      "Sojasauce (hell) 2 EL",
      "Mirin 1 EL"
    ],
    steps: [
      "Reis waschen. Dashi, Sojasauce und Mirin in den Reiskocher geben.",
      "Das Fischfilet oben auflegen und mit den Ingwerstreifen bedecken.",
      "Start drücken.",
      "Nach dem Kochen den Fisch leicht zerteilen und alles vorsichtig mischen, ohne den Fisch komplett zu zermatschen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fisch dämpft sicher auf >80°C durch) · Diabetes ✓",
    swaps: "Goldbrasse ↔ Wolfsbarsch oder Kabeljau",
    side: "Ein Schälchen Wakame-Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Unbedingt Filet auf Gräten abtasten." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Kinako Oatmeal きな粉オートミール",
    desc: "Haferbrei, verfeinert mit geröstetem Sojabohnenmehl (Kinako) und Agavendicksaft.",
    story: "Kinako schmeckt extrem nussig, fast ein bisschen wie Erdnussbutter, ist aber reines Soja-Protein. In Japan streut man es über Mochi. Im Porridge ist es eine absolute Offenbarung.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Sojamilch oder Milch 400 ml",
      "Kinako (Geröstetes Sojabohnenmehl) 3 EL",
      "Agavendicksaft 1 EL",
      "Walnüsse 20 g"
    ],
    steps: [
      "Haferflocken in der Milch aufkochen, bis der Brei cremig ist.",
      "Das Kinako-Pulver und den Agavendicksaft einrühren (es dickt den Brei nochmal toll an).",
      "In Schüsseln füllen und mit Walnüssen bestreuen."
    ],
    checks: "Balanced ✓ · Diabetes ✓ (Kinako hat viel Protein/Ballaststoffe) · Schwangerschaft ✓",
    swaps: "Kinako ↔ Erdnussmus (falls Kinako nicht verfügbar)",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Airfryer Ebi Fry エビフライ",
    desc: "Knusprig panierte Garnelen im japanischen Panko-Stil, fettarm gebacken.",
    story: "Normalerweise werden diese Garnelen tief frittiert und sind in jeder Bento-Box zu finden. Wir sprühen die Panko-Panade leicht mit Öl ein und lassen den Airfryer den perfekten Crunch erzeugen.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Garnelen (groß, TK aufgetaut) 200 g",
      "Panko (Paniermehl) 40 g",
      "Ei 1 Stück & Mehl (Panierstraße)",
      "Mayonnaise (pasteurisiert) 2 EL",
      "Reis (gekocht) 150 g",
      "Weißkohl (fein gehobelt) 100 g"
    ],
    steps: [
      "Garnelen trocken tupfen. Erst in Mehl, dann Ei, dann in Panko wenden.",
      "In den Airfryer legen und leicht mit Speiseöl besprühen.",
      "Bei 190°C ca. 8-10 Min backen (Garnelen müssen GANZ durch sein, die Panade goldbraun).",
      "Auf dem Kohl mit Reis servieren. Etwas Mayo dazu."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen GANZ durchgaren, Mayo pasteurisiert) · Diabetes ✓",
    swaps: "Garnelen ↔ Hähnchen-Innenfilets",
    side: "Ein Spritzer Zitrone.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Okonomiyaki Rice お好み焼きご飯 (Reiskocher)",
    isViral: true,
    desc: "Der Geschmack des japanischen Kohl-Pfannkuchens, transformiert in ein einfaches Reiskocher-Gericht.",
    story: "Ein grandioser Hack! Weißkohl und Schweinefleisch garen im Reis. Am Ende wird alles in der Schüssel mit der typischen Okonomiyaki-Sauce und Mayo garniert. Schmeckt 1:1 wie das Original, ohne Pfannenwenden.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinegeschnetzeltes oder Speckwürfel 100 g",
      "Weißkohl (grob gehackt) 150 g",
      "Dashi oder Brühe 240 ml",
      "Okonomiyaki-Sauce & Mayo (pasteurisiert)",
      "Aonori oder Nori-Brösel"
    ],
    steps: [
      "Reis, Brühe, Fleisch und den Kohl in den Reiskocher füllen. Start drücken.",
      "Nach dem Kochen gründlich durchmischen.",
      "In Schüsseln anrichten. Ein Gittermuster aus Okonomiyaki-Sauce und Mayo darüberziehen.",
      "Mit Nori-Bröseln garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch dampft durch, Mayo aus der Tube) · Diabetes ✓",
    swaps: "Schweinefleisch ↔ Räuchertofu",
    side: "-",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Der Kohl gibt etwas Wasser ab, Reis wird schön weich." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Tamago Sando たまごサンド (Eiersalat-Sandwich)",
    desc: "Das ikonische japanische Eiersalat-Sandwich, extrem cremig auf weichem Toast.",
    story: "Jeder Japan-Tourist liebt diese Sandwiches aus dem Konbini. Das Geheimnis ist das feine Zerdrücken der Eier und ein Hauch japanischer Mayo. Wir nutzen komplett hartgekochte Eier für maximale Sicherheit.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Toastbrot (ohne Rinde) 4 Scheiben",
      "Eier (hartgekocht) 4 Stück",
      "Mayonnaise (pasteurisiert) 2 EL",
      "Salz & Prise weißer Pfeffer"
    ],
    steps: [
      "Hartgekochte Eier pellen und mit einer Gabel in einer Schüssel extrem fein zerdrücken.",
      "Mayonnaise, Salz und Pfeffer unterrühren, bis eine glatte, cremige Paste entsteht.",
      "Die Paste dick auf die Toastscheiben streichen, zuklappen.",
      "In der Mitte durchschneiden."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier 10 Min hartkochen, Mayo aus Tube)",
    swaps: "Toastbrot ↔ Vollkornbrot (weniger authentisch, aber gesünder)",
    side: "Kaffee oder Matcha.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Wafu Pasta 和風パスタ (Mushroom & Soy)",
    desc: "Spaghetti in einer japanisch inspirierten Butter-Sojasauce mit Pilzen.",
    story: "Wafu Pasta bedeutet 'Pasta im japanischen Stil'. Die Kombination aus Butter und Sojasauce erzeugt ein tiefes Umami, das die Pilze hervorragend aufnehmen. In 15 Minuten fertig.",
    target: "≈85 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Spaghetti (Vollkorn) 150 g",
      "Champignons oder Shiitake 200 g",
      "Butter 30 g",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Nori (zerbröselt)"
    ],
    steps: [
      "Spaghetti in Salzwasser kochen. Etwas Nudelwasser aufheben.",
      "Pilze in Scheiben schneiden. In einer Pfanne ohne Fett anbraten, bis sie braun sind.",
      "Butter und Knoblauch dazugeben.",
      "Nudeln, Sojasauce und einen Schuss Nudelwasser in die Pfanne geben, kräftig schwenken.",
      "Mit Nori bestreut servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ · Diabetes ✓ (Vollkorn-Pasta)",
    swaps: "Spaghetti ↔ Udon",
    side: "Ein Tomatensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Sake to Corn Gohan 鮭とコーンご飯 (Reiskocher)",
    desc: "Lachsfilet und süßer Mais dämpfen zusammen im Reis.",
    story: "Eine sehr beliebte Kombination bei japanischen Familien. Der süßliche Mais bricht die Herbe des Lachses, während die Dashi-Brühe alles harmonisch verbindet.",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Lachsfilet 200 g",
      "Mais (Dose, abgetropft) 100 g",
      "Sojasauce 1 EL",
      "Dashi oder Brühe 240 ml",
      "Butter 10 g"
    ],
    steps: [
      "Reis, Dashi und Sojasauce in den Reiskocher geben.",
      "Den abgetropften Mais einrühren. Lachsfilet oben auflegen.",
      "Start drücken.",
      "Nach dem Kochen die Butter hineingeben, den Lachs zerteilen und alles gut auflockern."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Lachs gart im Topf auf >80°C durch) · Diabetes ✓",
    swaps: "Lachs ↔ Hähnchenbrust",
    side: "Etwas Frühlingszwiebel.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Butter am Schluss gibt ein tolles Finish." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Fluffy Soufflé Pancake (Pfanne)",
    desc: "Die gigantisch hohen, zitternden japanischen Pancakes für das Wochenende.",
    story: "Jeder kennt die Videos dieser dicken Pancakes. Der Trick ist steif geschlagenes Eiweiß und ein Deckel auf der Pfanne, damit sie im Dampf hochziehen und auch in der Mitte GANZ durchgaren.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Eier 2 Stück",
      "Mehl 40 g",
      "Zucker 2 TL",
      "Milch 20 ml",
      "Backpulver 1/2 TL",
      "Agavendicksaft oder Ahornsirup"
    ],
    steps: [
      "Eier trennen. Eigelb mit Milch, Mehl und Backpulver glatt rühren.",
      "Eiweiß mit Zucker sehr steif schlagen. In drei Etappen unter die Eigelb-Masse heben.",
      "In eine leicht geölte Pfanne bei SEHR schwacher Hitze hohe Teigtürmchen setzen.",
      "Deckel drauf! 5-6 Min backen. Vorsichtig wenden. Wieder Deckel drauf und 5 Min backen, bis sie KOMPLETT durch sind.",
      "Mit Sirup servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Deckel ist Pflicht für den Kern!)",
    swaps: "Zucker ↔ Erythrit (wer Zucker sparen möchte)",
    side: "Frisches Obst.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Airfryer Karaage 唐揚げ (Japanisches Fried Chicken)",
    desc: "Marinierte, mit Kartoffelstärke panierte Hähnchenstücke, kross aus dem Airfryer.",
    story: "Karaage ist meist frittiert. Wir nutzen Kartoffelstärke (Katakuriko) oder Maisstärke und den Airfryer, um eine hauchdünne, extrem knusprige Kruste ohne tiefes Fett zu erzeugen.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Hähnchenkeulen-Fleisch (oder Brust, gewürfelt) 250 g",
      "Maisstärke 3 EL",
      "Sojasauce 2 EL",
      "Knoblauch & Ingwer (gepresst/gerieben)",
      "Reis (gekocht) 150 g",
      "Weißkohl (sehr fein gehobelt) 100 g"
    ],
    steps: [
      "Hähnchen in Sojasauce, Knoblauch und Ingwer kurz marinieren.",
      "Stücke großzügig in der Maisstärke wälzen. Überschuss abklopfen.",
      "Im Airfryer (leicht mit Öl besprüht) bei 190°C ca. 12-15 Min backen (komplett durchgaren!).",
      "Auf dem Kohl mit Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn durchgaren!)",
    swaps: "Hähnchen ↔ Fester Tofu",
    side: "Ein Spritzer Zitrone.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Oden-Style Daikon & Beef Rice (Reiskocher)",
    desc: "Weißer Rettich und Rindfleisch, gegart in einer intensiven, süßlichen Dashi-Brühe.",
    story: "Oden ist ein japanischer Wintereintopf. Der weiße Rettich (Daikon) saugt die Brühe auf wie ein Schwamm. Im Reiskocher zerfällt er fast, und das Rindfleisch sorgt für Fülle.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Daikon (Rettich, gewürfelt) 150 g",
      "Rindfleisch (Gulasch oder Streifen) 150 g",
      "Sojasauce 2 EL & Mirin 1 EL",
      "Dashi-Brühe 240 ml"
    ],
    steps: [
      "Reis, Dashi, Soja und Mirin in den Reiskocher füllen.",
      "Rettichwürfel und das Rindfleisch darauf verteilen.",
      "Start drücken.",
      "Nach dem Kochen alles vorsichtig durchheben. Der Rettich wird extrem heiß und weich, vorsicht beim ersten Bissen!"
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft)",
    swaps: "Daikon ↔ Kohlrabi",
    side: "Etwas Frühlingszwiebel.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Daikon gibt den perfekten Oden-Geschmack." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Airfryer Yaki-Onigiri 焼きおにぎり",
    isViral: true,
    desc: "Gegrillte japanische Reisbällchen, glasiert mit Sojasauce. Knusprig aus dem Airfryer.",
    story: "Dieser Trend ist genial, um übrig gebliebenen Reis vom Vortag zu verwerten. Die Sojasauce karamellisiert auf der Außenseite, innen bleibt der Reis schön weich.",
    target: "≈70 g KH (2 P.) · Protein ≈15 g p. P. (mit Beilage)",
    ingredients: [
      "Reis (gekocht, klebrig) 200 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Mirin 1 TL",
      "Spiegelei (durchgebraten) 2 Stück"
    ],
    steps: [
      "Aus dem kalten Reis mit feuchten Händen feste Dreiecke (Onigiri) formen.",
      "Sojasauce, Sesamöl und Mirin mischen. Die Reisbällchen von beiden Seiten damit bepinseln.",
      "Im Airfryer auf etwas Backpapier bei 190°C ca. 10 Min backen. Zwischendurch wenden und nochmals bepinseln, bis sie krustig sind.",
      "Mit durchgebratenen Eiern servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durch!) · Diabetes ✓",
    swaps: "Reis ↔ Man kann auch Thunfisch in die Mitte füllen",
    side: "Ein Stück Gurke.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Tonjiru 豚汁 (Pork Miso Soup) mit Udon",
    desc: "Eine rustikale, extrem füllende Miso-Suppe mit Schweinefleisch und Wurzelgemüse.",
    story: "Normale Miso-Suppe ist leicht. Tonjiru ist eine Mahlzeit! Durch das Schweinefleisch und das Gemüse wird die Brühe süßlich und herzhaft. Wir essen dicke Udon-Nudeln dazu.",
    target: "≈85 g KH (2 P.) · Protein ≈25 g p. P.",
    ingredients: [
      "Udon-Nudeln 200 g",
      "Schweinefleisch (Bauch oder Schnitzel, in Streifen) 100 g",
      "Karotten & Daikon (oder Rettich) 150 g",
      "Dashi oder Brühe 600 ml",
      "Miso-Paste 2 EL",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Schweinefleisch in einem Topf anbraten (komplett durchgaren!). Karotten und Rettich kurz mitbraten.",
      "Mit Brühe ablöschen, ca. 15 Min köcheln lassen, bis das Gemüse weich ist.",
      "Udon-Nudeln in der Brühe erwärmen.",
      "Topf vom Herd nehmen, Miso-Paste einrühren. Mit Frühlingszwiebeln toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch gut durchbraten)",
    swaps: "Schweinefleisch ↔ Shiitake-Pilze (vegane Version)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Kakuni-Style Pork Belly Rice 豚の角煮風 (Reiskocher)",
    desc: "Der Geschmack des berühmten geschmorten japanischen Schweinebauchs (Kakuni), vereinfacht für den Reiskocher.",
    story: "Kakuni kocht normalerweise stundenlang. Im Reiskocher geben wir den Schweinebauch mit Sojasauce, Zucker und Ingwer direkt auf den Reis. Das Fett schmilzt in die Körner – ein unfassbares Soulfood.",
    target: "≈80 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinebauch (in mundgerechten Würfeln) 150 g",
      "Sojasauce 3 EL",
      "Mirin 2 EL",
      "Zucker 1 TL",
      "Ingwer 10 g"
    ],
    steps: [
      "Reis mit Wasser in den Topf geben.",
      "Sojasauce, Mirin, Zucker und gehackten Ingwer einrühren.",
      "Die Schweinebauch-Würfel oben auf den Reis legen.",
      "Start drücken. Danach sehr gut durchmischen, damit sich das Aroma verteilt."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird im Topf stark durcherhitzt)",
    swaps: "Schweinebauch ↔ Rindfleisch (Gulasch)",
    side: "Ein großer Spinatsalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Standard", notes: "Sojasauce macht den Reis herrlich braun." },
  },
];

// -----------------------------------------------------------------------
// Shopping List Logic
// -----------------------------------------------------------------------
const CANON = {
  // Protein
  "Schweineschnitzel": { group: "Protein/Fisch/Tofu", label: "Schweineschnitzel", unitDefault: "g" },
  "Schweinegeschnetzeltes": { group: "Protein/Fisch/Tofu", label: "Schweinegeschnetzeltes", unitDefault: "g" },
  "Schweinebauch": { group: "Protein/Fisch/Tofu", label: "Schweinebauch", unitDefault: "g" },
  "Schweinefleisch": { group: "Protein/Fisch/Tofu", label: "Schweinefleisch", unitDefault: "g" },
  "Rindfleisch": { group: "Protein/Fisch/Tofu", label: "Rindfleisch", unitDefault: "g" },
  "Hähnchenbrust": { group: "Protein/Fisch/Tofu", label: "Hähnchenbrust", unitDefault: "g" },
  "Hähnchenkeulen-Fleisch": { group: "Protein/Fisch/Tofu", label: "Hähnchenkeulen-Fleisch", unitDefault: "g" },
  "Lachsfilet": { group: "Protein/Fisch/Tofu", label: "Lachsfilet", unitDefault: "g" },
  "Kabeljau": { group: "Protein/Fisch/Tofu", label: "Kabeljau/Seelachs", unitDefault: "g" },
  "Goldbrassenfilet": { group: "Protein/Fisch/Tofu", label: "Goldbrassenfilet", unitDefault: "g" },
  "Garnelen": { group: "Protein/Fisch/Tofu", label: "Garnelen (groß)", unitDefault: "g" },
  "Jakobsmuscheln": { group: "Protein/Fisch/Tofu", label: "Jakobsmuscheln (TK)", unitDefault: "g" },
  "Cabanossi": { group: "Protein/Fisch/Tofu", label: "Cabanossi/Speck", unitDefault: "g" },
  "Speckwürfel": { group: "Protein/Fisch/Tofu", label: "Speckwürfel/Pancetta", unitDefault: "g" },
  "Tofu": { group: "Protein/Fisch/Tofu", label: "Tofu", unitDefault: "g" },
  "Eier": { group: "Protein/Fisch/Tofu", label: "Eier", unitDefault: "Stück" },
  "Käse": { group: "Protein/Fisch/Tofu", label: "Gouda / Käse", unitDefault: "g" },
  "Parmesan": { group: "Protein/Fisch/Tofu", label: "Parmesan", unitDefault: "g" },
  "Quark": { group: "Protein/Fisch/Tofu", label: "Quark", unitDefault: "EL" },

  // Gemüse
  "Pak Choi": { group: "Gemüse/Pilze", label: "Pak Choi", unitDefault: "g" },
  "Weißkohl": { group: "Gemüse/Pilze", label: "Weißkohl", unitDefault: "g" },
  "Karotte": { group: "Gemüse/Pilze", label: "Karotten", unitDefault: "g" },
  "Gurke": { group: "Gemüse/Pilze", label: "Gurke", unitDefault: "g" },
  "Daikon": { group: "Gemüse/Pilze", label: "Daikon/Rettich", unitDefault: "g" },
  "Aubergine": { group: "Gemüse/Pilze", label: "Aubergine", unitDefault: "g" },
  "Edamame": { group: "Gemüse/Pilze", label: "Edamame", unitDefault: "g" },
  "Mais": { group: "Gemüse/Pilze", label: "Mais (Dose)", unitDefault: "g" },
  "Bambussprossen": { group: "Gemüse/Pilze", label: "Bambussprossen (Dose)", unitDefault: "g" },
  "Champignons": { group: "Gemüse/Pilze", label: "Champignons", unitDefault: "g" },
  "Shiitake": { group: "Gemüse/Pilze", label: "Shiitake (getrocknet)", unitDefault: "g" },
  "Frühlingszwiebel": { group: "Gemüse/Pilze", label: "Frühlingszwiebeln", unitDefault: "g" },
  "Zwiebel": { group: "Gemüse/Pilze", label: "Zwiebeln", unitDefault: "g" },
  "Knoblauch": { group: "Gemüse/Pilze", label: "Knoblauch", unitDefault: "Zehe" },
  "Ingwer": { group: "Gemüse/Pilze", label: "Ingwer", unitDefault: "g" },
  "Tomaten": { group: "Gemüse/Pilze", label: "Tomaten (frisch/Kirsch)", unitDefault: "g" },
  "Apfel": { group: "Gemüse/Pilze", label: "Apfel", unitDefault: "Stück" },
  "Blaubeeren": { group: "Gemüse/Pilze", label: "Blaubeeren", unitDefault: "g" },
  "Kartoffeln": { group: "Gemüse/Pilze", label: "Kartoffeln", unitDefault: "g" },

  // Carb
  "Reis": { group: "Reis/Nudeln/Sättigung", label: "Reis (roh/gekocht)", unitDefault: "g" },
  "Udon": { group: "Reis/Nudeln/Sättigung", label: "Udon-Nudeln", unitDefault: "g" },
  "Weizennudeln": { group: "Reis/Nudeln/Sättigung", label: "Weizennudeln/Yakisoba", unitDefault: "g" },
  "Toastbrot": { group: "Reis/Nudeln/Sättigung", label: "Toastbrot / Vollkorn", unitDefault: "Scheiben" },
  "Vollkorn-Toast": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Toast", unitDefault: "Scheiben" },
  "Haferflocken": { group: "Reis/Nudeln/Sättigung", label: "Haferflocken", unitDefault: "g" },
  "Weichweizengrieß": { group: "Reis/Nudeln/Sättigung", label: "Grieß", unitDefault: "g" },
  "Mehl": { group: "Reis/Nudeln/Sättigung", label: "Mehl", unitDefault: "g" },
  "Maisstärke": { group: "Reis/Nudeln/Sättigung", label: "Maisstärke/Katakuriko", unitDefault: "EL" },
  "Panko": { group: "Reis/Nudeln/Sättigung", label: "Panko/Paniermehl", unitDefault: "g" },
  "Kinako": { group: "Reis/Nudeln/Sättigung", label: "Kinako (Sojabohnenmehl)", unitDefault: "EL" },

  // Pantry
  "Sojasauce": { group: "Algen/Brühen/Würze", label: "Sojasauce", unitDefault: "EL" },
  "Austernsauce": { group: "Algen/Brühen/Würze", label: "Austernsauce", unitDefault: "EL" },
  "Tonkatsu-Sauce": { group: "Algen/Brühen/Würze", label: "Tonkatsu-Sauce", unitDefault: "EL" },
  "Okonomiyaki-Sauce": { group: "Algen/Brühen/Würze", label: "Okonomiyaki-Sauce", unitDefault: "EL" },
  "Sesamöl": { group: "Algen/Brühen/Würze", label: "Sesamöl", unitDefault: "TL" },
  "Reisessig": { group: "Algen/Brühen/Würze", label: "Reisessig", unitDefault: "EL" },
  "Gemüsebrühe": { group: "Algen/Brühen/Würze", label: "Gemüsebrühe", unitDefault: "ml" },
  "Hühnerbrühe": { group: "Algen/Brühen/Würze", label: "Hühnerbrühe", unitDefault: "ml" },
  "Dashi": { group: "Algen/Brühen/Würze", label: "Dashi", unitDefault: "ml" },
  "Milch": { group: "Algen/Brühen/Würze", label: "Milch", unitDefault: "ml" },
  "Sahne": { group: "Algen/Brühen/Würze", label: "Sahne", unitDefault: "ml" },
  "Butter": { group: "Algen/Brühen/Würze", label: "Butter", unitDefault: "g" },
  "Olivenöl": { group: "Algen/Brühen/Würze", label: "Olivenöl", unitDefault: "EL" },
  "Mayonnaise": { group: "Algen/Brühen/Würze", label: "Mayo (Tube, pasteurisiert)", unitDefault: "EL" },
  "Ketchup": { group: "Algen/Brühen/Würze", label: "Ketchup", unitDefault: "EL" },
  "Miso-Paste": { group: "Algen/Brühen/Würze", label: "Miso-Paste", unitDefault: "EL" },
  "Mirin": { group: "Algen/Brühen/Würze", label: "Mirin", unitDefault: "EL" },
  "Agavendicksaft": { group: "Algen/Brühen/Würze", label: "Agavendicksaft", unitDefault: "EL" },
  "Zucker": { group: "Algen/Brühen/Würze", label: "Zucker", unitDefault: "TL" },
  "Zimt": { group: "Algen/Brühen/Würze", label: "Zimt", unitDefault: "TL" },
  "Kardamom": { group: "Algen/Brühen/Würze", label: "Kardamom", unitDefault: "TL" },
  "Matcha": { group: "Algen/Brühen/Würze", label: "Matcha-Pulver", unitDefault: "TL" },
  "Curry-Block": { group: "Algen/Brühen/Würze", label: "Curry-Block (Japanisch)", unitDefault: "Würfel" },
  "Nori": { group: "Algen/Brühen/Würze", label: "Nori-Blätter", unitDefault: "Blatt" },
  "Aonori": { group: "Algen/Brühen/Würze", label: "Aonori (Algenflocken)", unitDefault: "Prise" },
  "Walnüsse": { group: "Algen/Brühen/Würze", label: "Walnüsse", unitDefault: "g" },
  "Mandeln": { group: "Algen/Brühen/Würze", label: "Mandeln", unitDefault: "g" },
  "Backpulver": { group: "Algen/Brühen/Würze", label: "Backpulver", unitDefault: "TL" },
};

function aggregateList(data, canon) {
  const totals = {};
  for (const r of data) {
    for (const ing of r.ingredients) {
      const m = String(ing).match(/^(.*)\s(\d+[\.,]?\d*)\s?(g|ml|Stück|Zehe|Prise|Stangen|Scheiben|TL|EL|Stk|Blatt|Würfel)?/i);
      if (!m) continue;
      let name = m[1].trim();
      const qty = parseFloat(m[2].replace(",", "."));
      const unit = m[3] || "";
      
      let key = Object.keys(canon).find((k) => name.toLowerCase().includes(k.toLowerCase()));
      if (!key) {
        if (name.includes("Reis (roh)") || name.includes("Reis (gekocht)")) key = "Reis";
        else if (name.includes("Toast")) key = "Vollkorn-Toast";
        else if (name.includes("Käse")) key = "Käse";
        else if (name.includes("Nudeln")) key = "Weizennudeln";
      }
      
      if (!key) continue;
      
      const c = canon[key];
      const id = `${key}`;
      
      if (!totals[id]) totals[id] = { key, label: c.label, unit: c.unitDefault, qty: 0, group: c.group };
      totals[id].qty += qty; 
    }
  }
  const groups = { "Protein/Fisch/Tofu": [], "Gemüse/Pilze": [], "Reis/Nudeln/Sättigung": [], "Algen/Brühen/Würze": [] };
  Object.values(totals).forEach((t) => {
    if(groups[t.group]) groups[t.group].push(t);
  });
  Object.keys(groups).forEach((g) => groups[g].sort((a, b) => a.label.localeCompare(b.label)));
  return groups;
}

// -----------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------

function animePlaceholder(title) {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#FCE7F3'/><stop offset='100%' stop-color='#DCFCE7'/>
    </linearGradient></defs>
    <rect width='1200' height='675' fill='url(#g)'/>
    <g font-family='sans-serif'>
      <text x='40' y='120' font-size='44' fill='#1F2937'>🍱 ${esc(title)}</text>
      <text x='40' y='180' font-size='20' fill='#374151'>GhibliKitchen</text>
    </g>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function ImageBanner({ meal, year = 2026, weekFolder = "kw23" }) {
  const [src, setSrc] = useState("");
  
  useEffect(() => {
    const preferred = `/plan-art/${year}/${weekFolder}/${meal.id}.jpg`;
    const fallback = animePlaceholder(meal.title);
    setSrc(fallback);

    const img = new Image();
    img.onload = () => setSrc(preferred);
    img.onerror = () => setSrc(fallback);
    img.src = preferred;
  }, [meal, year, weekFolder]);

  return (
    <div className="ghk-art" style={{ position: "relative", borderRadius: 14, overflow: "hidden", marginBottom: 12, border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
      <img src={src} alt={meal.title} style={{ width: "100%", height: "auto", display: "block", aspectRatio: "16/9", objectFit: "cover" }} loading="lazy" />
    </div>
  );
}

function MealCard({ meal }) {
  return (
    <div className="meal-card" style={cardPanelStyle} id={`meal-${meal.id}`}>
      <ImageBanner meal={meal} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        <h3 style={{ margin: 0, lineHeight: 1.3 }}>{meal.title}</h3>
        <div>
          {meal.isViral ? viralChip() : null}
          {tagChip(meal.target)}
          {meal.riceCooker?.enabled ? tagChip("🍚 Reiskocher") : null}
          {meal.remind ? tagChip("💊 Metformin") : null}
        </div>
      </div>
      {meal.desc ? <p style={{ marginTop: 8, color: "var(--muted)", fontStyle: "italic" }}>{meal.desc}</p> : null}
      {meal.story ? <p style={{ marginTop: 4, color: "var(--text)", fontSize: "0.9em" }}>{meal.story}</p> : null}
      
      <h4>Zutaten (2 Personen)</h4>
      <ul>{meal.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
      
      <h4>Zubereitung</h4>
      <ol>{meal.steps.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
      
      <div style={{ marginTop: 16, padding: "12px 16px", background: "var(--chip-bg)", borderRadius: 12 }}>
        <p style={{margin:"0 0 4px"}}><strong>Hinweise:</strong> {meal.checks}</p>
        <p style={{margin:"0 0 4px"}}><strong>Austausche:</strong> {meal.swaps}</p>
        <p style={{margin:0}}><strong>Beilage:</strong> {meal.side}</p>
      </div>

      {meal.riceCooker?.enabled ? (
        <div style={{ marginTop: 12 }}>
          <details>
            <summary style={{cursor:"pointer", fontWeight:600}}>Reiskocher-Details</summary>
            <ul style={{marginTop:8}}>
              <li><strong>Programm:</strong> {meal.riceCooker.program}</li>
              <li><strong>Wasser:</strong> {meal.riceCooker.water}</li>
              {meal.riceCooker.notes ? <li><strong>Info:</strong> {meal.riceCooker.notes}</li> : null}
            </ul>
          </details>
        </div>
      ) : null}
    </div>
  );
}

function DaySection({ dayKey, meals, dayName }) {
  return (
    <section className="day-section" style={{ marginBottom: 40 }} id={`day-${dayKey}`}>
      <h2 style={{ marginBottom: 16, borderBottom:"2px solid var(--border)", paddingBottom:8 }}>
        {dayName.replace(/\s*\(.+\)$/, "")} <span className="ghk-date-paren" style={{fontSize:"0.7em", color:"var(--muted)", fontWeight:400}}>{dayName.match(/\(.+\)$/)?.[0] ?? ""}</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
        {meals.map((m) => <MealCard key={m.id} meal={m} />)}
      </div>
    </section>
  );
}

function WeekOverview({ data, DAY_NAME_DE, meta }) {
  const byDay = useMemo(() => {
    const map = { mo: [], di: [], mi: [], do: [], fr: [], sa: [], so: [] };
    for (const r of data) map[r.id.split("-")[0]].push(r);
    return map;
  }, [data]);

  const pill = (meal) => {
    let icon = "🍽️";
    if (meal.riceCooker?.enabled) icon = "🍚";
    if (meal.isViral) icon = "🔥";
    
    return (
      <a
        key={meal.id}
        href={`#meal-${meal.id}`}
        onClick={scrollToId(`meal-${meal.id}`)}
        style={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: 6, 
          padding: "6px 10px", 
          borderRadius: 999, 
          border: meal.isViral ? "1px solid #ff7e5f" : "1px solid var(--border)", 
          background: meal.isViral ? "linear-gradient(135deg, rgba(255,126,95,0.1), rgba(254,180,123,0.1))" : "var(--panel)", 
          textDecoration: "none", 
          color: "var(--text)", 
          boxShadow: "var(--shadow)", 
          fontSize: 13, 
          cursor: "pointer" 
        }}
      >
        {icon} <span>{meal.title.split(" (")[0]}</span>
      </a>
    );
  };

  return (
    <section style={{ marginBottom: 32 }}>
      <div style={{ ...cardPanelStyle, background: "var(--panel)", border: "1px solid var(--border)" }}>
        <div className="ghk-hero-inner" style={{ padding: 18, borderRadius: 12, marginBottom: 16, background: "var(--grad-hero)" }}>
          <h2 style={{ margin: 0 }}>
            Woche 23 – Übersicht <span className="ghk-date-paren" style={{ color: "var(--muted)" }}>({meta.startDate})</span>
          </h2>
          <p style={{ marginTop: 6, color: "var(--muted)" }}>Japan (ausgefallen & leicht) · Reiskocher · Balanced</p>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          {DAYS_ORDER.map((d) => (
            <div key={d} style={{ padding: 12, borderRadius: 12, border: "1px solid var(--border)", background: "var(--panel)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 8, flexWrap: "wrap" }}>
                <strong>{DAY_NAME_DE[d]}</strong>
                <a 
                  href={`#day-${d}`} 
                  onClick={scrollToId(`day-${d}`)}
                  style={{ fontSize: 12, color: "var(--text)", textDecoration: "none", border: "1px solid var(--border)", padding: "4px 8px", borderRadius: 8, background: "var(--chip-bg)", cursor: "pointer" }}
                >
                  zum Tag ▿
                </a>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {byDay[d].map((m) => pill(m))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- RiceCooker Section ----
function RiceCookerSection({ data }) {
  const perDay = useMemo(() => {
    const map = { mo: null, di: null, mi: null, do: null, fr: null, sa: null, so: null };
    if (!data) return map; 
    for (const r of data) {
      const day = r.id.split("-")[0];
      if (r.riceCooker?.enabled && !map[day]) map[day] = r;
    }
    return map;
  }, [data]);

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ borderBottom: "2px solid var(--border)", paddingBottom: 10, marginBottom: 20 }}>🍚 Reiskocher-Gerichte (Übersicht)</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        {DAYS_ORDER.map((d) => {
          const r = perDay[d];
          return (
            <div key={d} style={{ ...cardPanelStyle }}>
              <h3 style={{ marginTop: 0, fontSize: 16 }}>
                {DAY_NAME_DE[d].split(" ")[0]} – {r ? r.title : "Kein Reiskocher-Gericht"}
              </h3>
              {r ? (
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  <li><strong>Programm:</strong> {r.riceCooker.program}</li>
                  <li><strong>Wasser:</strong> {r.riceCooker.water}</li>
                  {r.riceCooker.notes ? <li><strong>Notiz:</strong> {r.riceCooker.notes}</li> : null}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
      <p style={{ marginTop: 12, color: "var(--muted)" }}>Tägliche Entlastung: Taimeshi, Hotate Gohan, Curry Rice, Okonomiyaki-Reis und mehr!</p>
    </section>
  );
}

// PDF Export (nur noch Drucken Funktion)
const doPrint = () => window.print();

// Theme Switch Component
function ThemeSwitch({ mode, setMode, effectiveDark }) {
  return (
    <div className="ghk-theme-switch" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: 6, border: "1px solid var(--btn-border)", borderRadius: 999, background: "var(--panel)" }}>
      <button type="button" className="ghk-tab" aria-pressed={mode === "auto"} onClick={() => setMode(mode === "auto" ? (effectiveDark ? "dark" : "light") : "auto")} style={{ padding: "6px 10px" }}>Auto</button>
      <label className="ghk-switch" title={effectiveDark ? "Dunkel" : "Hell"}>
        <input type="checkbox" checked={effectiveDark} onChange={(e) => setMode(e.target.checked ? "dark" : "light")} disabled={mode === "auto"} />
        <span className="ghk-slider" />
      </label>
    </div>
  );
}

// -----------------------------------------------------------------------
// MAIN EXPORT
// -----------------------------------------------------------------------
export default function Woche23DE() {
  const langFromUrl = useLangHint();
  const hiddenByLang = langFromUrl && langFromUrl !== meta.lang;
  if (hiddenByLang) return null;

  const systemDark = useSystemPrefersDark();
  const [mode, setMode] = useState("auto");
  const effectiveDark = mode === "auto" ? systemDark : mode === "dark";
  const vars = themeVars(effectiveDark ? "dark" : "light");

  const [tab, setTab] = useState("kochbuch");
  const listGroups = useMemo(() => aggregateList(DATA, CANON), []);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    return () => Object.keys(vars).forEach((k) => root.style.removeProperty(k));
  }, [vars]);

  const Styles = () => (
    <style>{`
      .meal-card p { line-height: 1.75; margin-bottom: 1rem; }
      .meal-card li { line-height: 1.7; margin-bottom: 0.5rem; }
      .meal-card h4 { margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--accent-2); font-weight: 700; }
      
      .ghk-tab { display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 8px 16px; border-radius: 12px; border: 1px solid var(--btn-border); background: var(--panel); color: var(--text); cursor: pointer; font-weight: 600; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: all 0.2s ease; }
      .ghk-tab:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-color: var(--accent-2); }
      .ghk-switch{ --w:48px; --h:28px; --k:22px; position:relative; display:inline-block; width:var(--w); height:var(--h); }
      .ghk-switch input{ opacity:0; width:0; height:0; position:absolute; }
      .ghk-switch .ghk-slider{ position:absolute; inset:0; border-radius:var(--h); background:var(--btn-border); border:1px solid var(--btn-border); transition:0.2s; }
      .ghk-switch .ghk-slider::before{ content:""; position:absolute; height:var(--k); width:var(--k); left:3px; top:50%; transform:translateY(-50%); border-radius:999px; background:var(--panel); box-shadow:var(--shadow); transition:transform .2s; }
      .ghk-switch input:checked + .ghk-slider{ background:var(--accent-2); border-color:var(--accent-2); }
      .ghk-switch input:checked + .ghk-slider::before{ transform:translateY(-50%) translateX(calc(var(--w) - var(--k) - 6px)); }

      .ghk-segment{ display:inline-flex; gap:4px; border:1px solid var(--btn-border); border-radius:999px; padding:4px; background:var(--panel); }
      .ghk-segment label{ position:relative; display:inline-flex; align-items:center; border-radius:999px; overflow:hidden; cursor:pointer; }
      .ghk-segment input[type="radio"]{ position:absolute; inset:0; opacity:0; cursor:pointer; }
      .ghk-segment span{ display:inline-block; padding:8px 14px; border-radius:999px; border:1px solid transparent; }
      .ghk-segment input[type="radio"]:checked + span{ background:var(--btn-on-bg); outline:2px solid var(--accent-2); outline-offset:1px; }

      #ghk-content{ display:block !important; }
      #ghk-content > [hidden]{ display:none !important; }

      .ghk-exporting{ width:794px !important; max-width:794px !important; margin:0 auto !important; background:#fff !important; box-sizing:border-box !important; font-size:12pt !important; line-height:1.45 !important; --bg:#FFFFFF; --text:#111827; --panel:#FFFFFF; --border:rgba(0,0,0,.12); --muted:#374151; --chip-bg:#F3F4F6; --btn-border:rgba(0,0,0,.15); --btn-on-bg:#F3F4F6; }
      .ghk-exporting *{ box-shadow:none !important; }
      .ghk-exporting .ghk-art, .ghk-exporting img{ display:none !important; visibility:hidden !important; }
      .ghk-exporting .ghk-chip, .ghk-exporting .ghk-date-paren{ display:none !important; }

      @media print { .ghk-art, .ghk-date-paren{ display:none !important; visibility:hidden !important; } html, body, #root { background:#fff !important; } aside, nav, header, footer, .ghk-no-print { display:none !important; } #kochbuch-root { width: calc(210mm - 24mm); margin:0 auto !important; background:#fff !important; border:none !important; box-shadow:none !important; } .ghk-hero, .ghk-hero-inner { background:#fff !important; box-shadow:none !important; } .day-section, .meal-card { break-inside:avoid; page-break-inside:avoid; } h2, h3 { break-after:avoid; page-break-after:avoid; } #kochbuch-root * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } a[href]:after { content:""; } }
    `}</style>
  );

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", padding: 24 }}>
      <Styles />

      <div className="ghk-hero" style={{ ...cardPanelStyle, padding: 16, marginBottom: 18 }}>
        <div className="ghk-hero-inner" style={{ background: "var(--grad-hero)", borderRadius: 12, padding: 14, marginBottom: 12, display: "grid", gap: 8 }}>
          <h1 style={{ margin: 0 }}>{UI_TITLES.main}</h1>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {tagChip(`Start: ${meta.startDate}`)}
            {tagChip("Woche 23")}
            {tagChip("Japan & Izakaya-Vibes")}
            {tagChip("Täglich 1× 🍚 Reiskocher")}
          </div>
        </div>

        <div className="ghk-no-print" style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <fieldset className="ghk-segment" role="radiogroup" aria-label="Ansicht wählen">
            <label>
              <input type="radio" name="ghk-view" value="kochbuch" checked={tab === "kochbuch"} onChange={() => setTab("kochbuch")} />
              <span>{UI_TITLES.main}</span>
            </label>
            <label>
              <input type="radio" name="ghk-view" value="liste" checked={tab === "liste"} onChange={() => setTab("liste")} />
              <span>{UI_TITLES.list}</span>
            </label>
          </fieldset>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginLeft: "auto" }}>
            <button type="button" onClick={doPrint} className="ghk-tab"><span className="icon">🖨️</span> Drucken</button>
            <ThemeSwitch mode={mode} setMode={setMode} effectiveDark={effectiveDark} />
          </div>
        </div>
      </div>

      <div id="kochbuch-root" style={{ ...cardPanelStyle }}>
        <WeekOverview data={DATA} DAY_NAME_DE={DAY_NAME_DE} meta={meta} />
        <div id="ghk-content" data-view={tab}>
          <section id="ghk-pane-kochbuch" aria-hidden={tab !== "kochbuch"} hidden={tab !== "kochbuch"}>
            {DAYS_ORDER.map((d) => (
              <DaySection key={d} dayKey={d} meals={DATA.filter(r => r.id.startsWith(d))} dayName={DAY_NAME_DE[d]} />
            ))}
            <RiceCookerSection data={DATA} />
          </section>
          <section id="ghk-pane-liste" aria-hidden={tab !== "liste"} hidden={tab !== "liste"}>
            {Object.entries(listGroups).map(([group, items]) => (
              <div key={group} style={{ marginBottom: 20 }}>
                <h3>{group}</h3>
                <ul>{items.map((it, idx) => <li key={idx}>{`${it.label} – ${Math.round(it.qty * 10) / 10} ${it.unit}`}</li>)}</ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}