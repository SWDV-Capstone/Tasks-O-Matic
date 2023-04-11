import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '',
  //   redirect: '/views/pages'
  // },
  {
    path: '/views/:id',
    component: () => import ('../views/GroupsPage.vue')
  },
  {
    path: '/views/ItemsPage',
    component: () => import ('../views/ItemsPage.vue')
  },
  {
    path: '/views/:id',
    component: () => import ('../views/TaskGroupsPage.vue')
  },
  {
    path: '/views/:id',
    component: () => import ('../views/ReportsPage.vue')
  },

  {
    path: '/views/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
