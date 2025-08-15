import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false, // wir nutzen public/manifest.webmanifest
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}']
      },
      includeAssets: [
        'icons/drk-sprechfunk-icon-192.png',
        'icons/drk-sprechfunk-icon-512.png'
      ]
    })
  ]
})
