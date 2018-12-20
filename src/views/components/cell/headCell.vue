<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div class="mb10">
				<head-cell :options='fopt' @onCellMenuClick='onCellMenuClick' />
			</div>

			<div class="mb10">
				<head-cell :options='sopt' />
			</div>
		</div>
	</div>
</template>

<script>
import HeadCell from '@/components/Cell/HeadCell.vue'
export default {
	data() {
		return {
			fopt: {
				data: {
					title: '操作菜单',
					text: '查看更多'
				}
			},
			sopt: {
				transparent: true,
				showMenu: false,
				showRightNav: true,
				data: {
					title: '透明'
				}
			}
		}
	},
	methods: {
		onCellMenuClick(obj) {
			alert(`点击了 ${obj.data.title}`)
		}
	},
	components: {
		HeadCell
	}
}
</script>

<style lang="sass">

</style>
