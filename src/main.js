import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import { Toast } from 'mint-ui'
import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue'
Vue.config.productionTip = false
// 引入mock服务器
import "./mock/mockServer"
//全局注册组件
Vue.component('HeaderSlot', HeaderSlot)
Vue.component(Toast.name, Toast)
new Vue({
  render: h => h(App),
  router, // 注册路由器
  store
}).$mount('#app')
