import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: true,
  bundleDts: true,
  sourcemap: true,
  treeshake: true,
  outDir: 'dist',
  // clean the output directory before building
  clean: true,
  // https://tsdown.egoist.dev/#inject-cjs-and-esm-shims
  shims: true,
  // log build progress. Disabling in dev so that terminal is less noisy
  silent: process.env.NODE_ENV === 'development',
  // if you plan to build the project then run it in a container, minifying is a good idea
  // minify: true,
  format: ['esm'],
  // you can have multiple entry files. See https://tsdown.egoist.dev/#multiple-entrypoints
  entry: ['./src/index.ts'],
  /**
   * Depending on your target environment (node/browser/neutral), you may need to set the target and platform option.
   * @see https://tsdown.egoist.dev/#target-environment
   */
  target: 'node22',
  platform: 'node'
})
