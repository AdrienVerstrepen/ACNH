import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/components/NotFound.vue'
import ItemList from '@/views/Lists/ItemList.vue'
import Wishlist from '@/views/Wishlist.vue'

import FishList from '@/views/Lists/FishList.vue'
import SingleFish from '@/views/Singletons/SingleFish.vue'

import BugList from '@/views/Lists/BugList.vue'
import SingleBug from '@/views/Singletons/SingleBug.vue'

import FossilList from '@/views/Lists/FossilList.vue'
import SingleFossil from '@/views/Singletons/SingleFossil.vue'

import GyroidList from '@/views/Lists/GyroidList.vue'
import SingleGyroid from '@/views/Singletons/SingleGyroid.vue'

import ArtList from '@/views/Lists/ArtList.vue'
import SingleArt from '@/views/Singletons/SingleArt.vue'

const routes = [
  { path: '/', name: 'root', component: Home },
  { path: '/fishes', name: 'fishes', component: FishList},
  { path: '/fish/:name', name: 'fish', component: SingleFish},

  { path: '/bugs', name: 'bugs', component: BugList},
  { path: '/bug/:name', name: 'bug', component: SingleBug},

  { path: '/fossils', name: 'fossils', component: FossilList},
  { path: '/fossil/:name', name: 'fossil', component: SingleFossil},
  
  { path: '/gyroids', name: 'gyroids', component: GyroidList},
  { path: '/gyroid/:name', name: 'gyroid', component: SingleGyroid},

  { path: '/arts', name: 'arts', component: ArtList},
  { path: '/art/:name', name: 'art', component: SingleArt},

  { path: '/items', name: 'items', component: ItemList },
  { path: '/wishlist', name: 'wishlist', component: Wishlist },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
