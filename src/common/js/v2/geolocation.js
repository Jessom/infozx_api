/**
 * 基于浏览器定位
 * @param  {Object} options [description]
 * @return {[type]} [description]
 */
export const browserLocation = (options={}) => {
	return new Promise((resolve, reject) => {
		const geolocation = navigator.geolocation
		geolocation.getCurrentPosition(position => {
			resolve([position.coords.longitude, position.coords.latitude])
		}, reject, options)
	})
}

/**
 * 基于MUI的定位
 * @param  {Object} options [description]
 * @return {[type]}         [description]
 * http://www.dcloud.io/docs/api/zh_cn/geolocation.html#plus.geolocation.PositionOptions
 */
export const plusLocation = (options={}) => {
	return new Promise((resolve, reject) => {
		mui.plusReady(() => {
			plus.geolocation.getCurrentPosition(position => {
				if(mui.os.android) {
					resolve([position.coords.longitude, position.coords.latitude])
				} else if(mui.os.ios) {
					transformCoord({ lng: position.coords.longitude, lat: position.coords.latitude })
						.then(resolve)
						.catch(reject)
				}
			}, reject, options)
		})
	})
}

/**
 * 基于高德地图的高精度定位
 * @param  {[type]} map     [地图对象]
 * @param  {Object} options [description]
 * @return {[type]}         [description]
 * https://lbs.amap.com/api/javascript-api/reference/location#m_AMap.Geolocation
 */
export const amapLocation = (map, options={}) => {
	return new Promise((resolve, reject) => {
		options = Object.assign({}, {
	      enableHighAccuracy: true,// 是否使用高精度定位，默认:true
	      timeout: 10000,          // 超过10秒后停止定位，默认：5s
	      buttonPosition: 'RB',    // 定位按钮的停靠位置
	      buttonOffset: new AMap.Pixel(10, 20),	// 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
	      zoomToAccuracy: true,   // 定位成功后是否自动调整地图视野到定位点
	      showCircle: false,		// 定位成功后用圆圈表示定位精度范围，默认：true
	      markerOptions: {
	      	icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
	      	label: {
	      		content: '我'
	      	}
	      }
	    }, options)
		AMap.plugin('AMap.Geolocation', () => {
			const geolocation = new AMap.Geolocation(options)
			map.addControl(geolocation)
			geolocation.getCurrentPosition((status,result) => {
	      if(status=='complete') {
	        resolve([result.position.lng, result.position.lat])
	      } else {
	        reject({message: '定位失败'})
	      }
	    })
		}, reject)
	})
}

/**
 * 调用百度地图坐标转换API，将IOS定位后的地址，转换成高德地图可以解析的地址
 * @param  {[type]} position [description]
 * @return {[type]}          [description]
 */
export const transformCoord = (position) => {
	return new Promise((resolve, reject) => {
		mui.ajax({
			url: `http://api.map.baidu.com/geoconv/v1/?coords=${position.lng},${position.lat}&from=1&to=3&ak=efWzpkW5jPMcPfrcaa9wQHatiKQ5la7o`,
			type: 'GET',
			success(data) {
				if(data.status === 0) {
					resolve([data.result[0].x, data.result[0].y])
				} else {
					reject(data)
				}
			},
			error: reject
		})
	})
}