import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Your existing plugins
  server: {
    proxy: {
      '/api': { // Proxy configuration
        target: 'http://localhost:8080', // Replace with your backend server URL
        changeOrigin: true, // Changes the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Removes '/api' prefix
      },
    },
  },
});