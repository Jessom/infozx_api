# AvatarCell
[Demo](http://watasi.gitee.io/infozx_api/dist/#/avatarCell)

## 示例
``` vue{18}
<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div>
				<avatar-cell :options='lavaOptions' @onAvatarClick='onAvatarClick' />
			</div>
			<div>
				<avatar-cell :options='lavaOptions2' @onAvatarClick='onAvatarClick' />
			</div>
			<div>
				<avatar-cell :options='lavaOptions3' @onAvatarClick='onAvatarClick' />
			</div>
		</div>
	</div>
</template>

<script>
import AvatarCell from '@/components/Cell/AvatarCell.vue'
export default {
	data() {
		return {
			lavaOptions: {
				transparent: true,
				showMenu: false,
				showRightNav: true,
				showHead: true,
				data: {
					flag: 1,
					name: 'わタし',
					desc: '一个小小的sign',
					avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg',
					title: 'normal'
				}
			},
			lavaOptions2: {
				transparent: true,
				showMenu: false,
				showRightNav: true,
				showHead: true,
				normal: false,
				avatarPos: 'right',
				data: {
					flag: 2,
					name: 'わタし',
					desc: '一个小小的sign',
					avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg',
					title: '!normal'
				}
			},
			lavaOptions3: {
				transparent: true,
				showMenu: false,
				showRightNav: true,
				showHead: true,
				theme: false,
				isRadius: false,
				data: {
					flag: 3,
					name: 'わタし',
					desc: '一个小小的sign',
					avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg',
					title: 'black on white'
				}
			}
		}
	},
	methods: {
		onAvatarClick(obj) {
			alert(`点击了等${obj.flag}个`)
		}
	},
	components: {
		AvatarCell
	}
}
</script>

<style lang="sass">

</style>
```
## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|options|Object|-|配置参数, [查看options详情](#options)|

### options
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|isRadius|Boolean|true|图片是否以圆形显示|
|normal|Boolean|true|是否是正常大小, `false`会增加外容器`paddingTop`,`paddingBottom`10像素|
|showRightNav|Boolean|true|是否显示右侧小箭头|
|showAvatar|Boolean|true|是否显图片|
|avatarPos|String|left|图片显示位置, 默认`left`, 当该值为`right`时, 右侧小箭头不会显示|
|theme|Boolean|true|是否使用主题色背景，默认白色背景|
|showHead|Boolean|false|是否显示头部|
|data|Object|-|渲染数据对象, [查看data详情](#data)|

### data
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|name|String|-|主要显示的内容|
|desc|String|-|描述性信息|
|avatar|String|-|图片url|
|title|String|-|`showHead`为`true`有效, 头部标题|
|icon|String|icon-jiantouyou|`showHead`为`true`有效, 右侧菜单按钮图标|
|text|String|-|`showHead`为`true`有效, 右侧提示文字|
> ** 注: ** `desc`只会显示一行

## events
|事件|参数|说明|
|:---:|:---:|:---:|
|onAvatarClick|{title,desc,avatar}|点击事件|
