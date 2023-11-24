import { defineConfig } from 'tsup'

/**
 * @see https://tsup.egoist.dev/#usage
 */

export default defineConfig({
  dts: true,
  bundle: true,
  sourcemap: true,
  treeshake: 'recommended',
  outDir: 'dist',
  // clean the output directory before building
  clean: true,
  // https://tsup.egoist.dev/#inject-cjs-and-esm-shims
  shims: true,
  // log build progress. Disabling in dev so that terminal is less noisy
  silent: process.env.NODE_ENV === 'development',
  // if you plan to build the project then run it in a container, minifying is a good idea
  // minify: true,
  format: process.env.NODE_ENV === 'development' ? ['esm'] : ['esm', 'cjs'],
  // you can have multiple entry files. See https://tsup.egoist.dev/#multiple-entrypoints
  entry: ['./src/index.ts']

  /**
   * Depending on your target environment (node/browser/neutral), you may need to set the target and platform option.
   * @see https://tsup.egoist.dev/#target-environment
   */
  // target: 'node20',
  // platform: 'node'
})
