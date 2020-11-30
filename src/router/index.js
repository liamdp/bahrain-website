import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/events'
import Staff from '../views/staff'
import Controllers from '../views/controllers'
import Home from '../views/home';
import Policies from '../views/policies';
import TestTemplate from '../views/test-template';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
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
  },
  {
    path: '/policies',
    name: 'Policies',
    component: Policies
  },
    {
    path: '/test',
    name: 'Test',
    component: TestTemplate
  },
]

const router = new VueRouter({
  routes
})

export default router
