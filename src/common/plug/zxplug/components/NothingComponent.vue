<template>
  <div class='noting-container table' v-if='show'>
    <div class='table-cell middle'>
      <i class='iconfont icon-zanwuneirong size22'></i>
      <span class='size16' style="margin-left:5px;">{{msg}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      show: false
    }
  },
  props: {
    msg: {
      type: String,
      default: '空空如也'
    }
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    }
  }
}
</script>

<style lang="scss">
@import 'static/common/scss/_variable.scss';
.noting-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  height: 100%;
  .table-cell {
    color: $greyDarkColor;
  }
}
</style>
