<template>
  <side-panel :options='{id: "z-branch-wrap", style: "bottom", height: "80vh"}'>
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
      <div
        class="includes-wrap"
        :class='{"on": isInclude}'
        @tap='onInclude'
        v-show='menus.length && showInclude'>
        <i class="iconfont icon-belong"></i>
      </div>
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
        <ul class="mui-table-view z-select-wrap mui-table-view-radio" v-show='!isInclude && !showInclude'>
          <li class="tip">选择部门 ↓</li>
          <li
            class="mui-table-view-cell mui-media"
            v-for='(item, ind) in reading'
            :class='{"grey": item.disabled}'
            @tap='onSelect($event, item)'
            :key='ind'>
            <a href="javascript:;" class="mui-navigate-right">{{item.title}}</a>
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
      isInclude: false,   // 是否包含子部门
      curBranch: {title: ''},   // 当前所在部门
    }
  },
  mounted () {
    mui('.z-picker-content').scroll()
  },
  methods: {
    init() {
      this.reading = this.list
      this.menus = []
      this.select = []
      this.isInclude = false
      this.curBranch = {title: ''}
      clearSelect(mui('#z-branch-wrap .z-select-wrap .mui-selected'))
    },
    // 进入下一级部门
    onCell(e, item) {
      e.stopPropagation()
      if(!item.children.length && !this.showInclude) {
        mui.toast('点不进去了')
        return
      }
      if(item.include) {
        mui.toast('不能选择')
        return
      }
      this.jump(item)
      this.menus.push(item)
      this.reading = item.children
    },
    // 切换选项，更新一些数据
    jump(item) {
      this.select = []
      this.isInclude = false
      this.curBranch = item
      clearSelect(mui('#z-branch-wrap .z-select-wrap .mui-selected'))
    },
    // 点击菜单按钮，渲染对应的部门
    onMenu(e, item, ind) {
      e.stopPropagation()
      this.jump(item)
      if(item === false) {
        this.menus = []
        this.reading = this.list
      } else {
        this.menus.splice(ind + 1, this.menus.length - ind)
        deepFind(this.list, item.id, res => {
          this.reading = res.children
        })
      }
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
    // 是否包含子部门
    onInclude() {
      this.isInclude = !this.isInclude
      if(this.isInclude) {
        this.select = []
        mui('#z-branch-wrap .z-select-wrap .mui-selected').each((ind, item) => item.classList.remove('mui-selected'))
      }
    },
    // 确定
    success() {
      if(this.isInclude) {      // 包含子部门
        this.$emit('complete', { select: [this.curBranch], flag: true })
      } else if(!this.isInclude) {    // 不包含子部门
        if(!this.select.length) {
          mui.toast('至少选择一个')
          return
        }
        this.$emit('complete', { select: this.select, flag: false })
      }
      this.close()
    },
    // 取消
    close() {
      this.init()
      mui('#z-branch-wrap').popover('toggle')
    }
  },
  props: {
    list: Array,
    showInclude: {
      type: Boolean,
      default: true
    }
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
</style>
