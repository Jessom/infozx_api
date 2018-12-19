<template>
	<div class="z-count-down-wrap">
		<div class="z-time-wrap">
			<span class="day time">{{time.dd}}</span>
			<span class="flag">天</span>
			<span class="day time">{{time.hh}}</span>
			<span class="flag">小时</span>
			<span class="day time">{{time.mm}}</span>
			<span class="flag">分</span>
			<span class="day time">{{time.ss}}</span>
			<span class="flag">秒</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			over: false,
			time: { dd: '0', hh: '0', mm: '0', ss: '0' }
		}
	},
	props: {
		curentTime: {
			type: String,
			default: `/Date(${Date.now()})/`
		},
		setTime: {
			type: String,
			default: `/Date(${Date.now()})/`
		},
		max: {
			type: Number,
			default: 24
		}
	},
	created() {
		let c = this.formatDate(this.curentTime)
		let timer = setInterval(() => {
			let start = (c += 1000)
			let end = this.getOoverdue()
			let r = this.CountDown(start, end)
			if(!r) {
				clearInterval(timer)
				this.$emit('over', true)
			}
		}, 1000)
	},
	methods: {
		CountDown(start, end) {
			let time = end - start
			let dd = parseInt(time / 1000 / 60 / 60 / 24)
			let hh = this.unshiftZero(parseInt(time / 1000 / 60 / 60 % 24))
			let mm = this.unshiftZero(parseInt(time / 1000 / 60 % 60))
			let ss = this.unshiftZero(parseInt(time / 1000 % 60))
			this.time = { dd, hh, mm, ss }
			if(time <= 0) {
				return false
			}
			return true
		},
		unshiftZero(t) {
			return t > 9 ? t : `0${t}`
		},
		// 计算失效时间
		getOoverdue() {
			let time = this.formatDate(this.setTime) + this.max * 60 * 60 * 1000
			return time
		},
		// 格式化日期格式
		formatDate(time) {
			if(time.includes('/Date(')) {
				time = time.replace('/Date(', '').replace(')/', '')
			}
			return Number(time)
		}
	}
}
</script>

<style lang='scss'>
$timeSize: 26px;
.z-count-down-wrap {
	text-align: center;
	.z-time-wrap { display: inline-block; text-align: left; }
	.time, .flag { display: inline-block; }
	.time { width: $timeSize; line-height: $timeSize; background-color: #f60; border-radius: 6px; text-align: center; color: #fff; }
}
</style>
