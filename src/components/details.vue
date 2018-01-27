<template>
  <div class='detail'>
    <div class='detail-head'>
       <dl class='dl'>
         <dt></dt>
         <dd>
           <p class='title'>{{$store.state.ShopList.shopDetail.title}}</p>
           <p class='simpledescript'>{{$store.state.ShopList.shopDetail.simpledescript}}</p>
         </dd>
       </dl>
    </div>
    <div class='discounts'>
      <span class='discount'>{{$store.state.ShopList.shopDetail.discount}}</span>
      <span claass='morediscount' @click='more()'>更多优惠</span>
    </div>
    <div class='detail-content'>
      <div class='price-num'>
        <div class='price-num-price'>
          ￥{{$store.state.ShopList.shopDetail.price}}
          <span>剩余: <input type="text" :value='$store.state.ShopList.shopDetail.count - $store.state.ShopList.shopDetail.num' class='remain'/></span>   
        </div>
        <div class='price-num-num'>
          <span class='del' @click='del($store.state.ShopList.shopDetail.index)'>{{$store.state.ShopList.shopDetail.cancel}}</span>
          <input class='numVal' v-model="$store.state.ShopList.shopDetail.num"/>
          <span class='plus' @click='buy($store.state.ShopList.shopDetail.index)'>{{$store.state.ShopList.shopDetail.plus}}</span>
        </div>
      </div>
      <div class='price-descript'>
        <DetailsTab :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab">
          <keep-alive>
            <component :is="currentContent" :msg-father="$store.state.ShopList.shopDetail.index">
            </component>
          </keep-alive>
        </DetailsTab>
      </div>
    </div>
    <Total/>
    <Dialog v-if='stateDialog'/>
    <Discount v-if='isOpen'/> 
  </div>
</template>
<script>
import Total from '@/components/total'
import { mapState, mapGetters } from 'vuex'
import DetailsTab from '@/components/DetailTab.vue'
import One from './SelectOne.vue'
import Two from './SelectTwo.vue'
import Discount from '@/components/discount.vue'
import Dialog from '@/components/dialog.vue'
export default {
  name: 'Details',
  components: {
    Total,
    DetailsTab,
    One,
    Two,
    Discount,
    Dialog
  },
  computed: {
    ...mapState({
      shopDetail: state => {
          return state.ShopList.shopDetail.list
      },
      stateDialog: state => {
          return state.ShopList.stateDialog
      },
      isOpen: state => {
          return state.ShopList.isOpen
      }
    })
  },
  created () {
    this.getshopDetail ()
  },
  data () {
    return {
      tabIndex: 0,
      currentContent: 'one',
      tabList: [
        {
          index: 0,
          name: '商品详情',
          component: 'one'
        },
        {
          index: 1,
          name: '商品评价',
          component: 'two'
        }
      ]
    }
  },
  methods: {
    changeTab (tab) {
      this.tabIndex = tab.index
      this.currentContent = tab.component
    },
    buy(index) {
      this.$store.commit('ShopList/addNum', index)
    },
    del (index) {
      this.$store.commit('ShopList/removeNum', index)
    },
    more () {
      this.$store.state.ShopList.isOpen = true
    },
    getshopDetail () {
      this.$store.dispatch('ShopList/getShopDetail', this.$route.params.id*1).then((data) => {
        console.log(this.$store.state.ShopList.shopDetail)
      })
    }
  }
}
</script>
<style scoped lang='less'>
.detail {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: .14rem;
  .discounts {
    height: .4rem;
    background: red;
    line-height: .4rem;
    display: flex;
    padding-left: .1rem;
    padding-right: .1rem;
    box-sizing: border-box;
    justify-content: space-between;
  }
  .detail-head {
    height: 1.2rem;
    background: #ccc;
    .dl {
      display: flex;
      padding: .1rem;
      box-sizing: border-box;
      dt {
        width: 1rem;
        height: 1rem;
        background: yellow;
      }
      dd {
        flex: 1;
        padding-left: .2rem;
        box-sizing: border-box;
        .title {
          font-size: .16rem;
          color: #000;
          font-weight: bold;
          letter-spacing: .02rem;
        }
        .simpledescript {
          margin-top: .2rem;
        }
      }
    }
  }
  .detail-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: .1rem;
    .price-num {
      display: flex;
      padding-left: .1rem;
      padding-right: .1rem;
      box-sizing: border-box;
      justify-content: space-between;
      line-height: .4rem;
      .price-num-price {
        font-size: .16rem; 
        span {
          margin-left: .2rem;
          input{
            width: .2rem;
          }
        }  
      }
      .price-num-num {
        .del {
          width: .2rem;
          height: .2rem;
          text-align: center;
          line-height: .2rem;
          background: green;
          border-radius: 50%;
          display: inline-block;
          color: #fff;
          font-size: .16rem;
        }
        .numVal {
          width: .2rem;
        }
        .plus {
          width: .2rem;
          height: .2rem;
          text-align: center;
          line-height: .2rem;
          background: green;
          border-radius: 50%;
          display: inline-block;
          color: #fff;
          font-size: .16rem;
        }
      }
    }
    .price-descript {
      padding-left: .1rem;
      padding-right: .1rem;
      box-sizing: border-box;
      height: 100%;
      margin-top: .14rem;
    }
  }
}
</style>
                    

