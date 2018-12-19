# BarChart
[Demo](http://watasi.gitee.io/infozx_api/dist/#/bar.html)
```bash
cnpm install --save echarts vue-echarts-v3
```

::: tip 柱状图表
请多多参阅[官方文档](http://echarts.baidu.com/option3.html#title)
:::

## 示例
```vue{11}
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
				showLabel: true,
				title: {
					text: 'x轴是年',
					x: 'left'
				},
				x: 'month',
				list: [{
					name: '张三',
					data: [15, 24, 18, 32, 44, 21, 26, 15, 41, 32, 25, 16],
					color: '#f40'
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
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|
|height|String|300px|图表高度|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|Object|-|表头，[查看title](#title)|
|xAxis|Object|-|x轴，[查看xAxis](#xAxis)|
|yAxis|Object|-|y轴，[查看yAxis](#yAxis)|
|legend|Object|-|图例，[查看legend](#legend)|
|dir|String|vertical|图表显示方式，横向或纵向，取值`horizontal`、`vertical`(主要是调换`xAxis`、`yAxis`)|
|showLabel|Boolean|false|是否显示图形上的文本标签|
|labelPos|String|top|图形上的文本标签位置，`top`、`bottom`、`left`、`right`|
|x|Array or String|week|x轴数据，提供`week`、`month`两个默认选项|
|list|Array|-|**必须**，图表渲染数据，[查看list](#list)|

### title
[官方文档](http://echarts.baidu.com/option3.html#title)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|text|String|''|主标题文本|
|x|String|center|对齐方式|

### xAxis
[官方文档](http://echarts.baidu.com/option3.html#xAxis)

### yAxis
[官方文档](http://echarts.baidu.com/option3.html#yAxis)

### legend
[官方文档](http://echarts.baidu.com/option3.html#legend)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|show|Boolean|false|是否显示图例|
|bottom|Number|0|图例在图表下面|
|data|Array|-|默认值通过内部方法获取`list`中的`name`属性|

### list
[官方文档](http://echarts.baidu.com/option3.html#series)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|name|String|-|使用图例的时候，请务必添加name属性|
|data|Array|-|数据|
|color|String|-|颜色|


## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onReady|instance|加载完成事件|
|onBarClick|{event, instance, echarts}|点击事件|