<template>
  <div class="z-progress-bar-wrap">
    <div
      class="z-progress-bar"
      :class='{"z-show-percent": showPercent}'
      :style='{height: height+"px", borderRadius: height+"px"}'>
      <span class="z-bar" :style='{width: progress+"%", backgroundColor: background}'></span>
    </div><span class="z-percent" v-if='showPercent'>{{progress}}%</span>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 5
    },
    progress: {
      type: Number,
      default: 0,
      validator: function(val) {
        return val <= 100
      }
    },
    showPercent: {
      type: Boolean,
      default: true
    },
    background: String
  }
}
</script>

<style lang="scss">
@import 'static/common/scss/_variable.scss';
.z-progress-bar-wrap {
  .z-progress-bar {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: #e3e3e3;
    .z-bar {
      transition: width .5s;
      display: block;
      width: 0;
      height: 100%;
      background-color: $baseColor;
    }
  }
  .z-show-percent {
    display: inline-block;
    width: calc(100% - 44px);
  }
  .z-percent {
    display: inline-block;
    width: 44px;
    font-size: 1.2rem;
    color: #696969;
    text-align: center;
  }
}
</style>
