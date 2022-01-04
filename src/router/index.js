import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
// 记住！reset.css是在这里导入的 不是在index.html前面导入
import '../assets/css/reset.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
