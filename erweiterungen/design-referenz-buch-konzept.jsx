// erweiterungen/design-referenz-buch-konzept.jsx
// Design-Referenz (Entwurf, vom Nutzer eingebracht am 2026-08-28) — kein lauffähiger Teil der App,
// nur als Vorlage aufbewahrt. Zeigt das "physisches Buch"-Konzept: Watoji-Fadenbindung links,
// Washi-Papier, Shiori-Lesezeichen-Reiter (mehrfarbig, rechts angeheftet), Hanko-Stempel mit
// vertikalem 2-Zeichen-Text, Cormorant Garamond + Noto Serif JP, Tategaki (vertikaler Titel).
// Wurde teilweise ins echte Design übernommen: siehe App.tsx (RibbonTab/IndexOverlay) und
// styles/app.css — kombiniert mit dem bereits bestehenden washi/sumi/indigo/torii-rot-System.

import React, { useState, useEffect } from 'react';
import { Leaf, Utensils, BookOpen, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('cover');

  // Load fonts correctly to avoid esbuild @import parsing errors in JS strings
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+JP:wght@200;300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const customStyles = `
    .font-noto { font-family: 'Noto Serif JP', serif; }
    .font-cormorant { font-family: 'Cormorant Garamond', serif; }

    .vertical-rl {
      writing-mode: vertical-rl;
      text-orientation: upright;
    }

    /* Der Hintergrund des Tisches (Tatami/Holz Vibe in Farbe) */
    body {
      background-color: #D4D0C5;
    }

    /* Washi-Papier Textur für das Buch */
    .washi-paper {
      background-color: #F9F7F1;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
    }

    /* Simulation der Watoji-Fadenheftung */
    .watoji-binding {
      position: relative;
    }
    .watoji-binding::before {
      content: '';
      position: absolute;
      top: 40px; bottom: 40px; right: 12px;
      width: 1px;
      background: rgba(26, 26, 24, 0.1);
      border-right: 1px dashed rgba(26, 26, 24, 0.2);
    }
    .binding-hole {
      width: 4px; height: 16px;
      background-color: #2A2826;
      border-radius: 2px;
      position: absolute;
      right: 10px;
      box-shadow: inset 1px 1px 2px rgba(0,0,0,0.5);
    }

    /* Roter Hanko Stempel - Klassisch */
    .hanko {
      color: #9E2A2B;
      border: 1px solid #9E2A2B;
      padding: 8px 4px;
      font-weight: 500;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 1.1;
      border-radius: 2px;
      opacity: 0.85;
    }

    ::-webkit-scrollbar { display: none; } /* Clean Book Look */
  `;

  const bookmarks = [
    { id: 'cover', label: 'Titel', jp: '表紙', color: 'bg-[#1A1A18]', textColor: 'text-[#F9F7F1]' },
    { id: 'rezepte', label: 'Rezepte', jp: '献立', color: 'bg-[#9E2A2B]', textColor: 'text-[#F9F7F1]' },
    { id: 'zutaten', label: 'Zutaten', jp: '材料', color: 'bg-[#555B4D]', textColor: 'text-[#F9F7F1]' }
  ];

  return (
    <div className="min-h-screen py-8 md:py-16 px-4 md:px-12 flex justify-center items-start font-cormorant text-[#1A1A18] selection:bg-[#1A1A18] selection:text-[#F9F7F1]">
      <style>{customStyles}</style>

      {/* --- DAS BUCH (Main Container) --- */}
      <div className="relative flex w-full max-w-5xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-r-sm transition-all duration-500">

        {/* Lesezeichen (Shiori) - Rechts an das Buch geheftet */}
        <div className="absolute top-16 -right-10 md:-right-12 flex flex-col gap-4 z-0">
          {bookmarks.map((bm) => (
            <button
              key={bm.id}
              onClick={() => setActiveTab(bm.id)}
              className={`relative flex items-center justify-center w-10 md:w-12 h-32 ${bm.color} ${bm.textColor} transition-all duration-300 origin-left hover:w-14
                ${activeTab === bm.id ? 'translate-x-1 shadow-lg' : '-translate-x-2 opacity-80 hover:-translate-x-1'}
                rounded-r-sm`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}
            >
              <div className="flex flex-col items-center gap-4">
                <span className="font-noto text-sm">{bm.jp}</span>
              </div>
            </button>
          ))}
        </div>

        {/* --- DIE BINDUNG (Linke Buchseite) --- */}
        <div className="w-16 md:w-24 bg-[#EBE7E0] watoji-binding border-r border-[#1A1A18]/10 flex-shrink-0 z-10 rounded-l-sm overflow-hidden relative shadow-[inset_-4px_0_12px_rgba(0,0,0,0.05)]">
          {/* Die genähten Löcher der Bindung */}
          <div className="binding-hole top-[10%]"></div>
          <div className="binding-hole top-[30%]"></div>
          <div className="binding-hole top-[50%]"></div>
          <div className="binding-hole top-[70%]"></div>
          <div className="binding-hole top-[90%]"></div>
        </div>

        {/* --- DER INHALT (Buchseiten) --- */}
        <div className="washi-paper w-full min-h-[85vh] z-10 p-8 md:p-16 lg:p-24 relative overflow-hidden">

          {/* Subtle Buchseiten-Textur-Schatten */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/5 to-transparent pointer-events-none"></div>

          <div className="h-full relative transition-opacity duration-500">

            {activeTab === 'cover' && (
              <div className="flex flex-col h-full animate-fade-in">
                {/* Header-Bereich der Seite */}
                <div className="flex justify-between items-start mb-16">
                  <div className="hanko text-xs tracking-widest">
                    <span className="font-noto">台</span>
                    <span className="font-noto">所</span>
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#1A1A18]/40">
                    Band Eins — 完
                  </div>
                </div>

                {/* Hero / Titel-Komposition (Extrem viel Weißraum) */}
                <div className="flex-1 flex flex-col items-center justify-center relative">

                  {/* Zentrale zarte Illustration (Ghibli Vibe) */}
                  <div className="w-64 h-64 md:w-80 md:h-80 mb-12 opacity-90 relative">
                    <img
                      src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80"
                      alt="Reisschale"
                      className="w-full h-full object-cover rounded-full shadow-inner grayscale-[20%] sepia-[10%]"
                    />
                    <div className="absolute inset-0 rounded-full border border-[#1A1A18]/10 m-2"></div>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-light italic mb-6 text-center text-[#1A1A18]">
                    Moving Kitchen Tales
                  </h1>

                  <div className="w-px h-12 bg-[#1A1A18]/20 mb-6"></div>

                  <p className="text-center text-sm md:text-base max-w-sm text-[#1A1A18]/60 leading-relaxed font-light">
                    Der Lärm der Welt verstummt, <br/>wenn das Wasser beginnt zu sieden. <br/>
                    <span className="inline-block mt-4 text-xs tracking-widest uppercase">Ein Archiv der Stille</span>
                  </p>

                  {/* Vertikaler JP Titel (Tategaki) am rechten Rand der Seite */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 vertical-rl font-noto text-3xl md:text-4xl text-[#1A1A18] tracking-[0.3em] font-light opacity-80">
                    動くキッチンの物語
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'rezepte' && (
              <div className="flex flex-col h-full animate-fade-in">
                <div className="flex items-center gap-4 mb-16 border-b border-[#1A1A18]/10 pb-8">
                  <h2 className="text-3xl font-light">Das Archiv</h2>
                  <span className="font-noto text-2xl text-[#9E2A2B]">献立</span>
                </div>

                {/* Elegante Liste im Inhaltsverzeichnis-Stil */}
                <div className="flex-1 flex flex-col gap-8 max-w-2xl">

                  {/* Listen-Element 1 */}
                  <div className="group cursor-pointer flex gap-6 items-start">
                    <div className="font-noto text-2xl text-[#1A1A18]/20 group-hover:text-[#9E2A2B] transition-colors mt-1">一</div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between border-b border-dotted border-[#1A1A18]/20 pb-1 mb-2">
                        <h3 className="text-xl md:text-2xl font-light group-hover:italic transition-all">Die klare Brühe (Shio)</h3>
                        <span className="text-sm tracking-widest text-[#1A1A18]/40 font-mono">012</span>
                      </div>
                      <p className="text-sm text-[#1A1A18]/60 font-light line-clamp-2">Eine Betrachtung von Kombu, Wasser und Geduld. Zwölf Stunden für einen Moment der Klarheit.</p>
                    </div>
                  </div>

                  {/* Listen-Element 2 */}
                  <div className="group cursor-pointer flex gap-6 items-start">
                    <div className="font-noto text-2xl text-[#1A1A18]/20 group-hover:text-[#9E2A2B] transition-colors mt-1">二</div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between border-b border-dotted border-[#1A1A18]/20 pb-1 mb-2">
                        <h3 className="text-xl md:text-2xl font-light group-hover:italic transition-all">Umeboshi Onigiri</h3>
                        <span className="text-sm tracking-widest text-[#1A1A18]/40 font-mono">018</span>
                      </div>
                      <p className="text-sm text-[#1A1A18]/60 font-light line-clamp-2">Der Reis wird nicht gedrückt, er wird sanft in Form gebracht. Die richtige Temperatur der Hände.</p>
                    </div>
                  </div>

                  {/* Listen-Element 3 */}
                  <div className="group cursor-pointer flex gap-6 items-start">
                    <div className="font-noto text-2xl text-[#1A1A18]/20 group-hover:text-[#9E2A2B] transition-colors mt-1">三</div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between border-b border-dotted border-[#1A1A18]/20 pb-1 mb-2">
                        <h3 className="text-xl md:text-2xl font-light group-hover:italic transition-all">Bento Box Architektur</h3>
                        <span className="text-sm tracking-widest text-[#1A1A18]/40 font-mono">024</span>
                      </div>
                      <p className="text-sm text-[#1A1A18]/60 font-light line-clamp-2">Fünf Farben. Fünf Zubereitungsarten. Wie eine Holzbox die Washoku-Philosophie einkapselt.</p>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {activeTab === 'zutaten' && (
              <div className="flex flex-col h-full items-center justify-center animate-fade-in text-center opacity-50">
                <Leaf size={32} className="mb-6 mx-auto text-[#1A1A18]/30" strokeWidth={1} />
                <h2 className="text-2xl font-light italic mb-4">Das Lexikon der Zutaten</h2>
                <p className="text-sm tracking-widest uppercase">In Vorbereitung</p>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
