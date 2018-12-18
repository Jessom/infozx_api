# upload
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/uploadImg.html)
> 上传图片

## 示例
```vue{14}
<template lang="html">
  <div class="container">
  	<p>可以一次上传多张，也可以上传一张</p>
  	<button class="mui-btn mui-btn-block" @tap='me1'>图片上传</button>
  	<p class="img-wrap" v-for='(item, ind) in urls' :key='ind'>
  		<img :src="item" alt="">
  	</p>
  	<p>{{load}}</p>
		<input type="file" class='z-file-input-btn'>
	</div>
</template>

<script>
import { compressImage, selectImg, upload } from '@/common/js/utils'
export default {
	data() {
		return {
			urls: [],
			load: ''
		}
	},
	methods: {
		async me1() {
			try {
				// 选择图片
				let paths = await selectImg({multiple: true})
				let us = []
				this.load = '请稍等'
				for(let i=0,len=paths.length; i<len; i++) {
					let base64 = await compressImage(paths[i], {quality: 0.5, width: 300})
					// 多张一块上传
					us.push({base64, scale: 1})

					// 也可以一张一张上传
					/*
					let res = await upload({base64, scale: 1}, 'test')
					if(res.code === 1) {
						this.urls.push(`http://61.155.203.44:60115${res.url}`)
					}
					 */
					}
				}
				let res = await upload(us, 'test')
				this.urls = res.imagelist.map(item => `http://61.155.203.44:60115${item}`)
				this.load = ''
			} catch(e) {
				this.load = '上传失败'
				console.log(e);
			}
		}
	}
}
</script>

<style lang="scss">
.img-wrap {
	float: left;
	width: 33.333333%;
	padding: 10px;
}
</style>
```

## params
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|imgOptions|Object / Array|-|可以是对象, 也可以是数组, [查看](#imgoptions)|
|folder|String|-|图片保存地址|

### imgOptions
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|base64|String|-|图片base64, 最后是经过压缩处理|
|scale|Number|0|图片比例|

## return
返回一个`Promise`对象
- imgOptions为数组时, 成功返回 { code: 1, imagelist: ['xxx', 'xxx'] }, 失败 { code: 0 }
- imgOptions为对象时, 成功返回 { code: 1, url: 'xxx' }, 失败 { code: 0 }