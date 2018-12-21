# Fgroup(通讯录组件)
[Demo](https://watasi.cn/infozx_api/dist/#/fgroup)

```html
<link rel="stylesheet" href="../static/common/mui/css/mui.indexedlist.css">
<script src="../static/common/mui/js/mui.indexedlist.js" charset="utf-8"></script>
```

## 示例
```vue{12}
<template>
	<div style="height:100%;">
		<Fgroup
			:options='fgopt'
			@onCell='onCell'
			@onInput='onInput'
			@onEntry='onEntry' />
	</div>
</template>

<script>
import Fgroup from '@/components/Other/Fgroup.vue'
export default {
	data() {
		return {
			fgopt: {
				list: [{
					group: '赵',
					child: [{
						name: '赵四',
						des: '项目经理',
						image: ''
					}, {
						name: '赵日天',
						des: '也是项目经理',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3493430853,691568102&fm=27&gp=0.jpg'
					}]
				}, {
					group: '钱',
					child: [{
						name: '钱学森',
						des: '项目经理',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=850512523,620632321&fm=27&gp=0.jpg'
					}, {
						name: '钱天',
						des: '也是项目经理',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3493430853,691568102&fm=27&gp=0.jpg'
					}]
				}, {
					group: '孙',
					child: [{
						name: '孙大圣',
						des: '项目经理',
						image: ''
					}, {
						name: '孙悟空',
						des: '也是项目经理',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3493430853,691568102&fm=27&gp=0.jpg'
					}, {
						name: '孙子',
						des: '也是项目经理',
						image: ''
					}]
				}, {
					group: '王',
					child: [{
						name: '王麻子',
						des: '项目经理',
						image: ''
					}, {
						name: '王五',
						des: '也是项目经理',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3493430853,691568102&fm=27&gp=0.jpg'
					}]
				}, {
					group: '冯',
					child: [{
						id: 1,
						name: '冯小刚',
						des: '项目经理',
						image: ''
					}, {
						name: '冯巩',
						des: '也是项目经理',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3493430853,691568102&fm=27&gp=0.jpg'
					}]
				}],
				barList: ['赵','钱','孙','李','周','吴','郑','王','冯','陈','楚','卫','午','马','未','羊']
			}
		}
	},
	methods: {
		onCell(obj) {
			console.log(obj)
		},
		onInput(val) {
			console.log(val)
		},
		onEntry(val) {
			console.log(val)
		}
	},
	components: {
		Fgroup
	}
}
</script>

<style lang='scss'>
</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|barList|Array|['A','B'...'Z']|左边的快捷选项|
|list|Array|-|渲染数据, [查看list](#list)|
|placeholder|String|我要找...|搜索框提示文字|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|group|String|-|组，快捷选项根据该字段快速定位|
|child|Array|-|该组下的数据, [查看child](#child)|

### child
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|name|String|-|上面的大字|
|des|String|-|下面的小字|
|image|String|-|图片url，没有的话，默认显示`name`的第一个字符|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onCell|{name,des,image}|cell点击事件|
|onInput|val|搜索框输入事件|
|onEntry|val|搜索框回车事件|
