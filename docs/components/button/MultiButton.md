# MultiButton
[Demo](http://watasi.gitee.io/infozx_api/dist/#/multiButton.html)
> 多功能button组件

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

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onMulti|{title, icon}|点击事件|
