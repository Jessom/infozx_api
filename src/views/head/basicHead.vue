<template lang="html">
  <div class="container">
		<basic-head :options='fOpt' />
	</div>
</template>

<script>
import BasicHead from '@/components/Header/BasicHead.vue'
export default {
	data() {
		return {
			// basichead options
			fOpt: {
				wechat: true,
				title: '首页',
				btns: [{
					title: '提交',
					event: () => alert(123)
				}, {
					icon: 'icon-sousuo',
					event: () => alert(789)
				}]
			}
		}
	},
	components: {
		BasicHead,
	}
}
</script>

<style lang="sass">

</style>
