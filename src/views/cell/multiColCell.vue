<template>
	<div class="container">
		<multi-col-cell
			:options='opt'
			@onCellClick='onCellClick' />
	</div>
</template>

<script>
import MultiColCell from '@/components/Cell/MultiColCell.vue'
export default {
	data() {
		return {
			opt: {
				list: [{
					title: '打卡定位',
					descs: ['使用人：林动 林琅天', '位置：金门路1200号']
				}, {
					title: '市场部',
					descs: ['周期：周一 周二 周三 周四 周五 周六', '时间：09:00 - 17:30', '人数：7人']
				}, {
					title: '研发部',
					descs: ['周期：周一 周二 周三 周四 周五', '时间：09:00 - 18:00', '人数：7人']
				}]
			}
		}
	},
	methods: {
		onCellClick(obj) {
			console.log(obj)
		}
	},
	components: {
		MultiColCell
	}
}
</script>

<style lang='scss'>
</style>