<template>
  <div class='write-information'>
    <div class='user-info'>
      <h3>联系人</h3>
      <form action="">
        <div><span>姓名:</span><input type="text" placeholder="请输入收货人的姓名" v-model='name'></div>
        <div>
          <span>性别:</span>
          <label for="men">
            <input type="radio" name='sex' id='men' checked>
            <i>√</i>
            <b>先生</b>
          </label>
          <label for="women">
            <input type="radio" name='sex' id='women'>
            <i>√</i>
            <b>女士</b>
          </label> 
        </div>
        <div><span>手机:</span><input type="tel" placeholder="请输入收货手机号码" v-model='tel'></div>
      </form>
    </div>
    <div class='address-info'>
      <h3>收货地址</h3>
      <form action="">
        <div>
          <span>小区/大厦/学校</span>
          <input type="text" placeholder="请按照提示信息输入" v-model='bigplace'>
        </div>
        <div>
          <span>楼号-门牌号</span>
          <input type="text" placeholder="例:16号楼666室" v-model='smallplace'>
        </div>
      </form>
    </div>
    <div class='save' @click='save()'>保存</div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'WriteInformation',
  data () {
    return {
      name: '',
      sex: '',
      tel: '',
      bigplace: '',
      smallplace: '',
      placesArr: [],
      placeobj: {},
      count: 0
    }
  },
  created () {
    if ( !(this.isEmptyObject(JSON.parse(window.localStorage.getItem('places')))) ) {
      this.placesArr && this.placesArr.push(...eval("["+window.localStorage.getItem('places')+"]")[0])
    } 
  },
  methods: {
    isEmptyObject (obj) {
      for (var key in obj) {
        return false;
      }
      return true
    },
    getAddressList () {
      this.$store.dispatch('ShopList/getUserAddress').then((data) => {
        console.log(data)
      })
    },
    save () {
      var reg = /^1[0-9]{10}$/
      if ( !(this.tel.match(reg)) ) {
        alert('手机号输入错误')
        return
      }
      console.log(this.tel.match(reg))
      this.placeobj = {
                        index: this.count,
                        name: this.name, 
                        sex: this.sex, 
                        tel: this.tel, 
                        bigplace: this.bigplace, 
                        smallplace: this.smallplace
                      } 
      window.localStorage.setItem('places', JSON.stringify(this.placeobj))
      // 单个内容信息
      this.placesArr.push(this.placeobj)
      this.count ++
      // 将单个人的信息push到一个总的数组里边
      var str = JSON.stringify(this.placesArr)
      // 数组转为字符串
      window.localStorage.setItem('places', str)
      // 存入本地中
      this.$router.replace({ path: '/address', query: {
        placesArr: this.placesArr
      }})
      this.name = ''
      this.sex = ''
      this.tel = ''
      this.bigplace = ''
      this.smallplace = ''
    }
  }
}
</script>
<style scoped lang="less">
.write-information {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  font-size: .12rem;
  background: #ddd;
  .user-info {
    h3 {
      height: .4rem;
      line-height: .4rem;
      padding-left: .1rem;
      padding-right: .1rem;
      box-sizing: border-box;
    }
    form {
      padding-top: .1rem;
      padding-bottom: .1rem;
      background: #fff;
      padding-left: .1rem;
      padding-right: .1rem;
      box-sizing: border-box;
      div {
        border-bottom: 1px solid #ccc;
        padding-top: .1rem;
        padding-bottom: .1rem;
        display: flex;
        span {
          width: 1rem;
        }
        label {
          margin: 0 .2rem 0 0;
          i {
            display: inline-block;
            width: .2rem;
            height: .2rem;
            border-radius: 50%;
            text-align: center;
            line-height: .2rem;
            background: orangered;
            color: orangered;
          }
          input {
            display: none;
            &:checked + i{
              color: #fff;
            }
          }
        }
        input {
          flex: 1;
          outline: none;
          border: none;
        }
      }
    }
  }
  .address-info {
    h3 {
      height: .4rem;
      line-height: .4rem;
      padding-left: .1rem;
      padding-right: .1rem;
      box-sizing: border-box;
    }
    form {
      padding-top: .1rem;
      padding-bottom: .1rem;
      background: #fff;
      padding-left: .1rem;
      padding-right: .1rem;
      box-sizing: border-box;
      div {
        border-bottom: 1px solid #ccc;
        padding-top: .1rem;
        padding-bottom: .1rem;
        display: flex;
        span {
          width: 1rem;
        }
        input {
          flex: 1;
          outline: none;
          border: none;
        }
      }
    }
  }
  .save {
    position: absolute;
    bottom: 0;
    left: 0;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    background: orangered;
    color: #fff;
    width: 100%;
  }
}
</style>


