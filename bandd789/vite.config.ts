import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // FIX: __dirname is not available in ES modules. Using import.meta.url to get the path.
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "."),
    },
  },
})
