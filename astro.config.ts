// astro.config.ts
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: process.env.CI
    ? 'https://astro-shadcn-ui-template.vercel.app'
    : 'http://localhost:4321',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  vite: {
    build: {
      chunkSizeWarningLimit: 1000, // opcional: subir el límite
      rollupOptions: {
        output: {
          manualChunks: {
            timezone: ['moment', 'moment-timezone'],
          },
        },
      },
    },
  },
})
