# PageSlideHome
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/first.html)

::: warning 警告
使用该组件，请先在`page home`的`html`文件中引用一下代码 <br />
该组件**`仅在APP下有效`** <br />
请配合[PageSlideBar](./PageSlideBar.html)组件使用
:::
```html
<script src="../static/common/mui/js/webviewGroup.js" charset="utf-8"></script>
```

## 示例
```vue{8}
<template lang="html">
	<div class="container">
		<page-slide-home :options='pagehome' :active='active' />
	</div>
</template>

<script>
import PageSlideHome from '@/components/Page/PageSlideHome.vue'

import handler from '../handler'
export default {
	data() {
		return {
			active: 'first.html',
			pagehome: {
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
			}
		}
	},
	methods: {
		
	},
	components: {
		PageSlideHome
	}
}
</script>

<style lang="scss">
.container {
	
}
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|active|String|-|默认选中项，必须是`list`中的**id**|
|options|Object|-|配置参数, [查看options](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染数据, [查看list](#list)|

### list
::: tip 提示
list中的项，可以随意添加
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|id|String|-|**必须**, webview的id|
|url|String|-|跳转url|
|title|String|-|标题|
|extras|Object|-|**必须**, APP端传递参数, 一般填写 `{}` 即可|

