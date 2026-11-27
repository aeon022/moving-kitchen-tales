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
export type CatPose<W extends Who = Who> = { finn: "sit" | "doze" | "peek" | "angle"; fleur: "sit" | "doze" | "peek" | "tilt" | "jump" }[W];
type CatProps = { [W in Who]: { who: W; pose: CatPose<W> } }[Who];

const FUR = 0.2;
const Strokes = ({ d, w = 4, o = 0.85, c = INK }: { d: string[]; w?: number; o?: number; c?: string }) => (
  <>{d.map((s) => <B key={s} d={s} w={w} o={o} c={c} />)}</>
);

/** Geringelter Schwanz: Papiermaske, Fellton, Ringe, dunkle Spitze. d = ein Pfad, tip = letztes Stück. */
const Tail = ({ d, tip, w }: { d: string; tip: string; w: number }) => (
  <g style={{ fill: "none", strokeLinecap: "round" }}>
    <path d={d} style={{ stroke: INK, strokeWidth: w + 3, opacity: 0.7 }} />
    <path d={d} style={{ stroke: PAPER, strokeWidth: w }} />
    <path d={d} style={{ stroke: INK, strokeWidth: w, opacity: FUR }} />
    <path d={d} style={{ stroke: INK, strokeWidth: w, strokeLinecap: "butt", strokeDasharray: "5 10", strokeDashoffset: -6, opacity: 0.72 }} />
    <path d={tip} style={{ stroke: INK, strokeWidth: w, opacity: 0.85 }} />
  </g>
);

/** Bein: Kontur, Fell, helle Pfote am Ende (x,y) */
const Limb = ({ d, x, y, w = 11 }: { d: string; x: number; y: number; w?: number }) => (
  <g style={{ fill: "none", strokeLinecap: "round" }}>
    <path d={d} style={{ stroke: INK, strokeWidth: w + 4.5, opacity: 0.85 }} />
    <path d={d} style={{ stroke: PAPER, strokeWidth: w }} />
    <path d={d} style={{ stroke: INK, strokeWidth: w, opacity: FUR }} />
    <path d={`M${x} ${y}h0.1`} style={{ stroke: LIGHT, strokeWidth: w }} />
  </g>
);

/** Pfote mit zwei Zehenstrichen, (x,y) = Unterkante Mitte */
const Paw = ({ x, y, r }: { x: number; y: number; r: number }) => (
  <>
    <path d={`M${x - r} ${y}C${x - r * 1.1} ${y - r * 1.25} ${x + r * 1.1} ${y - r * 1.25} ${x + r} ${y}Z`} style={{ fill: LIGHT }} />
    <B d={`${x - r} ${y} ${x - r * 1.2} ${y - r * 1.3} ${x + r * 1.2} ${y - r * 1.3} ${x + r} ${y}`} w={r * 0.28} />
    <B d={`${x - r} ${y} ${x - r * 0.3} ${y + 2} ${x + r * 0.3} ${y + 2} ${x + r} ${y - 1}`} w={r * 0.18} />
    {[-0.32, 0.32].map((k) => (
      <B key={k} d={`${x + k * r} ${y - r * 0.55} ${x + k * r} ${y - r * 0.35} ${x + k * r * 0.9} ${y - r * 0.2} ${x + k * r * 0.8} ${y}`} w={2} c={DARK} />
    ))}
  </>
);

/** Finn: breiter Schädel, kleine weit stehende Ohren, Wangenfell, Augen halb zu. */
function FinnHead({ closed = false }: { closed?: boolean }) {
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
        closed ? (
          <B key={x} d={`${x - 8} -1 ${x - 4} 4 ${x + 3} 4 ${x + 8} -1`} w={3} />
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
      {/* leicht schiefes Schmunzeln */}
      <Strokes w={2.2} c={DARK} d={["0 15 -1 21 -7 23 -12 19", "0 15 2 21 9 23 14 17"]} />
      <Strokes w={1.5} o={0.7} d={["-17 17 -30 15 -42 16 -56 21", "-16 21 -28 23 -38 27 -48 34", "17 17 30 15 42 16 56 21", "16 21 28 23 38 27 48 34"]} />
    </>
  );
}

