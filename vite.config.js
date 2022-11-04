import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/ antes tinha base: '/online-cv/' 
export default defineConfig({
  base: '/online-cv/',
  plugins: [vue()]
})
