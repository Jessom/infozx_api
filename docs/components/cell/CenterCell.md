# CenterCell
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/centerCell.html)
> 居中cell

## 示例
``` vue{10}
<template lang="html">
  <div class="container">
		<center-cell
			:options='options'
			@onCenter='onCenter' />
	</div>
</template>

<script>
import CenterCell from '@/components/Cell/CenterCell.vue'
export default {
	data() {
		return {
			options: {
				desc: 'わタし',
				src: 'https://gitee.com/uploads/37/1880237_watasi.png?1524038398'
			}
		}
	},
	methods: {
		onCenter(obj) {
			console.log(obj)
		}
	},
	components: {
		CenterCell
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
|desc|String|-|描述信息|
|src|String|static/common/images/avatar.jpg|图片url|
|isRadius|Boolean|true|图片是否以圆形显示|
|theme|Boolean|true|是否使用主题色背景，默认白色背景|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCenter|{desc,isRadius,src,theme}|点击事件|
