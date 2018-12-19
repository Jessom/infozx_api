<template>
	<div class="z-text-block-cell-contaienr horizontal" :class='{"z-border": opt.border, "z-theme": opt.theme}'>
		<div
			class="horizontal-cell z-text-block-item"
			v-for='(item, ind) in list'
			:key='ind'
			@tap='onCell($event, item)'>
			<div>{{item.title}}</div>
			<div>{{item.desc}}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		list: Array,
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
				border: true,
				theme: true
			}
			return mui.extend({}, opt, this.options)
		}
	},
	methods: {
		onCell(e, obj) {
			this.$emit('onCellClick', obj)
		}
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.z-text-block-cell-contaienr {
	width: 100%;
	text-align: center;
	.z-text-block-item {
		padding: 8px 0;
		color: #363636;
		font-size: 1.2rem;
	}
	&.z-theme {
		background-color: $baseColor;
		.z-text-block-item {
			color: #fff;
		}
	}
	&.z-border {
		.z-text-block-item {
			position: relative;
			&::after, &::before {
				content: '';
				position: absolute;
				top: 0;
				background-color: rgba(255,255,255,.8);
			}
			&::after {
				right: 0;
				height: 100%;
				width: 1px;
				transform: scaleX(.3);
			}
			&::before {
				left: 0;
				width: 100%;
				height: 1px;
				transform: scaleY(.3);
			}
			&:last-child::after {
				width: 0;
			}
		}
	}
}
</style>
