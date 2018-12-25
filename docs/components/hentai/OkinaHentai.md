# OkinaHentai
[Demo](https://watasi.cn/infozx_api/dist/#/okinaHentai)

## 示例
```vue
<template>
  <div>
  	<okina-hentai ref='okinahentai' />

    <button
      class="mui-btn mui-btn-block base-btn"
      @tap='getData'>获取数据</button>
  </div>
</template>

<script>
import OkinaHentai from '@/components/Hentai/OkinaHentai.vue'
export default {
	created() {
		setTimeout(() => {
			const list = [
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
                      staff: [
                        {
                          id: 101523,
                          title: "嘻嘻哈",
                          image:
                            "http://61.155.203.44:60119/UpLoads/Street/infozx/837720760f1b7d5fcaa530e52331acd8.jpg",
                          desc: "管理员"
                        }
                      ]
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
                  image: "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLlhdCLUxemEvUWxKqQSEx5SDBvUzbgk6Jjk4JvxKXvjicRQlzUQmfsUYLGzYwKSNMXSPKEMuib3RwQ/132 ",
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
              image: "http://61.155.203.44:60119/UpLoads/QiGuan/qiguan/100021/d170983e40a300455d8c740b17898277.jpg?scale=0",
              desc: "人事管理员"
            }
          ]
        }
      ]

      this.$refs.okinahentai.init(list)
		}, 1000)
	},
  methods: {
    getData() {
      console.log(this.$refs.okinahentai.getData())
    }
  },
	components: {
		OkinaHentai
	}
}
</script>
```

## refs
|事件|返回|描述|
|:---:|:---:|:---:|
|init|array|初始化数据，[查看array](#array)|
|getData|object|获取选中数据，[查看object](#object)|

### array
::: tip 提示
array中的项，可以随意添加
:::

|参数名|类型|描述|
|:---:|:---:|:---:|
|id|Number|必须参数|
|title|String|渲染的标题|
|children|Array|渲染的子部门，同[array](#array)|
|staff|Array|渲染的成员列表，[staff](#staff)|

### staff
::: tip 提示
staff中的项，可以随意添加
:::

|参数名|类型|描述|
|:---:|:---:|:---:|
|id|Number|必须参数|
|title|String|渲染的标题|
|image|String|成员头像|
|desc|String|成员描述|

### object
|参数名|类型|描述|
|:---:|:---:|:---:|
|branch|Array|选中的部门，带有`include`标识的，为`包含子部门`|
|exclude|Array|排除哪些人|
|include|Array|包含哪些人|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|back|self|点击返回的回调|
|close|self|点击关闭的回调|
