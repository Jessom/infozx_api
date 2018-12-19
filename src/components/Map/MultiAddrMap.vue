<template>
	<div class="z-map-container">
		<el-amap class="z-amap-wrap" vid="amap" :zoom="opt.zoom" :events="events" ref="map" :doubleClickZoom="false">
    </el-amap>
	</div>
</template>

<script>
import * as amapMethods from '@/common/js/amap'
export default {
	props: {
		options: {
			type: Object,
			default: function() { return {} }
		}
	},
	data() {
		const self = this
		return {
			locationAddress: {},		// 保存定位后的地址
			events: {
				init(map) {
					self.options.init = true
					self.map = map
				}
			}
		}
	},
	computed: {
		opt() {
			let opt = {
				zoom: 12,
				companyAddr: '苏州市金门路1200号安得装饰',
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	created() {
		mui.plusReady(() => {
			this.network = getNetWorkInfo()
		})
	},
	methods: {
		geocoder(addr, style={}, circle={}) {
			if(typeof addr === 'object') {
				let optison = mui.extend(addr, style)
				circle = mui.extend(addr, circle)
				amapMethods.addSimpleMarker(optison, this.map, m => {
      		this.marker = m
      	})
      	amapMethods.addCircle(circle, this.map)
			} else {
				let geocoder = new AMap.Geocoder({ city: "全国" })
				geocoder.getLocation(addr, (status, result) => {
					if(status === 'complete' && result.info === "OK") {
						amapMethods.geocoder(result, this.map, circle, style)
					}
				})
			}
		}
	}
}
</script>

<style lang='scss'>
.z-map-container, .z-map-container .z-amap-wrap {
	height: 100%;
}
</style>