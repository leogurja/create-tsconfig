import { confirm } from "@inquirer/prompts";
import type { CompilerOptions } from "./types/compilerOptions.js";

export const domOptions: CompilerOptions = {
  lib: ["es2022", "dom", "dom.iterable"],
};

export const noDomOptions: CompilerOptions = {
  lib: ["es2022"],
};

export function isDomImplied(options: CompilerOptions) {
  return "lib" in options;
}

export async function chooseDom() {
  const runsOnBrowser = await confirm({
    message: "Does your code run on the browser?",
  });

  return runsOnBrowser ? domOptions : noDomOptions;
}
