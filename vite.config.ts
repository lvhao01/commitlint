import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"; // 导入 path 模块，帮助我们解析路径

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: { // 这里配置需要注意：Vite新版本resolve配置改为对象形式，如下：
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, "src"),
      },
      {
        find: 'comps',
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: 'apis',
        replacement: resolve(__dirname, "src/apis"),
      },
      {
        find: 'views',
        replacement: resolve(__dirname, "src/views"),
      },
      {
        find: 'routes',
        replacement: resolve(__dirname, "src/router"),
      },
      {
        find: 'store',
        replacement: resolve(__dirname, "src/store"),
      },
      {
        find: 'utils',
        replacement: resolve(__dirname, "src/utils"),
      },
    ],
  }
})
