import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      /**
       * Note how it's not identical to tsconfig.json paths.
       * The below is equivalent to: `"#*": ["./src/*"]` in tsconfig.json
       */
      '~': './src'
    }
  },
  test: {
    threads: false
  }
})
