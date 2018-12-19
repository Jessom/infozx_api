<template>
	<div class="container">
		<Picker :list='list' ref='picker' />
    <button class="mui-btn mui-btn-block" @tap='test'>测试</button>
	</div>
</template>

<script>
import Picker from "@/components/DoubleHit/Picker.vue";
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
