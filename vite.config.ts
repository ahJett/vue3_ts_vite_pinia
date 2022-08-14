/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-08-05 15:04:28
 * @LastEditors: 滇西
 * @LastEditTime: 2022-08-13 15:13:29
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // css: {
  //   // css预处理器
  //   preprocessorOptions: {
  //     less: {
  //       charset: false,
  //       additionalData: '@import "./src/assets/style/global.less";',
  //     },
  //   },
  // },
})
