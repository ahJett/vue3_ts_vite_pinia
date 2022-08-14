/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-08-13 14:25:13
 * @LastEditors: 滇西
 * @LastEditTime: 2022-08-14 10:29:18
 */
import vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home/index.vue')
  }
]

const router = createRouter({
  // base: process.env.BASE_URL,
  history: createWebHistory(),
  routes
})

export default router