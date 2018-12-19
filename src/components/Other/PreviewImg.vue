<template>
	<div class="z-img-look mui-clearfix" v-if='opt.list.length'>
		<div class="z-img-look-head" v-if='opt.title'>
			<span>{{opt.title}}</span>
		</div>
		<div class="z-img-look-item mui-pull-left" v-for='(item, ind) in opt.list' :key='ind'>
			<img :src="item" data-preview-src="" alt="">
		</div>
	</div>
</template>

<script>
import { filterImg } from '@/common/filters/filter.base'
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
				title: '',
				list: []
			}
			this.options.list = this.options.list.map(val => {
				return filterImg(val)
			})
			return mui.extend(true, {}, opt, this.options)
		}
	},
	mounted() {
		mui.previewImage()
	}
}
</script>

<style lang='scss'>
	@import 'static/common/scss/_lookimg.scss';
	$addBtnSize: calc(25vw - 17.5px);
	.z-img-look {
		background-color: #fff;
		padding: 10px 15px;
		.z-img-look-head {
			padding-bottom: 5px;
		}
		.z-img-look-item {
			width: $addBtnSize;
			height: $addBtnSize;
			margin: 5px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>