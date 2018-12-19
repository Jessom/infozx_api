<template>
  <div class="z-choise-item border-bottom">
    <div class="mui-clearfix">
      <div class="left"><i class="iconfont" :class='icon'></i></div>

      <div class="center">
        <span
          class="item"
          v-for='(item, ind) in list'
          :key='ind'>
          {{item.title}}
          <i
            class="close-btn iconfont icon-wrong"
            @tap='onDelete($event, item)'></i>
        </span>
      </div>
      
      <div class="right" @tap='onPicker($event)'><i class="iconfont icon-Plus"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    flag: String,
    icon: String
  },
  methods: {
    onPicker(e) {
      this.$emit('onPicker', this.flag)
    },
    onDelete(e, item) {
      this.$emit('onDelete', item)
    }
  }
}
</script>

<style lang="scss">

</style>
