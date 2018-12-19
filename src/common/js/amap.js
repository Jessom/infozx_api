// 自定义marker
export const addSimpleMarker = (options={}, map) => {
	let def = {
		lng: 0,
		lat: 0,
		iconLabel: {
			innerHTML:'公司',
			style: {
				color: 'white'
			}
		},
		showPositionPoint: true,
		iconStyle: "orange"
	}
	let opt = mui.extend(true, def, options)
	AMapUI.loadUI(["overlay/SimpleMarker"], SimpleMarker => {
		const marker = new SimpleMarker({
      map: map,
      iconLabel: opt.iconLabel,
      iconStyle: opt.iconStyle,
      showPositionPoint: opt.showPositionPoint,
      position: [opt.lng, opt.lat]
    })
    map.setFitView()
	})
}

// 添加圆心
export const addCircle = (options={}, map) => {
	let def = {
		lng: 0,
		lat: 0,
		color: '#eb7d46',
		opacity: 0.3,
		weight: 1,
		radius: 80,
	}
	let opt = mui.extend(true, {}, def, options)
	let circle = new AMap.Circle({
    center: [opt.lng, opt.lat], 		// 圆心位置
    radius: opt.radius, 						// 半径
    strokeColor: opt.color, 				// 线颜色
    strokeOpacity: 1, 							// 线透明度
    strokeWeight: opt.weight, 			// 线粗细度
    fillColor: opt.color, 					// 填充颜色
    fillOpacity: opt.opacity 				// 填充透明度
  })
  circle.setMap(map)
  return circle
}

// 解析地理位置
export const geocoder = (data, map, circleStyle={}, markerStyle={}) => {
	let geocode = data.geocodes
  let result = null
  for (let i=0, len=geocode.length; i < len; i++) {
  	let lng = geocode[i].location.lng
  	let lat = geocode[i].location.lat
  	if(circleStyle.radius !== 0) {
	  	circleStyle['lng'] = lng
	  	circleStyle['lat'] = lat
	    result = addCircle(circleStyle, map)
  	}
  	markerStyle['lng'] = lng
  	markerStyle['lat'] = lat
    addSimpleMarker(markerStyle, map)
    map.setFitView()
    return result
  }
}

export const addMarker = (position, map) => {
  var marker = new AMap.Marker({
    map: map,
    zIndex: 120,
    fillColor: "#eb7d46",
    position: position
  })
}