# BasicButton(商城按钮组)
[Demo](https://watasi.cn/infozx_api/dist/#/basicButton)

## 示例
``` vue{23}
<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div>
				<p>我是表单信息</p>
				<p>我是表单信息</p>
				<p>我是表单信息</p>
			</div>
			<basic-button :options='opt2' @onBasic='onBasic' />
			<div class="mt10">
				<p>禁用按钮</p>
				<p>禁用按钮</p>
				<p>禁用按钮</p>
			</div>
			<basic-button :options='opt3' @onBasic='onBasic' />

			<basic-button :options='opt1' @onBasic='onBasic' />
		</div>
	</div>
</template>

<script>
import BasicButton from '@/components/Buttons/BasicButton.vue'
export default {
	data() {
		return {
			opt1: {
				list: [{
					title: '取消'
				}, {
					title: '提交'
				}]
			},
			opt2: {
				isFixed: false,
				theme: false,
				list: [{
					title: '取消'
				}, {
					title: '提交'
				}]
			},
			opt3: {
				isFixed: false,
				list: [{
					title: '禁用',
					disabled: true,
				}, {
					title: '可用'
				}]
			}
		}
	},
	methods: {
		onBasic(obj) {
			alert(obj.title)
		}
	},
	components: {
		BasicButton
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
|isFixed|Boolean|true|是否始终漂浮在屏幕最下边|
|theme|Boolean|true|是否使用主题色背景，默认白色背景|
|list|Array|-|渲染数据, [查看list详情](#list)|

### list
::: tip 提示
list中的项，可以随意添加
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|文本|
|disabled|Boolean|-|是否禁用该按钮|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onBasic|{title, [icon]}|点击事件|
