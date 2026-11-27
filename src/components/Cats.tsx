import { createContext, useContext } from "react";

// Finn und Fleur im Tuschestil, dazu die Pinsel-Grundformen, die auch DishArt nutzt.
const INK = "var(--text)";
const PAPER = "var(--panel)";
// Helles Fell und dunkle Augen/Nase müssen in beiden Themes hell bzw. dunkel bleiben,
// daher aus der Helligkeit von --text abgeleitet (hell: Text dunkel, dunkel: Text hell).
const LIGHT = "var(--cat-light)";
const DARK = "var(--cat-dark)";

// Pinselstrich: "x y" Start, dann je 6 Zahlen pro kubischem Bézier. Gefüllte Fläche mit
// Aufsetzen, Schwellung und auslaufender Spitze statt gleichförmigem stroke.
const cache = new Map<string, string>();
function brushPath(d: string, w: number): string {
  const key = `${w}|${d}`;
  const done = cache.get(key);
  if (done) return done;
  const n = d.trim().split(/[\s,]+/).map(Number);
  const pts: [number, number][] = [[n[0], n[1]]];
  for (let i = 2; i + 5 < n.length; i += 6) {
    const [x0, y0] = pts[pts.length - 1];
    for (let s = 1; s <= 18; s++) {
      const t = s / 18, u = 1 - t;
      const at = (p0: number, k: number) => u * u * u * p0 + 3 * u * u * t * n[i + k] + 3 * u * t * t * n[i + k + 2] + t * t * t * n[i + k + 4];
      pts.push([at(x0, 0), at(y0, 1)]);
    }
  }
  const len = [0];
  for (let i = 1; i < pts.length; i++) len.push(len[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const total = len[len.length - 1] || 1;
  const left: string[] = [], right: string[] = [];
  pts.forEach(([x, y], i) => {
    const t = len[i] / total;
    const [ax, ay] = pts[Math.max(0, i - 1)], [bx, by] = pts[Math.min(pts.length - 1, i + 1)];
    const l = Math.hypot(bx - ax, by - ay) || 1;
    const press = Math.min(1, 0.45 + t * 5) * (1 - 0.85 * t ** 2.2);
    const half = (w / 2) * press * (1 + 0.14 * Math.sin(t * 11 + n[0]));
    const ox = (-(by - ay) / l) * half, oy = ((bx - ax) / l) * half;
    left.push(`${(x + ox).toFixed(1)} ${(y + oy).toFixed(1)}`);
    right.unshift(`${(x - ox).toFixed(1)} ${(y - oy).toFixed(1)}`);
  });
  const r = (w * 0.22).toFixed(1);
  const out = `M${left.join("L")}L${right.join("L")}A${r} ${r} 0 0 1 ${left[0]}Z`;
  cache.set(key, out);
  return out;
}

/** Pinselstrich */
export const B = ({ d, w = 4, c = INK, o = 0.92 }: { d: string; w?: number; c?: string; o?: number }) => (
  <path d={brushPath(d, w)} style={{ fill: c, opacity: o }} />
);
/** Flache Lavierung */
export const W = ({ d, c = INK, o = 0.09 }: { d: string; c?: string; o?: number }) => <path d={d} style={{ fill: c, opacity: o }} />;
/** Tupfer */
export const Dot = ({ x, y, r = 2.5, ry = r, a = 0, c = INK, o = 0.85 }: { x: number; y: number; r?: number; ry?: number; a?: number; c?: string; o?: number }) => (
  <ellipse cx={x} cy={y} rx={r} ry={ry} transform={`rotate(${a} ${x} ${y})`} style={{ fill: c, opacity: o }} />
);
/** Form, die Dahinterliegendes verdeckt, optional mit Lavierung */
export const Shape = ({ d, o = 0, c = INK }: { d: string; o?: number; c?: string }) => (
  <>
    <path d={d} style={{ fill: PAPER }} />
    {o > 0 && <W d={d} c={c} o={o} />}
  </>
);

const oval = (x: number, y: number, rx: number, ry: number) =>
  `M${x - rx} ${y}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0Z`;


type Who = "finn" | "fleur";
export type CatPose<W extends Who = Who> = {
  finn: "sit" | "doze" | "peek" | "angle" | "stretch" | "onpaper";
  fleur: "sit" | "doze" | "peek" | "tilt" | "jump" | "stretch" | "puzzled";
}[W];
type CatProps = { [W in Who]: { who: W; pose: CatPose<W> } }[Who];
type Eyes = "open" | "closed" | "happy" | "wide" | "wink";
type Mouth = "smile" | "o" | "yawn";
type Face = { eyes?: Eyes; mouth?: Mouth };

/** Neujahrs-Halstuch: gilt für alle Köpfe innerhalb einer CatFigure. */
const Festive = createContext(false);

const FUR = 0.2;
export const Strokes = ({ d, w = 4, o = 0.85, c = INK }: { d: string[]; w?: number; o?: number; c?: string }) => (
  <>{d.map((s) => <B key={s} d={s} w={w} o={o} c={c} />)}</>
);

/** Geringelter Schwanz: Papiermaske, Fellton, Ringe, dunkle Spitze. d = ein Pfad, tip = letztes Stück. */
export const Tail = ({ d, tip, w }: { d: string; tip: string; w: number }) => (
  <g style={{ fill: "none", strokeLinecap: "round" }}>
    <path d={d} style={{ stroke: INK, strokeWidth: w + 3, opacity: 0.7 }} />
    <path d={d} style={{ stroke: PAPER, strokeWidth: w }} />
    <path d={d} style={{ stroke: INK, strokeWidth: w, opacity: FUR }} />
    <path d={d} style={{ stroke: INK, strokeWidth: w, strokeLinecap: "butt", strokeDasharray: "5 10", strokeDashoffset: -6, opacity: 0.72 }} />
    <path d={tip} style={{ stroke: INK, strokeWidth: w, opacity: 0.85 }} />
  </g>
);

/** Bein: Kontur, Fell, helle Pfote am Ende (x,y) */
export const Limb = ({ d, x, y, w = 11 }: { d: string; x: number; y: number; w?: number }) => (
  <g style={{ fill: "none", strokeLinecap: "round" }}>
    <path d={d} style={{ stroke: INK, strokeWidth: w + 4.5, opacity: 0.85 }} />
    <path d={d} style={{ stroke: PAPER, strokeWidth: w }} />
    <path d={d} style={{ stroke: INK, strokeWidth: w, opacity: FUR }} />
    <path d={`M${x} ${y}h0.1`} style={{ stroke: LIGHT, strokeWidth: w }} />
  </g>
);

/** Pfote mit zwei Zehenstrichen, (x,y) = Unterkante Mitte */
export const Paw = ({ x, y, r }: { x: number; y: number; r: number }) => (
  <>
    <path d={`M${x - r} ${y}C${x - r * 1.1} ${y - r * 1.25} ${x + r * 1.1} ${y - r * 1.25} ${x + r} ${y}Z`} style={{ fill: LIGHT }} />
    <B d={`${x - r} ${y} ${x - r * 1.2} ${y - r * 1.3} ${x + r * 1.2} ${y - r * 1.3} ${x + r} ${y}`} w={r * 0.28} />
    <B d={`${x - r} ${y} ${x - r * 0.3} ${y + 2} ${x + r * 0.3} ${y + 2} ${x + r} ${y - 1}`} w={r * 0.18} />
    {[-0.32, 0.32].map((k) => (
      <B key={k} d={`${x + k * r} ${y - r * 0.55} ${x + k * r} ${y - r * 0.35} ${x + k * r * 0.9} ${y - r * 0.2} ${x + k * r * 0.8} ${y}`} w={2} c={DARK} />
    ))}
  </>
);

/** Finn: kräftiger, etwas breiterer Schädel, Wangenfell, Augen halb zu. */
function FinnHead({ eyes = "open", mouth = "smile" }: Face) {
  const skull = "M-34 -14L-35 -38Q-24 -36 -15 -27Q0 -31 15 -27Q24 -36 35 -38L34 -14C42 -2 46 8 38 14L40 17C28 30 12 32 0 32C-12 32 -28 30 -40 17L-38 14C-46 8 -42 -2 -34 -14Z";
  return (
    <>
      <Shape d={skull} o={FUR} />
      <path d={oval(0, 16, 19, 12)} style={{ fill: LIGHT }} />
      <Strokes w={4.5} o={0.95} d={["-34 -13 -37 -22 -37 -32 -35 -39 -28 -39 -20 -33 -14 -26", "34 -13 37 -22 37 -32 35 -39 28 -39 20 -33 14 -26"]} />
      <Strokes w={2.4} d={["-15 -27 -6 -31 6 -31 15 -27", "-30 -30 -27 -27 -24 -25 -21 -22", "30 -30 27 -27 24 -25 21 -22"]} />
      <Strokes w={5} o={0.95} d={["-34 -15 -42 -4 -48 8 -37 14", "-39 13 -32 28 -14 33 2 32", "34 -15 42 -4 48 8 37 14", "39 13 32 27 18 31 6 32"]} />
      {/* M und Wangenstreifen */}
      <Strokes w={3.6} o={0.95} d={["-14 -10 -13 -16 -11 -20 -9 -25", "-9 -24 -6 -20 -3 -17 0 -13", "0 -13 3 -17 6 -20 9 -24", "9 -25 11 -20 13 -16 14 -10", "-40 0 -34 1 -29 3 -24 6", "-40 8 -35 9 -32 11 -28 13", "40 0 34 1 29 3 24 6", "40 8 35 9 32 11 28 13"]} />
      {[-15, 15].map((x) =>
        eyes === "closed" || eyes === "happy" ? (
          <B key={x} d={eyes === "happy" ? `${x - 8} 4 ${x - 4} -3 ${x + 3} -3 ${x + 8} 4` : `${x - 8} -1 ${x - 4} 4 ${x + 3} 4 ${x + 8} -1`} w={3.4} />
        ) : eyes === "wide" ? (
          <g key={x}>
            <path d={oval(x, 1, 9, 9)} style={{ fill: LIGHT, stroke: DARK, strokeWidth: 2.4 }} />
            <Dot x={x} y={1} r={2.8} c={DARK} o={1} />
          </g>
        ) : (
          <g key={x}>
            <path d={`M${x - 8} -1H${x + 8}C${x + 7} 9 ${x - 7} 9 ${x - 8} -1Z`} style={{ fill: LIGHT }} />
            <Dot x={x + 2} y={2.5} r={3} ry={3.6} c={DARK} o={1} />
            <B d={`${x - 10} ${x < 0 ? -3 : -1} ${x - 4} -2 ${x + 4} -2 ${x + 10} ${x < 0 ? -1 : -3}`} w={4} c={DARK} o={1} />
            <B d={`${x - 7} 3 ${x - 4} 8 ${x + 3} 8 ${x + 7} 3`} w={1.6} c={DARK} />
          </g>
        ),
      )}
      <path d="M-5 10Q0 8 5 10L0 15Z" style={{ fill: DARK }} />
      {mouth === "yawn" ? (
        <>
          <path d="M-11 17C-6 14 6 14 11 17C13 36 -13 36 -11 17Z" style={{ fill: DARK }} />
          <path d="M-6 28C-3 23 3 23 6 28C3 32 -3 32 -6 28Z" style={{ fill: LIGHT, opacity: 0.6 }} />
          <path d="M-8 17L-5.5 22L-3.5 16.5ZM8 17L5.5 22L3.5 16.5Z" style={{ fill: LIGHT }} />
        </>
      ) : mouth === "o" ? (
        <path d={oval(0, 21, 4, 5)} style={{ fill: DARK }} />
      ) : (
        // leicht schiefes Schmunzeln
        <Strokes w={2.2} c={DARK} d={["0 15 -1 21 -7 23 -12 19", "0 15 2 21 9 23 14 17"]} />
      )}
      <Strokes w={1.5} o={0.7} d={["-17 17 -30 15 -42 16 -56 21", "-16 21 -28 23 -38 27 -48 34", "17 17 30 15 42 16 56 21", "16 21 28 23 38 27 48 34"]} />
    </>
  );
}

/** Fleur: schmales Dreiecksgesicht, große Ohren, große wache Augen. */
function FleurHead({ eyes = "open", mouth = "smile" }: Face) {
  const skull = "M-23 -9L-29 -43Q-16 -36 -8 -22Q0 -24 8 -22Q16 -36 29 -43L23 -9C28 4 22 12 12 18Q0 28 -12 18C-22 12 -28 4 -23 -9Z";
  return (
    <>
      <Shape d={skull} o={FUR} />
      <path d={oval(0, 13, 11, 8.5)} style={{ fill: LIGHT }} />
      <Strokes w={3.6} o={0.95} d={["-23 -8 -27 -20 -29 -32 -29 -44 -20 -41 -12 -31 -7 -21", "23 -8 27 -20 29 -32 29 -44 20 -41 12 -31 7 -21"]} />
      <Strokes w={2} d={["-8 -22 -3 -24 3 -24 8 -22", "-24 -34 -20 -28 -17 -23 -15 -17", "24 -34 20 -28 17 -23 15 -17"]} />
      <Strokes w={3.6} d={["-23 -10 -29 4 -24 12 -12 18", "-14 16 -8 22 -3 24 2 23", "23 -10 29 4 24 12 12 18", "14 16 9 21 5 23 1 24"]} />
      <Strokes w={2.7} o={0.95} d={["-10 -8 -9 -13 -8 -16 -6 -20", "-6 -19 -4 -16 -2 -14 0 -10", "0 -10 2 -14 4 -16 6 -19", "6 -20 8 -16 9 -13 10 -8", "-26 4 -22 4 -19 5 -16 7", "26 4 22 4 19 5 16 7"]} />
      {[-11, 11].map((x) =>
        eyes === "closed" || (eyes === "wink" && x < 0) ? (
          <B key={x} d={`${x - 6} 0 ${x - 3} 4 ${x + 2} 4 ${x + 6} -1`} w={2.4} />
        ) : eyes === "wide" ? (
          <g key={x}>
            <path d={oval(x, 0, 9, 9)} style={{ fill: LIGHT, stroke: DARK, strokeWidth: 1.8 }} />
            <Dot x={x} y={0.5} r={3.4} c={DARK} o={1} />
            <Dot x={x + 1.2} y={-1} r={1.1} c={LIGHT} o={1} />
          </g>
        ) : (
          <g key={x}>
            <path d={oval(x, 0, 7, 6.5)} style={{ fill: LIGHT, stroke: DARK, strokeWidth: 1.8 }} />
            <Dot x={x} y={0.5} r={3.6} ry={5} c={DARK} o={1} />
            <Dot x={x + 1.6} y={-2} r={1.5} c={LIGHT} o={1} />
            <B d={`${x < 0 ? x - 9 : x + 9} -6 ${x < 0 ? x - 6 : x + 6} -9 ${x} -8 ${x < 0 ? x + 7 : x - 7} -4`} w={2.8} />
          </g>
        ),
      )}
      <path d="M-3.5 9Q0 7.5 3.5 9L0 12.5Z" style={{ fill: DARK }} />
      {mouth === "o" ? (
        <path d={oval(0, 17, 2.6, 3.2)} style={{ fill: DARK }} />
      ) : (
        <Strokes w={1.7} c={DARK} d={["0 12 -1 16 -4 18 -7 15", "0 12 1 16 4 18 7 15"]} />
      )}
      <Strokes w={1.3} o={0.7} d={["-11 12 -22 9 -32 8 -44 10", "-11 15 -20 17 -29 20 -38 26", "11 12 22 9 32 8 44 10", "11 15 20 17 29 20 38 26"]} />
    </>
  );
}

/** Rotes Halstuch unter dem Kinn; low = liegende Posen, kürzerer Zipfel. Wird vom Kopf überdeckt. */
const Scarf = ({ who, low }: { who: Who; low?: boolean }) => {
  const [w, y, tip] = who === "finn" ? [30, 17, 54] : [18, 9, 40];
  const t = low ? y + (tip - y) * 0.6 : tip;
  return (
    <>
      <path d={`M${-w} ${y}C${-w / 2} ${y + 14} ${w / 2} ${y + 14} ${w} ${y}Q${w * 0.55} ${t - 8} 3 ${t}Q${-w * 0.6} ${t - 10} ${-w} ${y}Z`} style={{ fill: "var(--seal)" }} />
      <B d={`${w - 3} ${y + 4} ${w + 6} ${y + 6} ${w + 9} ${y + 12} ${w + 8} ${y + 20}`} w={5} c="var(--seal)" o={1} />
      <Dot x={0} y={t - (t - y) * 0.32} r={2.2} c={LIGHT} o={0.9} />
    </>
  );
};

export const Head = ({ who, x, y, a = 0, low, ...face }: Face & { who: Who; x: number; y: number; a?: number; low?: boolean }) => {
  const festive = useContext(Festive);
  return (
    <g transform={`translate(${x} ${y}) rotate(${a})`}>
      {festive && <Scarf who={who} low={low} />}
      {who === "finn" ? (
        <g transform="scale(0.8 0.88)">
          <FinnHead {...face} />
        </g>
      ) : (
        <FleurHead {...face} />
      )}
    </g>
  );
};

const Floor = ({ x = 20, len = 160, y = 183 }) => (
  <B d={`${x} ${y} ${x + len * 0.3} ${y + 4} ${x + len * 0.7} ${y - 2} ${x + len} ${y + 1}`} w={3} o={0.28} />
);

function FinnSit({ face }: { face?: Face }) {
  return (
    <>
      <Floor x={36} len={140} />
      {/* Schultern breit, Taille schmal, kräftige Hinterhand */}
      <Shape d="M82 82C78 94 66 98 66 114C66 128 76 132 74 142C58 148 54 168 66 178C80 184 120 184 134 178C146 168 142 148 126 142C124 132 134 128 134 114C134 98 122 94 118 82Z" o={FUR} />
      <path d="M88 92C90 108 95 118 100 124C105 118 110 108 112 92Z" style={{ fill: LIGHT }} />
      <B d="83 84 78 96 62 98 66 118 68 128 74 132 75 142" w={6} />
      <B d="117 84 122 96 138 98 134 118 132 128 126 132 125 142" w={6} />
      {/* Oberschenkel */}
      <B d="76 140 56 142 48 172 68 179" w={6} />
      <B d="124 140 144 142 152 172 132 179" w={6} />
      <Strokes w={5} d={["68 108 74 109 79 113 82 119", "70 122 75 123 79 127 81 132", "58 156 65 155 69 159 72 165", "132 108 126 109 121 113 118 119", "130 122 125 123 121 127 119 132", "142 156 135 155 131 159 128 165"]} />
      <Strokes w={3.4} c={DARK} d={["92 101 96 105 104 105 108 101", "94 111 97 114 103 114 106 111"]} />
      {/* gerade, stämmige Vorderbeine */}
      <Strokes w={4.5} d={["81 122 81 142 79 160 77 172", "119 122 119 142 121 160 123 172", "100 132 99 148 99 160 99 174"]} />
      <Paw x={65} y={180} r={8} />
      <Paw x={135} y={180} r={8} />
      <Paw x={87} y={180} r={12} />
      <Paw x={113} y={180} r={12} />
      <Tail d="M140 168C168 174 170 188 138 187C118 186 100 190 82 186" tip="M90 187L82 186" w={11} />
      <Head who="finn" x={100} y={64} {...face} />
    </>
  );
}

function FleurSit({ tilt = false, puzzled = false, face }: { tilt?: boolean; puzzled?: boolean; face?: Face }) {
  return (
    <>
      <Floor x={48} len={116} />
      <Tail d="M118 173C150 184 168 166 160 146C154 130 164 118 174 120" tip="M170 119L174 120" w={8} />
      <Shape d="M89 112C87 128 74 140 74 160C72 182 96 180 100 178C106 182 130 182 128 160C128 140 113 128 111 112Z" o={FUR} />
      <path d="M93 118C94 132 96 140 100 146C104 140 106 132 107 118Z" style={{ fill: LIGHT }} />
      <B d="89 112 90 130 68 142 76 170" w={4.5} />
      <B d="111 112 110 130 134 142 126 171" w={4.5} />
      <Strokes w={4.2} d={["79 146 86 146 89 150 91 156", "76 158 83 158 87 163 88 169", "123 146 116 146 112 150 110 156", "126 158 119 158 115 163 114 169"]} />
      <Strokes w={2.4} c={DARK} d={["93 124 97 128 103 128 107 124"]} />
      <Strokes w={3} d={["92 144 92 156 92 166 91 174", "108 144 108 156 108 166 109 174", "100 150 100 160 100 168 100 175"]} />
      <Paw x={91} y={180} r={8.5} />
      {tilt ? (
        <>
          {/* eine Pfote nachdenklich angehoben */}
          <Limb d="M108 148C122 154 132 148 130 134" x={130} y={134} w={9} />
          <Paw x={130} y={135} r={8} />
        </>
      ) : (
        <Paw x={110} y={180} r={8.5} />
      )}
      <Head who="fleur" x={tilt ? 95 : puzzled ? 106 : 100} y={tilt || puzzled ? 92 : 90} a={tilt ? -22 : puzzled ? 24 : 0} {...(puzzled ? { eyes: "wide", mouth: "o" } : face)} />
      {puzzled && <Strokes w={3} o={0.6} d={["62 62 56 58 52 54 48 48", "58 80 52 80 46 79 40 76", "76 46 74 40 72 36 68 30"]} />}
    </>
  );
}

function FinnDoze({ stir }: { stir?: boolean }) {
  return (
    <>
      <Floor x={14} len={176} />
      {/* lang ausgestreckt: Schulter, Taille, Hinterhand */}
      <Shape d="M60 172C56 134 76 112 98 112C112 112 118 124 130 124C140 122 148 112 160 114C182 120 188 150 178 174C150 184 90 184 60 172Z" o={FUR} />
      <B d="72 126 92 100 112 118 130 124" w={6} />
      <B d="128 124 144 118 152 108 168 118 184 130 186 154 177 174" w={6} />
      <B d="178 176 150 182 120 181 92 180" w={4} />
      <B d="168 138 142 134 130 158 148 176" w={4.5} />
      <Strokes w={5.5} d={["100 114 103 122 102 130 97 137", "117 121 119 130 117 139 111 146", "154 114 156 121 154 127 149 132", "172 124 172 132 169 139 163 143"]} />
      <Tail d="M178 166C190 186 156 186 122 182" tip="M131 183L122 182" w={11} />
      <Head who="finn" x={66} y={147} a={stir ? -12 : -6} eyes="closed" mouth={stir ? "yawn" : "smile"} low />
      <Paw x={46} y={182} r={11} />
      <Paw x={82} y={183} r={11} />
    </>
  );
}

function FleurDoze({ stir }: { stir?: boolean }) {
  return (
    <>
      <Floor x={36} len={134} />
      {/* eingerollt */}
      <Shape d="M62 166C56 138 86 122 114 126C142 128 158 150 150 168C136 186 76 186 62 166Z" o={FUR} />
      <B d="76 144 92 114 156 122 152 166" w={5} />
      <B d="152 164 140 180 114 182 92 180" w={3} />
      <Strokes w={4.2} d={["104 127 108 136 106 144 100 150", "122 129 128 138 127 148 121 155", "139 139 146 146 146 156 140 164"]} />
      <Head who="fleur" x={80} y={160} a={-14} eyes={stir ? "wink" : "closed"} low />
      {/* gespitztes Ohr */}
      {stir && <Strokes w={2.6} o={0.7} d={["106 118 110 114 113 111 118 109", "109 128 114 126 118 125 123 126"]} />}
      <Tail d="M148 164C156 188 112 188 74 182C62 180 56 176 54 170" tip="M57 175L54 170" w={8} />
    </>
  );
}

function Peek({ who }: { who: Who }) {
  const finn = who === "finn";
  return (
    <>
      {finn && (
        <>
          <Shape d="M56 144C58 124 74 112 100 112C126 112 142 124 144 144Z" o={FUR} />
          <B d="55 144 58 124 68 116 82 113" w={5.5} />
          <B d="145 144 142 124 132 116 118 113" w={5.5} />
          <Strokes w={4.5} d={["60 128 66 128 70 131 73 136", "140 128 134 128 130 131 127 136"]} />
        </>
      )}
      <Head who={who} x={100} y={finn ? 114 : 119} a={finn ? 0 : 7} low />
      <Shape d="M10 144H190V164H10Z" />
      <B d="12 144 60 140 140 148 190 143" w={6} />
      <B d="30 156 70 154 110 160 150 156" w={2} o={0.35} />
      {(finn ? [64, 136] : [80, 120]).map((x) => (
        <Paw key={x} x={x} y={finn ? 153 : 151} r={finn ? 12 : 9} />
      ))}
    </>
  );
}

function FinnAngle() {
  return (
    <>
      <Tail d="M168 108C194 100 192 68 176 62C166 58 160 64 162 72" tip="M161 66L162 72" w={11} />
      {/* geduckt auf der Kante: Schulter hoch, Taille eingezogen, Hinterhand rund */}
      <Shape d="M66 126C62 94 84 80 108 82C124 84 128 96 140 94C150 90 156 82 166 86C182 94 184 112 174 126Z" o={FUR} />
      <B d="82 90 104 72 120 94 140 94" w={6} />
      <B d="138 94 150 88 158 78 170 90 180 100 182 112 174 125" w={6} />
      <B d="164 102 142 100 134 114 142 125" w={4} />
      <Strokes w={5.5} d={["108 82 111 91 109 99 103 105", "126 91 128 99 126 107 120 113", "159 85 161 92 159 99 153 104"]} />
      <B d="12 128 70 124 130 132 192 126" w={6} />
      <Paw x={132} y={128} r={11} />
      {/* der lange Angelarm über die Kante */}
      <path d="M74 112C50 114 42 138 41 160" style={{ fill: "none", stroke: PAPER, strokeWidth: 16, strokeLinecap: "round" }} />
      <path d="M74 112C50 114 42 138 41 160" style={{ fill: "none", stroke: INK, strokeWidth: 16, strokeLinecap: "round", opacity: FUR }} />
      <B d="76 102 46 100 31 128 32 159" w={5} />
      <B d="78 122 58 126 49 142 50 160" w={3.6} />
      <Strokes w={4} d={["36 130 41 130 45 133 48 137", "33 146 39 145 43 147 47 152"]} />
      <g transform="rotate(180 41 164)">
        <Paw x={41} y={171} r={11} />
      </g>
      <Head who="finn" x={90} y={100} a={-12} low />
    </>
  );
}

function FleurJump() {
  return (
    <>
      <Floor x={44} len={120} y={188} />
      <Tail d="M142 122C168 128 188 108 180 84C176 72 182 62 190 64" tip="M186 62L190 64" w={8} />
      {/* hintere Beine zuerst, der Körper deckt die Ansätze */}
      <Limb d="M84 108C70 128 58 142 42 146" x={42} y={146} w={9} />
      <Limb d="M124 124C128 148 118 158 134 174" x={134} y={174} w={9} />
      <Limb d="M70 100C54 112 42 126 24 126" x={24} y={126} />
      <Limb d="M140 124C162 140 146 154 164 166" x={164} y={166} />
      {/* gestreckter Körper im Sprung */}
      <Shape d="M62 82C82 78 100 94 122 100C148 106 158 122 146 134C132 144 112 128 96 124C78 120 60 106 62 82Z" o={FUR} />
      <B d="70 80 100 82 152 96 150 128" w={5} />
      <B d="66 102 80 130 110 116 132 134" w={3.4} />
      <Strokes w={4} d={["96 91 98 98 96 104 91 109", "112 98 115 106 113 113 108 118", "129 103 134 110 133 118 128 124"]} />
      <Strokes w={2.6} d={["143 118 137 124 134 132 137 140", "20 123 23 124 24 126 23 130", "160 163 163 165 165 168 164 171"]} />
      <Strokes w={2} o={0.35} d={["150 180 158 176 168 178 180 172", "112 170 116 174 116 180 112 185"]} />
      <Head who="fleur" x={56} y={74} a={-14} />
    </>
  );
}

/** Morgen-Strecken: Brust am Boden, Vorderbeine weit voraus, Hinterteil hoch. */
function Stretch({ who }: { who: Who }) {
  const finn = who === "finn";
  const w = finn ? 14 : 9;
  const top = finn ? 98 : 104;
  return (
    <>
      <Floor x={14} len={176} />
      <Tail d={`M158 ${top + 8}C184 ${top - 4} 186 70 170 54C164 46 170 36 182 40`} tip="M175 38L182 40" w={finn ? 11 : 8} />
      {/* hintere Beine, aufrecht */}
      <Limb d={`M136 ${top + 28}C130 150 140 160 132 178`} x={132} y={178} w={w - 1} />
      <Limb d={`M154 ${top + 22}C166 146 150 162 156 180`} x={156} y={180} w={w} />
      <Shape
        d={
          finn
            ? "M62 128C86 128 112 126 130 106C146 90 176 96 172 122C170 142 148 146 130 140C112 144 104 172 78 174C56 172 52 140 62 128Z"
            : "M64 134C88 138 114 128 132 108C146 96 170 102 166 122C164 138 144 138 130 130C112 138 100 170 80 170C62 168 54 144 64 134Z"
        }
        o={FUR}
      />
      <B d={finn ? "76 122 108 134 128 80 158 98" : "80 134 110 136 126 96 152 103"} w={finn ? 6 : 4.5} />
      <B d={finn ? "150 98 178 104 178 138 152 144" : "146 103 170 108 170 132 150 136"} w={finn ? 6 : 4.5} />
      <B d={finn ? "134 142 116 142 108 168 88 174" : "134 132 116 136 108 164 90 170"} w={finn ? 4.5 : 3.4} />
      <Strokes w={finn ? 5.5 : 4} d={[`112 ${top + 24} 116 ${top + 32} 116 ${top + 40} 111 ${top + 48}`, `128 ${top + 10} 134 ${top + 17} 135 ${top + 25} 131 ${top + 33}`, `146 ${top + 1} 152 ${top + 8} 153 ${top + 16} 150 ${top + 23}`]} />
      <Limb d="M88 162C70 168 54 178 34 178" x={34} y={178} w={w - 1} />
      <Head who={who} x={finn ? 66 : 68} y={finn ? 130 : 134} a={-10} eyes="closed" low />
      <Limb d="M80 174C60 178 40 184 18 183" x={18} y={183} w={w} />
      <Paw x={34} y={183} r={w * 0.55} />
      <Paw x={19} y={189} r={w * 0.65} />
    </>
  );
}

/** Finn breit und zufrieden mitten auf dem Rezeptblatt. */
function FinnOnPaper() {
  return (
    <>
      <Shape d="M12 150L170 138L196 188L30 198Z" o={0.04} />
      <Strokes w={2.6} d={["12 150 60 145 120 142 170 138", "170 138 180 156 188 172 196 188", "196 188 140 190 80 196 30 198", "30 198 24 182 18 166 12 150"]} />
      <Strokes w={2} o={0.4} d={["126 188 140 186 158 187 176 183", "52 192 66 189 84 191 100 188", "22 158 28 156 34 157 40 154"]} />
      <Shape d="M52 168C48 132 76 108 104 112C120 114 128 122 142 118C170 112 188 140 178 168C150 182 84 182 52 168Z" o={FUR} />
      <B d="76 120 100 102 120 122 140 119" w={6} />
      <B d="138 119 166 108 192 142 178 169" w={6} />
      <B d="178 168 146 182 100 182 56 170" w={5} />
      <B d="166 136 138 130 128 154 148 172" w={4.5} />
      <Strokes w={5.5} d={["106 113 109 121 108 129 103 136", "124 119 126 128 124 137 118 144", "152 114 154 121 152 127 147 132", "172 124 172 132 169 139 163 143"]} />
      <Tail d="M176 158C196 172 178 184 140 180" tip="M149 181L140 180" w={11} />
      <Head who="finn" x={70} y={112} a={5} eyes="happy" low />
      <Limb d="M70 154C60 164 52 172 40 175" x={40} y={175} w={13} />
      <Limb d="M96 158C94 168 88 176 78 180" x={78} y={180} w={13} />
      <Paw x={40} y={181} r={8.5} />
      <Paw x={78} y={186} r={8.5} />
    </>
  );
}

/** Katze als SVG-Gruppe im Feld 200 x 200 (Boden bei y=182, Kante beim Spähen/Angeln bei y=144/128).
 *  Beide teilen den Maßstab; Finn ist etwa 15 % größer und kräftiger gebaut. */
export function CatFigure({ who, pose, festive = false, stir, face }: CatProps & { festive?: boolean; stir?: boolean; face?: Face }) {
  const art = () => {
    if (pose === "peek") return <Peek who={who} />;
    if (pose === "stretch") return <Stretch who={who} />;
    if (who === "finn") {
      if (pose === "doze") return <FinnDoze stir={stir} />;
      if (pose === "onpaper") return <FinnOnPaper />;
      return pose === "angle" ? <FinnAngle /> : <FinnSit face={face} />;
    }
    if (pose === "doze") return <FleurDoze stir={stir} />;
    return pose === "jump" ? <FleurJump /> : <FleurSit tilt={pose === "tilt"} puzzled={pose === "puzzled"} face={face} />;
  };
  return <Festive.Provider value={festive}>{art()}</Festive.Provider>;
}

const NAME = { finn: "Finn", fleur: "Fleur" };

export function Cat({ className, ...cat }: CatProps & { className?: string; festive?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 200 200" role="img" aria-label={NAME[cat.who]} style={{ display: "block", width: "100%", height: "auto" }}>
      <CatFigure {...cat} />
    </svg>
  );
}

export function CatPair({ className, festive, mood = "sit" }: { className?: string; festive?: boolean; mood?: "sit" | "stretch" }) {
  const stretch = mood === "stretch";
  return (
    <svg className={className} viewBox="0 0 360 200" role="img" aria-label="Finn und Fleur" style={{ display: "block", width: "100%", height: "auto" }}>
      <g transform={`translate(${stretch ? -6 : 28} 0)`}>
        <CatFigure who="finn" pose={mood} festive={festive} />
      </g>
      <g transform={`translate(${stretch ? 170 : 142} 0)`}>
        <CatFigure who="fleur" pose={stretch ? "stretch" : "tilt"} festive={festive} />
      </g>
    </svg>
  );
}

/** Beide schlafen aneinandergekuschelt, für die Fußzeile. stir: Fleur blinzelt, Finn gähnt. */
export function CatsAsleep({ className, stir, festive }: { className?: string; stir?: boolean; festive?: boolean }) {
  return (
    <svg className={className} viewBox="6 92 284 108" role="img" aria-label="Finn und Fleur schlafen" style={{ display: "block", width: "100%", height: "auto" }}>
      <CatFigure who="finn" pose="doze" stir={stir} festive={festive} />
      <g transform="translate(116 0)">
        <CatFigure who="fleur" pose="doze" stir={stir} festive={festive} />
      </g>
    </svg>
  );
}

/** Roter Lampion */
export function Lantern({ className }: { className?: string }) {
  const red = "var(--seal)";
  return (
    <svg className={className} viewBox="0 0 100 160" aria-hidden="true" style={{ display: "block", width: "100%", height: "auto" }}>
      <B d="50 2 48 12 52 20 50 30" w={2.6} />
      <path d="M50 34C76 32 92 50 92 70C92 92 74 108 50 108C26 108 8 92 8 70C8 50 24 32 50 34Z" style={{ fill: red, opacity: 0.86 }} />
      <B d="40 35 14 48 14 94 40 107" w={2.6} />
      <B d="60 35 86 48 86 94 60 107" w={2.6} />
      <B d="50 35 46 58 46 86 50 107" w={1.8} o={0.6} />
      <B d="12 52 4 66 6 84 22 98" w={4} />
      <B d="32 31 44 27 58 28 70 32" w={9} />
      <B d="33 109 44 113 58 113 69 108" w={9} />
      <B d="50 113 52 118 48 122 50 127" w={2.4} />
      <Dot x={50} y={129} r={4.5} c={red} o={1} />
      {[-7, -2, 3, 8].map((x) => (
        <B key={x} d={`${50 + x * 0.4} 131 ${50 + x} 139 ${49 + x} 148 ${50 + x * 1.5} 156`} w={3} c={red} o={0.9} />
      ))}
    </svg>
  );
}

/** Pfotenabdruck als roter Stempel */
export function PawPrint({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" style={{ display: "block", width: "100%", height: "auto" }}>
      <g style={{ fill: "var(--seal)", opacity: 0.9 }}>
        <path d="M20 19C26 18.5 28 24 32 28C35 33 31 37.5 26 35.5C22 34 19 34 15 35.8C9.5 37.5 5.5 33 8.5 28C12 24.5 14 19.5 20 19Z" />
        <ellipse cx="7" cy="18.5" rx="3.8" ry="5" transform="rotate(-28 7 18.5)" />
        <ellipse cx="15" cy="9" rx="4.1" ry="5.6" transform="rotate(-8 15 9)" />
        <ellipse cx="26" cy="9.3" rx="4" ry="5.5" transform="rotate(10 26 9.3)" />
        <ellipse cx="33.6" cy="19" rx="3.6" ry="4.8" transform="rotate(30 33.6 19)" />
      </g>
    </svg>
  );
}
