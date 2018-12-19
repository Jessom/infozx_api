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

				<!-- 搜索框 -->
				<div class="z-picker-search-wrap" v-show='showSearch && level==0'>
					<input
						type="search"
						class="mui-text-left"
						@keyup.13='onEntry'
						v-model="searchVal"
						placeholder="请输入用户名或用户id" />
				</div>

				<div class="z-picker-content mui-scroll-wrapper" :style="{top: scrollTop}">
					<div class="mui-scroll">
						<!-- 部门 -->
						<div class="mui-table-view z-branch-wrap mui-table-view-radio" v-show='!searchRes.length'>
							<div class="mui-table-view-cell mui-media" v-if='!level && opt.self' @tap='myself($event)'>
								<a href="javascript:;" class="mui-navigate-right">自己</a>
							</div>

							<div class="mui-table-view-cell" v-if='item.title' v-for='(item, ind) in reading' :key='ind' @tap='onCell($event, item)'>{{item.title}}</div>
						</div>
						
						<!-- <div style="background-color:#efeff4;height:15px;"></div> -->

						<!-- 员工 -->
						<ul class="mui-table-view z-staffs-wrap mui-table-view-radio" v-show='!searchRes.length'>
					    <li class="mui-table-view-cell mui-media" v-for='(item, ind) in staffs' :key='ind' @tap='selectedevent($event, item)'>
				        <a href="javascript:;" class="mui-navigate-right">
			            <img class="mui-media-object mui-pull-left" v-if='item.image' :src="item.image">
			            <div class="text-wrap" v-else>{{item.title.slice(0,1)}}</div>
			            <div class="mui-media-body">
		                <span class="title mui-ellipsis">{{item.title}}</span>
		                <p class='desc mui-ellipsis'>{{item.desc}}</p>
			            </div>
				        </a>
					    </li>
					  </ul>

						<!-- 渲染搜索结果 -->
						<ul class="mui-table-view z-staffs-wrap mui-table-view-radio" v-show='searchRes.length'>
					    <li class="mui-table-view-cell mui-media" v-for='(item, ind) in searchRes' :key='ind' @tap='selectedevent($event, item)'>
				        <a href="javascript:;" class="mui-navigate-right">
			            <img class="mui-media-object mui-pull-left" v-if='item.image' :src="item.image">
			            <div class="text-wrap" v-else>{{item.title.slice(0,1)}}</div>
			            <div class="mui-media-body">
		                <span class="title mui-ellipsis">{{item.title}}<sup class="grey-color ml5">{{item.branch}}</sup></span>
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
			searchVal: '',
			searchRes: [],
			allStaff: [],
			active: null,				// 头部选中
			ind: 1,						// 头部当前选中下标
			actived: [],			// 选中部门
			sp: {
				id: 'z-picker-panel2',
				style: 'bottom'
			},
			reading: [],
			staffs: [],			// 当前部门下的员工
			selected: [],		// 选中的人
			level: 0,				// 当前所在层级
		}
	},
	props: {
		list: Array,
		showSearch: {
			type: Boolean,
			default: false
		},
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
			for(let item of val) {
				for(let i of item.staff) {
					this.allStaff.push({...i, branch: item.title})
				}
				for(let i of item.children) {
					for(let y of i.staff) {
						this.allStaff.push({...y, branch: i.title})
					}
				}
			}
		},
		searchVal(val) {
			// if(val === '') {
				this.searchRes = []
				this.selected = []
			// }
		}
	},
	computed: {
		opt() {
			let opt = {
				people: true,
				toast: '请选中一个人',
				multi: true,			// 是否多选
				self: false,			// 是否可以选择自己
			}
			return mui.extend(true, {}, opt, this.options)
		},
		scrollTop() {
			return this.showSearch && this.level == 0 ? '120px' : '80px'
		}
	},
	mounted() {
		mui('.z-picker-content').scroll()
	},
	methods: {
		init() {
			this.searchVal = ''
			this.searchRes = []
			this.active = null
			this.ind = 1
			this.actived = []
			this.reading = []
			this.staffs = []
			this.selected = []
			this.level = 0
			this.reading = this.list
		},
		onCell(e, obj) {
			if(e !== undefined) e.stopPropagation()
			this.clearn()
			this.level === 0 ? this.level=1 : ''
			this.staffs = obj.staff
			this.actived.push(obj)
			this.active = obj
			this.reading = obj.children
		},
		// 选择人
		selectedevent(e, item) {
			if(this.opt.multi) {			// 多选
				e.stopPropagation()
				if(e.currentTarget.classList.contains('mui-selected')) {
					e.currentTarget.classList.remove('mui-selected')
					this.selected.splice(this.selected.findIndex(i => i.id === item.id), 1)
				} else {
					e.currentTarget.classList.add('mui-selected')
					this.selected.push(item)
				}
			} else {				// 单选
				this.selected = item
			}
		},
		// 选自己
		myself(e) {
			if(this.opt.multi) {
				if(this.selected.findIndex(i => i.id === -666) === -1) {
					this.selected.push({ id: -666 })
				}
			} else {
				this.selected = { id: -666 }
			}
		},
		onMenu(e, obj, ind) {
			if(e !== undefined) e.stopPropagation()
			this.clearn()
			this.active = obj
			this.actived.splice(ind + 1, this.actived.length - ind)
			this.cdata(this.list, obj.id, res => {
				this.reading = res.children
				this.staffs = res.staff
			})
		},
		menuAll(e) {
			if(e !== undefined) e.stopPropagation()
			this.clearn()
			this.level = 0
			this.active = null
			this.actived = []
			this.reading = [...this.list]
			this.staffs = []
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
			if(this.opt.people && this.selected.length<=0) {		// 选到人
				mui.toast(this.opt.toast)
			} else {
				this.$emit('onSuccess', {branch: this.active, staff: this.selected})
				this.close()
			}
		},
		clearn() {
			this.selected = []			// 情况选中项
			mui('.z-picker-container .mui-selected').each((i, c) => {
				c.classList.remove('mui-selected')
			})
		},
		close() {
			mui('#z-picker-panel2').popover('toggle')
			this.init()
		},
		// 搜索事件
		onEntry() {
			for(let item of this.allStaff) {
				if(item.id === Number(this.searchVal) || item.title.includes(this.searchVal)) {
					this.searchRes.push(item)
				}
			}
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
		/* margin-top: 15px;
		border-radius: 0;
		background-color: #f9f9f9 !important; */
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
	}
	.z-branch-wrap {
		&::after {
			height: 1px !important;
			background-color: #c8c7cc !important;
		}
	}

	.z-picker-search-wrap {
		background-color: #f7f7f7;
		padding: 0 10px 10px 10px;
		input {
			margin: 0;
			background-color: #fff;
			font-size: 1.2rem;
			height: 30px;
			border-radius: 3px;
		}
	}
}
</style>