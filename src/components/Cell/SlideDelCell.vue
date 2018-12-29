<template>
	<div class="z-slide-del-container">
		<ul class="mui-table-view">
			<li
				class="mui-table-view-cell mui-media"
				v-for='(item, ind) in list'
				:key='ind'
				@tap='onCellClick($event, item)'>
				<div class="mui-slider-right mui-disabled">
					<a
						class="mui-btn"
						:class='[item.deleteBg?item.deleteBg:"mui-btn-red"]'
						@tap.stop='onDelect($event, item, ind)'>{{item.deleteText?item.deleteText:"删除"}}</a>
				</div>
				<a href="javascript:;" class="mui-clearfix mui-slider-handle" :class='{"mui-navigate-right":opt.showRightNav}'>
					<img class="mui-media-object mr10" :class='{"radius50": opt.isRadius}' :src="item.image" v-if='opt.showAvatar && item.image'>
					<div
						class="mui-media-object base-bg mr10"
						:class='{"radius50": opt.isRadius}'
						:style='{backgroundColor: item.background}'
						v-if='opt.showAvatar && !item.image'>
						{{item.title.charAt(0)}}
					</div>
					<div class="mui-media-body">
						<div class="mui-ellipsis title">{{item.title}}</div>
						<p class="mui-ellipsis desc">{{item.desc}}</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Object,
			default: function() { return {} }
		},
		list: Array
	},
	computed: {
		opt() {
			let opt = {
				showAvatar: true,
				isRadius: true,
				showRightNav: true,
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	methods: {
		onCellClick(e, obj) {
			this.$emit('onCellClick', obj)
		},
		onDelect(e, obj, i) {
			this.$emit('onDelect', {li: e.target.parentNode.parentNode, ...obj, handler: i})
		}
	}
}
</script>

<style lang='scss'>
.z-slide-del-container{
	.mui-media-body {
		padding-right: 15px;
		.title {
			font-size: 1.6rem;
		}
		.desc {
			font-size: 1.2rem;
		}
	}
	.mui-table-view .mui-media-object {
		width: 42px;
		float: left;
		text-align: center;
		color: #fff;
		font-size: 2rem;
	}
	.mui-table-view-cell>.mui-slider-handle.mui-navigate-right:after {
		right: 15px;
	}
}
</style>