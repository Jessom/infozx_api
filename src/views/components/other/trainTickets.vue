<template>
	<div class="container">
		<train-tickets :options='opt' @click='click' />
	</div>
</template>

<script>
import TrainTickets from '@/components/Other/TrainTickets.vue'
export default {
	data() {
		return {
			opt: {
				left: { title: '苏州北', meta: '起始站' },
				right: { title: '徐州东', meta: '终点站' }
			}
		}
	},
	methods: {
		click(item) {
			// 点击左边，返回 opt.left
			// 点击右边，返回 opt.right
			console.log(item)
		}
	},
	components: {
		TrainTickets
	}
}
</script>