<template>
  <div class="cell-container z-cell z-text-cell-wrap">
    <head-cell 
      :options='opt' 
      v-if='opt.showHead'
      @onCellMenuClick='CellMenuClick' />
    <ul class="mui-table-view" v-if='opt.list.length'>
      <li class="mui-table-view-cell mui-media" v-for='(item, ind) in opt.list' :key='ind' @tap='cellClick($event, item)'>
        <a class="mui-clearfix" :class='{"mui-navigate-right":opt.showRightNav}'>
          <!-- 图标文本 -->
          <div class="text-wrap">
            <i class="iconfont mui-pull-left left-menu size20" :class='item.icon' v-if='opt.iconShow && opt.iconPos==="left"'></i>
            <i class="iconfont mui-pull-right right-menu size20" :class='item.icon' v-if='opt.iconShow && opt.iconPos==="right"'></i>
            {{item.title}}
            
            <span class="mui-pull-right z-desc-text mui-ellipsis" :style="{paddingRight: opt.showRightNav?'20px':'0'}">{{item.text}}</span>

            <!-- badges -->
            <div class="badges-wrap mui-pull-right" :style="{right: opt.showRightNav?'20px':'0'}">
              <span class='badges-item base-bg' v-for='(i, inde) in item.badges' :key='inde' :style='{backgroundColor: i.background}'>{{i.title}}</span>
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
        iconShow: true,
        showRightNav: true,
        showHead: true,
        iconPos: 'left',
        list: [],
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
    }
  },
  components: {
    HeadCell
  }
}
</script>

<style lang="scss">
@import './cellCommon.scss';
.cell-container.z-cell.z-text-cell-wrap {
  .right-menu{
    margin-right: 17px;
  }
  .left-menu{
    margin-right: 10px;
  }

  .z-desc-text {
    display: inline-block;
    width: calc(100% - 80px);
    text-align: right;
    color: #666;
  }

  .badges-wrap, .z-desc-text {
    position: relative;
  }
}
</style>
