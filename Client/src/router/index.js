import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'
const routes = [

  {
    path: '/hello',
    name: 'HelloWorld',
    component: () => import(/* webpackChunkName: "hello" */ '../components/HelloWorld.vue')
  },
  {
    path: '/user',
    name: 'Home',
    component: () => import(/* webpackChunkName: "user" */ '../components/Home.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router