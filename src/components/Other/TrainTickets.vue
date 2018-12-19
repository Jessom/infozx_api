<template>
	<div class="z-train-ticket-wrap">
		<div class="z-train-body mui-clearfix">
			<div class="z-train-body-left z-train-item" @tap='$emit("click", opt.left)'>
				<h2 class="title">{{opt.left.title}}</h2>
				<span class="meta">{{opt.left.meta}}</span>
			</div>
			<div class="z-train-body-center z-train-item">
				<span class="line"></span>
			</div>
			<div class="z-train-body-right z-train-item" @tap='$emit("click", opt.right)'>
				<h2 class="title">{{opt.right.title}}</h2>
				<span class="meta">{{opt.right.meta}}</span>
			</div>
		</div>
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
				left: {
					title: '1月1日',
					meta: '开始'
				},
				right: {
					title: '12月31日',
					meta: '结束'
				}
			}
			return mui.extend(true, {}, opt, this.options)
		}
	}
}
</script>

<style lang='scss'>
.z-train-ticket-wrap {
	background-color: #fff;
	.z-train-body {
		padding: 15px 10px;
		.z-train-item {
			float: left;
			width: 33.3333%;
			text-align: center;
			.title { font-size: 1.8rem; margin: 0 }
			.line { display: inline-block; width: 80%; height: 1px; background-color: #c8c7cc; }
			.meta { margin-top: 3px; display: inline-block; }
		}
		// .z-train-body-left { text-align: right; }
		// .z-train-body-center { text-align: center; }
		// .z-train-body-right { text-align: left; }
	}
}
</style>