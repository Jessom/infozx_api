<template>
	<div class="container">
		<button @tap='test' class="mui-btn mui-btn-block">测试</button>

		<side-panel :options='{id: "spanel", style: "bottom", height: "70vh"}'>
			<select-single
				:list='list'
				@onPopover='onPopover'
				@onSingle='onSingle' />
		</side-panel>
	</div>
</template>

<script>
import SidePanel from '@/components/Other/SidePanel.vue'
import SelectSingle from '@/components/Cell/SelectSingle.vue'
export default {
	data () {
		return {
			list: [{
				id: 1,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 2,
				title: '李四',
				desc: '业务组长',
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3296169939,2964109829&fm=27&gp=0.jpg',
			}, {
				id: 3,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 4,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 5,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 6,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 7,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 8,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 9,
				title: '张三',
				desc: '业务组长',
			}, {
				id: 10,
				title: '张三',
				desc: '业务组长',
			}]
		}
	},
	methods: {
		test() {
			mui('#spanel').popover('toggle')
		},
		onPopover() {
			mui('#spanel').popover('toggle')
		},
		onSingle(item) {
			console.log(item)
			mui('#spanel').popover('toggle')
		}
	},
	components: {
		SidePanel,
		SelectSingle
	}
}
</script>

<style lang="scss">

</style>
