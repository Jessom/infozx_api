<template>
	<div class="test">
		<SidePanel :options='panel'>
			<draw :options='options' ref='draw' />
		</SidePanel>

		<button @tap='test'>打开</button>

		<!-- <draw :options='options' ref='draw2' /> -->
	</div>
</template>

<script>
import Draw from '@/components/Other/Draw.vue'
import SidePanel from '@/components/Other/SidePanel.vue'
export default {
	data() {
		return {
			options: {
				background: '#ffffff',
				lineWidth: 1,
				lineColor: '#000000',
				height: 'auto',
				offsetTop: 0
			},
			panel: {
				id: 'panel',
				style: 'bottom'
			},
		}
	},
	methods: {
		test() {
			mui('#panel').popover('toggle')
			this.options['offsetTop'] = document.querySelector('#panel').offsetTop
		}
	},
	components: {
		Draw,
		SidePanel
	}
}
</script>
