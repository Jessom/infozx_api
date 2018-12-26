<template>
	<div id='z-map-wrap' class="z-map-wrap">
		
	</div>
</template>

<script>
import { getMap } from '@/common/js/v2/amap'
export default {
	mounted() {
    getMap('4fa139321e00a8d74f582c57c49b518c')
    	.then(res => {
    		this.createMap()
    	})
  },
  methods: {
  	createMap() {
  		const map = new AMap.Map('z-map-wrap', {
	    	resizeEnable: true,
	      zoom: 16,
	    })
	    map.on('complete', () => {
		    this.$emit('onFinsh', map)
	    })
  	}
  },
}
</script>

<style lang='scss'>
.z-map-wrap {
	min-height: 100vh;
	img { max-width: 100%; width: auto; }
	.amap-marker-label { border: 0; background-color: transparent; color: #fff; }
}
</style>
