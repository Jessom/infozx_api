<template>
	<div>
		<div style="height: 50px;" v-if='opt.isFixed'></div>
		<div class="basic-container z-basic-wrap" :class="{'fixed':opt.isFixed, 'submit-wrap': opt.list.length===1&&!opt.isFixed}">
			<div class="horizontal" :class="{'theme': opt.theme}">
				<div class="horizontal-cell" v-for="(item, ind) in opt.list" :key='ind'>
					<button class="mui-btn mui-btn-block line" @tap='onBasic($event, item)' :disabled="item.disabled || opt.disabled">{{item.title}}</button>
				</div>
			</div>
		</div>
		
		<div class="z-sp"></div>
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
				isFixed: true,
				theme: true,
				disabled: false,
				list: []
			}
			return mui.extend({}, opt, this.options)
		}
	},
	methods: {
		onBasic(e, obj) {
			this.$emit('onBasic', obj)
		}
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.basic-container.z-basic-wrap{
	width: 100%;
	.horizontal {
		width: 100%;
		&.theme {
			background: linear-gradient(to right, lighten($baseColor,20) 0, lighten($baseColor, 5));
			.mui-btn-block {
				background-color: transparent;
				color: #fff;
			}

			button[disabled] {
				opacity: .8;
				background-color: rgba(255,255,255,.4);
			}
		}
	}
	&.submit-wrap {
		.horizontal {
			border-radius: 4px;
		}
	}

	.mui-btn-block {
		margin: 0;
		border-radius: 0;
		border: 0;
		color: #333;
	}

	&.fixed {
		position: fixed;
		bottom: 0;
		z-index: 2;
	}

	.line {
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
		&:last-child::after {
			width: 0;
		}
	}
}
.z-sp {
	position: fixed;
  bottom: 0;
  width: 100%;
  height: constant(safe-area-inset-bottom);
  background-color: #fff;
}
</style>