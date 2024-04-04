import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutView,
      children: [
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
