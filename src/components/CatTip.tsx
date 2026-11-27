// Fleur schaut selten mit einem Küchentipp vorbei: höchstens einmal je Sitzung.
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "../App";
import { Cat } from "./Cats";
import { CAT_TIPS } from "../plans/catTips";

const KEY = "mkt.cat.tip";
const CHANCE = 0.25;

export function CatTip() {
  const { lang } = useLang();
  const { pathname } = useLocation();
  const [tip, setTip] = useState<number | null>(null);

  useEffect(() => {
    if (tip !== null || pathname === "/") return;
    try {
      if (sessionStorage.getItem(KEY) || Math.random() > CHANCE) return;
    } catch {
      return;
    }
    // Erst nach einer Weile, damit niemand beim Ankommen gestört wird.
    const timer = setTimeout(() => {
      try { sessionStorage.setItem(KEY, "1"); } catch { /* privates Fenster */ }
      setTip(Math.floor(Math.random() * CAT_TIPS.length));
    }, 8000);
    return () => clearTimeout(timer);
  }, [pathname, tip]);

  if (tip === null || tip < 0) return null;
  return (
    <aside className="cat-tip" role="status">
      <div className="cat-tip-cat"><Cat who="fleur" pose="tilt" /></div>
      <p><strong>{lang === "de" ? "Fleurs Tipp" : "Fleur 小贴士"}</strong>{CAT_TIPS[tip][lang === "de" ? 0 : 1]}</p>
      <button type="button" onClick={() => setTip(-1)} aria-label={lang === "de" ? "Tipp schließen" : "关闭提示"}>×</button>
    </aside>
  );
}
