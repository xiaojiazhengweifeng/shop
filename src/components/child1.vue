<template>
    <!-- 每一个 tab 绑定了一个点击事件，传入的参数对应着 tab 下的组件名 -->
    <div class='child1'>
        <div class="child1-child1">
            <ul class='ul'>
                <li @click="toggle(index,tab.view)" v-for="(tab, index) in tabs" :class="{active: active == index}" :key='index'>{{ tab.type }}</li>
            </ul>
            <router-link tag='div' class='know' active-class="active" to='/00'>
                认领
            </router-link>
        </div>
        <div class='con-box'>
            <component :is="currentView"></component>
        </div>
    </div>
</template>       
<script>
// 引入子组件
import childs1 from '@/components/childs1'
import childs2 from '@/components/childs2'
export default {
    name: 'child1',
    components: {
        childs1,
        childs2
    },
    data () {
        return {
            currentView: 'childs1',
            active: 0,
            tabs: [
                {
                    type: '折扣',
                    view: 'childs1'
                },
                {
                    type: '第一层',
                    view: 'childs2'
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
<style scoped lang="less">
.child1 {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    .child1-child1 {
        .ul {
            width: .8rem;
            background: #ddd;
            li {
                font-size: .14rem;
                list-style: none;
                text-align: center;
                padding-top: .14rem;
                padding-bottom: .14rem;
                border: 1px solid #ccc;
                background: #ddd;
            }
        }
        .know {
            width: .8rem;
            height: .4rem;
            line-height: .4rem;
            text-align: center;
            background: #ddd;
            font-size: .14rem;
        }
    }
    .con-box {
        flex: 1;
    }
}
.active {
  color: red;
}
</style>