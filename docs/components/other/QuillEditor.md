# QuillEditor
[Demo](http://watasi.gitee.io/infozx_api/dist/#/quillEditor.html)
> 富文本编辑器

```bash
cnpm install vue-quill-editor --save
```

## 示例
```vue{11}
<template>
	<div class="container">
		<quillEditor
			@onEditorSuccess='onEditorSuccess'
			@onQuillBack='onQuillBack'
			@onEditorReady='onEditorReady' />
	</div>
</template>

<script>
import quillEditor from '@/components/Other/QuillEditor.vue'
import { upload } from '@/common/js/utils'
export default {
	methods: {
		// 编辑完成，存入数据库
		async onEditorSuccess(inner) {
			for(let item of inner.ops) {
				if(item.insert.image) {		// 判断是否是图片
					if(item.insert.image.indexOf('data:image') >= 0) {		// 判断图片是否上传过了
						let res = await upload({ base64: item.insert.image, scale: 1 }, 'test')
						item.insert.image = `${config.IMG_URL}${res.url}`		// 替换图片url
					}
				}
			}

			// 只需将`inner`存入数据库即可
			console.log(inner)
		},

		// 编辑器初始化完成后，设置需要编辑的内容
		onEditorReady(quill) {
			quill.setContents({"ops":[{"insert":"jsdafls\nasdljf\n"},{"attributes":{"color":"#fab410"},"insert":"ajsfdsa爱上的联发科"},{"insert":"\n拉时代峰峻"},{"attributes":{"list":"ordered"},"insert":"\n"},{"insert":"阿斯顿减肥了"},{"attributes":{"list":"ordered"},"insert":"\n"},{"insert":"埃斯蒂拉克就发"},{"attributes":{"list":"ordered"},"insert":"\n"},{"insert":"氨基酸的反馈\n啊拉开圣诞节发啦家连锁店\n"}]})
		},

		// 编辑状态返回事件，e是quill编辑器对象
		onQuillBack(quill) {
			// 删除编辑器内的所有内容
			quill.deleteText(0, quill.getLength())
		}
	},
	components: {
		quillEditor
	}
}
</script>

<style lang="scss">
</style>
```

## 渲染
```vue{6}
<template>
  <div id='editor-wrap'></div>
</template>

<script>
import Quill from "quill"   // 在执行`cnpm install vue-quill-editor --save`的时候，已经安装了该依赖
export default {
  mounted() {
    const quill = new Quill('#editor-wrap', { readOnly: true })
    // setContents的参数为后台获取到的内容
    quill.setContents({"ops":[{"insert":"jsdafls\nasdljf\n"},{"attributes":{"color":"#fab410"},"insert":"ajsfdsa爱上的联发科"},{"insert":"\n拉时代峰峻"},{"attributes":{"list":"ordered"},"insert":"\n"},{"insert":"阿斯顿减肥了"},{"attributes":{"list":"ordered"},"insert":"\n"},{"insert":"埃斯蒂拉克就发"},{"attributes":{"list":"ordered"},"insert":"\n"},{"insert":"氨基酸的反馈\n啊拉开圣诞节发啦家连锁店\n"}]})
  }
}
</script>
```

## props
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|title|String|活动编辑|header上的文字|
|editoropt|Object|{placeholder: '请输入内容', modules: { toolbar: [ [{ header: 1 }, { header: 2 }], [{ 'color': color }, { 'background': color }], [{ list: "ordered" }, { list: "bullet" }],["image", "video"] ] }}|编辑器配置信息，[点我查看](https://quilljs.com/docs/quickstart/)|

## events
[点击查看更多API](https://quilljs.com/docs/quickstart/)

|事件|参数|说明|
|:---:|:---:|:---:|
|onEditorSuccess|{ops}|点击右上角`确定`按钮事件，返回编辑内容|
|onEditorChange|{html, quill, text}|编辑事件，编辑器编辑了内容|
|onEditorReady|quill|编辑器初始化完成，在这里设置后台返回的内容|
|onQuillBack|quill|返回事件|
