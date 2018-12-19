# BadgeCell
[Demo](http://watasi.gitee.io/infozx_api/dist/#/badgeCell.html)
> 徽章

## 示例
``` vue{17}
<template lang="html">
  <div class="container">
  	<badge-cell :options='options' @onBadgeClick='onBadgeClick' />

  	<div class="mt10"></div>
  	<badge-cell :options='options2' @onBadgeClick='onBadgeClick' />

  	<div class="mt10"></div>
  	<badge-cell :options='options3' @onBadgeClick='onBadgeClick' />

  	<div class="mt10"></div>
  	<badge-cell :options='options4' @onBadgeClick='onBadgeClick' />
	</div>
</template>

<script>
import BadgeCell from '@/components/Cell/BadgeCell.vue'
export default {
	data() {
		return {
			options: {
				list: [{
					text: '张',
					title: '马邦花园',
					desc: '6-666',
					badges: [{
						name: '签',
						active: true
					}, {
						name: '社',
						active: true
					}, {
						name: '工',
						active: true
					}, {
						name: '开',
						active: false
					}]
				}, {
					text: '李',
					title: '马邦花园',
					desc: '8-888',
					badges: [{
						name: '签',
						active: true
					}, {
						name: '社',
						active: false
					}, {
						name: '工',
						active: false
					}, {
						name: '开',
						active: false
					}]
				}]
			},
			options2: {
				list: [{
					text: '张',
					title: '马邦花园',
					desc: '6-666',
					badges: [{
						name: '退',
						active: false
					}]
				}, {
					text: '李',
					title: '马邦花园',
					desc: '8-888',
					badges: [{
						name: '退',
						active: true
					}]
				}]
			},
			options3: {
				style: '',
				list: [{
					text: '张',
					title: '马邦花园',
					desc: '6-666',
					badges: [{
						icon: 'icon-dianying',
						active: true
					}]
				}, {
					text: '李',
					title: '马邦花园',
					desc: '8-888',
					badges: [{
						icon: 'icon-dianying'
					}]
				}]
			},
			options4: {
				style: 'background',
				list: [{
					text: '张',
					title: '马邦花园',
					desc: '6-666',
					badges: [{
						name: '签',
						active: true
					}, {
						name: '社',
						active: true
					}, {
						name: '工',
						active: true
					}, {
						name: '开',
						active: false
					}]
				}, {
					text: '李',
					title: '马邦花园',
					desc: '8-888',
					badges: [{
						name: '签',
						active: true
					}, {
						name: '社',
						active: false
					}, {
						name: '工',
						active: false
					}, {
						name: '开',
						active: false
					}]
				}]
			},
		}
	},
	methods: {
		onBadgeClick(obj) {
			console.log(obj)
		}
	},
	components: {
		BadgeCell
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
|style|String|""|右侧徽章样式，目前支持`border`、`background`、`空`|
|list|Array|-|渲染数据, [查看list详情](#list)|

### list
::: tip 提示
list中的项，可以随意添加
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|text|String|-|左侧圆上面的文字|
|title|String|-|大的，黑的文字|
|desc|String|-|小的，颜色浅的文字|
|badges|Array|-|右侧渲染的徽章，[](#badges)|

### badges
::: tip 提示
badges中的项，可以随意添加
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|name|String|-|描述文字|
|active|Boolean|false|是否完成|
|icon|String|-|图标|
|color|String|-|[选填], 自定义badge文本颜色|
|backgroundColor|String|-|[选填], 自定义badge背景色|


## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onBadgeClick|{text, title, desc, badges}|点击事件|
|onBadgeItem|{text, title, desc, badges}|右侧badge的点击事件|
