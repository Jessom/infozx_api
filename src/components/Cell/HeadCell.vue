<template>
  <div class="cell-header-container mui-clearfix z-cell-head" :class="{'transparent': opt.transparent}">
    <div class="title-box mui-pull-left" v-if='opt.data.title'>
      <i class="tag base-bg" v-if='!opt.transparent && !opt.data.tag'></i>
      <i class="iconfont base-color" :style='{"color": opt.data.tagColor}' :class='opt.data.tag' v-if='opt.data.tag'></i>
      <span :class='{"size12":opt.transparent, "grey-color": opt.transparent}'>{{opt.data.title}}</span>
      <span :class='{"size12":opt.transparent, "grey-color": opt.transparent}'>{{opt.title}}</span>
    </div>
    <div class="menu mui-pull-right" v-if='opt.showMenu' @tap='cellMenuClick($event)'>
      <span class="grey-color size12 text" v-if='opt.data.text'>{{opt.data.text}}</span>
      <i class="iconfont grey-color size12" :class='opt.data.icon'></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    opt() {
      let opt = {
        showMenu: true,
        transparent: false,
        icon: '',
        data: {
          title: '',
          tag: '',
          icon: 'icon-jiantouyou',
          text: '',
        }
      }
      return mui.extend(true, {}, opt, this.options)
    }
  },
  methods: {
    cellMenuClick(e) {
      this.$emit('onCellMenuClick', this.opt)
    }
  }
}
</script>

<style lang="scss">
$height: 40px;
.cell-header-container.z-cell-head{
  height: $height;
  line-height: $height;
  background-color: #fff;
  position: relative;
  &.transparent {
    background-color: transparent;
  }
  .tag {
    position: relative;
    top: 4px;
    display: inline-block;
    height: 18px;
    width: 3px;
  }
  .mui-pull-left, .mui-pull-right {
    padding: 0 15px;
    height: $height;
  }
  .mui-pull-right .text {
    position: relative;
    right: -5px;
  }
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(.3);
    background-color: #c8c7cc;
  }
}
</style>
