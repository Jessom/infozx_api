<template lang="html">
  <div class="container">
  	<div class="map-wrap">
  		<geolocation-map ref='map' :options='options' />
  	</div>

  	<button class="mui-btn mui-btn-block mui-block-primary" @tap='location'>重新定位</button>

  	<button class="mui-btn mui-btn-block mui-block-primary" @tap='getLocat'>获取位置信息</button>

  	<div>{{loc}}</div>

  	<button class="mui-btn mui-btn-block mui-block-primary" @tap='success'>定位完成了没</button>

  	<button class="mui-btn mui-btn-block mui-block-primary" @tap='punch'>是否在打卡范围</button>

	</div>
</template>

<script>
import GeolocationMap from '@/components/Map/GeolocationMap.vue'
export default {
	data() {
		return {
			loc: null,
			options: {
				companyAddr: '苏州市寒山寺',			// 公司地址
				isLocation: false,			// 定位完成 必须
				isContains: false 			// 是否在圈内
			}
		}
	},
	methods: {
		location() {
			this.$refs.map.netLocation()
		},
		getLocat() {
			this.loc = this.$refs.map.getLocat()
		},
		success() {
			let msg = this.options.isLocation ? "定位完成" : "定位中。。。"
			alert(msg)
		},
		punch() {
			let msg = this.options.isContains ? "可以打卡" : "离打卡范围还有十万八千里"
			alert(msg)
		}
	},
	components: {
		GeolocationMap
	}
}
</script>

<style lang='scss'>
.map-wrap {
	height: 63.14vh;
}
</style>