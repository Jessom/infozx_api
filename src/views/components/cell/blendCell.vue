<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div class="mb10">
				<blend-cell :options='opt1' @onCellMenuClick='onCellMenuClick' @onCellClick='onCellClick' />
			</div>

			<div class="mb10">
				<blend-cell :options='opt2' onCellClick='onCellClick' />
			</div>
		</div>
	</div>
</template>

<script>
import BlendCell from '@/components/Cell/BlendCell.vue'
export default {
	data() {
		return {
			opt1: {
				showHead: true,
				data: {
					title: '标题',
					text: '查看更多',
				},
				list: [{
					id: 1,
					desc: '2018-04-16',
					title: '今天是个好日子',
					image: '',
					background: 'red',
					badges: [{
						title: '已分配',
						background: 'green'
					}, {
						title: '未分配',
					}]
				}, {
					id: 2,
					desc: '2018-04-16',
					title: '明天也是好日子',
					image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg'
				}]
			},
			opt2: {
				isReverse: false,
				isRadius: false,
				list: [{
					id: 1,
					desc: '2018-04-16',
					title: '今天是个好日子',
					image: '',
					background: 'red',
					sup: '好日子'
				}, {
					id: 2,
					desc: '2018-04-16',
					title: '明天也是好日子',
					image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg'
				}]
			}
		}
	},
	methods: {
		onCellClick(obj) {
			alert(obj.title)
		},
		onCellMenuClick(obj) {
			alert(obj.data.title)
		}
	},
	components: {
		BlendCell
	}
}
</script>

<style lang="sass">

</style>
