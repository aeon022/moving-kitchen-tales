// src/plans/pantry.ts
// Must-haves der Vorratskammer. store = wo man es voraussichtlich bekommt.
export type PantryGroup = { jp: string; title: string; items: { name: string; store: string; use: string }[] };

export const PANTRY_GROUPS: PantryGroup[] = [
  { jp: "調味", title: "Saucen & Pasten", items: [
    { name: "Sojasauce natriumarm", store: "Interspar / Spar", use: "Schmorgerichte, Marinaden, Suppen" },
    { name: "Austernsauce", store: "Asia-Shop", use: "Gemüse, Wok" },
    { name: "Hoisin-Sauce", store: "Asia-Shop", use: "Char Siu, Marinaden" },
    { name: "Miso hell (pasteurisiert)", store: "Asia-Shop", use: "Misosuppe, Tonjiru, Marinaden" },
    { name: "Doenjang", store: "Asia-Shop", use: "Koreanische Bohnenpastensuppen" },
    { name: "Reisessig mild", store: "Lidl / Hofer", use: "Salate, Saucen" },
    { name: "Tomatenmark & passierte Tomaten", store: "Lidl / Hofer", use: "Tomatensuppe, Hacksauce" },
  ] },
  { jp: "油香", title: "Öle & Gewürze", items: [
    { name: "Sesamöl", store: "Lidl / Hofer", use: "Wochenbett-Klassiker, Abschmecken" },
    { name: "Rapsöl", store: "Lidl / Hofer", use: "Anbraten" },
    { name: "Sesam", store: "Lidl / Hofer", use: "Banchan, Snacks, Onigiri" },
    { name: "Salz & weißer Pfeffer", store: "Lidl / Hofer", use: "Alles" },
    { name: "Zucker oder Honig", store: "Lidl / Hofer", use: "kleine Mengen" },
    { name: "Zimt & Sternanis", store: "Interspar / Spar", use: "Schmorsud, sparsam" },
  ] },
  { jp: "乾貨", title: "Trockenvorrat", items: [
    { name: "Reis (Rundkorn/Sushi-Reis)", store: "Lidl / Hofer", use: "Beilage, Brei, Onigiri" },
    { name: "Rollgerste", store: "Interspar / Spar", use: "Reis-Alternative" },
    { name: "Haferflocken", store: "Lidl / Hofer", use: "Frühstück, Snacks" },
    { name: "Hirse", store: "Interspar / Spar", use: "Hirsebrei" },
    { name: "Soba, Udon, Weizennudeln", store: "Asia-Shop", use: "Nudelsuppen" },
    { name: "Glasnudeln", store: "Asia-Shop", use: "Suppen, Dämpfgerichte" },
    { name: "Katsuobushi (Bonitoflocken)", store: "Asia-Shop", use: "Dashi ohne Algen" },
    { name: "Shiitake getrocknet", store: "Asia-Shop", use: "Brühen, Schmorgerichte" },
    { name: "Rote Datteln", store: "Asia-Shop", use: "Brei, Suppen" },
    { name: "Miyeok-Algen", store: "Asia-Shop", use: "Miyeokguk, nur sparsam (Jod)" },
    { name: "Maisstärke & Mehl", store: "Lidl / Hofer", use: "Binden, Fladen" },
    { name: "Klebreismehl", store: "Asia-Shop", use: "Kürbisbrei, Taler" },
    { name: "Walnüsse & Datteln", store: "Lidl / Hofer", use: "Snacks" },
  ] },
  { jp: "鮮", title: "Kühlschrank & Frisches", items: [
    { name: "Eier", store: "Lidl / Hofer", use: "Frühstück, Oyakodon, Eierstich" },
    { name: "Tofu fest & Seidentofu", store: "Lidl / Hofer", use: "Suppen, schnelle Gerichte" },
    { name: "Ingwer", store: "Lidl / Hofer", use: "fast jedes Gericht" },
    { name: "Knoblauch", store: "Lidl / Hofer", use: "fast jedes Gericht" },
    { name: "Frühlingszwiebeln", store: "Lidl / Hofer", use: "Topping, Fladen" },
    { name: "Karotten & Zwiebeln", store: "Lidl / Hofer", use: "Basis für Suppen" },
    { name: "Pak Choi oder Spinat", store: "Lidl / Hofer", use: "Grün zu jeder Mahlzeit" },
    { name: "Joghurt & Sojamilch ungesüßt", store: "Lidl / Hofer", use: "Frühstück" },
  ] },
  { jp: "凍", title: "Gefrierfach", items: [
    { name: "Hühnerbrühe in 500-ml-Portionen", store: "Lidl / Hofer", use: "selbst gekocht, siehe Preppen" },
    { name: "Ingwer-Knoblauch-Würfel", store: "Lidl / Hofer", use: "selbst gemacht, siehe Preppen" },
    { name: "Hähnchenschenkel & Hack", store: "Lidl / Hofer", use: "portionsweise" },
    { name: "Lachs & Kabeljau TK", store: "Lidl / Hofer", use: "Brei, Suppen" },
    { name: "TK-Gemüse (Spinat, Erbsen, Brokkoli)", store: "Lidl / Hofer", use: "wenn es schnell gehen muss" },
    { name: "Wan-Tan-Blätter", store: "Asia-Shop", use: "Wonton-Suppe" },
  ] },
];
