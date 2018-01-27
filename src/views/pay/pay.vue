<template>
  <div class='app'>
    <div class="userinformation">
      <ul>
        <li @click='setAddress()'>
          <p>{{this.$route.query.bigplace}}{{this.$route.query.smallplace}}</p>
          <span>{{this.$route.query.name}}</span><span>{{this.$route.query.tel}}</span> 
          <b class='next'> > </b>
        </li>
        <li>立即送出</li>
      </ul>
    </div>
    <div class='shopinformation'>
      <div v-for='(item, index) in getCartList' :key='index' class='list-box-list'>
        <dl>
          <dt><img :src="item.url" alt=""></dt>
          <dd>
            <p class='shop-name'>{{item.title}}</p>
            <div>
              <span class='shop-price'>￥{{item.price}}</span>
              <span class='shop-sum'>{{item.num}}/份</span>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class='shop-discount'>
      <div v-for='(item, index) in getCartList' :key='index' class='type'>
        <h3>{{item.title}}</h3>
        <ul>
          <li ref='li' :type='items.key' v-for='(items, index) in item.morediscount' :key='index' @click='changePrice(index)'>{{items.discount}}</li>
        </ul>
      </div>
    </div>
    <Totalmount/>
  </div>
</template>
<script>
import bus from '../../bus'
import Totalmount from '@/components/totalmount'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Pay',
  data () {
    return {
      plcaes: {}
    }
  },
  computed: {
    ...mapGetters({
      getCartList: 'ShopList/getCartList'
    })
  },
  components: {
    Totalmount
  },
  methods: {
    setAddress () {
      console.log(eval("["+window.localStorage.getItem('places')+"]")[0])
      this.$router.replace({path: '/address', query: {
        placesArr: eval("["+window.localStorage.getItem('places')+"]")[0]
      }})
    },
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
    changePrice (index) {
      if (this.$refs.li[index].type == 1) {
        let money = 0
        if (this.getCartPrice() >= 30) {
          money = this.getCartPrice() - 20 
          bus.$emit('changePrice', money)
          // alert(money)
        } else {
          alert('不好意思，该商品没有达到优惠资格')
        }
      } else if (this.$refs.li[index].type == 2) {
        let money = 0
        if (this.getCartPrice() >= 50) {
          money = this.getCartPrice() - 40
          bus.$emit('changePrice', money)
          // alert(money)
        } else {
          alert('不好意思，该商品没有达到优惠资格')
        }
      } else if (this.$refs.li[index].type == 3) {
        let money = 0
        if (this.getCartPrice() >= 100) {
          money = this.getCartPrice()*0.8 
          bus.$emit('changePrice', money)
          // alert(money)
        } else {
          alert('不好意思，该商品没有达到优惠资格')
        }
      } else if (this.$refs.li[index].type == 4) {
        let money = 0
        if (this.getCartPrice() >= 200) {
          money = this.getCartPrice()*0.5 
          bus.$emit('changePrice', money)
          // alert(money)
        } else {
          alert('不好意思，该商品没有达到优惠资格')
        }
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
  font-size: .14rem;
  background: orange;
  padding: .1rem;
  box-sizing: border-box;
  .userinformation {
    height: 1.2rem;
    background: #fff;
    ul {
      padding: .1rem;
      box-sizing: border-box;
      li{
        text-align: center;
        line-height: .3rem;
        &:nth-child(1) {
          border-bottom: 1px solid #ccc;
          position: relative;
          .next {
            position: absolute;
            right: .1rem;
            bottom: .14rem;
            font-size: .14rem;
          }
        }
        &:nth-child(2) {
          text-align: left;
          padding-top: .06rem;
        }
      }
    }
  }
  .shopinformation {
    background: yellow;
    .list-box-list {
      dl{
        padding: .1rem;
        box-sizing: border-box;
        display: flex;  
        dt {
          width: 1rem;
          img {
            width: 100%;
            height: auto;
          }
        }
        dd {
          flex: 1;
          padding-left: .1rem;
          padding-right: .1rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          div {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
  .shop-discount {
    width: 100%;
    height: 2rem;
    max-height: 2rem;
    overflow-y: scroll;
    padding-left: .1rem;
    padding-right: .1rem;
    box-sizing: border-box;
    background: #fff;
    position: absolute;
    bottom: .4rem;
    left: 0;
    .type {
      h3{
        line-height: .36rem;
      }
    }
  }
}
</style>


