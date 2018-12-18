# compressImage
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/compressImage.html)
> 压缩图片

## 示例
```vue{14}
<template lang="html">
  <div class="container">
  	<button class="mui-btn mui-btn-block" @tap='me1'>压缩图片</button>
  	<span>获取图片地址</span>
  	<p>{{url}}</p>
  	<span>压缩后的图标base64</span>
  	<p>图片比例： {{info.scale}}</p>
  	<p>图片信息： {{info.base64}}</p>
		<input type="file" class='z-file-input-btn'>
	</div>
</template>

<script>
import { compressImage, selectImg } from '@/common/js/utils'
export default {
	data() {
		return {
			url: '',
			info: {}
		}
	},
	methods: {
		// 调用方法一
		// 使用async await
		async method1() {
			try {
				// 选择图片
				let path = await selectImg()
				this.url = path
				// 压缩图片
				let info = await compressImage(path)
				this.info = info
			} catch(e) {
				console.log(e);
			}
		},
		// 调用方法二
		// 使用.then
		/* method2() {
			selectImg().then(path => {
				console.log(path)
				return compressImage(path)
			}).then(info => {
				console.log(info)
			}).catch(err => {
				console.log(err)
			})
		} */
	}
}
</script>

<style lang="sass">

</style>

```

## params
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|path|String|-|压缩图片路径|
|options|Object|-|参数对象, [查看](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|width|Number|图片宽度|压缩后图片的宽度|
|height|Number|图片高度|压缩后图片的高度|
|quality|Number|0.8|压缩图片的质量|
|pixels|Number|2000000|图片最大像素|

## return
返回一个`Promise`对象, {base64: 'xxxx', scale: 0.8}