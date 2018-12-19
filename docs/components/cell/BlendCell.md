# BlendCell
[Demo](http://watasi.gitee.io/infozx_api/dist/#/blendCell.html)
> 图文混排cell

## 示例
```vue{16}
<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div class="mb10">
				<blend-cell :options='opt1' @onCellMenuClick='onCellMenuClick' @onCellClick='onCellClick' />
			</div>

			<div class="mb10">
				<blend-cell :options='opt2' @onCellClick='onCellClick' />
			</div>
		</div>
	</div>
</template>

<script>
import BlendCell from '@/components/Cell/BlendCell.vue'
export default {
	data() {
		return {
			opt1: {
				showHead: true,
				data: {
					title: '标题',
					text: '查看更多',
				},
				list: [{
					id: 1,
					desc: '2018-04-16',
					title: '今天是个好日子',
					image: '',
					background: 'red',
					badges: [{
						title: '已分配',
						background: 'green'
					}, {
						title: '未分配',
					}]
				}, {
					id: 2,
					desc: '2018-04-16',
					title: '明天也是好日子',
					image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg'
				}]
			},
			opt2: {
				isReverse: false,
				isRadius: false,
				list: [{
					id: 1,
					desc: '2018-04-16',
					title: '今天是个好日子',
					image: '',
					background: 'red',
					sup: '好日子'
				}, {
					id: 2,
					desc: '2018-04-16',
					title: '明天也是好日子',
					image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg'
				}]
			}
		}
	},
	methods: {
		onCellClick(obj) {
			alert(obj.title)
		},
		onCellMenuClick(obj) {
			alert(obj.data.title)
		}
	},
	components: {
		BlendCell
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
|showHead|Boolean|false|是否显示头部|
|showRightNav|Boolean|true|是否显示右侧小箭头|
|isRight|Boolean|false|图片是否右侧显示|
|showAvatar|Boolean|true|是否显示头像,没有头像url默认显示`list`中title的第一个文字|
|isReverse|Boolean|true|是否反转显示, 默认`desc`在上, `title`在下|
|isRadius|Boolean|true|图片是否以圆形显示|
|isSlide|Boolean|false|是否左滑删除|
|list|Array|-|渲染数据列表, [查看list配置](#list)|
|multi|Boolean|false|desc是否多行渲染，超过2行显示省略号|

### list
::: tip 提示
list中的项，可以随意添加
:::

|参数名|类型|描述|
|:---:|:---:|:---:|
|desc|String|描述、时间等|
|title|String|标题|
|icon|String|图标|
|sup|String|右上角提示文字|
|image|String|图片url|
|text|String|圆里面的字，默认title第一个字符|
|background|String|没有图片url, 显示首字母的情况下生效, 默认主题色背景|
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
|onDelect|{li,icon,title}|侧滑删除事件|
