import { WAYS as lamm } from "./ways.lamm";
import { WAYS as gefluegel } from "./ways.gefluegel";
import { WAYS as rotfleisch } from "./ways.rotfleisch";
import { WAYS as leicht } from "./ways.leicht";

export const WAYS = [...lamm, ...gefluegel, ...rotfleisch, ...leicht];
export * from "./cuts";
export * from "./types";
