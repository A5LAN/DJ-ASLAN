import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],  // React plugin
  base: '/DJ-ASLAN/',  // Set the base path to match your GitHub repository name
  build: {
<<<<<<< HEAD
    outDir: 'dist',  // Ensure the output folder for the build is 'dist' (default)
    emptyOutDir: true,  // Clean the dist folder before building
=======
    outDir: 'dist',  // Output directory for the build (default is 'dist')
    emptyOutDir: true,  // Clean the output directory before building
    rollupOptions: {
      input: './public/index.html',  // Explicitly set the entry HTML file
    },
>>>>>>> b36cc1679faca4f005ccf17a8ecbe2646e12755a
  },
  publicDir: 'public',  // Ensure Vite uses the 'public' folder for static assets
});
