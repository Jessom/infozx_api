# ActionSheet
[Demo](http://watasi.gitee.io/infozx_api/dist/#/actionSheet)
> 操作表

## 示例
```vue{11}
<template lang="html">
  <div class="container">
  	<button class="mui-btn mui-btn-block mui-btn-primary" @tap='action'>action sheet</button>
  	<action-sheet
  		:options='options'
  		@onActionSheet='onActionSheet' />
	</div>
</template>

<script>
import ActionSheet from '@/components/Other/ActionSheet.vue'
export default {
	data() {
		return {
			options: {
				id: 'action',
				list: [{
					title: '拍照'
				}, {
					title: '相册选择'
				}]
			}
		}
	},
	methods: {
		action() {
			mui(`#${this.options.id}`).popover('toggle')
		},
		onActionSheet(obj) {
			alert(obj.title)
			mui(`#${this.options.id}`).popover('toggle')
		}
	},
	components: {
		ActionSheet
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

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|id|String|action-sheet|当前actionsheet的id|
|cancel|Boolean|true|是否显示`取消`按钮|
|list|Array|-|渲染数据列表, [查看list配置](#list)|

### data
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|标题|
|icon|String|-|图标|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onActionSheet|{title,[icon]}|渲染数据被点击事件|