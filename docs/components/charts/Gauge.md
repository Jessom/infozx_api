# Gauge
[Demo](http://watasi.gitee.io/infozx_api/dist/#/gauge.html)

```bash
cnpm install v-charts echarts -save
```
::: tip 仪表盘
请多多参阅[官方文档](https://v-charts.js.org/#/)
:::

## 示例
```vue{16}
<template lang="html">
  <div class="container mui-clearfix">
		<div class="gauge mui-pull-left">
			<gauge :options='gauge1' />
		</div>
		<div class="gauge mui-pull-left">
			<gauge :options='gauge2' />
		</div>
		<div class="gauge mui-pull-left">
			<gauge :options='gauge3' />
		</div>
	</div>
</template>

<script>
import Gauge from '@/components/Charts/Gauge.vue'
export default {
	data() {
		return {
			gauge1: { width: '100%', value: 0.26, name: '阶段计划' },
			gauge2: { width: '100%', value: 0.10, name: '月计划' },
			gauge3: { width: '100%', value: 0.83, name: '周计划' },
		}
	},
	methods: {
		
	},
	components: {
		Gauge
	}
}
</script>

<style lang="scss">
.container { padding: 0 10px; background-color: #fff; }
.gauge { width: 33.33%; padding: 0 5px; }
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|width|String|33.33vw|生成的仪表盘宽度|
|height|String|33.33vw|生成的仪表盘高度|
|type|String|percent|仪表盘类型，默认`百分比`,|
|name|String|-|仪表盘名字|
|nameSize|Number|14|仪表盘名字字号|
|min|Number|0|仪表盘范围最小值|
|max|Number|1|仪表盘范围最大值|
|stage|Array|[[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']]|仪表盘阶段划分，默认三个阶段|
|sshowAxisLable|Boolean|false|是否显示仪表盘上 刻度 文字|
|showDetail|Boolean|true|是否显示仪表盘上 详情数据，就是百分比那个 文字|
