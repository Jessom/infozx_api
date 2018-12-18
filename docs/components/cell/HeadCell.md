# HeadCell
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/headCell.html)
> cell列表的头部

## 示例
``` vue{10}
<template lang="html">
  <div class="container">
		<head-cell 
			:options='options'
			@onCellMenuClick='onCellMenuClick' />
	</div>
</template>

<script>
import HeadCell from '@/components/Cell/HeadCell.vue'
export default {
	data() {
		return {
			options: {
				showMenu: false,			// 是否显示右侧菜单按钮
				data: {
					title: '任务计划',			// 标题，默认空
					icon: 'icon-right',		// 菜单按钮图标
				}
			}
		}
	},
	methods: {
		onCellMenuClick(obj) {
			console.log(obj) 	// 返回当前head的配置，即data中的clhOptions
		}
	},
	components: {
		HeadCell
	}
}
</script>
```
## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|showMenu|Boolean|true|是否显示右侧菜单按钮|
|transparent|Boolean|false|是否透明显示, 为true时, 前面竖线、右侧按钮不显示, title字号会变小|
|data|Object|-|渲染文本, [查看data详情](#data)|

### data
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|标题|
|tag|String|-|左侧图标，代替竖线|
|tagColor|String|主题色|左侧图标颜色|
|icon|String|icon-jiantouyou|右侧菜单按钮图标|
|text|String|-|右侧提示文字|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCellMenuClick|{title,showMenu,icon}|右侧菜单按钮被点击事件|
