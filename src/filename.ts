import { confirm, input } from "@inquirer/prompts";
import { existsSync } from "node:fs";
import { join } from "node:path";

const cwd = process.cwd();

export async function chooseFilename() {
  const filename = await input({
    message: "Choose a filename for the config",
    default: "tsconfig.json",
  });

  // eslint-disable-next-line n/no-sync
  const fileExists = existsSync(join(cwd, filename));

  if (
    !fileExists ||
    (await confirm({
      message: `${filename} already exists. Do you wish to overwrite it?`,
      default: false,
    }))
  )
    return filename;

  return;
}
