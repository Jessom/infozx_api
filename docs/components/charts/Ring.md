# Ring
[Demo](http://watasi.gitee.io/infozx_api/dist/#/ring.html)

```bash
cnpm install v-charts echarts -save
```

::: tip 环形图
请多多参阅[官方文档](https://v-charts.js.org/#/)
:::

## 示例
```vue{11}
<template lang="html">
  <div class="container">
		<ring-chart :options='ring1' @chartClick='chartClick' />
		<ring-chart :options='ring2' @chartClick='chartClick' />
		<ring-chart :options='ring3' @chartClick='chartClick' />
		<ring-chart :options='ring4' @chartClick='chartClick' />
	</div>
</template>

<script>
import RingChart from '@/components/Charts/Ring.vue'
export default {
	data() {
		return {
			ring1: {
				xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
				list: [123, 425, 362, 142, 362, 324, 256]
      },
      ring2: {
        xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
        labelPosition: 'inside',
				list: [123, 425, 362, 142, 362, 324, 256]
      },
      ring3: {
        xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
        limit: 3,
				list: [123, 425, 362, 142, 362, 324, 256]
      },
      ring4: {
        xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
        radius: [10, 100],
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
		RingChart
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
|radius|Array|-|环图半径|
|limit|Number|-|限制显示条数环图|
|list|Array|-|图表渲染数据|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|chartClick|e|点击事件|