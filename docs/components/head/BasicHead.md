# BasicHeader
[Demo](https://watasi.cn/infozx_api/dist/#/basicHead)
::: tip 提示
不推荐使用该组件，建议使用 **`openWindowWithTitle`** 方法
:::


## 示例
``` vue{8}
<template lang="html">
	<div class="container">
		<basic-head :options='options' />
	</div>
</template>

<script>
import BasicHead from '@/components/Header/BasicHead.vue'
export default {
	data() {
		return {
			options: {
				title: '首页',					// title
				back: true,						// 是否显示返回按钮
				wechat: true,					// 是否显示head，默认APP显示，PC不显示
				btns: [{							// head右侧渲染按钮
					title: '提交',
					event: () => alert('123')
				}, {
					icon: 'icon-sousuo', 	// 设置title后，则不显示图标
					event: () => alert('789')
				}]
			}
		}
	},
	components: {
		BasicHead
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
|title|String|''|标题|
|isBack|Boolean|true|是否显示返回按钮|
|wechat|Boolean|app为true, pc为false|是否显示head组件|
|btns|Array|-|按钮配置, [查看btns详情](#btns)|

### btns
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|显示内容, `注：设置title后，不显示icon图标`|
|icon|String|-|图标|
|event|Function|-|按钮点击事件|
