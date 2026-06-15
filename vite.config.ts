import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' → relative asset paths so the built site works on any host
// (Firebase Hosting at root, or GitHub Pages under /lexify-web) without rebuilds.
export default defineConfig({
  plugins: [react()],
  base: './',
})
