<template>
  <div class="z-choise-container">
    <!-- 选择部门 开始 -->
    <itemCom
      :list='branch'
      v-if='isBranch'
      flag='branch'
      icon='icon-zuzhijiagou'
      @onPicker='onPickerBranch'
      @onDelete='onDeleteBranch' />
    <!-- <div class="z-choise-item border-bottom">
      <div class="mui-clearfix">
        <div class="left"><i class="iconfont icon-zuzhijiagou"></i></div>

        <div class="center">
          <span
            class="item"
            v-for='(item, ind) in branch'
            :key='ind'>
            {{item.title}}
            <i class="close-btn iconfont icon-wrong"></i>
          </span>
        </div>
        
        <div class="right" @tap='onPicker($event, "branch")'><i class="iconfont icon-Plus"></i></div>
      </div>
    </div>     -->
    <!-- 选择部门 结束 -->

    <!-- 包含谁 开始 -->
    <itemCom
      :list='include'
      flag='include'
      v-if='isInclude'
      icon='icon-add-user'
      @onPicker='onPickerInclude'
      @onDelete='onDeleteInclude' />
    <!-- <div class="z-choise-item border-bottom">
      <div class="mui-clearfix">
        <div class="left"><i class="iconfont icon-add-user"></i></div>

        <div class="center">
          <span
            class="item"
            v-for='(item, ind) in include'
            :key='ind'>
            {{item.title}}<i class="close-btn iconfont icon-wrong"></i>
          </span>
        </div>
        
        <div class="right" @tap='onPicker($event, "include")'><i class="iconfont icon-Plus"></i></div>
      </div>
    </div> -->    
    <!-- 包含谁 结束 -->

    <!-- 排除谁 开始 -->
    <itemCom
      :list='exclude'
      flag='exclude'
      v-if='isExclude'
      icon='icon-remove-user'
      @onPicker='onPickerExclude'
      @onDelete='onDeleteExclude' />
    <!-- <div class="z-choise-item border-bottom">
      <div class="mui-clearfix">
        <div class="left"><i class="iconfont icon-remove-user"></i></div>

        <div class="center">
          <span
            class="item"
            v-for='(item, ind) in exclude'
            :key='ind'>
            {{item.title}}<i class="close-btn iconfont icon-wrong"></i>
          </span>
        </div>
        
        <div class="right" @tap='onPicker($event, "exclude")'><i class="iconfont icon-Plus"></i></div>
      </div>   
    </div> -->
    <!-- 排除谁 开始 -->

    <branchCom v-if='isBranch' :showInclude='showInclude' :list='reading' @complete='onBranch'/>
    <includeCom v-if='isInclude' :list='reading' @complete='onInclude' />
    <excludeCom v-if='isExclude' :list='excludeData' @complete='onExclude' />
  </div>
</template>

