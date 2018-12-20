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