# MultiButton(多功能button组件)
[Demo](https://watasi.cn/infozx_api/dist/#/multiButton)

## 示例
``` vue{8}
<template lang="html">
  <div class="container">
		<multi-button :options='options' @onMulti='onMulti' />
	</div>
</template>

<script>
import MultiButton from '@/components/Buttons/MultiButton.vue'
export default {
	data() {
		return {
			options: {
				list: [{
					title: '菜单',
					icon: 'icon-sousuo'
				}, {
					title: '客服',
					icon: 'icon-saoma'
				}, {
					title: '客服',
					icon: 'icon-saoma'
				}, {
					title: '店铺',
					icon: 'icon-Plus'
				}, {
					title: '立即购买',
					icon: 'icon-Plus'
				}]
			}
		}
	},
	methods: {
		onMulti(obj) {
			console.log(obj)
		}
	},
	components: {
		MultiButton
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
|isFixed|Boolean|true|是否始终漂浮在屏幕最下边|
|list|Array|-|渲染数据, [查看list详情](#list)|

### list
::: tip 提示
list中的项，可以随意添加
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|文本|
|icon|String|-|图标|
|position|Boolean|false|图标显示位置，`true`左边显示，`false`上边显示|
|background|String|-|按钮背景色，可传入`red`、`#f60`、`rgb(0,5,2)`,、`rgba(255,255,255,.3)`|
|color|Boolean|false|按钮文本颜色，`true`为白色，`false`为灰色|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onMulti|{title, icon}|点击事件|
