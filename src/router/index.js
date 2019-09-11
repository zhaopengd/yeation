import Vue from 'vue'
import VueRouter from 'vue-router'

// 声明使用路由
Vue.use(VueRouter)

// 引入路由配置
import routes from './routes';      

// // 创建路由器 暴露出器 供入口文件使用


const router = new VueRouter({
  routes
})
export default router
