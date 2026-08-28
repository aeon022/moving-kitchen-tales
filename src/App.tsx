// src/App.tsx
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { useBookmarks, Bookmark, BookmarkList } from "./hooks/useBookmarks";
import { PinnwandPage } from "./PinnwandPage";
import { PreppenPage } from "./PreppenPage";
import { RecipeDatabasePage } from "./RecipeDatabasePage";
import { PLAN_MANIFEST } from "./plans/manifest";

type Lang = "de" | "zh";
const LANG_KEY = "mkt.lang";
const SUPPORT_URL = "https://buy.polar.sh/polar_cl_IMvSv9smK6P0o45BtZE0XHi4CHkRhOnKB1EKL4DXUVZ";

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
function usePlanData(record: PlanRecord | null | undefined): PlanModule | null {
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
  box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>,
};
function NavIcon({ name }: { name: keyof typeof NAV_ICON_PATHS }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {NAV_ICON_PATHS[name]}
    </svg>
  );
}

// --- Back to Top Komponente ---
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      title="Nach oben"
      aria-label="Nach oben scrollen"
    >
      <span className="arrow-up" />
    </button>
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

function pickCurrent(plans: PlanRecord[], lang: Lang) {
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

function LangProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const nav = useNavigate();
  const isRoot = location.pathname === "/" || location.pathname === "/moving-kitchen-tales" || location.pathname === "/moving-kitchen-tales/";
  const [lang, setLangState] = useState<Lang>(() => "de");

  useEffect(() => {
    if (isRoot) {
      setLangState("de");
      localStorage.setItem(LANG_KEY, "de");
    }
  }, [isRoot]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(LANG_KEY, l);
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
const planLoaders = import.meta.glob("./plans/{2025,2026}/**/*.{jsx,tsx}") as Record<string, () => Promise<PlanModule>>;

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

  // Nur das Jahr mit dem aktuellen Plan startet aufgeklappt — sonst wird die Liste bei mehr
  // Jahren schnell zur Wall of Text. Ältere Jahre bleiben eingeklappt, bis man sie anklickt.
  useEffect(() => {
    const currentYear = currentPlan ? getPlanYear(currentPlan.startDate) : years[0];
    const initial: Record<number, boolean> = {};
    years.forEach(y => initial[y] = y === currentYear);
    setOpenYears(initial);
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
        <span>{lang === "de" ? "Zurück" : "Back"}</span>
      </button>

        {/* Titel mit Span für Ausblenden */}
        <div className="brand">
          <span className="seal-mark" aria-hidden="true"><span>厨</span><span>房</span></span>
          <span className="brand-text">MovingKitchenTales</span>
        </div>
        <p className="index-overlay-stats">
          {filtered.length} {lang === "de" ? "Wochen" : "weeks"} · {years.length} {lang === "de" ? "Jahre" : "years"} · {bookmarkLists.length} {lang === "de" ? "Pinnwände" : "boards"}
        </p>

        <div className="index-overlay-content">
        <div className="index-section-label">一 · 导航 · Navigation</div>
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
                <span className="nav-body"><span className="nav-title">{lang === "de" ? "Zum aktuellen Plan" : "Jump to current plan"}</span></span>
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
            <Link to="/preppen" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="box" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Preppen" : "Meal Prep"}</span></span>
            </Link>
          </li>
          <li>
            <Link to="/rezepte" onClick={handleLinkClick} className="nav-row">
              <span className="nav-icon"><NavIcon name="database" /></span>
              <span className="nav-body"><span className="nav-title">{lang === "de" ? "Rezept-Datenbank" : "Recipe database"}</span></span>
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
            title="Sprache umschalten / Switch Language"
          >
            <div className="lang-toggle-handle" data-text={lang.toUpperCase()} />
          </div>
          <span className="lang-label" style={{fontSize: 13, fontWeight: 500}}>
            {lang === "de" ? "Deutsch" : "中文"}
          </span>
        </div>

        {/* Suche */}
        <div className="sidebar-nav-item" style={{ padding: "0 12px 12px" }}>
          <input
            type="search"
            placeholder={lang === "de" ? "Rezepte suchen..." : "搜索食谱..."}
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
                  {lang === "de" ? "Lädt Rezepte…" : "Loading recipes…"}
                </div>
              ) : searchResults.length === 0 ? (
                <div style={{ padding: 8, fontSize: 13, color: "var(--muted)" }}>Keine Treffer</div>
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
        <div className="index-section-label">二 · 收藏 · Pinnwand</div>

        {/* Pinnwand-Listen */}
        <details className="year" open>
          <summary>{lang === "de" ? "Pinnwand" : "Pinboard"}</summary>
          {bookmarkLists.length === 0 ? (
            <div style={{ padding: "8px", fontSize: 13, color: "var(--muted)" }}>
              <Link to="/pinnwand" onClick={handleLinkClick}>
                {lang === "de" ? "Listen verwalten" : "Manage lists"}
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
                      <span className="nav-sub">{lang === "de" ? "Rezepte" : "recipes"}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </details>

        <div className="ornament-divider" aria-hidden="true"><span>◆</span></div>
        <div className="index-section-label">三 · 索引 · Wochen</div>

        <div className="year-controls">
          <button className="small-btn" onClick={() => setOpenYears(prev => Object.fromEntries(Object.keys(prev).map(k => [Number(k), true])))}>{lang === "de" ? "Alle +" : "全部展开"}</button>
          <button className="small-btn" onClick={() => setOpenYears(prev => Object.fromEntries(Object.keys(prev).map(k => [Number(k), false])))}>{lang === "de" ? "Alle -" : "全部收起"}</button>
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
                  {lang === "de" ? "Archiv" : "Archive"}
                </span>
              )}
            </summary>
            <ul className="nav-list week-list">
              {filtered
                .filter(p => getPlanYear(p.startDate) === y)
                .map(p => (
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
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
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
        <h2>Deine Merkliste ist noch leer</h2>
        <p style={{ color: "var(--muted)" }}>Pinne Rezepte mit dem Stern-Symbol, um sie hier zu sammeln.</p>
        <Link to="/" style={{ color: "var(--accent-2)", fontWeight: 600 }}>Zurück zu den Plänen</Link>
      </div>
    );
  }

  return (
    <div className="main-inner" style={{ padding: isMobile() ? "0 8px" : "0 20px" }}>
      <div style={{ marginBottom: isMobile() ? 16 : 32, padding: "0 8px" }}>
        <h1 style={{ fontSize: isMobile() ? "20px" : "32px", marginBottom: 4 }}>{lang === "de" ? "Meine Merkliste" : "我的收藏"}</h1>
        <p style={{ color: "var(--muted)", fontSize: isMobile() ? "13px" : "16px" }}>{bookmarkedRecipes.length} Rezepte gespeichert</p>
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
                  title="Entfernen"
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
                  Öffnen →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Ein Plan deckt 7 Tage ab; danach zeigt die Startseite den letzten bekannten Plan als
// "aktuell" an, auch wenn seine Woche längst vorbei ist (siehe pickCurrent) — ohne Warnung
// fällt eine Planungslücke wie bei Woche 26->36 sonst niemandem auf.
function daysSincePlanWeekEnded(startDate: string): number {
  const [y, m, d] = startDate.split("-").map(Number);
  const weekEnd = new Date(y, (m ?? 1) - 1, (d ?? 1) + 7);
  const diffMs = Date.now() - weekEnd.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function StalePlanBanner({ plan }: { plan: PlanRecord | null }) {
  if (!plan) return null;
  const staleDays = daysSincePlanWeekEnded(plan.startDate);
  if (staleDays <= 0) return null;
  return (
    <div
      role="status"
      style={{
        margin: "0 0 16px",
        padding: "10px 16px",
        borderRadius: 10,
        background: "rgba(245, 158, 11, 0.15)",
        border: "1px solid rgba(245, 158, 11, 0.4)",
        color: "var(--text)",
        fontSize: 14,
      }}
    >
      ⚠️ Der neueste Plan ist {plan.meta.title ?? plan.meta.id} (Start {plan.startDate}) — seine Woche ist seit {staleDays}{" "}
      Tag{staleDays === 1 ? "" : "en"} vorbei, es gibt noch keinen neueren.
    </div>
  );
}

function HomePage({ plans }: { plans: PlanRecord[] }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  // Klick hält das aufgemorphte Titelbild offen (auch ohne Hover, für Touch-Geräte) — Hover
  // selbst läuft rein über CSS, das hier steuert nur den zusätzlichen "geklickt"-Zustand.
  const [portraitOpen, setPortraitOpen] = useState(false);
  const currentPlan = useMemo(() => pickCurrent(plans, lang), [plans, lang]);
  const currentPlanMod = usePlanData(currentPlan);
  const currentPlanPreview = currentPlanMod?.DATA?.slice(0, 3) ?? [];
  const latestPlans = useMemo(() => {
    return plans
      .filter((plan) => plan.lang === lang && plan.slug !== currentPlan?.slug)
      .sort((a, b) => b.startDate.localeCompare(a.startDate))
      .slice(0, 4);
  }, [plans, lang, currentPlan?.slug]);

  // Just the small teaser row on the homepage (4 plans) — worth the load, unlike bulk-searching all plans.
  const [, setTeaserVersion] = useState(0);
  useEffect(() => {
    const missing = latestPlans.filter(p => !planDataCache.has(p.slug));
    if (missing.length === 0) return;
    Promise.all(missing.map(p => loadPlanData(p))).then(() => setTeaserVersion(v => v + 1));
  }, [latestPlans]);

  return (
    <div className="home-page">
      <StalePlanBanner plan={currentPlan} />
      {/* Cover Section — Buchtitelseite: Hanko oben links, Band-Label oben rechts, zentrierte
          Komposition (sepia Rundbild, kursiver Titel, Trennstrich, Subtitle), Tategaki am
          rechten Rand. Nahezu 1:1 nach dem Nutzer-Entwurf, CTA-Buttons als notwendige Ergänzung
          (der Entwurf hatte keine, die App braucht Navigation). */}
      <section className="cover">
        <div className="cover-header">
          <span className="seal-mark" aria-hidden="true"><span>厨</span><span>房</span></span>
          <span className="cover-volume">Band Eins — 完</span>
        </div>
        <div className="cover-center">
          <div
            className={`cover-portrait${portraitOpen ? " is-open" : ""}`}
            onClick={() => setPortraitOpen((v) => !v)}
            role="button"
            tabIndex={0}
            aria-pressed={portraitOpen}
            aria-label={lang === "de" ? "Titelbild vollständig anzeigen" : "Show full title image"}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setPortraitOpen((v) => !v); } }}
          >
            <img src={`${import.meta.env.BASE_URL}hero-bg.webp`} alt="" />
          </div>
          <h1 className="cover-title">Moving Kitchen Tales</h1>
          <div className="cover-rule" aria-hidden="true" />
          <p className="cover-subtitle">
            Wo Wochenpläne nach Filmnacht, Streetfood<br />und Zuhause schmecken.
            <span className="cover-kicker">Ein Archiv der Wochen</span>
          </p>
          <div className="hero-btns">
            {currentPlan && (
              <button
                className="btn-primary"
                onClick={() => navigate(`/plan/${currentPlan.slug}?lang=${lang}`)}
              >
                Zum aktuellen Plan
              </button>
            )}
            <button
              className="btn-secondary"
              onClick={() => {
                const classics = plans.find(p => p.meta.title?.includes("Woche 1") && p.lang === lang);
                if (classics) navigate(`/plan/${classics.slug}?lang=${lang}`);
              }}
            >
              Entdecke die Klassiker
            </button>
            <a
              className="btn-support"
              href={SUPPORT_URL}
              target="_blank"
              rel="noreferrer"
            >
              Projekt unterstützen
            </a>
          </div>
          <div className="cover-tategaki" aria-hidden="true">流动厨房的故事</div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="section-kicker">So funktioniert's</div>
        <h2>Plan auf, Hunger an, loskochen.</h2>
        <div className="steps-grid">
          <div className="step-card">
            <span>1</span>
            <h3>Woche auswählen</h3>
            <p>Spring in den aktuellen Plan oder stöbere durch alte Küchenkapitel.</p>
          </div>
          <div className="step-card">
            <span>2</span>
            <h3>Gericht kochen</h3>
            <p>Frühstück, Lunch, Dinner: mit klaren Zutaten, Alltagstempo und genug Story.</p>
          </div>
          <div className="step-card">
            <span>3</span>
            <h3>Favoriten pinnen</h3>
            <p>Sammle Lieblinge in Merkliste und Pinnwand, damit gute Ideen nicht verschwinden.</p>
          </div>
        </div>
      </section>

      {currentPlan ? (
        <section className="current-plan-section">
          <div className="current-plan-copy">
            <div className="section-kicker">Aktueller Wochenplan</div>
            <h2>{currentPlan.meta.title} <span>{currentPlan.startDate}</span></h2>
            <p>
              Ein kompletter Plan mit drei Mahlzeiten pro Tag, viel Asia-Comfort, Reiskocher-Ideen
              und genug Abwechslung, damit die Woche nicht nach Routine schmeckt.
            </p>
            <button
              className="btn-primary"
              onClick={() => navigate(`/plan/${currentPlan.slug}?lang=${lang}`)}
            >
              Aktuellen Plan öffnen
            </button>
          </div>
          <div className="current-plan-recipes">
            {currentPlanPreview.map((recipe) => (
              <Link key={recipe.id} to={`/plan/${currentPlan.slug}#meal-${recipe.id}`}>
                <strong>{recipe.title}</strong>
                {recipe.desc ? <span>{recipe.desc}</span> : null}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {latestPlans.length > 0 ? (
        <section className="latest-plans-section">
          <div className="latest-plans-head">
            <div>
              <div className="section-kicker">Frisch aus der Küche</div>
              <h2>Neue Kapitel, wenn du direkt weiterkochen willst.</h2>
            </div>
            <span>{latestPlans.length} Vorschläge</span>
          </div>
          <div className="latest-plans-grid">
            {latestPlans.map((plan) => {
              const teaserRecipe = planDataCache.get(plan.slug)?.DATA?.[0];
              return (
                <Link key={plan.slug} className="latest-plan-card" to={`/plan/${plan.slug}?lang=${lang}`}>
                  <span>{plan.startDate}</span>
                  <h3>{plan.meta.title ?? plan.meta.id}</h3>
                  {teaserRecipe ? <p>{teaserRecipe.title}</p> : null}
                  <strong>Plan öffnen</strong>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* Categories */}
      <section className="categories">
        <div className="cat-card">
          <div className="cat-icon">🎬</div>
          <h3>Studio Classics</h3>
          <p>Gerichte mit dieser warmen Filmküchen-Energie: dampfende Schalen, knusprige Toasts und Essen, das sofort nach Szene klingt.</p>
        </div>
        <div className="cat-card">
          <div className="cat-icon">🔥</div>
          <h3>Viral Asia-Hits</h3>
          <p>TikTok-Tricks mit Substanz: Rice-Paper-Hacks, knusprige Airfryer-Ideen und schnelle Bowls mit echter Alltagstauglichkeit.</p>
        </div>
        <div className="cat-card">
          <div className="cat-icon">⏲️</div>
          <h3>The 10-Minute Pantry</h3>
          <p>Für Tage mit wenig Energie und großem Hunger: Vorratsküche, Reiskocher, ein paar Handgriffe, fertig ist das Kapitel.</p>
        </div>
      </section>

      <section className="pinboard-teaser">
        <div>
          <div className="section-kicker">Merkliste & Pinnwand</div>
          <h2>Deine Lieblingsgerichte bekommen einen festen Platz.</h2>
          <p>
            Markiere Rezepte mit dem Stern oder sortiere sie in eigene Pinnwände:
            schnelle Lunches, Reiskocher-Favoriten, Comfort Food, Wochenende, Gäste.
          </p>
        </div>
        <Link className="btn-secondary" to="/pinnwand">
          Pinnwand öffnen
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <p className="quote">
            "Manche Gerichte bleiben im Kopf, weil sie mehr erzählen als ein Rezept: von Zuhause, Aufbruch, Trost und kleinen Abenteuern am Küchentisch."
          </p>
          <p>
            <strong>Moving Kitchen Tales</strong> ist kein trockenes Kocharchiv, sondern ein wachsendes Küchen-Universum:
            Wochenpläne mit Frühstück, Mittagessen und Abendessen, inspiriert von asiatischer Hausmannskost,
            animierten Food-Momenten und viralen Ideen, die auch nach Feierabend noch machbar bleiben.
          </p>
          <div className="teaser">
            Such dir einen Plan aus, pinne deine Favoriten und bau dir deine eigene kleine Küchenreise zusammen.
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p><em>"Ein Plan für die Woche. Ein Teller für die Stimmung. Eine Geschichte nach der anderen."</em></p>
        <div className="home-footer-links">
          <a href="https://abteilung83.at" target="_blank" rel="noreferrer">
            Made with love by abteilung83.at & Imprint
          </a>
        </div>
      </footer>
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

  if (!current) return <div className="main-inner">Plan nicht gefunden: {slug}</div>;
  if (current.lang !== lang) {
    const sibling = plans.find(p => p.baseId === current.baseId && p.lang === lang);
    if (sibling) {
      nav(`/plan/${sibling.slug}?lang=${lang}`, { replace: true });
      return null;
    }
  }
  if (!mod) return <div className="main-inner">{lang === "de" ? "Lädt Plan…" : "Loading plan…"}</div>;
  const Cmp = mod.default;
  return (<div className="main-inner"><Cmp /></div>);
}

function HomeRedirect({ plans }: { plans: PlanRecord[] }) {
  const currentDE = pickCurrent(plans, "de");
  if (!currentDE) return <div className="main-inner">Keine DE-Pläne gefunden.</div>;
  return <Navigate to={`/plan/${currentDE.slug}?lang=de`} replace />;
}

// Shiori — mehrere farbige Lesezeichenbänder, an der Buchkante gestapelt, statt eines einzelnen
// Reiters. Fest auf dem Viewport (nicht an der Buchkante absolut), damit sie bei langen Seiten
// (44 Wochen, 21 Rezepte) beim Scrollen nicht verschwinden.
function ShioriStack({ menuOpen, onOpenIndex, onCloseIndex }: { menuOpen: boolean; onOpenIndex: () => void; onCloseIndex: () => void }) {
  const navigate = useNavigate();
  // Explizites onCloseIndex() bei den navigierenden Tabs, nicht nur der Pfadwechsel-Effekt in
  // App() — wenn man schon auf "/" steht und bei offenem Register auf 封面 klickt, ändert sich
  // der Pfad nicht, also würde der Effekt allein das Register nicht schließen.
  const tabs = [
    { key: "cover", jp: "封面", de: "Start", color: "dark", onClick: () => { onCloseIndex(); navigate("/"); } },
    // Klick auf 目录 öffnet UND schließt das Register (Toggle) — der Button ist der einzige Weg
    // zurück, der auch von der Registerseite selbst aus sichtbar bleibt.
    { key: "index", jp: "目录", de: "Register", color: "seal", onClick: onOpenIndex, pressed: menuOpen },
    { key: "preppen", jp: "备餐", de: "Preppen", color: "olive", onClick: () => { onCloseIndex(); navigate("/preppen"); } },
  ];
  return (
    <div className="shiori-stack">
      {tabs.map((t) => (
        <button key={t.key} type="button" className={`shiori-tab shiori-${t.color}`} onClick={t.onClick} aria-pressed={t.pressed}>
          {/* Zweisprachig, unabhängig vom DE/中文-Umschalter der Seite — das Schriftzeichen ist
              ein dekoratives Buch-Element, die deutsche Beschriftung die eigentliche Wegweisung. */}
          <span className="shiori-glyph" aria-hidden="true">{t.jp}</span>
          <span className="shiori-caption">{t.de}</span>
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const plans = usePlans();
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
                  <Route path="/preppen" element={<PreppenPage />} />
                  <Route path="/rezepte" element={<RecipeDatabasePage plans={plans} />} />
                  <Route path="/plan/:slug" element={<PlanPage plans={plans} />} />
                  <Route path="*" element={<HomePage plans={plans} />} />
                </Routes>
              )}
              </div>
            </main>
          </div>
        </div>

        <BackToTop />
      </div>
    </LangProvider>
  );
}
