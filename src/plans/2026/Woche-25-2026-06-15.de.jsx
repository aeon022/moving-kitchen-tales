// src/plans/2026/Woche-25-2026-06-15.de.jsx
import React, { useMemo, useState, useEffect } from "react";
import { exportHTMLById, ensureScript } from "@/utils/exporters";
import { buildEmbedCss } from "@/utils/embedCss";

/*
  GhibliKitchen – Woche 25 (Start: 2026-06-15)
  Status: KOMPLETT & FUNKTIONSFÄHIG (Alle 21 Rezepte) - BUGFIXED
  Fokus: Italienischer Crossover, Virale Airfryer-Hacks, Reiskocher-Magie.
*/

// ---- Meta ----
export const meta = {
  title: "Woche 25",
  startDate: "2026-06-15",
  id: "woche-25-2026-06-15",
  lang: "de",
  sidebar: "Woche 25 (2026-06-15)",
};

const FILE_BASE = "Woche 25 2026-06-15";

const UI_TITLES = {
  main: "Rezepte Woche 25",
  list: "Einkaufsliste Woche 25",
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
  mo: "Montag (2026-06-15)",
  di: "Dienstag (2026-06-16)",
  mi: "Mittwoch (2026-06-17)",
  do: "Donnerstag (2026-06-18)",
  fr: "Freitag (2026-06-19)",
  sa: "Samstag (2026-06-20)",
  so: "Sonntag (2026-06-21)",
};

