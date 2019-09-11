import Home from '../pages/Home/Home.vue'
import Personal from '../pages/Personal/Personal.vue'
import Things from '../pages/Things/Things.vue'
import Category from '../pages/Category/Category.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'

// 暴露的 路由配置是一个数组
export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/things',
    component: Things
  },
  {
    path: '/shopcar',
    component: ShopCar
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/', // 项目根路径
    redirect: '/home'
  },
]
