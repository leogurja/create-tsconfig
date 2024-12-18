import {
  type CompilerOptions,
  ModuleDetectionKind,
  ScriptTarget,
} from "./types/compilerOptions.js";

export const baseOptions: CompilerOptions = {
  esModuleInterop: true, // show be used while cjs still exists (forever)
  skipLibCheck: true, // don't type check libs on node_modules
  target: ScriptTarget.ES2022, // the version of javascript you're targeting
  allowJs: true, // import .js files
  resolveJsonModule: true, // import .json files
  moduleDetection: ModuleDetectionKind.Force, // avoid 'cannot redeclare block-scoped variable' errors
  verbatimModuleSyntax: true, // isolatedModules: true is implied
  strict: true, // applies some nice rules
  // other nice rules for even more strictness
  noUncheckedIndexedAccess: true,
  noImplicitOverride: true,
  noImplicitReturns: true,
  noFallthroughCasesInSwitch: true,
  checkJs: true,
  allowUnreachableCode: false,
  exactOptionalPropertyTypes: true,
};
