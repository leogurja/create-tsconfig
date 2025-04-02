import { select } from "@inquirer/prompts";
import { domOptions } from "./dom.js";
import {
	type CompilerOptions,
	JsxEmit,
	ModuleKind,
} from "./types/compilerOptions.js";

export const tscOptions: CompilerOptions = {
	module: ModuleKind.ESNext, // moduleResolution: "NodeNext" is implied
	outDir: "dist",
};

export const bundlerOptions: CompilerOptions = {
	module: ModuleKind.Preserve, // moduleResolution: "bundler" is implied
	noEmit: true,
};

export const bunOptions: CompilerOptions = {
	...bundlerOptions,
	jsx: JsxEmit.ReactJSX,
	types: ["bun-types"],
};

export const viteOptions: CompilerOptions = {
	...bundlerOptions,
	...domOptions, // implied to run on browser
	allowImportingTsExtensions: true,
};

export function isBundlerImplied(options: CompilerOptions) {
	return "module" in options;
}

export async function chooseBundler() {
	const bundler = await select({
		message: "Which of these are you using to compile your TypeScript?",
		choices: [
			{
				value: tscOptions,
				name: "tsc",
			},
			{
				value: bunOptions,
				name: "bun",
			},
			{
				value: viteOptions,
				name: "vite",
			},
			{
				value: bundlerOptions,
				name: "other",
			},
		],
	});

	return bundler;
}
