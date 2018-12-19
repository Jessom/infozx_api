<template>
	<div class="container">
		<notice-cell
			:list='list'
			@onCellClick='onCellClick'
			@onDelect='onDelect' />
	</div>
</template>

<script>
import NoticeCell from '@/components/Cell/NoticeCell.vue'
export default {
	data() {
		return {
			list: [{
				title: 'わタし',
				desc: 'わタしわわタしぢす',
				deleteText: '编辑',
				deleteBg: 'mui-btn-primary',
				time: '06-28 16:02',
				read: false
			}, {
				title: '今天是个好日子',
				desc: '心想的事儿都能成',
				image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3493430853,691568102&fm=27&gp=0.jpg',
				read: true
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
		NoticeCell
	}
}
</script>

<style lang='scss'>
.container{}
</style>