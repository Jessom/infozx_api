<template>
	<div>
		<div style='height:61vh'>
			<multi-addr-map ref='map' />
		</div>
		<input type="text" placeholder='请输入地址' v-model='addr'>
		<button class="mui-btn-block" @tap='add'>add</button>
		<button class="mui-btn-block" @tap='addpos'>add position</button>
	</div>
</template>

<script>
import MultiAddrMap from '@/components/Map/MultiAddrMap.vue'
export default {
	data() {
		return {
			addr: ''
		}
	},
	methods: {
		add() {
			this.$refs.map.geocoder(this.addr, {iconLabel: {innerHTML: '我'}})
		},
		addpos() {
			this.$refs.map.geocoder({lng:120.578028, lat: 31.307886}, {iconLabel: {innerHTML: '公司'}})
		}
	},
	components: {
		MultiAddrMap
	}
}
</script>

<style lang='scss'>
</style>