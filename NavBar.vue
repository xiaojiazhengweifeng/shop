<template>
    <!-- 每一个 tab 绑定了一个点击事件，传入的参数对应着 tab 下的组件名 -->
    <div class="root">
        <div class='nav-bar'>
            <p @click="toggle(index,tab.view)" v-for="(tab, index) in tabs" :class="{active: active == index}" :key='index'>{{ tab.type }}</p>
            <router-link class='user' tab='span' to='/user'><i class='fa fa-user'></i></router-link>
        </div>
        <div class='nav-con'>
            <component :is="currentView"></component>
        </div>
    </div>
</template>       
<script>
// 引入子组件
import child1 from '@/components/child1'
import child2 from '@/components/child2'
export default {
    name: 'tabs',
    components: {
        child1,
        child2
    },
    data () {
        return {
            currentView: 'child1',
            active: 0,
            tabs: [
                {
                type: ' 货架',
                view: 'child1'
            },{
                type: '爆品抢购',
                view: 'child2'
            }
            ]
        }
    },
    methods: {
  	    toggle(i,v) {
            this.active = i
			this.currentView = v
		}
    }
}
</script>
<style scoped>
.root {
    display: flex;
    flex-direction: column;
}
.root .nav-bar {
    position: relative;
}
.root .nav-bar .user {
    position: absolute;
    width: .3rem;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    right: .14rem;
    top: .1rem;
    color: green;
    border-radius: 50%;
    border: 1px solid #ccc;
    font-size: .14rem;
    color: #666;
}
.root .nav-bar .user i {
    font-size: .14rem;
}
.active {
  color: #000;
  font-weight: bold;
}
.root .nav-bar p {
  padding: .15rem .15rem;
  box-sizing: border-box;
  float:left;
  list-style: none;
}
</style>