<template>
	<div class="z-card-wrap">
		<ul class="mui-table-view">
			<li
				class="mui-table-view-cell"
				v-for='(item, ind) in list'
				:key='ind'>
				<div
					v-if='opt.isSlide'
					class="mui-slider-right mui-disabled">
					<a class="mui-btn mui-btn-red" @tap.stop='onDelect($event, item)'>删除</a>
				</div>
				
				<a href="javascript:;"
					class=" "
					:class='{
						"mui-navigate-right":opt.showRightNav,
						"mui-slider-handle": opt.isSlide
					}'>
					<div class="mui-media-body" @tap='$emit("click", item)'>
						<div class="mui-clearfix title-wrap">
							<span class="mui-pull-left title-left">{{item.title}}</span>
							<span class="mui-pull-right title-right">{{item.time}}</span>
						</div>
						<div class="mt5">
							<span
								class="z-card-item"
								v-for='(i, inde) in item.list'
								:key='inde'>{{i}}</span>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: function() { return [] }
		},
		options: {
			type: Object,
			default: function() { return {} }
		}
	},
	computed: {
		opt() {
			let opt = {
				showRightNav: true,
				isSlide: true
			}
			return mui.extend({}, opt, this.options)
		}
	},
	methods: {
		// 删除事件
		onDelect(e, item) {
			this.$emit('onDelect', {li: e.target.parentNode.parentNode, ...item})
		}
	}
}
</script>

<style lang='scss'>
.z-card-wrap {
	.mui-table-view-cell>a:not(.mui-btn) {
		white-space: normal;
	}
	.z-card-item {
		display: inline-block;
		padding: 2px 5px;
		background-color: #f7f7f7;
		border-radius: 3px;
		margin: 2px;
		color: #696969;
	}
	.title-wrap {
		.title-left, .title-right { font-weight: bold; }
		.title-left {
			font-size: 1.8rem;
			color: #333;
		}
		.title-right {
			font-size: 1.5rem;
			color: #999;
		}
	}
}
</style>