/** Fleur: schmales Dreiecksgesicht, große Ohren, große wache Augen. */
function FleurHead({ closed = false }: { closed?: boolean }) {
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
        closed ? (
          <B key={x} d={`${x - 6} 0 ${x - 3} 4 ${x + 2} 4 ${x + 6} -1`} w={2.4} />
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
      <Strokes w={1.7} c={DARK} d={["0 12 -1 16 -4 18 -7 15", "0 12 1 16 4 18 7 15"]} />
      <Strokes w={1.3} o={0.7} d={["-11 12 -22 9 -32 8 -44 10", "-11 15 -20 17 -29 20 -38 26", "11 12 22 9 32 8 44 10", "11 15 20 17 29 20 38 26"]} />
    </>
  );
}

const Head = ({ who, x, y, a = 0, closed }: { who: Who; x: number; y: number; a?: number; closed?: boolean }) => (
  <g transform={`translate(${x} ${y}) rotate(${a})`}>{who === "finn" ? <FinnHead closed={closed} /> : <FleurHead closed={closed} />}</g>
);

const Floor = ({ x = 20, len = 160, y = 183 }) => (
  <B d={`${x} ${y} ${x + len * 0.3} ${y + 4} ${x + len * 0.7} ${y - 2} ${x + len} ${y + 1}`} w={3} o={0.28} />
);

function FinnSit() {
  return (
    <>
      <Floor x={14} len={176} />
      <Shape d="M70 88C44 104 28 142 38 166C46 184 154 184 162 166C172 142 156 104 130 88Z" o={FUR} />
      <path d="M80 100C84 122 92 134 100 138C108 134 116 122 120 100Z" style={{ fill: LIGHT }} />
      <B d="70 90 40 104 20 160 48 176" w={7} />
      <B d="130 90 160 104 180 158 154 176" w={7} />
      <Strokes w={7} d={["42 126 52 126 60 132 66 142", "36 146 48 146 55 152 60 162", "158 126 148 126 140 132 134 142", "164 146 152 146 145 152 140 162"]} />
      <Strokes w={4} c={DARK} d={["86 108 92 114 108 114 114 108", "90 121 95 126 105 126 110 121"]} />
      {/* stämmige Vorderbeine */}
      <Strokes w={5} d={["70 126 70 142 68 156 66 168", "99 140 98 152 99 160 99 170", "130 126 130 142 132 156 134 168"]} />
      <Paw x={82} y={178} r={17} />
      <Paw x={118} y={178} r={17} />
      <Tail d="M154 164C184 178 168 186 128 185C104 184 84 188 62 183" tip="M70 185L62 183" w={15} />
      <Head who="finn" x={100} y={66} />
    </>
  );
}

function FleurSit({ tilt = false }) {
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
      <Head who="fleur" x={tilt ? 95 : 100} y={tilt ? 92 : 90} a={tilt ? -22 : 0} />
    </>
  );
}

function FinnDoze() {
  return (
    <>
      <Floor x={12} len={180} />
      {/* Brotlaib */}
      <Shape d="M42 170C36 118 82 96 120 100C166 102 192 138 182 170C170 186 58 186 42 170Z" o={FUR} />
      <B d="62 118 84 90 168 88 184 150" w={7} />
      <B d="183 146 194 178 140 182 96 180" w={5} />
      <Strokes w={7} d={["108 101 110 112 108 122 102 130", "132 102 138 114 138 128 132 138", "156 112 164 122 166 138 160 150"]} />
      <Tail d="M178 164C190 186 150 186 116 181" tip="M125 182L116 181" w={15} />
      <Head who="finn" x={70} y={140} a={-6} closed />
      <Paw x={52} y={182} r={13} />
      <Paw x={90} y={183} r={13} />
    </>
  );
}

