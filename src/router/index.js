import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/events'
import Staff from '../views/staff'
import Controllers from '../views/controllers'

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
    component: Controllers
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff
  }
]

const router = new VueRouter({
  routes
})

export default router
