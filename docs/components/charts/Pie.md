# Pie(饼图)
[Demo](https://watasi.cn/infozx_api/dist/#/pie)

```bash
cnpm install v-charts echarts -save
```

::: tip 饼图
请多多参阅[官方文档](https://v-charts.js.org/#/)
:::

## 示例
```vue{10}
<template lang="html">
  <div class="container">
		<pie-chart :options='pie1' @chartClick='chartClick' />
		<pie-chart :options='pie2' @chartClick='chartClick' />
		<pie-chart :options='pie3' @chartClick='chartClick' />
	</div>
</template>

<script>
import PieChart from '@/components/Charts/Pie.vue'
export default {
	data() {
		return {
			pie1: {
				xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
				list: [123, 425, 362, 142, 362, 324, 256]
      },
      pie2: {
				xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
				labelPosition: 'inside',
				list: [123, 425, 362, 142, 362, 324, 256]
			},
      pie3: {
				xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
				radius: 50,
				list: [123, 425, 362, 142, 362, 324, 256]
			}
		}
	},
	methods: {
		chartClick(e) {
			console.log(e)
		}
	},
	components: {
		PieChart
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
|labelPosition|String|outside|图表上的文本标签位置，取值`inside`, `outside`|
|radius|Number|-|饼图半径|
|list|Array|-|图表渲染数据|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|chartClick|e|点击事件|