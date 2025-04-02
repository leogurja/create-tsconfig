import { select } from "@inquirer/prompts";
import { bundlerOptions } from "./bundler.js";
import { domOptions, noDomOptions } from "./dom.js";
import { type CompilerOptions, JsxEmit } from "./types/compilerOptions.js";

export const reactOptions: CompilerOptions = {
	...bundlerOptions,
	...domOptions,
	jsx: JsxEmit.ReactJSX,
};

export const reactNativeOprions: CompilerOptions = {
	...bundlerOptions,
	...noDomOptions,
	types: ["react-native"],
	jsx: JsxEmit.ReactNative,
};

export const svelteOptions: CompilerOptions = {
	...bundlerOptions,
	sourceMap: true,
};

export const nextOptions: CompilerOptions = {
	...bundlerOptions,
	...domOptions,
	incremental: true,
	jsx: JsxEmit.Preserve,
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
