import type { CompilerOptions as InternalCompilerOptions } from "typescript";

export type ModuleKind =
	| "none"
	| "commonjs"
	| "amd"
	| "umd"
	| "system"
	| "es2015"
	| "es2020"
	| "es2022"
	| "esnext"
	| "node16"
	| "nodenext"
	| "preserve";

export type JsxEmit =
	| "preserve"
	| "react"
	| "react-native"
	| "react-jsx"
	| "react-jsx-dev";

export type ScriptTarget =
	| "es3"
	| "es5"
	| "es2015"
	| "es2016"
	| "es2017"
	| "es2018"
	| "es2019"
	| "es2020"
	| "es2021"
	| "es2022"
	| "es2023"
	| "es2024"
	| "esnext";

export type ModuleDetectionKind = "legacy" | "auto" | "force";

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
