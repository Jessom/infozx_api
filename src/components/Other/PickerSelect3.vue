<template>
	<div class="z-picker-container">
		<side-panel :options='sp'>
			<div class="z-picker-head mui-clearfix mui-text-center">
				<button class="mui-btn mui-pull-left" @tap='close'>取消</button>
				<span class="title mui-ellipsis">{{active?active.title:""}}</span>
				<button class="mui-btn mui-pull-right base-btn" @tap='success'>确定</button>
			</div>

			<div class="z-picker-body">
        <div class="menu-wrap mui-clearfix">
          <div class="mui-slider" :class='{"branch":!flag}'>
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
              <div class="mui-scroll">
                <a class="mui-control-item" @tap='menuAll($event)'>全部</a>
                <a
                  class="mui-control-item"
                  v-for='(item, ind) in actived'
                  :key='ind'
                  @tap='onMenu($event, item, ind)'
                  :class='{"mui-active": active.title===item.title}'>{{item.title}}</a>
              </div>
            </div>
          </div>
          <!-- 包含子部门按钮 -->
          <div class="includes-wrap" v-show='!flag&&active.title' @tap='childEvent($event)' :class='{"on": belong}'>
            <i class="iconfont icon-belong"></i>
          </div>
        </div>

				<div class="z-picker-content mui-scroll-wrapper" style="top:80px;">
					<div class="mui-scroll">
						<!-- 提供的选项 开始 -->
						<div
              class="mui-table-view z-branch-wrap mui-table-view-radio"
              v-show='guide'>
              <div
                class="mui-table-view-cell mui-media z-myself"
                :class='{"mui-selected": onGuide===true}'
                @tap='onGuideEvent($event, true)'>
								<a href="javascript:;" class="mui-navigate-right">自己</a>
							</div>
              <div class="mui-table-view-cell" @tap='onBM($event, true)'>
								<a href="javascript:;" class="mui-navigate-right">组员</a>
							</div>
              <div class="mui-table-view-cell" @tap='onBM($event, false)'>
								<a href="javascript:;" class="mui-navigate-right">部门</a>
							</div>
              <div
                class="mui-table-view-cell mui-media z-all"
                :class='{"mui-selected": onGuide===false}'
                @tap='onGuideEvent($event, false)'>
								<a href="javascript:;" class="mui-navigate-right">全部</a>
							</div>
            </div>    <!-- 提供的选项 结束 -->

            <div>
              <!-- 小组 -->
              <div class="mui-table-view" v-show='!guide'>
                <div
                  class="mui-table-view-cell"
                  v-for='(item, ind) in member'
                  :key='ind'
                  @tap='onMumberCell($event, item)'>{{item.title}}</div>
              </div>

              <!-- 选择组员 开始 -->
              <ul class="mui-table-view z-staffs-wrap mui-table-view-radio" v-show='flag'>
                <!-- <li class="mui-table-view-cell">选择成员</li> -->
                <li
                  class="mui-table-view-cell mui-media"
                  v-for='(item, ind) in memberstaffs'
                  :key='ind'
                  @tap='selectMember($event, item)'>
                  <a href="javascript:;" class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left" v-if='item.image' :src="item.image">
                    <div class="text-wrap" v-else>{{item.title.charAt(0)}}</div>
                    <div class="mui-media-body">
                      <span class="title mui-ellipsis">{{item.title}}</span>
                      <p class='desc mui-ellipsis'>{{item.desc}}</p>
                    </div>
                  </a>
                </li>
              </ul>    <!-- 选择组员 结束 -->

              <!-- 选择部门 开始 -->
              <ul
                class="mui-table-view z-staffs-wrap z-branch-containe mui-table-view-radio"
                v-show='!flag&&!belong'>
                <li class="choise" v-show='!!member.length'>选择部门 ↓</li>
                <li
                  class="mui-table-view-cell mui-media"
                  v-for='(item, ind) in member'
                  :key='ind'
                  @tap='selectBranch($event, item)'>
                  <a href="javascript:;" class="mui-navigate-right">{{item.title}}</a>
                </li>
              </ul>   <!-- 选择部门 结束 -->
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
			sp: { id: 'z-picker-panel3', style: 'bottom' },
			reading: [],
      
      belong: false,        // 用于控制是否包含子部门
      flag: true,           // 点击的是【成员(true)】还是【部门(false)】
      active: {title: ''},  // 选中的部门
      actived: [],          // 用于渲染顶部菜单栏
      guide: true,				  // 是否在默认提供的选项页中
      onGuide: '',          // 保存选中的是自己还是全部
      member: [],           // 成员
      memberstaffs: [],     // 选择成员里的成员
      memberSelected: [],   // 保存已选中的成员
      branchSelected: [],   // 保存已选中的部门
      childBranch: [],      // 子部门信息，其实是当前选中的部门
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
	computed: {
		opt() {
			let opt = {
				toast: '请至少选择一个人',
				multi: true,			// 是否多选
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	mounted() {
		mui('.z-picker-content').scroll()
	},
	methods: {
    // 点击选择成员 or 部门
    onBM(e, flag) {
      e.stopPropagation()
      this.member = [...this.list]
      this.guide = false
      this.flag = flag
      this.onGuide = ''
    },
    // 选择成员中的部门被点击
    onMumberCell(e, item) {
      if(!item.children.length && !this.flag) {
        mui.toast('点不进去啦！')
        return
      }
      this.branchSelected = []
      this.member = item.children         // 渲染新部门
      if(this.flag) {
        this.memberstaffs = item.staff      // 渲染新部门下的成员
      }
      this.actived.push(item)             // 将当前部门信息添加至菜单栏
      this.active = item                  // 将当前部门设为默认项
      this.belong = false                 // 清空包含子部门的信息
      this.childBranch = []
      this.clearn()                       // 清空选中项
    },
    // 选择成员
    selectMember(e, item) {
      if(this.opt.multi) {      // 多选
        e.stopPropagation()
				if(e.currentTarget.classList.contains('mui-selected')) {
					e.currentTarget.classList.remove('mui-selected')
					this.memberSelected.splice(this.memberSelected.findIndex(i => i.id === item.id), 1)
				} else {
					e.currentTarget.classList.add('mui-selected')
					this.memberSelected.push(item)
				}
      } else {              // 单选
        this.memberSelected = item
      }

      console.log(this.memberSelected)
    },
    // 选择部门
    selectBranch(e, item) {
      if(this.opt.multi) {      // 多选
        e.stopPropagation()
				if(e.currentTarget.classList.contains('mui-selected')) {
					e.currentTarget.classList.remove('mui-selected')
					this.branchSelected.splice(this.branchSelected.findIndex(i => i.id === item.id), 1)
				} else {
					e.currentTarget.classList.add('mui-selected')
					this.branchSelected.push(item)
				}
      } else {              // 单选
        this.branchSelected = item
      }
    },
    // 点击右上角包含/不包含按钮事件
    childEvent(e) {
      this.belong = !this.belong
      this.branchSelected = []     //  清空已选中的部门
      if(this.belong) {
        this.childBranch = this.active  
      } else {
        this.childBranch = []
      }
      mui('.z-branch-containe .mui-selected').each((i, c) => {
        c.classList.remove('mui-selected')
      })
      console.log(this.childBranch)
    },
    // 自己(flag=true) or 全部(flag=false)
    onGuideEvent(e, flag) {
      e.stopPropagation()
      this.onGuide = flag
      if(e.currentTarget.classList.contains('mui-selected')) {
        this.onGuide = ''
      }
      /* if(e.currentTarget.classList.contains('mui-selected')) {
        e.currentTarget.classList.remove('mui-selected')
        this.onGuide = ''
      } else {
        e.currentTarget.classList.add('mui-selected')
        this.onGuide = flag
        if(flag === true) {
          document.querySelector('.z-all').classList.remove('mui-selected')
        } else if(flag === false) {
          document.querySelector('.z-myself').classList.remove('mui-selected')
        }
      } */
    },

    // 全部
    menuAll(e) {
      this.guide = true         // 显示全部
      this.member = []          // 清空渲染的组员部门
      this.memberstaffs = []    // 清空渲染的组员
      this.memberSelected = []  // 清空已选中项
      this.actived = []
      this.active = {}
    },
    // 清除选中项
		clearn() {
			this.memberSelected = []			// 情况选中项
			mui('.z-picker-container .mui-selected').each((i, c) => {
				c.classList.remove('mui-selected')
			})
		},
		onMenu(e, obj, ind) {
			if(e !== undefined) e.stopPropagation()
			this.clearn()
			this.active = obj
			this.actived.splice(ind + 1, this.actived.length - ind)
			this.cdata(this.list, obj.id, res => {
				this.reading = res.children
        
        this.memberstaffs = res.staff
        this.member = res.children
			})
		},
		cdata(arr, param, cb) {
			if(!arr) return
			for(let i = 0, len = arr.length; i < len; i++) {
				let item = arr[i]
				if(item.id === param) {
					cb(item)
				} else {
					this.cdata(item.children, param, cb)
				}
			}
		},
		success() {
      if(this.onGuide === false || this.onGuide === true) {
        this.$emit('onSuccess', {flag: this.onGuide?0:1, list: this.list})
        return this.close()
      }

      if(this.flag && this.memberSelected.length<=0) {
        // 选择成员
        mui.toast(this.opt.toast)
        return
      } else if(!this.flag && (!this.branchSelected.length && !this.childBranch.title)) {
        // 选择部门
        mui.toast('请选择一个部门')
        return
      }
      if(this.flag) { // 成员
        this.$emit('onSuccess', {flag: 2, current: this.active, member: this.memberSelected})
      } else if(!this.flag) {   // 部门
        this.$emit('onSuccess', {flag: 3, current: this.active, branch: this.branchSelected})
      }
      this.close()
		},
		close() {
			mui('#z-picker-panel3').popover('toggle')
		}
	},
	components: {
		SidePanel
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
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
		height: 80vh;
	}
	.z-staffs-wrap {
    border-radius: 0;
		.mui-table-view-cell {
			.title {}
			.desc {
				font-size: 1.2rem;
			}
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
	.z-branch-wrap {
		&::after {
			height: 1px !important;
			background-color: #c8c7cc !important;
		}
  }
  .mui-segmented-control.mui-scroll-wrapper .mui-control-item {
    padding: 0 10px;
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
    // height: 38px;
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