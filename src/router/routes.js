import Home from '../pages/Home/Home.vue'
import Things from '../pages/Things/Things.vue'
import Category from '../pages/Category/Category.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import SearchGoods from '../pages/Home/SearchGoods/SearchGoods.vue'
import Personal from '../pages/Personal/Personal.vue'
import EmailLogin from '../pages/Personal/EmailLogin/EmailLogin.vue'
import PhoneLogin from '../pages/Personal/PhoneLogin/PhoneLogin.vue'

// 暴露的 路由配置是一个数组
export default [
  {
    path: '/home',
    component: Home,
    meta: {
      showFooter: true,
      showHeader: true
    }
  },
  {
    path: '/search',
    component: SearchGoods
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/things',
    component: Things,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shopcar',
    component: ShopCar,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    children: [
      {
        path: '/personal/phonelogin',
        component: PhoneLogin
      },
      {
        path: '/personal/emaillogin',
        component: EmailLogin
      }
    ]
  },
  {
    path: '/', // 项目根路径
    redirect: '/home'
  }
]
