<template>
	<div class="z-page-slide-bar" v-if='opt.show'>
		<div id="segmentedControl" class="mui-segmented-control">
      <a v-for='(item, ind) in opt.list' :key='ind' :data-wid='item.id' class="mui-control-item" :class="{'mui-active':opt.active==item.id}" @tap='onTopbar(item)'>
        <span>{{item.title}}</span>
      </a>
    </div>
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
				active: '',
				list: [],
				open: true,
				show: mui.os.plus ? false : true
			}
			return mui.extend({}, opt, this.options)
		}
	},
	methods: {
		onTopbar(obj) {
			if(this.opt.open) {
				let url = this.check(obj)
				tools.openWindow({ url: url })
			} else {
				this.$emit('ontopbar', obj)
			}
		},
		check(obj) {
	    let url = ''
	    if (obj.url.indexOf('?') != -1) {
        // 获取传入的url中的参数
        let aP = obj.url.replace('?', '&').split('&')
        let b = aP[0]
        let p = aP.slice(1, aP.length).join('&')
        // 获取当前url中的参数
        let cP = location.search.replace('?', '&')
        let cc = cP.slice(1, cP.length).split('&')
        console.log(cc)
        let f = ''
        for (let i = 0; i < cc.length; i++) {
        	console.log(cc[i])
          if (p.indexOf(cc[i].split('=')[0]) == -1) {
            f += `${cc[i]}`
          }
        }
        url = b + '?' + f + '&' + p
	    } else {
	      url = obj.url + location.search
	    }
	    return url
		}
	}
}
</script>

<style lang='scss'>
@import './pageSlide.scss';
.z-page-slide-bar {
	position: relative;
	z-index: 1;
	background-color: #efeff4;
}
</style>