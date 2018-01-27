<template>
  <div class='discountes'>
    <div class="dialog" @click='cancel()'>

    </div>
    <div class="discount-detail">
      <div v-for='(item,index) in getCartList' :key='index' class='dicount-box'>
        <p v-for='(items,indexs) in item.morediscount' :key='indexs'>{{items.discount}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Discount',
  data () {
    return {
      isClose: false,
      arr: []
    }
  },
  methods: {
    cancel () {
      // 清楚弹出框
      this.$store.state.ShopList.isOpen = false
    }
  },
  computed: {
    ...mapGetters({
        getCartList: 'ShopList/getCartList'
    }),
    ...mapState({
      isOpen: state => {
        return state.ShopList.isOpen
      }
    })
  }
}
</script>
<style scoped lang='less'>
.discountes {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: .14rem;
  z-index: 15;
  .dialog {
    flex: 1;
    background: rgba(0,0,0,.4)
  }
  .discount-detail {
    height: 1.6rem;
    background: #fff;
    max-height: 3rem;
    overflow: scroll;
    position: absolute;
    bottom: 0;
    padding-bottom: .8rem;
    left: 0;
    width: 100%;
    .dicount-box p{
      text-align: center;
      line-height: .4rem;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>


