<template>
  <div id='app'>
    <Carousel/>
    <NavBar/> 
    <Total/>
    <Dialog v-if='stateDialog'/>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel'
import NavBar from '@/components/NavBar'
import Total from '@/components/total'
import Dialog from '@/components/dialog'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState({
      stateDialog: state => {
        return state.ShopList.stateDialog
      }
    })
  },
  mounted () {
    this.getStateDialog()
  },
  components: {
    Carousel,
    NavBar,
    Total,
    Dialog
  },
  methods: {
    getStateDialog () {
      this.$store.state.ShopList.stateDialog = false
    }
  }
}
</script>
<style scoped>
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: .12rem;
}
</style>

