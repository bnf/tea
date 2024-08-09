import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 2024,
      globals: {
        ...globals,
        TYPO3: "readonly"
      },
    },
    ignores: [
      "node_modules"
    ]
  }
]
