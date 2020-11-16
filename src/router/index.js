import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/Events.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Events
  },
  {
    path: '/controllers',
    name: 'Controllers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Controllers.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
