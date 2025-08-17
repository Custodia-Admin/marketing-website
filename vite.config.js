import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/marketing-website/',
  server: {
    host: '0.0.0.0',
    port: 12000,
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
