/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:unicorn/all'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'unicorn/prefer-top-level-await': ['off'],
    'unicorn/prefer-event-target': ['off'],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          ProcessEnv: true,
        },
        checkFilenames: false,
      },
    ],
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true,
        fileInfoOptions: {
          withNodeModules: true,
        },
      },
    ],
    '@typescript-eslint/ban-ts-comment': ['off'],
    'no-mixed-operators': ['off'],
    'no-multiple-empty-lines': ['off'],
    'no-unexpected-multiline': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    'no-duplicate-imports': ['warn', { includeExports: true }],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false,
      },
    ],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },

          '{}': {
            message: 'Use object instead',
            fixWith: 'object',
          },
        },
      },
    ],
  },
}
