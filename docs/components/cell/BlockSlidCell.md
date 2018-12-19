# BlockSlidCell
[Demo](http://watasi.gitee.io/infozx_api/dist/#/blockSlidCell.html)
> 块状可左右滑动cell

## 示例
``` vue{12}
<template lang="html">
  <div class="container">
		<div class="mui-content">
			<block-slid-cell :options='opt1' @onCellMenuClick='onCellMenuClick' @onCellClick='onCellClick' />

			<block-slid-cell :options='opt2' @onCellMenuClick='onCellMenuClick' @onCellClick='onCellClick' />
		</div>
	</div>
</template>

<script>
import BlockSlidCell from '@/components/Cell/BlockSlidCell.vue'
export default {
	data() {
		return {
			opt1: {
				showHead: true,
				transparent: true,
				showMenu: false,
				showRightNav: true,
				data: {
					title: '可以左右滑动'
				},
				theme: true,
				list: [[{
					icon: 'icon-saoma',
					title: '首页'
				}, {
					icon: 'icon-saoma',
					title: '首页'
				}], [{
					icon: 'icon-saoma',
					title: '首页'
				}, {
					icon: 'icon-saoma',
					title: '首页'
				}]]
			},
			opt2: {
				showHead: true,
				transparent: true,
				showMenu: false,
				showRightNav: true,
				data: {
					title: '自定义'
				},
				block: true,
				indicator: true,
				list: [[{
					text: 'わ',
					style: 'green',
					title: '我的'
				}, {
					text: 'タ',
					style: 'orange',
					title: '你的'
				}, {
					text: 'し',
					style: 'blue',
					title: '他的'
				}, {
					text: '',
					style: '#f40',
					title: '菜单'
				}], [{
					icon: 'icon-saoma',
					style: '#f60',
					title: '首页'
				}, {
					text: 'わ',
					style: 'green',
					title: '我的'
				}, {
					text: 'タ',
					style: 'orange',
					title: '你的'
				}, {
					text: 'し',
					style: 'blue',
					title: '他的'
				}]]
			}
		}
	},
	methods: {
		onCellMenuClick(obj) {
			console.log(obj)
		},
		onCellClick(obj) {
			console.log(obj)
		}
	},
	components: {
		BlockSlidCell
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
|showMenu|Boolean|true|是否显示右侧菜单按钮|
|transparent|Boolean|false|是否透明显示, 为true时, 前面竖线、右侧按钮不显示, title字号会变小|
|data|Object|-|渲染文本, [查看data详情](#data)|
|showHead|Boolean|false|是否显示头部|
|quantity|Number|5|一行显示的个数，最多6个，最少1个|
|theme|Boolean|false|是否使用主题色背景，默认白色背景|
|block|Boolean|false|图标是否块状显示|
|isRadius|Boolean|false|`block`为`true`有效，是否圆形显示|
|indicator|Boolean|false|是否显示指示器|
|list|Array|-|渲染数据列表, **必须是`二维数组`**, [查看list配置](#list)|

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
|icon|String|iconfont图标, icon与text为空时,默认显示title第一个文字|
|title|String|标题|
|text|String|默认为空, 替换图标显示文本, `使用text时, icon必须为空或不传入`|
|style|String|背景色，支持`rgb(0,0,0)`, `rgba(0,0,0,.5)`, `red`, `#f60`|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCellMenuClick|{title,showMenu,icon}|右侧菜单按钮被点击事件|
|onCellClick|{icon,title}|渲染出的cell被点击事件|
