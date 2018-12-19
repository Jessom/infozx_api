<template>
	<div class="z-chart-container" :style='{height: height}'>
		<IEcharts
			:option='opt'
			@ready="onReady"
			@click="onClick" />
	</div>
</template>

<script>
import IEcharts from '@/common/plug/chart/lite.js'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
export default {
	props: {
		options: {
			type: Object,
			default: function() {
				return {}
			}
		},
		height: {
			type: String,
			default: '300px'
		}
	},
	computed: {
		opt() {
			let d = this.handlerData()
			let axisData = this.xHandler(this.options.x)

			let opt = {
				title: {
					text: '',
					x: 'center'
				},
				xAxis: {
					type: 'category',
	        boundaryGap: true,
	        data: axisData
				},
				yAxis: {
					type: 'value'
				},
				series: d.series,
				legend: {
					show: false,
	        data: d.names,
	        bottom: 0
				},

				/*showArea: false,				// 是否显示区域填充
				opacity: 0.3,						// 填充区域透明度
				showLabel: false,				// 是否显示图形上的文本标签
				labelPos: 'top',				// 图形上的文本标签位置*/
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	methods: {
		// 处理数据
		handlerData() {
			let names = []
			let d = []
			for(let item of this.options.list) {
				let style = {
					type: 'line',
					areaStyle: this.options.showArea ? { color: item.color, opacity: this.options.opacity } : null,
					lineStyle: { color: item.color },
					label: {
	          normal: { show: this.options.showLabel, position: this.options.labelPos }
	        }
				}
				
				let i = mui.extend(true, {}, style, item)
				d.push(i)
				names.push(i.name)
			}
			return {series: d, names}
		},
		// 处理x轴
		xHandler(type='week') {
			const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			const month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
			return type==='week' ? week : (type==='month' ? month : type)
		},
		onReady(instance) {
			this.$emit("onReady", instance)
		},
		onClick(event, instance, echarts) {
			this.$emit("onBarClick", { event, instance, echarts })
		}
	},
	components: {
		IEcharts
	}
}
</script>

<style lang='scss'>
.z-chart-container {
}
</style>