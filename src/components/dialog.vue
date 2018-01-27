<template>
  <div class='dialogs'>
    <div class='yinying' @click='canceldialog()'>
    </div>
    <div class='content-box'>
      <div class="head">
        <span>货架</span>
        <span @click='clear()'>清空</span>
      </div>
      <div class="list-box">
        <div v-for='(item, index) in getCartList' :key='index' class='list-box-list'>
          <span class='shop-name'>{{item.title}}</span>
          <span class='shop-price'>{{item.price}}</span>
          <div class='shop-sum'><span class='del' @click='del(item.index)'>{{item.cancel}}</span><b class=''>{{item.num}}</b><span class='plus' @click='buy(item.index)'>{{item.plus}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'dialogs',
  computed: {
    // 获取被添加到购物车的数据
    ...mapGetters({
        getCartList: 'ShopList/getCartList'
    }),
    ...mapState({
      stateDialog: state => {
        return state.ShopList.stateDialog
      }
    })
  },
  methods: {
    // 取消弹出框
    canceldialog () {
      this.$store.state.ShopList.stateDialog = false
    },
    // 减
    del (index) {
      this.$store.commit('ShopList/removeNum', index)
    },
    // 加
    buy (index) {
      this.$store.commit('ShopList/addNum', index)
    },
    clear () {
      // 清空
      this.$store.state.ShopList.shopList.list.map(function (item, index) {
        item.num = 0
      })
      this.canceldialog()
    }
  }
}
</script>
<style scoped lang="less">
.dialogs{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, .4);
  z-index: 122;
  display: flex;
  flex-direction: column;
  .yinying {
    flex: 1;
  }
  .content-box {
    width: 100%;
    height: 3.4rem;
    overflow: scroll;
    background: #fff;
    position: absolute;
    bottom: .4rem;
    left: 0;
    .head {
      width: 100%;
      height: .4rem;
      line-height: .4rem;
      display: flex;
      justify-content: space-between;
      padding-left: .1rem;
      padding-right: .1rem;
      box-sizing: border-box;
      background: #ccc;
      position: fixed;
      bottom: 3.4rem;
      left: 0;
    }
    .list-box {
      width: 100%;
      position: absolute;
      top: .4rem;
      left: 0;
      .list-box-list{
        width: 100%;
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: .1rem;
        box-sizing: border-box;
        .shop-name {
          color: #000;
          font-size: .14rem;
        }
        .shop-price {
          color:red;
          flex: 1;
          text-align: right;
        }
        .shop-sum {
          width: .8rem;
          display: flex;
          padding-left: .04rem;
          box-sizing: border-box;
          span {
            display: inline-block;
            width: .2rem;
            height: .2rem;
            border-radius: 50%;
            text-align: center;
            line-height: .2rem;
            font-size: .12rem;
            background: green;
          }
          b {
            flex: 1;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

