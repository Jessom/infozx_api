<template>
	<div class="z-progress-chart-wrap">
	   <canvas id="z-progress-chart"></canvas>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Object,
			default: function() {
				return {}
			}
		}
	},
	computed: {
		opt() {
			let opt = {
				coord: {
				  transposed: true,
				  innerRadius: 0.8,
				  radius: 0.85
				},
				arcStyle: {
					lineCap: 'round',
					lineWidth: 20,
			    stroke: '#ccc'
				}
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	methods: {
		init() {
			this.chart = new F2.Chart({
			  id: 'z-progress-chart',
			  width: window.innerWidth,
			  padding: 10,
			  pixelRatio: window.devicePixelRatio
			})
		},
		render(cur, max) {
			this.init()
			cur = typeof cur === 'number' ? cur : Number(cur)
			max = typeof max === 'number' ? max : Number(max)
			let c = cur
			let m = max
			if(max > 100 || max < 100) {
				c = Number(((cur * 100) / max).toFixed(2))
				m = 100
			}
			let d = [{x: '1', y: c}]
			console.log(d, m)
			this.chart.source(d, {
			  y: { max: m, min: 0 }
			})
			this.chart.axis(false)
			this.chart.tooltip(false)
			this.chart.coord('polar', this.opt.coord);
			this.chart.guide().arc({
			  start: [0, 0],
			  end: [1, 99.98],
			  top: false,
			  style: this.opt.arcStyle
			})
		},
		renderAgain() {
			this.chart.interval().position('x*y').size(20).animate({
			  appear: {
			    duration: 1200,
			    easing: 'cubicIn'
			  }
			});
			this.chart.render();
		},
		renderText(content, style={}, pos=['50%', '50%']) {
			this.chart.guide().text({
			  position: pos,
			  content: content,
			  style: style
			})
		}
	}
}
</script>

<style lang='scss'>
.z-progress-chart-wrap {
	background-color: #fff;
	#z-progress-chart {
		height: 35vh;
	}
}
</style>