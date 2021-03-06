import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import index from '../views/index.vue'
import News from '../views/News.vue'
import Video from '../views/Video.vue'
import Profile from '../views/Profile.vue'
// 记住！reset.css是在这里导入的 不是在index.html前面导入
import '../assets/css/reset.css'
import '../assets/css/global.css'
Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Regist',
    name: 'Regist',
    component: Regist
  },
  {
    path:'/index',
    name:'index',
    component: index
  },
  {
    path:'/News',
    name:'News',
    component: News
  },
  {
    path:'/Video',
    name:'Video',
    component: Video
  },
  {
    path:'/Profile',
    name:'Profile',
    component: Profile
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
