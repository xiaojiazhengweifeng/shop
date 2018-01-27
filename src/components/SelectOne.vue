<template>
  <div class='one'>
    {{$store.state.ShopList.shopList.list[msgFather].moredescript}}
  </div>
</template>
<script>
import { mapState } from 'vuex' 
export default {
  name: 'One',
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

