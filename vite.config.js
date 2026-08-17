import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/bills-game-board/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false,
      includeAssets: [
        'icons/icon-192.png',
        'icons/icon-512.png',
        'mascots/host-bill.png',
        'mascots/puzzle-bill.png',
        'mascots/sudoku-bill.png',
        'mascots/detective-bill.png',
        'mascots/big-brain-bill.png'
      ],
      workbox: {
        navigateFallback: 'index.html',
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: true
      }
    })
  ]
}))
