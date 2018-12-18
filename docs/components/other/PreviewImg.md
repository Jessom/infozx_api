# PreviewImg
> 图片预览

```html
<script src='../static/common/mui/js/mui.zoom.js'></script>
<script src='../static/common/mui/js/mui.previewimage.js'></script>
```

## 示例
```vue{8}
<template>
	<div>
		<preview-img :options='options' />
	</div>
</template>

<script>
import PreviewImg from '@/components/Other/PreviewImg.vue'
export default {
	data() {
		return {
			options: {
				title: '照片',
				list: [
					'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3058633453,130863776&fm=27&gp=0.jpg',
					'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3058633453,130863776&fm=27&gp=0.jpg'
				]
			}
		}
	},
	components: {
		PreviewImg
	}
}
</script>

<style lang='scss'>
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|上面的文字，没有就不显示|
|list|Array|-|渲染图片url|
