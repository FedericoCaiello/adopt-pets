import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pet from '../views/Pet.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cats',
      name: 'Cats',
      component: Cats
    },
    {
      path: '/Dogs',
      name: 'Dogs',
      component: Dogs
    },
    {
      path: '/Pets/:id',
      name: 'Pet',
      component: Pet
    }
  ]
})
