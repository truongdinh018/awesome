import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mdApiPlugin } from './vite-plugin-md-api'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contentRoot = path.resolve(__dirname, '..')

export default defineConfig({
  plugins: [react(), mdApiPlugin(contentRoot)],
  server: {
    port: 5177,
    strictPort: true,
  },
})
