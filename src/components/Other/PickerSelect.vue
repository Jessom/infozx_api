<template>
	<div class="z-picker-container">
		<side-panel :options='sp'>
			<div class="z-picker-head mui-clearfix mui-text-center">
				<button class="mui-btn mui-pull-left" @tap='close'>取消</button>
				<span class="title mui-ellipsis">{{active?active.title:""}}</span>
				<button class="mui-btn mui-pull-right base-btn" @tap='success'>确定</button>
			</div>

			<div class="z-picker-body">
				<div class="mui-slider">
					<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
						<div class="mui-scroll">
							<a class="mui-control-item" @tap='menuAll($event)'>全部</a>
							<a class="mui-control-item" v-for='(item, ind) in actived' :key='ind' @tap='onMenu($event, item, ind)' :class='{"mui-active": active.title===item.title}'>{{item.title}}</a>
						</div>
					</div>
				</div>

				<div class="z-picker-content mui-scroll-wrapper" style="top:80px;">
					<div class="mui-scroll">
						<div class="mui-table-view">
							<div class="mui-table-view-cell" v-for='(item, ind) in reading' :key='ind' @tap='onCell($event, item)'>{{item.title}}</div>
						</div>
					</div>
				</div>
			</div>
		</side-panel>
	</div>
</template>

<script>
import SidePanel from '@/components/Other/SidePanel.vue'
export default {
	data() {
		return {
			active: null,				// 头部选中
			ind: 1,						// 头部当前选中下标
			actived: [],			// 选中部门
			sp: {
				id: 'z-picker-panel',
				style: 'bottom'
			},
			reading: [],			// 渲染数据
		}
	},
	props: {
		list: Array,
		options: {
			type: Object,
			default: function() {
				return {}
			}
		}
	},
	watch: {
		list(val, oldVal) {
			this.reading = [...val]
		}
	},
	computed: {
		opt() {
			let opt = {
				final: false,
				toast: '请选到最后'
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	mounted() {
		mui('.z-picker-content').scroll()
	},
	methods: {
		onCell(e, obj) {
			if(e !== undefined) e.stopPropagation()
			// if(!this.actived.includes(obj.title)) {
			this.actived.push(obj)
			// }
			this.active = obj
			this.reading = obj.children
		},
		onMenu(e, obj, ind) {
			if(e !== undefined) e.stopPropagation()
			this.active = obj
			this.actived.splice(ind + 1, this.actived.length - ind)
			this.cdata(this.list, obj.title, res => {
				this.reading = res.children
			})
		},
		menuAll(e) {
			if(e !== undefined) e.stopPropagation()
			this.active = null
			this.actived = []
			this.reading = this.list
		},
		cdata(arr, param, cb) {
			if(!arr) return
			for(let i = 0, len = arr.length; i < len; i++) {
				let item = arr[i]
				if(item.title === param) {
					cb(item)
				} else {
					this.cdata(item.children, param, cb)
				}
			}
		},
		success() {
			if(this.opt.final) {
				if(this.active.children && this.active.children.length > 0) {
					mui.toast(this.opt.toast)
				} else {
					this.$emit('onSuccess', this.active)
					this.close()
				}
			} else {
				this.$emit('onSuccess', this.active)
				this.close()
			}
		},
		close() {
			mui('#z-picker-panel').popover('toggle')
		}
	},
	components: {
		SidePanel
	}
}
</script>

<style lang='scss'>
.z-picker-container {
	.z-picker-head {
		padding: 6px 15px;
		.mui-btn {
			font-size: 1.2rem;
		}
		.title {
			display: inline-block;
			line-height: 30px;
			max-width: 60%;
		}
	}
	.z-picker-body {
		.mui-scroll-wrapper {
			margin: 0;
		}
		.mui-slider {
			background-color: #f7f7f7;
		}
		.mui-table-view {
			background-color: transparent;
		}
	}
	.z-slide-slip-container {
		height: 61vh;
	}
}
</style>