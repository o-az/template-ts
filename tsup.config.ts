import { defineConfig } from 'tsup'

const { NODE_ENV = 'development' } = process.env

export default defineConfig({
  dts: true,
  // clean the output directory before building
  clean: true,
  // https://tsup.egoist.dev/#inject-cjs-and-esm-shims
  shims: true,
  // log build progress. Safe to disable
  silent: false,
  // if you plan to build the project then run it in a container, minifying is a good idea
  // minify: true,
  format: ['esm', 'cjs'],
  // you can have multiple entry files. See https://tsup.egoist.dev/#multiple-entrypoints
  entry: ['./src/index.ts'],
  onSuccess: async () => console.log(`\n\nBuild completed - [${NODE_ENV}] mode.\n\n`),
})
