module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['global.d.ts'],
    },
  ],
  parserOptions: {
    parser: '@typescript-eslint-parser',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    // eslint-disable-next-line no-dupe-keys
    project: true,
    // eslint-disable-next-line no-dupe-keys
    ecmaVersion: 'latest',
    // eslint-disable-next-line no-dupe-keys
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    'config/**',
    'webpack.config.ts',
    '.fttemplates',
    'justify',
    'align',
    'direction',
    'gap',
    'border',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'i18next',
    'react-hooks',
    'fsd-stable',
  ],
  rules: {
    // 'indent': [2, 2],
    // 'react/jsx-indent': [2, 2],
    // 'react/jsx-indent-props': [
    //   2,
    //   { indentMode: 2, ignoreTernaryOperator: true },
    // ],
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react-require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'import/extensions': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-tag-spacing': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'to',
          'target',
          'justify',
          'align',
          'direction',
          'gap',
          'role',
          'as',
          'border',
        ],
      },
    ],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'react/display-name': 0,
    '@typescript-eslint/no-dynamic-delete': 'warn',
    'multiline-ternary': ['error', 'never'],
    '@typescript-eslint/consistent-type-assertions': 'off',
    'fsd-stable/public-api-imports-only': [
      'error',
      {
        alias: '@',
      },
    ],
    // eslint-disable-next-line no-dupe-keys
    'multiline-ternary': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // отключили проверку переводов для тестовых файлов
  // eslint-disable-next-line no-dupe-keys
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
}
