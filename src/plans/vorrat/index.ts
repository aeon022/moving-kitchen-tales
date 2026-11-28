import { WAYS as lamm } from "./ways.lamm";
import { WAYS as gefluegel } from "./ways.gefluegel";
import { WAYS as rotfleisch } from "./ways.rotfleisch";
import { WAYS as leicht } from "./ways.leicht";
import { WAYS as japan } from "./ways.japan";

export const WAYS = [...lamm, ...gefluegel, ...rotfleisch, ...leicht, ...japan];
export * from "./cuts";
export * from "./types";
