import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss'; 

export default defineConfig({
  optimizeDeps: {
    include: ['swiper']
  },
  plugins: [
    WindiCSS(), 
    react()
  ],
  server: {
    host: '0.0.0.0',
  },
});
