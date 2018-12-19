<template>
	<div class="z-multi-col-container">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for='(item, ind) in opt.list' :key='ind' @tap='onCellClick($event, item)'>
				<a href="javascript:;" :class="{'mui-navigate-right': opt.showRightNav}">
					<div class="mui-media-body">
						<div class="title">{{item.title}}</div>
						<p class="desc" v-for='(i, inde) in item.descs' :key='inde'>{{i}}</p>
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
		}
	},
	computed: {
		opt() {
			let opt = {
				showRightNav: true,
				list: []
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	methods: {
		onCellClick(e, obj) {
			this.$emit('onCellClick', obj)
		}
	}
}
</script>

<style lang='scss'>
.z-multi-col-container {
	.mui-media-body {
		padding-right: 15px;
		.title {
			font-style: 1.6rem;
		}
		.desc {
			font-size: 1.2rem;
			line-height: 1.5;
			white-space: normal;
			margin-top: 3px;
		}
	}
}
</style>