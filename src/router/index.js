import Vue from 'vue'
import VueRouter from 'vue-router'
import TvShowListView from '../views/TvShowListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tv',
    component: TvShowListView
  },
  {
    path: '/tv/:id',
    name: 'tvDetails',
    component: () => import('../views/TvShowDetailsView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
