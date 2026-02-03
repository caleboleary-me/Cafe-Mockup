import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use '/' for custom domains so assets load from the root
  base: '/', 
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // It is safer to keep sourcemaps off for production
    sourcemap: false,
    minify: 'esbuild',
  },
  server: {
    port: 3000
  }
});
