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