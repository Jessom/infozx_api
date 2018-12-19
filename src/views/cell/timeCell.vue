<template>
	<div>
		<time-cell
			:list='list'
			@onCellClick='onCellClick' />
	</div>
</template>

<script>
import timeCell from '@/components/Cell/TimeCell.vue'
export default {
	data() {
		return {
			list: [{
				time: '5月25日',
				data: [{
					text: '考勤签到 未签到',
				}, {
					text: '考勤签退 未签退',
				}]
			}, {
				time: '5月24日',
				data: [{
					text: '考勤签到 09:24',
					tag: '迟到'
				}, {
					text: '考勤签退 04:35',
					tag: '早退'
				}]
			}, {
				time: '5月23日',
				data: [{
					text: '考勤签到 08:24',
				}, {
					text: '考勤签退 07:41',
				}, {
					text: '考勤签退 07:41',
				}]
			}, {
				time: '5月22日',
				data: [{
					text: '缺勤',
				}]
			}, {
				time: '5月21日',
				data: [{
					text: '休息',
				}]
			}]
		}
	},
	methods: {
		onCellClick(obj) {
			console.log(obj)
		}
	},
	components: {
		timeCell
	}
}
</script>

<style lang='scss' scoped>
.active {
	display: inline-block;
	padding: 3px 7px;
}
</style>