import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set the base path for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/DJ-ASLAN/',  // Adjust base path for deployment on GitHub Pages
  build: {
    outDir: 'dist',  // Ensure the output folder for the build is 'dist' (default)
    emptyOutDir: true,  // Clean the dist folder before building
    rollupOptions: {
      input: './public/index.html',  // Explicitly set the entry HTML file
    },
  },
  publicDir: 'public',  // Ensure Vite uses the 'public' folder for static assets
  server: {
    open: true,  // Automatically open the browser when the server starts
  },
});
