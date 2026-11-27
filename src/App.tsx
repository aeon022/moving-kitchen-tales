// src/App.tsx
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { useBookmarks, Bookmark, BookmarkList } from "./hooks/useBookmarks";
import { PinnwandPage } from "./PinnwandPage";
import { PreppenPage } from "./PreppenPage";
import { KalteGerichtePage } from "./KalteGerichtePage";
import { FesttagsgerichtePage } from "./FesttagsgerichtePage";
import { KochtechnikenPage } from "./KochtechnikenPage";
import { RecipeDatabasePage } from "./RecipeDatabasePage";
import { KuehlschrankPage } from "./KuehlschrankPage";
import { VorratskammerPage } from "./VorratskammerPage";
import { VorkochenPage } from "./VorkochenPage";
import { HomePage } from "./HomePage";
import { BackToTop } from "./components/BackToTop";
import { Cat } from "./components/Cats";
import { DatenschutzPage, CookieNotice } from "./Datenschutz";
import { PLAN_MANIFEST } from "./plans/manifest";

type Lang = "de" | "zh";
const LANG_KEY = "mkt.lang";
export const SUPPORT_URL = "https://buy.polar.sh/polar_cl_IMvSv9smK6P0o45BtZE0XHi4CHkRhOnKB1EKL4DXUVZ";

type Recipe = {
  id: string;
  title: string;
  desc?: string;
  ingredients?: string[];
  steps?: string[];
  [key: string]: any;
};

type PlanMeta = {
  id: string;
  title?: string;
  startDate: string;
  lang?: string;
  sidebar?: string;
  /** Wochen-Schwerpunkt ("Kürbis, Mais & Pilze 🌽 · Erntefrisch mild · Balanced"), aus dem
   * subtitle-Prop des Wochen-Files geparst — siehe scripts/gen-plan-manifest.mjs. */
  focus?: string;
};
type PlanModule = { default: React.ComponentType<any>; meta: PlanMeta; DATA?: Recipe[] };

// Perf: the recipe text + component code for every plan used to load eagerly on first paint,
// growing with every new week forever. Meta (title/date/id) stays eager — it's cheap and the
// sidebar/homepage need it for all plans at once. Full DATA + the component only load when a
// specific plan is actually opened, or (for search) the first time the user types a query.
export const planDataCache = new Map<string, PlanModule>();
export async function loadPlanData(record: PlanRecord): Promise<PlanModule> {
  const cached = planDataCache.get(record.slug);
  if (cached) return cached;
  const mod = await record.load();
  planDataCache.set(record.slug, mod);
  return mod;
}
export function usePlanData(record: PlanRecord | null | undefined): PlanModule | null {
  const [mod, setMod] = useState<PlanModule | null>(record ? planDataCache.get(record.slug) ?? null : null);
  useEffect(() => {
    if (!record) { setMod(null); return; }
    const cached = planDataCache.get(record.slug);
    if (cached) { setMod(cached); return; }
    let alive = true;
    setMod(null);
    loadPlanData(record).then((m) => { if (alive) setMod(m); });
    return () => { alive = false; };
  }, [record?.slug]);
  return mod;
}


// --- Sidebar-Icons (Stroke-SVG statt Emoji/Textlabel — vorher standen hier "home"/"prep"/"db"
// als winzige Caption-Wörter neben den großen Mincho-Titeln, sah nach vergessenem Debug-Label
// aus statt nach einem Icon-System.) ---
const NAV_ICON_PATHS: Record<string, React.ReactNode> = {
  home: <><path d="M3 12l9-9 9 9" /><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" /></>,
  "arrow-right": <><line x1="4" y1="12" x2="20" y2="12" /><polyline points="14 6 20 12 14 18" /></>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  fridge: <><rect x="5" y="2" width="14" height="20" /><line x1="5" y1="10" x2="19" y2="10" /><line x1="9" y1="5" x2="9" y2="7" /><line x1="9" y1="13" x2="9" y2="17" /></>,
  jar: <><rect x="7" y="2" width="10" height="4" /><path d="M6 6h12l1 3v13H5V9z" /><line x1="5" y1="13" x2="19" y2="13" /></>,
  pot: <><path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><line x1="2" y1="10" x2="22" y2="10" /><path d="M9 6c0-1 1-1 1-3M14 6c0-1 1-1 1-3" /></>,
  box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>,
  list: <><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></>,
  snowflake: <><line x1="12" y1="2" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="4.93" y1="19.07" x2="19.07" y2="4.93" /></>,
  "book-open": <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
  gift: <><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C9 2 12 7 12 7z" /></>,
};
function NavIcon({ name }: { name: keyof typeof NAV_ICON_PATHS }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {NAV_ICON_PATHS[name]}
    </svg>
  );
}


