<template lang="html">
  <div class="loading-container table" :class="{'loading-mask': mask}" v-if="show">
    <!-- line-scale -->
    <div class="loader-inner line-scale table-cell middle" v-if="type==='scale'">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <!-- circle -->
    <div class="table-cell middle" v-if="type==='circle'">
      <div class="circle-loader">
        <div class="loader"></div>
        <div class="loading-txt" v-if="!!msg" v-text="msg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'circle'
    },
    msg: String,
    mask: {
      type: Boolean,
      default: true
    }/*,
    opacity: {
      type: Number,
      default: 0.6
    }*/
  },
  methods: {
    // 关闭loading
    close() {
      this.show = false
    },
    // 开启loading
    open() {
      this.show = true
    }
  },
  mounted() {
    /*// 自定义透明度
    var oLoadingBox = document.querySelector(".loading-container");
    console.log(oLoadingBox.style.backgroundColor = `rgba(0,0,0,${this.opacity})`);*/
  }
}
</script>

<style lang="sass" scoped>
@import "static/common/scss/_variable.scss"
.fixed-wrap
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 999
.loading-container
  &.loading-mask
    background-color: rgba(0,0,0,.6)
    .loader-inner
      &>div
        background-color: darken(#fff, 16)
  text-align: center
  background-color: rgba(255,255,255,0)
  @extend .fixed-wrap
  height: 100%
  .loader-inner
    text-align: center
    &>div
      background-color: lighten($baseColor, 10)
      width: 4px
      height: 35px
      border-radius: 2px
      margin: 2px
      animation-fill-mode: both
      display: inline-block
    &>div:nth-child(1)
      animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08)
    &>div:nth-child(2)
      animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08)
    &>div:nth-child(3)
      animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08)
    &>div:nth-child(4)
      animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08)
    &>div:nth-child(5)
      animation: line-scale 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08)

@-webkit-keyframes line-scale
  0%
    transform: scaley(1)
  50%
    transform: scaley(0.4)
  100%
    transform: scaley(1)
@keyframes line-scale
  0%
    transform: scaley(1)
  50%
    transform: scaley(0.4)
  100%
    transform: scaley(1)

.circle-loader
  display: inline-block
  background-color: rgba(0,0,0,.6)
  border-radius: 10px
  margin: 0 auto
  padding: 20px 20px
  .loading-txt
    color: darken(#fff, 10)
    font-size: 12px
    margin-top: 8px

.loader,
.loader:after
  border-radius: 50%
  width: 40px
  height: 40px
.loader
  margin: 0 auto
  font-size: 10px
  position: relative
  text-indent: -9999em
  border-top: 4px solid rgba(255,255,255, 0.2)
  border-right: 4px solid rgba(255,255,255, 0.2)
  border-bottom: 4px solid rgba(255,255,255, 0.2)
  border-left: 4px solid #ffffff
  -webkit-transform: translateZ(0)
  -ms-transform: translateZ(0)
  transform: translateZ(0)
  -webkit-animation: load8 1.1s infinite linear
  animation: load8 1.1s infinite linear
@-webkit-keyframes load8
  0%
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)
  100%
    -webkit-transform: rotate(360deg)
    transform: rotate(360deg)
@keyframes load8
  0%
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)
  100%
    -webkit-transform: rotate(360deg)
    transform: rotate(360deg)

</style>
