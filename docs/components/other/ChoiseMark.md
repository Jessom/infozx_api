# ChoiseMark
::: tip 提示
使用该组件时，建议使用[BasicHead](../head/basichead.html)组件
:::
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/choiseMark.html)

## 示例
```vue{15}
<template>
	<div class="container">
		<basic-head :options='{title:"首页",wechat:true}' />
		<div class="mui-content">
			<button class="mui-btn mui-btn-block mui-btn-primary" @tap='test'>测试</button>
		</div>
		<ChoiseMark
			:list='list'
			@onSuccess='onSuccess' />
	</div>
</template>

<script>
import BasicHead from '@/components/Header/BasicHead.vue'
import ChoiseMark from '@/components/Other/ChoiseMark.vue'
export default {
	data() {
		return {
			list: [{
				title: '户型',
				multi: false,
				active: '茅草屋',
				list: [{
					title: '别墅',
				}, {
					title: '复式',
				}, {
					title: '平层',
				}, {
					title: '小洋楼',
				}, {
					title: '茅草屋',
				}, {
					title: '瓦房',
				}]
			}, {
				title: '房型',
				multi: true,
				list: [{
					title: '一室',
					active: false
				}, {
					title: '二室',
					active: true
				}, {
					title: '三室',
					active: false
				}, {
					title: '四室',
					active: false
				}, {
					title: '一厅',
					active: true
				}, {
					title: '二厅',
					active: false
				}, {
					title: '一厨',
					active: false
				}, {
					title: '一卫',
					active: false
				}]
			}, {
				title: '房屋状态',
				multi: false,
				active: '',
				list: [{
					title: '期房',
				}, {
					title: '现房',
				}]
			}, {
				title: '图纸',
				multi: false,
				active: '',
				list: [{
					title: '有',
				}, {
					title: '无',
				}]
			}]
		}
	},
	methods: {
		test() {
			mui('#choise-panel').popover('toggle')
		},
		onSuccess(obj) {
			console.log(obj)
		}
	},
	components: {
		ChoiseMark,
		BasicHead
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
|total|Number|4|一排显示几个|
|list|Array|-|渲染数据, [查看list详情](#list)|
|bhopt|Object|-|head组件配置, [查看bhopt详情](#bhopt)|
|bbopt|Object|-|底部按钮组件配置, [查看bbopt详情](#bbopt)|
|spopt|Object|-|panel组件配置, [查看spopt详情](#spopt)|

### list
::: warning 警告
**注意：**因为可以配置不同选择方式(多选、单选)，所以多选和单选传入的方式不同
:::
#### 单选
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|组标题|
|multi|Boolean|-|**单选请传false**|
|active|String|-|默认选中项，没有请填空，即`active: ''`|
|list|Array|-|渲染数据，必须包含`title`属性|
#### 多选
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|组标题|
|multi|Boolean|-|**多选请传true**|
|list|Array|-|渲染数据，必须包含`title`、`active`属性|

### bhopt
请参考[BasicHead](../head/BasicHead.html)组件<br />
默认值
```javascript
{
	title: '选择',
	wechat: true,
	isBack: false,
	btns: [{
		title: '取消',
		event: () => { mui(`#${this.sopt.id}`).popover('toggle') }
	}]
}
```

### bbopt
请参考[BasicButton](../button/BasicButton.html)组件<br />
默认值
```javascript
{ list: [{ title: '确定' }] }
```

### spopt
请参考[SidePanel](./SidePanel.html)组件<br />
默认值
```javascript
{
	id: 'choise-panel',
	style: 'bottom'
}
```

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onSuccess|[{}, {}, ...]|渲染数据被点击事件|