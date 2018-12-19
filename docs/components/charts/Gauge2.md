# Gauge2
[Demo](http://watasi.gitee.io/infozx_api/dist/#/gauge2)

```bash
cnpm install v-charts echarts -save
```
::: tip 仪表盘
请多多参阅[官方文档](http://echarts.baidu.com/option#series-gauge.type)
:::

## 示例
```vue{21}
<template lang="html">
  <div class="container mui-clearfix">
    <h4>一个</h4>
    <Gauge :list='list3' />
    
    <h4>两个</h4>
    <Gauge :list='list2' />

    <h4>三个</h4>
    <Gauge :list='list' />

    <h4>四个</h4>
    <Gauge :list='list5' />

    <h4>两个，自定义</h4>
    <Gauge :list='list4' :options='options' />
  </div>
</template>

<script>
import Gauge from '@/components/Charts/Gauge2.vue'
export default {
  data() {
    return {
      list: [
        { key: 'a', value: 0.8, name: '年' },
        { key: 'b', value: 0.6, name: '月' },
        { key: 'c', value: 0.9, name: '周' },
      ],
      list5: [
        { key: 'a', value: 0.8, name: '年' },
        { key: 'b', value: 0.3, name: '季' },
        { key: 'c', value: 0.6, name: '月' },
        { key: 'd', value: 0.9, name: '周' },
      ],
      list2: [
        { key: 'a', value: 0.8, name: '年' },
        { key: 'b', value: 0.6, name: '月' },
      ],
      list3: [
        { key: 'a', value: 0.8, name: '年' },
      ],
      list4: [
        { key: 'a', value: 0.8, name: '年' },
        { key: 'b', value: 0.6, name: '月' },
      ],
      options: {
        a: { center: ['20%', '55%'] },
        b: { center: ['80%', '55%'], endAngle: 0, startAngle: 180 },
        lineColor: [[0.3, '#999'], [0.6, '#666'], [1, '#111']]
      }
    }
  },
  components: {
    Gauge
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
|list|Array|-|渲染数据 [查看list](#list)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|width|String|100%|生成的仪表盘宽度|
|height|String|180px|生成的仪表盘高度|
|lineColor|Array|[[0.8, '#666'],[1, '#f60']]|仪表盘的轴线可以被分成不同颜色的多段。每段的结束位置和颜色可以通过一个数组来表示|

**针对某一项进行设置**
- 以`list`中的`key`字段，设置不同样式，请参考上面demo

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|center|Array|['50%', '50%']|位置|
|startAngle|Number|225|仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度|
|endAngle|Number|-45|仪表盘结束角度|
|min|Number|0|最小的数据值|
|max|Number|1|最大的数据值|
|splitNumber|Number|10|仪表盘刻度的分割段数|


### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|key|String|-|当前数据的索引|
|value|Number|-|当前完成进度，取值`0 - 1`|
|name|String|-|标题，不传入不显示|
