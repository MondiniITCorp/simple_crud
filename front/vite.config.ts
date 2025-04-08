import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3006,
    allowedHosts: ['estoque-monami-lb-1077406287.us-east-1.elb.amazonaws.com','estoque.usemonami.com'], 
  },
  plugins: [react()],
})
