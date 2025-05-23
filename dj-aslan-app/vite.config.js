import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,  // Automatically open browser
    port: 5174,  // Ensure port is the same as you're trying to access
    strictPort: true,  // Prevent Vite from picking another port if 5174 is in use
  },
  base: process.env.NODE_ENV === 'production' ? '/DJ-ASLAN/' : '/', // Set to your repository name
  build: {
    outDir: 'dist', // Output folder after build
  },
})
