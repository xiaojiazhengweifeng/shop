import axios from 'axios'

export default {
  namespaced: true,
  state: {
    shopList: [], // 商品列表
    shopDetail: {}, // 商品详情
    stateDialog: false, // 弹出框状态之购物列表
    isOpen: false // 弹出框之优惠内容
  },
  getters: {
    getCartList (state, getters) {
      if (state.shopList.list) {
        return state.shopList.list.filter((item, index) => {
          item.index = index
          return item.num >= 1
        })
      } else {
        return []
      }
    }
  },
  mutations: {
    isShowDialog (state) {
      if (!state.stateDialog) {
        state.stateDialog = true
      } else {
        state.stateDialog = false
      }
    },
    addNum (state, index) {
      if (state.shopList.list[index].num === state.shopList.list[index].count) return
      state.shopList.list[index].num += 1
      console.log(state.shopList.list[index])
    },
    removeNum (state, index) {
      if (state.shopList.list[index].num === 0) return
      state.shopList.list[index].num -= 1
    },
    setShopList (state, list) {
      state.shopList = list
    },
    setShopDetail (state, list) {
      state.shopDetail = list
    },
    setStateDialog (state, stateDialog) {
      console.log(stateDialog)
      state.stateDialog = stateDialog
    },
    setIsOpen (state, isOpen) {
      console.log(isOpen)
      state.isOpen = isOpen
    }
  },
  actions: {
    getShopList ({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('/getShopList').then((res) => {
          commit('setShopList', res.data)
          resolve(res.data)
        })
      })
    },
    getShopDetail ({commit, state}, index) {
      return new Promise((resolve, reject) => {
        state.shopList.list.map((item, i) => {
          if (index === i) {
            commit('setShopDetail', state.shopList.list[index])
            resolve(state.shopList.list[index])
          }
        })
      })
    },
    getStateDialog ({commit}, stateDialog) {
      return new Promise((resolve, reject) => {
        commit('setStateDialog', stateDialog)
        resolve(stateDialog)
      })
    },
    getIsOpen ({commit}, isOpen) {
      return new Promise((resolve, reject) => {
        commit('setIsOpen', isOpen)
        resolve(isOpen)
      })
    }
  }
}
