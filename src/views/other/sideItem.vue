<template lang="html">
  <div class="container">
		<div style="padding:15px;">
			<button class="con mui-btn mui-btn-block mui-btn-primary" @tap='test'>点我</button>
			
		</div>
		
		<!-- 有内容 -->
  	<side-panel>
  		<side-item
  			:options='options'
  			@onSide='onSide'
  			@onBasic='onBasic' />
  	</side-panel>
	</div>
</template>

<script>
import SidePanel from '@/components/Other/SidePanel.vue'
import SideItem from '@/components/Other/SideItem.vue'
export default {
	data() {
		return {
			options: {
				active: {},
				list: [{
					id: 1,
					title: '年龄'
				}, {
					id: 2,
					title: '姓名'
				}, {
					id: 3,
					title: '身高'
				}, {
					id: 4,
					title: '体重'
				}]
			}
		}
	},
	methods: {
		test() {
			mui('#sideslipContainer').popover('toggle')
		},
		// side item cell click event
		onSide(obj) {
			this.options.active = obj
		},
		// side item button click event
		onBasic(obj) {
			console.log(this.options.active) 	// 选择项
			if(obj.title === '确定'){
				alert(this.options.active.title)
			}
			this.test() 		// 关闭侧滑
		}
	},
	components: {
		SidePanel,
		SideItem
	}
}
</script>

<style lang="scss">

</style>
