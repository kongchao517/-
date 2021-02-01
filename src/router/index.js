import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import next from '../views/next.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/next',
    name: 'next',
    component: next
  }
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
