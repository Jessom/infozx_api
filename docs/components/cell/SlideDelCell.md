# SlideDelCell
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/slideDelCell.html)
> 右滑删除

## 示例
``` vue{25}
<template>
	<div class="container">
		<slide-del-cell
			:list='list'
			@onCellClick='onCellClick'
			@onDelect='onDelect' />

		<slide-del-cell
			:list='list'
			:options='{isRadius: false}'
			class='mt10'
			@onCellClick='onCellClick'
			@onDelect='onDelect' />

		<slide-del-cell
			:list='list'
			:options='{showAvatar: false}'
			class='mt10'
			@onCellClick='onCellClick'
			@onDelect='onDelect' />
	</div>
</template>

<script>
import SlideDelCell from '@/components/Cell/SlideDelCell.vue'
export default {
	data() {
		return {
			list: [{
				title: 'わタし',
				desc: 'わタしわわタしぢす',
				deleteText: '编辑',
				deleteBg: 'mui-btn-primary'
			}, {
				title: '今天是个好日子',
				desc: '心想的事儿都能成',
				image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3493430853,691568102&fm=27&gp=0.jpg'
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
		SlideDelCell
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

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|isRadius|Boolean|true|图片是否以圆形显示|
|showAvatar|Boolean|true|是否显示头像|
|showRightNav|Boolean|true|是否显示右侧小箭头|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCellClick|{title,desc,image}|cell点击事件|
|onDelect|{li,title,desc,image, handler}|删除按钮点击事件|