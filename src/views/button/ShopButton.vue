<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div>
				<p>我是商品信息</p>
				<p>我是商品信息</p>
				<p>我是商品信息</p>
				<p>我是商品信息</p>
			</div>
			<shop-button :options='opt1' @onShop='onShop' />
			
			<shop-button :options='opt2' @onShop='onShop' />
		</div>
	</div>
</template>

<script>
import ShopButton from '@/components/Buttons/ShopButton.vue'
export default {
	data() {
		return {
			opt1: {
				leftList: [{
					icon: 'icon-Plus',
					title: '购物车'
				}, {
					icon: 'icon-sousuo',
					title: '店铺'
				}, {
					icon: 'icon-saoma',
					title: '客服'
				}],
				rightList: [{
					title: '立即购买'
				}]
			},
			opt2: {
				isFixed: false,
				leftList: [{
					icon: 'icon-Plus',
					title: '店铺'
				}, {
					icon: 'icon-saoma',
					title: '客服'
				}],
				rightList: [{
					title: '购物车'
				}, {
					title: '立即购买'
				}]
			}
		}
	},
	methods: {
		onShop(obj) {
			alert(obj.title)
		}
	},
	components: {
		ShopButton,
	}
}
</script>

<style lang="sass">

</style>
