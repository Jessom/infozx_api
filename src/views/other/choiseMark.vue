<template>
	<div class="container">
		<basic-head :options='{title:"首页",wechat:true}' />
		<div class="mui-content">
			<button class="mui-btn mui-btn-block mui-btn-primary" @tap='test'>测试</button>
		</div>
		<ChoiseMark
			:list='list'
			@onSuccess='onSuccess' />
	</div>
</template>

<script>
import BasicHead from '@/components/Header/BasicHead.vue'
import ChoiseMark from '@/components/Other/ChoiseMark.vue'
export default {
	data() {
		return {
			list: [{
				title: '户型',
				multi: false,
				active: '茅草屋',
				list: [{
					title: '别墅',
				}, {
					title: '复式',
				}, {
					title: '平层',
				}, {
					title: '小洋楼',
				}, {
					title: '茅草屋',
				}, {
					title: '瓦房',
				}]
			}, {
				title: '房型',
				multi: true,
				list: [{
					title: '一室',
					active: false
				}, {
					title: '二室',
					active: true
				}, {
					title: '三室',
					active: false
				}, {
					title: '四室',
					active: false
				}, {
					title: '一厅',
					active: true
				}, {
					title: '二厅',
					active: false
				}, {
					title: '一厨',
					active: false
				}, {
					title: '一卫',
					active: false
				}]
			}, {
				title: '房屋状态',
				multi: false,
				active: '',
				list: [{
					title: '期房',
				}, {
					title: '现房',
				}]
			}, {
				title: '图纸',
				multi: false,
				active: '',
				list: [{
					title: '有',
				}, {
					title: '无',
				}]
			}]
		}
	},
	methods: {
		test() {
			mui('#choise-panel').popover('toggle')
		},
		onSuccess(obj) {
			console.log(obj)
		}
	},
	components: {
		ChoiseMark,
		BasicHead
	}
}
</script>

<style lang='scss'>
</style>