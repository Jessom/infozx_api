# PickerSelect
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/pickerSelect.html)
> 选部门

## 示例
```vue{11}
<template>
	<div>
		<button @tap='test'>测试</button>
		<PickerSelect
			:list='list'
			@onSuccess='onSuccess' />
	</div>
</template>

<script>
import PickerSelect from '@/components/Other/PickerSelect.vue'
export default {
	data() {
		return {
			list: []
		}
	},
	created() {
		setTimeout(() => {
			this.list = [{
				title: '安得集团',
				children: [{
					title: '中系科技',
					children: [{
						title: '研发部',
						children: []
					}, {
						title: '市场部',
						children: []
					}]
				}, {
					title: '安得装饰',
					children: [{
						title: '养育巷店',
						children: []
					}, {
						title: '新区店',
						children: []
					}, {
						title: '园区店',
						children: []
					}]
				}]
			}]
		}, 500)
	},
	methods: {
		test() {
			mui('#z-picker-panel').popover('toggle')
		},
		onSuccess(obj) {
			console.log(obj)
		}
	},
	components: {
		PickerSelect,
	}
}
</script>

<style lang='scss'>
.active {
	display: inline-block;
	padding: 3px 7px;
}
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染数据, [查看list详情](#list)|
|options|Array|-|配置项, [查看options详情](#options)|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|渲染标题|
|children|Array|-|子数据|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|final|Boolean|false|是否需要选择到最后一层|
|toast|String|请选到最后|没选到最后的提示信息|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onSuccess|{}|确定按钮事件|
