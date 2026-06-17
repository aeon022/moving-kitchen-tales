// src/plans/2026/Woche-22-2026-05-25.de.jsx
import React, { useMemo, useState, useEffect } from "react";
import { exportHTMLById, ensureScript } from "@/utils/exporters";
import { buildEmbedCss } from "@/utils/embedCss";

/*
  GhibliKitchen – Woche 22 (Start: 2026-05-25)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte)
  Fokus: Viel Chinesisch (Wok & Reiskocher), Virale Airfryer-Hacks, Schwangerschaftssicher.
*/

// ---- Meta ----
export const meta = {
  title: "Woche 22",
  startDate: "2026-05-25",
  id: "woche-22-2026-05-25",
  lang: "de",
  sidebar: "Woche 22 (2026-05-25)",
};

const FILE_BASE = "Woche 22 2026-05-25";

const UI_TITLES = {
  main: "Rezepte Woche 22",
  list: "Einkaufsliste Woche 22",
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
  mo: "Montag (2026-05-25)",
  di: "Dienstag (2026-05-26)",
  mi: "Mittwoch (2026-05-27)",
  do: "Donnerstag (2026-05-28)",
  fr: "Freitag (2026-05-29)",
  sa: "Samstag (2026-05-30)",
  so: "Sonntag (2026-05-31)",
};

