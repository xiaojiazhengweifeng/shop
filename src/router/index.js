import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import User from '@/views/user/user'
import Pay from '@/views/pay/pay'
import Details from '@/components/details'
import Address from '@/views/address/components/address'
import WriteInformation from '@/views/address/components/writeinformation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/writeinformation',
      name: 'WriteInformation',
      component: WriteInformation
    }
  ]
})
