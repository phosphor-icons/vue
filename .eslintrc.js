module.exports = {
  env: {
    node: true,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    withDefaults: "readonly",
  },
  plugins: ["@typescript-eslint", "prettier", "unused-imports"],
  extends: ["eslint:recommended", "prettier"],

  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
    },
  ],

  rules: {
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "no-undef": ["off"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
      },
    ],
    camelcase: [
      "error",
      {
        properties: "never",
        ignoreDestructuring: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
};
