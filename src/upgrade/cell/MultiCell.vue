<template>
	<div class="zp-container">
		<ul class="mui-table-view">
	    <li
	    	class="mui-table-view-cell mui-media"
	    	v-for='(item, ind) in list'
	    	:key='ind'>
        <a href="javascript:;" class='mui-navigate-right'>
          <img class="mui-media-object mui-pull-left zp-radius" :src="item.avatar">
          <div class="mui-media-body">
            {{ item.title }}
            <p class='mui-ellipsis' v-if='item.desc'>{{ item.desc }}</p>
          </div>
        </a>
	    </li>
	  </ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: []
		}
	},
	methods: {
		init(data) {
			this.list = data
		},
		clear() {
			this.list = []
		}
	}
}
</script>

<style lang='scss'>
@import '../style/upgrade.scss';
</style>
