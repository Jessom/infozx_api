<template lang="html">
  <div class="container">
  	<div class="map-wrap">
  		<geo-multi-map ref='map' :options='options' />
  	</div>
		
		<input type="text" v-model='addr' />
		<button class="mui-btn mui-btn-block" @tap='add'>添加</button>

	</div>
</template>

<script>
import { bus } from '@/common/js/bus'
import GeoMultiMap from '@/components/Map/GeoMultiMap.vue'
export default {
	data() {
		return {
			addr: '',
			options: {
				isLocation: false,			// 定位完成 必须
				init: false,
			}
		}
	},
	created() {
		bus.$on('sendAddr', res => {
			console.log(res)
		})
	},
	methods: {
		add() {
			this.$refs.map.geocoder({lng: 11123, lat: 4652, id: 1}, {}, {radius: 200}, res => {
				console.log(res)
			})
			/*this.$refs.map.geocoder({addr: this.addr, id: 1}, {}, {radius: 200}, res => {
				console.log(res)
			})*/
		}
	},
	components: {
		GeoMultiMap
	}
}
</script>

<style lang='scss'>
.map-wrap {
	height: 63.14vh;
}
</style>