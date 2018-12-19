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
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
export default {
	data() {
		return {
			chartDef: {
				type: 'bar',
				label: {
          normal: {
            show: true,
            position: 'top'
          }
        }
			}
		}
	},
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
			this.chartDef.label.normal.position = this.options.dir==='horizontal' ? "right" : 'top'
			let d = this.handlerData()
			let axisData = this.xHandler(this.options.x)

			let x = {}, y = {}
			if(this.options.dir==='horizontal') {
				// 水平
				x = { type: 'value' }
				y = { type: 'category', data: axisData }
			} else {
				// vertical 垂直
				x = { type: 'category', data: axisData }
				y = { type: 'value' }
			}
			let opt = {
				title: {
					text: '',
					x: 'center'
				},
				xAxis: x,
				yAxis: y,
				series: d.series,
				legend: {
					show: false,
	        data: d.names,
	        bottom: 0
				},
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
				let i = mui.extend(true, {}, this.chartDef, item)
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