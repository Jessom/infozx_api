<template>
	<div class="z-add-img-container">
		<div class="mui-clearfix add-img-wrap" v-show='!options.isCropper'>
			<!-- 图片组 -->
			<div class="mui-pull-left z-img-item" v-for='(item, ind) in list' :key='ind' :style="'background-image: url('+item.base64+')'">
				<i class="z-delect-btn" @tap='delect(ind)'></i>
			</div>

			<!-- 添加按钮 -->
			<div class="mui-pull-left z-add-btn" @tap='addEvent' v-if='list.length < opt.maxCount'>
				<i class="iconfont icon-Plus"></i>
			</div>
		</div>
		
		<cropper
			:options='cropper'
			:class='{"z-cropper": options.isCropper}'
			v-show='options.isCropper'
			@onCropper='onCropper'
			@onCancle='onCancle' />
		<input type="file" class='z-file-input-btn' accept="image/*" />
	</div>
</template>

<script>
import HeadCell from '@/components/Cell/HeadCell.vue'
import Cropper from '@/components/Other/Cropper.vue'
import { selectImg } from '@/common/js/utils'
export default {
	data() {
		return {
			isCropper: false
		}
	},
	props: {
		options: {
			type: Object,
			default: function() {
				return {
					isCropper: false
				}
			}
		},
		list: {
			type: Array,
			default: function() {
				return []
			}
		},
		cropper: {
			type: Object,
			default: function() {
				return {
					src: ''
				}
			}
		}
	},
	computed: {
		opt() {
			let opt = {
				maxCount: 4,			// 最大数量
			}
			return mui.extend(true, {}, opt, this.options)
		},
	},
	methods: {
		// 添加图片
		async addEvent() {
			try {
				let path = await selectImg()
				this.cropper.src = path
				this.options.isCropper = true
			} catch(e) {
				console.log(e);
			}
		},
		// 删除事件
		delect(index) {
			this.list.splice(index, 1)
		},
		// 获取图片
		getImages() {
			return this.list
		},
		// 裁切完成
		onCropper(base64) {
			this.options.isCropper = false
			this.list.push(base64)
		},
		// 取消裁切
		onCancle(cropper) {
			this.options.isCropper = false
		}
	},
	components: {
		Cropper
	}
}
</script>

<style lang='scss'>
$addBtnSize: calc(25vw - 17.5px);
$deleBtnSize: 18px;
$deleBtnPos: -5px;
html, body, .z-add-img-container {
	height: 100%;
}
.z-add-img-container {
	background-color: #fff;
	padding: 10px 15px;
	.z-img-item,
	.z-add-btn {
		width: $addBtnSize;
		height: $addBtnSize;
		line-height: $addBtnSize;
		margin: 5px;
		text-align: center;
	}
	/*图片组*/
	.z-img-item {
		position: relative;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		/*删除按钮*/
		.z-delect-btn {
			position: absolute;
			width: $deleBtnSize;
			height: $deleBtnSize;
			top: $deleBtnPos;
			right: $deleBtnPos;
			background-image: url(data:image/png;base64,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);
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
	}


	/*添加按钮*/
	.z-add-btn {
		border: 1px dashed #ccc;
		.iconfont {
			font-size: 4rem;
			color: #ccc;
		}
	}
	
	.z-cropper-container {
		display: none;
		/*裁切组件*/
		&.z-cropper {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100vw;
			height: 100vh;
			z-index: 999;
		}
	}
}
</style>