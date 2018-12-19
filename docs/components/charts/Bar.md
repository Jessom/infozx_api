# Bar
[Demo](http://watasi.gitee.io/infozx_api/dist/#/bar.html)
``` bash
cnpm install v-charts echarts -save
```

::: tip 柱状图
请多多参阅[官方文档](https://v-charts.js.org/#/)
:::

## 示例
``` vue{9}
<template lang="html">
  <div class="container">
		<Bar :options='bar1' @chartClick='chartClick' />
		<Bar :options='bar2' @chartClick='chartClick' />
	</div>
</template>

<script>
import Bar from '@/components/Charts/Bar.vue'
export default {
	data() {
		return {
			bar1: {
				xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				labelPosition: 'top',
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
			bar2: {
				xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				stack: ['张三', '李四', '王五'],
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
		Bar
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

## options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|xAxis|Array|-|x轴，如上面demo|
|labelPosition|String|-|图表上的文本标签位置，不传不显示，取值`top`、`bottom`、`center`|
|stack|Array|-|堆叠柱状图|
|list|Array|-|图表渲染数据，[查看list](#list)|

## list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|name|String|-|谁的数据|
|data|Array|-|数据内容|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|chartClick|e|点击事件|