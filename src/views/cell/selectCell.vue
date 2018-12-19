<template>
	<div class="container">
		<select-cell
			:list="list"
			@onSuccess='onSuccess' />
	</div>
</template>

<script>
import SelectCell from '@/components/Cell/SelectCell.vue'
export default {
	data() {
		return {
			list: [{
				id: 1,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 2,
				title: '李四',
				desc: '业务组长',
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3296169939,2964109829&fm=27&gp=0.jpg',
				active: false
			}, {
				id: 3,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 4,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 5,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 6,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 7,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 8,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 9,
				title: '张三',
				desc: '业务组长',
				active: false
			}, {
				id: 10,
				title: '张三',
				desc: '业务组长',
				active: false
			}]
		}
	},
	methods: {
		onSuccess(obj) {
			console.log(obj)
		}
	},
	components: {
		SelectCell
	}
}
</script>

<style lang='scss'>

</style>