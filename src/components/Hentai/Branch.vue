<!-- 选择部门 -->
<template>
	<div class="z-branch-wrap">
		<div class="z-alert">包含子部门，将不能进入下一级或上一级</div>

		<div class="mui-table-view">
			<div class="mui-table-view-cell">
				<span>是否包含子部门</span>
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
				:class='{"right-icon": item.children&&item.children.length}'
				v-for='(item, ind) in branch'
				:key='ind'>
				<span class='label' @tap='cellclick(item)'>{{ item.title }}</span>
				<input name="checkbox" value="Item 1" type="checkbox" @tap='inputclick($event, item)' >
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			include: false,			// 是否包含子部门
			branch: [],					// 渲染的部门数据
			history: [],				// 保存选择的历史记录，关闭弹窗后，清空该记录
			actived: [],				// 保存选中的部门
		}
	},

	methods: {
		/**
		 * 初始化数据
		 */
		init(data) {
			this.branch = data
		},

		/**
		 * 选择下一级
		 */
		cellclick(item) {
			// 没有子部门，不能进入下一级
			if(item.children && !item.children.length) return

			// 选择部门后，不能选择下一部门
			if(this.actived.length > 0) return

			// 包含子部门，不能进入下一部门
			if(this.include) return

			// 添加历史记录
			this.history.push(this.branch)
			// 滚动区域返回顶部
			mui('.z-hentai-sc').scroll().scrollTo(0,0,0)
			this.init(item.children)
		},

		/**
		 * 选择当前部门
		 */
		inputclick(e, item) {
			// 是否选中当前部门
			const isChecked = !e.currentTarget.checked

			if(isChecked) {
				// 保存选中部门
				this.actived.push({ ...item, include: this.include })
			} else {
				// 清除当前部门
				this.actived.splice(this.actived.findIndex(c => c.id == item.id), 1)
			}
		},

		/**
		 * 包含子部门switch
		 */
		includeEvent() {
			this.include = !this.include

			this.actived = this.actived.map(c => {
				c['include'] = this.include
				return c
			})
		},

		/**
		 * 清除历史记录
		 */
		clearHistory() {
			this.history = []
		}
	}
}
</script>

<style lang='scss'>
.z-branch-wrap {
	
}
</style>
