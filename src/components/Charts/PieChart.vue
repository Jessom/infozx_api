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
import 'echarts/lib/chart/pie'
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
			let opt = {
				title: {
					text: '',
					x: 'center'
				},
				series: d.series,
				legend: {
					show: true,
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
			let styleDef = {
				type: 'pie',
				radius: ['20%', '40%'],
        center: ['50%', '50%'],
        label: {
        	normal: { show: true, position: 'inside', formatter: "{d}%" }
        }
			}
			let style = mui.extend(true, {}, styleDef, this.options.style)
			for(let item of this.options.list) {
				names.push(item.name)
			}
			let d = [mui.extend(true, {}, style, {data: this.options.list})]
			
			return {series: d, names}
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