<template lang="html">
  <div class="container">
		<search-head @onSearch='onSearch' :options="shOptions" />
		</div>
</template>

<script>
import SearchHead from '@/components/Header/SearchHead.vue'
export default {
	data() {
		return {
			shOptions: {
				placeholder: '搜索内容',
				theme: true
			}
		}
	},
	methods: {
		onSearch(search) {
			alert(search)
		}
	},
	components: {
		SearchHead
	}
}
</script>

<style lang="sass">

</style>
