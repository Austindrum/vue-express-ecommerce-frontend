import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import Products from '../views/Products'
import Cart from '../views/Cart'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/products"
  },
  {
    path: "/products",
    name: "products",
    component: Products
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
