// Familienrezepte und Reisetagebuch. Nur echte Einträge von euch eintragen.
// Foto: Datei nach public/sammlung/ legen und hier den Dateinamen angeben.
export type Memory = {
  id: string;
  title: { de: string; zh: string };
  /** Wer kocht es so? bzw. Ort der Reise */
  from: { de: string; zh: string };
  story: { de: string; zh: string };
  photo?: string;
  /** Daheim nachgekocht: Pfad zum Rezept, z. B. "/plan/woche-48-2026-11-23#meal-mo-a" */
  recipe?: string;
};

export const FAMILY_RECIPES: Memory[] = [];
export const TRAVEL_DIARY: Memory[] = [];
