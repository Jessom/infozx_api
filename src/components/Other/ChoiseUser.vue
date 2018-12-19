<template>
	<div class="z-choise-user-wrap">
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
            <ul class="mui-table-view z-staffs-wrap z-branch-containe mui-table-view-radio">
              <li
                class="mui-table-view-cell mui-media"
                v-for='(item, ind) in staffs'
                :key='ind'
                @tap='onBelong($event, item)'>
                <a href="javascript:;" class="mui-navigate-right">
                  <img class="mui-media-object mui-pull-left" v-if='item.image' :src="item.image">
                  <div class="text-wrap" v-else>{{item.title.charAt(0)}}</div>
                  <div class="mui-media-body">
                    <span class="title mui-ellipsis">{{item.title}}</span>
                    <p class='desc mui-ellipsis'>{{item.desc}}</p>
                  </div>
                </a>
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
      reading: [],			// 渲染数据
      /* sp: {
        id: 'z-choise-user',
        style: 'bottom'
      }, */
      
      belongActived: [],    // 保存选中的部门
      staffs: []
		}
	},
	props: {
		list: Array,
		id: {
			type: String,
			default: 'z-choise-user'
		},
		options: {
			type: Object,
			default: function() {
				return {}
			}
		}
	},
	computed: {
		sp() {
			return { id: this.id, style: 'bottom', height: '80vh' }
		}
	},
	watch: {
		list(val, oldVal) {
			console.log('我是user: ', val);
			this.reading = [...val]
		}
	},
	mounted() {
		// mui('.z-picker-content').scroll()
	},
	methods: {
    init() {
      this.active = null
			this.actived = []
      this.reading = this.list
      this.belongActived = []
      this.staffs = []
    },
    // 选择部门
    onBelong(e, item) {
      e.stopPropagation()
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
			mui('.z-choise-user-wrap .mui-selected').each((i, c) => {
				c.classList.remove('mui-selected')
			})
		},



		onCell(e, obj) {
      e.stopPropagation()
      if(obj.disabled) {
        mui.toast('不能选择')
        return
      }
      this.staffs = obj.staff
			// if(!this.actived.includes(obj.title)) {
			this.actived.push(obj)
      // }
      this.clearn()
			this.active = obj
			this.reading = obj.children
		},
		onMenu(e, obj, ind) {
      if(e !== undefined) e.stopPropagation()
      this.clearn()
      this.active = obj
      this.staffs = []
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
      this.staffs = []
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
      if(!this.belongActived.length) {
        mui.toast('至少选择一个人')
        return
      }
      this.$emit('onSuccess', this.belongActived)
      this.clearn()
			this.close()
		},
		close() {
			this.init()
			mui('#z-choise-user').popover('toggle')
		}
	},
	components: {
		SidePanel
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.z-choise-user-wrap {
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
  .text-wrap {
    display: inline-block;
    float: left;
    width: 42px;
    line-height: 42px;
    height: 42px;
    background-color: $baseColor;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    margin-right: 10px;
  }
  .mui-media-object, .text-wrap {
    border-radius: 50%;
  }
  .choise {
    padding: 5px 15px;
    background: #e3e3e3;
    color: #999;
  }
}
</style>