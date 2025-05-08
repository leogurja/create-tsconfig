import { confirm } from "@inquirer/prompts";
import type { CompilerOptions } from "./types/compilerOptions.js";

export const libraryOptions: CompilerOptions = {
  declaration: true,
};

export const monorepoLibraryOptions: CompilerOptions = {
  ...libraryOptions,
  composite: true,
  sourceMap: true,
  declarationMap: true,
};

export async function chooseLibrary() {
  const isLibrary = await confirm({
    message: "Is it a library?",
    default: false,
  });

  if (isLibrary) {
    const isMonorepo = await confirm({
      message: "Is this library being used inside a monorepo?",
      default: false,
    });

    return isMonorepo ? monorepoLibraryOptions : libraryOptions;
  }

  return {};
}
