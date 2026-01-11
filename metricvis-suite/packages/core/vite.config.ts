import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts' // We need to install this next

export default defineConfig({
  plugins: [
    vue(),
    dts({ insertTypesEntry: true }), // Auto-generate TypeScript definitions
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MetricVisCore',
      fileName: 'metricvis-core'
    },
    rollupOptions: {
      // Make sure to externalize Vue so we don't bundle it twice!
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})