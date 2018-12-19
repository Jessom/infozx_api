# NoticeCell
[Demo](http://watasi.gitee.io/infozx_api/dist/#/noticeCell.html)
> 右滑删除

## 示例
``` vue{11}
<template>
	<div class="container">
		<notice-cell
			:list='list'
			@onCellClick='onCellClick'
			@onDelect='onDelect' />
	</div>
</template>

<script>
import NoticeCell from '@/components/Cell/NoticeCell.vue'
export default {
	data() {
		return {
			list: [{
				title: 'わタし',
				desc: 'わタしわわタしぢす',
				deleteText: '编辑',
				deleteBg: 'mui-btn-primary',
				time: '06-28 16:02',
				read: false
			}, {
				title: '今天是个好日子',
				desc: '心想的事儿都能成',
				image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3493430853,691568102&fm=27&gp=0.jpg',
				read: true
			}]
		}
	},
	methods: {
		onCellClick(obj) {
			console.log(obj)
		},
		onDelect(obj) {
			console.log(obj)
			// 实现删除
			this.list.splice(this.list.findIndex(item => item.title === obj.title), 1)
			mui.swipeoutClose(obj.li)
		}
	},
	components: {
		NoticeCell
	}
}
</script>

<style lang='scss'>
.container{}
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染数据, [查看list详情](#list)|
|options|Object|-|配置参数, [查看options详情](#options)|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|大的，黑的字|
|desc|String|-|小的，浅的字|
|background|String|-|头像的背景色|
|image|String|-|图片url，没有图片默认title的第一个字|
|deleteText|String|删除|操作按钮上的文字|
|deleteBg|String|mui-btn-red|操作按钮的背景色|
|time|String|-|右上角|
|read|Boolean|-|是否已读|
|text|String|-|自定义头像上的文字|
|icon|String|-|图标，传入的话，不显示文字|
|badges|Array|-|徽章, [查看badges](#badges)|

### badges
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|标题|
|background|String|-|背景色, 默认主题背景|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|isRadius|Boolean|true|图片是否以圆形显示|
|showAvatar|Boolean|true|是否显示头像|
|showRightNav|Boolean|true|是否显示右侧小箭头|
|isDel|Boolean|true|是否左滑|
|multi|Boolean|false|desc是否多行渲染，超过2行显示省略号|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCellClick|{title,desc,image}|cell点击事件|
|onDelect|{li,title,desc,image, handler}|删除按钮点击事件|