# Draw
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/draw.html)
> 移动端签名

## 示例
```vue{21}
<template lang="html">
  <div class="container">
  	<draw ref='draw' :options='options' />
  	<div class="mui-input-group">
  		<div class="mui-input-row">
  			<label>线条粗细</label>
  			<input type="number" v-model.number='options.lineWidth'>
  		</div>
  		<div class="mui-input-row">
  			<label>线条颜色</label>
  			<input type="color" v-model='options.lineColor'>
  		</div>
  	</div>
  	<button @tap='clear'>清除</button>
  	<button @tap='save'>保存</button>
  	<img :src="image">
	</div>
</template>

<script>
import Draw from '@/components/Other/Draw.vue'
export default {
	data() {
		return {
			image: '',
			options: {
				background: '#ffffff',
				lineWidth: 1,
				lineColor: '#000000',
				height: 150
			}
		}
	},
	methods: {
		clear() {
			this.$refs.draw.clear()
		},
		save() {
			this.image = this.$refs.draw.save()
			// this.clear()
		}
	},
	components: {
		Draw
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
|background|String|#fff|canvas背景图|
|lineWidth|Number|1|线条粗细|
|lineColor|String|#000|线条颜色|
|height|Number|200|canvas高度|

## ref
|事件|参数|说明|
|:---:|:---:|:---:|
|clear|-|清除canvas内容|
|save|type|保存canvas内容，成图片(base64)，type是获取的图片格式，默认`image/jpeg`|
