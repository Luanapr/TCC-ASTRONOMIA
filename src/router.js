import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Inicio from './views/Inicio.vue'
import Noticias from './views/Noticias.vue'
import teste from './views/teste.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
     },
     {
      path: '/noticias',
      name: 'noticias',
      component: Noticias
     },
     {
      path: '/teste',
      name: 'teste',
      component: teste
     }
  ]
})


