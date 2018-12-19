<template>
  <side-panel :options='{id: "z-include-wrap", style: "bottom", height: "80vh"}'>
    <div class="z-picker-head mui-clearfix mui-text-center">
      <button class="mui-btn mui-pull-left" @tap='close'>取消</button>
      <span class="title mui-ellipsis">{{curBranch.title}}</span>
      <button class="mui-btn mui-pull-right base-btn" @tap='success'>确定</button>
    </div>

    <!-- 头部菜单 -->
    <div class="z-slider-wrap mui-clearfix">
      <div class="mui-slider men-wrap">
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a class="mui-control-item" @tap='onMenu($event, false)'>全部</a>
            <a
              class="mui-control-item"
              v-for='(item, ind) in menus'
              @tap='onMenu($event, item, ind)'
              :key='ind'>{{item.title}}</a>
          </div>
        </div>
      </div>
      <!-- 包含子部门按钮 -->
      <!-- <div class="includes-wrap">
        <i class="iconfont icon-belong"></i>
      </div> -->
    </div>

    <div class="z-picker-content mui-scroll-wrapper">
			<div class="mui-scroll">
        <!-- 可点击区域 -->
        <ul class="mui-table-view">
          <li
            class="mui-table-view-cell"
            :class='{"grey": item.include}'
            v-for='(item, ind) in reading'
            @tap='onCell($event, item)'
            :key='ind'>{{item.title}}</li>
        </ul>

        <!-- 选择区域 -->
        <ul class="mui-table-view z-select-wrap mui-table-view-radio" v-show='staff.length'>
          <li class="tip">选择成员 ↓</li>
          <li
            class="mui-table-view-cell mui-media"
            :class='{"grey": item.disabled}'
            v-for='(item, ind) in staff'
            @tap='onSelect($event, item)'
            :key='ind'>
            <a href="javascript:;" class="mui-navigate-right">
              <img class="mui-media-object radius50 mui-pull-left" v-if='item.image' :src='item.image' />
              <div class="text-wrap radius50" v-else>{{item.title.charAt(0)}}</div>
              <div class="mui-media-body">
                <span class="title mui-ellipsis">{{item.title}}</span>
                <p class='desc mui-ellipsis'>{{item.desc}}</p>
              </div>
            </a>
          </li>
        </ul>
			</div>
    </div>
  </side-panel>
</template>

<script>
import SidePanel from '@/components/Other/SidePanel.vue'
import { deepFind, select, clearSelect } from './utils.js'
export default {
  data () {
    return {
      reading: [],        // 渲染数据
      menus: [],          // 渲染头部菜单
      select: [],         // 保存选中的部门或成员
      staff: [],          // 渲染成员
      curBranch: {title: ''},   // 当前所在部门
    }
  },
  mounted () {
    // mui('.z-picker-content').scroll()
  },
  methods: {
    init() {
      this.reading = this.list
      this.menus = []
      this.select = []
      this.staff = []
      clearSelect(mui('#z-include-wrap .z-select-wrap .mui-selected'))
    },
    // 进入下一级部门
    onCell(e, item) {
      e.stopPropagation()
      if(!item.staff.length && !item.children.length) {
        mui.toast('点不进去了')
        return
      }
      if(item.include) {
        mui.toast('不能选择')
        return
      }
      this.jump(item)
      this.staff = item.staff
      this.menus.push(item)
      this.reading = item.children
      if(item.disabled) {
        for(let i of item.staff) {
          this.$set(i, 'disabled', true)
        }
      }
    },
    // 点击菜单按钮，渲染对应的部门
    onMenu(e, item, ind) {
      e.stopPropagation()
      this.jump(item==false?{title: ''} : item)
      if(item === false) {
        this.menus = []
        this.staff = []
        this.reading = this.list
      } else {
        this.menus.splice(ind + 1, this.menus.length - ind)
        deepFind(this.list, item.id, res => {
          this.reading = res.children
          this.staff = res.staff
        })
      }
    },
    jump(item) {
      this.select = []
      this.curBranch = item
      clearSelect(mui('#z-include-wrap .z-select-wrap .mui-selected'))
    },
    // 选择部门或成员
    onSelect(e, item) {
      e.stopPropagation()
      if(item.disabled) {
        mui.toast('不能选择')
        return
      }
      select(e.currentTarget, item, this.select)
    },
    // 确定
    success() {
      if(!this.select.length) {
        mui.toast('至少选择一个')
        return
      }
      this.$emit('complete', { select: this.select })
      this.close()
    },
    // 取消
    close() {
      this.init()
      mui('#z-include-wrap').popover('toggle')
    }
  },
  props: {
    list: Array
  },
  watch: {
    list: {
      handler: function(val) {
        this.reading = JSON.parse(JSON.stringify(val))
      },
      deep: true
    }
  },
  components: {
    SidePanel
  }
}
</script>

<style lang="scss">
// @import './pick.scss';
</style>
