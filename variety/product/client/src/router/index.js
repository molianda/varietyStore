import Vue from 'vue'
import Router from 'vue-router'

import SwitchTab from '@/views/switchTab'
import FirstPage from '@/views/firstPage'
import ShopCar from '@/views/shopCar'
import Mine from '@/views/mine'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/firstpage'
  }, {
    path: '/test',
    name: 'HelloWorld',
    component: () => import('@/views/home')
  }, {
    path: '/tab',
    name: 'SwitchTab',
    component: SwitchTab,
    children: [{
      path: '/firstpage',
      name: 'FirstPage',
      component: FirstPage
    }, {
      path: '/shopcar',
      name: 'ShopCar',
      component: ShopCar
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }]
  }]
})
