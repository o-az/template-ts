/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  printWidth: 120,
  endOfLine: 'auto',
  singleQuote: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    { files: ['*.json'], options: { parser: 'json' } },
  ],
}
