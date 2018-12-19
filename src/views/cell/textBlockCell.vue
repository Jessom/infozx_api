<template>
	<div style="padding:15px 0;background:red">
		<text-block-cell
			:list='list'
			@onCellClick='onCellClick' />
	</div>
</template>

<script>
import TextBlockCell from '@/components/Cell/TextBlockCell.vue'
export default {
	data() {
		return {
			list: [{
				desc: '按时出勤',
				title: '0天'
			}, {
				desc: '缺勤',
				title: '7天'
			}, {
				desc: '异常出勤',
				title: '3天'
			}, {
				desc: '请假出差',
				title: '0天'
			}, {
				desc: '休息',
				title: '2天'
			}]
		}
	},
	methods: {
		onCellClick(obj) {
			console.log(obj)
		}
	},
	components: {
		TextBlockCell
	}
}
</script>

<style lang='scss'>
</style>