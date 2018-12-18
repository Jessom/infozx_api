# Calendar
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/calendar.html)
> 日历

::: tip 文档
[点我查看](https://github.com/jinzhe/vue-calendar)文档
:::

## 示例
```vue{28}
<template>
	<div>
		<div>
			<p>选择范围</p>
			<calendar
				:range='calendar1.range'
				:lunar='calendar1.lunar'
				:value='calendar1.value'
				:begin='calendar1.begin'
				:end='calendar1.end'
				@select='rangem' />
			<div>开始时间： {{begin}}</div>
			<div>结束时间： {{end}}</div>
		</div>

		<div>
			<p>单选</p>
			<calendar
				:zero='calendar2.zero'
				:lunar='calendar2.lunar'
				:value='calendar2.value'
				@select='singlem' />
		</div>
	</div>
</template>

<script>
import Calendar from '@/components/Other/Calendar.vue'
export default {
	data() {
		return {
			// 选择范围
			begin: '',
			end: '',
			calendar1: {
				range: true,
				lunar: false,
				end: [2222, 12, 31],
				begin: [1990, 1, 1],
				value: [],
			},
			// 单选
			calendar2: {
				zero: true,
				lunar: false,
				value: [2018, 6, 5],
			}
		}
	},
	methods: {
		// 选择范围
		rangem(begin, end) {
			let b = [...begin]
			let e = [...end]
			b[1]++
			e[1]++
			this.begin = b.join('-')
			this.end = e.join('-')
		},
		// 单选
		singlem(val) {
			alert(val.join('-'))
		}
	},
	components: {
		Calendar
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
|value|Array|-|默认选中的日期|
|begin|Array|-|可以选择的开始时间|
|end|Array|-|可以选择的结束时间|
|range|Boolean|false|是否选中范围|
|zero|Boolean|false|是否单选|
|lunar|Boolean|false|是否显示农历|
|closed|Boolean|false|是否禁止操作|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|select|val|日期选择事件|
* range: true, 返回 begin, end两个值
* zero: true, 返回选中的日期
