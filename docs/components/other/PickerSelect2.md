# PickerSelect2(可以选择员工)
[Demo](https://watasi.cn/infozx_api/dist/#/pickerSelect2)

## 示例
```vue{11}
<template>
	<div>
		<button @tap='test'>测试</button>
		<PickerSelect2
			:list='list'
			@onSuccess='onSuccess' />
	</div>
</template>

<script>
import PickerSelect2 from '@/components/Other/PickerSelect2.vue'
export default {
	data() {
		return {
			list: []
		}
	},
	created() {
		setTimeout(() => {
			this.list = [{
				id: 1,
				title: '安得集团',
				staff: [],
				children: [{
					id: 2,
					title: '设计部',
					staff: [{
						id: 1,
						title: '张三',
						image: '',
						desc: '设计师'
					}, {
						id: 2,
						title: '李四',
						image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=586574978,3261086036&fm=27&gp=0.jpg',
						desc: '设计师'
					}],
					children: [{
						id: 3,
						title: '设计一组',
						staff: [{
							id: 3,
							title: '王五',
							image: '',
							desc: '设计师'
						}]
					}]
				}]
			}, {
				id: 4,
				title: '中系科技',
				staff: [],
				children: [{
					id: 5,
					title: '市场部',
					staff: [{
						id: 4,
						title: '白旭',
						image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1137298932,366992998&fm=27&gp=0.jpg',
						desc: '市场经理'
					}, {
						id: 5,
						title: '钱斌',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1810152264,2923293270&fm=27&gp=0.jpg',
						desc: '业务员'
					}, {
						id: 6,
						title: '陈德文',
						image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3466222248,28477086&fm=27&gp=0.jpg',
						desc: '业务员'
					}, {
						id: 7,
						title: '吴永健',
						image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4184649264,700756858&fm=27&gp=0.jpg',
						desc: '业务员'
					}],
					children: []
				}, {
					id: 6,
					title: '研发部',
					staff: [{
						id: 8,
						title: '李敏敏',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=782046930,1105099424&fm=27&gp=0.jpg',
						desc: 'Android工程师'
					}, {
						id: 9,
						title: '张田田',
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3349769256,2152079369&fm=27&gp=0.jpg',
						desc: 'IOS工程师'
					}, {
						id: 10,
						title: '苏霞',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=790506092,2369397687&fm=27&gp=0.jpg',
						desc: '前端工程师'
					}, {
						id: 11,
						title: 'わタし',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2993379943,3296388548&fm=27&gp=0.jpg',
						desc: '前端工程师'
					}],
					children: []
				}]
			}]
		}, 500)
	},
	methods: {
		test() {
			mui('#z-picker-panel2').popover('toggle')
		},
		onSuccess(obj) {
			console.log(obj)
		}
	},
	components: {
		PickerSelect2,
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
|showSearch|Boolean|false|是否显示搜索框|
|list|Array|-|渲染数据, [查看list详情](#list)|
|options|Array|-|配置项, [查看options详情](#options)|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|id|Number|-|部门id|
|title|String|-|部门名称|
|staff|Array|-|部门员工, [查看staff](#staff)|
|children|Array|-|子部门信息, 参数信息同`list`|

### staff
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|id|Number|-|员工id|
|image|String|-|头像，没有或不传入为`title`首字母|
|title|String|-|大字|
|desc|String|-|小字|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|people|Boolean|true|是否至少选择一个人|
|toast|String|请选中一个人|没选人的提示|
|multi|Boolean|true|是否多选|
|self|Boolean|false|是否可以选择自己|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onSuccess|{branch, staff}|确定按钮事件|