// -----------------------------------------------------------------------
// DATA (ALLE 21 REZEPTE)
// -----------------------------------------------------------------------
const DATA = [
  // MONTAG
  {
    id: "mo-f",
    title: "Airfryer Caprese Frittata Muffins",
    isViral: true,
    desc: "Kleine italienische Omeletts mit Mozzarella und Tomaten, gebacken in Muffinförmchen.",
    story: "Ein perfektes, proteinreiches Frühstück. Im Airfryer stocken die Eier gleichmäßig, während die Tomaten ihr fruchtiges Aroma entfalten. Der Käse bildet eine großartige Kruste.",
    target: "≈45 g KH (2 P. - inkl. Brot) · Protein ≈22 g p. P.",
    ingredients: [
      "Eier 4 Stück",
      "Cherrytomaten (halbiert) 100 g",
      "Mozzarella (pasteurisiert) 50 g",
      "Basilikum (frisch)",
      "Vollkorn-Toast (Beilage) 2 Scheiben"
    ],
    steps: [
      "Eier verquirlen, leicht salzen und pfeffern.",
      "Tomaten, zerzupften Basilikum und Mozzarella in Silikon-Muffinförmchen verteilen.",
      "Die Eimasse darübergießen.",
      "Im Airfryer bei 160°C ca. 12-15 Min backen, bis das Ei GANZ durchgestockt ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett fest, Käse pasteurisiert) · Diabetes ✓",
    swaps: "Mozzarella ↔ Feta",
    side: "Kaffee oder Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-m",
    title: "Udon Cacio e Pepe",
    desc: "Asiatische dicke Udon-Nudeln treffen auf den italienischen Käse-Pfeffer-Klassiker.",
    story: "Eine geniale Fusion. Die Stärke der dicken japanischen Nudeln bindet den geriebenen Käse im Handumdrehen zu einer unfassbar cremigen Sauce. Ganz ohne Sahne!",
    target: "≈85 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Udon-Nudeln (vorgegart) 400 g",
      "Parmesan oder Pecorino (pasteurisiert, fein gerieben) 50 g",
      "Butter 20 g",
      "Schwarzer Pfeffer (frisch gemahlen) 1 TL",
      "Edamame (geschält) 50 g"
    ],
    steps: [
      "Udon in wenig Wasser kurz kochen, Wasser auffangen.",
      "Butter in einer Pfanne schmelzen, frisch gemahlenen Pfeffer darin anrösten.",
      "Nudeln und etwas Nudelwasser in die Pfanne geben.",
      "Hitze reduzieren, Parmesan schrittweise einrühren, bis es cremig wird. Edamame unterheben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hartkäse aus pasteurisierter Milch) · Diabetes ✓",
    swaps: "Udon ↔ Vollkorn-Spaghetti",
    side: "Ein Tomatensalat.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mo-a",
    title: "Tomato-Basil Chicken Rice (Reiskocher)",
    desc: "Ein italienisch inspiriertes One-Pot-Gericht. Hähnchen und Tomaten garen im Reis.",
    story: "Wir wandeln den Whole-Tomato-Trend ab: Hähnchenwürfel, eine große Tomate und viel Basilikum machen diesen Reistopf zu einer mediterranen Sensation.",
    target: "≈80 g KH (2 P.) · Protein ≈30 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Hähnchenbrust (gewürfelt) 200 g",
      "Tomate (groß) 1 Stück",
      "Gemüsebrühe 240 ml",
      "Knoblauch 1 Zehe",
      "Basilikum (frisch) 1 Bund"
    ],
    steps: [
      "Reis, Brühe und gepressten Knoblauch in den Reiskocher füllen.",
      "Die Tomate kreuzweise tief einschneiden und in die Mitte setzen. Das Hähnchen drumherum anordnen.",
      "Start drücken.",
      "Nach dem Kochen die Tomate zerdrücken, frischen Basilikum unterheben und alles gut durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Huhn dampft auf >80°C sicher durch)",
    swaps: "Hähnchenbrust ↔ Putenbrust",
    side: "Ein Spritzer Olivenöl.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (etwas weniger wg. Tomate)", notes: "Tomate am Ende gut vermantschen." },
  },

  // DIENSTAG
  {
    id: "di-f",
    title: "Ricotta-Zitronen Toast mit Honig",
    desc: "Cremiger Ricotta, frischer Zitronenabrieb und ein Hauch Süße auf Vollkornbrot.",
    story: "Ein sizilianisches Frühstück, das in 3 Minuten fertig ist. Der cremige Käse und die frische Zitrone bilden einen genialen Kontrast.",
    target: "≈60 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Vollkorn-Toast 4 Scheiben",
      "Ricotta (pasteurisiert) 100 g",
      "Zitrone (nur der Abrieb) 1 TL",
      "Honig oder Agavendicksaft 1 EL",
      "Walnüsse (gehackt) 20 g"
    ],
    steps: [
      "Toastscheiben im Toaster oder Airfryer knusprig rösten.",
      "Ricotta in einer Schale mit dem Zitronenabrieb glattrühren.",
      "Die Masse dick auf die Toastscheiben streichen.",
      "Mit Honig beträufeln und Walnüssen bestreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ricotta pasteurisiert) · Diabetes ✓",
    swaps: "Ricotta ↔ Körniger Frischkäse",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "di-m",
    title: "Bolognese-Style Zucchini Wok",
    desc: "Rinderhack und Zoodles asiatisch angehaucht mit Sojasauce und Tomatenmark gebraten.",
    story: "Ein fantastisches Low-Carb Crossover. Rinderhackfleisch trifft auf das klassische italienische Mirepoix, wird aber im Wok mit asiatischen Aromen vollendet.",
    target: "≈50 g KH (2 P. - inkl. Beilage) · Protein ≈28 g p. P.",
    ingredients: [
      "Rinderhack (mager) 200 g",
      "Zucchini (als Nudeln/Zoodles geschnitten) 2 große",
      "Tomatenmark 2 EL",
      "Sojasauce 1 EL",
      "Knoblauch 1 Zehe",
      "Vollkornbrot 2 Scheiben"
    ],
    steps: [
      "Rinderhack und Knoblauch im Wok krümelig und KOMPLETT durchbraten.",
      "Tomatenmark dazugeben und kurz anrösten. Mit Sojasauce und 50ml Wasser ablöschen.",
      "Die Zucchini-Nudeln hineingeben und nur 2-3 Minuten durchschwenken (sie sollen Biss behalten und nicht wässern).",
      "Zusammen mit dem Brot servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hackfleisch GANZ durchbraten!)",
    swaps: "Zoodles ↔ Vollkorn-Spaghetti",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "di-a",
    title: "Pilz-Risotto (Reiskocher) 🍄",
    desc: "Cremiges Risotto mit braunen Champignons und Parmesan. Komplett ohne Rühren.",
    story: "Risotto kochen ist eigentlich mit viel Rühren verbunden. Der Reiskocher übernimmt das durch seine präzise Temperaturkontrolle. Das Ergebnis ist herrlich schlotzig.",
    target: "≈82 g KH (2 P.) · Protein ≈15 g p. P.",
    ingredients: [
      "Risottoreis 120 g",
      "Champignons (in Scheiben) 150 g",
      "Gemüsebrühe 300 ml",
      "Knoblauch 1 Zehe",
      "Parmesan (pasteurisiert) 30 g",
      "Butter 10 g"
    ],
    steps: [
      "Reis, Brühe, gepressten Knoblauch und Pilzscheiben in den Topf geben.",
      "Reiskocher starten.",
      "Nach dem Kochen die Butter und den Parmesan in den extrem heißen Reis einrühren.",
      "Sehr kräftig durchmischen, bis eine cremige Emulsion entsteht."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert)",
    swaps: "Champignons ↔ Shiitake",
    side: "Ein Stück gebratenes Hähnchen (optional für mehr Protein).",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas mehr für Risotto)", notes: "Käse und Butter erst ganz am Schluss einrühren." },
  },

  // MITTWOCH
  {
    id: "mi-f",
    title: "Viral Pesto Fried Eggs 🍳",
    isViral: true,
    desc: "Spiegeleier, die direkt in grünem Pesto statt in Öl knusprig gebraten werden.",
    story: "Ein grandioser TikTok-Trend. Das Pesto liefert das Öl zum Braten und würzt das Ei gleichzeitig mit Basilikum, Knoblauch und Parmesan.",
    target: "≈50 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Pesto (Glas) 2 EL",
      "Eier 4 Stück",
      "Vollkorn-Toast 4 Scheiben",
      "Cherrytomaten 100 g",
      "Parmesan (gerieben) 1 EL"
    ],
    steps: [
      "Pesto in einer Pfanne bei mittlerer Hitze erwärmen.",
      "Die Eier direkt auf das Pesto schlagen.",
      "Deckel auflegen und braten, bis das Eiweiß und Eigelb GANZ durchgestockt sind (wichtig für die Schwangerschaft!).",
      "Mit halbierten Tomaten auf dem Toast servieren, etwas Parmesan darüberstreuen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eigelb muss komplett fest sein!) · Diabetes ✓",
    swaps: "Pesto (grün) ↔ Pesto (rot)",
    side: "-",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-m",
    title: "Pasta e Ceci (Kichererbsen-Nudeln)",
    desc: "Ein rustikaler italienischer Eintopf aus Nudeln, Kichererbsen und Tomaten.",
    story: "Manche nennen es Suppe, manche Pasta. Die Stärke der Kichererbsen bindet die Brühe zu einer unglaublichen Creme. Zählt in Italien zum ultimativen Comfort Food.",
    target: "≈85 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Kleine Nudeln (z.B. Makkaroni) 100 g",
      "Kichererbsen (Dose, gespült) 150 g",
      "Passierte Tomaten 100 ml",
      "Gemüsebrühe 300 ml",
      "Knoblauch 1 Zehe",
      "Rosmarin (frisch oder getrocknet) 1/2 TL"
    ],
    steps: [
      "Knoblauch in etwas Olivenöl anrösten.",
      "Passierte Tomaten, Kichererbsen (ein paar leicht zerdrücken), Rosmarin und Brühe dazugeben. 10 Min köcheln.",
      "Nudeln direkt in die Brühe geben und kochen, bis sie gar sind und die Sauce stark andickt."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (alles durchgekocht) · Diabetes ✓",
    swaps: "Kichererbsen ↔ Weiße Bohnen",
    side: "Ein Löffel Parmesan.",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "mi-a",
    title: "Hainan-Style Weißfisch 清蒸鱼饭 (Reiskocher)",
    desc: "Magerer Kabeljau, der auf dem Reis dämpft, umhüllt von feinem Ingwer.",
    story: "Ein unbeschreiblich sauberes, klares Gericht. Der Fisch wird im Dampf butterzart, und der Ingwer gibt eine großartige Frische, die hervorragend zu dem sanften Reis passt.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Kabeljau oder Seelachs (TK, aufgetaut) 200 g",
      "Ingwer (feine Streifen) 15 g",
      "Sojasauce 2 EL",
      "Gemüsebrühe 240 ml",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Reis und Brühe in den Reiskocher geben.",
      "Den Weißfisch auf den Reis legen und dick mit Ingwer bestreuen. Start drücken.",
      "Nach dem Kochen den Fisch leicht zerteilen. Frühlingszwiebeln aufstreuen.",
      "Alles vermengen und mit der Sojasauce beträufeln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Weißfisch quecksilberarm, dämpft auf >80°C durch)",
    swaps: "Kabeljau ↔ Lachs",
    side: "Gedämpfter Spinat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (Standard)", notes: "Fisch gibt Feuchtigkeit ab." },
  },

  // DONNERSTAG
  {
    id: "do-f",
    title: "Savory Parmesan Oatmeal",
    desc: "Haferbrei nach Risotto-Art mit Brühe, Parmesan und einem hartgekochten Ei.",
    story: "Ein herzhaftes Frühstück, das dich wie eine warme Decke einhüllt. Der Parmesan schmilzt in den Haferflocken und macht sie unfassbar cremig.",
    target: "≈65 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Haferflocken 100 g",
      "Gemüsebrühe 450 ml",
      "Parmesan (gerieben) 30 g",
      "Eier (hartgekocht) 2 Stück",
      "Frühlingszwiebel 10 g"
    ],
    steps: [
      "Haferflocken in der Brühe aufkochen und einköcheln lassen.",
      "Wenn der Brei cremig ist, den Topf vom Herd nehmen und den Parmesan einrühren.",
      "Die hartgekochten Eier pellen, halbieren und auf den Brei setzen.",
      "Mit gehackten Frühlingszwiebeln garnieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Eier komplett hartkochen) · Diabetes ✓",
    swaps: "Eier ↔ Tofu-Würfel",
    side: "Tee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "do-m",
    title: "Airfryer Gnocchi mit Zucchini",
    desc: "Außen krosse Gnocchi, geröstet mit Zucchini-Würfeln und mediterranen Gewürzen.",
    story: "Ein geniales Blech-Gericht, das im Airfryer noch schneller geht. Die Gnocchi werden wie kleine Kartoffelkroketten: außen knusprig und innen fluffig.",
    target: "≈85 g KH (2 P.) · Protein ≈15 g p. P. (mit Käse mehr)",
    ingredients: [
      "Gnocchi (Kühlregal) 300 g",
      "Zucchini (gewürfelt) 200 g",
      "Olivenöl 1 EL",
      "Italienische Kräuter 1 TL",
      "Feta (pasteurisiert) 50 g"
    ],
    steps: [
      "Gnocchi und Zucchini-Würfel in einer Schüssel gut mit Olivenöl und Kräutern vermengen.",
      "In den Airfryer geben und bei 190°C ca. 12-15 Minuten rösten. Zwischendurch gut durchschütteln.",
      "Auf Teller verteilen und den Feta darüber bröseln."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Feta pasteurisiert) · Diabetes ✓",
    swaps: "Zucchini ↔ Paprika",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "do-a",
    title: "Balsamico-Schwein & Zwiebel-Reis (Reiskocher)",
    desc: "Zartes Schweinefilet und rote Zwiebeln dämpfen in einer Balsamico-Brühe über dem Reis.",
    story: "Italienische Aromen im Reiskocher! Der Balsamico-Essig verleiht dem Fleisch eine großartige dunkle Farbe und eine angenehme, milde Säure, die in den Reis zieht.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Schweinefilet (in Medaillons) 200 g",
      "Zwiebel (rot, in Ringen) 1 Stück",
      "Balsamico-Essig 2 EL",
      "Sojasauce 1 EL",
      "Gemüsebrühe 240 ml"
    ],
    steps: [
      "Fleisch kurz in Balsamico und Sojasauce wenden.",
      "Reis und Brühe in den Reiskocher füllen.",
      "Zwiebelringe und das Fleisch (inkl. Marinade) oben auflegen.",
      "Start drücken. Nach dem Kochen das Fleisch leicht zerteilen und alles auflockern."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Schweinefilet dämpft sicher auf >80°C durch)",
    swaps: "Schweinefilet ↔ Hähnchenbrust",
    side: "Ein grüner Salat.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "Essig verliert beim Kochen seine Schärfe." },
  },

  // FREITAG
  {
    id: "fr-f",
    title: "Jianbing Wrap Hack 煎饼 (Airfryer)",
    isViral: true,
    desc: "Chinesisches Streetfood als genialer Airfryer-Hack mit einem Wrap, Ei und Frühlingszwiebeln.",
    story: "Der Duft von Peking am Morgen. Da traditioneller Teig lange dauert, nehmen wir einen Wrap, bestreichen ihn dick mit Ei und backen ihn knusprig auf.",
    target: "≈65 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Vollkorn-Tortillas 2 Stück",
      "Eier 2 Stück",
      "Frühlingszwiebeln 30 g",
      "Hoisin-Sauce 1 EL",
      "Sesam 1 TL"
    ],
    steps: [
      "Ein verquirltes Ei auf einem Wrap verstreichen. Mit Frühlingszwiebeln und Sesam bestreuen.",
      "Im Airfryer bei 180°C ca. 5-7 Min backen, bis das Ei im Inneren KOMPLETT durchgestockt und der Rand kross ist.",
      "Herausnehmen, mit Hoisin-Sauce bestreichen, falten und servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Ei komplett durchbacken)",
    swaps: "Hoisin-Sauce ↔ Etwas Ketchup & Sojasauce",
    side: "Eine Tasse Jasmintee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-m",
    title: "Mapo Tofu (Mild) 麻婆豆腐",
    desc: "Sichuan-Klassiker ohne die extreme Schärfe. Tofu und Hackfleisch in pikanter Sauce.",
    story: "Wir machen eine fantastische, familientaugliche Version: Viel weicher Tofu, mageres Hack und Sojasauce. Wärmend, umamireich und perfekt zu Reis.",
    target: "≈80 g KH (2 P.) · Protein ≈28 g p. P.",
    ingredients: [
      "Seidentofu oder weicher Tofu 300 g",
      "Schweinehack (mager) 100 g",
      "Sojasauce 2 EL",
      "Austernsauce 1 EL",
      "Knoblauch 1 Zehe",
      "Reis (gekocht) 150 g"
    ],
    steps: [
      "Tofu würfeln.",
      "Hackfleisch und Knoblauch im Wok krümelig und GANZ durch braten.",
      "Saucen und 100ml Wasser zugeben. Tofu hineingleiten lassen.",
      "3 Min sanft köcheln. Über Reis servieren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Hack komplett durch, Tofu heiß)",
    swaps: "Schweinehack ↔ Hähnchenhack",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "fr-a",
    title: "Seafood Paella/Risotto 海鲜烩饭 (Reiskocher)",
    desc: "Bunter Reis mit Meeresfrüchten, Paprika und Erbsen, butterweich aus dem Reiskocher.",
    story: "Eine Fusion aus asiatischer Reiskocher-Technik und spanisch-italienischen Zutaten. Schmeckt wie Paella ohne großen Aufwand und langes Rühren am Herd.",
    target: "≈82 g KH (2 P.) · Protein ≈24 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Meeresfrüchte-Mix (TK, aufgetaut) 200 g",
      "Paprika (gewürfelt) 50 g",
      "Gemüsebrühe 240 ml",
      "Erbsen (TK) 50 g",
      "Butter 10 g"
    ],
    steps: [
      "Reis, Brühe und Paprika in den Topf.",
      "Aufgetauten Meeresfrüchte-Mix und Erbsen dazu.",
      "Kochen. Am Ende Butter unterrühren."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Mix muss >80°C erhitzt werden - im Reiskocher sicher!)",
    swaps: "Meeresfrüchte-Mix ↔ Nur Garnelen",
    side: "Ein Spritzer frische Zitrone.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Brühe (Standard)", notes: "TK-Mix vorher gut abtropfen lassen." },
  },

  // SAMSTAG
  {
    id: "sa-f",
    title: "Airfryer Pizza Bagel 🍕",
    isViral: true,
    desc: "Aufgeschnittene Vollkorn-Bagels, belegt wie Pizza und im Airfryer knusprig überbacken.",
    story: "Ein absoluter Internet-Favorit! Die Bagels werden durch die Heißluft außen kross und bleiben innen weich. Ein geniales Frühstück für das Wochenende.",
    target: "≈65 g KH (2 P.) · Protein ≈20 g p. P.",
    ingredients: [
      "Vollkorn-Bagel 2 Stück",
      "Passierte Tomaten 4 EL",
      "Mozzarella (pasteurisiert) 60 g",
      "Italienische Kräuter 1 TL",
      "Cherrytomaten 50 g"
    ],
    steps: [
      "Bagels aufschneiden.",
      "Hälften mit passierten Tomaten bestreichen und mit Kräutern würzen.",
      "Mozzarella und halbierte Cherrytomaten darauf verteilen.",
      "Im Airfryer bei 180°C ca. 6-8 Minuten backen, bis der Käse goldbraun blubbert."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse schmilzt komplett durch) · Diabetes ✓",
    swaps: "Bagel ↔ Vollkorn-Toast",
    side: "Kaffee.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-m",
    title: "Crispy Airfryer Tofu (Italian Style)",
    desc: "Tofuwürfel mit einer Kruste aus dem Airfryer, geschwenkt in einer fruchtigen Tomatensauce.",
    story: "Tofu funktioniert auch fabelhaft mit mediterranen Aromen. Im Airfryer gelingt die Kruste fettsparend und behält dennoch ihren hervorragenden Biss in der Nudelsauce.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Fester Tofu 300 g",
      "Maisstärke 2 EL",
      "Passierte Tomaten 150 ml",
      "Italienische Kräuter 1 TL",
      "Vollkorn-Penne (gekocht) 150 g"
    ],
    steps: [
      "Tofu würfeln, gut abtupfen und in Maisstärke wenden.",
      "Im Airfryer bei 200°C ca. 12-15 Min backen, bis er knusprig ist.",
      "In einer Pfanne die passierten Tomaten mit Kräutern erhitzen.",
      "Den Tofu und die Nudeln in der Sauce schwenken."
    ],
    checks: "Balanced ✓ · Diabetes ✓ · Schwangerschaft ✓",
    swaps: "Tofu ↔ Hähnchenbrust",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "sa-a",
    title: "Risi e Bisi (Erbsen-Schinken Reis im Reiskocher)",
    desc: "Ein cremiger italienischer Frühlingsklassiker. Reis mit Erbsen und Schinken aus dem Reiskocher.",
    story: "Eine Mischung aus Suppe und Risotto. Im Reiskocher wird es zum perfekten, stressfreien Feierabendgericht und kocht sich von ganz allein.",
    target: "≈80 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Risottoreis oder Rundkornreis 120 g",
      "Erbsen (TK) 150 g",
      "Kochschinken (gewürfelt) 100 g",
      "Gemüsebrühe 300 ml",
      "Parmesan (pasteurisiert) 30 g",
      "Butter 10 g"
    ],
    steps: [
      "Reis, Brühe und Schinken in den Reiskocher geben. Starten.",
      "In den letzten 5 Minuten die aufgetauten Erbsen dazugeben (dann bleiben sie leuchtend grün).",
      "Nach dem Kochen Parmesan und Butter kräftig unterrühren, bis alles wunderbar schlotzig ist."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert, Schinken erhitzt)",
    swaps: "Kochschinken ↔ Speckwürfel",
    side: "Ein Tomatensalat.",
    remind: true,
    riceCooker: { enabled: true, program: "White Rice / Mixed", water: "Brühe (etwas mehr für Risi e Bisi Textur)", notes: "Soll am Ende sehr cremig sein." },
  },

  // SONNTAG
  {
    id: "so-f",
    title: "Fluffy Ricotta Pancakes",
    desc: "Fluffige Pfannkuchen mit Ricotta-Käse im Teig. Ein italienischer Frühstückstraum.",
    story: "Der Ricotta sorgt dafür, dass die Pancakes unglaublich weich und saftig werden, ohne schwer im Magen zu liegen. Ein geniales Frühstück, um nebenher Blogbeiträge zu tippen.",
    target: "≈75 g KH (2 P.) · Protein ≈22 g p. P.",
    ingredients: [
      "Vollkornmehl 100 g",
      "Ricotta (pasteurisiert) 100 g",
      "Eier 2 Stück",
      "Milch 50 ml",
      "Backpulver 1 TL",
      "Honig 1 EL"
    ],
    steps: [
      "Ricotta, Eier, Milch und Honig glatt rühren.",
      "Mehl und Backpulver zügig unterheben (nicht zu viel rühren!).",
      "In der Pfanne bei mittlerer Hitze durchbacken, bis sie fest und goldbraun sind."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Teig komplett durchbacken, Ricotta pasteurisiert)",
    swaps: "Ricotta ↔ Magerquark",
    side: "Ein paar Beeren.",
    remind: true,
    riceCooker: { enabled: false },
  },
  {
    id: "so-m",
    title: "Viral Crispy Quinoa Salad",
    isViral: true,
    desc: "Italienisch angehauchter Quinoa-Salat, bei dem der Quinoa im Airfryer extrem knusprig gebacken wird.",
    story: "Quinoa-Salat kennt jeder. Aber gekochten Quinoa im Airfryer zu rösten, bis er crunchig wie Nüsse wird, ist ein Gamechanger!",
    target: "≈70 g KH (2 P.) · Protein ≈18 g p. P.",
    ingredients: [
      "Quinoa (bereits gekocht!) 150 g",
      "Olivenöl 1 EL",
      "Cherrytomaten & Gurke 200 g",
      "Käse (Feta, pasteurisiert) 50 g",
      "Basilikum & Balsamico-Essig"
    ],
    steps: [
      "Gekochten Quinoa mit Olivenöl mischen. Im Airfryer bei 190°C ca. 10-15 Min rösten, bis er knusprig wird. (Vorsicht, fliegt leicht rum, evtl. Backpapier nutzen).",
      "Gemüse klein schneiden, mit Balsamico und Basilikum anmachen.",
      "Salat anrichten, Käse darüberbröseln und den krossen Quinoa als Crunch-Topping darübergeben."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Käse pasteurisiert)",
    swaps: "Quinoa ↔ Kichererbsen",
    side: "-",
    remind: false,
    riceCooker: { enabled: false },
  },
  {
    id: "so-a",
    title: "Gyudon-Style Beef Rice 牛丼 (Reiskocher)",
    desc: "Hauchdünnes Rindfleisch und weiche Zwiebeln dämpfen direkt auf dem Reis.",
    story: "Als asiatischer Ausgleich am Sonntagabend! Ein japanischer Fast-Food-Klassiker, adaptiert für den Reiskocher. Das Fleisch bleibt zart, der Reis saugt die Marinade komplett auf.",
    target: "≈80 g KH (2 P.) · Protein ≈26 g p. P.",
    ingredients: [
      "Reis (roh) 120 g",
      "Rindfleisch (hauchdünne Hotpot-Scheiben) 150 g",
      "Zwiebel (rot, in Ringen) 1 Stück",
      "Sojasauce 2 EL",
      "Mirin 1 EL",
      "Dashi oder Brühe 240 ml"
    ],
    steps: [
      "Reis und Brühe in den Topf geben. Soja und Mirin einrühren.",
      "Zwiebelringe und das Rindfleisch locker (!) darauf verteilen. Das Fleisch etwas auffächern, nicht klumpen.",
      "Start drücken. Danach alles gründlich durchmischen."
    ],
    checks: "Balanced ✓ · Schwangerschaft ✓ (Fleisch gart im Topf >80°C komplett durch) · Diabetes ✓",
    swaps: "Rindfleisch ↔ Schweinefleisch (dünn geschnitten)",
    side: "Eingelegter Ingwer.",
    remind: true,
    riceCooker: { enabled: true, program: "Mixed / White Rice", water: "Dashi (Standard)", notes: "Zwiebeln werden herrlich süß." },
  },
];

