<template>
	<div class="childs1">
		<div class='detail-box' v-for='(item,index) in shopList' :key='index'>
			<router-link tag='div' 
				:to="'/details/' + index"
				class="img">
				<img src="" alt="">
			</router-link>
			<div class='text' ref='simple'>
				<p class='title' :data-ins="index">{{item.title}}</p>
				<div class='admin'>
					<div>剩余: <input type="text" class='remain' :value="item.count - item.num"/></div>  
				</div>
				<p class='price'>￥<span>{{item.price}}</span></p>
				<span class='plus1' @click='buy(index)'>{{item.plus}}</span>
				<div class='count' v-show="item.num >= 1">
					<span class='reduce'  @click='del(index)'>{{item.cancel}}</span>
					<input class='numVal' v-model="item.num"/>
				</div> 
			</div> 
	</div> 
	</div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default{
	name: 'childs1',
	data () {
		return {
			activeIndex: -1
		}
	},
	computed: {
		...mapState({
			shopList: state => {
				return state.ShopList.shopList.list
			}
		})
	},
	created () {
		this.getShopList()
	},
	methods: {
		buy (index) {
			this.$store.commit('ShopList/addNum', index)
		},
		del (index) { 
			this.$store.commit('ShopList/removeNum', index)
		},
		getShopList () {
			this.$store.dispatch('ShopList/getShopList').then((data) => {
				console.log(data)
			})
		}
  }
}
</script>
<style scoped lang="less">
.childs1 {
	box-sizing: border-box;
	.detail-box {
		display: flex;
		padding-left: .1rem;
		padding-right: .1rem;
		box-sizing: border-box;
		.img {
			width: 1rem;
			height: 1rem;
			border: 1px solid #eee;
			background: blue;
		}
		.text {
			flex: 1;
			padding: 0 .03rem;
			box-sizing: border-box;
			position: relative;
			.count {
				width: .8rem;
				position: absolute;
				right: .1rem;
				bottom: .1rem;
				input {
					width: .26rem;
					outline: none;
					border:  1px solid #ddd;
				}
				.plus {
					display: inline-block;
					width: .2rem;
					height: .2rem;
					text-align: center;
					line-height: .2rem;
					border: 1px solid transparent;
					background: green;
					color: #fff;
					border-radius: 50%;
					font-size: .16rem;
				}
				.reduce {
					display: inline-block;
					width: .2rem;
					height: .2rem;
					text-align: center;
					line-height: .2rem;
					border: 1px solid transparent;
					background: green;
					color: #fff;
					border-radius: 50%;
					font-size: .16rem;
				}
			}
			p {
				line-height: .2rem;
			}
			.admin {
				font-size: .14rem;
				color: #666;
				input{
					font-size: .14rem;
					color: #666;
					width: .15rem;
				}
			}
			.plus1 {
				position: absolute;
				right: .1rem;
				bottom: .09rem;
				width: .2rem;
				height: .2rem;
				text-align: center;
				z-index:10;
				line-height: .2rem;
				border: 1px solid transparent;
				background: green;
				color: #fff;
				border-radius: 50%;
				font-size: .16rem;
			}
		}
	}
}
.activeClass {
	display: block;
}
.detail-box .text p.title {
	font-size: .16rem;
	color: #000;
	font-weight: bold;
}

.detail-box .text p.price {
	padding-top: .28rem;
	font-size: .16rem;
	color: #000;
}
</style>