function FleurDoze() {
  return (
    <>
      <Floor x={36} len={134} />
      {/* eingerollt */}
      <Shape d="M62 166C56 138 86 122 114 126C142 128 158 150 150 168C136 186 76 186 62 166Z" o={FUR} />
      <B d="76 144 92 114 156 122 152 166" w={5} />
      <B d="152 164 140 180 114 182 92 180" w={3} />
      <Strokes w={4.2} d={["104 127 108 136 106 144 100 150", "122 129 128 138 127 148 121 155", "139 139 146 146 146 156 140 164"]} />
      <Head who="fleur" x={80} y={160} a={-14} closed />
      <Tail d="M148 164C156 188 112 188 74 182C62 180 56 176 54 170" tip="M57 175L54 170" w={8} />
    </>
  );
}

function Peek({ who }: { who: Who }) {
  const finn = who === "finn";
  return (
    <>
      <Head who={who} x={100} y={finn ? 112 : 119} a={finn ? 0 : 7} />
      <Shape d="M10 144H190V164H10Z" />
      <B d="12 144 60 140 140 148 190 143" w={6} />
      <B d="30 156 70 154 110 160 150 156" w={2} o={0.35} />
      {(finn ? [56, 144] : [80, 120]).map((x) => (
        <Paw key={x} x={x} y={finn ? 155 : 151} r={finn ? 16 : 9} />
      ))}
    </>
  );
}

function FinnAngle() {
  return (
    <>
      <Tail d="M166 106C194 100 192 66 176 60C166 56 160 62 162 70" tip="M161 64L162 70" w={14} />
      {/* flach auf der Kante */}
      <Shape d="M60 126C58 86 96 74 128 80C168 82 184 106 178 126Z" o={FUR} />
      <B d="92 86 126 68 186 82 178 124" w={7} />
      <Strokes w={7} d={["118 80 120 92 117 100 111 108", "140 83 146 94 145 106 139 114", "160 92 168 102 169 112 164 120"]} />
      <B d="12 128 70 124 130 132 192 126" w={6} />
      <Paw x={142} y={128} r={13} />
      {/* der lange Angelarm über die Kante */}
      <path d="M72 112C48 116 42 138 40 158" style={{ fill: "none", stroke: PAPER, strokeWidth: 21, strokeLinecap: "round" }} />
      <path d="M72 112C48 116 42 138 40 158" style={{ fill: "none", stroke: INK, strokeWidth: 21, strokeLinecap: "round", opacity: FUR }} />
      <B d="74 100 40 100 30 128 29 158" w={5} />
      <B d="76 124 58 128 52 142 51 160" w={4} />
      <Strokes w={4.5} d={["34 130 40 130 45 133 49 138", "30 146 37 145 43 147 49 152"]} />
      <g transform="rotate(180 40 164)">
        <Paw x={40} y={172} r={13} />
      </g>
      <Head who="finn" x={92} y={92} a={-12} />
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

/** Katze als SVG-Gruppe im Feld 200 x 200 (Boden bei y=182, Kante beim Spähen/Angeln bei y=144/128).
 *  Beide teilen den Maßstab, Finn ist also von selbst der Größere. */
export function CatFigure({ who, pose }: CatProps) {
  if (pose === "peek") return <Peek who={who} />;
  if (who === "finn") return pose === "doze" ? <FinnDoze /> : pose === "angle" ? <FinnAngle /> : <FinnSit />;
  return pose === "doze" ? <FleurDoze /> : pose === "jump" ? <FleurJump /> : <FleurSit tilt={pose === "tilt"} />;
}

const NAME = { finn: "Finn", fleur: "Fleur" };

export function Cat({ className, ...cat }: CatProps & { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" role="img" aria-label={NAME[cat.who]} style={{ display: "block", width: "100%", height: "auto" }}>
      <CatFigure {...cat} />
    </svg>
  );
}

export function CatPair({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 360 200" role="img" aria-label="Finn und Fleur" style={{ display: "block", width: "100%", height: "auto" }}>
      <CatFigure who="finn" pose="sit" />
      <g transform="translate(158 0)">
        <CatFigure who="fleur" pose="tilt" />
      </g>
    </svg>
  );
}
