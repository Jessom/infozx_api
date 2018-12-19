<template>
	<div class="z-sort-container" :class='[opt.theme ? "theme" : "border-bottom"]'>
		<div class="horizontal">
			<div class="horizontal-cell z-sort-item z-sort-left" v-if='opt.left' @tap='onSortLeft'>
				<i class="iconfont" :class='lefticon'></i>
			</div>
			<div class="horizontal-cell z-sort-item" v-for='(item, ind) in opt.list' :key='ind' :class='{"active": opt.default==ind}' @tap='onSort($event, item, ind)'>
				{{item.title}}
				<i class="iconfont" :class="[item.icondir?'icon-arrLeft-fill1':'icon-arrLeft-fill']" v-if='item.issort'></i>
			</div>
			<div class="horizontal-cell z-sort-item z-sort-screen" v-if='opt.screen' @tap='onSortScreen'>
				<i class="iconfont" :class="[opt.screenIcon, screenColor?'screen-base':'']"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Object,
			default: function() {
				return {}
			}
		},
		lefticon: {
			type: String,
			default: 'icon-solid-person'
		},
		screenColor: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		opt() {
			let opt = {
				screen: false,			// 是否显示筛选按钮
				screenIcon: 'icon-shaixuan',
				list: [],
				theme: false,
				left: false,
			}
			return mui.extend({}, opt, this.options)
		}
	},
	methods: {
		onSort(e, obj, index) {
			this.$emit('onSort', {...obj, index: index, event: e})
		},
		onSortScreen() {
			this.$emit('onSortScreen', {})
		},
		onSortLeft() {
			this.$emit('onSortLeft', {})
		}
	}
}
</script>

<style lang="scss">
@import 'static/common/scss/_variable.scss';
.z-sort-container {
	position: relative;
  z-index: 2;
	background-color: #fff;
	.horizontal {
		height: 44px;
		width: 100%;
		text-align: center;
	}
	.z-sort-item {
		color: #444;
		.iconfont {
			vertical-align: middle;
			color: #aaa;
		}
		.screen-base {
			color: $baseColor;
		}
		&.z-sort-screen, &.z-sort-left {
			width: 44px;
			position: relative;
			&::after {
				content: '';
				position: absolute;
				top: 7px;
				height: 30px;
				width: 1px;
				transform: scaleX(.3);
				background-color: #c8c7cc;
			}
		}
		&.z-sort-screen::after {
			left: 0;
		}
		&.z-sort-left::after {
			right: 0;
		}
		&.active {
			color: $baseColor;
		}
	}

	// 主题色
	&.theme {
		background-color: $baseColor;
		.z-sort-item {
			color: rgba(255,255,255,.8);
			.iconfont {
				color: rgba(255,255,255,.6);
			}
			&.active {
				color: #fff;
			}
		}
	}
	&.border-bottom {
		position: relative;
		&::after {
			left: 0;
		}
	}
}
</style>