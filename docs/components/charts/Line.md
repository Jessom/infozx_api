# Line
[Demo](http://watasi.gitee.io/infozx_api/dist/#/line)

```bash
cnpm install v-charts echarts -save
```
::: tip 折线图
请多多参阅[官方文档](https://v-charts.js.org/#/)
:::

## 示例
```vue{11}
<template lang="html">
  <div class="container">
		<line-chart :options='line1' @chartClick='chartClick' />
		<line-chart :options='line2' @chartClick='chartClick' />
		<line-chart :options='line3' @chartClick='chartClick' />
		<line-chart :options='line4' @chartClick='chartClick' />
	</div>
</template>

<script>
import LineChart from '@/components/Charts/Line.vue'
export default {
	data() {
		return {
			line1: {
				xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				list: [{
					name: '张三',
					data: [123, 425, 362, 142, 362, 324, 256]
				}, {
					name: '李四',
					data: [153, 352, 256, 241, 456, 325, 269]
				}, {
					name: '王五',
					data: [142, 452, 263, 325, 398, 246, 325]
				}]
			},
			line2: {
				xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				label: true,
				list: [{
					name: '张三',
					data: [123, 425, 362, 142, 362, 324, 256]
				}, {
					name: '李四',
					data: [153, 352, 256, 241, 456, 325, 269]
				}, {
					name: '王五',
					data: [142, 452, 263, 325, 398, 246, 325]
				}]
			},
			line3: {
				xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				area: true,
				list: [{
					name: '张三',
					data: [123, 425, 362, 142, 362, 324, 256]
				}, {
					name: '李四',
					data: [153, 352, 256, 241, 456, 325, 269]
				}, {
					name: '王五',
					data: [142, 452, 263, 325, 398, 246, 325]
				}]
			},
			line4: {
				xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				rotate: 45,
				list: [{
					name: '张三',
					data: [123, 425, 362, 142, 362, 324, 256]
				}, {
					name: '李四',
					data: [153, 352, 256, 241, 456, 325, 269]
				}, {
					name: '王五',
					data: [142, 452, 263, 325, 398, 246, 325]
				}]
			}
		}
	},
	methods: {
		chartClick(e) {
			console.log(e)
		}
	},
	components: {
		line-chart
	}
}
</script>

<style lang="scss">
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|xAxis|Array|-|x轴，如上面demo|
|label|Boolean|false|图表上的文本标签位置|
|area|Boolean|false|堆叠面积图|
|rotate|Number|0|横坐标的倾斜角度|
|list|Array|-|图表渲染数据，[查看list](#list)|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|name|String|-|谁的数据|
|data|Array|-|数据内容|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|chartClick|e|点击事件|