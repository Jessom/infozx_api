<!-- 选人 -->
<template>
	<div class="z-okina-staff-wrap mui-clearfix">
		<!-- 左边 -->
		<div class="mui-pull-left z-staff-left">
			<div class="mui-scroll-wrapper z-hentai-scroll">
				<div class="mui-scroll">
					<ul class="mui-table-view">
						<li
							class="mui-table-view-cell"
							v-for='item in branch'
							:class='{"select": !isclick}'
							:key='item.id'>
							<a
								:class="{
									'mui-navigate-right': (item.staff && 
																				item.staff.length) ||
																				(item.children &&
																				item.children.length)
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
					<div class="mui-input-group">
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
							<input name="checkbox" :disabled='item.select' :checked='item.select' value="Item 1" type="checkbox"  @tap='inputclick($event, item)' >
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
			isclick: true,			// 当前部门是否包含子部门，包含为true，即可进入子目录
			select: false,			// 当前部门是否被选中
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

			// 选择成员后，不能进入下级
			if(this.actived.length > 0) return

			// 选择子成员
			if(this.include) return

			if(!this.isclick) return

			if(this.clicks.length == 0) {
				this.isclick = item.include
			}
			// 保存历史记录
			this.history.branch.push(this.branch)
			this.history.staff.push(this.staff)
			this.clicks.push(item)
			// 当前部门是否被选中
			this.select = item.select || false
			this.init(item.children, item.staff)
		},

		/**
		 * 选择子部门成员
		 */
		includeEvent() {
			if(this.actived.length > 0) return

			this.include = this.staff.length ? !this.include : false
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
			// if(this.select) return

			// 是否选中当前成员
			const isChecked = !e.currentTarget.checked
			
			if(isChecked) {
				// this.$set(item, 'select', true)
				// 保存选中成员
				this.actived.push({ ...item, select: true })
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
					} else if(item.include) {
						// 如果当前部门包含子部门，跳过当前循环
						continue;
					} else if(item.select) {
						// 如果当前部门已被选中，不进行任何操作
						// continue;
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
.z-okina-staff-wrap {
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
	.mui-table-view-cell.select { background-color: #e3e3e3; }

	.mui-input-group {
		.mui-checkbox.mui-left label { padding-left: 50px; }
		.mui-input-row {
			height: auto;
			&.select { background-color: #e3e3e3; }
		}
		.avatar { width: $avatar; height: $avatar; border-radius: 50%; float: left; margin-right: 8px; }
		.desc-body { overflow: hidden; height: $avatar; padding: 5px 0; }
		p.mui-ellipsis { margin-bottom: 0; font-size: 10px; margin-top: 5px; }
		.mui-checkbox input[type=checkbox]:before { top: 20px; left: 15px; }
		.mui-checkbox input[type=checkbox] {
			left: 0; top: 0; height: 100%; width: 100%; z-index: 2;
		}
	}
}
.mui-popover .mui-table-view .mui-table-view-cell:last-child,
.mui-popover .mui-table-view .mui-table-view-cell:last-child>a:not(.mui-btn) {
	border-bottom-right-radius: 0; border-bottom-left-radius: 0;
}
.mui-popover .mui-table-view .mui-table-view-cell:first-child,
.mui-popover .mui-table-view .mui-table-view-cell:first-child>a:not(.mui-btn) {
	border-top-left-radius: 0; border-top-right-radius: 0;
}
.mui-popover .mui-scroll-wrapper,
.mui-popover .mui-table-view { border-radius: 0; }
</style>
