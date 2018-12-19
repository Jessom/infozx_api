<template>
	<div class="z-choise-belong-wrap">
		<side-panel :options='sp'>
			<div class="z-picker-head mui-clearfix mui-text-center">
				<button class="mui-btn mui-pull-left" @tap='close'>取消</button>
				<span class="title mui-ellipsis">{{active?active.title:""}}</span>
				<button class="mui-btn mui-pull-right base-btn" @tap='success'>确定</button>
			</div>

			<div class="z-picker-body">
				<div class="menu-wrap mui-clearfix">
					<div class="mui-slider branch">
						<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
							<div class="mui-scroll">
								<a class="mui-control-item" @tap='menuAll($event)'>全部</a>
								<a class="mui-control-item" v-for='(item, ind) in actived' :key='ind' @tap='onMenu($event, item, ind)' :class='{"mui-active": active.title===item.title}'>{{item.title}}</a>
							</div>
						</div>
					</div>
					<!-- 包含子部门按钮 -->
          <div class="includes-wrap" :class='{"on":flag}' v-show='actived.length && opt.include' @tap='includeEve($event)'>
            <i class="iconfont icon-belong"></i>
          </div>
				</div>

				<div class="z-picker-content mui-scroll-wrapper" style="top:80px;">
					<div class="mui-scroll">
            <!-- 部门 -->
						<div class="mui-table-view">
							<div
								class="mui-table-view-cell"
								:class='{"gray-bg": item.disabled}'
								v-for='(item, ind) in reading'
								:key='ind'
								@tap='onCell($event, item)'>{{item.title}}</div>
						</div>

             <!-- 选择部门 -->
            <ul v-show='!flag' class="mui-table-view z-staffs-wrap z-branch-containe mui-table-view-radio">
              <li class="choise">选择部门 ↓</li>
              <li
                class="mui-table-view-cell mui-media"
								:class='{"gray-bg": item.disabled}'
                v-for='(item, ind) in reading'
                :key='ind'
                @tap='onBelong($event, item)'>
                <a href="javascript:;" class="mui-navigate-right">{{item.title}}</a>
              </li>
            </ul>
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
				id: 'z-choise-belong',
				style: 'bottom',
				height: '80vh'
			},
			reading: [],			// 渲染数据
			
			flag: false,					// 是否显示包含子部门按钮
      belongActived: [],    // 保存选中的部门
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
			console.log('我是belong: ', val)
			this.reading = [...val]
		}
	},
	computed: {
		opt() {
			let opt = {
				final: false,
				toast: '请选到最后',
				include: true
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	mounted() {
		mui('.z-picker-content').scroll()
	},
	methods: {
    init() {
      this.active = null
			this.actived = []
			this.flag = false
      this.reading = this.list
      this.belongActived = []
    },
    // 选择部门
    onBelong(e, item) {
			e.stopPropagation()
			if(item.disabled) {
				mui.toast('不能选择')
				return
			}
      if(e.currentTarget.classList.contains('mui-selected')) {
        e.currentTarget.classList.remove('mui-selected')
        this.belongActived.splice(this.belongActived.findIndex(i => i.id === item.id), 1)
      } else {
        e.currentTarget.classList.add('mui-selected')
        this.belongActived.push(item)
      }
    },
    // 清空选中项
    clearn() {
			this.belongActived = []			// 情况选中项
			mui('.z-choise-belong-wrap .mui-selected').each((i, c) => {
				c.classList.remove('mui-selected')
			})
		},
		// 是否包含子部门
		includeEve(e) {
			this.flag = !this.flag
		},


		onCell(e, obj) {
			e.stopPropagation()
			if(obj.disabled) {
				mui.toast('不能选择')
				return
			}
      if(!obj.children.length) {
        mui.toast('点不进去啦！')
        return
      }
			// if(!this.actived.includes(obj.title)) {
			this.actived.push(obj)
      // }
      this.clearn()
			this.active = obj
			this.flag = false
			this.reading = obj.children
		},
		onMenu(e, obj, ind) {
      if(e !== undefined) e.stopPropagation()
      this.clearn()
			this.active = obj
			this.flag = false
			this.actived.splice(ind + 1, this.actived.length - ind)
			this.cdata(this.list, obj.title, res => {
				this.reading = res.children
			})
		},
		menuAll(e) {
      if(e !== undefined) e.stopPropagation()
      this.clearn()
			this.active = null
			this.actived = []
			this.flag = false
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
			if(this.flag) {
				this.$emit('onSuccess', { flag: 0, branch: [this.active] })
			} else {
				if(!this.belongActived.length) {
					mui.toast('至少选择一个部门')
					return
				}
				this.$emit('onSuccess', { flag: 1, branch: this.belongActived })
			}
      this.clearn()
			this.close()
		},
		close() {
			this.init()
			mui('#z-choise-belong').popover('toggle')
		}
	},
	components: {
		SidePanel
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.z-choise-belong-wrap {
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
  .choise {
    padding: 5px 15px;
    background: #e3e3e3;
    color: #999;
  }

	.branch {
    width: 85%;
    float: left;
  }
	.includes-wrap {
		float: right;
    width: 15%;
    background-color: #f7f7f7;
    line-height: 38px;
    text-align: center;
    color: #999;
		&.on {
      background-color: lighten($baseColor, 43);
      color: $baseColor;
    }
	}
	.menu-wrap {
    background-color: #f7f7f7;
  }
}
</style>