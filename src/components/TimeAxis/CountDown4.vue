<template>
	<div class="z-count-down-wrap">
		<div class="z-time-wrap">
			<div class="year-wrap">
				<span class="year">{{y}}</span>
				<span class="flag">年</span>
			</div>

			<div class="time-wrap" :class='{"error": error}'>
				<span class="time year">{{m}}</span>
				<span class="flag">月</span>
				<span class="time year">{{d}}</span>
				<span class="flag">日</span>
				<span class="time year">{{h}}</span>
				<span class="flag">时</span>
				<span class="time year">{{mi}}</span>
				<span class="flag">分</span>
				<span class="time year">{{s}}</span>
				<span class="flag">秒</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			error: false,
			y: '',
			m: '',
			d: '',
			h: '',
			mi: '',
			s: ''
		}
	},
	props: {
		time: {
			type: String,
			default: '2018-01-01 12:00:00'
		},
		max: {
			type: Number,
			default: 24
		}
	},
	mounted() {
		
	},
	watch: {
		time(val) {
			let t = tools.getTimestamp(val) + (this.max * 60 * 60 * 1000)
			let time = new Date(t)
			let min = tools.getTimestamp(val)
			this.setVal(time)

			let inter = setInterval(() => {
				time -= 1000
				if(time <= min) {
					clearInterval(inter)
					this.error = true
				}
				this.setVal(new Date(time))
			}, 1000)
		}
	},
	methods: {
		setVal(t) {
			this.y = t.getFullYear()
			this.m = this.unshiftZero(t.getMonth(), 1)
			this.d = this.unshiftZero(t.getDate())
			this.h = this.unshiftZero(t.getHours())
			this.mi = this.unshiftZero(t.getMinutes())
			this.s = this.unshiftZero(t.getSeconds())
		},
		unshiftZero(t, f=0) {
			return t > 9 ? t : `0${t+f}`
		}
	}
}
</script>

<style lang='scss'>
$itemSize: 26px;
.z-count-down-wrap {
	text-align: center;
	.z-time-wrap { display: inline-block; margin: 0 auto; text-align: left; }
	.time { display: inline-block; width: $itemSize; line-height: $itemSize; text-align: center; background-color: #f60; color: #fff; border-radius: 6px;}
	.error {
		.time {
			background-color: red;
		}
	}
}
</style>
