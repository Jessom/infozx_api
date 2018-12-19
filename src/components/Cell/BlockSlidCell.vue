<template>
<div class="block-slider-container z-block-cell">
  <head-cell 
    :options='opt' 
    v-if='opt.showHead'
    @onCellMenuClick='CellMenuClick' />
  <div id="Gallery" class="mui-slider" v-if='opt.list.length'>
    <div class="mui-slider-group">
      <div class="mui-slider-item" v-for='(ch, i) in opt.list' :key='i'>
        <ul class="mui-table-view mui-grid-view mui-grid-9" :class="[(opt.theme && !isApp) ? 'theme wechat-bg' : (opt.theme?'theme':''), opt.indicator ? 'indicator' : '']">
          <li class="mui-table-view-cell mui-media" v-for='(item, ind) in ch' :key='ind' :class='itemWidth' @tap='cellClick($event, item)'>
            <a href="javascript:;" :class='{"icon-block":opt.block, "z-b-c-radius": opt.isRadius}'>
              <span class="iconfont" :class='item.icon' :style='{"background-color": item.style}'>{{item.icon?"":(item.text==""?item.title.charAt(0):item.text)}}</span>
              <div class="mui-media-body">{{item.title}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mui-slider-indicator" v-if='opt.indicator'>
      <div class="mui-indicator" v-for='(item, ind) in opt.list' :key='ind' :class="{'mui-active':ind==0}"></div>
    </div>
  </div>
  <!-- <div class="nothing-wrap mui-text-center" v-else>
    没有数据
  </div> -->
</div>
</template>

<script>
import HeadCell from './HeadCell.vue'
import { headOption } from './options'
export default {
  data() {
    return {
      isApp: mui.os.plus
    }
  },
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
        quantity: 5,
        theme: false,
        block: false,
        list: [],
        indicator: false,
        isRadius: false,
      }
      return mui.extend({}, opt, this.options)
    },
    hdopt() {
      return headOption(this.opt)
    },
    itemWidth() {
      let n = this.opt.quantity
      if(n<=0) throw new Error('BlockSlidCell.vue error: quantity必须大于0')
      if(n===1) return 'col-xs-12'
      if(n===2) return 'col-xs-6'
      if(n===3) return 'col-xs-4'
      if(n===4) return 'col-xs-3'
      if(n===5) return 'col-xs-2-5'
      if(n===6) return 'col-xs-2'
      if(n>6) throw new Error('BlockSlidCell.vue error: quantity不能大于6')
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

<style lang='scss'>
@import "./blockCommon.scss";
.block-slider-container.z-block-cell {
  .indicator {
    padding-bottom: 20px;
  }
  .mui-slider-indicator {
    bottom: 3px;
    /* .mui-active.mui-indicator {
      background-color: $baseColor;
    }
    .mui-indicator {
      box-shadow: none;
      background-color: lighten($baseColor, 25);
    } */
  }
}
</style>