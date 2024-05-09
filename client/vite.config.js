import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      '@emotion/react',
      '@emotion/styled',
      '@mui/material/Tooltip'
    ],
  },
  build: {
    outDir: '../server/public',
    emptyOutDir: false,
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  }
})
