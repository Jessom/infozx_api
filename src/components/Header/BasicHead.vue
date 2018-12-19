<template>
  <div :class="{'mui-bar-nav': opt.wechat}">
    <header id='header' class="mui-bar mui-bar-nav z-head" v-if='opt.wechat'>
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" v-if='opt.isBack'></a>
      <h1 class="mui-title">{{opt.title}}</h1>
      <div class="mui-text-right btns-wrap" v-if='opt.btns.length'>
        <a  class='mui-icon' v-for='(item, ind) in opt.btns' :key='ind'  @tap='item.event(item)'>
        <i class="iconfont size20" :class='item.icon'></i> <span v-if='item.title' class="size16 text">{{item.title}}</span>
        </a>
      </div>
    </header>
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
  mounted () {
    if(immersed > 0) {
      let header = document.querySelector('#header')
      header && (header.style.height = 44 + immersed + 'px')
      header && (header.style.paddingTop = immersed + 'px')
      let content = document.querySelector('.mui-content')
      content && (content.style.paddingTop= immersed + 44 +'px')
    }
  },
  computed: {
    opt() {
      let opt = {
        title: '',
        isBack: true,
        wechat: mui.os.plus ? true : false,
        btns: []
      }
      return mui.extend({}, opt, this.options)
    }
  },
  methods: {
    onBubble() {
      console.log(12345678)
    }
  }
}
</script>

<style lang="scss">
@import './headCommon.scss';
</style>