<script>
import branchCom from './Branch.vue'
import includeCom from './Include.vue'
import excludeCom from './Exclude.vue'
import itemCom from './item.vue'
export default {
  data () {
    return {
      reading: [],      // 保存用于选择的数据
      excludeData: [],  // 渲染排除谁

      branch: [],       // 选中的部门
      include: [],      // 包含谁
      exclude: [],      // 排除谁
    }
  },
  methods: {
    clear() {
      this.branch = []
      this.include = []
      this.exclude = []
      this.deepClear(this.list)
    },
    // 递归清除数据
    deepClear() {
      let clearBra = arr => {
        if(arr==undefined || !arr.length) return
        for(let item of arr) {
          if(item.disabled || item.include) {
            item['disabled'] = false
            item['include'] = false
          }
          clearBra(item.children)
        }
      }
      let clearSta = arr => {
        if(arr==undefined || !arr.length) return
        for(let item of arr) {
          if(item.disabled || item.include) {
            item['disabled'] = false
            item['include'] = false
          }
          clearSta(item.staff)
        }
      }
      clearBra(this.list)
      clearSta(this.list)
    },
    getData() {
      return { branch: this.branch, include: this.include, exclude: this.exclude }
    },
    // 点击加号弹出弹框
    onPickerBranch(flag) {
      if(this.include.length) {
        mui.toast('请清除第二行')
        return
      }
      mui(`#z-${flag}-wrap`).popover('toggle')
    },
    onPickerInclude(flag) {
      mui(`#z-${flag}-wrap`).popover('toggle')
    },
    onPickerExclude(flag) {
      if(!this.excludeData.length) {
        mui.toast('请选择部门')
        return
      }
      mui(`#z-${flag}-wrap`).popover('toggle')
    },
    // 删除部门
    onDeleteBranch(item) {
      for(let i in this.branch) {
        if(this.branch[i].id === item.id) {
          this.branch.splice(i, 1)
          this.deepList(this.list, item, item.flag, false)
        }
      }
      this.deepDeleExclude(item)
    },
    // 部门选择完成
    onBranch(obj) {
      for(let item of obj.select) {
        if(this.branch.findIndex(c => c.id === item.id) < 0) {
          this.deepList(this.list, item, obj.flag, true)
          this.branch.push({...item, flag: obj.flag})
          if(obj.flag) {
            console.log('包含子部门')
            this.deepBranch(item.children)
            this.deepChangeExclude(this.excludeData, item, false)
            this.deepChangeExclude(this.list, item, true)
          }
        } else {
          mui.toast('请先删除该部门后再进行选择')
          return
        }
      }
      this.excludeData = this.branch

      this.$emit('complete', { branch: this.branch, include: this.include, exclude: this.exclude })
    },
    // 包含子部门时，递归删除选中的当前部门下的子部门
    deepBranch(arr) {
      if(!arr.length) return
      for(let item of arr) {
        for(let y in this.branch) {
          if(item.id === this.branch[y].id) {
            this.branch.splice(y, 1)
            // this.$set(item, 'disabled', false)
            // this.deepChangeList(this.list, item)
          }
        }
        this.deepBranch(item.children)
      }
    },
    // 包含子部门时，递归改变excludeData数据当前部门下的子部门状态
    deepChangeExclude(arr, item, flag) {
      for(let i of arr) {
        if(i.id === item.id) {
          // this.$set(i, 'disabled', false)
          console.log(flag)
          i['disabled'] = flag
          i['include'] = flag
          let run = (a) => {
            for(let y of a) {
              if(y.disabled || y.include) {
                y['disabled'] = false
                y['include'] = false
                // this.$set(y, 'disabled', false)
              }
              run(y.children)
            }
          }
          run(i.children)
        } else {
          this.deepChangeExclude(i.children, item, flag)
        }
      }
    },
    // 递归list，修改是否包含子部门，是否选中了部门
    deepList(arr, item, flag, d) {
      for(let i of arr) {
        if(i.id === item.id) {
          if(flag) {
            this.$set(i, 'include', d)
          }
          this.$set(i, 'disabled', d)
        }
        this.deepList(i.children, item, flag, d)
      }
    },
    // 删除部门时，首先获取当前部门下所有成员，然后判断删除
    deepDeleExclude(arr) {
      let a = []
      for(let item of arr.staff) {
        a.push(item)
      }
      for(let item of arr.children) {
        for(let i of item.staff) {
          a.push(i)
        }
      }
      for(let item of a) {
        for(let i in this.exclude) {
          if(this.exclude[i].id === item.id) {
            this.exclude.splice(i, 1)
          }
        }
      }
      /* if(arr === undefined || !arr.length) return

      for(let item of arr) {
        for(let i in this.exclude) {
          if(item.id === this.exclude[i].id) {
            this.exclude.splice(i, 1)
          }
        }
        this.deepDeleExclude(item.children)
      } */
    },
    // 删除 包含谁
    onDeleteInclude(item) {
      for(let i in this.include) {
        if(this.include[i].id === item.id) {
          this.include.splice(i, 1)
        }
      }
    },
    // 删除 排除谁
    onDeleteExclude(item) {
      for(let i in this.exclude) {
        if(this.exclude[i].id === item.id) {
          this.exclude.splice(i, 1)
        }
      }
    },
    // 包含谁 选择完成
    onInclude(obj) {
      for(let item of obj.select) {
        if(this.include.findIndex(c => c.id === item.id) < 0) {
          this.include.push({ ...item})
        }
      }
      this.$emit('complete', { branch: this.branch, include: this.include, exclude: this.exclude })
    },
    // 排除谁 选择完成
    onExclude(obj) {
      for(let item of obj.select) {
        if(this.exclude.findIndex(c => c.id === item.id) < 0) {
          this.exclude.push({ ...item })
        }
      }
      this.$emit('complete', { branch: this.branch, include: this.include, exclude: this.exclude })
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
  props: {
    list: Array,
    showInclude: {
      type: Boolean,
      default: true
    },
    isBranch: {
      type: Boolean,
      default: true
    },
    isInclude: {
      type: Boolean,
      default: true
    },
    isExclude: {
      type: Boolean,
      default: true
    }
  },
  components: {
    branchCom,
    includeCom,
    excludeCom,
    itemCom
  }
}
</script>

<style lang="scss">
@import './pick.scss';
.z-choise-container {
  background-color: #fff;
  .mui-clearfix { position: relative; }
  .z-choise-item {
    padding: 10px 0;
    .left, .right {
      width: 50px;
      text-align: center;
      position: absolute;
      top: 0;
      height: 100%;
      // min-height: 29px;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: #c8c7cc;
        transform: scaleX(.3);
      }
      .iconfont { position: absolute; top: 50%; transform: translate3d(-50%, -50%, 0); }
    }
    .left { left: 0; .iconfont { color: #898989; } }
    .right { right: 0; .iconfont { color: #666; } }
    .left::after { right: 0; }
    .right::after { left: 0; }
    .center {
      width: calc(100% - 100px);
      display: inline-block;
      padding: 0 6px;
      margin: 0 50px;
    }
    .item {
      display: inline-block;
      padding: 1px 5px;
      border: 1px solid #c8c7cc;
      border-radius: 2px;
      font-size: 1.2rem;
      margin: 2px 4px;
      position: relative;
      .close-btn {
        position: absolute;
        right: -6px;
        top: -10px;
        font-size: 1.2rem;
      }
    }
  }
  .gray-bg {
    background-color: #f3f3f3;
    color: #696969;
  }
}
</style>
