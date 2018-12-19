<template>
  <side-panel :options='{id: "z-data-time"}' class="z-data-time-wrap">
    <div class="mui-scroll-wrapper" id='z-data-time-scroll'>
      <div class="mui-scroll">
        <ul class="mui-table-view mui-table-view-radio">
          <li class="mui-table-view-cell" data-time='@@ND'>
            <a class="mui-navigate-right">今天</a>
          </li>
          <li class="mui-table-view-cell line" data-time='@@ND,-1'>
            <a class="mui-navigate-right">昨天</a>
          </li>
          <li class="mui-table-view-cell" data-time='@@NW'>
            <a class="mui-navigate-right">本周</a>
          </li>
          <li class="mui-table-view-cell line" data-time='@@NW,-1'>
            <a class="mui-navigate-right">上周</a>
          </li>
          <li class="mui-table-view-cell" data-time='@@NM'>
            <a class="mui-navigate-right">本月</a>
          </li>
          <li class="mui-table-view-cell line" data-time='@@NM,-1'>
            <a class="mui-navigate-right">上月</a>
          </li>
          <li class="mui-table-view-cell" data-time='@@DATE,-7'>
            <a class="mui-navigate-right">最近一周</a>
          </li>
          <li class="mui-table-view-cell" data-time='@@DATE,-30'>
            <a class="mui-navigate-right">最近一月</a>
          </li>
          <li class="mui-table-view-cell" data-time='@@DATE,-90'>
            <a class="mui-navigate-right">最近三月</a>
          </li>
          <li class="mui-table-view-cell line" data-time='@@DATE,-180'>
            <a class="mui-navigate-right">最近六月</a>
          </li>
          <li class="mui-table-view-cell" data-time='custom'>
            <a class="mui-navigate-right">任意时间</a>
          </li>
        </ul>
        <form class="mui-input-group" v-show='select === "custom"'>
          <div class="mui-input-row">
            <label>开始时间</label>
            <input type="date" v-model='starttime' :max='today' placeholder="请选择开始时间">
          </div>
          <div class="mui-input-row">
            <label>结束时间</label>
            <input
              type="date"
              v-model='endtime'
              :min='starttime'
              :max='today'
              placeholder="请选择结束时间">
          </div>
        </form>
      </div>
    </div>
    <basic-button
      :options='{list:[{title: "取消"}, {title: "确定"}]}'
      @onBasic='onBasic' />
  </side-panel>
</template>

<script>
import SidePanel from '@/components/Other/SidePanel.vue'
import BasicButton from '@/components/Buttons/BasicButton.vue'
import { select } from '../DoubleHit/utils';
export default {
  data () {
    const d = new Date()
    return {
      today: `${d.getFullYear()}-${d.getMonth()<9?'0'+(d.getMonth()+1):d.getMonth()+1}-${d.getDate()<=9?'0'+d.getDate():d.getDate()}`,
      select: '',
      starttime: '',
      endtime: ''
    }
  },
  watch: {
    starttime(val) {
      if(val > this.today) {
        this.starttime = this.today
      }
    }
  },
  mounted () {
    console.log(this.today)
    mui('#z-data-time-scroll').scroll()
    this.onSelect()
  },
  methods: {
    // 选择事件
    onSelect() {
      let list = document.querySelector('.z-data-time-wrap .mui-table-view-radio')
      list.addEventListener('selected', e => {
        let el = e.detail.el
        this.select = el.dataset.time
      })
    },
    // 底部按钮
    onBasic(item) {
      if(item.title === '确定') {
        let result = ''
        if(this.select === '') {
          mui.toast('请选择一项')
          return
        }
        if(this.select === 'custom') {
          
          if(this.starttime === '' || this.endtime === '') {
            mui.toast('请选择开始或结束时间')
            return
          }
          if(new Date(this.starttime) > new Date(this.today)) {
            mui.toast('开始时间不能大于今天')
            return
          }
          if(new Date(this.endtime) > new Date(this.today)) {
            mui.toast('结束时间不能大于今天')
            return
          }
          if(new Date(this.starttime) > new Date(this.endtime)) {
            mui.toast('开始时间不能大于结束时间')
            return
          }
          result = [this.starttime, this.endtime]
        } else {
          result = this.select
        }
        this.$emit('onSuccess', result)
      }
      mui('#z-data-time').popover('hide')
    },
  },
  components: {
    SidePanel,
    BasicButton
  }
}
</script>

<style lang="scss">
.z-data-time-wrap {
  .mui-scroll-wrapper {
    margin: 0;
    border-radius: 0;
    padding-bottom: 150px;
  }
  .mui-table-view {
    height: 100%;
    max-height: 100%;
    .mui-table-view-cell {
      &::after {
        height: 0;
      }
      &.line::after {
        height: 1px;
        left: 0;
        background-color: #c8c7cc;
      }
    }
    .time-item {
      padding: 0;
      input {
        margin-bottom: 0;
        border: 0;
      }
    }
  }
  .mui-input-group::after {
    background-color: #c8c7cc;
  }
}
</style>
