import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    env: {
      PORT: '3007'
    }
  },
  plugins: [tsconfigPaths()]
})
