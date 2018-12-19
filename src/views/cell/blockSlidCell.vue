<template lang="html">
  <div class="container">
		<div class="mui-content">
			<block-slid-cell :options='opt1' @onCellMenuClick='onCellMenuClick' @onCellClick='onCellClick' />

			<block-slid-cell :options='opt2' @onCellMenuClick='onCellMenuClick' @onCellClick='onCellClick' />
		</div>
	</div>
</template>

<script>
import BlockSlidCell from '@/components/Cell/BlockSlidCell.vue'
export default {
	data() {
		return {
			opt1: {
				showHead: true,
				transparent: true,
				showMenu: false,
				showRightNav: true,
				data: {
					title: '可以左右滑动'
				},
				theme: true,
				list: [[{
					icon: 'icon-saoma',
					title: '首页'
				}, {
					icon: 'icon-saoma',
					title: '首页'
				}], [{
					icon: 'icon-saoma',
					title: '首页'
				}, {
					icon: 'icon-saoma',
					title: '首页'
				}]]
			},
			opt2: {
				showHead: true,
				transparent: true,
				showMenu: false,
				showRightNav: true,
				data: {
					title: '自定义'
				},
				block: true,
				indicator: true,
				list: [[{
					text: 'わ',
					style: 'green',
					title: '我的'
				}, {
					text: 'タ',
					style: 'orange',
					title: '你的'
				}, {
					text: 'し',
					style: 'blue',
					title: '他的'
				}, {
					text: '',
					style: '#f40',
					title: '菜单'
				}], [{
					icon: 'icon-saoma',
					style: '#f60',
					title: '首页'
				}, {
					text: 'わ',
					style: 'green',
					title: '我的'
				}, {
					text: 'タ',
					style: 'orange',
					title: '你的'
				}, {
					text: 'し',
					style: 'blue',
					title: '他的'
				}]]
			}
		}
	},
	methods: {
		onCellMenuClick(obj) {
			console.log(obj)
		},
		onCellClick(obj) {
			console.log(obj)
		}
	},
	components: {
		BlockSlidCell
	}
}
</script>

<style lang="sass">

</style>
