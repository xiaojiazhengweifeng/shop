<template>
  <div class="total">
      <div class="chorice"> <span v-show='isShow'>请选择商品属性</span><span v-show='isHide'>{{getCartPrice}}</span></div>
      <div class="summary" @click='goPay()'>去结算</div>
      <span class='shop-car' @click='summary()'><i class='fa fa-shopping-cart'></i><b class='sum' v-show='isHide'>{{getCartNum}}</b></span>
  </div>
</template>
<script>
import bus from '../bus'
import axios from 'axios'
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'total',
    data () {
        return {
            flag: true,
            arr: [],
            summarys: 0,
            id: 0,
            lists: [],
            isShow: true,
            isHide: false
        }
    },
    computed: {
        // 获取被添加到购物车的数据
        ...mapGetters({
            getCartList: 'ShopList/getCartList'
        }),
        // 获取购物车内总数量
        getCartNum () {
            let num = 0
            this.getCartList.map((item, index) => {
                num += item.num
            })
            return num
        },
        // 获取购物车总价
        getCartPrice () {
            let money = 0
            this.getCartList.map((item, index) => {
                money += item.price*item.num
            })
            if (money > 0) {
                this.isShow = false
                this.isHide = true
            } else {
                this.isShow = true
                this.isHide = false
            }
            return money
        },
        ...mapState({
            userAddressIndex: state => {
                return state.ShopList.userAddressIndex
            },
            stateDialog: state => {
                return state.ShopList.stateDialog
            }
        })
    },
    mounted () {
        this.getShopList ()
    },
    methods: {
        goPay () {
            // 去支付
            if (this.isEmptyObject (JSON.parse(window.localStorage.getItem('places')))) {
                // 空数组
                this.$router.push({ path: '/address', query: {
                    placesArr: []
                }})
            } else {
                // 非空数组
                console.log(eval("["+window.localStorage.getItem('places')+"]"))
                this.$router.push({ path: '/pay', query: eval("["+window.localStorage.getItem('places')+"]")[0][0]})
            }
        },
        isEmptyObject (obj) {
             for (var key in obj) {
                return false;
            }
            return true
        },
        // 点击查看购物列表
        summary () {
            this.$store.state.ShopList.stateDialog = true
        },
        // 获取首页列表的商品列表
        getShopList () {
            axios.get('/getShopList').then((res) => {
                this.lists = res.data.list
            })
        }
    }
}
</script>
<style scoped lang='less'>
.total {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: .4rem;
    display: flex;
    z-index: 200;
    .chorice {
        flex: 1;
        text-align: center;
        line-height: .4rem;
    }
    .summary {
        width: 1.2rem;
        background: #ccc;
        color: #fff;
        text-align: center;
        line-height: .4rem;
    }
    .shop-car {
        position: absolute;
        top: -.3rem;
        left: .15rem;
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        text-align: center;
        line-height: .3rem;
        background: green;
        i {
            text-align: center;
            font-size: .2rem;
            line-height: .4rem;
        }
        .sum {
            position: absolute;
            top: -.1rem;
            left: .28rem;
            width: .2rem;
            height: .2rem;
            border: 1px solid transparent;
            text-align: center;
            line-height: .2rem;
            background: red;
            color: #fff;
            border-radius: 50%;
        }
    }
}
</style>


