<!-- 
  这里没有使用vue的双向绑定，用的是传统的dom操作
  使用数据驱动的话，向list中push数据，swiper无法重新计算大小(swiper.update()也不行)
  这里改用了swiper.addSlide()方法
-->

<template>
	<div class="z-week-calendar-wrap">
		<div class="z-calendar-head">
      <div class="z-calendar-month mui-text-center">
        {{curYear}}年{{curMonth}}月
        <input type="date" class="select" name="" v-model='select'>
      </div>
			<ul class="z-calendar-week mui-clearfix">
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
				<li>日</li>
			</ul>
		</div>
    <div class="z-calendar-body swiper-container">
      <ul class="z-calendar-content mui-clearfix swiper-wrapper">
        <!-- <li
          class="swiper-slide"
          v-for='(item, ind) in list'
          :key='ind'>
          <span
            class="z-item"
            v-for='(i, inde) in item'
            :key='inde'>
            <span
              class="z-item-wrap"
              :data-year='i.year'
              :data-month='i.month'
              @tap='$emit("click", i)'
              :class='{"active": new Date().getFullYear()==i.year&&new Date().getMonth()+1==i.month&&new Date().getDate()==i.day}'>
              {{i.day}}
              <i v-if='i.flag' class='z-pointer' :class='i.flag'></i>
            </span>
          </span>
        </li> -->
      </ul>
    </div>
	</div>
</template>

