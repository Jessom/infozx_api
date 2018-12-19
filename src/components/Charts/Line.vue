<template>
  <div class="wrap">
    <ve-line
      :data="opt.charData"
      :extend='opt.extend'
      :events='chartEvents'
      :settings='opt.settings' />
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  data () {
    return {
      chartEvents: {
        click: this.chartClick
      }
    }
  },
  props: {
    options: {
      type: Object,
      default: function() { return {} }
    }
  },
  computed: {
    opt() {
      let charData = this.setCharData()

      let extend = {
        series: { label: { normal: { show: this.options.label } } },
        'xAxis.0.axisLabel.rotate': this.options.rotate
      }

      let settings = { area: this.options.area }

      return { charData, extend, settings }
    }
  },
  methods: {
    // 设置图标数据
    setCharData() {
      let columns = ['xAxis']
      let rows = []
      this.options.xAxis.map(c => rows.push({ 'xAxis': c }))
      this.options.list.forEach(c => {
        c.data.forEach((item, ind) => rows[ind][c.name] = item)
        columns.push(c.name)
      })

      return { columns, rows }
    },
    chartClick(e) {
      this.$emit('chartClick', e)
    }
  },
  components: {
    VeLine
  }
}
</script>

<style lang="scss">

</style>
