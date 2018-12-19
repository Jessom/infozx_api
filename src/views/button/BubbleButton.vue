<template lang="html">
  <div class="container">
		<div class="mui-content">
			<bubble-button :options='bbtOptions' @onBubble='onBubble' />
		</div>
	</div>
</template>

<script>
import BubbleButton from '@/components/Buttons/BubbleButton.vue'
export default {
	data() {
		return {
			bbtOptions: {
				btns: [{
					icon: 'icon-saoma'
				}, {
					icon: 'icon-sousuo'
				}]
			}
		}
	},
	methods: {
		onBubble(obj) {
			alert(obj.icon)
		}
	},
	components: {
		BubbleButton
	}
}
</script>

<style lang="sass">

</style>
