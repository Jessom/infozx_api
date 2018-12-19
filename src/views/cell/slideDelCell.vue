<template>
	<div class="container">
		<slide-del-cell
			:list='list'
			@onCellClick='onCellClick'
			@onDelect='onDelect' />

		<slide-del-cell
			:list='list'
			:options='{isRadius: false}'
			class='mt10'
			@onCellClick='onCellClick'
			@onDelect='onDelect' />

		<slide-del-cell
			:list='list'
			:options='{showAvatar: false}'
			class='mt10'
			@onCellClick='onCellClick'
			@onDelect='onDelect' />
	</div>
</template>

<script>
import SlideDelCell from '@/components/Cell/SlideDelCell.vue'
export default {
	data() {
		return {
			list: [{
				title: 'わタし',
				desc: 'わタしわわタしぢす'
			}, {
				title: '今天是个好日子',
				desc: '心想的事儿都能成',
				image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3493430853,691568102&fm=27&gp=0.jpg'
			}]
		}
	},
	methods: {
		onCellClick(obj) {
			console.log(obj)
		},
		onDelect(obj) {
			console.log(obj)
			// 实现删除
			this.list.splice(this.list.findIndex(item => item.title === obj.title), 1)
			mui.swipeoutClose(obj.li)
		}
	},
	components: {
		SlideDelCell
	}
}
</script>

<style lang='scss'>
</style>