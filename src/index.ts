import { writeFile } from "node:fs/promises";
import { baseOptions } from "./base.js";
import { chooseBundler, isBundlerImplied } from "./bundler.js";
import { chooseDom, isDomImplied } from "./dom.js";
import { chooseFilename } from "./filename.js";
import { chooseFramework } from "./framework.js";
import { chooseLibrary } from "./library.js";

void main();

async function main() {
  const tsconfig = await buildTsconfig();
  const filename = await chooseFilename();

  const json = JSON.stringify(tsconfig, null, 2);

  await writeFile(filename, json, { flag: "w" });
}

async function buildTsconfig() {
  let compilerOptions = baseOptions;

  compilerOptions = { ...compilerOptions, ...(await chooseFramework()) };

  if (!isBundlerImplied(compilerOptions)) {
    compilerOptions = { ...compilerOptions, ...(await chooseBundler()) };
  }

  if (!isDomImplied(compilerOptions)) {
    compilerOptions = { ...compilerOptions, ...(await chooseDom()) };
  }

  compilerOptions = { ...compilerOptions, ...(await chooseLibrary()) };

  return {
    $schema: "https://json.schemastore.org/tsconfig",
    compilerOptions,
  };
}
