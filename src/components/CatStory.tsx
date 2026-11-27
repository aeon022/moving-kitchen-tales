// Sechs Bildergeschichten-Szenen mit Finn und Fleur (320 x 200, Boden bei y=184).
import type { ReactNode } from "react";
import { B, CatFigure, Dot, Head, Limb, Paw, Shape, Strokes, Tail, W } from "./Cats";

const INK = "var(--text)";
const BLUE = "var(--accent)";
const RED = "var(--seal)";

/** Setzt eine Katze (200er-Feld) mit Mitte x auf den Boden y. */
const At = ({ x, y = 184, s = 0.62, flip, children }: { x: number; y?: number; s?: number; flip?: boolean; children: ReactNode }) => (
  <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s}) translate(-100 -182)`}>{children}</g>
);

const circle = (x: number, y: number, r: number) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;

/** Locker gezogenes Rechteck */
const Box = ({ x, y, w, h, o = 0.06, c = INK, s = 4 }: { x: number; y: number; w: number; h: number; o?: number; c?: string; s?: number }) => (
  <>
    <Shape d={`M${x} ${y}h${w}v${h}h${-w}Z`} o={o} c={c} />
    <B d={`${x - 2} ${y} ${x + w * 0.3} ${y - 1.5} ${x + w * 0.7} ${y + 1} ${x + w + 1} ${y}`} w={s} />
    <B d={`${x + w} ${y - 1} ${x + w + 1.5} ${y + h * 0.3} ${x + w - 1} ${y + h * 0.7} ${x + w} ${y + h + 1}`} w={s} />
    <B d={`${x + w + 1} ${y + h} ${x + w * 0.7} ${y + h + 1.5} ${x + w * 0.3} ${y + h - 1} ${x - 1} ${y + h}`} w={s} />
    <B d={`${x} ${y + h + 1} ${x - 1.5} ${y + h * 0.7} ${x + 1} ${y + h * 0.3} ${x} ${y - 1}`} w={s} />
  </>
);

const Ground = () => <B d="14 186 100 190 220 182 308 186" w={3} o={0.28} />;

const SCENES: Record<1 | 2 | 3 | 4 | 5 | 6, () => ReactNode> = {
  // Morgen: Fenster mit Sonne, beide strecken sich
  1: () => (
    <>
      <Box x={112} y={8} w={96} h={68} o={0.07} c={BLUE} />
      <path d={circle(184, 28, 13)} style={{ fill: RED, opacity: 0.82 }} />
      <W d="M113 62C134 42 152 56 164 64C180 48 196 50 207 58V75H113Z" o={0.14} />
      <B d="160 9 159 30 161 52 160 75" w={2.6} />
      <B d="113 43 140 42 180 44 207 43" w={2.6} />
      <B d="100 80 130 82 190 78 222 80" w={6} />
      <Ground />
      <At x={84} s={0.62}>
        <CatFigure who="finn" pose="stretch" />
      </At>
      <At x={238} s={0.62} flip>
        <CatFigure who="fleur" pose="stretch" />
      </At>
    </>
  ),
  // Fleur grübelt vor dem Kühlschrank, Pfote am Griff
  2: () => (
    <>
      <Box x={166} y={14} w={86} h={168} s={5} />
      <B d="167 76 192 78 226 74 251 76" w={3.4} />
      <B d="177 34 176 44 178 52 177 62" w={5} />
      <B d="176 118 175 132 178 144 176 160" w={7} />
      <Box x={212} y={96} w={22} h={26} o={0.03} s={1.8} />
      <Dot x={223} y={96} r={3} c={BLUE} />
      <Strokes w={1.8} o={0.45} d={["216 106 220 105 225 107 230 105", "216 113 220 112 224 114 227 112"]} />
      <Ground />
      <At x={152} s={0.76}>
        <CatFigure who="fleur" pose="tilt" />
      </At>
      {/* Denkpunkte */}
      {[[112, 78, 3], [100, 64, 4.5], [82, 46, 7]].map(([x, y, r]) => (
        <Dot key={x} x={x} y={y} r={r} o={0.28} />
      ))}
    </>
  ),
  // Finn zieht die Tür auf, Fleur schaut zu
  3: () => (
    <>
      <Box x={92} y={14} w={72} h={168} s={5} o={0.03} />
      <W d="M96 18H160V178H96Z" c={BLUE} o={0.14} />
      {[62, 106, 148].map((y) => (
        <B key={y} d={`96 ${y} 118 ${y + 1} 140 ${y - 1} 161 ${y}`} w={3} />
      ))}
      {/* Vorräte: Flasche, Glas, Schälchen, Rüben */}
      <Box x={106} y={32} w={13} h={28} s={2.2} o={0.16} />
      <B d="112 31 112 28 113 26 112 23" w={6} />
      <Box x={134} y={42} w={19} h={18} s={2.2} o={0.1} />
      <Shape d="M104 90C106 108 134 108 136 90Z" o={0.2} />
      <Strokes w={2.6} d={["103 90 112 85 128 85 137 90", "104 90 106 109 134 109 136 90"]} />
      <Dot x={150} y={96} r={8} c={BLUE} o={0.5} />
      <Strokes w={4} d={["112 140 124 134 140 134 152 140", "116 128 128 122 138 124 146 130"]} />
      {/* offene Tür */}
      <Shape d="M164 14L196 30V196L164 182Z" o={0.1} />
      <Strokes w={5} d={["163 14 174 19 186 25 197 30", "196 29 197 80 195 140 196 197", "196 196 186 192 174 187 163 182"]} />
      <B d="188 98 189 108 187 118 188 130" w={6} />
      <Ground />
      <At x={46} s={0.6}>
        <CatFigure who="fleur" pose="sit" />
      </At>
      <At x={242} s={0.74}>
        <FinnPull />
      </At>
      <Strokes w={2.6} o={0.5} d={["268 70 274 68 280 68 288 70", "274 86 280 85 286 86 292 89", "174 6 186 4 200 8 210 16"]} />
    </>
  ),
  // Finn angelt heimlich nach dem Fisch
  4: () => (
    <>
      {/* Finn duckt sich hinter der Tischkante */}
      <Shape d="M32 134C34 100 56 84 82 84C110 84 128 104 130 134Z" o={0.2} />
      <Strokes w={5.5} d={["31 134 33 108 46 96 62 90", "130 134 128 112 118 98 104 91", "38 112 44 112 48 115 51 120"]} />
      <Tail d="M36 128C14 120 12 92 26 80C32 74 30 66 22 66" tip="M27 68L22 66" w={11} />
      <Head who="finn" x={80} y={98} a={8} low />
      {/* Tisch */}
      <Shape d="M16 134H306V148H16Z" o={0.14} />
      <B d="14 134 90 131 220 137 308 133" w={6} />
      <B d="18 148 100 150 220 146 304 149" w={3} />
      <Strokes w={7} d={["42 150 40 162 43 174 40 190", "280 150 283 162 279 174 282 190"]} />
      <Paw x={54} y={137} r={11} />
      {/* Teller mit Fisch */}
      <Shape d="M174 126C180 142 280 142 288 126C276 114 186 114 174 126Z" />
      <Strokes w={3.6} d={["174 126 182 142 280 142 288 126", "174 126 188 114 274 114 288 125"]} />
      <W d="M200 122C216 102 250 104 264 120C250 134 214 136 200 122Z" c={BLUE} o={0.28} />
      <Strokes w={4.5} d={["196 122 212 100 250 100 266 120", "198 123 216 136 250 136 265 122"]} />
      <Strokes w={3.6} d={["264 120 272 114 278 106 288 104", "264 122 272 126 278 132 288 134", "288 105 281 114 281 124 287 133", "216 109 224 116 224 124 216 130"]} />
      <Dot x={208} y={118} r={2.6} />
      {/* der lange Arm über den Tisch */}
      <Limb d="M108 122C128 108 154 106 180 122" x={180} y={122} w={14} />
      <Paw x={182} y={129} r={9} />
      <Strokes w={2.2} o={0.45} d={["150 94 156 92 162 92 168 95", "156 84 160 82 164 82 168 83"]} />
    </>
  ),
  // Der Topf pfeift, beide erschrecken
  5: () => (
    <>
      {/* Herd */}
      <Box x={122} y={136} w={76} h={46} o={0.1} />
      <Dot x={140} y={152} r={3.5} />
      <Dot x={180} y={152} r={3.5} />
      <Shape d="M130 98C128 128 138 134 160 134C182 134 192 128 190 98Z" o={0.3} />
      <Strokes w={6} d={["130 98 126 128 140 135 160 135", "190 98 194 128 180 135 158 135", "130 104 118 100 116 112 129 114", "190 104 202 100 204 112 191 114"]} />
      {/* hüpfender Deckel */}
      <g transform="rotate(-10 160 82)">
        <Shape d="M128 86C134 68 186 68 192 86Z" o={0.18} />
        <Strokes w={5} d={["127 86 134 66 186 66 193 86", "127 86 146 91 174 91 193 86"]} />
        <Dot x={160} y={68} r={6} />
      </g>
      {/* Dampf und Pfiff */}
      <Strokes w={5} o={0.35} d={["140 66 122 52 146 40 130 20", "164 58 150 40 178 32 164 8", "182 66 204 54 182 40 200 24"]} />
      <Strokes w={3} o={0.8} d={["116 82 108 78 102 76 92 76", "118 66 112 60 106 56 98 52", "204 82 212 78 218 76 228 76", "202 66 208 60 214 56 222 52"]} />
      <Ground />
      <At x={60} y={176} s={0.58}>
        <CatFigure who="finn" pose="sit" face={{ eyes: "wide", mouth: "o" }} />
      </At>
      <Strokes w={2.6} o={0.5} d={["36 184 38 180 38 179 40 176", "60 186 60 182 60 180 60 177", "86 184 84 180 83 179 81 176"]} />
      <At x={262} y={158} s={0.56} flip>
        <CatFigure who="fleur" pose="jump" />
      </At>
    </>
  ),
  // Abend: Mond, beide schlafen
  6: () => (
    <>
      <W d="M20 22C70 6 150 16 210 10C260 6 308 22 304 56C312 90 292 122 250 116C190 106 130 132 80 118C40 126 8 104 16 74C8 52 10 32 20 22Z" c={BLUE} o={0.1} />
      {/* Mondsichel */}
      <path d="M256 22C228 20 214 46 224 62C234 78 262 76 272 60C252 68 236 56 238 42C240 32 246 26 256 22Z" style={{ fill: INK, opacity: 0.78 }} />
      {[[52, 32], [92, 60], [140, 24], [184, 54], [286, 84], [32, 78]].map(([x, y]) => (
        <Strokes key={x} w={2.4} o={0.7} d={[`${x - 5} ${y} ${x - 2} ${y} ${x + 2} ${y} ${x + 5} ${y}`, `${x} ${y - 5} ${x} ${y - 2} ${x} ${y + 2} ${x} ${y + 5}`]} />
      ))}
      {/* Kissen */}
      <Shape d="M36 178C60 164 260 164 286 178C270 198 56 198 36 178Z" c={BLUE} o={0.22} />
      <Strokes w={4} d={["36 178 62 198 260 198 286 178", "36 178 50 170 66 168 80 169", "286 178 274 170 262 168 250 169"]} />
      <g transform="translate(40 31) scale(0.82)">
        <CatFigure who="finn" pose="doze" />
        <g transform="translate(116 0)">
          <CatFigure who="fleur" pose="doze" />
        </g>
      </g>
    </>
  ),
};

/** Finn stemmt sich nach hinten, beide Vorderpfoten am Türgriff (links bei x=30, y=104). */
function FinnPull() {
  return (
    <>
      <Tail d="M150 168C178 176 196 150 184 128C178 116 186 106 194 108" tip="M189 106L194 108" w={11} />
      <Limb d="M96 112C74 126 54 118 34 122" x={34} y={122} w={12} />
      <Shape d="M82 90C106 78 130 96 134 120C160 130 166 164 148 176C128 186 108 174 106 156C92 142 74 118 82 90Z" o={0.2} />
      <Strokes w={6} d={["98 86 124 88 132 106 135 122", "132 120 162 126 174 166 142 178", "82 100 80 124 92 144 108 156"]} />
      <B d="140 140 114 136 104 156 114 170" w={4.5} />
      <Strokes w={5.5} d={["120 96 115 101 112 107 112 114", "132 114 126 117 122 123 121 129", "158 142 150 143 145 147 143 153"]} />
      {/* gegen den Boden gestemmt */}
      <Limb d="M124 164C102 166 90 172 70 180" x={70} y={180} w={13} />
      <Limb d="M92 100C70 100 52 96 32 102" x={32} y={102} w={13} />
      <Head who="finn" x={102} y={68} a={14} eyes="closed" />
    </>
  );
}

export function StoryScene({ n, label }: { n: 1 | 2 | 3 | 4 | 5 | 6; label: string }) {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label={label} style={{ display: "block", width: "100%", height: "auto" }}>
      <rect width="320" height="200" style={{ fill: "var(--panel)" }} />
      {SCENES[n]()}
    </svg>
  );
}
