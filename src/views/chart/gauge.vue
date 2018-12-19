<template lang="html">
  <div class="container mui-clearfix">
		<div class="gauge mui-pull-left">
			<gauge :options='gauge1' />
		</div>
		<div class="gauge mui-pull-left">
			<gauge :options='gauge2' />
		</div>
		<div class="gauge mui-pull-left">
			<gauge :options='gauge3' />
		</div>
	</div>
</template>

<script>
import Gauge from '@/components/Charts/Gauge.vue'
export default {
	data() {
		return {
			gauge1: { width: '100%', value: 0.26, name: '阶段计划' },
			gauge2: { width: '100%', value: 0.10, name: '月计划' },
			gauge3: { width: '100%', value: 0.83, name: '周计划' },
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
.container { padding: 0 10px; background-color: #fff; }
.gauge { width: 33.33%; padding: 0 5px; }
</style>