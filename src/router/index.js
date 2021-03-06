import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import Products from '../views/Products'
import Cart from '../views/Cart'
import Profile from '../views/Profile'
import store from '../store'
import Order from '../views/Order'
import Payment from '../views/Payment'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
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
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/order/:cartId",
    name: "order",
    component: Order,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/payment/:orderId",
    name: "payment",
    component: Payment,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
]

const router = new VueRouter({
  // linkExactActiveClass: 'active',
  routes
})

router.beforeEach( async (to, from, next) => {
    from
    store.dispatch("fetchCurrentUser");
    if(to.matched.some(record => {
      return record.meta.requiresAuth;
    })){
      if(store.state.token === ""){
        next({
          path: '/products'
        })
      }else{
        next();
      }
    }else{
      next();
    }
})

export default router
