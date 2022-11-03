/** @type {import('prettier').Config} */
module.exports = {
  tabWidth: 2,
  printWidth: 100,
  endOfLine: 'auto',
  singleQuote: true,
  arrowParens: 'avoid',
  bracketSameLine: false,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    { files: ['*.json'], options: { parser: 'json' } },
    {
      // graphql
      files: ['*.gql', '*.graphql'],
      options: {
        parser: 'graphql',
      },
    },
  ],
};
