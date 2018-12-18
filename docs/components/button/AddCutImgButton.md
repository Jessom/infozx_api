# AddCutImgButton
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/addCutImgButton.html)
>带有裁切功能的图片选择组件

## 示例
``` vue{14}
<template lang="html">
  <div class="container">
		<add-cut-img-button
			:list='list'
			:options='options'
			:cropper='cropper'
			ref='addImg' />

		<button class="mui-btn" @tap='getImg'>获取图片</button>
	</div>
</template>

<script>
import AddCutImgButton from '@/components/Buttons/AddCutImgButton.vue'
export default {
	data() {
		return {
			list: [{base64: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3058633453,130863776&fm=27&gp=0.jpg', scale: 1}],
			options: {				// 基本配置
				maxCount: 4,
				isCropper: false 		// 必须
			},
			cropper: {				// 裁切参数
				src: '', 						// 必须
				filter: 0.7,
				params: {
					aspectRatio: 16 / 9
				},
				canvas: {
					width: 500
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
		AddCutImgButton
	}
}
</script>
```
## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染图片数组, 因为该参数的值会改变, 放在`options`中无法实现双向绑定, 固拿了出来|
|cropper|Object|-|裁切时的配置, 原因同上, [查看cropper](#cropper)|
|options|Object|-|配置参数, [查看options](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|maxCount|Number|4|图片选取最多数量|
|isCropper|Boolean|false|**必须**, 控制当前状态是否是裁切状态|

### cropper
::: tip 提示
**src**为必须参数，其他参数均为压缩配置参数
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|src|String|''|**必须**, 填空就行了|

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
