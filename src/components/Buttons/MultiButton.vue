<template>
	<div class="z-multi-wrap">
		<div style="height: 50px;" v-if='opt.isFixed'></div>
		<div class="multi-container" :class='{"one": list.length===1, "fixed": opt.isFixed}'>
			<div class="horizontal" :class='{"gradient": list.length<=2, "multi": list.length>2}'>
				<div class="horizontal-cell line" v-if='opt.list.length>=5'>
					<a href='#multi-more' class="iconfont icon-more more-btn"></a>
					<!-- <span class="title">{{item.title}}</span> -->
				</div>
				<div
					class="horizontal-cell line"
					:class='[
						item.position?"left":"",
						item.color ? "white":""
					]'
					v-for='(item, ind) in list' :key='ind'
					@tap='onMulti($event, item)'
					:style='{"background-color": item.background}'>
					<i class="iconfont" :class='item.icon'></i>
					<span class="title">{{item.title}}</span>
				</div>
			</div>
		</div>
		<div id="multi-more" class="mui-popover" v-if='more.length'>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell" v-for='(item, ind) in more' :key='ind' @tap='onMulti($event, item)'>
					<i class="iconfont" :class="item.icon"></i>
					{{item.title}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			more: [],			// 多余5个的
		}
	},
	props: {
		options: {
			type: Object,
			default: function() {
				return {}
			}
		}
	},
	computed: {
		opt() {
			let opt = {
				isFixed: true,
				list: []
			}
			return mui.extend({}, opt, this.options)
		},
		list() {
			let arr = []
			if(this.opt.list.length >= 5) {
				let l = [...this.opt.list]
				arr = l.splice(l.length - 3, l.length)
				this.more = l
			} else {
				arr = this.opt.list
			}
			return arr
		}
	},
	methods: {
		onMulti(e, obj) {
			if(this.more.length) {
				mui('#multi-more').popover('hide')
			}
			this.$emit('onMulti', obj)
		}
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
$height: 50px;
.z-multi-wrap {
	.multi-container{
		&.fixed {
			position: fixed;
			bottom: 0;
			&::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 1px;
				background-color: #c8c7cc;
				transform: scaleY(.3);
			}
		}
		.horizontal {
			width: 100%;
			height: $height;
			text-align: center;
			font-size: 1.8rem;
		}
		/*只有一个按钮*/
		&.one {
			padding: 0 15px;
			.horizontal {
				border-radius: 5px;
				height: 44px;
			}
		}
		/*两个以上*/
		.multi {
			.horizontal-cell.white {
				.iconfont, .title { color: #fff; }
			}
			.horizontal-cell.left {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				.iconfont { font-size: 1.6rem; top: 0; }
				.title { margin-left: 5px; font-size: 1.4rem; }
				/*.iconfont,.title {
					display: inline-block;
				}*/
			}
			.horizontal-cell:last-child{
				@extend .gradient;
				width: 40%;
				.title {
					display: inline;
					font-size: 1.6rem;
					color: #fff;
				}
				.iconfont {
					top: 0;
					color: #fff;
				}
			}
			.title {
				display: block;
				font-size: 1.2rem;
				color: #999;
			}
			.iconfont {
				position: relative;
				top: 2px;
				font-size: 2rem;
				color: #666;
			}
		}
		/*分割线*/
		.line {
			position: relative;
			&::after {
				content: '';
				position: absolute;
				right: 0;
				top: 0;
				height: 100%;
				width: 1px;
				transform: scaleX(.3);
				background-color: #c8c7cc;
			}
		}
		.more-btn {
			display: block;
			line-height: $height;
		}
		/*渐变背景色*/
		.gradient{
			background: linear-gradient(to right, lighten($baseColor,20) 0, lighten($baseColor, 5));
			color: #fff;
		}
	}
	.mui-popover-arrow {
		/*opacity: 0;*/
		display: none;
	}
	.mui-popover {
		width: auto;
		.mui-table-view {
			width: auto;
			min-width: 130px;
			color: #565656;
		}
	}
}
.mui-backdrop {
	background-color: transparent;
}
</style>