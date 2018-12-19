<template>
<div class="block-cell-container z-block-cell">
  <head-cell 
    :options='opt' 
    v-if='opt.showHead'
    @onCellMenuClick='CellMenuClick' />
  <ul
    class="mui-table-view mui-grid-view mui-grid-9"
    v-if='opt.list.length'
    :class="[(opt.theme && !isApp) ? 'theme wechat-bg' : (opt.theme?'theme':'')]">
    <li
      class="mui-table-view-cell mui-media"
      v-for='(item, ind) in opt.list'
      :key='ind'
      :class='[itemWidth, opt.edit?"edit":""]'
      @tap='cellClick($event, item)'>
      <a
        href="javascript:;"
        :class='{"icon-block":opt.block, "z-b-c-radius": opt.isRadius}'>
        <span
          class="z-oth iconfont"
          v-if='opt.edit || (item.edit>0&&item.edit!==true)'
          :class='[item.edit===true?"z-add icon-jia":(item.edit===false?"z-jian icon-jianhao":(item.edit>0?"z-num":""))]'
          @tap.stop='onEdit($event, item)'></span>
        <img class='z-avatar' v-if='item.image' :src="item.image" :class='{"radius50":opt.isRadius}' alt="">
        <span
          class="iconfont z-min"
          :class='[item.icon]'
          v-if='!item.image'
          :style='{"background-color": item.style, "color": item.color}'>{{item.icon?"":((item.text==""||!item.text)?item.title.charAt(0):item.text)}}</span>
        <div class="mui-media-body" :style='{"color": item.color}'>{{item.title}}</div>
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
        isRadius: false,
      }
      return mui.extend({}, opt, this.options)
    },
    hdopt() {
      return headOption(this.opt)
    },
    itemWidth() {
      let n = this.opt.quantity
      if(n<=0) throw new Error('BlockCell.vue error: quantity必须大于0')
      if(n===1) return 'col-xs-12'
      if(n===2) return 'col-xs-6'
      if(n===3) return 'col-xs-4'
      if(n===4) return 'col-xs-3'
      if(n===5) return 'col-xs-2-5'
      if(n===6) return 'col-xs-2'
      if(n>6) throw new Error('BlockCell.vue error: quantity不能大于6')
    }
  },
  methods: {
    CellMenuClick(obj) {
      this.$emit('onCellMenuClick', obj)
    },
    cellClick(e, item) {
      this.$emit('onCellClick', item)
    },
    onEdit(e, item) {
      this.$emit('onEdit', item)
    }
  },
  components: {
    HeadCell
  }
}
</script>

<style lang='scss'>
@import "./blockCommon.scss";
.z-oth {
  position: absolute;
  right: 2px;
  top: 2px;
  font-size: 1rem;
  width: 14px;
  height: 14px;
  line-height: 14px;
  border-radius: 50%;
  color: #fff;
}
.z-avatar {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  &.radius50 {
    border-radius: 50%;
  }
}
.z-num {
  background-color: $baseColor;
}
.z-jian, .z-add {
  /*font-weight: 600;*/
  font-size: 1.6rem;
  background-color: #fff;
}
.z-jian {
  color: red;
  /*background-color: red;*/
}
.z-add {
  color: #67C23A;
  /*background-color: #409EFF;*/
}
.z-block-cell .mui-grid-view.mui-grid-9 .mui-table-view-cell.edit {
  padding-left: 5px;
  padding-right: 5px;
}
.z-block-cell .mui-grid-view.mui-grid-9 .mui-table-view-cell.edit > a:not(.mui-btn) {
  background-color: #f6f6f6;
}
</style>