<template>
  <div class='carousel'>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for='(item, index) in list' :key='index'>
        <img :src='item.url' alt=''/>
      </mt-swipe-item>
    </mt-swipe>
  </div> 
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  name: 'Carousel',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getImg()
  },
  methods: {
    getImg () {
      axios.get('/getImg').then((res) => {
        console.log(res.data.banImg)
        this.list = res.data.banImg
      })
    }
  }
}
</script>
<style scoped lang="less">
.carousel{
  width: 100%;
  height: 1.2rem;
  .mint-swipe-item img {
    width: 100%;
    height: 100%;
  }
}
</style>


