# PieChart
[Demo](http://watasi.gitee.io/infozx_api/dist/#/pie)

```bash
cnpm install --save echarts vue-echarts-v3
```

::: tip 饼图
请多多参阅[官方文档](http://echarts.baidu.com/option3#title)
:::

## 示例
```vue{11}
<template lang="html">
  <div class="container">
		<pie-chart :options='pie1' @onBarClick='onBarClick' />
		<pie-chart :options='pie2' @onBarClick='onBarClick' />
		<pie-chart :options='pie3' @onBarClick='onBarClick' />
		<pie-chart :options='pie4' @onBarClick='onBarClick' />
	</div>
</template>

<script>
import PieChart from '@/components/Charts/PieChart.vue'
export default {
	data() {
		return {
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
		PieChart
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
|legend|Object|-|图例，[查看legend](#legend)|
|style|Object|-|饼图配置信息，[查看style](#style)|
|list|Array|-|**必须**，图表渲染数据，[查看list](#list)|

### title
[官方文档](http://echarts.baidu.com/option3#title)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|text|String|''|主标题文本|
|x|String|center|对齐方式|

### legend
[官方文档](http://echarts.baidu.com/option3#legend)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|show|Boolean|false|是否显示图例|
|bottom|Number|0|图例在图表下面|
|data|Array|-|默认值通过内部方法获取`list`中的`name`属性|

### style
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|radius|Array|['20%', '40%']|饼图的半径，数组的第一项是内半径，第二项是外半径|
|center|Array|['50%', '50%']|饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标|
|label|Object|{ normal: { show: true, position: 'inside', formatter: "{d}%" } }|饼图图形上的文本标签，可用于说明图形的一些数据信息|

### list
[官方文档](http://echarts.baidu.com/option3#series)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|name|String|-|**必须**哦|
|data|Array|-|数据|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onReady|instance|加载完成事件|
|onBarClick|{event, instance, echarts}|点击事件|