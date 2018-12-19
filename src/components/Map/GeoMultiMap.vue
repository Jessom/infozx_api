<template>
	<div class="z-geo-multi-map-wrap">
		<el-amap class="z-amap-wrap" vid="amap" :zoom="opt.zoom" ref="map" :events="events" :doubleClickZoom="false">
    </el-amap>
	</div>
</template>

<script>
import * as amapMethods from '@/common/js/amap'
import { getNetWorkInfo } from '@/common/js/native'
import { bus } from '@/common/js/bus'
export default {
	props: {
		options: {
			type: Object,
			default: function() { return {} }
 		}
	},
	computed: {
		opt() {
			let opt = {
				zoom: 12,
				isLocation: false,			// 定位完成
				companyAddr: '苏州市金门路1200号',
				locationStyle: {				// 当前位置marker样式
					iconLabel: {
						innerHTML: '',
					},
					iconStyle: ''
				}
			}
			return mui.extend({}, opt, this.options)
		}
	},
	data() {
		const self = this
		return {
			network: {},								// 网络状态
			coordsType: 'gps',			// 定位方式
			locationAddress: {},		// 保存定位后的地址
			events: {
				init(map) {
					self.map = map
					self.options.init = true
					let geocoder = new AMap.Geocoder({ city: "全国" })
					geocoder.getLocation(self.opt.companyAddr, function(status, result) {
						self.getLocation(status, result, map)
					})
				}
			}
		}
	},
	created() {
		mui.plusReady(() => {
			this.network = getNetWorkInfo()
		})
	},
	methods: {
		// 定位
		getLocation(status, result, map) {
			if(status === "complete" && result.info === "OK") {
				this.netLocation(map)
			}
		},
		// 添加地点
		geocoder(addr, style={}, circle={}, callback) {
			if(addr.addr) {
				let geocoder = new AMap.Geocoder({ city: "全国" })
				geocoder.getLocation(addr.addr, (status, result) => {
					if(status === 'complete' && result.info === "OK") {
						let point = amapMethods.geocoder(result, this.map, circle, style)
						callback(mui.extend({}, addr, {include: point.contains(this.position)}))
						// console.log(a.contains(this.position))
					}
				})
			} else if(addr.lng && addr.lat) {
				addr['lng'] = Number(addr['lng'])
				addr['lat'] = Number(addr['lat'])
				let optison = mui.extend(addr, style)
				amapMethods.addSimpleMarker(optison, this.map, m => {
      		this.marker = m
      	})
      	circle = {...circle, lng: addr['lng'], lat: addr['lat']}
      	let po = amapMethods.addCircle(circle, this.map)
      	console.log(this.position)
      	callback(mui.extend({}, addr, {include: po.contains(this.position)}))
			}
		},
		// 根据不同的忘了状态，使用不同的定位方式
		netLocation() {
			let map = this.map
			if(this.network.no == 3) {
				// wifi开启情况，如果开启的gps定位，则使用gps定位，否则使用网络定位
				this.currentPos(map, err => {
          this.amapLocation(map)
				})
			} else {
				if(mui.os.plus) {
					// 非wifi情况下，不开启gps定位无法获取位置信息
					this.currentPos(map, err => {
						mui.toast("当前非WIFI网络,请打开定位服务")
					})
				} else {
					// 网页版，使用amap定位
					this.amapLocation(map)
				}
			}
		},
		// 调用原生gps定位，获取位置信息
		currentPos(map, ecb) {
			mui.plusReady(() => {
				plus.geolocation.getCurrentPosition(pos => {
					console.log('调用原生GPS定位')
					console.log(JSON.stringify(pos))
					this.coordsType = pos.coordsType
					// IOS平台定位偏差，查看MUI文档(http://www.dcloud.io/docs/api/zh_cn/geolocation.html#plus.geolocation.PositionOptions)是因为不支持高德地图，采用的定位方式是【wgs84】
					// 这里使用百度地图坐标转换API，将【wgs84】转换为【gcj02】
					if(mui.os.ios) {
						this.transformCoord(pos, res => {
							console.log('经过处理')
							console.log(JSON.stringify(res))
							this.amapLocation(map, {
			        	lat: res.result[0].y,
			        	lng: res.result[0].x
			        }, pos)
						}, err => {
							this.amapLocation(map, {
			        	lat: pos.coords.latitude,
			        	lng: pos.coords.longitude
			        }, pos)
						})
					} else {
						this.amapLocation(map, {
		        	lat: pos.coords.latitude,
		        	lng: pos.coords.longitude
		        }, pos)
					}
				}, err => {
					ecb(err)
				}, { geocode: true })
			})
		},
		// 调用百度地图坐标转换API
		transformCoord(pos, successcb, errorcb) {
			mui.ajax({
				url: `http://api.map.baidu.com/geoconv/v1/?coords=${pos.coords.longitude},${pos.coords.latitude}&from=1&to=3&ak=efWzpkW5jPMcPfrcaa9wQHatiKQ5la7o`,
				type: 'GET',
				success: data => {
					if(data.status === 0) {
						successcb(data)
					} else {
						errorcb(data)
					}
				},
				error: err => {
					mui.toast('请检查网络后再试')
				}
			})
		},
		// amap定位
		amapLocation(map, gps, pos) {
			if(gps) {
				let lnglat = new AMap.LngLat(gps.lng, gps.lat)
        AMap.convertFrom(lnglat, this.coordsType, (status, data) => {
          if (status === "complete") {
            this.position = [data.locations[0].lng, data.locations[0].lat]
            this.opt.locationStyle['lng'] = data.locations[0].lng
            this.opt.locationStyle['lat'] = data.locations[0].lat
            if(!this.marker) {
            	amapMethods.addSimpleMarker(this.opt.locationStyle, map, m => {
            		this.marker = m
            	})
          	} else {
          		this.marker.setPosition(new AMap.LngLat(data.locations[0].lng, data.locations[0].lat))
          	}

            this.getLocationAddr(pos)
            bus.$emit('sendAddr', this.locationAddress)
            this.options.isLocation = true 			// 定位成功
          }
        })
			} else {
				map.plugin("AMap.Geolocation", () => {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition: "RB"
          })
          map.addControl(geolocation)
          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation, "complete", onComplete => {
          	console.log(onComplete)
          	this.opt.locationStyle['lng'] = onComplete.position.lng
          	this.opt.locationStyle['lat'] = onComplete.position.lat

          	if(!this.marker) {
            	amapMethods.addSimpleMarker(this.opt.locationStyle, map, m => {
            		this.marker = m
            		console.log(m)
            	})
          	} else {
          		this.marker.setPosition(new AMap.LngLat(onComplete.position.lng, onComplete.position.lat))
          	}
          	
            this.getLocationAddr(onComplete)
            bus.$emit('sendAddr', this.locationAddress)
            this.position = [onComplete.position.lng, onComplete.position.lat]
            this.options.isLocation = true
          }); //返回定位信息
          AMap.event.addListener(geolocation, "error", onError => {}) //返回定位出错信息
        })
			}
		},
		// 解析定位后的地理位置
		getLocationAddr(pos) {
			console.log(pos)
			let latlng = pos.coords || pos.position
			let addr = pos.address || pos.addressComponent
			let position = {
				lat: latlng.latitude || latlng.lat || 0,
				lng: latlng.longitude || latlng.lng || 0,
			}
			console.log(addr)
			let address = {
				province: addr.province || "",
				city: addr.city || "",
				district: addr.district || "",
				street: addr.street || "",
				streetNum: addr.streetNum || addr.streetNumber || "",
				poiName: addr.poiName || "",
				building: addr.building
			}
			this.locationAddress = {
				position: position,
				address: address,
				formattedAddress: addr.addresses || pos.formattedAddress
			}
		},
	}
}
</script>

<style lang='scss'>
.z-geo-multi-map-wrap {
	height: 100%;
}
</style>