<script>
// import 'swiper/dist/css/swiper.min.css'
// import Swiper from 'swiper'
export default {
  data() {
    return {
      list: [],    // 配合swiper的addSlide使用

      select: '',
      curYear: new Date().getFullYear(),    // 当前年
      curMonth: new Date().getMonth()+1,      // 当前月
      curDay: new Date().getDate(),        // 当前日期
    }
  },
  props: {
    actived: {
      type: Array,
      default: function() { return [] }
    },
    /*options: {
      type: Object,
      default: function() { return {} }
    }*/
  },
  /*computed: {
    opt() {
      let opt = {}
      return mui.extend({}, opt, this.options)
    }
  },*/
  mounted() {
    const self = this
    this.sw = new Swiper('.swiper-container', { initialSlide: 1 })

    this.initList(null)

    this.sw.on('slidePrevTransitionStart', function() {
      self.switchWeek(this.activeIndex, 'pre')
    })

    this.sw.on('slideNextTransitionStart', function() {
      self.switchWeek(this.activeIndex, 'nex')
    })

    mui('.z-calendar-content').on('tap', '.z-item-wrap', function(e) {
      self.$emit('click', {
        year: this.getAttribute('data-year'),
        month: this.getAttribute('data-month'),
        day: this.getAttribute('data-day'),
        text: this.getAttribute('data-text'),
        flag: this.getAttribute('data-flag'),
      })
    })
  },
  watch: {
    select(val) {
      let d = new Date(val)
      this.curYear = d.getFullYear()
      this.curMonth = d.getMonth() + 1
      this.curDay = d.getDate()

      // 计算本周，上周，下周日期
      let curWeek = this.getDate(d)
      let preWeek = this.getDate(d.getTime() - 1000 * 60 * 60 * 24 *7)
      let nexWeek = this.getDate(d.getTime() + 1000 * 60 * 60 * 24 * 7)

      // 重置list数据
      this.list = [preWeek, curWeek, nexWeek]

      // 清除所有slide
      this.sw.removeAllSlides()

      // 渲染数据
      this.render(0, curWeek)
      this.render(1, preWeek, 'prepend')
      this.render(2, nexWeek, 'append')
    }
  },
	methods: {
    // 初始化日期
    initList(cur) {
      // 清空数据
      this.sw.removeAllSlides()
      this.list = []

      let date = cur ? new Date(cur) : new Date()
      this.curYear = date.getFullYear()
      this.curMonth = date.getMonth() + 1
      this.curDay = date.getDate()

      // 获取本周、下周、上周日期
      let d = this.getDate(date)
      let p = this.getDate(date.getTime() - 1000 * 60 * 60 * 24 * 7)
      let n = this.getDate(date.getTime() + 1000 * 60 * 60 * 24 * 7)

      this.list = [p, d, n]
      /*this.list.push(d)
      this.list.unshift(p)
      this.list.push(n)*/

      // 渲染数据
      this.render(0, d)
      this.render(1, p, 'prepend')
      this.render(2, n, 'append')
    },
    // 切换周
    switchWeek(index, flag='pre') {
      let d = flag === 'pre' ? this.list[index][0].time : this.list[index][6].time
      this.curYear = d.getFullYear()
      this.curMonth = d.getMonth() + 1
      this.curDay = d.getDate()
      if(flag === 'pre' && index === 0) {
        // 上周
        this.reckonWeek(d, 'pre')
      } else if(flag === 'nex' && this.list.length-1 === index) {
        // 下周
        this.reckonWeek(d, 'nex')
      }
    },
    // 计算当前周的日期
    reckonWeek(d, flag='pre') {
      let date = flag === 'pre' ? d.getTime() - 1000 * 60 * 60 * 24 * 7 : d.getTime() + 1000 * 60 * 60 * 24 * 7
      let index = flag === 'pre' ? 0 : this.list.length
      this.render(index, this.getDate(date))
      flag === 'pre' ? this.list.unshift(this.getDate(date)) : this.list.push(this.getDate(date))
    },
    // 顾使用addSlide方法，添加dom元素
    render(ind, arr, flag='default') {
      let html = `
        <li class="swiper-slide">
          <span class="z-item">
            <span
              class="z-item-wrap ${
                new Date().getFullYear()==arr[0].year&&
                new Date().getMonth()+1==arr[0].month&&
                new Date().getDate() == arr[0].day ? 'active' : ''
              }"
              data-year='${arr[0].year}'
              data-month='${arr[0].month}'
              data-day='${arr[0].day}'
              data-text='${arr[0].text}'
              data-flag='${arr[0].flag?arr[0].flag:""}'>
            ${arr[0].day}
            <i style="display: ${arr[0].flag ? 'inline-block':'none'}" class='z-pointer ${arr[0].flag}'></i>
          </span>
          </span>
          <span class="z-item">
            <span
              class="z-item-wrap ${
                new Date().getFullYear()==arr[1].year&&
                new Date().getMonth()+1==arr[1].month&&
                new Date().getDate() == arr[1].day ? 'active' : ''
              }"
              data-year='${arr[1].year}'
              data-month='${arr[1].month}'
              data-day='${arr[1].day}'
              data-text='${arr[1].text}'
              data-flag='${arr[1].flag?arr[1].flag:""}'>
            ${arr[1].day}
            <i style="display: ${arr[1].flag ? 'inline-block':'none'}" class='z-pointer ${arr[1].flag}'></i>
          </span>
          </span>
          <span class="z-item">
            <span
              class="z-item-wrap ${
                new Date().getFullYear()==arr[2].year&&
                new Date().getMonth()+1==arr[2].month&&
                new Date().getDate() == arr[2].day ? 'active' : ''
              }"
              data-year='${arr[2].year}'
              data-month='${arr[2].month}'
              data-day='${arr[2].day}'
              data-text='${arr[2].text}'
              data-flag='${arr[2].flag?arr[2].flag:""}'>
            ${arr[2].day}
            <i style="display: ${arr[2].flag ? 'inline-block':'none'}" class='z-pointer ${arr[2].flag}'></i>
          </span>
          </span>
          <span class="z-item">
            <span
              class="z-item-wrap ${
                new Date().getFullYear()==arr[3].year&&
                new Date().getMonth()+1==arr[3].month&&
                new Date().getDate() == arr[3].day ? 'active' : ''
              }"
              data-year='${arr[3].year}'
              data-month='${arr[3].month}'
              data-day='${arr[3].day}'
              data-text='${arr[3].text}'
              data-flag='${arr[3].flag?arr[3].flag:""}'>
            ${arr[3].day}
            <i style="display: ${arr[3].flag ? 'inline-block':'none'}" class='z-pointer ${arr[3].flag}'></i>
          </span>
          </span>
          <span class="z-item">
            <span
              class="z-item-wrap ${
                new Date().getFullYear()==arr[4].year&&
                new Date().getMonth()+1==arr[4].month&&
                new Date().getDate() == arr[4].day ? 'active' : ''
              }"
              data-year='${arr[4].year}'
              data-month='${arr[4].month}'
              data-day='${arr[4].day}'
              data-text='${arr[4].text}'
              data-flag='${arr[4].flag?arr[4].flag:""}'>
            ${arr[4].day}
            <i style="display: ${arr[4].flag ? 'inline-block':'none'}" class='z-pointer ${arr[4].flag}'></i>
          </span>
          </span>
          <span class="z-item">
            <span
              class="z-item-wrap ${
                new Date().getFullYear()==arr[5].year&&
                new Date().getMonth()+1==arr[5].month&&
                new Date().getDate() == arr[5].day ? 'active' : ''
              }"
              data-year='${arr[5].year}'
              data-month='${arr[5].month}'
              data-day='${arr[5].day}'
              data-text='${arr[5].text}'
              data-flag='${arr[5].flag?arr[5].flag:""}'>
            ${arr[5].day}
            <i style="display: ${arr[5].flag ? 'inline-block':'none'}" class='z-pointer ${arr[5].flag}'></i>
          </span>
          </span>
          <span class="z-item">
            <span
              class="z-item-wrap ${
                new Date().getFullYear()==arr[6].year&&
                new Date().getMonth()+1==arr[6].month&&
                new Date().getDate() == arr[6].day ? 'active' : ''
              }"
              data-year='${arr[6].year}'
              data-month='${arr[6].month}'
              data-day='${arr[6].day}'
              data-text='${arr[6].text}'
              data-flag='${arr[6].flag?arr[6].flag:""}'>
            ${arr[6].day}
            <i style="display: ${arr[6].flag ? 'inline-block':'none'}" class='z-pointer ${arr[6].flag}'></i>
          </span>
          </span>
        </li>
      `
      // ind === 0 ? this.sw.prependSlide(html) : this.sw.appendSlide(html)
      // this.sw.addSlide(ind, html)
      flag === 'default' ? this.sw.addSlide(ind, html) : (flag === 'append' ? this.sw.appendSlide(html) : this.sw.prependSlide(html))
    },

    // 计算日期
    getDate(date) {
      let d = new Date(date)
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      let day = d.getDate()
      let curWeek = d.getDay() === 0 ? 7 : d.getDay()

      const str = this.format(year, month, day)
      let arr = []

      for(let i=curWeek-1;  i>=0; i--) {
        const d = new Date(str)
        d.setDate(d.getDate() - i)
        arr.push({
          time: d,
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate(),
          text: this.format(d.getFullYear(), d.getMonth() +1, d.getDate())
        })
      }

      for(let i=1; i<=7-curWeek; i++) {
        const d = new Date(str)
        d.setDate(d.getDate() + i)
        arr.push({
          time: d,
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate(),
          text: this.format(d.getFullYear(), d.getMonth() +1, d.getDate())
        })
      }

      arr.forEach(c => {
        this.actived.forEach(v => {
          let cc = c.time
          let vv = new Date(v.time)
          if(cc.getFullYear() === vv.getFullYear() && cc.getMonth() === vv.getMonth() && cc.getDate() === vv.getDate()) {
            c['flag'] = v.flag
          }
        })
      })
      return arr
    },
    // 格式化日期
    format(year, month, day) {
      const y = year
      let m = month
      if (m < 10) m = `0${m}`
      let d = day
      if (d < 10) d = `0${d}`
      return `${y}-${m}-${d}`
    },
  }
}
</script>

