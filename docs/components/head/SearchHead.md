# SearchHead
[Demo](http://watasi.gitee.io/infozx_api/dist/#/searchHead.html)
::: warning 警告 
截止目前，扫码功能还没添加
:::

``` vue{10}
<template lang="html">
  <div class="container">
		<search-head 
			:options='options'
			@onSearch='onSearch' />
	</div>
</template>

<script>
import SearchHead from '@/components/Header/SearchHead.vue'
export default {
	data() {
		return {
			options: {
				placeholder: '搜索内容是...',		// 搜索框提示文字
				isScan: true,										// 开启扫码
				theme: true,										// 使用主题色背景
			}
		}
	},
	methods: {
		onSearch(text) {
			console.log(text) 	// 获取搜索内容
		}
	},
	components: {
		SearchHead
	}
}
</script>
```
## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|placeholder|String|'我要找...'|搜索框提示文字|
|isScan|Boolean|false|是否开启扫码|
|theme|Boolean|false|是否使用主题色背景，默认灰色背景|
|showBack|Boolean|true|是否显示返回按钮|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onSearch|text|`回车`或点击`搜索`触发，返回输入框内容|
