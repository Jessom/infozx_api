<template>
	<div>
		<button @tap='test'>测试</button>
		<PickerSelect
			:list='list'
			@onSuccess='onSuccess' />
	</div>
</template>

<script>
import PickerSelect from '@/components/Other/PickerSelect.vue'
export default {
	data() {
		return {
			list: []
		}
	},
	mounted() {
		this.list = [{
			title: '安得集团',
			children: [{
				title: '中系科技',
				children: [{
					title: '研发部',
					children: []
				}, {
					title: '市场部',
					children: []
				}]
			}, {
				title: '安得装饰',
				children: [{
					title: '养育巷店',
					children: []
				}, {
					title: '新区店',
					children: []
				}, {
					title: '园区店',
					children: []
				}]
			}]
		}]
	},
	methods: {
		test() {
			mui('#z-picker-panel').popover('toggle')
		},
		onSuccess(obj) {
			console.log(obj)
		}
	},
	components: {
		PickerSelect,
	}
}
</script>

<style lang='scss'>
</style>