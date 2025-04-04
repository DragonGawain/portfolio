import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

// /** @type {import("eslint").Linter.Config} */
// const config = {
//     parser: "@typescript-eslint/parser",
//     parserOptions: {
//         project: true,
//     },
//     plugins: ["@typescript-eslint"],
//     extends: [
//         "next/core-web-vitals",
//         "plugin:@typescript-eslint/recommended-type-checked",
//         "plugin:@typescript-eslint/stylistic-type-checked",
//     ],
//     rules: {
//         // These opinionated rules are enabled in stylistic-type-checked above.
//         // Feel free to reconfigure them to your own preference.
//         "@typescript-eslint/array-type": "off",
//         "@typescript-eslint/consistent-type-definitions": "off",
//         "@typescript-eslint/no-unsafe-assignment": "off",
//         "@typescript-eslint/prefer-nullish-coalescing": "off",
//         "@typescript-eslint/consistent-type-imports": [
//             "warn",
//             {
//                 prefer: "type-imports",
//                 fixStyle: "inline-type-imports",
//             },
//         ],
//         "@typescript-eslint/no-misused-promises": "off",
//         // "@typescript-eslint/prefer-nullish-coalescing": "error",
//         "@typescript-eslint/no-unused-vars": [
//             "warn",
//             { argsIgnorePattern: "^_" },
//         ],
//     },
// };

// module.exports = config;
