# ProgressChart
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/progressChart.html) <br />

::: warning 警告
该组件不依赖`echarts`，而是依赖阿里的`f2js` <br />
使用该组件时，请在对应的HTML文件中移入以下js文件
:::
``` html
<script src="../static/common/js/f2.js" charset="utf-8"></script>
```

::: tip 环形进度条
[官方文档](https://antv.alipay.com/zh-cn/f2/3.x/index.html)
:::

## 示例
``` vue{12}
<template>
	<div>
		<progress-chart
			ref='progress' />
		<input type="text" v-model.number='max'>
		<input type="text" v-model.number='cur'>
		<button class="mui-btn-block" @tap='redn'>渲染</button>
	</div>
</template>

<script>
import ProgressChart from '@/components/Charts/ProgressChart.vue'
export default {
	data() {
		return {
			max: 100,
			cur: 30
		}
	},
	mounted() {
		this.redn()
	},
	methods: {
		redn() {
			if(this.cur > this.max) {
				mui.toast("兄台，请不要开玩笑")
				return
			}
			this.$refs.progress.render(this.cur, this.max)
			this.$refs.progress.renderText('打卡/总人', {}, ['50%', '42%'])
			this.$refs.progress.renderText(`${this.cur}/${this.max}`, {
				fontSize: 20,
				fill: '#f60'
			}, ['50%', '53%'])
			this.$refs.progress.renderAgain()
		},
	},
	components: {
		ProgressChart
	}
}
</script>

<style lang='scss'>
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|coord|Object|-|配置坐标系，[查看title](#coord)|
|arcStyle|Object|-|表头，[查看title](#title)|

### coord
[官方文档](https://antv.alipay.com/zh-cn/f2/3.x/api/chart.html#_coord)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|transposed|Boolean|true|是否发生转置|
|innerRadius|Number|0.8|绘制环图时，设置内部空心半径，相对值，0 至 1 范围|
|radius|Number|0.85|设置圆的半径，相对值，0 至 1 范围|

### arcStyle
[官方文档](https://antv.alipay.com/zh-cn/f2/3.x/api/chart.html#_coord)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|lineWidth|Number|20|粗细|
|stroke|String|#ccc|颜色|

## refs
|事件|参数|说明|
|:---:|:---:|:---:|
|render|cur, max|渲染图标主方法，cur为当前值，max为最大值|
|renderText|content, style, position|渲染中间文字信息，[style](#style), [position](#position)|
|renderAgain|-|执行渲染操作|

### style
type: Object

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|fontSize|Number|14|字号|
|fill|String|'#ccc'|字体颜色|

### position
type: Array <br />
示例: `['50%', '50%']`
- 第一个代表`左右偏移值`，默认'50%'
- 第二个代表`上下偏移值`，默认'50%'
