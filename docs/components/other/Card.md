# Card
[Demo](http://watasi.gitee.io/infozx_api/dist/#/card)
> 我也不知道有啥用，让写就写呗

## 示例
```vue{8}
<template>
	<div>
		<Card :options='opt' @click='click' />
	</div>
</template>

<script>
import Card from '@/components/Other/Card.vue'
export default {
	data() {
		return {
			opt: [{
				title: '中系科技',
				time: '2018-07-10',
				list: ['10-01', '10-02', '10-03', '10-04']
			}]
		}
	},
	methods: {
		click() {
			alert(4851)
		}
	},
	components: {
		Card
	}
}
</script>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染数据|
|options|Object|-|配置参数|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|标题|
|time|String|-|时间|
|list|Array|-|渲染数据|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|isSlide|Boolean|true|是否左滑删除|
|showRightNav|Boolean|true|是否显示右侧小箭头|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|click|{title, time, list}|点击事件|
|onDelect|{li, title, time, list}|左滑删除事件|