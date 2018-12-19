<template>
  <div class="wrap">
    <ve-histogram
      :data='opt.charData'
      :extend='opt.extend'
      :events='chartEvents'
      :settings='opt.settings'></ve-histogram>
  </div>
</template>

<script>
import VeHistogram from 'v-charts/lib/histogram.common'
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
        series: {
          label: { show: this.options.labelPosition ? true : false, position: this.options.labelPosition }
        }
      }

      let stack = this.options.stack ? {'用户': this.options.stack} : {}
      let settings = { stack }

      return { charData, extend, settings }
    }
  },
  mounted() {
    console.log(this.opt)
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
    VeHistogram
  }
}
</script>

<style lang="scss">
.wrap { background-color: #fff; }
</style>
