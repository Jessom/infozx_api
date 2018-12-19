# GeolocationMap
[Demo](http://watasi.gitee.io/infozx_api/dist/#/gelocationMap) <br />

```bash
cnpm install --save vue-amap
```

::: tip 定位
请多多参阅[官方文档](http://lbs.amap.com/api/javascript-api/reference/map) <br />
:::

[IOS定位不准解决方法](../../js/geolocation)

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
```vue{25}
<template lang="html">
  <div class="container">
  	<div class="map-wrap">
  		<geolocation-map ref='map' :options='options' />
  	</div>

  	<button class="mui-btn mui-btn-block mui-block-primary" @tap='location'>重新定位</button>
		
		<input type="text" v-model='addr' placeholder="请输入地址">
  	<button class="mui-btn mui-btn-block mui-block-primary" @tap='add'>添加地点</button>

  	<button class="mui-btn mui-btn-block mui-block-primary" @tap='getLocat'>获取位置信息</button>

  	<div>{{loc}}</div>

  	<button class="mui-btn mui-btn-block mui-block-primary" @tap='success'>定位完成了没</button>

  	<button class="mui-btn mui-btn-block mui-block-primary" @tap='punch'>是否在打卡范围</button>

	</div>
</template>

<script>
import { bus } from '@/common/js/bus'
import GeolocationMap from '@/components/Map/GeolocationMap.vue'
export default {
	data() {
		return {
			loc: null,
			addr: '',
			options: {
				companyAddr: '苏州市寒山寺',			// 公司地址
				isLocation: false,			// 定位完成 必须
				isContains: false 			// 是否在圈内
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
			this.$refs.map.geocoder(this.addr, {iconLabel: {innerHTML: 'A'}}, {}, b => {
				alert(`定位点在该范围内${b}`)
			})
		},
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
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|zoom|Number|12|地图显示的缩放级别|
|companyAddr|String|苏州市金门路1200号安得装饰|公司地址，会根据该地址，解析出相应的地理位置|
|isLocation|Boolean|false|**必须**, 请一定要传个`false`; 定位是否完成|
|isContains|Boolean|false|**必须**, 请一定要传个`false`; 是否在圆圈范围|
|circleStyle|Object|-|圆圈样式, [查看circleStyle](#circleStyle)|
|companyStyle|Object|-|公司位置marker样式, [查看circleStyle](#companyStyle)|
|locationStyle|Object|-|当前位置marker样式, [查看locationStyle](#locationStyle)|

### circleStyle
[官方文档](http://lbs.amap.com/api/javascript-api/reference/overlay#circle)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|color|String|#eb7d46|圆填充色，边框色|
|opacity|Number|0.3|圆填充色的透明度|
|weight|Number|1|圆边框的粗度|
|radius|Number|80|圆半径，也就是打卡范围，填0为没有打卡范围限制|

### companyStyle
[官方文档](http://lbs.amap.com/api/javascript-api/reference-amap-ui/overlay/simplemarker)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|iconLabel|Object or String|{ innerHTML:'公司', style: { color: 'white' } }|图标前景文字, 具体参数请参考文档|
|showPositionPoint|Boolean|true|是否显示定位点|
|iconStyle|Object or String|orange|背景图标样式, 具体参数请参考文档|

### locationStyle
[官方文档](http://lbs.amap.com/api/javascript-api/reference-amap-ui/overlay/simplemarker)

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|iconLabel|Object or String|{ innerHTML:'我', style: { color: 'white' } }|图标前景文字, 具体参数请参考文档|
|showPositionPoint|Boolean|true|是否显示定位点|
|iconStyle|Object or String|blue|背景图标样式, 具体参数请参考文档|

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
|netLocation|-|定位方法，可通过此方法重新定位|
|getLocat|{position, address, formattedAddress}|获取定位后的位置信息|
|geocoder|-|添加坐标点|
geocoder接收四个参数
* addr: 地理位置`苏州市金门路1200号`或坐标点`{lng:120.578028, lat: 31.307886}`
* [style](#style): 标记的样式
* [circle](#circle): 圆的样式
* 回调，返回当前定位点是否在配置的圆的范围

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
