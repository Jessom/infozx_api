<template>
	<side-panel :options='{id: "z-main-wrap", style: "bottom", height: "80vh"}'>
		<hentai-body
			@back='back'
			@close='close'>
			<!-- 第一页 -->
			<ul class="mui-table-view hentai-home mui-table-view-radio" v-show='select==0'>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<i class="mui-icon mui-icon-contact"></i>
						<span>全部</span>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<i class="mui-icon mui-icon-contact"></i>
						<span>本人</span>
					</a>
				</li>
				<li class="mui-table-view-cell" data-flag='3'>
					<i class="mui-icon mui-icon-contact"></i>
					<span>部门</span>
				</li>
				<li class="mui-table-view-cell" data-flag='4'>
					<i class="mui-icon mui-icon-contact"></i>
					<span>成员</span>
				</li>
			</ul>

			<!-- 部门 -->
			<branch v-show='select==3' ref='branch' />

			<!-- 成员 -->
			<staff v-if='select==4' slot='unscroll' />
		</hentai-body>
	</side-panel>
</template>

<script>
import HentaiBody from './Body.vue'
import SidePanel from '@/components/Other/SidePanel.vue'
import Branch from './Branch.vue'
import Staff from './Staff.vue'
export default {
	data() {
		return {
			select: 0,			// 选择哪个  0未选  1全部  2本人  3部门  4职员
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
			self.select = flag
			if(self.select == 3) {
				self.$refs.branch.init(self.branch)
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
				const history = this.$refs.branch.history
				if(history.length == 0) {
					return this.select = 0
				}
				this.$refs.branch.init(history[history.length - 1])
				this.$refs.branch.history.pop()
			}
		},

		/**
		 * 关闭当前弹窗
		 */
		close() {
			mui('#z-main-wrap').popover('toggle')
			this.select = 0
			// 清除部门历史记录
			this.$refs.branch.clearHistory()
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
