import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false, // wir verwenden public/manifest.webmanifest
      workbox: {
        // diese Zeile sorgt normalerweise für Precache-Dateien
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
        // Fallback für SPA-Routen
        navigateFallback: '/index.html',
        // >>> WICHTIG: Mindestens eine Runtime-Caching-Regel, damit Workbox nicht meckert
        runtimeCaching: [
          {
            // Bilder aus dem Netz/app cachen
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 }
            }
          }
        ]
      },
      includeAssets: [
        'icons/blitz-123.png',
        'icons/blitz-123.png',
        'icons/blitz-123.png'
      ]
    })
  ]
})
