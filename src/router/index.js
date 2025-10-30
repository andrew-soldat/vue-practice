import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home.vue'
import Help from '../page/Help.vue'
import Auth from '../page/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'Main',
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      layout: 'Main',
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      layout: 'Auth',
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
