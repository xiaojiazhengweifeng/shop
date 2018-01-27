// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import mock from './mock'
import store from './store'
import '@/assets/css/style.min.css'
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import '@/assets/css/font-awesome.min.css'
mock.bootstrap()
Vue.use(Mint)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
