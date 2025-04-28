import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set the base path for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/DJ-ASLAN/',  // Adjust base path for deployment on GitHub Pages
  build: {
    outDir: 'dist', // Ensure the output folder for build is 'dist' (default)
  },
  server: {
    open: true, // Automatically open the browser when the server starts
  },
});
