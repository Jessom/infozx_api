<template lang="html">
  <div class="container">
		<pie-chart :options='pie1' @onBarClick='onBarClick' />
		<pie-chart :options='pie2' @onBarClick='onBarClick' />
		<pie-chart :options='pie3' @onBarClick='onBarClick' />
		<pie-chart :options='pie4' @onBarClick='onBarClick' />

		<HeadCell :options='opt' />
	</div>
</template>

<script>
import PieChart from '@/components/Charts/PieChart.vue'
import HeadCell from '@/components/Cell/HeadCell.vue'
export default {
	data() {
		return {
			opt: {
				data: {
					title: '嘻嘻哈哈',
					tagColor: 'red',
					tag: 'icon-jiantouyou'
				}
			},
			pie1: {
				title: {
					text: '环形'
				},
				list: [{
					value: 20,
					name: '张三'
				}, {
					value: 15,
					name: '李四'
				}, {
					value: 23,
					name: '王五'
				}]
			},
			pie2: {
				showLabel: false,
				title: {
					text: '饼形'
				},
				list: [{
					value: 20,
					name: '张三'
				}, {
					value: 15,
					name: '李四'
				}, {
					value: 23,
					name: '王五'
				}],
				style: {
					radius: ['0', '40%']
				}
			},
			pie3: {
				title: {
					text: '图例垂直显示'
				},
				legend: {
					orient: 'vertical',
				},
				list: [{
					value: 20,
					name: '张三'
				}, {
					value: 15,
					name: '李四'
				}, {
					value: 23,
					name: '王五'
				}]
			},
			pie4: {
				title: {
					text: '不带图例'
				},
				legend: {
					show: false,
				},
				list: [{
					value: 20,
					name: '张三'
				}, {
					value: 15,
					name: '李四'
				}, {
					value: 23,
					name: '王五'
				}],
				style: {
					radius: ['0', '40%'],
					label: {
						normal: { formatter: "{b} \n {d}% \n {c}" }
					}
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
		PieChart,
		HeadCell
	}
}
</script>

<style lang="scss" scoped>
.container {
	padding: 50px 15px;
}
</style>
