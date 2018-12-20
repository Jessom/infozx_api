<template lang="html">
  <div class="container">
		<add-cut-img-button
			:list='list'
			:options='options'
			:cropper='cropper'
			ref='addImg' />
		
		<div v-show='!options.isCropper'>
			<div style="margin: 15px 0">
				<button class="mui-btn mui-btn-block mui-btn-primary mt10" @tap='getImgs'>获取图片</button>
			</div>

			<div class="mui-input-group mt10">
		    <div class="mui-input-row">
	        <label>能选几张</label>
	        <input type="text" v-model.number='options.maxCount' placeholder="input">
		    </div>
			</div>
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
	        <input type="text"  v-model.number='cropper.filter' placeholder="input">
		    </div>
			</div>
			<p>大小压缩</p>
			<div class="mui-input-group">
		    <div class="mui-input-row">
	        <label>宽</label>
	        <input type="text"  v-model.number='cropper.canvas.width' placeholder="input">
		    </div>
			</div>
			<p>其他</p>
			<div class="mui-input-group">
		    <div class="mui-input-row">
	        <label>viewMode</label>
	        <select v-model.namber='cropper.params.viewMode'>
	        	<option value="0">0</option>
	        	<option value="1">1</option>
	        	<option value="2">2</option>
	        	<option value="3">3</option>
	        </select>
		    </div>
		    <div class="mui-input-row">
	        <label>dragMode</label>
	        <select v-model='cropper.params.dragMode'>
	        	<option value="crop">crop</option>
	        	<option value="move">move</option>
	        	<option value="none">none</option>
	        </select>
		    </div>
			</div>
		</div>
	</div>
</template>

<script>
import AddCutImgButton from '@/components/Buttons/AddCutImgButton.vue'
export default {
	data() {
		return {
			list: [{base64: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3058633453,130863776&fm=27&gp=0.jpg', scale: 1}],
			options: {
				maxCount: 2,
				isCropper: false
			},
			cropper: {
				src: '',
				filter: 0.7,
				params: {
					aspectRatio: 1 / 1,
					viewMode: 1,
					dragMode: 'none'
				},
				canvas: {
					width: 500
				}
			},
			aspW: 1,
			aspH: 1
		}
	},
	watch: {
		aspW(val) {
			this.cropper.params.aspectRatio = val / this.aspH
		},
		aspH(val) {
			this.cropper.params.aspectRatio = this.aspW / val
		}
	},
	methods: {
		getImgs() {
			let imgs = this.$refs.addImg.getImages()
			// console.log(imgs)
			console.log(this.list)
			alert('请查看控制台输出')
		}
	},
	components: {
		AddCutImgButton,
	}
}
</script>

<style lang="scss">

</style>
