<template>
	<div class="wrap">
		<ccc :menus='menus'></ccc>
	</div>
</template>

<script>
import ccc from './ccc.vue'
export default {
	data() {
		return {
			menus: [
  {
    name: '菜单1',
    data: [
      {
        name: '1.1'
      },
      {
        name: '1.2'
      },
      {
        name: '1.3'
      },
      {
        name: '1.4'
      },
      {
        name: '1.5'
      },
      {
        name: '1.6'
      }
    ]
  }
]
		}
	},
	components: {
		ccc
	}
}
</script>

<style lang="scss">

</style>