// -----------------------------------------------------------------------
// DATA (ALLE 21 REZEPTE)
// -----------------------------------------------------------------------
const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Jianbing Reispapier Hack 煎饼 (Airfryer)",
    isViral: true,
    desc: "Chinesischer Streetfood-Crêpe als genialer Airfryer-Hack mit Reispapier.",
    story: "Ein echtes Jianbing zu machen dauert ewig. TikTok hat die Lösung: Mehrere Schichten nasses Reispapier, bestrichen mit Ei und Frühlingszwiebeln. Im Airfryer backt es extrem knusprig auf!",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Reispapier 6 Blatt",
      "Eier 2 Stück",
      "Frühlingszwiebeln 30 g",
      "Sojasauce 1 TL",
      "Hoisin-Sauce 1 EL",
      "Vollkorn-Toast (als Beilage) 2 Scheiben"
    ],
    steps: [
      "Eier mit Soja und Frühlingszwiebeln verquirlen.",
      "Ein Blatt Reispapier nass machen. Etwas Eimasse verstreichen. Nächstes Blatt darauflegen (3 Schichten pro Crêpe).",
      "Im Airfryer (leicht ölen!) bei 190°C ca. 8-10 Min backen, bis das Ei im Inneren KOMPLETT durchgestockt und das Papier kross ist.",
      "Mit Hoisin-Sauce bestreichen, falten und servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eimasse komplett durchbacken)",
    swaps: "Reispapier ↔ Vollkorn-Tortillas",
    side: "Eine Tasse Jasmintee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Beef Chow Fun 干炒牛河 (Wok)",
    desc: "Breite Reisnudeln, pfannengerührt mit Rindfleischstreifen und Sojasprossen.",
    story: "Der Klassiker aus den kantonesischen Restaurants. Breite Reisnudeln sind ein Traum, wenn sie die würzige dunkle Sojasauce aufsaugen.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reisnudeln (breit, getrocknet) 150 g",
      "Rindfleisch (sehr feine Streifen) 200 g",
      "Sojasprossen 100 g",
      "Sojasauce (dunkel & hell) 3 EL",
      "Frühlingszwiebel 20 g",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Reisnudeln nach Packung einweichen/kochen, gut abtropfen lassen.",
      "Rindfleisch und Knoblauch im heißen Wok scharf anbraten (komplett durchgaren!).",
      "Sojasprossen und Frühlingszwiebeln dazugeben, 1 Min mitbraten.",
      "Nudeln und Sojasauce untermischen, kräftig durchschwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Rindfleisch GANZ durchbraten) · Diabetes ✓",
    swaps: "Rindfleisch ↔ Tofu (gebraten)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Donggu Huaji Fan 冬菇滑鸡饭 (Reiskocher)",
    desc: "Kantonesisches Hähnchen mit Shiitake-Pilzen, schonend über dem Reis gedämpft.",
    story: "Ein authentisches chinesisches One-Pot-Gericht. Die getrockneten Pilze bringen ein unvergleichliches Aroma mit, das direkt in den Reis zieht.",
    target: "≈82 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Shiitake (getrocknet) 20 g",
      "Sojasauce 2 EL",
      "Ingwer (fein gehackt) 10 g",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Shiitake in heißem Wasser 15 Min einweichen, dann in Streifen schneiden (Einweichwasser aufheben!).",
      "Hähnchen mit Sojasauce und Ingwer vermengen.",
      "Reis, Brühe, Shiitake-Wasser (als Teil der Flüssigkeit), Pilze und das Hähnchen in den Reiskocher füllen.",
      "Start drücken. Nach dem Kochen kräftig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn dampft sicher auf >80°C durch)",
    swaps: "Hähnchenbrust ↔ Hähnchenkeule",
    side: "Gedämpfter Brokkoli.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe + Pilzwasser (Standard)", notes: "Pilzwasser bringt extrem viel Umami." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Tomaten-Ei-Nudelsuppe 番茄鸡蛋面",
    desc: "Warme, stärkende Nudelsuppe in einer natürlichen Tomatenbrühe.",
    story: "Ein Klassiker aus der chinesischen Hausmannskost. Die Säure der frischen Tomaten macht morgens wach, und das Ei liefert eine gute Portion Protein.",
    target: "≈75 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Weizennudeln 120 g",
      "Tomaten (sehr reif) 2 Stück",
      "Eier 3 Stück",
      "Gemüsebrühe 600 ml",
      "Frühlingszwiebel 10 g",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Tomaten würfeln und in einem Topf anbraten, bis sie musig werden.",
      "Brühe und Sojasauce angießen, aufkochen lassen.",
      "Nudeln direkt in der Suppe garen.",
      "Wenn die Nudeln weich sind, die verquirlten Eier langsam einrühren (vollständig stocken lassen!)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett gestockt) · Diabetes ✓",
    swaps: "Weizennudeln ↔ Reisnudeln",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Airfryer Tang Cu Li Ji 糖醋里脊",
    desc: "Knuspriges Schweinefilet süß-sauer, völlig fettarm aus der Heißluftfritteuse.",
    story: "Chinesisches Sweet & Sour Pork ist weltberühmt. Durch den Airfryer sparen wir uns das Frittieren. Die Maisstärke zaubert trotzdem eine fantastische Kruste.",
    target: "≈85 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Schweinefilet (in Würfeln) 250 g",
      "Maisstärke 2 EL",
      "Paprika (gewürfelt) 100 g",
      "Ananas (Dose) 50 g",
      "Ketchup & Reisessig je 2 EL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Schweinefilet würfeln, leicht salzen und in Maisstärke wälzen.",
      "Im Airfryer bei 200°C ca. 12-15 Min backen, bis es knusprig und INNEN GANZ DURCH ist.",
      "In einer Pfanne Ketchup, Essig, etwas Wasser und Paprika aufkochen.",
      "Das knusprige Fleisch und Ananas in der Sauce schwenken und über Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefilet GANZ durchbraten)",
    swaps: "Schweinefilet ↔ Hähnchenbrust",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Taro & Lap Cheong Rice 芋头腊肠饭 (Reiskocher)",
    desc: "Herzhafter Reis mit Taro-Wurzel und chinesischer Wurst.",
    story: "Die Taro-Wurzel schmilzt im Reiskocher fast wie eine süße Kartoffel und macht den Reis extrem cremig. Die Wurst gibt das würzige Raucharoma ab.",
    target: "≈82 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Taro (Wasserbrotwurzel, gewürfelt) 150 g",
      "Cabanossi (als Ersatz für Lap Cheong) 50 g",
      "Sojasauce 1 EL",
      "Hühnerbrühe 240 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Wurst in Scheiben schneiden.",
      "Reis, Brühe, Taro, Wurst und Sojasauce in den Reiskocher füllen.",
      "Start drücken. Das Fett der Wurst und die Stärke des Taros erledigen den Rest.",
      "Am Ende gut durchmischen und mit Frühlingszwiebeln bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Wurst gart sicher durch) · Diabetes ✓",
    swaps: "Taro ↔ Süßkartoffel",
    side: "Ein Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Taro wird butterweich." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Miso-Spinat Oatmeal",
    desc: "Herzhafter Haferbrei, gekocht in Dashi, verfeinert mit Miso und frischem Spinat.",
    story: "Wer Miso-Suppe liebt, wird dieses Oatmeal verehren. Es ist warm, wohlig und blitzschnell fertig. Der Spinat fällt in der Restwärme herrlich zusammen.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Dashi oder Gemüsebrühe 400 ml",
      "Miso-Paste 1 EL",
      "Spinat (frisch) 50 g",
      "Eier (hartgekocht) 2 Stück"
    ],
    steps: [
      "Haferflocken in der Brühe aufkochen und einköcheln.",
      "In der letzten Minute den Spinat unterheben, bis er zusammenfällt.",
      "Vom Herd nehmen! Die Miso-Paste einrühren (darf nicht mehr kochen, um die Kulturen zu bewahren).",
      "Mit den halbierten, hartgekochten Eiern toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier hartgekocht)",
    swaps: "Eier ↔ Edamame",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Mapo Aubergine (Mild) 鱼香茄子",
    desc: "Auberginenstücke und Schweinehack in einer fantastischen süßlich-pikanten Sauce.",
    story: "Eine Abwandlung des Mapo Tofus. Die Aubergine saugt die Sauce auf wie ein Schwamm. Wir braten sie vorher kurz mit wenig Öl an, damit sie ihre Form behält.",
    target: "≈80 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Aubergine 250 g",
      "Schweinehack (mager) 150 g",
      "Knoblauch 2 Zehen & Ingwer 5 g",
      "Sojasauce 2 EL & Reisessig 1 EL",
      "Zucker 1 TL",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Aubergine würfeln und in der Pfanne anbraten, bis sie weich wird. Herausnehmen.",
      "Hackfleisch, Knoblauch und Ingwer krümelig und KOMPLETT durchbraten.",
      "Sojasauce, Essig, Zucker und etwas Wasser zugeben. Aubergine zurück in die Pfanne.",
      "Kurz einköcheln lassen und über den Reis geben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durchbraten!)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Kabeljau mit Ingwer & Soja 清蒸鳕鱼饭 (Reiskocher)",
    desc: "Magerer Weißfisch, der auf dem Reis dämpft, übergossen mit Sojasauce und heißem Öl.",
    story: "Ein unglaublich sauberes, klares Gericht. Der Fisch wird im Dampf butterzart, und der Ingwer gibt eine großartige Frische.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kabeljau oder Seelachs (TK, aufgetaut) 200 g",
      "Ingwer (feine Streifen) 15 g",
      "Sojasauce 2 EL",
      "Speiseöl 1 EL",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis mit Wasser in den Reiskocher geben.",
      "Den Fisch auf den Reis legen und dick mit Ingwer bestreuen. Start drücken.",
      "Nach dem Kochen den Fisch leicht zerteilen. Frühlingszwiebeln aufstreuen.",
      "Öl kurz erhitzen, zusammen mit der Sojasauce über den Fisch träufeln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Kabeljau quecksilberarm, dämpft sicher auf >80°C durch)",
    swaps: "Kabeljau ↔ Lachs",
    side: "Gedämpfter Spinat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Standard", notes: "Fisch gibt Feuchtigkeit ab." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Schweinehack-Congee 瘦肉粥",
    desc: "Wärmender, glatter Reisbrei mit magerem Schweinehack und feinem Ingwer.",
    story: "Im Original kommt oft noch das 'Tausendjährige Ei' hinein. Da dieses in der Schwangerschaft riskant ist, bleiben wir beim puren, herrlich würzigen Hackfleisch.",
    target: "≈70 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Reis (roh) 80 g",
      "Hühnerbrühe 800 ml",
      "Schweinehack (mager) 150 g",
      "Ingwer (feine Streifen) 10 g",
      "Frühlingszwiebel 10 g",
      "Sojasauce 1 EL"
    ],
    steps: [
      "Reis in Brühe ca. 45 Min zu Congee einkochen.",
      "Hackfleisch mit Sojasauce mischen und auflockern.",
      "Hack und Ingwer in den köchelnden Brei geben und sicher durchgaren lassen (ca. 10 Min).",
      "Mit Frühlingszwiebeln servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hackfleisch komplett durchkochen!)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Viral Chili Oil Eggs auf Avocado Toast 🌶️🍳",
    isViral: true,
    desc: "Spiegeleier, die direkt in mildem Chili-Öl knusprig gebraten werden.",
    story: "Ein weltweiter Food-Trend! Das Chili-Öl (Crispy Chili Oil) röstet das Eiweiß extrem knusprig und verleiht ihm eine fantastische, tiefrote Farbe. Serviert auf cremigem Avocado-Toast.",
    target: "≈50 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Eier 4 Stück",
      "Mildes Chili-Öl (Crispy Chili Oil) 1 EL",
      "Avocado (reif) 1 Stück",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Chili-Öl in einer Pfanne bei mittlerer Hitze erwärmen.",
      "Die Eier direkt in das Öl schlagen.",
      "Deckel auflegen und braten, bis das Eiweiß und Eigelb GANZ durchgestockt sind.",
      "Avocado auf den getoasteten Broten zerdrücken, Eier darauflegen und mit Frühlingszwiebeln toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb muss komplett fest sein) · Diabetes ✓",
    swaps: "Avocado ↔ Frischkäse",
    side: "Ein Stück Gurke.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Pai Gu Fan 排骨饭 (Reiskocher)",
    desc: "Schweinegulasch in schwarzer Bohnensauce dämpft direkt über dem Reis.",
    story: "In Dim Sum Restaurants dämpft man Ribs oft in kleinen Körben. Hier landet der ganze fleischige, salzige Saft direkt im Reis darunter.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinegulasch (klein geschnitten) 200 g",
      "Schwarze Bohnensauce 1 EL",
      "Sojasauce 1 EL",
      "Hühnerbrühe 240 ml",
      "Pak Choi 150 g"
    ],
    steps: [
      "Fleisch in kleine Stücke schneiden, mit Bohnenpaste und Sojasauce vermengen.",
      "Reis und Brühe in den Reiskocher füllen.",
      "Das marinierte Fleisch gleichmäßig oben auflegen (nicht einrühren!). Start drücken.",
      "Pak Choi in den letzten 5 Min im Dampfaufsatz garen. Danach alles kräftig durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird durchgedämpft >80°C)",
    swaps: "Schweinegulasch ↔ Putenbrust",
    side: "-",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Bohnenpaste ist salzig, Brühe evtl. leicht strecken." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Airfryer Custard Toast 카스타드 토스트",
    isViral: true,
    desc: "Toast, belegt mit einer cremigen Joghurt-Ei-Mischung, gebacken im Airfryer.",
    story: "Ein riesiger Frühstückshit! Eine Mischung aus Joghurt und Ei wird in eine Kuhle im Toast gegeben. Beim Backen entsteht ein süßer, puddingartiger Belag.",
    target: "≈75 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Griechischer Joghurt (pasteurisiert) 4 EL",
      "Ei 1 Stück",
      "Agavendicksaft 1 TL",
      "Beeren (z.B. Himbeeren) 50 g"
    ],
    steps: [
      "Joghurt, Ei und Agave gut verquirlen.",
      "Mit einem Löffel eine Kuhle in die Mitte der Toastscheiben drücken.",
      "Die Joghurt-Mischung in die Kuhle füllen, mit Beeren belegen.",
      "Im Airfryer bei 170°C ca. 8-10 Min backen, bis der 'Pudding' komplett fest ist (kein flüssiges Ei!)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei-Masse muss komplett gestockt sein)",
    swaps: "Beeren ↔ Apfelspalten",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Zha Cai Nudel-Wok 榨菜肉丝面",
    desc: "Weizennudeln gebraten mit Zha Cai (eingelegte Senfknolle) und Schweinefleisch.",
    story: "Zha Cai bringt eine fantastische, säuerlich-würzige Knusprigkeit in jedes Pfannengericht. Es hebt das Schweinefleisch auf ein ganz neues Level.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Weizennudeln 150 g",
      "Schweineschnitzel (in feinen Streifen) 150 g",
      "Zha Cai (eingelegte Senfknolle, in Streifen) 50 g",
      "Sojasauce 1 EL",
      "Knoblauch 1 Zehe",
      "Frühlingszwiebel 20 g"
    ],
    steps: [
      "Nudeln kochen und abtropfen.",
      "Schweinefleisch und Knoblauch im heißen Wok scharf anbraten (komplett durchgaren!).",
      "Die Zha Cai-Streifen hinzufügen und kurz mitrösten.",
      "Nudeln und Sojasauce untermischen, gut durchschwenken."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefleisch durch)",
    swaps: "Schweinefleisch ↔ Hähnchenbrust",
    side: "Ein paar Edamame.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Viral Tomato Beef Rice 番茄牛肉饭 (Reiskocher)",
    isViral: true,
    desc: "Der legendäre Whole-Tomato-Hack, diesmal gepaart mit hauchdünnem Rindfleisch.",
    story: "Die Tomate schmilzt und bildet eine natürliche süß-saure Sauce. Das Rindfleisch gart im Dampf unfassbar zart. Ein echtes Wohlfühlessen.",
    target: "≈82 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Tomate (groß) 1 Stück",
      "Rindfleisch (hauchdünne Scheiben) 150 g",
      "Sojasauce 2 EL",
      "Gemüsebrühe 240 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis, Brühe und Sojasauce in den Topf geben.",
      "Tomate kreuzweise einschneiden, in die Mitte setzen. Das Rindfleisch locker darum fächern.",
      "Start drücken.",
      "Nach dem Kochen die Tomate zerdrücken, alles vermengen und mit Frühlingszwiebeln toppen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch wird >80°C durchgedämpft)",
    swaps: "Rindfleisch ↔ Hähnchenbrust",
    side: "-",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas weniger wg. Tomate)", notes: "Tomate gut zerdrücken." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Schwarzer Sesam Haferbrei 黑芝麻燕麦",
    desc: "Tiefschwarzer, nussiger Porridge mit schwarzer Sesampaste und Honig.",
    story: "Schwarzer Sesam ist in China ein Superfood für Haare und Haut. Die Paste färbt das Oatmeal dramatisch schwarz und gibt ihm ein grandioses, erdig-süßes Aroma.",
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
    swaps: "Schwarze Sesampaste ↔ Erdnussmus",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Airfryer Siu Yuk 脆皮烧肉 (Crispy Pork Belly)",
    desc: "Chinesischer knuspriger Schweinebauch mit einer brillanten Kruste.",
    story: "Das Krachen der Kruste ist Musik. Im Airfryer bläst sich die Schwarte perfekt auf, während das überschüssige Fett einfach abtropft.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Schweinebauch (mit Schwarte) 300 g",
      "Salz (für Kruste) 1 EL",
      "Fünf-Gewürze-Pulver 1 TL",
      "Essig (zum Bepinseln)",
      "Reis (gekocht) 120 g",
      "Gurke 100 g"
    ],
    steps: [
      "Schwarte oft einstecken, mit Essig bepinseln und dick mit Salz bedecken (zieht Feuchtigkeit). Fleischseite würzen.",
      "Bei 180°C 25 Min im Airfryer. Salzschicht entfernen, bei 200°C ca. 10 Min Kruste poppen lassen.",
      "Fleisch (muss durch sein!) in Scheiben schneiden. Mit Reis und frischer Gurke servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch sehr hoch erhitzt)",
    swaps: "Schweinebauch ↔ Hähnchenschenkel (mit Haut)",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Garnelen-Erbsen Reis 虾仁青豆饭 (Reiskocher)",
    desc: "Simpler, asiatisch angehauchter Reistopf mit Garnelen und grünen Erbsen.",
    story: "Ein Gericht, das dir die Arbeit abnimmt. Die Garnelen dämpfen über dem Reis und bleiben saftig, während der Reis den kräftigen Fond aufnimmt.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Garnelen (TK, aufgetaut) 200 g",
      "Erbsen (TK) 50 g",
      "Sojasauce 1 EL",
      "Gemüsebrühe 240 ml",
      "Knoblauch 1 Zehe"
    ],
    steps: [
      "Reis, Brühe, zerdrückten Knoblauch und Sojasauce in den Topf geben.",
      "Garnelen und Erbsen oben auflegen.",
      "Starten. Nach dem Kochen alles vorsichtig durchheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Garnelen dampfgaren sicher durch)",
    swaps: "Garnelen ↔ Hähnchenbrust",
    side: "Ein Spritzer Zitrone.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Garnelen vorher gut abtropfen lassen." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Airfryer Rice Paper Dumplings 🥟",
    isViral: true,
    desc: "Quadratische, knusprige Teigtaschen aus Reispapier, gefüllt mit Rinderhack und Kohl.",
    story: "Ein toller Hack, wenn man keinen Nudelteig kneten möchte. Reispapier-Blätter werden wie Briefumschläge um die Füllung gefaltet und im Airfryer extrem kross gebacken.",
    target: "≈75 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reispapier 8 Blatt",
      "Rinderhack (mager) 150 g",
      "Weißkohl (fein gehackt) 100 g",
      "Sojasauce 2 EL",
      "Sesamöl 1 TL",
      "Sojasauce zum Dippen"
    ],
    steps: [
      "Rinderhack und Kohl in der Pfanne krümelig und KOMPLETT durch braten. Mit Sojasauce würzen.",
      "Reispapier nass machen, Füllung in die Mitte, zu einem Quadrat falten (zwei Blätter pro Tasche für Stabilität).",
      "Im Airfryer (leicht geölt) bei 190°C ca. 10 Min backen.",
      "Mit Dip servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack vorher durchbraten!) · Diabetes ✓",
    swaps: "Rinderhack ↔ Tofu-Crumble",
    side: "Gurkensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Pao Jiang Dou Hähnchen Wok 泡豇豆炒鸡肉",
    desc: "Hähnchenhack, gebraten mit säuerlichen, eingelegten Schlangenbohnen.",
    story: "Pao Jiang Dou (säuerlich eingelegte Bohnen) sind eine absolute Offenbarung aus Sichuan. Die feine Säure schneidet durch das Hähnchenfleisch und macht das Gericht unglaublich appetitanregend.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Hähnchenhack 150 g",
      "Pao Jiang Dou (saure Bohnen, fein gehackt) 80 g",
      "Knoblauch 1 Zehe",
      "Sojasauce 1 EL",
      "Reis (gekocht) 150 g",
      "Paprika (gewürfelt) 50 g"
    ],
    steps: [
      "Knoblauch und Paprika im Wok kurz anbraten.",
      "Hähnchenhack dazugeben und krümelig sowie KOMPLETT durchbraten.",
      "Die gehackten sauren Bohnen untermischen.",
      "Mit Sojasauce abschmecken und über Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchenhack gut durchbraten)",
    swaps: "Hähnchenhack ↔ Schweinehack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Kürbis-Hähnchen-Reis 南瓜鸡肉饭 (Reiskocher)",
    desc: "Kürbis und Hähnchenbrust dämpfen zusammen im Reiskocher. Ein süß-herzhafter Traum.",
    story: "Ein Wohlfühlessen aus Südchina. Der Kürbis zerfällt fast und hüllt jedes Reiskorn in ein cremiges, süßliches Gold.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kürbis (z.B. Hokkaido, gewürfelt) 150 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Sojasauce 2 EL",
      "Knoblauch 1 Zehe",
      "Hühnerbrühe 240 ml"
    ],
    steps: [
      "Hähnchen kurz mit Sojasauce und Knoblauch vermengen.",
      "Reis waschen, in den Topf geben und Brühe (minimal weniger als normal) hinzufügen.",
      "Hähnchen und Kürbis auf dem Reis verteilen.",
      "Start drücken. Danach alles sorgfältig durchmischen (Kürbis musen)."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hähnchen gart im Topf sicher durch) · Diabetes ✓",
    swaps: "Hähnchen ↔ Schweinehack",
    side: "Miso-Suppe.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (etwas weniger als normal)", notes: "Kürbis gibt Wasser ab." },
  },
];

