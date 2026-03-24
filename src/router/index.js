import { createRouter, createWebHistory } from 'vue-router'
import { endpoints } from '@/utils/endpoints'

const dynamicRoutes = endpoints.flatMap(endpoint => {
  const path = endpoint.split("/")[0]

  return [
    {
      path: `/${path}`,
      name: path,
      component: () => import('@/views/ItemListView.vue'),
      props: {endpoint: endpoint}
    },
    {
      path: `/${path}/:name`, 
      name: `${path}-detail`,
      component: () => import('@/views/SingleItem.vue')
    }
  ]
})

const routes = [
  { path: '/', name: 'root', component: () => import('@/views/Home.vue') },
  { path: '/wishlist', name: 'wishlist', component: () => import('@/views/Wishlist.vue') },
  { path: '/items', name: 'items', component: () => import('@/views/AllItems.vue')},
  ...dynamicRoutes,
  { path: '/:pathMatch(.*)*', name: '404', component: () => import('@/components/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
