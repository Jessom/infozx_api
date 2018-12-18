# BubbleButton
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/bubbleButton.html)
> 右下角小气泡

## 示例
``` vue{8}
<template lang="html">
  <div class="container">
		<bubble-button :options='options' @onBubble='onBubble' />
	</div>
</template>

<script>
import BubbleButton from '@/components/Buttons/BubbleButton.vue'
export default {
	data() {
		return {
			options: {
				btns: [{
					icon: 'icon-jiantouyou'
				}, {
					icon: 'icon-sousuo'
				}]
			}
		}
	},
	methods: {
		onBubble(obj) {
			console.log(obj)
		}
	},
	components: {
		BubbleButton
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
|defaultIcon|String|icon-Plus|多个按钮生效, 默认展开按钮的图标|
|btns|Array|-|渲染的按钮, [查看btns详情](#btns)|
|show|Boolean|mui.os.plus?false:true|是否显示|

### btns
::: tip 提示
btns中的项，可以随意添加
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|icon|String|-|图标|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onBubble|{icon}|点击事件|
