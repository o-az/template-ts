import { defineConfig } from 'tsdown'

export default defineConfig({
  sourcemap: true,
  treeshake: true,
  dts: true,
  clean: true,
  publint: true,
  outDir: 'dist',
  format: ['esm'],
  devtools: true,
  target: 'node22',
  platform: 'node',
  entry: ['./src/index.ts'],
  tsconfig: './tsconfig.json',
  attw: {
    enabled: true,
    profile: 'node16',
    ignoreRules: ['false-cjs', 'cjs-resolves-to-esm']
  }
})
