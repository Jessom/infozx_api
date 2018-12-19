# TextCell
[Demo](http://watasi.gitee.io/infozx_api/dist/#/textCell)
> 纯文本cell

## 示例
``` vue{16}
<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div class="mb10">
				<text-cell :options='opt1' @onCellMenuClick='onCellMenuClick' @onCellClick='onCellClick' />
			</div>

			<div class="mb10">
				<text-cell :options='opt2' @onCellMenuClick='onCellMenuClick' @onCellClick='onCellClick' />
			</div>
		</div>
	</div>
</template>

<script>
import TextCell from '@/components/Cell/TextCell.vue'
export default {
	data() {
		return {
			opt1: {
				data: {
					title: '设置',
					text: '查看更多'
				},
				list: [{
					id: 1,
					icon: 'icon-sousuo orange-color',
					title: '搜索',
					badges: [{
						title: '已分配',
						background: 'green'
					}, {
						title: '未分配',
					}]
				}, {
					id: 2,
					icon: 'icon-saoma base-color',
					title: '扫码',
				}]
			},
			opt2: {
				showHead: false,
				list: [{
					title: '安全'
				}, {
					title: '绑定'
				}]
			}
		}
	},
	methods: {
		onCellMenuClick(obj) {
			alert(obj.data.title)
		},
		onCellClick(obj) {
			alert(obj.title)
		}
	},
	components: {
		TextCell,
	}
}
</script>

<style lang="sass">

</style>
```
## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|showMenu|Boolean|true|是否显示右侧菜单按钮|
|transparent|Boolean|false|是否透明显示, 为true时, 前面竖线、右侧按钮不显示, title字号会变小|
|data|Object|-|渲染文本, [查看data详情](#data)|
|showHead|Boolean|true|是否显示头部|
|showRightNav|Boolean|true|是否显示右侧小箭头|
|iconShow|Boolean|true|是否渲染icon|
|iconPos|String|'left'|icon渲染位置，取值`left`, `right`|
|list|Array|-|渲染数据列表, [查看list配置](#list)|

### data
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|标题|
|icon|String|icon-jiantouyou|右侧菜单按钮图标|
|text|String|-|右侧提示文字|

### list
::: tip 提示
list中的项，可以随意添加
:::

|参数名|类型|描述|
|:---:|:---:|:---:|
|icon|String|iconfont图标, `iconShow`为`false`时，可不添加|
|title|String|标题|
|badges|Array|[]|徽章, [查看badges](#badges)|

### badges
|参数名|类型|描述|
|:---:|:---:|:---:|
|title|String|标题|
|background|String|背景色, 默认主题背景|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCellMenuClick|{title,showMenu,icon}|右侧菜单按钮被点击事件|
|onCellClick|{icon,title}|渲染出的cell被点击事件|
