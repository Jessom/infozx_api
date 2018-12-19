<template>
	<div class="z-count-down-wrap">
		<div class="z-time-wrap">
			<span class="day time">{{d}}</span>
			<span class="flag">天</span>
			<span class="day time">{{h}}</span>
			<span class="flag">小时</span>
			<span class="day time">{{m}}</span>
			<span class="flag">分</span>
			<span class="day time">{{s}}</span>
			<span class="flag">秒</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			error: false,
			d: 0,
			h: 0,
			m: 0,
			s: 0
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
		console.log(this.max)
		console.log(this.secondsToDate(this.max * 60 * 60))
		this.countDown()
	},
	methods: {
		setVal(t) {
			this.d = this.unshiftZero(t.getDate())
			this.h = this.unshiftZero(t.getHours())
			this.m = this.unshiftZero(t.getMinutes())
			this.s = this.unshiftZero(t.getSeconds())
		},
		unshiftZero(t) {
			return t > 9 ? t : `0${t}`
		},
		// 将秒转化成天 时 分 秒
		secondsToDate(time) {
			if(!time) return
			let d = 0
			let h = 0
			let m = 0
			let s = 0
			// 转换成分
			if(time > 60 && time < 60 * 60) {
				m = parseInt(time / 60.0)
				s = parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60)
				this.m = Number(this.unshiftZero(m))
				this.s = Number(this.unshiftZero(s))
			} else if(time >= 60 * 60 && time < 60 * 60 * 24) {
				h = parseInt(time / 3600.0)
				m = parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)
				s = parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) - parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60)
				this.h = Number(this.unshiftZero(h))
				this.m = Number(this.unshiftZero(m))
				this.s = Number(this.unshiftZero(s))
			} else if(time >= 60 * 60 * 24) {
				d = parseInt(time / 3600.0 / 24)
				h = parseInt((parseFloat(time / 3600.0/24)-parseInt(time / 3600.0/24))*24)
				m = parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)
				s = parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) - parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60)
				this.d = Number(this.unshiftZero(d))
				this.h = Number(this.unshiftZero(h))
				this.m = Number(this.unshiftZero(m))
				this.s = Number(this.unshiftZero(s))
			}

			return { d, h, m, s }
		},
		// 倒计时
		countDown() {
			let inter = setInterval(() => {
				if(this.s > 0) {
					this.s = this.unshiftZero(this.s-1)
				} else if(this.m > 0) {
					this.m = this.unshiftZero(this.m - 1)
					this.s = 59
				} else if(this.h > 0) {
					this.h =  this.unshiftZero(this.h - 1)
					this.m = 59
					this.s = 59
				} else if(this.d > 0) {
					this.d = this.unshiftZero(this.d - 1)
					this.h = 59
					this.m = 59
					this.s = 59
				} else {
					console.log(498651)
					clearInterval(inter)
				}
			}, 1000)
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
