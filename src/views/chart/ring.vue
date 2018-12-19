<template lang="html">
  <div class="container">
		<ring-chart :options='ring1' @chartClick='chartClick' />
		<ring-chart :options='ring2' @chartClick='chartClick' />
		<ring-chart :options='ring3' @chartClick='chartClick' />
		<ring-chart :options='ring4' @chartClick='chartClick' />
	</div>
</template>

<script>
import RingChart from '@/components/Charts/Ring.vue'
export default {
	data() {
		return {
			ring1: {
				xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
				list: [123, 425, 362, 142, 362, 324, 256]
      },
      ring2: {
        xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
        labelPosition: 'inside',
				list: [123, 425, 362, 142, 362, 324, 256]
      },
      ring3: {
        xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
        limit: 3,
				list: [123, 425, 362, 142, 362, 324, 256]
      },
      ring4: {
        xAxis: ['张三', '李四', '王五', '赵六', '赵四', '王麻子', '老李头'],
        radius: [10, 100],
				list: [123, 425, 362, 142, 362, 324, 256]
      }
		}
	},
	methods: {
		chartClick(e) {
			console.log(e)
		}
	},
	components: {
		RingChart
	}
}
</script>

<style lang="scss">
</style>