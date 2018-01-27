<template>
  <div class='app'>
    <div class='address-tip'>
      <span class='back' @click='back()'>返回</span>
      <span class='edit' @click='edit()'>编辑</span>
    </div>
    <div class='address-sun'>
      <div v-if='plug'>
        
      </div>
      <div v-else>
        <div class='info' v-for='(item, index) in brr' :key='index' ref='div' @click='backPay(index)'>
          <p><span>{{item.bigplace}}</span><span>{{item.smallplace}}</span></p>
          <p><span>{{item.name}}</span><span>{{item.sex}}</span><span>{{item.tel}}</span></p>
        </div>
      </div>
    </div>
    <div class='add-address'>
      <router-link tag='div' to='/writeinformation'><span><i class='fa fa-plus'></i></span>新增收货地址</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'AddAddress',
  data () {
    return {
      plug: true,
      brr: []
    }
  },
  created () { 
    if ( !(this.isEmptyObject(JSON.parse(window.localStorage.getItem('places')))) ) {
      this.brr = eval( "["+window.localStorage.getItem('places')+"]")[0] 
      this.plug = false
    } 
  },
  computed: {
    ...mapState({
      userAddressIndex: state => {
        return state.ShopList.userAddressIndex
      }
    })
  },
  methods: {
    isEmptyObject (obj) {
      for (var key in obj) {
        return false;
      }
      return true
    },
    backPay (index) {
      let that = this
      if (!this.brr[index].key) {
        this.$store.state.ShopList.userAddressIndex = index
        this.$router.replace({ path: '/pay', query: this.$route.query.placesArr[index]})
      } else {
        let brr = this.brr.splice(index, 1)
        let str = JSON.stringify(this.brr)
        window.localStorage.setItem('places', str)
        this.brr && this.brr.map(function (item, index) {
          that.$delete(item, 'key', 1)
        })
      }
    },
    edit () {
      let that = this
      this.brr.map(function (item, index) {
        that.$set(item, 'key', 1)
      })
    },
    back () {
      if (this.$store.state.ShopList.userAddressIndex >= 0) {
        this.$router.replace({ path: '/pay', query: this.$route.query.placesArr[this.$store.state.ShopList.userAddressIndex]})
      } else {
        alert('请先填写收货人信息')
      }
    }
  }
}
</script>
<style scoped lang='less'>
.app {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: .12rem;
}
.address-tip {
  height: .4rem;
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: .1rem;
  padding-right: .1rem;
  box-sizing: border-box;
}
.address-sun {
  flex: 1;
  padding-left: .1rem;
  padding-right: .1rem;
  box-sizing: border-box;
  padding-top: .1rem;
}
.address-sun .info {
  width: 100%;
  border: 1px solid #ccc;
}
.address-sun .info p {
  line-height: .24rem;
}
.address-sun .info p span {
  margin-left: .1rem;
}
.add-address {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: .4rem;
  background: #fff;
  text-align: center;
  line-height: .4rem;
  letter-spacing: .02rem;
  font-size: .16rem;
}
.add-address div span{
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: .18rem;
  height: .18rem;
  text-align: center;
  line-height: .18rem; 
  margin-right: .04rem; 
}
</style>


