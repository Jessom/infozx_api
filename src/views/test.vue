<template>
	<div class="test">
		<map-wrap @onFinsh='onFinsh' />
	</div>
</template>

<script>
import MapWrap from '@/components/Map/Map.vue'
import * as amap from '@/common/js/v2/amap'
import * as geo from '@/common/js/v2/geolocation'
export default {
	data() {
		return {
			
		}
	},
	methods: {
		onFinsh(map) {
			console.log(map)
			// geo.amapLocation(map).then(pos => console.log(pos))
			geo.browserLocation().then(pos => {
				console.log(pos)
				return pos
				// amap.addMarker(map, pos)
			}).then(pos => {
				return geo.transformCoord({ lng: pos[0], lat: pos[1] })
			}).then(pos => {
				console.log(pos)
				amap.addMarker(map, pos)
				amap.addCricle(map, pos)
			})
		}
	},
	components: {
		MapWrap
	}
}
</script>
