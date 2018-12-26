/**
 * 构造范围圆
 * @param  {[Array]}  lnglat [经纬度]
 * @param  {[Object]} style  [圆样式]
 * @return {[type]}        [description]
 * https://lbs.amap.com/api/javascript-api/reference/overlay#circle
 */
export const createCricle = (lnglat, style) => {
	style = Object.assign({}, {
		radius: 200,  //半径
    strokeColor: "#f60",  //线颜色
    strokeOpacity: 1,  //线透明度
    strokeWeight: 2,  //线粗细度
    fillColor: "#f60",  //填充颜色
    fillOpacity: 0.35 //填充透明度
	}, style)
  return new AMap.Circle({
    center: new AMap.LngLat(lnglat[0], lnglat[1]), // 圆心位置
    ...style
  })
}

/**
 * 构造点标记
 * @param  {[Array]}  lnglat [经纬度]
 * @param  {[Object]} style  [点样式]
 * @return {[type]}        [description]
 * https://lbs.amap.com/api/javascript-api/reference/overlay#marker
 */
export const createMarker = (lnglat, style) => {
	style = Object.assign({}, {
		icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png'
	}, style)

	return new AMap.Marker({
		position: lnglat,
		...style
	});
}

/**
 * 构建矢量图片
 * @param  {[type]} lnglats [经纬度数组]
 * @param  {[type]} style   [矢量图样式]
 * @return {[type]}         [description]
 * https://lbs.amap.com/api/javascript-api/reference/overlay#polygon
 */
export const createPolyline = (lnglats, style) => {
	style = Object.assign({}, {
		strokeColor: '#f60',	// 线条颜色
		strokeOpacity: 10,	// 轮廓线透明度
		strokeWidth: 2,	// 轮廓线宽度
		strokeStyle: 'solid',	// 轮廓线样式，实线:solid，虚线:dashed
	}, style)
	return new AMap.Polyline({
		path: lnglats,
		...style
	})
}

/**
 * 添加范围圆
 * @param  {[type]}  map    [地图对象，必传]
 * @param  {[type]}  lnglat [圆心坐标]
 * @param  {Boolean} center [圆心图片，为空不显示]
 * @param  {[type]}  style  [圆样式]
 * @return {[type]}         [description]
 */
export const addCricle = (map, lnglat, style, center='https://webapi.amap.com/theme/v1.3/markers/n/loc.png') => {
	if(!!center) {
		if(typeof lnglat[0] === 'object') {
			for(let item in lnglat) {
				let c = createMarker(item, {
					icon: center
				})
		    map.add(c)
			}
		} else {
			let c = createMarker(lnglat, {
				icon: center
			})
	    map.add(c)
		}
	}
	let cricle = createCricle(lnglat, style)
	map.add(cricle)
  map.setFitView()
  return cricle
}

/**
 * 添加点坐标
 * @param  {[type]} map    [地图对象，必传]
 * @param  {[type]} lnglat [点坐标]
 * @param  {[type]} style  [点样式]
 * @return {[type]}        [description]
 */
export const addMarker = (map, lnglat, style) => {
	let marker = createMarker(lnglat, style)
	map.add(marker)
	map.setFitView()
	return marker
}

/**
 * 添加矢量图形
 * @param  {[type]} map     [地图对象，必传]
 * @param  {[type]} lnglats [坐标数组]
 * @param  {[type]} style   [样式]
 * @return {[type]}         [description]
 */
export const addPolyline = (map, lnglats, style) => {
	let polyline = createPolyline(lnglats, style)
	map.add(polyline)
	map.setFitView()
	return polyline
}

/**
 * 创建地图
 * @param  {[type]} k [申请的key]
 * @param  {String} v [版本]
 * @return {[type]}   [description]
 */
export const getMap = (k, v='1.4.10') => {
  return new Promise((resolve, reject) => {
    let callbackName = `amap${Date.now()}`
    const script = document.createElement('script')
    script.src = [
      `https://webapi.amap.com/maps?v=${v}`,
      `key=${k}`,
      `callback=${callbackName}`
    ].join('&')

    window[callbackName] = resolve

    document.body.appendChild(script)
  })
}
