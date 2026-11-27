// Nach-oben-Knopf: Fleur sitzt in einem Pinselkreis (Ensō), der den Lesefortschritt zeigt.
// Beim Klick springt sie nach oben und die Seite fährt mit.
import React, { useEffect, useState } from "react";
import { useLang } from "../App";
import { Cat } from "./Cats";

const R = 34;
const LENGTH = 2 * Math.PI * R;

export function BackToTop() {
  const { lang } = useLang();
  const [{ visible, progress }, setScroll] = useState({ visible: false, progress: 0 });
  const [jumping, setJumping] = useState(false);
  const [curious, setCurious] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll({ visible: window.scrollY > 300, progress: max > 0 ? Math.min(1, window.scrollY / max) : 0 });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const up = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: 0 });
      return;
    }
    setJumping(true);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 160);
    setTimeout(() => setJumping(false), 1100);
  };

  const label = lang === "de" ? "Nach oben" : "回到顶部";
  return (
    <button
      type="button"
      className={`back-to-top${visible || jumping ? " visible" : ""}${jumping ? " is-jumping" : ""}`}
      onClick={up}
      onMouseEnter={() => setCurious(true)}
      onMouseLeave={() => setCurious(false)}
      onFocus={() => setCurious(true)}
      onBlur={() => setCurious(false)}
      title={label}
      aria-label={label}
    >
      <svg className="enso" viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r={R} className="enso-track" />
        <circle cx="40" cy="40" r={R} className="enso-ink" strokeDasharray={LENGTH} strokeDashoffset={LENGTH * (1 - (jumping ? 1 : progress))} />
      </svg>
      <span className="enso-cat" aria-hidden="true">
        <Cat who="fleur" pose={jumping ? "jump" : curious ? "tilt" : "sit"} />
      </span>
    </button>
  );
}
