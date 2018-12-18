# selectImg
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/compressImage.html)
> 选择图片

::: tip 提示
在IOS中, 可能存在无法弹出选择图片的界面，所以
**在使用之前,请务必在`template`中加入`<input type="file" class='z-file-input-btn'>`代码** <br />
上面虽然解决了IOS中的问题，但是，部分安卓设备存在，选择大图，不能触发input的change事件，所以，修改以下代码
:::
```diff
- <input type="file" class='z-file-input-btn' accept="image/jpeg,image/png,image/gif" />
+ <input type="file" class='z-file-input-btn' accept="image/*" />
```

## 示例
```vue{11}
<template lang="html">
  <div class="container">
  	<button class="mui-btn mui-btn-block" @tap='me1'>压缩图片</button>
  	<span>获取图片地址</span>
  	<p>{{url}}</p>
		<input type="file" class='z-file-input-btn' accept="image/*" />
	</div>
</template>

<script>
import { selectImg } from '@/common/js/utils'
export default {
	data() {
		return {
			url: ''
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
			} catch(e) {
				console.log(e);
			}
		},
		// 调用方法二
		// 使用.then
		/* method2() {
			selectImg().then(path => {
				console.log(path)
			}).catch(err => {
				console.log(err)
			})
		} */
	}
}
</script>

<style lang="scss">

</style>

```

## params
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|{}|参数对象, [查看](#options)|

### options
[点击这里](http://www.dcloud.io/docs/api/zh_cn/gallery.html)查看更多参数

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|multiple|Boolean|false|是否多选, `APP`、`PC`均有效, `其余参数均只在APP中有效`|
|system|Boolean|false|是否使用系统相册文件选择界面|
|maximum|Number|Infinity|最多选择的图片数量|
|sourceType|Number|-|仅在APP中有效，1拍照；2相册；其他值，拍照相册|

## return
返回一个`Promise`对象
