import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    //设置默认页面跳转到index页面
    path: '/',
    name: 'Index',
    // 懒加载模式设置首页
    //component: () => import('@/views/Index'),
    redirect: '/Index'
  },
  {
    //默认页面跳转到此页面，如果没加载此页面无法展示
    path: '/Index',
    name: 'Index',
    component: () => import('@/views/Index')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    //登陆页面
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      anonymous: true
    }
  }
]

const router = new VueRouter({
  //设置路由模式为history模式（不加# hash值）
  mode: 'history',
  routes
})

//路由守卫监测每次路由跳转时是否携带相关信息，如果未携带，跳转至登陆页面
router.beforeEach((to, from, next) => {
  // 1，检查是否登陆，如果未登陆跳转到登陆页面

  //这里使用this.$stroe对象失败的原因是，由于$stroe 是在newVue，挂载app的时候赋值的，所以，所有组件中是可以用，但是，此处由于是js文件中，所以，想要使用的话，需要引入
  // if (this.$store.state.userinfo == null) {
  //   next({ path: '/login' })
  // }

  //跳转登陆页面需要注意，注意需要有一个跳转截止标识，否则陷入跳转首页死循环
  if ((to.hasOwnProperty('meta') && to.meta.anonymous) || store.state.userinfo != null) {
    console.log('已经登陆了')
    
    //切记这里要写return
    return next()
  }

  //否则跳转登陆页面
  //query产生一个随机数在 login->home->login执行不了，也就避免了死循环，因为加了随机数，路径不一样了
  next({ path: '/login', query: { redirect: Math.random() } })
})

export default router
