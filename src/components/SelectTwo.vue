<template>
  <div class='two'>
    {{$store.state.ShopList.shopList.list[msgFather].evaluate}}
  </div>
</template>
<script>
import { mapState } from 'vuex' 
export default {
  name: 'Two',
  props: ['msgFather'],
  computed: {
    ...mapState({
      shopList: state => {
        return state.ShopList.shopList.list
      }
    })
  }
}
</script>