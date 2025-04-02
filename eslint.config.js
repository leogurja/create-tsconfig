// @ts-check
import { config, configs } from "@gurja/eslint-config";
import { join } from "node:path";

export default config(
  configs.node,
  {
    files: ["src"],
    ...configs.typeChecked.node(join(import.meta.dirname, "tsconfig.json")),
  },
  {
    rules: {
      "n/hashbang": "off",
      "n/no-unsupported-features/node-builtins": [
        "error",
        {
          version: ">=23.0.0",
          ignores: [],
        },
      ],
    },
  },
);
