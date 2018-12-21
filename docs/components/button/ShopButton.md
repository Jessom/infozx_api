# ShopButton(商城按钮组)
[Demo](https://watasi.cn/infozx_api/dist/#/shopButton)

## 示例
``` vue{8}
<template lang="html">
  <div class="container">
		<shop-button :options='options' @onShop='onShop' />
	</div>
</template>

<script>
import ShopButton from '@/components/Buttons/ShopButton.vue'
export default {
	data() {
		return {
			options: {
				leftList: [{							// 左侧按钮组
					icon: 'icon-Plus',
					title: '购物车'
				}, {
					icon: 'icon-sousuo',
					title: '店铺'
				}, {
					icon: 'icon-saoma',
					title: '客服'
				}],
				rightList: [{							// 右侧按钮组
					title: '立即购买'
				}]
			}
		}
	},
	methods: {
		onShop(obj) {
			console.log(obj)
		}
	},
	components: {
		ShopButton
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
|leftList|Array|-|左侧按钮组, [查看leftList详情](#leftList)|
|rightList|Array|-|右侧按钮组, [查看rightList详情](#rightList)|

### leftList
::: tip 提示
leftList中的项，可以随意添加
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|icon|String|-|图标|
|title|String|-|文本|

### rightList
::: tip 提示
rightList中的项，可以随意添加 <br />
目前不支持添加图标
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|文本|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onShop|{title, [icon]}|点击事件|
