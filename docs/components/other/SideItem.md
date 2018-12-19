# SideItem
[Demo](http://watasi.gitee.io/infozx_api/dist/#/sideItem)
> 侧滑面板内容

## 示例
```vue{20}
<template lang="html">
  <div class="container">
		<div style="padding:15px;">
			<button class="con mui-btn mui-btn-block mui-btn-primary" @tap='test'>点我</button>
			
		</div>
		
		<!-- 有内容 -->
  	<side-panel>
  		<side-item
  			:options='options'
  			@onSide='onSide'
  			@onBasic='onBasic' />
  	</side-panel>
	</div>
</template>

<script>
import SidePanel from '@/components/Other/SidePanel.vue'
import SideItem from '@/components/Other/SideItem.vue'
export default {
	data() {
		return {
			options: {
				active: {},
				list: [{
					id: 1,
					title: '年龄'
				}, {
					id: 2,
					title: '姓名'
				}, {
					id: 3,
					title: '身高'
				}, {
					id: 4,
					title: '体重'
				}]
			}
		}
	},
	methods: {
		test() {
			mui('#sideslipContainer').popover('toggle')
		},
		// side item cell click event
		onSide(obj) {
			this.options.active = obj
		},
		// side item button click event
		onBasic(obj) {
			console.log(this.options.active) 	// 选择项
			if(obj.title === '确定'){
				alert(this.options.active.title)
			}
			this.test() 		// 关闭侧滑
		}
	},
	components: {
		SidePanel,
		SideItem
	}
}
</script>

<style lang="scss">

</style>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|
|btns|Object|-|按钮组，[BasicButton组件](../button/BasicButton)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|style|String|col-3|显示方式，取值`空`随便、`col-1`一排一个、`col-2`一排两个、`col-3`一排三个|
|showbtn|Boolean|true|是否显示按钮|
|ellipsis|Boolean|true|文字超出显示三个点|
|active|Object|{}|选中项|
|list|Array|-|渲染数据，[查看list](#list)|

### list
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|-|渲染文本|

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onSide|{title}|渲染数据被点击事件|
|onBasic|{title, [icon]}|按钮点击事件，[BasicButton组件](../button/BasicButton)|