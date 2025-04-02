import { existsSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import { confirm, input } from "@inquirer/prompts";

const cwd = process.cwd();

export async function chooseFilename() {
	const filename = await input({
		message: "Choose a filename for the config",
		default: "tsconfig.json",
	});

	const fullFilename = join(cwd, filename);

	if (
		existsSync(fullFilename) &&
		!(await confirm({
			message: `${filename} already exists. Do you wish to overwrite it?`,
			default: false,
		}))
	) {
		process.exit(1);
	}

	return filename;
}