// -----------------------------------------------------------------------
// Shopping List Logic
// -----------------------------------------------------------------------
const CANON = {
  // Protein
  "Schweinefilet": { group: "Protein/Fisch/Tofu", label: "Schweinefilet", unitDefault: "g" },
  "Schweinegeschnetzeltes": { group: "Protein/Fisch/Tofu", label: "Schweinegeschnetzeltes", unitDefault: "g" },
  "Schweinegulasch": { group: "Protein/Fisch/Tofu", label: "Schweinegulasch", unitDefault: "g" },
  "Schweineschnitzel": { group: "Protein/Fisch/Tofu", label: "Schweineschnitzel", unitDefault: "g" },
  "Schweinehack": { group: "Protein/Fisch/Tofu", label: "Schweinehack (mager)", unitDefault: "g" },
  "Schweinebauch": { group: "Protein/Fisch/Tofu", label: "Schweinebauch", unitDefault: "g" },
  "Rinderhack": { group: "Protein/Fisch/Tofu", label: "Rinderhack", unitDefault: "g" },
  "Rindfleisch": { group: "Protein/Fisch/Tofu", label: "Rindfleisch", unitDefault: "g" },
  "Hähnchenbrust": { group: "Protein/Fisch/Tofu", label: "Hähnchenbrust", unitDefault: "g" },
  "Hähnchenkeule": { group: "Protein/Fisch/Tofu", label: "Hähnchenkeule", unitDefault: "g" },
  "Hähnchenhack": { group: "Protein/Fisch/Tofu", label: "Hähnchenhack", unitDefault: "g" },
  "Lachsfilet": { group: "Protein/Fisch/Tofu", label: "Lachsfilet", unitDefault: "g" },
  "Kabeljau": { group: "Protein/Fisch/Tofu", label: "Kabeljau/Seelachs", unitDefault: "g" },
  "Garnelen": { group: "Protein/Fisch/Tofu", label: "Garnelen (geschält)", unitDefault: "g" },
  "Cabanossi": { group: "Protein/Fisch/Tofu", label: "Cabanossi/Räucherwurst", unitDefault: "g" },
  "Tofu": { group: "Protein/Fisch/Tofu", label: "Tofu", unitDefault: "g" },
  "Eier": { group: "Protein/Fisch/Tofu", label: "Eier", unitDefault: "Stück" },
  "Feta": { group: "Protein/Fisch/Tofu", label: "Feta (pasteurisiert)", unitDefault: "g" },
  "Parmesan": { group: "Protein/Fisch/Tofu", label: "Parmesan", unitDefault: "g" },
  "Käse": { group: "Protein/Fisch/Tofu", label: "Käse (Gouda/Cheddar)", unitDefault: "g" },
  "Quark": { group: "Protein/Fisch/Tofu", label: "Quark", unitDefault: "EL" },

  // Gemüse
  "Pak Choi": { group: "Gemüse/Pilze", label: "Pak Choi", unitDefault: "g" },
  "Spinat": { group: "Gemüse/Pilze", label: "Spinat (frisch)", unitDefault: "g" },
  "Weißkohl": { group: "Gemüse/Pilze", label: "Weißkohl", unitDefault: "g" },
  "Karotte": { group: "Gemüse/Pilze", label: "Karotten", unitDefault: "g" },
  "Gurke": { group: "Gemüse/Pilze", label: "Gurke", unitDefault: "g" },
  "Aubergine": { group: "Gemüse/Pilze", label: "Aubergine", unitDefault: "g" },
  "Sojasprossen": { group: "Gemüse/Pilze", label: "Sojasprossen", unitDefault: "g" },
  "Erbsen": { group: "Gemüse/Pilze", label: "Erbsen (TK)", unitDefault: "g" },
  "Brokkoli": { group: "Gemüse/Pilze", label: "Brokkoli", unitDefault: "g" },
  "Shiitake": { group: "Gemüse/Pilze", label: "Shiitake (getrocknet)", unitDefault: "g" },
  "Frühlingszwiebel": { group: "Gemüse/Pilze", label: "Frühlingszwiebeln", unitDefault: "g" },
  "Zwiebel": { group: "Gemüse/Pilze", label: "Zwiebeln", unitDefault: "g" },
  "Knoblauch": { group: "Gemüse/Pilze", label: "Knoblauch", unitDefault: "Zehe" },
  "Ingwer": { group: "Gemüse/Pilze", label: "Ingwer", unitDefault: "g" },
  "Tomaten": { group: "Gemüse/Pilze", label: "Tomaten (frisch)", unitDefault: "Stück" },
  "Tomate": { group: "Gemüse/Pilze", label: "Tomate", unitDefault: "Stück" },
  "Passierte Tomaten": { group: "Gemüse/Pilze", label: "Passierte Tomaten", unitDefault: "ml" },
  "Apfel": { group: "Gemüse/Pilze", label: "Apfel", unitDefault: "Stück" },
  "Taro": { group: "Gemüse/Pilze", label: "Taro (Wasserbrotwurzel)", unitDefault: "g" },
  "Kürbis": { group: "Gemüse/Pilze", label: "Kürbis", unitDefault: "g" },
  "Avocado": { group: "Gemüse/Pilze", label: "Avocado", unitDefault: "Stück" },
  "Paprika": { group: "Gemüse/Pilze", label: "Paprika", unitDefault: "g" },
  "Ananas": { group: "Gemüse/Pilze", label: "Ananas (Dose)", unitDefault: "g" },
  "Zha Cai": { group: "Gemüse/Pilze", label: "Zha Cai (Senfknolle)", unitDefault: "g" },
  "Pao Jiang Dou": { group: "Gemüse/Pilze", label: "Pao Jiang Dou (Saure Bohnen)", unitDefault: "g" },

  // Carb
  "Reis": { group: "Reis/Nudeln/Sättigung", label: "Reis (roh/gekocht)", unitDefault: "g" },
  "Udon": { group: "Reis/Nudeln/Sättigung", label: "Udon-Nudeln", unitDefault: "g" },
  "Weizennudeln": { group: "Reis/Nudeln/Sättigung", label: "Weizennudeln", unitDefault: "g" },
  "Reisnudeln": { group: "Reis/Nudeln/Sättigung", label: "Reisnudeln (breit)", unitDefault: "g" },
  "Reispapier": { group: "Reis/Nudeln/Sättigung", label: "Reispapier", unitDefault: "Blatt" },
  "Vollkorn-Tortillas": { group: "Reis/Nudeln/Sättigung", label: "Tortilla-Wraps", unitDefault: "Stück" },
  "Vollkorn-Toast": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Toast", unitDefault: "Scheiben" },
  "Vollkornbrot": { group: "Reis/Nudeln/Sättigung", label: "Vollkornbrot", unitDefault: "Scheiben" },
  "Haferflocken": { group: "Reis/Nudeln/Sättigung", label: "Haferflocken", unitDefault: "g" },
  "Maisstärke": { group: "Reis/Nudeln/Sättigung", label: "Maisstärke", unitDefault: "EL" },
  "Kartoffelrösti": { group: "Reis/Nudeln/Sättigung", label: "Kartoffelrösti (TK)", unitDefault: "Stück" },

  // Pantry
  "Sojasauce": { group: "Algen/Brühen/Würze", label: "Sojasauce", unitDefault: "EL" },
  "Austernsauce": { group: "Algen/Brühen/Würze", label: "Austernsauce", unitDefault: "EL" },
  "Sesamöl": { group: "Algen/Brühen/Würze", label: "Sesamöl", unitDefault: "TL" },
  "Reisessig": { group: "Algen/Brühen/Würze", label: "Reisessig", unitDefault: "EL" },
  "Gemüsebrühe": { group: "Algen/Brühen/Würze", label: "Gemüsebrühe", unitDefault: "ml" },
  "Hühnerbrühe": { group: "Algen/Brühen/Würze", label: "Hühnerbrühe", unitDefault: "ml" },
  "Milch": { group: "Algen/Brühen/Würze", label: "Milch", unitDefault: "ml" },
  "Speiseöl": { group: "Algen/Brühen/Würze", label: "Speiseöl", unitDefault: "EL" },
  "Chili-Öl": { group: "Algen/Brühen/Würze", label: "Crispy Chili Oil", unitDefault: "EL" },
  "Mayonnaise": { group: "Algen/Brühen/Würze", label: "Mayo (Tube, pasteurisiert)", unitDefault: "EL" },
  "Ketchup": { group: "Algen/Brühen/Würze", label: "Ketchup", unitDefault: "EL" },
  "Miso-Paste": { group: "Algen/Brühen/Würze", label: "Miso-Paste", unitDefault: "EL" },
  "Schwarze Bohnensauce": { group: "Algen/Brühen/Würze", label: "Schwarze Bohnensauce", unitDefault: "EL" },
  "Schwarze Sesampaste": { group: "Algen/Brühen/Würze", label: "Schwarze Sesampaste", unitDefault: "EL" },
  "Hoisin-Sauce": { group: "Algen/Brühen/Würze", label: "Hoisin-Sauce", unitDefault: "EL" },
  "Agavendicksaft": { group: "Algen/Brühen/Würze", label: "Agavendicksaft", unitDefault: "TL" },
  "Zucker": { group: "Algen/Brühen/Würze", label: "Zucker", unitDefault: "TL" },
  "Zimt": { group: "Algen/Brühen/Würze", label: "Zimt", unitDefault: "TL" },
  "Sternanis": { group: "Algen/Brühen/Würze", label: "Sternanis", unitDefault: "Stück" },
  "Fünf-Gewürze-Pulver": { group: "Algen/Brühen/Würze", label: "Fünf-Gewürze-Pulver", unitDefault: "TL" },
  "Walnüsse": { group: "Algen/Brühen/Würze", label: "Walnüsse", unitDefault: "g" },
  "Erdnüsse": { group: "Algen/Brühen/Würze", label: "Erdnüsse", unitDefault: "g" },
};

