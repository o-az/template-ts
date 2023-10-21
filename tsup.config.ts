import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  // clean the output directory before building
  clean: true,
  // https://tsup.egoist.dev/#inject-cjs-and-esm-shims
  shims: true,
  // log build progress. Safe to disable
  silent: process.env.NODE_ENV === 'development',
  // if you plan to build the project then run it in a container, minifying is a good idea
  // minify: true,
  format: process.env.NODE_ENV === 'development' ? ['esm'] : ['esm', 'cjs'],
  // you can have multiple entry files. See https://tsup.egoist.dev/#multiple-entrypoints
  entry: ['./src/index.ts'],
})
