<template>
	<div class="shop-container mui-clearfix z-shop-wrap" :class="{'fixed':opt.isFixed}">
		<div style="height: 50px;" v-if='opt.isFixed'></div>
		<div class="shop-wrap shop-left horizontal"  :style="{width: wid.left+'%'}">
			<div class="horizontal-cell shop-item" v-for='(item, ind) in opt.leftList' :key='ind' @tap='onShop($event, item)'>
				<i class="iconfont" :class='item.icon'></i>
				<div class="size12 grey-color">{{item.title}}</div>
			</div>
		</div>
		<div class="shop-wrap shop-right horizontal" :style="{width: wid.right+'%'}">
			<div class="horizontal-cell shop-item"  @tap='onShop($event, item)' v-for='(item, ind) in opt.rightList' :key='ind'>
				{{item.title}}
			</div>
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
      	isFixed: true,
        leftList: [],
        rightList: []
      }
      return mui.extend({}, opt, this.options)
    },
    wid() {
    	if(this.opt.rightList.length > 2) {
    		throw new Error('ShopButton rightList length Error: 右侧按钮不能大于两个')
    	} else if(this.opt.rightList.length === 2) {
    		return { left: 40, right: 60 }
    	} else if(this.opt.rightList.length === 1) {
    		return { left: 60, right: 40 }
    	} else {
    		throw new Error('ShopButton rightList length Error: 右侧按钮至少有一个')
    	}
    }
	},
	methods: {
		onShop(e, obj) {
			this.$emit('onShop', obj)
		}
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
$height: 50px;
.shop-container.z-shop-wrap {
	bottom: 0;
	width: 100%;
	height: $height;
	&.fixed {
		position: fixed;
		&::before {
			width: 100%;
			height: 1px;
			background-color: #c8c7cc;
			transform: scaleY(.3);
		}
	}
	.shop-wrap {
		width: 50%;
		float: left;
		height: 100%;
		text-align: center;
		&.shop-left {
			.iconfont {
				position: relative;
				top: 2px;
				font-size: 2rem;
				color: #666;
			}
		}
		&.shop-right {
			background: linear-gradient(to right, lighten($baseColor,20) 0, lighten($baseColor, 5));
			font-size: 1.6rem;
			color: #fff;
		}
	}
}
</style>