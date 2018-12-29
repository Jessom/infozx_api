<template>
	<div class="z-okina-hentai-wrap">
		<!-- 选择部门 -->
		<div class="z-okina-hentai-group">
			<head-cell
				:options='{
					data: { title: "选择部门", icon: "icon-Plus" }
				}'
				@onCellMenuClick='add(1)' />
			<div class="z-okina-hentai-list">
				<span
					class="z-okina-hentai-list-item"
					v-for='(item, ind) in branchList' :key='ind'>
					{{ item.title }}
					<i
						class="z-okina-close-btn iconfont icon-wrong"
						@tap='deleteItem(1, item)'></i>
				</span>
			</div>
		</div>

		<!-- 包含谁 -->
		<div class="z-okina-hentai-group">
			<head-cell
				:options='{
					data: { title: "包含谁", icon: "icon-Plus" }
				}'
				@onCellMenuClick='add(2)' />
			<div class="z-okina-hentai-list">
				<span
					class="z-okina-hentai-list-item"
					v-for='(item, ind) in includeList' :key='ind'>
					{{ item.title }}
					<i
						class="z-okina-close-btn iconfont icon-wrong"
						@tap='deleteItem(2, item)'></i>
				</span>
			</div>
		</div>

		<!-- 排除谁 -->
		<div class="z-okina-hentai-group">
			<head-cell
				:options='{
					data: { title: "排除谁", icon: "icon-Plus" }
				}'
				@onCellMenuClick='add(3)' />
			<div class="z-okina-hentai-list">
				<span
					class="z-okina-hentai-list-item"
					v-for='(item, ind) in exclideList' :key='ind'>
					{{ item.title }}
					<i
						class="z-okina-close-btn iconfont icon-wrong"
						@tap='deleteItem(3, item)'></i>
				</span>
			</div>
		</div>


		<!-- 弹出框 -->
		<side-panel :options='{id: "z-okina-hentai-wrap", style: "bottom", height: "80vh"}'>
			<hentai-body
				:title='title'
				@back='back'
				@close='close'
				@success='success'>

				<!-- 部门 -->
				<branch ref='branch' v-show='select == 1' />

				<!-- 包含 -->
				<include ref='include' v-show='select == 2' />

				<!-- 排除 -->
				<exclude ref='exclude' v-show='select == 3' />
			</hentai-body>
		</side-panel>
	</div>
</template>

