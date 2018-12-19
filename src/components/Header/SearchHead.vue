<template>
  <header id='header' class="mui-bar mui-bar-nav z-head" :class='{"theme": opt.theme}'>
    <a v-if='opt.showBack' class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    <div class="mui-title mui-text-left">
      <input type="search" v-model.trim='search' @keyup.13='onSearch' class="search-input mui-text-left" :placeholder="opt.placeholder" />
    </div>
    <a class="mui-pull-right mui-icon iconfont icon-saoma" @tap='onScan' v-if='opt.isScan'></a>
    <a class="mui-pull-right mui-icon iconfont icon-sousuo" @tap='onSearch' v-if='!opt.isScan'></a>
  </header>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  props: {
    options: {
      type: Object,
      default: function() {
        return {}
      }
    },
  },
  computed: {
    opt() {
      let opt = {
        isScan: false,
        placeholder: '我要找...',
        theme: false,
        showBack: true
      }
      return mui.extend({}, opt, this.options)
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
  methods: {
    // 搜索时间
    onSearch() {
      this.$emit("onSearch", this.search)
    },
    // 开启扫码
    onScan() {
      
    }
  }
}
</script>

<style lang="scss">
@import './headCommon.scss';
header.mui-bar-nav.mui-bar.z-head{
  background-color: #e6e6e6 !important;
  a {
    color: #868686 !important;
  }
  .mui-action-back{
    padding-right: 15px;
    padding-left: 5px;
  }
  .mui-title {
    line-height: 0;
  }
  input[type=search] {
    height: 32px;
    font-size: 1.4rem;
    color: #333;
  }
  .search-input{
    width: -webkit-calc(100% - 13px);
  }

  &.theme {
    background-color: $baseColor !important;
    a {
      color: rgba(255,255,255,.8) !important;
    }
    input[type=search] {
      background-color: $baseColorDark10;
      color: rgba(255,255,255,.9);
      &::-webkit-input-placeholder {
        color: rgba(255,255,255,.5);
      }
    }
  }
}
</style>
