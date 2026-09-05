import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      // '/api/pixela' へのリクエストを 'https://pixe.la/v1' に横流しする
      '/api/pixela': {
        target: 'https://pixe.la/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/pixela/, ''),
      },
    },
  },
})
