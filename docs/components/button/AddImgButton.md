# AddImgButton
[Demo](http://watasi.gitee.io/infozx_api/dist/#/addImgButton)
> 添加图片组件(没有裁切功能)

## 示例
``` vue{13}
<template lang="html">
  <div class="container">
		<add-img-button
			:list='list'
			:options='options'
			ref='addImg' />

		<button class="mui-btn" @tap='getImg'>获取图片</button>
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
		// 获取图片
		getImg() {
			// 方式一
			console.log(this.$refs.addImg.getImages()) 	// ['data:image/...', 'data:image/...']
			// 方式二
			console.log(this.list)
		}
	},
	components: {
		AddImgButton
	}
}
</script>
```
## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染图片数组, 因为该参数的值会改变, 放在`options`中无法实现双向绑定, 固拿了出来|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|maxCount|Number|4|图片选取最多数量|
|isUpload|Boolean|true|是否选择完成图后立即上传图片，true不上传  false上传|
|sourceType|number|0|仅在APP中有效，1拍照；2相册；其他值，拍照相册|
|compress|Object|-|压缩配置|

## ref
::: tip 提示
请注意查看上面demo中的`methods`里的`getImg`方法哦！！！
:::

|事件|返回|说明|
|:---:|:---:|:---:|
|getImages|list|点击事件|

### 获取图片的方式有两种
- 通过`ref`上的`getImages()`方法获取
- 在`js`中, `对象之间都是引用关系(数组也是对象的一种)`, 所以, 也可以通过传过去的`list`获取
