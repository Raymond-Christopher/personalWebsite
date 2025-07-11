import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 80,
    allowedHosts: ['www.chrisraymond.dev'],
    ...(mode === 'development' && {
      proxy: {
        '/api': {
          target: 'http://backend:3001',
          changeOrigin: true,
        },
      },
    }),
  },
}));
