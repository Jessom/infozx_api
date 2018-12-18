# SelectCell
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/selectCell.html)
> 多选

## 示例
``` vue{10}
<template>
	<div class="container">
		<select-cell
			:list="list"
			@onSuccess='onSuccess' />
	</div>
</template>

<script>
import SelectCell from '@/components/Cell/SelectCell.vue'
export default {
	data() {
		return {
			list: [{
				id: 1,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 2,
				title: '李四',
				desc: '业务组长',
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3296169939,2964109829&fm=27&gp=0.jpg',
				active: false
			}, {
				id: 3,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 4,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 5,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 6,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 7,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 8,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 9,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 10,
				title: '张三',
				desc: '业务组长',
				active: false
			}]
		}
	},
	methods: {
		onSuccess(obj) {
			console.log(obj)
		}
	},
	components: {
		SelectCell
	}
}
</script>
<style lang='scss'>
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染数据, [查看list详情](#list)|
|options|Object|-|配置, [查看options详情](#options)|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|id|Number|-|**必须**|
|title|String|-|大的，黑的字|
|desc|String|-|小的，浅的字|
|image|String|-|图片url，没有的话，显示title第一个字|
|active|Boolean|-|**必须**，`true`默认选中，`false`默认不选中|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|isRadius|Boolean|true|图片是否以圆形显示|
|showAvatar|Boolean|true|是否显示头像|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onSuccess|{id,title,desc,image,active}|确定按钮点击事件|