<template lang="html">
  <div class="container">
  	<sort
  		:options='opt1'
			:lefticon='opt1.lefticon'
			:screenColor='opt1.screenColor'
			@onSort='onSort'
			@onSortScreen='onSortScreen'
			@onSortLeft='onSortLeft' />

  	<div class="mt10">
  		<sort
	  		:options='opt2'
	  		@onSort='onSort2'/>
  	</div>
	</div>
</template>

<script>
import Sort from '@/components/Other/Sort.vue'
export default {
	data() {
		return {
			opt1: {
				screen: true,
				default: 1,
				left: true,
				screenColor: false,
				lefticon: 'icon-solid-person',
				list: [{
					title: '综合',
					icondir: true,
					issort: true
				}, {
					title: '价格',
					icondir: false,
					issort: false
				}, {
					title: '距离',
					icondir: true,
					issort: false
				}]
			},
			opt2: {
				theme: true,
				default: 0,
				list: [{
					title: '综合',
					icondir: true,
					issort: true
				}, {
					title: '价格',
					icondir: false,
					issort: false
				}, {
					title: '距离',
					icondir: true,
					issort: false
				}]
			}
		}
	},
	methods: {
		// 筛选
		onSortScreen() {
			console.log('点击了筛选按钮')
			this.opt1.screenColor = !this.opt1.screenColor
		},
		onSort(obj) {
			console.log(obj)
			this.opt1.default = obj.index 		// 切换默认选中项
			// 切换箭头方向
			this.opt1.list[obj.index].icondir = !this.opt1.list[obj.index].icondir
		},
		onSort2(obj) {
			console.log(obj)
			this.opt2.default = obj.index
			this.opt2.list[obj.index].icondir = !this.opt2.list[obj.index].icondir
		},
		onSortLeft() {
			this.opt1.lefticon = this.opt1.lefticon === 'icon-users' ? 'icon-solid-person' : 'icon-users'
		}
	},
	components: {
		Sort
	}
}
</script>

<style lang="scss">
</style>
