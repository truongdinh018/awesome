import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mdApiPlugin } from './vite-plugin-md-api'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contentRoot = path.resolve(__dirname, '..')

// GitHub Pages project site: https://truongdinh018.github.io/awesome-ai/
// Local / preview default: '/'
export default defineConfig({
  plugins: [react(), mdApiPlugin(contentRoot)],
  base: process.env.VITE_BASE ?? '/',
  server: {
    port: 5177,
    strictPort: true,
  },
})
