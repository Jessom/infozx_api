<template>
	<div>
		<calendar
			:multi='multi'
			:lunar='lunar'
			:value='value'
			@select='select' />
		<span class="active" v-for='(item, ind) in actived' :key='ind'>{{item}}</span>
	</div>
</template>

<script>
import Calendar from '@/components/Other/Calendar.vue'
export default {
	data() {
		let cu = new Date()
		return {
			actived: [`${cu.getFullYear()}/${cu.getMonth()+1}/${cu.getDate()}`],
			multi: true,
			lunar: false,
			value: [[cu.getFullYear(), cu.getMonth()+1, cu.getDate()]],
		}
	},
	methods: {
		select(val) {
			console.log(val)
			let displayValue=[]
      val.forEach(v=>{
        displayValue.push(v[0]+"/"+(v[1])+"/"+v[2])
      })
      // this.actived = displayValue.join(",")
      this.actived = displayValue
      
      console.log(this.actived)
		}
	},
	components: {
		Calendar
	}
}
</script>

<style lang='scss' scoped>
.active {
	display: inline-block;
	padding: 3px 7px;
}
</style>