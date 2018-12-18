# WeekCalendar
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/weekCalendar.html)
> 周日历

```bash
+ <link rel="stylesheet" href="../static/common/js/swiper/swiper.css">
+ <script src="../static/common/js/swiper/swiper.js"></script>
```

## 示例
```vue{11}
<template>
	<div class="container">
		<week-calendar
			:actived='list'
			@click='click'
			ref='calendar' />
	</div>
</template>

<script>
import WeekCalendar from '@/components/TimeAxis/WeekCalendar.vue'
export default {
	data() {
		return {
			list: []
		}
	},
	created() {
		setTimeout(() => {
			this.list = [{
				time: '2018-07-30',
				flag: 'info'
			}, {
				time: '2018-07-31',
				flag: 'success'
			}, {
				time: '2018-08-01',
				flag: 'danger'
			}, {
				time: '2018-08-02',
				flag: 'warning'
			}, {
				time: '2018-08-08',
				flag: 'danger'
			}, {
				time: '2018-08-15',
				flag: 'danger'
			}]

			setTimeout(() => this.$refs.calendar.initList(null), 0)
		}, 1500)
	},
	methods: {
		click(item) {
			console.log(item)
		}
	},
	components: {
		WeekCalendar
	}
}
</script>

<style lang='scss'>
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|actived|Array|-|这几天有事|

### actived
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|time|String|-|有事的日期, `yyyy-MM-dd`格式|
|flag|String|-|事情的优先级, 取值`danger`、`warning`、`info`、`success`|

- danger: #F56C6C
- warning: #E6A23C
- info: #909399
- success: #67C23A

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|click|{text, day, month, year, [flag]}|点击事件|

## refs
|事件|参数|说明|
|:---:|:---:|:---:|
|initList|date|重选渲染数据，异步请求数据的话，请务必执行该方法|

```javascript
axios.post(`xxx`, {})
	.then(res => {
		this.actived = [{ time: '2018-01-01', flag: 'danger' }]
		// 注意，要加上setTimeout()，一定要加的
		setTimeout(() => this.$refs.WeekCalendar.initList(null), 0)
	})
```