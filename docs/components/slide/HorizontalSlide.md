# HorizontalSlide
[Demo](http://watasi.gitee.io/infozx_api/dist/#/horizontalSlide)
> 水平滚动轮播图

## 示例
```vue{8}
<template>
	<div class="container">
		<horizontal-slide :options='options' @onSlide='onSlide' />
	</div>
</template>

<script>
import HorizontalSlide from '@/components/Slide/HorizontalSlide.vue'
export default {
	data() {
		return {
			options: {
				normal: true,
				list: [{
					id: 1,
					url: 'https://webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
				}, {
					id: 2,
					url: 'https://webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
				}]
			}
		}
	},
	methods: {
		onSlide(obj) {
			console.log(obj)
		}
	},
	components: {
		HorizontalSlide
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
|interval|Number|5000|自动轮播周期，若为0则不自动播放|
|normal|Boolean|false|为true时, 周边会添加padding:15px|
|indicator|Boolean|true|是否显示指示器|
|list|Array|-|渲染数据, [查看](#list)|

### list
::: tip 提示
list中的项，可以随意添加
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|url|String|-|图片url|