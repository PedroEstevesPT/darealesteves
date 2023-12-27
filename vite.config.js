import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/ antes tinha base: '/online-cv/'
//For github pages deployment I need base to be like this: '/darealesteves/',   
// For Azure deployment, base should just be '/'
export default defineConfig({
  base: '/darealesteves/',
  plugins: [vue()]
})
