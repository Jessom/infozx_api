<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div class="mb10">
				<text-cell :options='opt1' @onCellMenuClick='onCellMenuClick' @onCellClick='onCellClick' />
			</div>

			<div class="mb10">
				<text-cell :options='opt2' @onCellMenuClick='onCellMenuClick' @onCellClick='onCellClick' />
			</div>
		</div>
	</div>
</template>

<script>
import TextCell from '@/components/Cell/TextCell.vue'
export default {
	data() {
		return {
			opt1: {
				data: {
					title: '设置',
					text: '查看更多'
				},
				list: [{
					id: 1,
					icon: 'icon-sousuo orange-color',
					title: '搜索',
					badges: [{
						title: '已分配',
						background: 'green'
					}, {
						title: '未分配',
					}]
				}, {
					id: 2,
					icon: 'icon-saoma base-color',
					title: '扫码',
				}]
			},
			opt2: {
				showHead: false,
				list: [{
					title: '安全'
				}, {
					title: '绑定'
				}]
			}
		}
	},
	methods: {
		onCellMenuClick(obj) {
			alert(obj.data.title)
		},
		onCellClick(obj) {
			alert(obj.title)
		}
	},
	components: {
		TextCell,
	}
}
</script>

<style lang="sass">

</style>
