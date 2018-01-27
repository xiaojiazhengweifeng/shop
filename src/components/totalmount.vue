<template>
  <div class='totalmount'>
    <div class='pay-total'>
      <span class='price'>总价: ￥<span v-if='originalPrice'>{{getCartPrice}}</span><span v-if='discountprice'>{{price}}</span></span>
      <span class='action' @click='payout()'>支付</span>
    </div>
  </div>
</template>
<script>
import bus from '../bus'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'Totalmount',
  data () {
    return {
      price: 0,
      originalPrice: true,
      discountprice: false
    }
  },
  mounted () {
    this.getShopList()
    let that = this
    bus.$on('changePrice', (res) => {
      that.price = res
    })
  },
  computed: {
    ...mapGetters({
      getCartList: 'ShopList/getCartList'
    }),
    getCartPrice () {
      let money = 0
      this.getCartList.map((item, index) => {
        money += item.price * item.num
      })
      if (money > 0) {
        this.isShow = false
        this.isHide = true
      } else {
        this.isShow = true
        this.isHide = false
      }
      return money
    }
  },
  methods: {
    getShopList () {
      axios.get('/getShopList').then((res) => {
        this.lists = res.data.list
      })
    },
    payout () {
      if (this.price !== 0) {
        this.originalPrice = false
        this.discountprice = true
      }
    }
  }
}
</script>
<style scoped lang='less'>
.totalmount {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: .4rem;
  color: #fff;
  line-height: .4rem;
  background: #ccc;
  .pay-total {
    display: flex;
    justify-content: space-between;
    .price {
      padding-left: .1rem;
      padding-right: .1rem;
      box-sizing: border-box;
      flex: 1;
      color: red;
    }
    .action {
      background: red;
      width: .8rem;
      height: .4rem;
      line-height: .4rem;
      text-align: center;
    }
  }
}
</style>


