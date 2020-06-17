import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var location = "/kq"
const routes = [
  {
    path: location+'/',
    name: 'home',
    component: () => import('../views/sys/Index.vue')
  },
  //考勤系统首页
  {
    path:"/index",
    component: () => import('../views/sys/Index.vue')
  },
  //名单
  {
    path:"/name_list",
    component: () => import('../views/sys/Name_list.vue')
  },
  //统计
  {
    path:"/count",
    component: () => import('../views/sys/Count.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
