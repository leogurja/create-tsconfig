import { config, configs } from "@gurgelio/eslint-config";
import { join } from "node:path";

export default config(
  configs.node,
  configs.typeChecked.node(join(import.meta.dirname, "tsconfig.json")),
);
