<template>
	<div class="z-gauge-wrap">
		<ve-gauge
			:data="opt.d"
			:height='conf.height'
			:width='conf.width'
    	:settings="opt.settings" />
	</div>
</template>

<script>
import VeGauge from 'v-charts/lib/gauge.common'
export default {
  props: {
  	list: Array,
  	options: {
  		type: Object,
  		default: function() { return {} }
  	}
  },
  computed: {
  	opt() {
  		let o = this.creatMap(JSON.parse(JSON.stringify(this.list)))
  		let settings = this.setSettings(o)
  		// console.log(settings)
  		let d = { columns: ['key', 'value'], rows: this.list }
  		return { d, settings }
  	},
  	conf() {
  		let conf = {
  			width: '100%',
  			height: '180px',
  			lineColor: [[0.8, '#666'],[1, '#f60']]
  		}
  		return mui.extend(true, {}, conf, this.options)
  	}
  },
  methods: {
  	creatMap(arr) {
  		let names = {}
  		let maps = {}
  		let types = {}
  		let size = this.defaultSize(arr)
  		for(let i=0; i<arr.length; i++) {
  			let defaut = this.defaultOpt()
  			let item = arr[i]
  			let key = item.key
  			names[key] = item.name
  			maps[key] = { ...mui.extend(true, {}, size[i], this.options[key]), ...defaut }
  			types[key] = 'percent'
  		}
  		if(arr.length >= 4) {
	  		maps[arr[this.list.length-1].key].detail.offsetCenter = [0, '40%']
	  		maps[arr[this.list.length-1].key].title.offsetCenter = [0, '130%']
  			maps[arr[this.list.length-2].key].detail.offsetCenter = [0, '-40%']
  		}
  		return { maps, names, types }
  	},
  	setSettings(obj) {
  		return {
  			dataType: obj.types,
	      dataName: obj.names,
	      seriesMap: obj.maps
  		}
  	},

  	// 默认配置
  	defaultOpt() {
  		return {
  			axisLine: {
          lineStyle: {
            color: this.conf.lineColor,
            width: 2,
          }
        },
        axisLabel: {
        	show: false,
          textStyle: {
            color: '#363636',
            fontSize: 12,
          }
        },
        axisTick: {
          length: 5,
          lineStyle: {
            color: 'auto',
          }
        },
        splitLine: {
          length: 15,
          lineStyle: {
            color: 'auto',
          }
        },
        pointer: {
        	width: 2,
        },
        title: {
        	offsetCenter: [0, '-130%'],
          textStyle: {
            fontSize: 14,
            color: '#363636',
          }
        },
        detail: {
          offsetCenter: [0, '50%'],
          textStyle: {
            color: '#363636',
            fontSize: 12
          }
        }
  		}
  	},
  	defaultSize(arr) {
  		let len = arr.length
  		if(len === 1) {
  			return [
  				{ min: 0, max: 1, radius: '50%' }
  			]
  		} else if(len === 2) {
  			return [
  				{ min: 0, max: 1, center: ['70%', '70%'], radius: '50%', endAngle: 0, startAngle: 180 },
  				{ min: 0, max: 1, center: ['30%', '70%'], radius: '50%', endAngle: 0, startAngle: 180 },
  			]
  		} else if(len === 3) {
	  		return [
	  			{ min: 0, max: 1, radius: '50%' },
	  			{ min: 0, max: 1, center: ['15%', '70%'], radius: '40%', endAngle:45, splitNumber:7, },
	  			{ min: 0, max: 1, center: ['84%', '70%'], radius: '40%', startAngle:135, splitNumber:7, }
	  		]
  		} else if(len === 4) {
  			return [
  				{ min: 0, max: 1, radius: '50%' },
	  			{ min: 0, max: 1, center: ['15%', '70%'], radius: '40%', endAngle:45, splitNumber:7, },
	  			{ min: 0, max: 1, center: ['84%', '65%'], radius: '40%', startAngle: 155, endAngle: 25, splitNumber:2, },
	  			{ min: 0, max: 1, center: ['84%', '65%'], radius: '40%', startAngle:335, endAngle: 205, splitNumber:2, }
  			]
  		}
  	}
  },
	components: {
		VeGauge
	}
}
</script>

<style>
.z-gauge-wrap {
  background-color: #fff;
}
</style>