<style lang='scss'>
@import 'static/common/scss/style.scss';
$pSize: 6px;  // 小圆点大小
$iSize: 30px; // 渲染大小
.z-week-calendar-wrap {
  background-color: #fff;
  padding-bottom: 10px;
  .z-calendar-head {
    .z-calendar-month {
      padding: 10px 0 3px;
      position: relative;
      color: #999;
      input.select {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        background-color: transparent;
        color: transparent;
        border: 0;
        margin: 0;
      }
    }
    .z-month {
      margin: 0;
      border: 0;
      text-align: center;
    }
  }

  .z-calendar-week, .z-calendar-content {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .z-calendar-week { color: #999; padding-top: 10px; padding-bottom: 5px; }
  .z-calendar-week li, .z-calendar-content .z-item {
    float: left;
    width: calc(100% / 7);
    text-align: center;
    display: inline-block;
  }
  .z-calendar-content {
    .z-item-wrap {
      display: inline-block;
      width: $iSize;
      height: $iSize;
      line-height: $iSize - 4;
      border-radius: 50%;
      color: #666;
      position: relative;
      &.active {
        color: #fff;
        background-color: $baseColor;
        .z-pointer {
          background-color: #fff;
        }
      }
    }
    .z-pointer {
      display: inline-block;
      width: $pSize;
      height: $pSize;
      border-radius: 50%;
      position: absolute;
      bottom: 4px;
      left: 50%;
      margin-left: -$pSize / 2;
    }
  }

  .success { background-color: #67C23A; }
  .warning { background-color: #E6A23C; }
  .danger { background-color: #F56C6C; }
  .info { background-color: #909399; }
}
</style>