<template>
	<div :id='opt.id' class="z-action-sheet-container mui-popover mui-popover-bottom mui-popover-action">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell" v-for="(item, ind) in opt.list" :key='ind' @tap='onActionSheet($event, item)'>
				<i class="iconfont mr5" :class='item.icon'></i>
				{{item.title}}
			</li>
		</ul>

		<!-- 取消 -->
		<ul class="mui-table-view" v-if='cancel'>
			<li class="mui-table-view-cell" @tap='cancel'>
				<b>取消</b>
			</li>
		</ul>
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
		}
	},
	computed: {
		opt() {
			let opt = {
				id: 'action-sheet',
				cancel: true,				// 是否显示取消按钮
				list: []
			}
			return mui.extend({}, opt, this.options)
		}
	},
	methods: {
		cancel() {
			mui(`#${this.opt.id}`).popover('toggle')
		},
		onActionSheet(e, obj) {
			this.$emit('onActionSheet', obj)
		}
	}
}
</script>

<style lang='scss'>
.z-action-sheet-container {
	&.mui-popover.mui-popover-action .mui-table-view {
		color: #444;
	}
}
</style>