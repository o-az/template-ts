import { defineConfig } from 'tsup';

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

export default defineConfig({
  entry: ['src/index.ts'],
  shims: true,
  clean: true,
  minify: false,
  format: ['esm'],
  target: 'es2022',
  dts: IS_DEVELOPMENT,
  sourcemap: IS_DEVELOPMENT,
  tsconfig: 'tsconfig.json',
});
