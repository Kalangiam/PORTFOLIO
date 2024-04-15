import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    sourceMap: false, // disable source map generation for CSS
  },
  optimizeDeps: {
    // other optimizeDeps options
    sourcemap: false, // disable source map generation for JavaScript dependencies
  },
})
