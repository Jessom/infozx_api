# DoubleHit
[Demo](http://watasi.gitee.io/infozx_api/dist/#/doubleHit.html)

::: danger 严重警告
这是一个比较`ド へんたい`的东西；因为内部使用了较多的`递归`，所以你应该懂了
:::

## 功能介绍
组件有三行
- 第一行`选择部门`
- 第二行`根据所选部门，从没选的部门中选择包含哪些成员`
- 第三行`根据所选部门，从选择的部门中选择排除哪些成员`

## 示例
```vue{9}
<template>
	<div class="container">
		<Picker :list='list' ref='picker' />
    <button class="mui-btn mui-btn-block" @tap='test'>测试</button>
	</div>
</template>

<script>
import Picker from "@/components/DoubleHit/Picker.vue"
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    setTimeout(() => {
      this.list = [
        {
          id: 27,
          title: "研发部",
          readRight: 3,
          children: [],
          staff: [
            {
              id: 100006,
              title: "曹成学",
              image:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLv3zmjYMzwQsiac56K54ibicRRM5Mmjg85bfA3CFwpQvFLClbvibz0tBaYXhJmTudln7B3ibxnX0a7Cow/132 ",
              desc: "超级管理员"
            },
            {
              id: 100023,
              title: "苏霞",
              image:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ79diaft3MIfUGPRmHxlVWxicFjt9vnXGd6X4UYHqXWqqf9FUWeialxx60JkSbibDmDUW00DenibvICGA/132 ",
              desc: "开发者"
            },
            {
              id: 100021,
              title: "张田田",
              image:
                "http://61.155.203.44:60119/UpLoads/QiGuan/qiguan/100021/d170983e40a300455d8c740b17898277.jpg?scale=0 ",
              desc: "开发者"
            },
            {
              id: 100019,
              title: "沈静敏",
              image:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIWd4ibJ7fygdc39QL27ge8pV0ZZYic3NJ5oetMciavc7dkHH5xTHdxbjib5wriclEsxhtDmJgMmqve2jQ/132 ",
              desc: "开发管理员"
            },
            {
              id: 100017,
              title: "李敏敏",
              image:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJJnZD5eg0KBVstg7HFPp2Q5VvVnGczm7GQsYv70cg1TTG7ZBVYicJPvsrIYzU0WoJGT5MSPRKzKOg/132 ",
              desc: "开发管理员"
            },
            {
              id: 100015,
              title: "张勇",
              image:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLlhdCLUxemEvUWxKqQSEx5SDBvUzbgk6Jjk4JvxKXvjicRQlzUQmfsUYLGzYwKSNMXSPKEMuib3RwQ/132 ",
              desc: "开发者"
            }
          ]
        },
        {
          id: 1,
          title: "安得装饰",
          readRight: 3,
          children: [
            {
              id: 3,
              title: "园区店",
              depId: 1,
              isEnable: true,
              describe: "园区门店",
              children: [
                {
                  id: 9,
                  title: "设计一部",
                  depId: 3,
                  isEnable: true,
                  describe: "设计师",
                  children: [],
                  staff: []
                },
                {
                  id: 5,
                  title: "市场一部",
                  depId: 3,
                  isEnable: true,
                  describe: "市场营销",
                  children: [
                    {
                      id: 17,
                      title: "一组",
                      depId: 5,
                      isEnable: true,
                      describe: "市场",
                      children: [],
                      staff: []
                    }
                  ],
                  staff: []
                }
              ],
              staff: []
            },
            {
              id: 2,
              title: "新区店",
              depId: 1,
              isEnable: true,
              describe: "新区店",
              children: [
                {
                  id: 14,
                  title: "市场一部",
                  depId: 2,
                  isEnable: true,
                  describe: "市场部",
                  children: [
                    {
                      id: 16,
                      title: "二小组",
                      depId: 14,
                      isEnable: true,
                      describe: "小组",
                      children: [],
                      staff: []
                    },
                    {
                      id: 15,
                      title: "一小组",
                      depId: 14,
                      isEnable: true,
                      describe: "小组",
                      children: [],
                      staff: []
                    }
                  ],
                  staff: []
                },
                {
                  id: 13,
                  title: "设计一中心",
                  depId: 2,
                  isEnable: true,
                  describe: "设计师",
                  children: [],
                  staff: []
                },
                {
                  id: 12,
                  title: "设计二中心",
                  depId: 2,
                  isEnable: true,
                  describe: "设计师",
                  children: [],
                  staff: []
                }
              ],
              staff: [
                {
                  id: 100003,
                  title: "张测测",
                  image: "http://wx.baojiashi.cn/static/images/avatar.jpg ",
                  desc: "人事管理员"
                }
              ]
            }
          ],
          staff: [
            {
              id: 100017,
              title: "李敏敏",
              image:
                "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJJnZD5eg0KBVstg7HFPp2Q5VvVnGczm7GQsYv70cg1TTG7ZBVYicJPvsrIYzU0WoJGT5MSPRKzKOg/132 ",
              desc: "开发管理员"
            },
            {
              id: 100003,
              title: "张测测",
              image: "http://wx.baojiashi.cn/static/images/avatar.jpg ",
              desc: "人事管理员"
            }
          ]
        }
      ];
    }, 50);
  },
  methods: {
    test() {
      console.log(this.$refs.picker.getData())
    }
  },
  components: {
    Picker
  }
};
</script>

<style lang="scss">
.container {
}
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|list|Array|-|渲染数据, [查看list详情](#list)|
|showInclude|Boolean|true|选择时，是否可以包含子部门|
|isBranch|Boolean|true|是否选中部门|
|isInclude|Boolean|true|是否选中包含谁|
|isExclude|Boolean|true|是否选中排除谁|

### list
::: warning 必须参数
**注意：** 请不要出现`include`、`disabled`、`flag`字段，这俩字段，在操作数据时会发生改变
:::

|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|部门名|
|id|Number|-|就是id|
|staff|Array|-|员工|
|children|Array|-|子部门|

### staff
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|员工名|
|id|Number|-|就是id|
|desc|String|-|员工描述信息|
|image|String|-|头像url|

### children
同[list](#list)

## refs
|事件|参数|说明|
|:---:|:---:|:---:|
|getData|{branch, exclude, include}|获取选择信息|
|clear|-|清除选中信息|

- belong: [{children, id, staff, title, flag}]
	- flag: `true`为包含子部门，`false`为不包含子部门

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|complete|{branch, exclude, include}|点击确定按钮后的回调|
