# TrainTickets
[Demo](http://watasi.gitee.io/infozx_api/dist/#/trainTickets.html)
> 火车票

## 示例
```vue{8}
<template>
	<div class="container">
		<train-tickets :options='opt' @click='click' />
	</div>
</template>

<script>
import TrainTickets from '@/components/Other/TrainTickets.vue'
export default {
	data() {
		return {
			opt: {
				left: { title: '苏州北', meta: '起始站' },
				right: { title: '徐州东', meta: '终点站' }
			}
		}
	},
	methods: {
		click(item) {
			// 点击左边，返回 opt.left
			// 点击右边，返回 opt.right
			console.log(item)
		}
	},
	components: {
		TrainTickets
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
|left|Object|{title: '1月1日', meta: '开始'}|左边|
|right|Object|{title: '12月31日', meta: '结束'}|右边|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|click|{title,meta}|点击事件|