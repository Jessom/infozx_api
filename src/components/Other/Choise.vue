<template>
  <div class="z-choise-container">
    <!-- <p class="size12 plr015 grey-color">为了不浪费您的时间，请按顺序操作，谢谢</p> -->
    <!-- 部门 -->
    <div class="z-choise-item border-bottom" v-if='opt.belong'>
      <div class="mui-clearfix">
        <div class="left"><i class="iconfont icon-zuzhijiagou"></i></div>

        <div class="center">
          <span class="item" v-for='(item, ind) in belong' :key='ind'>
            {{item.title}}
            <i class="close-btn iconfont icon-wrong" @tap='belongDele($event, item)'></i>
          </span>
        </div>
        
        <div class="right" @tap='onBelong($event)'><i class="iconfont icon-Plus"></i></div>
      </div>
    </div>

    <!-- 加人 -->
    <div class="z-choise-item border-bottom" v-if='opt.staff'>
      <div class="mui-clearfix">
        <div class="left"><i class="iconfont icon-add-user"></i></div>

        <div class="center">
          <span class="item" v-for='(item, ind) in staffs' :key='ind'>
            {{item.title}}<i class="close-btn iconfont icon-wrong" @tap='staffDele($event, item)'></i>
          </span>
        </div>
        
        <div class="right" @tap='onUser($event)'><i class="iconfont icon-Plus"></i></div>
      </div>
    </div>

    <!-- 排除人 -->
    <div class="z-choise-item border-bottom" v-if='opt.exclude'>
      <div class="mui-clearfix">
        <div class="left"><i class="iconfont icon-remove-user"></i></div>

        <div class="center">
          <span class="item" v-for='(item, ind) in exclude' :key='ind'>
            {{item.title}}<i class="close-btn iconfont icon-wrong" @tap='excludeDele($event, item)'></i>
          </span>
        </div>
        
        <div class="right" @tap='onExclude($event)'><i class="iconfont icon-Plus"></i></div>
      </div>
    </div>

    <choise-belong :list='belongs' :options='opt' @onSuccess='belongSucc' v-if='opt.belong' />
    <choise-user :list='users' @onSuccess='staffSucc' v-if='opt.staff' />
    <!-- <choise-user id='z-choise-exclude' :list='belong' @onSuccess='excludeSucc' v-if='opt.staff' /> -->
    <choise-exclude :list='belong' @onSuccess='excludeSucc' v-if='opt.exclude' />
    
  </div>
</template>

