<template lang="html">
  <div class="container">
  	<draw ref='draw' :options='options' />
  	<div class="mui-input-group">
  		<div class="mui-input-row">
  			<label>线条粗细</label>
  			<input type="number" v-model.number='options.lineWidth'>
  		</div>
  		<div class="mui-input-row">
  			<label>线条颜色</label>
  			<input type="color" v-model='options.lineColor'>
  		</div>
  	</div>
  	<button @tap='clear'>清除</button>
  	<button @tap='save'>保存</button>
  	<img :src="image">
	</div>
</template>

<script>
import Draw from '@/components/Other/Draw.vue'
export default {
	data() {
		return {
			image: '',
			options: {
				background: '#ffffff',
				lineWidth: 1,
				lineColor: '#000000',
				height: 150
			}
		}
	},
	methods: {
		clear() {
			this.$refs.draw.clear()
		},
		save() {
			this.image = this.$refs.draw.save()
			// this.clear()
		}
	},
	components: {
		Draw
	}
}
</script>

<style lang="scss">
</style>