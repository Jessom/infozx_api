<template>
	<div>
		<vertical-axis :list='list' @click='click' @clickContent='clickContent' />
	</div>
</template>

<script>
import VerticalAxis from '@/components/TimeAxis/VerticalAxis.vue'
export default {
	data () {
		return {
			list: [{
				leftTitle: '上',
				desc: {
					left: '2018-07-18',
					right: '迟到',
					tagColor: 'blue'
				},
				content: {
					text:'宇宙银河系地球中国',
					button: `Let's go`,
					disabled: false
				}
			}, {
				leftTitle: '中',
				desc: {
					left: '2018-07-18',
					right: '早退'
				},
				content: {
					text: '江苏苏州'
				}
			}, {
				leftTitle: '下',
				button: '走你'
			}]
		}
	},
	methods: {
		// 点击单独的按钮事件
		click(item) {
			console.log(item)
		},
		// 点击内容区域的按钮事件
		clickContent(item) {
			console.log(item)
		}
	},
	components: {
		VerticalAxis
	}
}
</script>

<style lang='scss'>
</style>