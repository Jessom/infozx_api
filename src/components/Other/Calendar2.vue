<template>
	<div class="container">
		<div class="calendar-container">
			<div class="calendar-head">
				<i class="iconfont left icon-left-copy" @tap='prevMonth'></i>
				<span class="text">{{cuMonth.year}}年{{cuMonth.month}}月</span>
				<i class="iconfont right icon-right" @tap='nextMonth'></i>
			</div>
			<div class="calendar-body">
				<div class="calendar-week">
					<span class="calendar-item calendar-head-item" v-for='(item, ind) in week' :key='ind'>{{item}}</span>
				</div>

				<!-- 上月 -->
				<!-- <div class="prev-calendar">
					<span class="calendar-item calendar-body-item" v-for='(item, ind) in prMonth.days' :key='ind'>{{item.day}}</span>
				</div> -->

				<div class="calendar-page">
					<div class="calendar-item calendar-body-item" :class='[item.class]' v-for='(item, ind) in cuMonth.days' :key='ind'>
						<span class='calendar-day' @tap='onSelect(item)' :class='{"active": item.active}'>{{item.day}}</span>
					</div>
				</div>

				<!-- 下月 -->
				<!-- <div class="next-calendar">
					<span class="calendar-item calendar-body-item" v-for='(item, ind) in neMonth.days' :key='ind'>{{item.day}}</span>
				</div> -->
			</div>
		</div>
	</div>

	<!-- <div class="container">
		<div class="card-wrap">
			<div class="card-item" :class='{"active": item.id===active}' v-for='(item, ind) in list' :key='ind'>
				<h3 class='title'>{{item.title}}</h3>
				<h4 class='desc'>{{item.desc}}</h4>
			</div>
		</div>
	</div> -->
</template>

<script>
import { getCurrentMonth } from '@/common/js/calendar'
export default {
	data() {
		return {
			week: ['日', '一', '二', '三', '四', '五', '六'],
			date: new Date(),
			cuMonth: {},			// 本月
			prMonth: {},			// 上月
			neMonth: {},			// 下月
			actived: []
		}
	},
	mounted() {
		// this.cuMonth = getCurrentMonth(this.date)
		this.getMonth(this.date)
		console.log(this.cuMonth)
	},
	methods: {
		getMonth(date) {
			/*let prev = new Date(date.getFullYear(), date.getMonth() - 1, 1)
			let next = new Date(date.getFullYear(), date.getMonth() + 1, 1)*/

			this.cuMonth = getCurrentMonth(date)
			/*this.prMonth = getCurrentMonth(prev)
			this.neMonth = getCurrentMonth(next)*/
		},
		prevMonth() {
			this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1)
			this.getMonth(this.date)
		},
		nextMonth() {
			this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1)
			this.getMonth(this.date)
		},
		currentMonth() {
			this.getMonth(new Date())
		},
		onSelect(obj) {
			let ind = this.actived.findIndex(item => item.date === obj.date)
			if(ind < 0) {
				this.actived.push(obj)
			} else {
				this.actived.splice(ind, 1)
			}
			obj.active = !obj.active

			console.log(this.actived)
		}
	}
}
/*export default {
	data() {
		return {
			active: 1,
			list: [{
				title: '中系科技',
				desc: '超级管理员',
				id: 1
			}, {
				title: '中系科技',
				desc: '研发管理员',
				id: 2
			}, {
				title: '中系科技',
				desc: '市场管理员',
				id: 3
			}, {
				title: '安得装饰',
				desc: '超级管理员',
				id: 4
			}, {
				title: '安得装饰',
				desc: '市场管理员',
				id: 5
			}]
		}
	},
	methods: {
		
	}
}*/
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.container {
	.calendar-container {
		background-color: #fff;
		.calendar-head {
			height: 44px;
			line-height: 44px;
			position: relative;
			text-align: center;
			.iconfont {
				position: absolute;
				width: 44px;
			}
			.left {left: 0;}
			.right {right: 0;}
		}
		.calendar-body {
			.calendar-item {
				text-align: center;
				display: inline-block;
				width: calc(100vw / 7);
				line-height: calc(100vw / 7);
				.calendar-day {
					display: inline-block;
					width: 26px;
					line-height: 26px;
					vertical-align: middle;
					&.active {
						background-color: #f60;
						color: #fff;
						border-radius: 50%;
					}
				}
			}
			.other-month {
				color: #ccc;
			}
			.current-month {
				color: #333;
			}
			.current {
				color: #f40;
			}
		}
	}
}

/* $angle: 45deg;
$range: 50vw;
$depth: 10;
html, body, .container {
	height: 100%;
}
.container {
	.card-wrap {
		background-color: lighten($baseColor, 20);
		padding: 15px;
		.card-item {
			margin-bottom: 15px;
			height: 115px;
			border-radius: 5px;
			padding: 15px;
			background-image: linear-gradient($angle, $baseColor $range, lighten($baseColor, $depth));
			.title, .desc {
				font-weight: normal;
			}
			.title {
				color: #fff;
			}
			.desc {
				color: rgba(255,255,255,.9);
				margin-top: 12px;
			}
			&.active {
				box-shadow: 1px 1px 7px -1px #fff;
			}
			&:nth-of-type(1) {
				background-image: linear-gradient($angle, $lightRedColor $range, lighten($lightRedColor, $depth));
			}
			&:nth-of-type(2) {
				background-image: linear-gradient($angle, $orangeColor $range, lighten($orangeColor, $depth));
			}
			&:nth-of-type(3) {
				background-image: linear-gradient($angle, $lightGreyColor $range, lighten($lightGreyColor, $depth));
			}
		}
	}
} */
</style>