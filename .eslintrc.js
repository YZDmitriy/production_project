module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [
    {
      files: ["global.d.ts"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  parserOptions: {
    parser: "@typescript-eslint-parser",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: [2, 2],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [
      2,
      { indentMode: 2, ignoreTernaryOperator: true },
    ],
    "react/jsx-filename-extension": [
      2,
      { extensions: ["js", "jsx", "ts", "tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react-require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "no-undef": "warn",
    "import/extensions": "off",
    "object-curly-spacing": ["warn", "always"],
    "react/jsx-curly-brace-presence": "off",
    "react/jsx-tag-spacing": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "no-underscore-dangle": "off"
  },
  globals: {
    __IS_DEV__: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
