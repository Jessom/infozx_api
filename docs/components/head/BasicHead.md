# BasicHeader
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/basicHead.html)
::: warning 提示
不推荐使用该组件，建议使用 **`openWindowWithTitle`** 方法
:::


## 示例
``` vue{8}
<template lang="html">
	<div class="container">
		<basic-head :options='options' />
	</div>
</template>

<script>
import BasicHead from '@/components/Header/BasicHead.vue'
export default {
	data() {
		return {
			options: {
				title: '首页',					// title
				back: true,						// 是否显示返回按钮
				wechat: true,					// 是否显示head，默认APP显示，PC不显示
				btns: [{							// head右侧渲染按钮
					title: '提交',
					event: () => alert('123')
				}, {
					icon: 'icon-sousuo', 	// 设置title后，则不显示图标
					event: () => alert('789')
				}]
			}
		}
	},
	components: {
		BasicHead
	}
}
</script>
```
