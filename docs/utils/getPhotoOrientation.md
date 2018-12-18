# getPhotoOrientation
> 获取图像的拍摄方向

## 示例
```vue{8}
<template lang="html">
  <div class="container">
  	<img src="xxx.jpg" alt="" class='img'>
	</div>
</template>

<script>
import { getPhotoOrientation } from '@/common/js/utils'
export default {
	async mounted() {
		let orient = await getPhotoOrientation(document.querySelector('.img'))
		console.log(orient)
		// orient === 6 需要顺时针(向左)旋转90度
		// orient === 8 需要逆时针(向右)旋转90度
		// orient === 3 需要180度旋转
	}
}
</script>

<style lang="sass">

</style>
```

## params
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|img|Object|-|img对象|

## return
返回一个`Promise`对象