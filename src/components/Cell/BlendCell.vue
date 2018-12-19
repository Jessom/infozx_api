<template>
  <div class="cell-container z-cell">
    <head-cell
      :options='opt' 
      v-if='opt.showHead'
      @onCellMenuClick='CellMenuClick' />
    <ul class="mui-table-view" v-if='opt.list.length'>
      <li class="mui-table-view-cell mui-media" v-for='(item, ind) in opt.list' :key='ind' @tap='cellClick($event, item)'>
        <!-- 左滑 -->
        <div class="mui-slider-right mui-disabled" v-if='opt.isSlide'>
          <a class="mui-btn mui-btn-red" @tap.stop='onDelect($event, item)'>删除</a>
        </div>

        <!-- 主内容区 -->
        <a class="mui-clearfix" :class='{"mui-navigate-right":opt.showRightNav, "mui-slider-handle":opt.isSlide}'>
          <!-- 图文混排 -->
          <div class="img-text-wrap">
            <img class="mui-media-object mr10" :class='{"radius50": opt.isRadius, "right": opt.isRight}' :src="item.image" v-if='opt.showAvatar && item.image'>
            <div
              class="mui-media-object base-bg mr10 iconfont"
              :class='[opt.isRadius?"radius50":"", item.icon]'
              :style='{backgroundColor: item.background}'
              v-if='opt.showAvatar && !item.image'>
              <span v-if='!item.icon'>{{item.text || item.title.charAt(0)}}</span>
            </div>
            <div class="mui-media-body">
              <div v-if='opt.isReverse'>
                <div
                  class="size12 grey-color desc"
                  :class='[opt.multi?"mui-ellipsis-2 line15":"mui-ellipsis"]'
                  v-if='item.desc'>{{item.desc}}</div>
                <div class="mui-ellipsis"><span class="title">{{item.title}}</span>&nbsp;<sup class="z-spu" v-if='item.sup'>{{item.sup}}</sup></div>
              </div>
              <div v-else>
                <div class="mui-ellipsis"><span class="title">{{item.title}}</span>&nbsp;<sup class="z-spu" v-if='item.sup'>{{item.sup}}</sup></div>
                <div
                  class="size12 grey-color desc"
                  :class='[opt.multi?"mui-ellipsis-2 line15":"mui-ellipsis"]'
                  v-if='item.desc'>{{item.desc}}</div>
              </div>
            </div>
            <div class="badges-wrap" :style="{right: opt.showRightNav?'32px':'15px'}">
              <span class="badges-item base-bg" v-for='(i, inde) in item.badges' :key='inde' :style="{backgroundColor: i.background}">{{i.title}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <!-- <div class="nothing-wrap mui-text-center" v-else>
      没有数据
    </div> -->
  </div>
</template>

<script>
import HeadCell from './HeadCell.vue'
import { headOption } from './options'
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
        showHead: false,
        showRightNav: true,
        isRadius: true,
        showAvatar: true,
        isReverse: true,
        badges: [],
        list: [],
        isRight: false,
        isSlide: false,
        multi: false,
      }
      return mui.extend({}, opt, this.options)
    },
    hdopt() {
      return headOption(this.opt)
    }
  },
  methods: {
    CellMenuClick(obj) {
      this.$emit('onCellMenuClick', obj)
    },
    cellClick(e, item) {
      this.$emit('onCellClick', item)
    },
    onDelect(e, item) {
      this.$emit('onDelect', {li: e.target.parentNode.parentNode, ...item})
    }
  },
  components: {
    HeadCell
  }
}
</script>

<style lang="scss">
@import './cellCommon.scss';
.cell-container.z-cell {
  // 图文混排
  .img-text-wrap{
    padding-right: 16px;
  }

  .badges-wrap {
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
  }

  .mui-table-view .mui-media-object {
    width: 42px;
    text-align: center;
    color: #fff;
    font-size: 2rem;
    float: left;
    &.right {
      float: right;
    }
  }

  .z-spu {
    color: #666;
  }

  .mui-table-view-cell>.mui-slider-handle.mui-navigate-right:after {
    right: 11px;
  }
}
</style>
