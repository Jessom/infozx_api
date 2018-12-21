<template>
	<side-panel :options='{id: "z-main-wrap", style: "bottom", height: "80vh"}'>
		<hentai-body
			:title='title'
			@back='back'
			@close='close'
			@success='success'>
			<!-- 第一页 -->
			<ul
				class="mui-table-view hentai-home mui-table-view-radio"
				v-show='select==0 || select==1 || select==2'>
				<li class="mui-table-view-cell" data-flag='1'>
					<a class="mui-navigate-right">
						<i class="mui-icon mui-icon-contact"></i>
						<span>全部</span>
					</a>
				</li>
				<li class="mui-table-view-cell" data-flag='2'>
					<a class="mui-navigate-right">
						<i class="mui-icon mui-icon-contact"></i>
						<span>本人</span>
					</a>
				</li>
				<li class="mui-table-view-cell" data-flag='3' data-title='部门'>
					<i class="mui-icon mui-icon-contact"></i>
					<span>部门</span>
				</li>
				<li class="mui-table-view-cell" data-flag='4' data-title='成员'>
					<i class="mui-icon mui-icon-contact"></i>
					<span>成员</span>
				</li>
			</ul>

			<!-- 部门 -->
			<branch v-show='select==3' ref='branch' />

			<!-- 成员 -->
			<staff v-show='select==4' ref='staff' slot='unscroll' />
		</hentai-body>
	</side-panel>
</template>

<script>
import { bus } from '@/common/js/bus'
import HentaiBody from './Body.vue'
import SidePanel from '@/components/Other/SidePanel.vue'
import Branch from './Branch.vue'
import Staff from './Staff.vue'
export default {
	data() {
		return {
			title: '',			// 顶部title
			select: '0',		// 选择哪个  0未选  1全部  2本人  3部门  4职员
			source: null,		// 原始数据
			branch: null,		// 选择 【部门】 数据，拷贝一份原始数据
			staff: null,		// 选择 【成员】 数据，拷贝一份原始数据
		}
	},
	mounted() {
		const self = this

		/**
		 * 选择哪个
		 * 1全部  2本人  3部门  4职员
		 */
		mui('.hentai-home').on('tap', '.mui-table-view-cell', function(e) {
			const flag = this.getAttribute('data-flag') || 0
			self.title = this.getAttribute('data-title') || ''
			bus.$emit('select', flag)
			self.select = flag
			if(self.select == 3) {
				self.$refs.branch.init(self.branch)
			} else if(self.select == 4) {
				self.$refs.staff.init(self.staff)
			}
		})
	},
	methods: {
		/**
		 * 初始化数据
		 */
		init(data) {
			this.source = data
			this.branch = JSON.parse(JSON.stringify(data))
			this.staff = JSON.parse(JSON.stringify(data))
		},

		/**
		 * 返回上一步
		 */
		back() {
			if(this.select == 3) {
				// 选择部门
				const branch = this.$refs.branch

				// 包含子部门，不能返回上一部门
				if(branch.include) return

				// 选择成员后，不能返回上一部门
				if(branch.actived.length > 0) return

				// 渲染部门历史记录
				const history = branch.history
				if(history.length == 0) {
					this.title = ''
					return this.select = 0
				}
				branch.init(history[history.length - 1])
				branch.history.pop()
			} else if(this.select == 4) {
				// 选择成员
				const staff = this.$refs.staff

				// 选择子成员，不能返回上一级
				if(staff.include) return

				// 选中成员，不能返回上一级
				if(staff.actived.length > 0) return

				// 渲染成员历史记录
				const history = staff.history
				if(history.branch.length <= 0 || history.staff.length <= 0) {
					this.title = ''
					this.select = 0
					bus.$emit('select', this.select)
					return
				}
				staff.init(
					history.branch[history.branch.length - 1],
					history.staff[history.staff.length - 1],
				)
				history.branch.pop()
				history.staff.pop()
				staff.clicks.pop()
			}

			// 返回的回调
			this.$emit('back', this)
		},

		/**
		 * 点击确定
		 */
		success() {			
			if(this.select == 3) {
				// 选择部门
				const branch = this.$refs.branch
				
				if(branch.actived.length <= 0) {
					return mui.toast('请选择部门')
				}

				// 确定的回调
				this.$emit('success', {
					select: this.select,
					actived: branch.actived,
					include: branch.include
				})
			} else if(this.select == 4) {
				// 选择成员	
				const staff = this.$refs.staff

				if(staff.actived.length <= 0) {
					return mui.toast('请选择成员')
				}

				// 确定的回调
				this.$emit('success', {
					select: this.select,
					actived: staff.actived,
				})
			} else if(this.select == 0) {
				// 没有选择任何项
				return mui.toast('请至少选择一项')
			} else {
				this.$emit('success', {
					select: this.select
				})
			}

			this.close(1)
		},

		/**
		 * 关闭当前弹窗
		 */
		close(flag=null) {
			mui('#z-main-wrap').popover('toggle')
			this.select = '0'
			bus.$emit('select', this.select)
			// 清除部门历史记录
			this.$refs.branch.clearHistory()
			this.$refs.staff.clearHistory()
			if(!flag) {
				// 关闭的回调
				this.$emit('close', this)
			}
		}
	},
	components: {
		HentaiBody,
		SidePanel,
		Branch,
		Staff
	}
}
</script>

<style lang='scss'>
</style>
