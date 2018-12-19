<template>
	<article 
		:id='opt.id' 
		class="z-slide-slip-container mui-popover mui-popover-bottom"
		:class='opt.style'
		:style='{
			width: (opt.style=="right"||opt.style=="left") ? opt.width : "100%",
			height: opt.style=="bottom" ? opt.height : ""
		}'>
		<slot>
			<p class="z-slide-slip-msg" v-if='opt.msg.length'>{{opt.msg}}</p>
		</slot>
	</article>
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
				id: 'sideslipContainer',
				style: 'right',
				width: '70%',
				height: "",
				msg: '没有内容哦'
			}
			return mui.extend({}, opt, this.options)
		}
	}
}
</script>

<style lang='scss'>
.z-slide-slip-container {
	bottom: 0;
  width: 100%;
  transition: transform .3s,opacity .3s;
  border-radius: 0;
  background: 0 0;
  box-shadow: none;
	background-color: #fff;
  &.mui-active {
  	transform: translate3d(0,0,0) !important;
  }

	/*从下面弹出*/
	&.bottom {
    transform: translate3d(0,100%,0);
	}
	
	&.left, &.right {
		top: 0;
	}
	/*从右侧滑出*/
	&.right {
		transform: translate3d(100%,0,0);
		transform-origin: right;
		right: 0;
	}

	/*从左侧滑出*/
	&.left {
		transform: translate3d(-100%,0,0);
		left: 0;
	}


	.z-slide-slip-msg {
		text-align: center;
		line-height: 50px;
	}
}
</style>