<template>
  <div class='user'>
    <div class="information">
      <div class='header-img'>
        <img src="" alt="">
      </div>
      <span class='name'>某某</span>
    </div>
    <div class='information-list'>
      <ul class='ul'>
        <li v-for='(item, index) in list' :key='index'><span>{{item.text}}</span><span class='next'>></span></li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'User',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      axios.get('/getList').then((res) => {
        this.list = res.data.list
      })
    }
  }
}
</script>
<style scoped lang='less'>
.user {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: .12rem;
  background: #eee;
  .information {
    width: 100%;
    height: 1.5rem;
    padding-top: .2rem;
    padding-left: .1rem;
    padding-right: .1rem;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header-img {
      width: .8rem;
      height: .8rem;
      background: blue;
      text-align: center;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .name {
      padding-top: .2rem;
      font-size: .14rem;
    }
  }
  .information-list {
    display: flex;
    flex-direction: column;
    font-size: .14rem;
    li {
      background: #fff;
      margin-top: .04rem;
      padding-left: .1rem;
      padding-right: .1rem;
      box-sizing: border-box;
      padding-top: .1rem;
      padding-bottom: .1rem;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>


