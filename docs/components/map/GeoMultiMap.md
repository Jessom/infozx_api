# GeoMultiMap(定位 && 添加多点坐标)
[Demo](https://watasi.cn/infozx_api/dist/#/geoMultiMap) <br />

```bash
cnpm install --save vue-amap
```
::: tip 定位 && 添加多点坐标
请多多参阅[官方文档](http://lbs.amap.com/api/javascript-api/reference/map)
:::

::: warning 警告
使用该组件时，请在对应的js中加入以下代码
:::
```javascript{6}
import VueAMap from 'vue-amap'
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'your key',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.Geocoder', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'
  ],
  uiVersion: '1.0'
})
```

## 示例
```vue{15}
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
			loc: null,
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
			// 经纬度的形式添加坐标点
			this.$refs.map.geocoder({
				lng: 120.578028,
				lat: 31.307886,
				id: 1
			}, {
				iconLabel: { innerHTML:'公司', style: { color: 'white' } },
				iconStyle: 'green'
			}, {
				radius: 200
			}, res => {
				console.log(res)  	// { lng: 120.578028, lat: 31.307886, id: 1, include: true } include会根据当前坐标点是否包含定位坐标点而返回 true 或 false
			})

			// 地理位置的形式添加坐标点
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
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|zoom|Number|12|地图显示的缩放级别|
|init|Boolean|-|地图是否初始化完成|
|isLocation|Boolean|-|是否定位完成|

## bus
|事件|返回|描述|
|:---:|:---:|:---:|
|sendAddr|-|定位完成，返回当前定位点信息|
调用方法

```javascript
import { bus } from '@/common/js/bus'
export default {
	created() {
		bus.$on('sendAddr', res => {
			console.log(res)
		})
	}
}
```

## refs
|事件|返回|描述|
|:---:|:---:|:---:|
|geocoder|-|添加坐标点|
geocoder接收四个参数
* [addr](#addr): 添加坐标点位置
* [style](#style): 标记的样式
* [circle](#circle): 圆的样式
* callback: 返回`addr`，并在`addr`内添加`include`字段，表示定位点是否在当前位置

### addr
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|addr|String|-|表示已地理位置添加坐标，如'苏州市金门路1200号'|
|lng|Number|-|与`lat`配合，已经纬度添加坐标，如需使用经纬度方式，请不要传入`addr`参数|
|lat|Number|-|与`lng`配合，已经纬度添加坐标，如需使用经纬度方式，请不要传入`addr`参数|

### style
[官方文档](http://lbs.amap.com/api/javascript-api/reference-amap-ui/overlay/simplemarker)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|iconLabel|Object or String|{ innerHTML:'公司', style: { color: 'white' } }|图标前景文字, 具体参数请参考文档|
|showPositionPoint|Boolean|true|是否显示定位点|
|iconStyle|Object or String|orange|背景图标样式, 具体参数请参考文档|

### circle
[官方文档](http://lbs.amap.com/api/javascript-api/reference/overlay#circle)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|color|String|#eb7d46|圆填充色，边框色|
|opacity|Number|0.3|圆填充色的透明度|
|weight|Number|1|圆边框的粗度|
|radius|Number|80|圆半径，也就是打卡范围，填0为没有打卡范围限制|