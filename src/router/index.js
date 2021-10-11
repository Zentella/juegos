import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import NotFound from "../views/NotFound";
import Administracion from '../views/Administracion'
import Opiniones from '../views/Opiniones'
import Edicion from '../views/Edicion'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: Administracion
  },
  {
    path: '/opiniones',
    name: 'Opiniones',
    component: Opiniones
  },
  {
    path: '/edicion/:entrada',
    name: 'Edicion',
    component: Edicion
  },
  {
    path: "*",
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
