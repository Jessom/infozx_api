<template>
	<div class="z-center-cell-container" :class='{"theme": opt.theme}'>
		<div style="display:inline-block" @tap='onCenter($event, opt)'>
			<img class="avatar" :class='{"radius50": opt.isRadius}' :src="opt.src" alt="">
			<div class="desc mt5">{{opt.desc}}</div>
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
		}
	},
	computed: {
		opt() {
			let opt = {
				desc: '',
				src: '../static/common/images/avatar.jpg',
				isRadius: true,
				theme: true
			}
			return mui.extend({}, opt, this.options)
		}
	},
	methods: {
		onCenter(e, obj) {
			this.$emit('onCenter', obj)
		}
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.z-center-cell-container {
	text-align: center;
	padding: 11px 0;
	background-color: #fff;
	&.theme{
		background-color: $baseColor;
		.desc {
			color: #fff;
		}
	}
	.desc {
		color: #333;
	}
	.avatar {
		width: 60px;
		height: 60px;
		vertical-align: middle;
	}
}
</style>