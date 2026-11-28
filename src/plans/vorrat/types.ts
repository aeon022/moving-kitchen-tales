// Vorrat-Generator: feste Verarbeitungswege je Rohware. Mengen gelten für 500 g Rohware.
export type Group = "lamm" | "pute" | "haehnchen" | "ente" | "schwein" | "rind" | "fisch" | "pflanzlich";
export type Origin = "china" | "japan" | "korea" | "suedostasien" | "indien" | "orient" | "mittelmeer" | "heimisch";
/** marinade = roh mariniert einfrieren · gegart = fertig kochen · basis = Vorstufe für viele Gerichte */
export type Art = "marinade" | "gegart" | "basis";
export type Unit = "g" | "ml" | "EL" | "TL" | "Stk" | "Zehe" | "Prise";

export type Text = { title: string; steps: string[]; freeze: string; reheat: string };

export type Way = {
  id: string;
  /** IDs aus cuts.ts, für die dieser Weg taugt. */
  cuts: string[];
  origin: Origin;
  art: Art;
  /** Haltbarkeit im Gefrierfach. */
  months: 1 | 2 | 3;
  /** Zutaten außer der Rohware: [deutsch, chinesisch, Menge je 500 g Rohware, Einheit] */
  ingredients: [string, string, number, Unit][];
  de: Text;
  zh: Text;
};
