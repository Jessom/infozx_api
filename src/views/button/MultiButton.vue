<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div style="height: 15px"></div>
			<MultiButton :options='opt1' @onMulti='onMulti' />
			<div style="height: 15px"></div>
			<MultiButton :options='opt2' @onMulti='onMulti' />
			<div style="height: 15px"></div>
			<MultiButton :options='opt3' @onMulti='onMulti' />
			<div style="height: 15px"></div>
			<MultiButton :options='opt4' @onMulti='onMulti' />
			<MultiButton :options='opt5' @onMulti='onMulti' />
		</div>
	</div>
</template>

<script>
import MultiButton from '@/components/Buttons/MultiButton.vue'
export default {
	data() {
		return {
			opt1: {
				isFixed: false,
				list: [{
					title: '我的',
					icon: 'icon-saoma'
				}]
			},
			opt2: {
				isFixed: false,
				list: [{
					title: '我的',
					icon: 'icon-saoma'
				}, {
					title: '你的',
					icon: 'icon-jiantouyou'
				}]
			},
			opt3: {
				isFixed: false,
				list: [{
					title: '我的',
					icon: 'icon-saoma'
				}, {
					title: '你的',
					icon: 'icon-jiantouyou'
				}, {
					title: '他的',
					icon: 'icon-Plus'
				}]
			},
			opt4: {
				isFixed: false,
				list: [{
					title: '我的',
					icon: 'icon-saoma'
				}, {
					title: '你的',
					icon: 'icon-jiantouyou'
				}, {
					title: '他的',
					icon: 'icon-Plus'
				}, {
					title: '大家的',
					icon: 'icon-sousuo'
				}]
			},
			opt5: {
				list: [{
					title: '菜单',
					icon: 'icon-sousuo'
				}, {
					title: '人员',
					icon: 'icon-saoma'
				}, {
					title: '客服',
					icon: 'icon-saoma'
				}, {
					title: '店铺',
					icon: 'icon-Plus'
				}, {
					title: '立即购买',
					icon: 'icon-Plus'
				}]
			}
		}
	},
	methods: {
		onMulti(obj) {
			alert(obj.title)
		}
	},
	components: {
		MultiButton
	}
}
</script>

<style lang="sass">

</style>
