import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Pages'
  },
  {
    path: '/Groups/:id',
    component: () => import('../views/GroupsPage.vue')
  },
  {
    path: '/TaskItems/:id',
    component: () => import('../views/ItemsPage.vue')
  },
  {
    path: '/TaskGroups/:id',
    component: () => import('../views/TaskGroupsPage.vue')
  },
  {
    path: '/Reports/:id',
    component: () => import('../views/ReportsPage.vue')
  },
  {
    path: '/Login/:id',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/Test/:id',
    component: () => import('../views/TestPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
