<template lang="html">
  <div class="container">
		<line-chart :options='line1' />
		<line-chart :options='line2' />
		<line-chart :options='line3' />
		<line-chart :options='line4' />
	</div>
</template>

<script>
import LineChart from '@/components/Charts/LineChart.vue'
export default {
	data() {
		return {
			line1: {
				title: {
					text: 'x轴是周'
				},
				list: [{
					name: '张三',
					data: [15, 24, 18, 32, 44, 21, 26]
				}]
			},
			line2: {
				showArea: true,
				opacity: 0.3,
				showLabel: true,
				title: {
					text: 'x轴是年 && 自定义颜色',
					x: 'left'
				},
				x: 'month',
				list: [{
					name: '张三',
					data: [12, 18, 12, 52, 14, 23, 41, 21, 8, 45, 14, 19],
					color: 'red',
				}]
			},
			line3: {
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
			line4: {
				title: {
					text: '带图例'
				},
				list: [{
					label: false,
					name: '张三',
					data: [15, 24, 18, 32, 44, 21, 26]
				}, {
					label: false,
					name: '李四',
					data: [17, 23, 15, 38, 52, 14, 20]
				}],
				legend: {
					show: true,
				}
			}
		}
	},
	methods: {
		onBarClick(obj) {
			console.log(obj)
		}
	},
	components: {
		LineChart
	}
}
</script>

<style lang="scss" scoped>
.container {
	padding: 50px 15px;
}
</style>
