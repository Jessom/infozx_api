# QRCode(生成二维码)
[Demo](https://watasi.cn/infozx_api/dist/#/qrcode)

```bash
cnpm install qrcode --save
```

## 示例
```vue{14}
<template lang="html">
  <div class="container">
  	<qrcode v-show='codeShow' ref='qrcode' />
    <div class="mui-input-group">
      <div class="mui-input-row">
        <input type="text" v-model='code'>
      </div>
    </div>
    <button class="mui-btn mui-btn-block" @click='test'>生成二维码</button>
	</div>
</template>

<script>
import qrcode from '@/components/Other/QRCode.vue'
export default {
	data() {
		return {
			code: '',
			codeShow: false
		}
	},
	methods: {
		test() {
			this.$refs.qrcode.create(this.code).then(res => {
        this.codeShow = true
      })
		}
	},
	components: {
		qrcode
	}
}
</script>

<style lang="scss">
</style>
```

## refs
|事件|参数|说明|
|:---:|:---:|:---:|
|create|text, options|创建二维码|

- text：二维码内容
- options：[参数配置](#options)

### options
[点击这里](https://www.npmjs.com/package/qrcode)查看其他参数
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|width|Number|200|二维码宽度|
|margin|Number|1|外边距|