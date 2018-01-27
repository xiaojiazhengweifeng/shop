<template>
  <div class="my-tabs">
    <div class="tabs-bar">
      <div class="tabs-bar-nav">
        <div class="tabs-tab" v-for="(tab, index) in tabList"
        :class="[tabIndex == tab.index ? 'tabs-active' : '']"
        @click="changeTab(tab)" :key='index'>
          {{tab.name}}
        </div>
      </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyTabs',
  props:
  {
    tabList: Array,
    tabIndex: Number
  },
  methods: {
    changeTab: function (tab) {
      this.$emit('changeTab', tab)
    }
  }
}
</script>
<style scoped lang="less">
.my-tabs {
  font-size: 14px;
  color: #444;
  .tabs-bar {
    border-bottom: 1px solid #eee;
    position: relative;
    padding: 5px 0;
    .tabs-bar-nav {
      display: table;
      margin-left: 35px;
      position: absolute;
      bottom: -1px;
      .tabs-tab {
        min-width: 1.4rem;
        padding: 5px 0;
        position: relative;
        display: inline-block;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .tabs-content {
  padding-top: .1rem;
  padding-left: .2rem;
  padding-right: .2rem;
  padding-bottom: .3rem;
  height: auto;
  }
}
.tabs-active {
  border-bottom: 2px solid orange;
}
</style>

