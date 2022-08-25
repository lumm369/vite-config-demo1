import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugins from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugins({
      // 配置项
      cache: false
    })
  ],
  server: {
    host: '0.0.0.0'
  }
})
