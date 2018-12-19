<template>
	<div class="z-cropper-container">
		<header class="mui-bar mui-bar-nav cropper-header">
      <a class="mui-icon mui-icon-left-nav mui-pull-left" @tap='cancle'></a>
      <h1 class="mui-title">裁切</h1>
      <a class="mui-btn mui-btn-link mui-pull-right" @tap='cropperEvent'>确定</a>
    </header>
		<img class="z-cropper-img" >
	</div>
</template>

<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.min.css'
export default {
	props: {
		options: {
			type: Object,
			default: function() {
				return {}
			}
		}
	},
	mounted() {
		let header = document.querySelector('.cropper-header')
    header && (header.style.height = 44 + immersed + 'px')
    header && (header.style.paddingTop = immersed + 'px')
	},
	computed: {
		opt() {
			let opt = {
				src: '',
				blob: false,
				filter: 0.7,
				params: {							// 裁切中参数
					viewMode: 1,
					dragMode: 'none',
					aspectRatio: 1 / 1
				},
				canvas: {
					width: 960
				} 
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	watch: {
		'opt.src': function(val) {
			if(val !== '') {
				let oImg = document.querySelector('.z-cropper-img')
				oImg.src = val
				this.cropper = new Cropper(oImg, this.opt.params)
			}
		}
	},
	methods: {
		// 裁切事件
		cropperEvent() {
			const canvas = this.cropper.getCroppedCanvas(this.opt.canvas)
			if(this.opt.blob) {
				canvas.toBlob(blob => {
					this.$emit('onCropper', blob)
					this.cropper.destroy()
				})
			} else {
				let base64 = canvas.toDataURL('image/jpeg', this.opt.filter)
				this.$emit('onCropper', {base64, scale: this.opt.params.aspectRatio.toFixed(2)})
				this.cropper.destroy()
			}
		},
		// 取消
		cancle() {
			this.$emit('onCancle', this.cropper)
			this.cropper.destroy()
		}
	}
}
</script>

<style lang='scss'>
.z-cropper-container {
	height: 100%;
	.cropper-container {
		height: 100%;
		width: 100%;
	}
	.mui-bar .mui-btn-link {
		color: #fff;
	}
}
</style>