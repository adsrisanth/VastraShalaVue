import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkshopPageView from '../views/WorkshopPageView.vue'
import WorkshopView from '../views/WorkshopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:to?',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/PageFourView.vue')
    },
    {
      path: '/event/list',
      name: 'event-list',
      component: () => import('../views/EventPageView.vue')
    },
    {
      path: '/event/:index/:title',
      name: 'single-event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/workshop/list',
      name: 'workshop-list',
      component: WorkshopPageView
    },
    {
      path: '/workshop/:index/:title',
      name: 'single-workshop',
      component: WorkshopView
    }
  ]
})

export default router
