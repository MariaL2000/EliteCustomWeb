import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/Elite-custom/',
  build: {
    chunkSizeWarningLimit: 1000,
  },
  server: {
    https: {
      key: fs.readFileSync(
        path.resolve(__dirname, '../main_project/certificates/key.pem')
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, '../main_project/certificates/cert.pem')
      ),
    },
    host: true,
    proxy: {
      '/api': {
        target: 'https://localhost:8001',
        changeOrigin: true,
        secure: false, // Ignora errores de certificado en desarrollo
        rewrite: path => path.replace(/^\/api/, '/api'), // Keep the /api prefix
      },
      '/media': {
        target: 'https://localhost:8001',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/media/, '/media'),
      },
    },
  },
});
