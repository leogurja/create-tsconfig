import type { CompilerOptions as InternalCompilerOptions } from "typescript";

export enum ModuleKind {
  None = "none",
  CommonJS = "commonjs",
  AMD = "amd",
  UMD = "umd",
  System = "system",
  ES2015 = "es2015",
  ES2020 = "es2020",
  ES2022 = "es2022",
  ESNext = "esnext",
  Node16 = "node16",
  NodeNext = "nodenext",
  Preserve = "preserve",
}

export enum JsxEmit {
  Preserve = "preserve",
  React = "react",
  ReactNative = "react-native",
  ReactJSX = "react-jsx",
  ReactJSXDev = "react-jsx-dev",
}

export enum ScriptTarget {
  /** @deprecated */
  ES3 = "es3",
  ES5 = "es5",
  ES2015 = "es2015",
  ES2016 = "es2016",
  ES2017 = "es2017",
  ES2018 = "es2018",
  ES2019 = "es2019",
  ES2020 = "es2020",
  ES2021 = "es2021",
  ES2022 = "es2022",
  ES2023 = "es2023",
  ES2024 = "es2024",
  ESNext = "esnext",
}

export enum ModuleDetectionKind {
  /**
   * Files with imports, exports and/or import.meta are considered modules
   */
  Legacy = "legacy",
  /**
   * Legacy, but also files with jsx under react-jsx or react-jsxdev and esm mode files under moduleResolution: node16+
   */
  Auto = "auto",
  /**
   * Consider all non-declaration files modules, regardless of present syntax
   */
  Force = "force",
}

export interface CompilerOptions
  extends Omit<
    InternalCompilerOptions,
    "module" | "jsx" | "target" | "moduleDetection"
  > {
  module?: ModuleKind;
  jsx?: JsxEmit;
  target?: ScriptTarget;
  moduleDetection?: ModuleDetectionKind;
}
