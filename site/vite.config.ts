import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { mdApiPlugin } from './vite-plugin-md-api'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contentRoot = path.resolve(__dirname, '..')
const base = process.env.VITE_BASE ?? '/'

// GitHub Pages project site: https://truongdinh018.github.io/awesome/
// Local / preview default: '/'
export default defineConfig({
  plugins: [
    react(),
    mdApiPlugin(contentRoot),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'icons/favicon-16x16.png',
        'icons/favicon-32x32.png',
        'icons/apple-touch-icon.png',
        'icons/icon.svg',
        'sql-wasm.wasm',
        'sql-wasm-browser.wasm',
      ],
      manifest: {
        name: 'Awesome AI',
        short_name: 'Awesome AI',
        description:
          'Catalog công nghệ AI — repo đã star, bài tiếng Việt, tìm kiếm ngữ nghĩa',
        lang: 'vi',
        dir: 'ltr',
        display: 'standalone',
        orientation: 'any',
        theme_color: '#0f7668',
        background_color: '#070a0f',
        categories: ['education', 'productivity', 'utilities'],
        // Relative to webmanifest (plugin resolves with vite.base)
        icons: [
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icons/maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icons/icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        // files.json + search.sqlite can exceed Workbox default 2 MiB
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webp,woff2,wasm,json,sqlite,webmanifest}',
        ],
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/^\/api\//],
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            // Google Fonts CSS
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: { maxEntries: 8, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            // Google Fonts files
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 24, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Xenova / HuggingFace model assets for semantic search
            urlPattern:
              /^https:\/\/(cdn\.jsdelivr\.net|huggingface\.co)\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'ai-model-assets',
              expiration: { maxEntries: 64, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  base,
  server: {
    host: '0.0.0.0',
    port: 5177,
    strictPort: true,
  },
  optimizeDeps: {
    exclude: ['@xenova/transformers'],
  },
  assetsInclude: ['**/*.wasm'],
})
