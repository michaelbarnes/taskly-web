import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vite.dev/config/
export default defineConfig({
  root: '.',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  envDir: '.',
  optimizeDeps: {
    // Don't optimize these packages as they contain web workers and WASM files.
    // https://github.com/vitejs/vite/issues/1 1672#issuecomment-1415820673
    exclude: ['@journeyapps/wa-sqlite', '@powersync/web'],
    include: ['@powersync/web > js-logger']
  },
  plugins: [react(), wasm(), topLevelAwait()],
  worker: {
    format: 'es',
    plugins: () => [react(), wasm(), topLevelAwait()]
  }
})
