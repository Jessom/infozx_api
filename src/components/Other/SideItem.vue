<template>
	<div class="z-side-item-container">
		<!-- 内容 -->
		<div id='sideScroll' class="mui-scroll-wrapper">
			<div class="mui-scroll" :class='opt.style' :style='{paddingBottom: opt.showbtn?"50px":""}'>
				<span class="z-side-item" :class='{"mui-ellipsis": opt.ellipsis, "active": item.title==opt.active["title"]}' v-for='(item, ind) in opt.list' :key='ind' @tap='onSide($event, item)'>{{item.title}}</span>
			</div>
		</div>

		<!-- 按钮 -->
		<basic-button :options='btns' v-if='opt.showbtn' @onBasic='onBasic' />
	</div>
</template>

<script>
import BasicButton from '@/components/Buttons/BasicButton.vue'
export default {
	props: {
		btns: {
			type: Object,
			default: function() {
				return {
					list: [{
						title: '取消'
					}, {
						title: '确定'
					}]
				}
			}
		},
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
				style: 'col-3',
				showbtn: true,
				ellipsis: true,
				active: {},
				list: []
			}
			return mui.extend({}, opt, this.options)
		}
	},
	mounted() {
		mui('#sideScroll').scroll({ deceleration: 0.0005 })
	},
	methods: {
		onSide(e, obj) {
			this.$emit('onSide', obj)
		},
		onBasic(obj) {
			this.$emit('onBasic', obj)
		}
	},
	components: {
		BasicButton
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.z-side-item-container {
	.mui-scroll {
		padding: 10px 15px 0 15px;
		word-wrap: break-word;
	}
	.mui-scroll-wrapper {
		margin: 0;
	}
	.z-side-item {
		display: inline-block;
		padding: 3px 7px;
		background-color: #f3f3f3;
		color: #999;
		border-radius: 3px;
		margin: 3px;
		text-align: center;
		&.active {
			color: #fff;
			background-color: $baseColor;
		}
	}
	
	/*一排一个*/
	.col-1 .z-side-item {
		display: block;
	}
	/*一排两个*/
	.col-2 .z-side-item {
		width: calc(50% - 6px);
	}
	/*一排三个*/
	.col-3 .z-side-item {
		width: calc(33.3333% - 6px);
	}
}
</style>