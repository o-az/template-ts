import fs from 'node:fs/promises'
import { defineConfig } from 'tsup'

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

export default defineConfig({
  dts: true,
  // clean the output directory before building
  clean: true,
  // https://tsup.egoist.dev/#inject-cjs-and-esm-shims
  shims: true,
  // log build progress. Safe to disable
  silent: false,
  // if you plan to build the project then run it somewhere, minifying is a good idea
  minify: false,
  format: [
    'esm',
    /**
     * Note:
     *
     * If your codebase contains features such as top-level await,
     * you won't be able to generate a CommonJS build. In other words,
     * no `*.cjs.js` file will be generated.
     *
     * If your project is not intended to be published to npm, or used by other projects,
     * you can do the following:
     * 1. Set `format` to `['esm']` in `tsup.config.ts`,
     * 2. Remove `outExtension` and `onSuccess` from `tsup.config.ts` (last two items in this file),
     * 3. Replace lines 5-18 in `package.json` with: `"exports": "./dist/index.js"`,
     * 4. Replace `.mjs` from `"dev"` and `"start"` scripts in `package.json` with `.js`.
     *
     */
    'cjs',
  ],
  // you can have multiple entry files. See https://tsup.egoist.dev/#multiple-entrypoints
  entry: ['./src/index.ts'],
  sourcemap: IS_DEVELOPMENT,
  outExtension: ({ format }) => ({ js: `.${format === 'cjs' ? 'cjs' : 'mjs'}` }),
  onSuccess: async () => {
    const indexJS = `export * from './index.mjs'`
    await fs.writeFile('./dist/index.js', indexJS).catch(console.error)
  },
})
