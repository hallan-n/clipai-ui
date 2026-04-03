import { createRouter, createWebHistory } from 'vue-router'

import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Dashboard from './pages/Dashboard.vue'

import { useAuthStore } from './stores/auth'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: Login,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})