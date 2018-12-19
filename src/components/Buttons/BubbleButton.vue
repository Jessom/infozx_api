<template>
	<div class="bubble-container z-bubble-wrap" v-if='opt.show'>
		<div class='bubble-wrap' v-if='opt.btns.length === 1'>
			<div class="bubble-item" v-for='(item, ind) in opt.btns' :key='ind' @tap='onBubble($event, item)'>
				<i class="iconfont" :class='item.icon'></i>
			</div>
		</div>
		<div class='bubble-wrap' v-if='opt.btns.length > 1'>
			<div class="bubble-item item" :class='{"show": status}' v-for='(item, ind) in opt.btns' :key='ind' @tap='onBubble($event, item)'>
				<i class="iconfont" :class='item.icon'></i>
			</div>
			<div class="bubble-item" :class='{"rotate": status}' @tap='onStatus'><i class="iconfont" :class='opt.defaultIcon'></i></div>
		</div>

		<div class="mask-wrap" v-show="status" @tap='onStatus'></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			status: false,
		}
	},
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
				defaultIcon: 'icon-Plus',
				btns: [],
				show: mui.os.plus ? false : true
			}
			return mui.extend({}, opt, this.options)
		}
	},
	methods: {
		onStatus() {
			if(this.opt.btns.length > 1) {
				this.status = !this.status
			}
		},
		onBubble(e, obj) {
			this.$emit('onBubble', obj)
			this.onStatus()
		}
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
$itemHeight: 50px;
.bubble-container.z-bubble-wrap{
	.bubble-wrap{
		position: fixed;
		z-index: 889;
		bottom: 15px; 
		right: 15px;
	}
	.bubble-item {
		margin: 8px auto 0 auto;
		width: $itemHeight;
		height: $itemHeight;
		line-height: $itemHeight;
		text-align: center;
		border-radius: 50%;
		background-color: $baseColor;
		color: #fff;
		transition: all .3s;
		.iconfont {
			font-size: 2rem;
		}
		&.item{
			transform: scale(0); 
			opacity: 0;
			width: 0; 
			height: 0;
		}
		&.show {
			width: 50px;
			height: 50px;
			opacity: 1;
			transform: scale(1);
		}
		&.rotate{
			transform: rotate(135deg);
		}
	}
	.mask-wrap{
		position: fixed;
		z-index: 888;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0,0,0,.3);
	}
}
</style>