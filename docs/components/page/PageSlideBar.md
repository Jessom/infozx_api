# PageSlideBar
[Demo](http://watasi.gitee.io/infozx_api/dist/#/first.html)

::: tip 提示
请配合[PageSlideHome](./PageSlideHome.html)组件使用
:::

## 示例
```vue{9}
<template lang="html">
	<div class="container">
		<page-slide-bar :options='pagehome' />
		<blend-cell :options='bcopt' />
	</div>
</template>

<script>
import PageSlideBar from '@/components/Page/PageSlideBar.vue'
import BlendCell from '@/components/Cell/BlendCell.vue'

import handler from '../handler'
export default {
	data() {
		return {
			pagehome: {
				active: 'first.html',
				list: [{
					id: 'first.html',
					url: 'first.html',
					title: '未处理',
					extras: {}
				}, {
					id: 'second.html',
					url: 'second.html',
					title: '已通过',
					extras: {}
				}, {
					id: 'third.html',
					url: 'third.html',
					title: '已退回',
					extras: {}
				}]
			},
			bcopt: {
				isReverse: false,
				list: [{
					desc: '市场部',
					title: '张三',
					image: '',
					badges: [{
						title: '05-07',
						background: 'rgba(255,255,255,0)'
					}]
				}]
			}
		}
	},
	methods: {
		
	},
	components: {
		PageSlideBar,
		BlendCell
	}
}
</script>

<style lang="scss">
.container {
	.cell-container.z-cell .badges-wrap .badges-item {
		color: #666;
	}
}
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|active|String|-|默认选中项，必须是`list`中的**id**|
|list|Array|-|渲染数据, [查看list](#list)|
|show|Boolean|mui.os.plus?false:true|是否显示|
|open|Boolean|true|是否打卡新页面|

### list
::: tip 提示
list中的项，可以随意添加
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|id|String|-|**必须**, webview的id|
|url|String|-|跳转url|
|title|String|-|标题|
|extras|Object|-|APP端传递参数, 一般填写 `{}` 即可|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|ontopbar|{id,url,title}|点击事件|