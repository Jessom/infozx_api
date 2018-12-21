# ProgressBar(进度条)

## 示例
```vue{8}
<template lang="html">
  <div class="container">
  	<progress-bar :width='60' />
	</div>
</template>

<script>
import ProgressBar from '@/components/Other/ProgressBar.vue'
export default {
	components: {
		ProgressBar
	}
}
</script>

<style lang="scss">
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|progress|Number|0|进度|
|height|Number|5|高度|
|showPercent|Boolean|true|是否显示百分比|
|background|String|#f60|进度条颜色，支持`#f00`、`red`、`rgb(255,0,0)`、`rgba(255,0,0,.8)`|
