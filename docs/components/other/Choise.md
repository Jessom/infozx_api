# Choise
[Demo](http://infozx.gitee.io/infozx_temp/dist/module/choise.html)

## 示例
```vue{9}
<template>
	<div>
		<Choise
			:list='list' />
	</div>
</template>

<script>
import Choise from '@/components/Other/Choise.vue'
export default {
	data() {
		return {
			list: []
		}
	},
  created () {
    setTimeout(() => {
      this.list = [{
				id: 1,
				title: '安得集团',
				staff: [],
				children: [{
					id: 2,
					title: '设计部',
					staff: [{
						id: 1,
						title: '张三',
						image: '',
						desc: '设计师'
					}, {
						id: 2,
						title: '李四',
						image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=586574978,3261086036&fm=27&gp=0.jpg',
						desc: '设计师'
					}],
					children: [{
						id: 3,
						title: '设计一组',
						staff: [{
							id: 3,
							title: '王五',
							image: '',
							desc: '设计师'
            }],
            children: []
					}]
				}]
			}, {
				id: 4,
				title: '中系科技',
				staff: [],
				children: [{
					id: 5,
					title: '市场部',
					staff: [{
						id: 4,
						title: '白旭',
						image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1137298932,366992998&fm=27&gp=0.jpg',
						desc: '市场经理'
					}, {
						id: 5,
						title: '钱斌',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1810152264,2923293270&fm=27&gp=0.jpg',
						desc: '业务员'
					}, {
						id: 6,
						title: '陈德文',
						image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3466222248,28477086&fm=27&gp=0.jpg',
						desc: '业务员'
					}, {
						id: 7,
						title: '吴永健',
						image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4184649264,700756858&fm=27&gp=0.jpg',
						desc: '业务员'
					}],
					children: []
				}, {
					id: 6,
					title: '研发部',
					staff: [{
						id: 8,
						title: '李敏敏',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=782046930,1105099424&fm=27&gp=0.jpg',
						desc: 'Android工程师'
					}, {
						id: 9,
						title: '张田田',
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3349769256,2152079369&fm=27&gp=0.jpg',
						desc: 'IOS工程师'
					}, {
						id: 10,
						title: '苏霞',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=790506092,2369397687&fm=27&gp=0.jpg',
						desc: '前端工程师'
					}, {
						id: 11,
						title: 'わタし',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2993379943,3296388548&fm=27&gp=0.jpg',
						desc: '前端工程师'
					}],
					children: []
				}]
			}]
    }, 300)
  },
	components: {
		Choise,
	}
}
</script>

<style lang='scss'>
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数，[查看信息](#options)|
|list|Array|-|渲染数据, [查看list详情](#list)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|belong|Boolean|true|是否显示选择部门|
|staff|Boolean|true|是否显示选择成员|
|exclude|Boolean|true|是否显示选择排除谁|
|include|Boolean|true|是否显示包含子部门按钮|

### list
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
|getData|{belong, staff, exclude}|获取选择信息|

- belong: [{children, id, staff, title, include}]
	- include: **0 为包含子部门，1 为不包含子部门**