<script>
import ChoiseBelong from './ChoiseBelong.vue'
import ChoiseUser from './ChoiseUser.vue'
import ChoiseExclude from './ChoiseExclude.vue'
export default {
  data () {
    return {
      belong: [],     // 保存选中的部门
      staffs: [],     // 保存选中的员工
      exclude: [],    // 被排除的人

      users: [],      // 计算出渲染选择的员工数据
      belongs: [],    // 计算出渲染选择的部门数据
    }
  },
  props: {
    list: Array,
    options: {
      type: Object,
      default: function() { return {} }
    }
  },
  computed: {
    opt() {
      let opt = {
        exclude: true,
        belong: true,
        staff: true,
        include: true,      // 是否显示包含子部门的按钮
      }
      return Object.assign({}, opt, this.options)
    }
  },
  watch: {
    list(val) {
      this.users = JSON.parse(JSON.stringify(val))
      this.belongs = JSON.parse(JSON.stringify(val))
    },
  },
  methods: {
    // 提供外部使用，通过ref调用该方法，获取选择信息
    getData() {
      return { belong: this.belong, staff: this.staffs, exclude: this.exclude }
    },
    // 添加部门
    onBelong(e) {
      if(this.staffs.length) {
        mui.toast('请先清空第二行，谢谢')
        return
      }
      mui('#z-choise-belong').popover('toggle')
    },
    // 添加用户
    onUser(e) {
      mui('#z-choise-user').popover('toggle')
    },
    // 选择部门
    belongSucc(obj) {
      for(let item of obj.branch) {
        if(this.belong.findIndex(c => c.id === item.id) < 0) {
          this.belong.push({...item, include: obj.flag})
          // this.$set(item, 'disabled', true)
          // this.deepBelongs(this.belongs, item, true)
          this.deepUsers(this.users, item, true)
          this.onBranch(this.belong, true)
        }
      }
      // 选中部门长度小于等于1，没必要执行递归
      if(this.belong.length > 1) {
        this.deepBelong(this.belong)
      }
    },
    // 删除部门
    belongDele(e, item) {
      // this.deepBelongs(this.belongs, item, false)
      
      this.deepExclude([item])
      this.onBranch([item], false)
      this.belong.splice(this.belong.findIndex(c => c.id === item.id), 1)
      this.deepUsers(this.users, item, false)

    },
    // 选择员工
    staffSucc(obj) {
      for(let item of obj) {
        if(this.staffs.findIndex(c => c.id === item.id) < 0) {
          this.staffs.push(item)
        }
      }
    },
    // 删除员工
    staffDele(e, item) {
      this.staffs.splice(this.staffs.findIndex(c => c.id === item.id), 1)
    },
    // 要排除谁
    onExclude(e) {
      if(!this.belong.length) {
        mui.toast('请先选择部门')
        return 
      }
      mui('#z-choise-exclude').popover('toggle')
    },
    // 选择排除的人
    excludeSucc(obj) {
      for(let item of obj) {
        if(this.exclude.findIndex(c => c.id === item.id) < 0) {
          this.exclude.push(item)
        }
      }
    },
    // 删除排除的人
    excludeDele(e, item) {
      this.exclude.splice(this.exclude.findIndex(c => c.id === item.id), 1)
    },
    // 递归删除belong中已包含当前选中部门的部门
    deepBelong(arr) {
      if(!arr.length) return
      for(let item of arr) {
        if(!item.include) {     // 当前选中部门必须满足包含子部门的条件
          for(let i in this.belong) {
            if(i.id === item.id) continue
            
            for(let y in item.children) {
              if(item.children[y].id === this.belong[i].id) {
                this.belong.splice(i, 1)
                // 删除后重新执行该方法，避免错过
                this.deepBelong(this.belong)
                return
              }
            }
          }
        }
        this.deepBelong(item.children)
      }
    },
    // 递归设置已选部门下属部门是否可选
    deepBelongs(arr, item, flag) {
      if(!arr.length) return

      for(let i of arr) {
        if(item === true) {
          this.$set(i, 'disabled', flag)
        }
        if(i.id === item.id) {
          this.$set(i, 'disabled', flag)
        }
        this.deepBelongs(i.children, true, flag)
      }
    },
    // 递归设置当前数据是否可选
    deepUsers(arr, item, flag) {
      for(let obj of arr) {
        if(obj.id === item.id) {
          // 规避Vue不能检测属性变化
          this.$set(obj, 'disabled', flag)

          // 解决深层部门 disabled不变化问题
          this.deepSet(obj.children, flag)
        } else {
          this.deepUsers(obj.children, item, flag)
        }
      }
    },
    // 递归改变深层部门 disabled
    deepSet(arr, flag) {
      if(!arr.length) return

      for(let item of arr) {
        this.$set(item, 'disabled', flag)

        this.deepSet(item.children, flag)
      }
    },
    // 递归删除不包含的人员
    deepExclude(arr) {
      if(!arr.length) return

      for(let item of arr) {
        if(item.staff.length) {
          for(let i of item.staff) {
            // this.exclude.splice(this.exclude.findIndex(c => c.id === i.id), 1)
            for(let y in this.exclude) {
              if(this.exclude[y].id === i.id) {
                this.exclude.splice(y, 1)
              }
            }
          }
        }
        this.deepExclude(item.children)
      }
    },
    onBranch(arr, flag) {
      for(let item of arr) {
        if(item.include === 1) {      // 不包含子部门
          for(let i of item.children) {
            console.log(i)
            this.$set(i, 'disabled', flag)
          }
        }
      }
    }
  },
  components: {
    ChoiseBelong,
    ChoiseUser,
    ChoiseExclude
  }
}
</script>

<style lang="scss">
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
