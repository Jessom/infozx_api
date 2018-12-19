# MultiColCell
[Demo](http://watasi.gitee.io/infozx_api/dist/#/multiColCell)

## 示例
``` vue{10}
<template>
	<div class="container">
		<multi-col-cell
			:options='opt'
			@onCellClick='onCellClick' />
	</div>
</template>

<script>
import MultiColCell from '@/components/Cell/MultiColCell.vue'
export default {
	data() {
		return {
			opt: {
				list: [{
					title: '打卡定位',
					descs: ['使用人：林动 林琅天', '位置：金门路1200号']
				}, {
					title: '市场部',
					descs: ['周期：周一 周二 周三 周四 周五 周六', '时间：09:00 - 17:30', '人数：7人']
				}, {
					title: '研发部',
					descs: ['周期：周一 周二 周三 周四 周五', '时间：09:00 - 18:00', '人数：7人']
				}]
			}
		}
	},
	methods: {
		onCellClick(obj) {
			console.log(obj)
		}
	},
	components: {
		MultiColCell
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
|showRightNav|Boolean|true|是否显示右侧小箭头|
|list|Array|-|渲染数据，[查看list](#list)|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|大的，黑的字|
|descs|Array|-|各个描述|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCellClick|{title,descs}|点击事件|