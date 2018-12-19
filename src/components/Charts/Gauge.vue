<template>
  <div class="wrap">
    <ve-gauge
      :data="opt.res"
      :width='opt.width'
      :height='opt.height'
      :settings="opt.settings" />
  </div>
</template>

<script>
import VeGauge from 'v-charts/lib/gauge.common'
export default {
  props: {
    options: {
      type: Object,
      default: function() { return {} }
    }
  },
  computed: {
    opt() {
      let opt = {
        showDetail: true,
        type: 'percent',              // 类型
        name: '',                     // 头
        nameSize: 14,                 // 头字号
        min: 0,                       // 范围最小值
        max: 1,                       // 范围最大值
        stage: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],   // 阶段
        showAxisLable: false,         // 是否显示仪表盘上的 刻度 文字
      }
      let params = mui.extend(true, {}, opt, this.options)

      console.log(params)
      let settings =  {
        labelMap: {
          'speed': '计划',
        },
        dataType: {
          'speed': params.type
        },
        dataName: {
          'speed': params.name,
        },
        seriesMap: {
          'speed': {
            min: params.min,
            max: params.max,
            radius: '100%',
            // 分隔线样式。
            axisLine: {
              lineStyle: {
                color: params.stage,
                width: 2,
              }
            },
            // 刻度标签
            axisLabel: {
              show: params.showAxisLable,
              textStyle: {
                fontSize: 12,
                color: '#363636',
              }
            },
            // 刻度样式
            axisTick: {
              length:5,
              lineStyle: {
                color: 'auto',
              }
            },
            // 分隔线样式
            splitLine: {
              length: 15,
              lineStyle: {
                color: 'auto',
              }
            },
            // 仪表盘指针
            pointer: {
              width: 2
            },
            // 仪表盘标题
            title: {
              // offsetCenter: [0, '-130%'],
              textStyle: {
                fontSize: params.nameSize,
                color: '#363636',
              }
            },
            // 仪表盘详情，用于显示数据
            detail: {
              show: params.showDetail,
              offsetCenter: [0, '50%'],
              textStyle: {
                // fontWeight: 'bolder',
                color: '#363636',
                fontSize: 14
              }
            }
          }
        }
      }
      let width = this.options.width || '33.33vw'
      let height = this.options.height || '33.33vw'
      let data = this.options.value ? this.options.value : 0
      let res = { columns: ['type', 'value'], 
        rows: [ { type: 'speed', value: data } ]
      }
      return { settings, res, width, height }
    }
  },
  components: {
    VeGauge
  }
}
</script>

<style lang="scss">
.wrap { background-color: #fff; }
</style>
