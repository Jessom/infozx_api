# Cropper
[Demo](http://watasi.gitee.io/infozx_api/dist/#/cropper.html)

::: tip 裁切组件
该组件依赖[cropperjs](https://github.com/fengyuanchen/cropperjs)
:::
```bash
npm install cropperjs --save
```

## 示例
```vue{68}
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

<style lang="scss">
.container, html, body {
	height: 100%;
}
</style>
```
## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|src|String|-|裁切图片的路径|
|blob|Boolean|false|是否返回`blob`格式数据, 默认是`base64`|
|filter|Number|0.7|质量压缩, 取值`0 - 1`|
|params|Object|-|裁切参数配置, [查看](#params)|
|canvas|Object|-|canvas配置, 主要是压缩配置, [查看](#canvas)|

### params
[点击这里](https://github.com/fengyuanchen/cropperjs#options)查看具体参数

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|viewMode|Number|1|Define the view mode of the cropper|
|dragMode|String|none|Define the dragging mode of the cropper|
|aspectRatio|Number|1 / 1|Set the aspect ratio of the crop box. By default, the crop box is free ratio|

### canvas
[点击这里](https://github.com/fengyuanchen/cropperjs#user-content-getcroppedcanvasoptions)查看具体参数

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|width|Number|960|the destination width of the output canvas|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCropper|{ base64[blob], scale }|裁切事件|
|onCancle|Cropper|取消裁切|

onCropper: `options.blob == true`： 返回`{blob, scale}`, 为`false`, 返回`{base64, scale}`
