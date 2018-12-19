<template lang="html">
  <div class="container">
  	<button v-show='!isCropper' class="mui-btn mui-btn-block mui-btn-primary" @tap='cl'>选择图片</button>

		<div class="img-wrap" v-show='!isCropper'>
			<img :src="path" alt="">
		</div>
		
		<div v-show='!isCropper'>
			<p>裁切比例</p>
			<div class="mui-input-group">
		    <div class="mui-input-row">
	        <label>宽</label>
	        <input type="text" v-model.number='aspW' placeholder="input">
		    </div>
		    <div class="mui-input-row">
	        <label>高</label>
	        <input type="text" v-model.number='aspH' placeholder="input">
		    </div>
			</div>
			<p>质量压缩</p>
			<div class="mui-input-group">
		    <div class="mui-input-row">
	        <label>filter</label>
	        <input type="text"  v-model.number='options.filter' placeholder="input">
		    </div>
			</div>
			<p>大小压缩</p>
			<div class="mui-input-group">
		    <div class="mui-input-row">
	        <label>宽</label>
	        <input type="text"  v-model.number='options.canvas.width' placeholder="input">
		    </div>
			</div>
			<p>其他</p>
			<div class="mui-input-group">
		    <div class="mui-input-row">
	        <label>viewMode</label>
	        <select v-model.namber='options.params.viewMode'>
	        	<option value="0">0</option>
	        	<option value="1">1</option>
	        	<option value="2">2</option>
	        	<option value="3">3</option>
	        </select>
		    </div>
		    <div class="mui-input-row">
	        <label>dragMode</label>
	        <select v-model='options.params.dragMode'>
	        	<option value="crop">crop</option>
	        	<option value="move">move</option>
	        	<option value="none">none</option>
	        </select>
		    </div>
			</div>
		</div>

  	<cropper 
  		v-show='isCropper'
  		:options='options'
  		@onCropper='onCropper'
  		@onCancle='onCancle' />

  	<input type="file" class='z-file-input-btn'>
	</div>
</template>

<script>
import Cropper from '@/components/Other/Cropper.vue'
import { selectImg } from '@/common/js/utils'
export default {
	data() {
		return {
			path: '',
			isCropper: false,			// 是否裁切
			aspW: 1,
			aspH: 1,
			options: {
				src: '',
				filter: 0.7,
				canvas: {
					width: 500
				},
				params: {
					aspectRatio: 1 / 1,
					viewMode: 1,
					dragMode: 'none'
				}
			}
		}
	},
	methods: {
		async cl() {
			this.options.params.aspectRatio = this.aspW / this.aspH
			try {
				let path = await selectImg()
				console.log(path)
				this.options.src = path
				this.isCropper = true
			} catch(e) {
				console.log(e);
			}
		},
		onCropper(str) {
			this.isCropper = false
			this.path = str.base64
		},
		onCancle(cropper) {
			this.isCropper = false
		}
	},
	components: {
		Cropper
	}
}
</script>

<style lang="scss" scoped>
.container, html, body {
	height: 100%;
}
</style>
