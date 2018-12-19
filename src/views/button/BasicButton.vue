<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div>
				<p>我是表单信息</p>
				<p>我是表单信息</p>
				<p>我是表单信息</p>
			</div>
			<basic-button :options='opt2' @onBasic='onBasic' />
			<div class="mt10">
				<p>禁用按钮</p>
				<p>禁用按钮</p>
				<p>禁用按钮</p>
			</div>
			<basic-button :options='opt3' @onBasic='onBasic' />

			<basic-button :options='opt1' @onBasic='onBasic' />
		</div>
	</div>
</template>

<script>
import BasicButton from '@/components/Buttons/BasicButton.vue'
export default {
	data() {
		return {
			opt1: {
				list: [{
					title: '取消'
				}, {
					title: '提交'
				}]
			},
			opt2: {
				isFixed: false,
				theme: false,
				list: [{
					title: '取消'
				}, {
					title: '提交'
				}]
			},
			opt3: {
				isFixed: false,
				list: [{
					title: '禁用',
					disabled: true,
				}, {
					title: '可用'
				}]
			}
		}
	},
	methods: {
		onBasic(obj) {
			alert(obj.title)
		}
	},
	components: {
		BasicButton
	}
}
</script>

<style lang="sass">

</style>
