# IOS定位不准解决方法
在调用GeolocationMap组件的时候，Andorid、公众号都是很beautiful的定位到正确的位置，but，在IOS上，定位会偏差几百米，这是一个做程序的所不能容忍发生的事情。
<br /><br />
过了几天(咳咳，先把别的搞好再来啃它)，我重新看了一遍GeolocationMap组件的代码，然后注意到了问题的关键：<br />
1. 首先会判断当前的网络状态，根据不同的状态，调用不同的定位方式
2. 在APP端，使用的是mui提供的`geolocation`模块
3. 去啃[API](http://www.dcloud.io/docs/api/zh_cn/geolocation.html)，
在API中注意到了这段话
> provider: (String 类型 )优先使用的定位模块 <br />
> 可取以下供应者： "system"：表示系统定位模块，支持wgs84坐标系； "baidu"：表示百度定位模块，支持gcj02/bd09/bd09ll坐标系； "amap"：表示高德定位模板，支持gcj02坐标系。 默认值按以下优先顺序获取（amap>baidu>system），若指定的provider不存在或无效则返回错误回调。 注意：百度/高德定位模块需要配置百度/高德地图相关参数才能正常使用。

然后写了个demo，测试不同设备使用哪种定位模块
```javascript
mui.plusReady(function() => {
	plus.geolocation.getCurrentPosition(function() {
		console.log(JSON.stringify(pos)) 		// IOS: wgs84    Andorid: gcj02
	})
})
```
Andorid优先使用`gcj02`模块，IOS优先使用`wgs84`模块<br />
Andorid定位是正确的，然后修改了下demo
```javascript
mui.plusReady(function() => {
	plus.geolocation.getCurrentPosition(function() {
		console.log(JSON.stringify(pos)) 		// IOS: wgs84    Andorid: gcj02
	})
}, { provider: 'gcj02' })
```
返回的结果仍然相同，然后注意到了文档中的这段话
> 平台支持 <br />
> Android - 2.2+ (支持) <br />
> iOS - 4.5+ (支持): provider为"baidu"时，仅支持bd09ll坐标系，暂不支持高德定位模块。

IOS端不支持高德定位模块，然后之前使用百度地图的时候，会出现定位偏差的情况，需要通过百度地图[坐标转换API](http://lbsyun.baidu.com/index.php?title=webapi/guide/changeposition)对获取到的位置转换，然后更改了组件源码：
```javascript
export default {
	methods: {
		...
		// 调用原生gps定位，获取位置信息
		currentPos(map, ecb) {
			mui.plusReady(() => {
				plus.geolocation.getCurrentPosition(pos => {
					this.coordsType = pos.coordsType
					if(mui.os.ios) {
						this.transformCoord(pos, res => {
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
				url: `http://api.map.baidu.com/geoconv/v1/?coords=${pos.coords.longitude},${pos.coords.latitude}&from=1&to=3&ak=你的key`,
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
		}
	}
}
```
通过该接口，将`wgs84`转成`gcj02`，很beautiful的解决了定位难的难题。

## 参考文档
* [H5+定位模块](http://www.dcloud.io/docs/api/zh_cn/geolocation.html)
* [百度坐标转换](http://lbsyun.baidu.com/index.php?title=webapi/guide/changeposition)