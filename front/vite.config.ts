import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3006,
    allowedHosts: ['estoque-monami-lb-1077406287.us-east-1.elb.amazonaws.com','estoque.usemonami.com'], 
      proxy: {
      '/api': {
        target: 'http://estoque.usemonami.com:3000', // URL do backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove o prefixo "/api"
      },
    },
  },
  plugins: [react()],
})
