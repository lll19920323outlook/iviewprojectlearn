import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui框架
import ElementUI from 'element-ui'
//引入iView框架
import iView from 'iview'
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'

//引入ivew样式
import 'iview/dist/styles/iview.css';    // 使用 CSS

//使用/注册框架/插件
Vue.use(iView)
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
