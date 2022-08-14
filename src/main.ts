/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-08-05 15:04:28
 * @LastEditors: 滇西
 * @LastEditTime: 2022-08-13 16:03:02
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(elementPlus).mount('#app')
