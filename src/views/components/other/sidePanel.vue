<template lang="html">
  <div class="container">
		<div style="padding:15px;">
			<button class="con mui-btn mui-btn-block mui-btn-primary" data-flag='bottom'>bottom</button>
			<div style="height: 20px"></div>

			<button class="con mui-btn mui-btn-block mui-btn-primary" data-flag='right'>right</button>
			<div style="height: 20px"></div>
			
			<button class="con mui-btn mui-btn-block mui-btn-primary" data-flag='left'>left</button>
			<div style="height: 20px"></div>

			<button class="mui-btn mui-btn-block mui-btn-primary" @tap='test'>没有内容</button>
		</div>
		
		<!-- 有内容 -->
  	<side-panel :options='options'>
  		<div class="mui-table-view">
  			<div class="mui-table-view-cell">
  				今天是个好日子
  			</div>
  			<div class="mui-table-view-cell">
  				明天也是好日子
  			</div>
  		</div>
  	</side-panel>

  	<!-- 无内容 -->
  	<side-panel :options='options2'></side-panel>
	</div>
</template>

<script>
import SidePanel from '@/components/Other/SidePanel.vue'
export default {
	data() {
		return {
			options: {
				id: 'panel',
				style: 'bottom'
			},
			options2: {
				id: 'panel2'
			}
		}
	},
	mounted() {
		const _this = this
		mui('.container').on('tap', '.con', function() {
			const flag = this.getAttribute('data-flag')
			_this.options.style = flag

			// 模拟异步
			// 让修改后的options传过去后在显示
			// 仅仅是测试用，正式使用请不要使用定时器！！！
			setTimeout(() => {
				mui('#panel').popover('toggle')
			}, 0)
		})
	},
	methods: {
		test() {
			mui('#panel2').popover('toggle')
		}
	},
	components: {
		SidePanel
	}
}
</script>

<style lang="scss">

</style>
