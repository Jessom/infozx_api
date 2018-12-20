<template lang="html">
  <div class="container">
  	<button class="mui-btn mui-btn-block mui-btn-primary" @tap='action'>action sheet</button>
  	<action-sheet
  		:options='options'
  		@onActionSheet='onActionSheet' />
	</div>
</template>

<script>
import ActionSheet from '@/components/Other/ActionSheet.vue'
export default {
	data() {
		return {
			options: {
				id: 'action',
				list: [{
					title: '拍照'
				}, {
					title: '相册选择'
				}]
			}
		}
	},
	methods: {
		action() {
			mui(`#${this.options.id}`).popover('toggle')
		},
		onActionSheet(obj) {
			alert(obj.title)
			mui(`#${this.options.id}`).popover('toggle')
		}
	},
	components: {
		ActionSheet
	}
}
</script>

<style lang="scss">

</style>
