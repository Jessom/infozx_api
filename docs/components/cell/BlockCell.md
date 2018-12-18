# BlockCell
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/blockCell.html)
>块状cell

## 示例

``` vue{25}
<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div class="mb10">
				<block-cell :options='opt' @onCellClick='onCellClick' />
			</div>

			<div class="mb10">
				<block-cell :options='opt2' @onCellClick='onCellClick' />
			</div>

			<div class="mb10">
				<block-cell :options='opt4' @onCellClick='onCellClick' />
			</div>

			<div class="mb10">
				<block-cell :options='opt3' @onCellClick='onCellClick' @onEdit='onEdit' />
				<button @tap='edit'>编辑</button>
			</div>
		</div>
	</div>
</template>

<script>
import BlockCell from '@/components/Cell/BlockCell.vue'
export default {
	data() {
		return {
			opt: {
				title: '菜单',
				showHead: true,
				transparent: true,
				showMenu: false,
				showRightNav: true,
				data: {
					title: '图标加文字'
				},
				quantity: 4,
				list: [{
					icon: 'icon-saoma',
					title: '首页'
				}, {
					icon: 'icon-saoma',
					title: '首页'
				}, {
					icon: 'icon-saoma',
					title: '首页'
				}, {
					icon: 'icon-saoma',
					title: '首页'
				}]
			},
			opt2: {
				title: '菜单',
				showHead: true,
				transparent: true,
				showMenu: false,
				showRightNav: true,
				data: {
					title: '自定义'
				},
				block: true,
				list: [{
					icon: 'icon-saoma',
					style: '#f60',
					title: '首页'
				}, {
					text: '',
					style: '#f40',
					title: '菜单'
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
				}]
			},
			opt3: {
				showHead: true,
				data:{
					title: 'HR'
				},
				block: true,
				quantity: 5,
				edit: false,
				list: [{
					icon: 'icon-saoma orange-bg',
					title: '首页',
					edit: true
				}, {
					icon: 'icon-saoma orange-bg',
					title: '首页',
					edit: false
				}, {
					icon: 'icon-saoma orange-bg',
					title: '首页',
					edit: false
				}, {
					icon: 'icon-saoma orange-bg',
					title: '首页',
					edit: true
				}, {
					icon: 'icon-saoma orange-bg',
					title: '首页',
					edit: true
				}]
			},
			opt4: {
				title: '菜单',
				showHead: true,
				transparent: true,
				showMenu: false,
				showRightNav: true,
				data: {
					title: '自定义'
				},
				block: true,
				list: [{
					icon: 'icon-saoma',
					image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1810152264,2923293270&fm=27&gp=0.jpg',
					style: '#f60',
					title: '首页'
				}, {
					text: '',
					style: '#f40',
					image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1137298932,366992998&fm=27&gp=0.jpg',
					title: '菜单'
				}, {
					text: 'わ',
					style: 'green',
					image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3349769256,2152079369&fm=27&gp=0.jpg',
					title: '我的'
				}, {
					text: 'タ',
					style: 'orange',
					image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=790506092,2369397687&fm=27&gp=0.jpg',
					title: '你的'
				}, {
					text: 'し',
					image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2237097328,2363045038&fm=27&gp=0.jpg',
					style: 'blue',
					title: '他的'
				}]
			}
		}
	},
	methods: {
		onCellClick(obj) {
			alert(obj.title)
		},
		onEdit(obj) {
			console.log(obj)
		},
		edit() {
			this.opt3.edit = !this.opt3.edit
		}
	},
	components: {
		BlockCell,
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
|showHead|Boolean|false|是否显示头部|
|quantity|Number|5|一行显示的个数，最多6个，最少1个|
|theme|Boolean|false|是否使用主题色背景，默认白色背景|
|block|Boolean|false|图标是否块状显示|
|isRadius|Boolean|false|`block`为`true`有效，是否圆形显示|
|list|Array|-|渲染数据列表, [查看list配置](#list)|
|edit|Boolean|false|是否修改当前按钮|

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
|image|String|图片url，当传入该值后，不会显示icon内容，改为显示图片|
|title|String|标题|
|color|String|标题&&icon的文字颜色，如: `#666`、`red`、`rgba(0,0,0,.3)`等|
|text|String|默认为空, 替换图标显示文本, `使用text时, icon必须为空或不传入`|
|style|String|背景色，支持`rgb(0,0,0)`, `rgba(0,0,0,.5)`, `red`, `#f60`|
|edit|Boolean or Number|-|`true`为加号, `false`为减号, 数字就显示数字|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCellMenuClick|{title,showMenu,icon}|右侧菜单按钮被点击事件|
|onCellClick|{icon,title}|渲染出的cell被点击事件|
