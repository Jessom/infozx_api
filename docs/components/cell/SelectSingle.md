# SelectSingle
[Demo](http://watasi.gitee.io/infozx_api/dist/#/selectSingle.html)
> 单选

## 示例
``` vue{16,17}
<template>
	<div class="container">
		<button @tap='test' class="mui-btn mui-btn-block">测试</button>

		<side-panel :options='{id: "spanel", style: "bottom", height: "70vh"}'>
			<select-single
				:list='list'
				ref='single'
				@onPopover='onPopover'
				@onSingle='onSingle' />
		</side-panel>
	</div>
</template>

<script>
import SidePanel from '@/components/Other/SidePanel.vue'
import SelectSingle from '@/components/Cell/SelectSingle.vue'
export default {
	data () {
		return {
			list: [{
				id: 1,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 2,
				title: '李四',
				desc: '业务组长',
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3296169939,2964109829&fm=27&gp=0.jpg',
			}, {
				id: 3,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 4,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 5,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 6,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 7,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 8,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 9,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 10,
				title: '张三',
				desc: '业务组长',
			}]
		}
	},
	methods: {
		test() {
			mui('#spanel').popover('toggle')

			// 情况选中项
			this.$refs.single.clear()
		},
		onPopover() {
			mui('#spanel').popover('toggle')
		},
		onSingle(item) {
			console.log(item)
			mui('#spanel').popover('toggle')
		}
	},
	components: {
		SidePanel,
		SelectSingle
	}
}
</script>

<style lang="scss">
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
|title|String|-|大的，黑的字|
|desc|String|-|小的，浅的字|
|image|String|-|图片url，没有的话，显示title第一个字|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|isRadius|Boolean|true|图片是否以圆形显示|
|showAvatar|Boolean|true|是否显示头像|
|scroll|Boolean|true|是否可滚动，在以弹出的形式显示时，请不要修改为false|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onSingle|{title,desc,image}|选中某一项事件|
|onPopover|evnet|点击遮罩的回调，默认会取消的已选中的项|

## refs
|事件|参数|说明|
|:---:|:---:|:---:|
|clear|-|清除选中项|