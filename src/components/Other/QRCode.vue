<template>
  <div class="z-qr-code-wrap mui-text-center">
    <canvas id="zqrcode"></canvas>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  methods: {
    create(text='', options) {
      return new Promise(async (resolve, reject) => {
        try {
          options = options || { width: 200, margin: 1 }
          let d = await QRCode.toCanvas(document.querySelector('#zqrcode'), text, options)
          resolve(d)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.z-qr-code-wrap {
  background-color: #fff;
}
</style>
