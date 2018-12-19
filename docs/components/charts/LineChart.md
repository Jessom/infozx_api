# LineChart
[Demo](http://watasi.gitee.io/infozx_api/dist/#/line.html)

```bash
cnpm install --save echarts vue-echarts-v3
```
::: tip 折线图
请多多参阅[官方文档](http://echarts.baidu.com/option3.html#title)
:::

## 示例
```vue{11}
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
|showArea|Boolean|false|是否显示区域填充|
|opacity|Number|-|填充区域透明度，取值 0 - 1|
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
> [官方文档](http://echarts.baidu.com/option3.html#legend)

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