// -----------------------------------------------------------------------
// Shopping List Logic
// -----------------------------------------------------------------------
const CANON = {
  // Protein
  "Schweinefilet": { group: "Protein/Fisch/Tofu", label: "Schweinefilet", unitDefault: "g" },
  "Schweineschnitzel": { group: "Protein/Fisch/Tofu", label: "Schweineschnitzel", unitDefault: "g" },
  "Schweinehack": { group: "Protein/Fisch/Tofu", label: "Schweinehack (mager)", unitDefault: "g" },
  "Schweinegulasch": { group: "Protein/Fisch/Tofu", label: "Schweinegulasch", unitDefault: "g" },
  "Rinderhack": { group: "Protein/Fisch/Tofu", label: "Rinderhack", unitDefault: "g" },
  "Rindfleisch": { group: "Protein/Fisch/Tofu", label: "Rindfleisch", unitDefault: "g" },
  "Hähnchenbrust": { group: "Protein/Fisch/Tofu", label: "Hähnchenbrust", unitDefault: "g" },
  "Hähnchenhack": { group: "Protein/Fisch/Tofu", label: "Hähnchenhack", unitDefault: "g" },
  "Kabeljau": { group: "Protein/Fisch/Tofu", label: "Kabeljau/Seelachs", unitDefault: "g" },
  "Meeresfrüchte-Mix": { group: "Protein/Fisch/Tofu", label: "Meeresfrüchte-Mix (TK)", unitDefault: "g" },
  "Kochschinken": { group: "Protein/Fisch/Tofu", label: "Kochschinken", unitDefault: "g" },
  "Tofu": { group: "Protein/Fisch/Tofu", label: "Tofu", unitDefault: "g" },
  "Seidentofu": { group: "Protein/Fisch/Tofu", label: "Seidentofu", unitDefault: "g" },
  "Eier": { group: "Protein/Fisch/Tofu", label: "Eier", unitDefault: "Stück" },
  "Parmesan": { group: "Protein/Fisch/Tofu", label: "Parmesan", unitDefault: "g" },
  "Mozzarella": { group: "Protein/Fisch/Tofu", label: "Mozzarella (pasteurisiert)", unitDefault: "g" },
  "Ricotta": { group: "Protein/Fisch/Tofu", label: "Ricotta (pasteurisiert)", unitDefault: "g" },
  "Käse": { group: "Protein/Fisch/Tofu", label: "Feta/Gouda (Käse)", unitDefault: "g" },

  // Gemüse
  "Pak Choi": { group: "Gemüse/Pilze", label: "Pak Choi", unitDefault: "g" },
  "Zucchini": { group: "Gemüse/Pilze", label: "Zucchini", unitDefault: "g" },
  "Gurke": { group: "Gemüse/Pilze", label: "Gurke", unitDefault: "g" },
  "Edamame": { group: "Gemüse/Pilze", label: "Edamame", unitDefault: "g" },
  "Erbsen": { group: "Gemüse/Pilze", label: "Erbsen (TK)", unitDefault: "g" },
  "Kichererbsen": { group: "Gemüse/Pilze", label: "Kichererbsen (Dose)", unitDefault: "g" },
  "Champignons": { group: "Gemüse/Pilze", label: "Champignons", unitDefault: "g" },
  "Frühlingszwiebel": { group: "Gemüse/Pilze", label: "Frühlingszwiebeln", unitDefault: "g" },
  "Zwiebel": { group: "Gemüse/Pilze", label: "Zwiebeln", unitDefault: "g" },
  "Knoblauch": { group: "Gemüse/Pilze", label: "Knoblauch", unitDefault: "Zehe" },
  "Ingwer": { group: "Gemüse/Pilze", label: "Ingwer", unitDefault: "g" },
  "Tomaten": { group: "Gemüse/Pilze", label: "Tomaten (frisch)", unitDefault: "Stück" },
  "Cherrytomaten": { group: "Gemüse/Pilze", label: "Cherrytomaten", unitDefault: "g" },
  "Passierte Tomaten": { group: "Gemüse/Pilze", label: "Passierte Tomaten", unitDefault: "ml" },
  "Tomatenmark": { group: "Gemüse/Pilze", label: "Tomatenmark", unitDefault: "EL" },
  "Paprika": { group: "Gemüse/Pilze", label: "Paprika", unitDefault: "g" },
  "Basilikum": { group: "Gemüse/Pilze", label: "Basilikum (frisch)", unitDefault: "Bund" },

  // Carb
  "Reis": { group: "Reis/Nudeln/Sättigung", label: "Reis (roh/gekocht)", unitDefault: "g" },
  "Risottoreis": { group: "Reis/Nudeln/Sättigung", label: "Risottoreis", unitDefault: "g" },
  "Udon": { group: "Reis/Nudeln/Sättigung", label: "Udon-Nudeln", unitDefault: "g" },
  "Weizennudeln": { group: "Reis/Nudeln/Sättigung", label: "Weizennudeln", unitDefault: "g" },
  "Vollkorn-Penne": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Penne", unitDefault: "g" },
  "Makkaroni": { group: "Reis/Nudeln/Sättigung", label: "Makkaroni", unitDefault: "g" },
  "Gnocchi": { group: "Reis/Nudeln/Sättigung", label: "Gnocchi", unitDefault: "g" },
  "Quinoa": { group: "Reis/Nudeln/Sättigung", label: "Quinoa", unitDefault: "g" },
  "Reispapier": { group: "Reis/Nudeln/Sättigung", label: "Reispapier", unitDefault: "Blatt" },
  "Vollkorn-Tortillas": { group: "Reis/Nudeln/Sättigung", label: "Tortilla-Wraps", unitDefault: "Stück" },
  "Vollkorn-Toast": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Toast", unitDefault: "Scheiben" },
  "Vollkornbrot": { group: "Reis/Nudeln/Sättigung", label: "Vollkornbrot", unitDefault: "Scheiben" },
  "Vollkorn-Bagel": { group: "Reis/Nudeln/Sättigung", label: "Vollkorn-Bagel", unitDefault: "Stück" },
  "Haferflocken": { group: "Reis/Nudeln/Sättigung", label: "Haferflocken", unitDefault: "g" },
  "Vollkornmehl": { group: "Reis/Nudeln/Sättigung", label: "Vollkornmehl", unitDefault: "g" },
  "Maisstärke": { group: "Reis/Nudeln/Sättigung", label: "Maisstärke", unitDefault: "EL" },

  // Pantry
  "Sojasauce": { group: "Algen/Brühen/Würze", label: "Sojasauce", unitDefault: "EL" },
  "Austernsauce": { group: "Algen/Brühen/Würze", label: "Austernsauce", unitDefault: "EL" },
  "Balsamico-Essig": { group: "Algen/Brühen/Würze", label: "Balsamico-Essig", unitDefault: "EL" },
  "Gemüsebrühe": { group: "Algen/Brühen/Würze", label: "Gemüsebrühe", unitDefault: "ml" },
  "Dashi": { group: "Algen/Brühen/Würze", label: "Dashi", unitDefault: "ml" },
  "Milch": { group: "Algen/Brühen/Würze", label: "Milch", unitDefault: "ml" },
  "Butter": { group: "Algen/Brühen/Würze", label: "Butter", unitDefault: "g" },
  "Olivenöl": { group: "Algen/Brühen/Würze", label: "Olivenöl", unitDefault: "EL" },
  "Pesto": { group: "Algen/Brühen/Würze", label: "Pesto (Grün)", unitDefault: "EL" },
  "Hoisin-Sauce": { group: "Algen/Brühen/Würze", label: "Hoisin-Sauce", unitDefault: "EL" },
  "Mirin": { group: "Algen/Brühen/Würze", label: "Mirin", unitDefault: "EL" },
  "Honig": { group: "Algen/Brühen/Würze", label: "Honig/Agave", unitDefault: "EL" },
  "Zitrone": { group: "Algen/Brühen/Würze", label: "Zitrone", unitDefault: "TL" },
  "Rosmarin": { group: "Algen/Brühen/Würze", label: "Rosmarin", unitDefault: "TL" },
  "Italienische Kräuter": { group: "Algen/Brühen/Würze", label: "Italienische Kräuter", unitDefault: "TL" },
  "Walnüsse": { group: "Algen/Brühen/Würze", label: "Walnüsse", unitDefault: "g" },
  "Backpulver": { group: "Algen/Brühen/Würze", label: "Backpulver", unitDefault: "TL" },
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
        else if (name.includes("Feta") || name.includes("Gouda") || name.includes("Käse")) key = "Käse";
        else if (name.includes("Pilze") || name.includes("Champignons")) key = "Champignons";
        else if (name.includes("Kohl")) key = "Weißkohl";
        else if (name.includes("Tomate")) key = "Tomate";
        else if (name.includes("Nudeln")) key = "Weizennudeln";
      }
      
      if (!key) continue;
      
      const c = canon[key];
      if (!c) continue; // Safety Check
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

function ImageBanner({ meal, year = 2026, weekFolder = "kw25" }) {
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
            Woche 25 – Übersicht <span className="ghk-date-paren" style={{ color: "var(--muted)" }}>({meta.startDate})</span>
          </h2>
          <p style={{ marginTop: 6, color: "var(--muted)" }}>Italien & Asia Fusion · Airfryer-Hacks 🔥 · Balanced</p>
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
      <p style={{ marginTop: 12, color: "var(--muted)" }}>Tägliche Entlastung: Tomato-Basil Chicken, Pilz-Risotto, Hainan Weißfisch und mehr.</p>
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
export default function Woche25DE() {
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
            {tagChip("Woche 25")}
            {tagChip("Italien & Asia Fusion")}
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