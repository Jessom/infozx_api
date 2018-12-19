<template>
	<div class="a-vertical-container" :class="{'normal': opt.normal}">
		<div class="mui-slider">
		  <div class="mui-slider-group mui-slider-loop">
		  	<div class="mui-slider-item mui-slider-item-duplicate">
		  		<img :src="opt.list[opt.list.length-1].url" @tap='onSlide($event, opt.list[opt.list.length-1])' />
		  	</div>
		    <div class="mui-slider-item" v-for='(item, ind) in opt.list' :key='ind'>
		    	<img :src="item.url" @tap='onSlide($event, item)' />
		    </div>
		    <div class="mui-slider-item mui-slider-item-duplicate">
		  		<img :src="opt.list[0].url" @tap='onSlide($event, opt.list[0])' />
		  	</div>
		  </div>
		  <!-- 指示器 -->
		  <div class="mui-slider-indicator" v-if='opt.indicator'>
				<div class="mui-indicator" :class="{'mui-active': ind==0}" v-for="(item, ind) in opt.list" :key='ind'></div>
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
				interval: 5000,			// 自动轮播周期，若为0则不自动播放
				list: [],						// 渲染数据
				normal: false,			// 周边有距离
				indicator: true,		// 是否显示指示器
			}
			return mui.extend({}, opt, this.options)
		}
	},
	mounted() {
		var gallery = mui('.mui-slider')
		gallery.slider({
		  interval: this.opt.interval,
		})
	},
	methods: {
		onSlide(e, obj) {
			this.$emit('onSlide', obj)
		}
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.a-vertical-container {
	&.normal {
		padding: 15px;
		.mui-slider {
			border-radius: 6px;
		}
		.mui-slider-indicator {
			bottom: 0;
			.mui-indicator {
				width: 10px;
				height: 1px;
				border-radius: 0px;
			}
		}
	}
	img {
		vertical-align: middle;
	}
	.mui-slider-indicator {
		bottom: 2px;
		.mui-indicator {
			background-color: #ccc;
			box-shadow: none;
			margin: 1px 3px;
			&.mui-active {
				background-color: lighten($baseColor, 15);
			}
		}
	}
}
</style>