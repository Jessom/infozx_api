<template>
	<div class="z-page-slide-home">
		<div id="segmentedControl" class="mui-segmented-control">
      <a v-for='(item, ind) in opt.list' :key='ind' :data-wid='item.id' class="mui-control-item" :class="{'mui-active':active==item.id}">
        <span>{{item.title}}</span>
      </a>
    </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			webview: null,				// 保存当前webview
		}
	},
	props: {
		options: {
			type: Object,
			default: function() {
				return {}
			}
		},
		active: String
	},
	computed: {
		opt() {
			let opt = {
				list: []
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	created() {
		mui.plusReady(() => {
      let _self = plus.webview.currentWebview()
      let group = new webviewGroup(_self.id, {
        items: this.opt.list,
        onChange: this.webviewChange
      })
      mui(".mui-segmented-control").on("tap", ".mui-control-item", function(e) {
        let wid = this.getAttribute("data-wid")
        group.switchTab(wid)
      })
      
      this.webview = plus.webview.getWebviewById(this.opt.list[0].id)
    })

    mui.back = function() {
      let _self = plus.webview.currentWebview()
      _self.close("auto")
    }
	},
	methods: {
		webviewChange(obj) {
      let index = parseInt(obj.index)
      // 获取webview
      this.webview = plus.webview.getWebviewById(this.opt.list[index].id)
      this.active = this.opt.list[index].id
    }
	}
}
</script>


<style lang="scss">
@import './pageSlide.scss';
</style>
