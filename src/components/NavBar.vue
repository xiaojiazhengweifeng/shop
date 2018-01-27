<template>
    <!-- 每一个 tab 绑定了一个点击事件，传入的参数对应着 tab 下的组件名 -->
    <div class="navbar">
        <ul class='ul'>
            <li @click="toggle(index,tab.view)" v-for="(tab, index) in tabs" :class="{active: active == index}" :key='index'>{{ tab.type }}</li>
        </ul>
        <router-link class='user' tag='span' to='/user'><i class='fa fa-user'></i></router-link>
        <div class='con-box'>
            <component :is="currentView"></component>
        </div>
    </div>
</template>       
<script>
// 引入子组件
import child1 from '@/components/child1'
import child2 from '@/components/child2'
export default {
    name: 'NavBar',
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
                type: '热卖',
                view: 'child1'
            },{
                type: '精品选区',
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
<style scoped lang='less'>
.navbar {
    position: relative;
    top: 0;
    left: 0;
    box-sizing: border-box;
    .ul{
        width: 100%;
        display: flex;
        li {
            flex: 1;
            font-size: .14rem;
            list-style: none;
            text-align: center;
            padding-top: .14rem;
            padding-bottom: .14rem;
        }
    }
    .user {
        position: absolute;
        right: .1rem;
        top: .1rem;
        font-size: .14rem;
    }
    .con-box {
        padding-top: .1rem;
        box-sizing: border-box;
        width: 100%;
    }
}
.active {
  color: red;
}
</style>