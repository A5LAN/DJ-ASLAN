import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],  // React plugin
  base: '/DJ-ASLAN/',  // Set the base path to match your GitHub repository name
  build: {
    outDir: 'dist',  // Output directory for the build (default is 'dist')
    emptyOutDir: true,  // Clean the output directory before building
    rollupOptions: {
      input: './public/index.html',  // Explicitly set the entry HTML file
    },
  },
  publicDir: 'public',  // Ensure Vite uses the 'public' folder for static assets
});
