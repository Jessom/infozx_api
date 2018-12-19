<template>
  <div class="wrap">
    <vue-ring
      :data='opt.charData'
      :events='chartEvents'
      :settings='opt.settings' />
  </div>
</template>

<script>
import VueRing from 'v-charts/lib/ring.common'
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

      let settings = {
        label: { position: this.options.labelPosition },
        radius: this.options.radius,
        limitShowNum: this.options.limit
      }

      return { charData, settings }
    }
  },
  methods: {
    // 设置图标数据
    setCharData() {
      let columns = ['xAxis', 'data']
      let rows = []
      this.options.xAxis.map((c, ind) => {
        rows.push({ 'xAxis': c, 'data': this.options.list[ind] })
      })

      return { columns, rows }
    },
    chartClick(e) {
      this.$emit('chartClick', e)
    }
  },
  components: {
    VueRing
  }
}
</script>

<style lang="scss">

</style>
