# 扫码
> 扫描二维码、条形码等

## 示例
```vue{27}
<template>
  <div class="container">
    <button class='mui-btn mui-btn-block' @tap='scanEvent'>扫码</button>

    <div class="mui-table-view mt15">
      <div class="mui-table-view-cell">{{scan.type}}</div>
      <div class="mui-table-view-cell">{{scan.result}}</div>
      <div class="mui-table-view-cell">{{scan.file}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scan: {
        type: '',
        result: '',
        file: ''
      }
    }
  },
  methods: {
    scanEvent() {
      // 创建webview，打开扫码页面，这里是网络地址
      tools.createWebivew('http://ypt.infozx.com/barcode/index.html')
    }
  },
  mounted() {
    // 扫码完成后，监听onresult事件，获取扫码结果
    window.addEventListener('onresult', e => {
      this.scan = e.detail
    })
  }
}
</script>
```
## events
|事件名|参数|描述|
|:---:|:---:|:---:|
|onresult|{ type, result, file }|扫码完成|
- type：扫的码的类型，[查看具体参数](http://www.dcloud.io/docs/api/zh_cn/barcode.html)
- result：扫码结果
- file：识别到的条码图片文件路径
