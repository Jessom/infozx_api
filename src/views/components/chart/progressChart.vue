<template>
	<div>
		<progress-chart
			ref='progress' />
		<input type="text" v-model.number='max'>
		<input type="text" v-model.number='cur'>
		<button class="mui-btn-block" @tap='redn'>渲染</button>
	</div>
</template>

<script>
import ProgressChart from '@/components/Charts/ProgressChart.vue'
export default {
	data() {
		return {
			max: 100,
			cur: 30
		}
	},
	mounted() {
		this.redn()
	},
	methods: {
		redn() {
			if(this.cur > this.max) {
				mui.toast("兄台，请不要开玩笑")
				return
			}
			this.$refs.progress.render(this.cur, this.max)
			this.$refs.progress.renderText('打卡/总人', {}, ['50%', '42%'])
			this.$refs.progress.renderText(`${this.cur}/${this.max}`, {
				fontSize: 20,
				fill: '#f60'
			}, ['50%', '53%'])
			this.$refs.progress.renderAgain()
		},
	},
	components: {
		ProgressChart
	}
}
</script>

<style lang='scss'>
</style>