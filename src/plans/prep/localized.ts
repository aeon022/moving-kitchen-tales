import { PREP_RECIPES, PrepRecipe } from "./preppen";
import { PREP_ZH1 } from "./preppen.zh1";
import { PREP_ZH2 } from "./preppen.zh2";

const ZH: Record<string, Partial<PrepRecipe>> = { ...PREP_ZH1, ...PREP_ZH2 };

export const localizedRecipes = (lang: "de" | "zh"): PrepRecipe[] =>
  lang === "zh" ? PREP_RECIPES.map((r) => ({ ...r, ...ZH[r.id] })) : PREP_RECIPES;

export const localizedPrep = (id: string, lang: "de" | "zh") => localizedRecipes(lang).find((r) => r.id === id)!;
