// 从node:url模块导入文件URL转换相关的工具函数
import { fileURLToPath, URL } from 'node:url'

// 导入Vite的配置函数
import { defineConfig } from 'vite'
// 导入Vue插件
import vue from '@vitejs/plugin-vue'
// 导入Vue开发者工具插件
import vueDevTools from 'vite-plugin-vue-devtools'

// Vite配置文件 https://vite.dev/config/
export default defineConfig({
  // 配置Vite插件
  plugins: [
    vue(), // 处理Vue单文件组件
    vueDevTools(), // 启用Vue开发者工具
  ],
  // 配置模块解析
  resolve: {
    alias: {
      // 设置@作为src目录的别名,方便导入模块时使用
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
