# MultiAddrMap
[Demo](http://watasi.gitee.io/infozx_api/dist/#/multiAddrMap.html) <br />

```bash
cnpm install --save vue-amap
```
::: tip 添加多点坐标
请多多参阅[官方文档](http://lbs.amap.com/api/javascript-api/reference/map)
:::

::: warning 警告
使用该组件时，请在对应的js中加入以下代码
:::
```javascript{5}
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
```vue{13}
<template>
	<div>
		<div style='height:61vh'>
			<multi-addr-map :options='mp' ref='map' />
		</div>
		<input type="text" placeholder='请输入地址' v-model='addr'>
		<button class="mui-btn-block" @tap='add'>add</button>
		<button class="mui-btn-block" @tap='addpos'>add position</button>
	</div>
</template>

<script>
import MultiAddrMap from '@/components/Map/MultiAddrMap.vue'
export default {
	data() {
		return {
			mp: {
				init: false,			// 地图是否初始化完成，必须传入
			},
			addr: ''
		}
	},
	watch: {
		'mp.init': function(val) {
			if(val) {
				this.$refs.map.geocoder('苏州市金门路1200号安得装饰')
			}
		}
	},
	methods: {
		add() {
			this.$refs.map.geocoder(this.addr, {iconLabel: {innerHTML: '我'}})
		},
		addpos() {
			this.$refs.map.geocoder({lng:120.578028, lat: 31.307886}, {iconLabel: {innerHTML: '公司'}})
		}
	},
	components: {
		MultiAddrMap
	}
}
</script>

<style lang='scss'>
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

## refs
|事件|返回|描述|
|:---:|:---:|:---:|
|geocoder|-|添加坐标点|
geocoder接收三个参数
* addr: 地理位置`苏州市金门路1200号`或坐标点`{lng:120.578028, lat: 31.307886}`
* [style](#style): 标记的样式
* [circle](#circle): 圆的样式

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