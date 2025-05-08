import { select } from "@inquirer/prompts";
import { bundlerOptions } from "./bundler.js";
import { domOptions, noDomOptions } from "./dom.js";
import type { CompilerOptions } from "./types/compilerOptions.js";

export const reactOptions: CompilerOptions = {
  ...bundlerOptions,
  ...domOptions,
  jsx: "react-jsx",
};

export const reactNativeOprions: CompilerOptions = {
  ...bundlerOptions,
  ...noDomOptions,
  types: ["react-native"],
  jsx: "react-native",
};

export const svelteOptions: CompilerOptions = {
  ...bundlerOptions,
  sourceMap: true,
};

export const nextOptions: CompilerOptions = {
  ...bundlerOptions,
  ...domOptions,
  incremental: true,
  jsx: "preserve",
  plugins: [
    {
      name: "next",
    },
  ],
};

export async function chooseFramework() {
  const framework = await select({
    message: "Select a framework",
    choices: [
      {
        name: "React",
        value: reactOptions,
      },
      {
        name: "Next.js",
        value: nextOptions,
      },
      {
        name: "None",
        value: {},
      },
    ],
  });

  return framework;
}