// --- Mobile Helper ---
function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function normalizeLang(v: unknown): Lang {
  const s = String(v ?? "").toLowerCase();
  if (s.includes("zh") || s.includes("cn") || s.includes("中文")) return "zh";
  return "de";
}

function slugFor(meta: PlanMeta, lang: Lang) {
  return lang === "zh" ? `${meta.id}-zh` : meta.id;
}

function baseIdFromSlug(slug: string) {
  return slug.replace(/-zh$/i, "");
}

function weekNumberOf(meta: PlanMeta): string {
  const m = (meta.title ?? "").match(/(\d+)/);
  return m ? m[1] : "–";
}

function getPlanYear(startDateStr: string) {
  if (!startDateStr) return new Date().getFullYear();
  const [y, m, d] = startDateStr.split("-").map(Number);
  if (m === 12 && d >= 29) return y + 1;
  return y;
}

// Same year-rollover rule as getPlanYear — a week starting 12-29+ already counts as next year's
// "Woche 1" there, so it should land in that year's Q1, not trailing Q4.
function getPlanQuarter(startDateStr: string): number {
  if (!startDateStr) return 1;
  const [, m, d] = startDateStr.split("-").map(Number);
  if (m === 12 && d >= 29) return 1;
  return Math.ceil(m / 3);
}
const QUARTER_LABEL: Record<number, { de: string, zh: string }> = {
  1: { de: "Q1 · Jan–Mär", zh: "第一季度 · 1–3月" },
  2: { de: "Q2 · Apr–Jun", zh: "第二季度 · 4–6月" },
  3: { de: "Q3 · Jul–Sep", zh: "第三季度 · 7–9月" },
  4: { de: "Q4 · Okt–Dez", zh: "第四季度 · 10–12月" },
};
const QUARTER_SEASON: Record<number, { de: string, zh: string }> = {
  1: { de: "Winter", zh: "冬季" },
  2: { de: "Frühling", zh: "春季" },
  3: { de: "Sommer", zh: "夏季" },
  4: { de: "Herbst", zh: "秋季" },
};

// Kurzer, aus den echten Wochen-Schwerpunkten dieses Quartals zusammengesetzter Ausblick statt
// einer erfundenen Beschreibung — nimmt das jeweils erste Stichwort von Anfang/Mitte/Ende des
// Quartals, damit die Vorschau über den ganzen Zeitraum streut statt nur die ersten 3 Wochen zu zeigen.
function quarterDescription(weeks: PlanRecord[]): string {
  if (weeks.length === 0) return "";
  const idxs = weeks.length >= 3
    ? [0, Math.floor((weeks.length - 1) / 2), weeks.length - 1]
    : weeks.map((_, i) => i);
  const picks: string[] = [];
  for (const i of idxs) {
    const first = weeks[i]?.meta.focus?.split(" · ")[0];
    if (first && !picks.includes(first)) picks.push(first);
  }
  return picks.join(" · ");
}

export function pickCurrent(plans: PlanRecord[], lang: Lang): PlanRecord | null {
  // Chinesisch folgt dem deutschen Kalender: dieselbe Woche, falls übersetzt, sonst die nächste übersetzte.
  if (lang === "zh") {
    const de = pickCurrent(plans, "de");
    const zh = plans.filter(p => p.lang === "zh").sort((a,b)=>a.startDate.localeCompare(b.startDate));
    return zh.find(p => p.baseId === de?.baseId) ?? zh.find(p => p.startDate >= (de?.startDate ?? "")) ?? zh[zh.length - 1] ?? null;
  }
  const list = plans.filter(p => p.lang === lang).sort((a,b)=>a.startDate.localeCompare(b.startDate));
  if (!list.length) return null;
  const today = new Date();
  const todayISO = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
  const pastOrToday = list.filter(p => p.startDate <= todayISO);
  return (pastOrToday.length ? pastOrToday[pastOrToday.length - 1] : list[0]) ?? null;
}

export type PlanRecord = {
  slug: string;
  baseId: string;
  lang: Lang;
  startDate: string;
  meta: PlanMeta;
  load: () => Promise<PlanModule>;
};

// ---- Lang Context ----
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "de", setLang: () => {} });
function useLang() { return useContext(LangCtx); }
export { useLang };

/** Adresse (?lang=) vor gemerkter Wahl vor Browsersprache. Kein Standort, nichts wird abgefragt. */
function initialLang(search: string): Lang {
  const fromUrl = new URLSearchParams(search).get("lang");
  if (fromUrl) return normalizeLang(fromUrl);
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved) return normalizeLang(saved);
  } catch { /* privates Fenster */ }
  return /^zh/i.test(navigator.languages?.[0] ?? navigator.language) ? "zh" : "de";
}

function LangProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const nav = useNavigate();
  const [lang, setLangState] = useState<Lang>(() => initialLang(location.search));
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "de";
  }, [lang]);
  // Ein verschickter ?lang=-Link wird gemerkt.
  useEffect(() => {
    if (new URLSearchParams(location.search).has("lang")) {
      try { localStorage.setItem(LANG_KEY, lang); } catch { /* privates Fenster */ }
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(LANG_KEY, l); } catch { /* privates Fenster */ }
    const qs = new URLSearchParams(location.search);
    qs.set("lang", l);
    nav({ pathname: location.pathname, search: qs.toString() }, { replace: true });
  };
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

// Only the manifest (cheap: id/title/date, no recipe text) is eager. The actual week files are
// ONLY ever dynamically imported below — if anything else in the app statically/eagerly imported
// one of them too, bundlers would just fold it into the main chunk anyway and this whole
// exercise would be pointless. Regenerate the manifest after adding a week: gen-plan-manifest.mjs.
const planLoaders = import.meta.glob("./plans/{2025,2026,2027}/**/*.{jsx,tsx}") as Record<string, () => Promise<PlanModule>>;

function usePlans(): PlanRecord[] {
  return useMemo(() => {
    const out: PlanRecord[] = [];
    for (const entry of PLAN_MANIFEST) {
      const lang = normalizeLang(entry.lang);
      const slug = slugFor(entry, lang);
      const load = planLoaders[entry.path];
      if (!load) { console.warn("manifest entry has no matching file:", entry.path); continue; }
      out.push({
        slug,
        baseId: entry.id,
        lang,
        startDate: entry.startDate,
        meta: entry,
        load,
      });
    }
    out.sort((a, b) => a.startDate.localeCompare(b.startDate));
    return out;
  }, []);
}

// --- Sidebar (Mobile Optimized) ---
function IndexOverlay({ plans, onClose }: { plans: PlanRecord[], onClose: () => void }) {
  const { lang, setLang } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const { bookmarkLists } = useBookmarks();

  const [search, setSearch] = useState("");

  const years = useMemo(() => {
    const ys = new Set<number>();
    for (const p of plans) ys.add(getPlanYear(p.startDate));
    return Array.from(ys).sort((a,b)=>b-a);
  }, [plans]);

  const currentPlan = useMemo(() => pickCurrent(plans, lang), [plans, lang]);

  const [openYears, setOpenYears] = useState<Record<number, boolean>>({});
  // Zweite Ebene innerhalb eines Jahres — sonst ist selbst das aktuelle Jahr allein schon 40+
  // Wochen am Stück. Key ist "Jahr-Quartal", nur das aktuelle Quartal startet offen.
  const [openQuarters, setOpenQuarters] = useState<Record<string, boolean>>({});

  // Nur das Jahr mit dem aktuellen Plan startet aufgeklappt — sonst wird die Liste bei mehr
  // Jahren schnell zur Wall of Text. Ältere Jahre bleiben eingeklappt, bis man sie anklickt.
  useEffect(() => {
    const currentYear = currentPlan ? getPlanYear(currentPlan.startDate) : years[0];
    const initial: Record<number, boolean> = {};
    years.forEach(y => initial[y] = y === currentYear);
    setOpenYears(initial);

    const currentQuarterKey = currentPlan
      ? `${getPlanYear(currentPlan.startDate)}-${getPlanQuarter(currentPlan.startDate)}`
      : null;
    const initialQ: Record<string, boolean> = {};
    for (const p of plans) {
      const key = `${getPlanYear(p.startDate)}-${getPlanQuarter(p.startDate)}`;
      initialQ[key] = key === currentQuarterKey;
    }
    setOpenQuarters(initialQ);
  }, [years.join(","), currentPlan?.slug]);

  // Esc schließt das Register wie jedes andere Overlay.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const filtered = plans.filter(p => p.lang === lang);

  // Recipe search needs every plan's full data, which we otherwise only load on demand —
  // fetch it in bulk the first time the user actually searches, not on every page load.
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchDataVersion, setSearchDataVersion] = useState(0);
  useEffect(() => {
    if (!search.trim()) return;
    const missing = plans.filter(p => p.lang === lang && !planDataCache.has(p.slug));
    if (missing.length === 0) return;
    setSearchLoading(true);
    Promise.all(missing.map(p => loadPlanData(p))).then(() => {
      setSearchLoading(false);
      setSearchDataVersion(v => v + 1);
    });
  }, [search, plans, lang]);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    const res: { plan: PlanRecord, recipe: Recipe }[] = [];
    for (const p of plans) {
      if (p.lang !== lang) continue;
      const data = planDataCache.get(p.slug)?.DATA;
      if (!data) continue;
      for (const r of data) {
        if (
          r.title.toLowerCase().includes(q) ||
          (r.desc && r.desc.toLowerCase().includes(q)) ||
          (r.ingredients && r.ingredients.some(i => i.toLowerCase().includes(q)))
        ) {
          res.push({ plan: p, recipe: r });
        }
      }
    }
    return res.slice(0, 20); // Limit to 20 results
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, plans, lang, searchDataVersion]);

  const toggleLang = () => {
    const target = lang === "de" ? "zh" : "de";
    const m = location.pathname.match(/\/plan\/([^/?#]+)/);
    const currentSlug = m?.[1];
    if (currentSlug) {
      const baseId = baseIdFromSlug(currentSlug);
      const sibling = plans.find(p => p.baseId === baseId && p.lang === target);
      if (sibling) navigate(`/plan/${sibling.slug}?lang=${target}`, { replace: true });
    }
    setLang(target);
  };

  // Register schließt sich nach jeder Auswahl — egal ob Desktop oder Mobile, kein separater
  // Collapse-Zustand mehr nötig.
  const handleLinkClick = () => onClose();

  return (
    <aside className="index-overlay">
      <button type="button" className="index-overlay-close" onClick={onClose}>
        <span aria-hidden="true">←</span>
        <span>{lang === "de" ? "Zurück" : "返回"}</span>
      </button>

        {/* Titel mit Span für Ausblenden */}
        <div className="brand">
          <span className="seal-mark" aria-hidden="true"><span>厨</span><span>房</span></span>
          <span className="brand-text">MovingKitchenTales</span>
        </div>
        <p className="index-overlay-stats">
          {filtered.length} {lang === "de" ? "Wochen" : "周"} · {years.length} {lang === "de" ? "Jahre" : "年"} · {bookmarkLists.length} {lang === "de" ? "Pinnwände" : "个收藏板"}
        </p>

        <div className="index-overlay-content">
        <div className="index-section-label">{lang === "de" ? "一 · 导航 · Navigation" : "一 · 导航"}</div>
        <ul className="nav-list">
          <li>
            <Link to="/" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="home" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Startseite" : "首页"}</span></span>
            </Link>
          </li>
          {currentPlan && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpenYears(prev => ({ ...prev, [getPlanYear(currentPlan.startDate)]: true }));
                  navigate(`/plan/${currentPlan.slug}?lang=${lang}`);
                  handleLinkClick();
                }}
                className="nav-row"
              >
                <span className="nav-icon"><NavIcon name="arrow-right" /></span>
                <span className="nav-body"><span className="nav-title">{lang === "de" ? "Zum aktuellen Plan" : "跳到本周菜单"}</span></span>
              </button>
            </li>
          )}
          <li>
            <Link to="/bookmarks" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="star" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Meine Merkliste" : "我的收藏"}</span></span>
            </Link>
          </li>
          <li>
            <Link to="/kuehlschrank" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="fridge" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Kühlschrank" : "冰箱找菜谱"}</span></span>
            </Link>
          </li>
          <li>
            <Link to="/vorratskammer" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="jar" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Vorratskammer" : "储藏室"}</span></span>
            </Link>
          </li>
          <li>
            <Link to="/datenschutz" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="list" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Datenschutz" : "隐私说明"}</span></span>
            </Link>
          </li>
          <li>
            <Link to="/vorkochen" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="pot" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Vorkochen" : "备餐计划"}</span></span>
            </Link>
          </li>
          <li>
            <Link to="/preppen" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="box" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Preppen" : "备餐"}</span></span>
            </Link>
          </li>
          <li>
            <Link to="/kalte-gerichte" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="snowflake" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Kalte Gerichte" : "凉菜"}</span></span>
            </Link>
          </li>
          <li>
            <Link to="/festtagsgerichte" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="gift" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Festtagsgerichte" : "节日菜"}</span></span>
            </Link>
          </li>
          <li>
            <Link to="/kochtechniken" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="book-open" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Kochtechniken" : "烹饪技法"}</span></span>
            </Link>
          </li>
          <li>
            <Link to="/rezepte" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="database" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Rezept-Datenbank" : "食谱库"}</span></span>
            </Link>
          </li>
        </ul>

        <div className="ornament-divider" aria-hidden="true"><span>◆</span></div>

        <div className="index-utility-row">
          <div
            className="lang-toggle"
            data-lang={lang}
            data-active={lang === "zh"}
            onClick={toggleLang}
            title={lang === "de" ? "Sprache umschalten" : "切换语言"}
          >
            <div className="lang-toggle-handle" data-text={lang === "de" ? "DE" : "中"} />
          </div>
          <span className="lang-label" style={{fontSize: 13, fontWeight: 500}}>
            {lang === "de" ? "Deutsch" : "中文"}
          </span>
        </div>

        {/* Suche */}
        <div className="sidebar-nav-item" style={{ padding: "0 12px 12px" }}>
          <input
            type="search"
            placeholder={lang === "de" ? "Rezepte suchen…" : "搜索食谱…"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 4px",
              borderRadius: 0,
              border: "none",
              borderBottom: "1px solid var(--border)",
              background: "transparent",
              color: "var(--text)",
              fontSize: 13,
            }}
          />
          {search.trim() && (
            <div style={{ marginTop: 8, maxHeight: "300px", overflowY: "auto", border: "1px solid var(--border)", borderRadius: 8, background: "var(--panel)" }}>
              {searchLoading ? (
                <div style={{ padding: 8, fontSize: 13, color: "var(--muted)" }}>
                  {lang === "de" ? "Lädt Rezepte…" : "正在加载食谱…"}
                </div>
              ) : searchResults.length === 0 ? (
                <div style={{ padding: 8, fontSize: 13, color: "var(--muted)" }}>{lang === "de" ? "Keine Treffer" : "没有找到结果"}</div>
              ) : (
                searchResults.map((res, idx) => (
                  <Link
                    key={`${res.plan.slug}-${res.recipe.id}-${idx}`}
                    to={`/plan/${res.plan.slug}#meal-${res.recipe.id}`}
                    onClick={() => {
                      setSearch("");
                      handleLinkClick();
                    }}
                    style={{ display: "block", padding: "8px", textDecoration: "none", color: "var(--text)", borderBottom: "1px solid var(--border)", fontSize: 13 }}
                  >
                    <div style={{ fontWeight: 600 }}>{res.recipe.title}</div>
                    <div style={{ fontSize: 11, color: "var(--muted)" }}>{res.plan.meta.title}</div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>

        <div className="ornament-divider" aria-hidden="true"><span>◆</span></div>
        <div className="index-section-label">{lang === "de" ? "二 · 收藏 · Pinnwand" : "二 · 收藏"}</div>

        {/* Pinnwand-Listen */}
        <details className="year" open>
          <summary>{lang === "de" ? "Pinnwand" : "收藏板"}</summary>
          {bookmarkLists.length === 0 ? (
            <div style={{ padding: "8px", fontSize: 13, color: "var(--muted)" }}>
              <Link to="/pinnwand" onClick={handleLinkClick}>
                {lang === "de" ? "Listen verwalten" : "管理列表"}
              </Link>
            </div>
          ) : (
            <ul className="nav-list">
              {bookmarkLists.map((list: BookmarkList) => (
                <li key={list.id}>
                  <Link to="/pinnwand" onClick={handleLinkClick} className="nav-row">
                    <span className="nav-lead">{list.bookmarks.length}</span>
                    <span className="nav-body">
                      <span className="nav-title">{list.name}</span>
                      <span className="nav-sub">{lang === "de" ? "Rezepte" : "道食谱"}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </details>

        <div className="ornament-divider" aria-hidden="true"><span>◆</span></div>
        <div className="index-section-label">{lang === "de" ? "三 · 索引 · Wochen" : "三 · 每周菜单"}</div>

        <div className="year-controls">
          <button className="small-btn" onClick={() => {
            setOpenYears(prev => Object.fromEntries(Object.keys(prev).map(k => [Number(k), true])));
            setOpenQuarters(prev => Object.fromEntries(Object.keys(prev).map(k => [k, true])));
          }}>{lang === "de" ? "Alle +" : "全部展开"}</button>
          <button className="small-btn" onClick={() => {
            setOpenYears(prev => Object.fromEntries(Object.keys(prev).map(k => [Number(k), false])));
            setOpenQuarters(prev => Object.fromEntries(Object.keys(prev).map(k => [k, false])));
          }}>{lang === "de" ? "Alle -" : "全部收起"}</button>
        </div>

        {years.map(y => (
          <details
            key={y}
            className="year"
            open={openYears[y] ?? true}
            onToggle={(e) => {
               const isOpen = (e.currentTarget as HTMLDetailsElement).open;
               setOpenYears(prev => ({ ...prev, [y]: isOpen }));
            }}
          >
            <summary>
              {y}
              {currentPlan && y !== getPlanYear(currentPlan.startDate) && (
                <span style={{ marginLeft: 8, fontSize: 11, color: "var(--muted)", fontWeight: 400 }}>
                  {lang === "de" ? "Archiv" : "往年"}
                </span>
              )}
            </summary>
            {[1, 2, 3, 4].map(q => {
              const weeksInQuarter = filtered.filter(p => getPlanYear(p.startDate) === y && getPlanQuarter(p.startDate) === q);
              if (weeksInQuarter.length === 0) return null;
              const qKey = `${y}-${q}`;
              return (
                <details
                  key={qKey}
                  className="quarter"
                  open={openQuarters[qKey] ?? false}
                  onToggle={(e) => {
                    const isOpen = (e.currentTarget as HTMLDetailsElement).open;
                    setOpenQuarters(prev => ({ ...prev, [qKey]: isOpen }));
                  }}
                >
                  <summary>
                    <div className="quarter-head">
                      <span className="quarter-title">
                        {QUARTER_LABEL[q][lang]}
                        <span className="quarter-season">· {QUARTER_SEASON[q][lang]}</span>
                      </span>
                      <span className="quarter-count">{weeksInQuarter.length} {lang === "de" ? "Wochen" : "周"}</span>
                    </div>
                    {quarterDescription(weeksInQuarter) && (
                      <div className="quarter-desc">{quarterDescription(weeksInQuarter)}</div>
                    )}
                  </summary>
                  <ul className="nav-list week-list">
                    {weeksInQuarter.map(p => (
                      <li key={p.slug}>
                        <Link
                          to={`/plan/${p.slug}?lang=${lang}`}
                          onClick={handleLinkClick}
                          className={`nav-row${currentPlan?.slug === p.slug ? " nav-row-current" : ""}`}
                        >
                          <span className="nav-lead index-num">{weekNumberOf(p.meta)}</span>
                          <span className="nav-body">
                            <span className="nav-title index-label">{p.meta.title ?? p.meta.id}</span>
                            <span className="nav-sub">{p.startDate}</span>
                            {p.meta.focus && <span className="nav-focus">{p.meta.focus}</span>}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            })}
          </details>
        ))}

        <a
          href={SUPPORT_URL}
          target="_blank"
          rel="noreferrer"
          className="sidebar-support-btn"
          onClick={handleLinkClick}
        >
          <span aria-hidden="true">♥</span>
          <span>{lang === "de" ? "Projekt unterstützen" : "支持项目"}</span>
        </a>
        </div>
    </aside>
  );
}

function BookmarkPage({ plans }: { plans: PlanRecord[] }) {
  const { lang } = useLang();
  const { bookmarks, removeBookmark } = useBookmarks();

  // Only load the (usually handful of) plans that are actually bookmarked, not every plan.
  const [dataVersion, setDataVersion] = useState(0);
  useEffect(() => {
    const referenced = new Set(bookmarks.map(b => b.planSlug));
    const missing = plans.filter(p => referenced.has(p.slug) && !planDataCache.has(p.slug));
    if (missing.length === 0) return;
    Promise.all(missing.map(p => loadPlanData(p))).then(() => setDataVersion(v => v + 1));
  }, [bookmarks, plans]);

  const bookmarkedRecipes = useMemo(() => {
    const res: { plan?: PlanRecord, recipe: Recipe, bookmark: Bookmark }[] = [];
    for (const b of bookmarks) {
      const plan = plans.find(p => p.slug === b.planSlug);
      const recipe = plan ? planDataCache.get(plan.slug)?.DATA?.find(r => r.id === b.recipeId) : undefined;
      res.push({
        plan,
        recipe: recipe ?? {
          id: b.recipeId,
          title: b.recipeTitle,
        },
        bookmark: b,
      });
    }
    return res;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarks, plans, dataVersion]);

  if (bookmarkedRecipes.length === 0) {
    return (
      <div className="main-inner" style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2>{lang === "de" ? "Deine Merkliste ist noch leer" : "收藏夹还是空的"}</h2>
        <p style={{ color: "var(--muted)" }}>{lang === "de" ? "Pinne Rezepte mit dem Stern-Symbol, um sie hier zu sammeln." : "点击星形图标收藏食谱，收藏的内容会显示在这里。"}</p>
        <Link to="/" style={{ color: "var(--accent-2)", fontWeight: 600 }}>{lang === "de" ? "Zurück zu den Plänen" : "返回每周菜单"}</Link>
      </div>
    );
  }

  return (
    <div className="main-inner" style={{ padding: isMobile() ? "0 8px" : "0 20px" }}>
      <div style={{ marginBottom: isMobile() ? 16 : 32, padding: "0 8px" }}>
        <h1 style={{ fontSize: isMobile() ? "20px" : "32px", marginBottom: 4 }}>{lang === "de" ? "Meine Merkliste" : "我的收藏"}</h1>
        <p style={{ color: "var(--muted)", fontSize: isMobile() ? "13px" : "16px" }}>{lang === "de" ? `${bookmarkedRecipes.length} Rezepte gespeichert` : `已收藏 ${bookmarkedRecipes.length} 道食谱`}</p>
      </div>
      <div style={{ display: "grid", gap: isMobile() ? 12 : 24 }}>
        {bookmarkedRecipes.map(({ plan, recipe, bookmark }) => {
          const planTitle = plan?.meta.title ?? bookmark.planTitle;
          const planSlug = plan?.slug ?? bookmark.planSlug;
          return (
            <div key={`${bookmark.planSlug}-${recipe.id}`} style={{ border: "1px solid var(--border)", borderRadius: 14, background: "var(--panel)", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              <div style={{ 
                padding: isMobile() ? "6px 12px" : "10px 16px", 
                background: "var(--grad-hero)", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                borderBottom: "1px solid var(--border)"
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(0,0,0,0.5)", textTransform: "uppercase" }}>
                  {planTitle}
                </span>
                <button 
                  onClick={() => removeBookmark(bookmark.planSlug, recipe.id)}
                  style={{ 
                    background: "rgba(255,255,255,0.7)", 
                    border: "none", 
                    color: "#ef4444", 
                    cursor: "pointer", 
                    fontSize: 14,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  title={lang === "de" ? "Entfernen" : "移除"}
                >
                  ✕
                </button>
              </div>
              <div style={{ padding: isMobile() ? 12 : 20 }}>
                <h2 style={{ marginTop: 0, fontSize: isMobile() ? "16px" : "22px", lineHeight: 1.2, marginBottom: 8 }}>{recipe.title}</h2>
                {recipe.desc && !isMobile() && <p style={{ fontStyle: "italic", color: "var(--muted)", fontSize: "14px", lineHeight: 1.5 }}>{recipe.desc}</p>}
                <Link 
                  to={`/plan/${planSlug}#meal-${recipe.id}`} 
                  style={{ 
                    display: "inline-flex", 
                    alignItems: "center",
                    padding: isMobile() ? "6px 14px" : "10px 20px", 
                    background: "var(--accent-2)", 
                    color: "#fff", 
                    borderRadius: 10, 
                    textDecoration: "none", 
                    fontWeight: 600,
                    fontSize: isMobile() ? "12px" : "14px"
                  }}
                >
                  {lang === "de" ? "Öffnen →" : "打开 →"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


function PlanPage({ plans }: { plans: PlanRecord[] }) {
  const { slug = "" } = useParams();
  const { lang } = useLang();
  const { hash } = useLocation();
  const nav = useNavigate();
  const current = plans.find(p => p.slug === slug);
  const mod = usePlanData(current);

  useEffect(() => {
    if (hash && mod) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        setTimeout(() => {
          const elRetry = document.getElementById(id);
          if (elRetry) elRetry.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [hash, slug, mod]);

  if (!current) return <div className="main-inner">{lang === "de" ? "Plan nicht gefunden" : "找不到该菜单"}: {slug}</div>;
  if (current.lang !== lang) {
    const sibling = plans.find(p => p.baseId === current.baseId && p.lang === lang);
    if (sibling) {
      nav(`/plan/${sibling.slug}?lang=${lang}`, { replace: true });
      return null;
    }
  }
  if (!mod) return <div className="main-inner">{lang === "de" ? "Lädt Plan…" : "正在加载菜单…"}</div>;
  const Cmp = mod.default;
  return (<div className="main-inner"><Cmp /></div>);
}

// Shiori — mehrere farbige Lesezeichenbänder, an der Buchkante gestapelt, statt eines einzelnen
// Reiters. Fest auf dem Viewport (nicht an der Buchkante absolut), damit sie bei langen Seiten
// (44 Wochen, 21 Rezepte) beim Scrollen nicht verschwinden.
function ShioriStack({ menuOpen, onOpenIndex, onCloseIndex }: { menuOpen: boolean; onOpenIndex: () => void; onCloseIndex: () => void }) {
  const navigate = useNavigate();
  const { lang, setLang } = useLang();
  // Explizites onCloseIndex() bei den navigierenden Tabs, nicht nur der Pfadwechsel-Effekt in
  // App() — wenn man schon auf "/" steht und bei offenem Register auf 封面 klickt, ändert sich
  // der Pfad nicht, also würde der Effekt allein das Register nicht schließen.
  // Text-Beschriftungen ("Register", "Preppen") brachen in der schmalen Spalte teils unschön
  // um — durchgängig Icons statt Text, das deutsche Wort wandert in den title-Tooltip.
  const tabs = [
    { key: "cover", jp: "封面", de: "Startseite", icon: "home" as const, color: "dark", onClick: () => { onCloseIndex(); navigate("/"); } },
    // Klick auf 目录 öffnet UND schließt das Register (Toggle) — der Button ist der einzige Weg
    // zurück, der auch von der Registerseite selbst aus sichtbar bleibt.
    { key: "index", jp: "目录", de: "Register", icon: "list" as const, color: "seal", onClick: onOpenIndex, pressed: menuOpen },
    { key: "fridge", jp: "冰箱", de: "Kühlschrank", icon: "fridge" as const, color: "dark", onClick: () => { onCloseIndex(); navigate("/kuehlschrank"); } },
    { key: "preppen", jp: "备餐", de: "Preppen", icon: "box" as const, color: "olive", onClick: () => { onCloseIndex(); navigate("/preppen"); } },
  ];
  return (
    <div className="shiori-stack">
      {tabs.map((t) => (
        <button key={t.key} type="button" className={`shiori-tab shiori-${t.color}`} onClick={t.onClick} aria-pressed={t.pressed} title={lang === "zh" ? t.jp : t.de}>
          {/* Zweisprachig, unabhängig vom DE/中文-Umschalter der Seite — das Schriftzeichen ist
              ein dekoratives Buch-Element, das Icon die eigentliche Wegweisung; das deutsche
              Wort steckt im title-Tooltip statt im Text, der in der schmalen Spalte umbrach. */}
          <span className="shiori-glyph" aria-hidden="true">{t.jp}</span>
          <span className="shiori-caption shiori-caption-icon"><NavIcon name={t.icon} /></span>
        </button>
      ))}
      <button
        type="button"
        className="shiori-tab shiori-lang"
        onClick={() => setLang(lang === "de" ? "zh" : "de")}
        lang={lang === "de" ? "zh-CN" : "de"}
        title={lang === "de" ? "切换到中文" : "Auf Deutsch umschalten"}
        aria-label={lang === "de" ? "切换到中文" : "Auf Deutsch umschalten"}
      >
        {lang === "de" ? "中文" : "DE"}
      </button>
    </div>
  );
}

export default function App() {
  const plans = usePlans();
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const href = (e.target as Element).closest?.("a")?.getAttribute("href");
      if (e.defaultPrevented || !href?.startsWith("#") || href.startsWith("#/")) return;
      e.preventDefault();
      const find = () => document.getElementById(href.slice(1));
      const el = find();
      if (!el) return;
      // Steht gerade die Einkaufsliste offen, erst zu den Rezepten wechseln.
      const hidden = !!el.closest("[hidden]");
      if (hidden) document.getElementById("view-kochbuch")?.click();
      // Neu suchen: beim Tab-Wechsel baut die Wochenvorlage ihre Karten neu auf.
      setTimeout(() => find()?.scrollIntoView({ behavior: "smooth", block: "start" }), hidden ? 80 : 0);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Jeder Routenwechsel schließt das Register — egal ob durch einen Link in der App, den
  // Zurück-Button des Browsers, oder eine von außen eingefügte URL. Ohne das bliebe die
  // Registerseite sichtbar, weil sie den Routen-Inhalt in .book-pages ersetzt statt überlagert.
  // Scrollt außerdem nach oben — Client-Side-Routing setzt das anders als eine echte Seiten-
  // navigation nicht von selbst zurück, man würde sonst z.B. auf "Start" klicken und mitten in
  // der vorherigen Scrollposition landen. Ausnahme: Ziel hat einen #anchor (Sprung zu einem
  // bestimmten Rezept aus der Suche) — der Sprung dorthin darf nicht überschrieben werden.
  useEffect(() => {
    setMenuOpen(false);
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LangProvider>
      <div className="app-shell">
        <div className="book-wrap">
          <div className="book">
            <ShioriStack menuOpen={menuOpen} onOpenIndex={() => setMenuOpen((v) => !v)} onCloseIndex={() => setMenuOpen(false)} />
            <div className="book-spine" aria-hidden="true" />
            <main className="book-pages main">
              {/* Das Register ist keine Overlay-Karte mehr, sondern ersetzt hier einfach die
                  aufgeschlagene Seite — wie im echten Buch umblättern, kein Popup obendrauf.
                  Der key erzwingt bei jedem Wechsel (Register auf/zu, Route-Wechsel) einen echten
                  Remount, damit die Page-Flip-Animation unten jedes Mal neu abspielt. */}
              <div key={menuOpen ? "register" : location.pathname} className="page-flip">
              {menuOpen ? (
                <IndexOverlay plans={plans} onClose={() => setMenuOpen(false)} />
              ) : (
                <Routes>
                  <Route path="/" element={<HomePage plans={plans} />} />
                  <Route path="/bookmarks" element={<BookmarkPage plans={plans} />} />
                  <Route path="/pinnwand" element={<PinnwandPage plans={plans} />} />
                  <Route path="/kuehlschrank" element={<KuehlschrankPage plans={plans} />} />
                  <Route path="/vorratskammer" element={<VorratskammerPage />} />
                  <Route path="/vorkochen" element={<VorkochenPage />} />
                  <Route path="/datenschutz" element={<DatenschutzPage />} />
                  <Route path="/preppen" element={<PreppenPage />} />
                  <Route path="/kalte-gerichte" element={<KalteGerichtePage />} />
                  <Route path="/festtagsgerichte" element={<FesttagsgerichtePage />} />
                  <Route path="/kochtechniken" element={<KochtechnikenPage />} />
                  <Route path="/rezepte" element={<RecipeDatabasePage plans={plans} />} />
                  <Route path="/plan/:slug" element={<PlanPage plans={plans} />} />
                  <Route path="*" element={<HomePage plans={plans} />} />
                </Routes>
              )}
              </div>
              {/* Finn döst am Ende jeder Seite */}
              <div className="page-end" aria-hidden="true"><Cat who="finn" pose="doze" /></div>
            </main>
          </div>
        </div>

        <BackToTop />
        <CookieNotice />
      </div>
    </LangProvider>
  );
}