function aggregateList(data, canon) {
  const totals = {};
  for (const r of data) {
    for (const ing of r.ingredients) {
      const m = String(ing).match(/^(.*)\s(\d+[\.,]?\d*)\s?(g|ml|Stück|Zehe|Prise|Stangen|Scheiben|TL|EL|Stk|Blatt)?/i);
      if (!m) continue;
      let name = m[1].trim();
      const qty = parseFloat(m[2].replace(",", "."));
      const unit = m[3] || "";
      
      let key = Object.keys(canon).find((k) => name.toLowerCase().includes(k.toLowerCase()));
      if (!key) {
        if (name.includes("Reis (roh)") || name.includes("Reis (gekocht)")) key = "Reis";
        else if (name.includes("Toast")) key = "Vollkorn-Toast";
        else if (name.includes("Feta") || name.includes("Cheddar") || name.includes("Käse") || name.includes("Gouda")) key = "Käse";
        else if (name.includes("Pilze")) key = "Champignons";
        else if (name.includes("Kohl")) key = "Weißkohl";
        else if (name.includes("Tomate")) key = "Tomate";
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

function ImageBanner({ meal, year = 2026, weekFolder = "kw22" }) {
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
            Woche 22 – Übersicht <span className="ghk-date-paren" style={{ color: "var(--muted)" }}>({meta.startDate})</span>
          </h2>
          <p style={{ marginTop: 6, color: "var(--muted)" }}>Chinesische Wok-Hits · Airfryer-Hacks 🔥 · Reiskocher-Magie · Balanced</p>
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
      <p style={{ marginTop: 12, color: "var(--muted)" }}>Tägliche Entlastung: Donggu Huaji Fan, Taro & Lap Cheong Rice, Pai Gu Fan und mehr.</p>
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
export default function Woche22DE() {
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
            {tagChip("Woche 22")}
            {tagChip("Chinesische Wok-Hits & Reiskocher")}
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