<template lang="html">
  <div class="container">
		<bar-chart :options='bar1' @onBarClick='onBarClick' />
		<bar-chart :options='bar2' @onBarClick='onBarClick' />
		<bar-chart :options='bar3' @onBarClick='onBarClick' />
		<bar-chart :options='bar4' @onBarClick='onBarClick' />
		<bar-chart :options='bar5' @onBarClick='onBarClick' />
	</div>
</template>

<script>
import BarChart from '@/components/Charts/BarChart.vue'
export default {
	data() {
		return {
			bar1: {
				title: {
					text: 'x轴是周'
				},
				list: [{
					name: '张三',
					data: [15, 24, 18, 32, 44, 21, 26]
				}]
			},
			bar2: {
				title: {
					text: 'x轴是年',
					x: 'left'
				},
				x: 'month',
				list: [{
					name: '张三',
					data: [15, 24, 18, 32, 44, 21, 26, 15, 41, 32, 25, 16]
				}]
			},
			bar3: {
				title: {
					text: '自定义x轴',
					x: 'right'
				},
				x: [1, 2, 3, 4, 5, 6, 7],
				list: [{
					name: '张三',
					data: [15, 24, 18, 32, 44, 21, 26]
				}]
			},
			bar4: {
				title: {
					text: '带图例'
				},
				list: [{
					label: false,
					name: '张三',
					data: [15, 24, 18, 32, 44, 21, 26]
				}],
				legend: {
					show: true,
				}
			},
			bar5: {
				title: {
					text: '横向的'
				},
				list: [{
					name: '张三',
					data: [15, 24, 18, 32, 44, 21, 26]
				}],
				dir: 'horizontal'
			}
		}
	},
	methods: {
		onBarClick(obj) {
			console.log(obj)
		}
	},
	components: {
		BarChart
	}
}
</script>

<style lang="scss">
.container {
	padding: 50px 15px;
}
</style>
