<template>
  <div>
    <canvas id='canvas' :height="opt.height"></canvas>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      mousePressed: false,
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    opt() {
      let opt = {
        background: '#fff',
        lineWidth: 1,
        lineColor: '#000000',
        height: 200
      }
      return mui.extend({}, opt, this.options)
    }
  },
  mounted() {
    this.lastX, this.lastY
    this.canvas = document.querySelector('#canvas')
    this.canvas.width = window.screen.width
    this.ctx = this.canvas.getContext('2d')
    this.setBackground();
    this.init()
  },
  methods:{
    init() {
      const self = this
      // 点击屏幕
      self.canvas.addEventListener('touchstart', function (event) {
        if (event.targetTouches.length == 1) {
          event.preventDefault();
          const touch = event.targetTouches[0];
          self.mousePressed = true;
          self.draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, false);
        }
      }, false);

      // 在屏幕上移动
      self.canvas.addEventListener('touchmove', function (event) {
        if (event.targetTouches.length == 1) {
          event.preventDefault();
          const touch = event.targetTouches[0];
          if(self.mousePressed) {
            self.draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, true);
          }
        }
      }, false);

      // 手指离开屏幕
      self.canvas.addEventListener('touchend', function (event) {
        if (event.targetTouches.length == 1) {
          event.preventDefault();
          // const touch = event.targetTouches[0];
          self.mousePressed = false;
        }
      }, false);
    },
    // 绘制内容
    draw(x, y, isDown) {
      if(isDown) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.opt.lineColor;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.lineJoin = "round";
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(x, y);
        this.ctx.closePath();
        this.ctx.stroke();
      }
      this.lastX = x
      this.lastY = y
    },
    // 清除 flag是否渲染提示文字
    clear() {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.setBackground();
    },
    save(type='image/jpeg') {
      // this.image = this.canvas.toDataURL("");
      return this.canvas.toDataURL(type);
    },
    // 绘制canvas背景色
    setBackground() {
      this.ctx.fillStyle = this.opt.background;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
</script>
 
<style lang='scss'>
</style>