<script>
import HeadCell from '@/components/Cell/HeadCell.vue'
import { bus } from '@/common/js/bus'
import HentaiBody from './Body.vue'
import SidePanel from '@/components/Other/SidePanel.vue'
import branch from './OkinaBranch.vue'
import include from './OkinaInclude.vue'
import Exclude from './OkinaExclude.vue'
export default {
	data() {
		return {
			title: '',
			select: 0,		// 选择哪个 0未选 1部门 2包含 3排除
			source: [],		// 原始数据
			branch: [],		// 部门
			// staff: [],		// 成员
			branchList: [],	// 选中的部门列表
			includeList: [],	// 包含的成员列表
			exclideList: [],	// 排除的成员列表
		}
	},
	methods: {
		/**
		 * 初始化数据
		 */
		init(data) {
			this.source = data
			this.branch = JSON.parse(JSON.stringify(data))
			// this.staff = JSON.parse(JSON.stringify(data))
		},

		/**
		 * 获取选中数据
		 */
		getData() {
			return {
				branch: this.branchList,
				include: this.includeList,
				exclude: this.exclideList
			}
		},

		/**
		 * 添加
		 * @param {[type]} flag 1部门 2包含谁 3排除谁
		 */
		add(flag) {
			this.select = flag
			if(flag == 1) {
				if(this.includeList.length > 0 || this.exclideList.length > 0) {
					return mui.toast('请先清空下面两项')
				}
				this.$refs.branch.init(this.branch)
			} else {
				if(this.branchList.length <= 0) return mui.toast('请先选择部门')

				if(flag == 2) {
					this.$refs.include.init(this.branch)
				} else if(flag == 3) {
					// this.$refs.exclude.init(this.branch)
					this.$refs.exclude.init(this.branchList)
				}
			}
			mui('#z-okina-hentai-wrap').popover('toggle')
		},

		/**
		 * 删除选中项
		 * @param {[type]} flag 1部门 2包含谁 3排除谁
		 */
		deleteItem(flag, item) {
			if(flag == 1) {

				/**
				 * 删除选中的部门
				 */
				
				this.deepBranchAttr(this.branch, [{ ...item, select: false, include: false }])
				this.branchList.splice(this.branchList.findIndex(c => c.id === item.id), 1)
				
			} else if(flag == 2) {

				/**
				 * 删除包含成员
				 */
				
				this.deepStaffAttr(this.branch, [{ ...item, select: false }])
				this.includeList.splice(this.includeList.findIndex(c => c.id === item.id), 1)

			} else if(flag == 3) {

				/**
				 * 删除排除成员
				 */
				
				this.deepStaffAttr(this.branchList, [{ ...item, select: false }])
				this.exclideList.splice(this.exclideList.findIndex(c => c.id === item.id), 1)

			}
		},

		/**
		 * 返回的回调
		 */
		back() {
			if(this.select == 1) {
				// 选择部门
				const branch = this.$refs.branch

				// 包含子部门，不能返回上一部门
				// if(branch.include) return
				branch.include = branch.include ? false : false

				// 选择成员后，不能返回上一部门
				// if(branch.actived.length > 0) return
				branch.clearCheckBox()

				// 渲染部门历史记录
				const history = branch.history
				if(history.length == 0) {
					this.title = ''
					return this.select = 0
				}
				branch.init(history[history.length - 1])
				branch.history.pop()
			} else if(this.select == 2) {
				// 包含谁
				const staff = this.$refs.include

				// 选择子成员，不能返回上一级
				// if(staff.include) return
				staff.include = staff.include ? false : false

				// 选中成员，不能返回上一级
				// if(staff.actived.length > 0) return
				
				staff.clearCheckBox()
				staff.actived = []

				// 渲染成员历史记录
				const history = staff.history
				if(history.branch.length <= 0 || history.staff.length <= 0) return
				staff.init(
					history.branch[history.branch.length - 1],
					history.staff[history.staff.length - 1],
				)
				history.branch.pop()
				history.staff.pop()
				staff.clicks.pop()
				staff.select = staff.clicks[staff.clicks.length - 1] ? staff.clicks[staff.clicks.length - 1]['select'] : false
			} else if(this.select == 3) {
				// 排除谁
				const exclude = this.$refs.exclude

				// 选择子成员，不能返回上一级
				// if(exclude.include) return
				exclude.include = exclude.include ? false : false

				// 选中成员，不能返回上一级
				// if(exclude.actived.length > 0) return
				exclude.clearCheckBox()
				exclude.actived = []

				// 渲染成员历史记录
				const history = exclude.history
				if(history.branch.length <= 0 || history.staff.length <= 0) return
				exclude.init(
					history.branch[history.branch.length - 1],
					history.staff[history.staff.length - 1],
				)
				history.branch.pop()
				history.staff.pop()
				exclude.clicks.pop()
				exclude.select = exclude.clicks[exclude.clicks.length - 1] ? exclude.clicks[exclude.clicks.length - 1]['select'] : false
				if(history.branch.length == 0 || history.staff.length == 0) {
					exclude.isclick = true
					console.log(exclude.isclick)
				}
			}

			this.$emit('back', this)
		},

		/**
		 * 关闭的回调
		 */
		close() {
			this.$emit('close', this)
			mui('#z-okina-hentai-wrap').popover('toggle')
		},

		/**
		 * 确定的回调
		 */
		success() {
			if(this.select == 1) {
				// 选择部门
				const branch = this.$refs.branch
				
				if(branch.actived.length <= 0) {
					return mui.toast('请选择部门')
				}

				const actived = this.deepBranchAttr(this.branch, branch.actived)
				this.branchList = [ ...this.branchList, ...actived ]
				console.log(this.branch)
				// mui('#z-okina-hentai-wrap').popover('toggle')
				branch.actived = []
				branch.include = false
			} else if(this.select == 2) {
				// 选择成员	
				const staff = this.$refs.include

				if(staff.actived.length <= 0) {
					return mui.toast('请选择成员')
				}

				const actived = this.deepStaffAttr(this.branch, staff.actived)
				
				// 确定的回调
				this.includeList = [ ...this.includeList, ...staff.actived ]
				staff.include = false
				staff.actived = []
			} else if(this.select == 3) {
				// 选择成员	
				const exclude = this.$refs.exclude

				if(exclude.actived.length <= 0) {
					return mui.toast('请选择成员')
				}

				const actived = this.deepStaffAttr(this.branchList, exclude.actived)
				
				// 确定的回调
				this.exclideList = [ ...this.exclideList, ...exclude.actived ]
				exclude.include = false
				exclude.isclick = true
				exclude.actived = []
			}

			mui('#z-okina-hentai-wrap').popover('toggle')
		},

		/**
		 * 递归修改部门属性
		 */
		deepBranchAttr(source, actived) {
			let result = []
			const self = this
			run(source)

			function run(arr) {
				for(let i in arr) {
					const item = arr[i]
					const active = actived.find(c => c.id === item.id)
					if(typeof active === 'object') {
						self.$set(item, 'select', active.select)
						self.$set(item, 'include', active.include)
						result.push(item)
					}

					run(item.children)
				}
			}

			return result
		},

		/**
		 * 递归修改成员属性
		 */
		deepStaffAttr(source, actived) {
			let result = []
			const self = this
			run(source)

			function run(arr) {
				for(let i in arr) {
					const item = arr[i]
					for(let j in item.staff) {
						const staff = item.staff[j]
						const yx = actived.find(c => c.id === staff.id)
						if(typeof yx === 'object') {
							self.$set(staff, 'select', yx.select)
							result.push(staff)
						}
					}

					run(item.children)
				}
			}

			return result
		}
	},
	components: {
		HeadCell,
		HentaiBody,
		SidePanel,
		branch,
		include,
		Exclude
	}
}
</script>

<style lang='scss'>
.z-okina-hentai-wrap {
	.z-okina-hentai-group {
		margin-bottom: 10px;
		.z-okina-hentai-list {
			padding: 10px;
			.z-okina-hentai-list-item {
				padding: 4px 6px; border: 1px solid #ccc; color: #666; margin: 5px; border-radius: 4px; font-size: 12px; position: relative; background-color: #fff;
			}
			.z-okina-close-btn {
				position: absolute; right: -6px; top: -9px; font-size: 12px; color: #000;
			}
		}
		&:last-child { margin-bottom: 0; }
	}
}
</style>
