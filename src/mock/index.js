import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Carousel from './data/carousel.js'
import Information from './data/information.js'
import ShopList from './data/shoplist.js'
export default {
  bootstrap () {
    const mock = new MockAdapter(axios)
    mock.onGet('/getImg').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, Carousel])
      })
    })
    mock.onGet('/getList').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, Information])
      })
    })
    mock.onGet('/getShopList').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, ShopList])
      })
    })
  }
}
