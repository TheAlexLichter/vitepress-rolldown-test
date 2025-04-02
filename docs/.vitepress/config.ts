import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  vite: {
    experimental: {
      enableNativePlugin: true 
    }
  }
})
