import Vue from 'vue'
import Vuex from 'vuex'
import ShopList from './modules/shopList'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    ShopList
  }
})
