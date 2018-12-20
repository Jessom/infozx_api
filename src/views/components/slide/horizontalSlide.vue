<template lang="html">
  <div class="container">
  	<horizontal-slide :options='opt1' @onSlide='onSlide' />
		
		<horizontal-slide :options='opt2' @onSlide='onSlide' />
	</div>
</template>

<script>
import HorizontalSlide from '@/components/Slide/HorizontalSlide.vue'
export default {
	data() {
		return {
			opt1: {
				normal: true,
				list: [{
					id: 1,
					url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=707101635,1365246459&fm=26&gp=0.jpg'
				}, {
					id: 2,
					url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3354350111,3155975550&fm=15&gp=0.jpg'
				}]
			},
			opt2: {
				list: [{
					id: 1,
					url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=707101635,1365246459&fm=26&gp=0.jpg'
				}, {
					id: 2,
					url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3354350111,3155975550&fm=15&gp=0.jpg'
				}]
			}
		}
	},
	methods: {
		onSlide(obj) {
			alert(obj.id)
		}
	},
	components: {
		HorizontalSlide
	}
}
</script>

<style lang="sass">

</style>
