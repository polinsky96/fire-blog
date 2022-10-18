import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    }
  ]
})

export default router
