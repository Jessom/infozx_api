# Sort
[Demo](http://watasi.gitee.io/infozx_api/dist/#/sort)
> 排序组件

## 示例
```vue{20}
<template lang="html">
  <div class="container">
  	<sort
  		:options='opt1'
			:lefticon='opt1.lefticon'
			:screenColor='opt1.screenColor'
			@onSort='onSort'
			@onSortScreen='onSortScreen'
			@onSortLeft='onSortLeft' />

  	<div class="mt10">
  		<sort
	  		:options='opt2'
	  		@onSort='onSort2'/>
  	</div>
	</div>
</template>

<script>
import Sort from '@/components/Other/Sort.vue'
export default {
	data() {
		return {
			opt1: {
				screen: true,
				default: 1,
				left: true,
				screenColor: false,
				lefticon: 'icon-solid-person',
				list: [{
					title: '综合',
					icondir: true,
					issort: true
				}, {
					title: '价格',
					icondir: false,
					issort: false
				}, {
					title: '距离',
					icondir: true,
					issort: false
				}]
			},
			opt2: {
				theme: true,
				default: 0,
				list: [{
					title: '综合',
					icondir: true,
					issort: true
				}, {
					title: '价格',
					icondir: false,
					issort: false
				}, {
					title: '距离',
					icondir: true,
					issort: false
				}]
			}
		}
	},
	methods: {
		// 筛选
		onSortScreen() {
			console.log('点击了筛选按钮')
			this.opt1.screenColor = !this.opt1.screenColor
		},
		onSort(obj) {
			console.log(obj)
			this.opt1.default = obj.index 		// 切换默认选中项
			// 切换箭头方向
			this.opt1.list[obj.index].icondir = !this.opt1.list[obj.index].icondir
		},
		onSort2(obj) {
			console.log(obj)
			this.opt2.default = obj.index
			this.opt2.list[obj.index].icondir = !this.opt2.list[obj.index].icondir
		},
		onSortLeft() {
			this.opt1.lefticon = this.opt1.lefticon === 'icon-users' ? 'icon-solid-person' : 'icon-users'
		}
	},
	components: {
		Sort
	}
}
</script>

<style lang="scss">
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|
|lefticon|String|icon-solid-person|左边的图标，之所以放在`props`里，是为了更改方便|
|screenColor|Boolean|false|右边筛选按钮是否是主题色，之所以放在`props`里，是为了更改方便|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|screen|Boolean|true|是否显示筛选按钮|
|screenIcon|String|icon-shaixuan|筛选按钮上的图标|
|theme|Boolean|false|是否是主题色背景|
|left|Boolean|false|是否显示左侧的小东西|
|default|Number|-|**必须**, 默认选中项, 请使用数组索引|
|list|Array|-|渲染数据, [查看](#list)|

### list
> list中的项，可以随意添加

|参数名|类型|描述|
|:---:|:---:|:---:|
|title|String|渲染文字|
|icondir|Boolean|箭头方向, `true`代表箭头朝下, `false`代表箭头朝上|
|issort|Boolean|是否显示箭头|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onSort|{title,icondir,index}|排序选项点击事件|
|onSortScreen|-|筛选按钮点击事件|
|onSortLeft|-|左边按钮点击事件|
