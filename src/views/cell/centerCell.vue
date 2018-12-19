<template lang="html">
  <div class="container">
		<div class="mui-content">
			<center-cell :options='ccOpt' @onCenter='onCenter' />
			<div class="mt10"></div>
			<center-cell :options='ccOpt2' @onCenter='onCenter' />
		</div>
	</div>
</template>

<script>
import CenterCell from '@/components/Cell/CenterCell.vue'
export default {
	data() {
		return {
			ccOpt: {
				desc: 'わタし',
				src: 'https://gitee.com/uploads/37/1880237_watasi.png?1524038398'
			},
			ccOpt2: {
				desc: '登录 / 注册',
				theme: false
			}
		}
	},
	methods: {
		onCenter(obj) {
			console.log(obj)
		}
	},
	components: {
		CenterCell
	}
}
</script>

<style lang="sass">

</style>
