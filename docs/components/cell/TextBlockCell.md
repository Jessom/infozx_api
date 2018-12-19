# TextBlockCell
[Demo](http://watasi.gitee.io/infozx_api/dist/#/textBlockCell)

## 示例
``` vue{10}
<template>
	<div style="padding:15px 0;background:red">
		<text-block-cell
			:list='list'
			@onCellClick='onCellClick' />
	</div>
</template>

<script>
import TextBlockCell from '@/components/Cell/TextBlockCell.vue'
export default {
	data() {
		return {
			list: [{
				desc: '按时出勤',
				title: '0天'
			}, {
				desc: '缺勤',
				title: '7天'
			}, {
				desc: '异常出勤',
				title: '3天'
			}, {
				desc: '请假出差',
				title: '0天'
			}, {
				desc: '休息',
				title: '2天'
			}]
		}
	},
	methods: {
		onCellClick(obj) {
			console.log(obj)
		}
	},
	components: {
		TextBlockCell
	}
}
</script>

<style lang='scss'>
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染数据, [查看list详情](#list)|
|options|Object|-|配置参数, [查看options详情](#options)|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|上面的文字|
|desc|String|-|下面的文字|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|border|Boolean|true|是否显示边框|
|theme|Boolean|true|是否主题背景色，ture 主题背景白字，false 透明背景黑字|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCellClick|{title,desc}|点击事件|