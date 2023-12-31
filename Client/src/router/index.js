import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/user',
    name: 'Home',
    component: () => import(/* webpackChunkName: "user" */ '../components/Home.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router