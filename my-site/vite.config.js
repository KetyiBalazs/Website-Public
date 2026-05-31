import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import postsPlugin from './lib/vite-posts-plugin.js'

export default defineConfig({
  plugins: [postsPlugin(), react(), tailwindcss()],
})