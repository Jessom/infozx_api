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
        { key: 'a', value: 0.8, name: '年计划' },
        { key: 'b', value: 0.6, name: '月' },
      ],
      list3: [
        { key: 'a', value: 0.8 },
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
  methods: {
    
  },
  components: {
    Gauge
  }
}
</script>

<style lang="scss">
</style>