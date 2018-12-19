<template lang="html">
  <div class="container">
  	<badge-cell :options='options' @onBadgeClick='onBadgeClick' />

  	<div class="mt10"></div>
  	<badge-cell :options='options2' @onBadgeClick='onBadgeClick' />

  	<div class="mt10"></div>
  	<badge-cell :options='options3' @onBadgeClick='onBadgeClick' />

  	<div class="mt10"></div>
  	<badge-cell :options='options4' @onBadgeClick='onBadgeClick' />
	</div>
</template>

<script>
import BadgeCell from '@/components/Cell/BadgeCell.vue'
export default {
	data() {
		return {
			options: {
				list: [{
					text: '张',
					title: '马邦花园',
					desc: '6-666',
					badges: [{
						name: '签',
						active: true
					}, {
						name: '社',
						active: true
					}, {
						name: '工',
						active: true
					}, {
						name: '开',
						active: false
					}]
				}, {
					text: '李',
					title: '马邦花园',
					desc: '8-888',
					badges: [{
						name: '签',
						active: true
					}, {
						name: '社',
						active: false
					}, {
						name: '工',
						active: false
					}, {
						name: '开',
						active: false
					}]
				}]
			},
			options2: {
				list: [{
					text: '张',
					title: '马邦花园',
					desc: '6-666',
					badges: [{
						name: '退',
						active: false
					}]
				}, {
					text: '李',
					title: '马邦花园',
					desc: '8-888',
					badges: [{
						name: '退',
						active: true
					}]
				}]
			},
			options3: {
				style: '',
				list: [{
					text: '张',
					title: '马邦花园',
					desc: '6-666',
					badges: [{
						icon: 'icon-dianying',
						active: true
					}]
				}, {
					text: '李',
					title: '马邦花园',
					desc: '8-888',
					badges: [{
						icon: 'icon-dianying'
					}]
				}]
			},
			options4: {
				style: 'background',
				list: [{
					text: '张',
					title: '马邦花园',
					desc: '6-666',
					badges: [{
						name: '签',
						active: true
					}, {
						name: '社',
						active: true
					}, {
						name: '工',
						active: true
					}, {
						name: '开',
						active: false
					}]
				}, {
					text: '李',
					title: '马邦花园',
					desc: '8-888',
					badges: [{
						name: '签',
						active: true
					}, {
						name: '社',
						active: false
					}, {
						name: '工',
						active: false
					}, {
						name: '开',
						active: false
					}]
				}]
			},
		}
	},
	methods: {
		onBadgeClick(obj) {
			console.log(obj)
		}
	},
	components: {
		BadgeCell
	}
}
</script>

<style lang='scss'>
.container{}
</style>