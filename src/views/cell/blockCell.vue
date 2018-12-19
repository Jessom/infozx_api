<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div class="mb10">
				<block-cell :options='opt' @onCellClick='onCellClick' />
			</div>

			<div class="mb10">
				<block-cell :options='opt2' @onCellClick='onCellClick' />
			</div>

			<div class="mb10">
				<block-cell :options='opt3' @onCellClick='onCellClick' @onEdit='onEdit' />
				<button @tap='edit'>编辑</button>
			</div>
		</div>
	</div>
</template>

<script>
import BlockCell from '@/components/Cell/BlockCell.vue'
export default {
	data() {
		return {
			opt: {
				title: '菜单',
				showHead: true,
				transparent: true,
				showMenu: false,
				showRightNav: true,
				data: {
					title: '图标加文字'
				},
				quantity: 4,
				list: [{
					icon: 'icon-saoma',
					title: '首页'
				}, {
					icon: 'icon-saoma',
					title: '首页'
				}, {
					icon: 'icon-saoma',
					title: '首页'
				}, {
					icon: 'icon-saoma',
					title: '首页'
				}]
			},
			opt2: {
				title: '菜单',
				showHead: true,
				transparent: true,
				showMenu: false,
				showRightNav: true,
				data: {
					title: '自定义'
				},
				block: true,
				list: [{
					icon: 'icon-saoma',
					style: '#f60',
					title: '首页'
				}, {
					text: '',
					style: '#f40',
					title: '菜单'
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
				}]
			},
			opt3: {
				showHead: true,
				data:{
					title: 'HR'
				},
				block: true,
				quantity: 5,
				edit: false,
				list: [{
					icon: 'icon-saoma orange-bg',
					title: '首页',
					edit: true
				}, {
					icon: 'icon-saoma orange-bg',
					title: '首页',
					edit: false
				}, {
					icon: 'icon-saoma orange-bg',
					title: '首页',
					edit: false
				}, {
					icon: 'icon-saoma orange-bg',
					title: '首页',
					edit: true
				}, {
					icon: 'icon-saoma orange-bg',
					title: '首页',
					edit: true
				}]
			}
		}
	},
	methods: {
		onCellClick(obj) {
			alert(obj.title)
		},
		onEdit(obj) {
			console.log(obj)
		},
		edit() {
			this.opt3.edit = !this.opt3.edit
		}
	},
	components: {
		BlockCell,
	}
}
</script>

<style lang="sass">

</style>
