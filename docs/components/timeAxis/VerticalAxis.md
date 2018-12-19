# VerticalAxis
[Demo](http://watasi.gitee.io/infozx_api/dist/#/verticalAxis.html)
> 时间轴

## 示例
```vue{8}
<template>
  <div>
    <vertical-axis :list='list' @clickText='clickText' @click='click' @clickContent='clickContent' />
  </div>
</template>

<script>
import VerticalAxis from '@/components/TimeAxis/VerticalAxis.vue'
export default {
  data () {
    return {
      list: [{
        leftTitle: '上',
        desc: {
          left: '2018-07-18',
          right: '迟到',
          tagColor: 'blue'
        },
        content: {
          text:'宇宙银河系地球中国',
          button: `Let's go`,
          disabled: false
        }
      }, {
        leftTitle: '中',
        desc: {
          left: '2018-07-18',
          right: '早退'
        },
        content: {
          text: '江苏苏州'
        }
      }, {
        leftTitle: '下',
        button: '走你'
      }]
    }
  },
  methods: {
    // 点击单独的按钮事件
    click(item) {
      console.log(item)
    },
    // 点击内容区域的按钮事件
    clickContent(item) {
      console.log(item)
    },
    // 点击文本内容事件
    clickText(item) {
      console.log(item)
    }
  },
  components: {
    VerticalAxis
  }
}
</script>

<style lang='scss'>
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染数据, [查看](#list)|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|leftTitle|String|-|左侧小标签显示的文字，建议只是用一个字符|
|desc|Object|-|右侧描述相关, [查看desc](#desc)|
|content|Object|-|主要内容区域，[查看contnet](#content)|
|button|String|-|button显示内容，当传入该值后，desc与content不显示|

### content
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|text|String|-|主要内容|
|button|String|-|内容下面的按钮文字，不传入不显示|
|disabled|Boolean|false|是否禁用按钮|

### desc
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|left|String|-|左边内容|
|right|String|-|右边内容|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|click|{leftTitle, [desc], [content], [button]}|点击单独的那个按钮事件|
|clickContent|{leftTitle, [desc], [content], [button]}|点击内容区域的按钮事件|
|clickText|{leftTitle, [desc], [content], [button]}|点击内容文本事件|
