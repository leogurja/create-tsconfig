import { confirm, input } from "@inquirer/prompts";
import { existsSync } from "node:fs";
import { join } from "node:path";

const cwd = process.cwd();

export async function chooseFilename() {
  const filename = await input({
    message: "Choose a filename for the config",
    default: "./tsconfig.json",
  });

  const fullFilename = join(cwd, filename);

  if (
    // existsSync is the only option for this case
    // eslint-disable-next-line n/no-sync
    existsSync(fullFilename) &&
    !(await confirm({
      message: `${filename} already exists. Do you wish to overwrite it?`,
      default: false,
    }))
  ) {
    console.log("Exiting...");
    // eslint-disable-next-line n/no-process-exit
    process.exit(1);
  }

  return filename;
}
