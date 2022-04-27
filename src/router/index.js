import { createRouter, createWebHashHistory } from 'vue-router'
import HomeVue from '../components/Home.vue'
import Add from '../components/Add.vue'
import View from '../components/View.vue'
import Update from '../components/Update.vue'
import Delete from '../components/Delete.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeVue
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/view',
    name: 'view',
    component: View
  },
  {
    path: '/update',
    name: 'update',
    component:Update
  },
  {
    path: '/delete',
    name: 'delete',
    component: Delete
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
