<!-- 选人 -->
<template>
	<div class="z-staff-wrap mui-clearfix">
		<!-- 左边 -->
		<div class="mui-pull-left z-staff-left">
			<div class="mui-scroll-wrapper z-hentai-scroll">
				<div class="mui-scroll">
					<ul class="mui-table-view">
						<li
							class="mui-table-view-cell"
							v-for='item in branch'
							:key='item.id'>
							<a
								:class="{
									'mui-navigate-right': (item.staff && item.staff.length) ||
																				(item.children && item.children.length)
								}"
								@tap='cellclick(item)'>{{ item.title }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 右边 -->
		<div class="mui-pull-left z-staff-right">
			<div class="mui-scroll-wrapper z-hentai-scroll">
				<div class="mui-scroll">
					<div class="z-alert">选择子成员，将不能进入下一级或上一级</div>
					<div class="mui-table-view">
						<div class="mui-table-view-cell">
							<span>选择子成员</span>
							<div
								class="mui-switch mui-switch-mini"
								:class='{"mui-active": include}'>
								<div class="mui-switch-handle" @tap='includeEvent'></div>
							</div>
						</div>
					</div>
					<div class="mui-input-group z-staff-group">
						<div
							class="mui-input-row mui-checkbox mui-left"
							v-for='(item, ind) in staff'
							:key='ind'>
							<label>
								<img :src="item.image" class="avatar">
								<div class="desc-body">
									{{ item.title }}
									<p class="mui-ellipsis">{{ item.desc }}</p>
								</div>
							</label>
							<input name="checkbox" value="Item 1" type="checkbox"  @tap='inputclick($event, item)' >
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			include: false,			// 是否包含子成员
			staff: [],					// 渲染的部门成员
			branch: [],					// 渲染的部门数据
			history: {					// 保存选中的历史记录
				staff: [], branch: []
			},
			actived: [],				// 选中的成员
			clicks: [],					// 保存点击的部门信息
		}
	},

	methods: {
		/**
		 * 初始化数据
		 */
		init(branch, staff) {
			this.branch = branch
			if(staff) {
				this.staff = staff
			} else {
				this.staff = []
			}
		},

		/**
		 * 点击部门选项
		 */
		cellclick(item) {
			// 没有成员 && 没有子部门
			if(!(item.staff && item.staff.length) && 
				!(item.children && item.children.length)) return

			// 选择子成员
			// if(this.include) return
			
			/**
			 * 当包含子部门成员进入下一级时
			 * 需将当前部门数据还原
			 * 并且将 include 改为 false
			 */
			if(this.include) {
				this.staff = this.clicks[this.clicks.length-1].staff
				this.include = false
			}

			// 选择成员后，不能进入下级
			// if(this.actived.length > 0) return
			this.clearCheckBox()
			this.actived = []

			// 保存历史记录
			this.history.branch.push(this.branch)
			this.history.staff.push(this.staff)
			this.clicks.push(item)
			this.init(item.children, item.staff)
		},

		/**
		 * 清除 input checkbox 选中状态
		 */
		clearCheckBox() {
			// 当有选中成员的情况下，清空选中状态
			if(this.actived.length > 0) {
				mui('.z-staff-group input[type="checkbox"]').each((ind, item) => {
					item.checked = false
				})				
			}
		},

		/**
		 * 选择子部门成员
		 */
		includeEvent() {
			if(this.actived.length > 0) return

			if(this.clicks.length <= 0) return
			// this.include = this.staff.length ? !this.include : false
			this.include = !this.include
			if(this.include) {
				const childStaff = this.deepStaff(this.clicks[this.clicks.length-1])
				this.staff = [ ...this.staff, ...childStaff ]
			} else {
				this.staff = this.clicks.length>0 ? this.clicks[this.clicks.length-1].staff : []
			}
		},

		/**
		 * 选择成员
		 */
		inputclick(e, item) {
			// 是否选中当前成员
			const isChecked = !e.currentTarget.checked

			if(isChecked) {
				// 保存选中成员
				this.actived.push(item)
			} else {
				// 删除当前成员
				this.actived.splice(this.actived.findIndex(c => c.id == item.id), 1)
			}
		},

		/**
		 * 清除历史记录
		 */
		clearHistory() {
			this.include = false
			this.staff = []
			this.branch = []
			this.actived = []
			this.clicks = []
			this.history = { branch: [], staff: [] }
		},

		/**
		 * 递归获取子部门成员
		 */
		deepStaff(obj) {
			let result = []
			run(obj.children)

			function run(arr) {
				for(let i=0; i<arr.length; i++) {
					const item = arr[i]
					if(!(item.staff && item.staff.length) && 
						 !(item.children && item.children.length)) {
						break;
					} else {
						result = [ ...result, ...item.staff ]
					}
					run(item.children)
				}
			}

			return result
		}
	}
}
</script>

<style lang='scss'>
$avatar: 42px;
.z-staff-wrap {
	height: 100%;
	.z-staff-left, .z-staff-right {
		height: 100%;
	}

	.z-staff-left {
		width: 35%; border-right: 1px solid #eee;
	}

	.z-staff-right { width: 65%; }

	.mui-table-view-cell>a:not(.mui-btn) {
		margin: -11px -20px;
	}
	.mui-navigate-right:after, .mui-push-right:after { right: 5px; }
	.mui-table-view-cell:after { left: 0; }

	.mui-input-group {
		.mui-checkbox.mui-left label { padding-left: 50px; }
		.mui-input-row { height: auto; }
		.avatar { width: $avatar; height: $avatar; border-radius: 50%; float: left; margin-right: 8px; }
		.desc-body { overflow: hidden; height: $avatar; padding: 5px 0; }
		p.mui-ellipsis { margin-bottom: 0; font-size: 10px; margin-top: 5px; }
		.mui-checkbox input[type=checkbox]:before { top: 20px; left: 15px; }
		.mui-checkbox input[type=checkbox] {
			left: 0; top: 0; height: 100%; width: 100%; z-index: 2;
		}
	}
}
</style>
