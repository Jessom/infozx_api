<template lang="html">
  <div class="container">
		<add-img-button
			:list='list'
			:options='options'
			ref='addImg' />

		<div class="mui-input-group mt10">
	    <div class="mui-input-row">
        <label>能选几张</label>
        <input type="text" v-model.number='options.maxCount' placeholder="input">
	    </div>
		</div>

		<button class="mui-btn mui-btn-block mui-btn-primary mt10" @tap='getImgs'>获取图片</button>
	</div>
</template>

<script>
import AddImgButton from '@/components/Buttons/AddImgButton.vue'
export default {
	data() {
		return {
			list: [{base64: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3058633453,130863776&fm=27&gp=0.jpg', scale: 1}],
			options: {
				maxCount: 4,
				compress: {
					width: 300
				}
			}
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
		AddImgButton,
	}
}
</script>

<style lang="scss">
</style>
