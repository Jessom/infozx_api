# TimeCell
[Demo](http://watasi.gitee.io/infozx_api/dist/#/timeCell)
> 时间cell

## 示例
``` vue{10}
<template>
	<div>
		<time-cell
			:list='list'
			@onCellClick='onCellClick' />
	</div>
</template>

<script>
import timeCell from '@/components/Cell/TimeCell.vue'
export default {
	data() {
		return {
			list: [{
				time: '5月25日',
				data: [{
					text: '考勤签到 未签到',
				}, {
					text: '考勤签退 未签退',
				}]
			}, {
				time: '5月24日',
				data: [{
					text: '考勤签到 09:24',
					tag: '迟到'
				}, {
					text: '考勤签退 04:35',
					tag: '早退'
				}]
			}, {
				time: '5月23日',
				data: [{
					text: '考勤签到 08:24',
				}, {
					text: '考勤签退 07:41',
				}, {
					text: '考勤签退 07:41',
				}]
			}, {
				time: '5月22日',
				data: [{
					text: '缺勤',
				}]
			}, {
				time: '5月21日',
				data: [{
					text: '休息',
				}]
			}]
		}
	},
	methods: {
		onCellClick(obj) {
			console.log(obj)
		}
	},
	components: {
		timeCell
	}
}
</script>

<style lang='scss'>
.active {
	display: inline-block;
	padding: 3px 7px;
}
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染数据, [查看list详情](#list)|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|time|String|-|日期|
|data|Array or String|-|为字符串直接渲染，为数组[点我查看](#data)|

### data
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|text|String|-|渲染主要内容|
|tag|String|-|左右边加红的字|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCellClick|{time,data}|点击事件|
