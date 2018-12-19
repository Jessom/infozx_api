<template>
  <div class="z-vertical-axis-wrap">
    <div
      class="z-vertical-axis-item"
      v-for='(item, ind) in list'
      :key='ind'>
      <div class="z-wrap">
        <!-- 左边 -->
        <div class="z-axis-left">
          <span class="z-time">{{item.leftTitle}}</span>
        </div>   <!-- 左边 -->
        <!-- 右边 -->
        <div class="z-axis-right">
          <div v-if='!item.button'>
            <div class="z-right-to mui-clearfix" v-if='item.desc'>
              <span class="mui-pull-left">{{item.desc.left}}</span>
              <span class="mui-pull-right size14" :style='{color: item.desc.tagColor||"red"}'>{{item.desc.right}}</span>
            </div>
            <div class="content">
              <div @tap='$emit("clickText", item)'>{{item.content.text}}</div>
              <button @tap='$emit("clickContent", item)' :disabled='item.content.disabled' class="mui-btn mui-btn-primary" v-if='item.content.button'>{{item.content.button}}</button>
            </div>
          </div>

          <button @tap='$emit("click", item)' class="mui-btn mui-btn-primary" v-if='item.button'>{{item.button}}</button>
        </div>    <!-- 右边 -->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    /* options: {
      type: Object,
      default: function() { return {} }
    }, */
    list: Array
  },
  methods: {
    click(item) {
      this.$emit('click', item)
    }
  },
  /* computed: {
    opt() {
      let opt = {
        list: []
      }
      return mui.extend({}, opt, this.options)
    }
  } */
}
</script>

<style lang="scss">
@import 'static/common/scss/style.scss';
$timeSize: 30px;  // 左侧小标志的大小
$leftWidth: 60px; // 左侧宽度
.z-vertical-axis-wrap {
  background-color: #fff;
  .z-vertical-axis-item {
    @extend .border-bottom;
    &::after {
      left: 0;
      height: 0;    // 如果需要下划线，请删除该样式
    }
    .z-axis-left {
      width: $leftWidth;
      text-align: center;
    }
    .z-axis-right {
      padding-right: 15px;
    }
    .z-wrap {
      @extend .horizontal;
      width: 100%;
    }
    .z-axis-left::before, .z-axis-left::after {
      content: '';
      position: absolute;
      z-index: 1;
      width: 1px;
      height: 50%;
      left: $leftWidth / 2;
      background-color: #c8c7cc;
      transform: scaleX(0.3);
    }
    .z-axis-left::before { top: 0; }
    .z-axis-left::after { bottom: 0; }
  }
  .z-axis-left, .z-axis-right {
    @extend .horizontal-cell;
    padding: 10px 0;
  }
  .z-axis-right {
    .z-right-to {
      font-size: 1.2rem;
      color: #696969;
    }
    .content .mui-btn{
      padding: 3px 8px;
      font-size: 1.2rem;
      margin-top: 3px;
    }
  }
  .z-axis-left {
    .z-time {
      position: relative;
      z-index: 2;
      display: inline-block;
      width: $timeSize;
      height: $timeSize;
      line-height: $timeSize;
      border-radius: 50%;
      background-color: #e6e6e6;
      color: #363636;
      font-size: 1.2rem;
    }
  }
  .z-vertical-axis-item:last-child {
    .z-axis-left::after { width: 0; }
  }
  .z-vertical-axis-item:first-child {
    .z-axis-left::before { width: 0; }
  }
  .mui-btn-primary {
    background-color: $baseColor;
    border-color: $baseColor;
  }
  /* .z-axis-left { float: left; }
  .z-axis-right { float: right; } */
}
</style>
