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
	data () {
		return {
		}
	},
	methods: {
		async onEditorSuccess(e) {
			for(let item of e.ops) {
				if(item.insert.image) {		// 判断是否是图片
					if(item.insert.image.indexOf('data:image') >= 0) {		// 判断图片是否上传过了
						let res = await upload({ base64: item.insert.image, scale: 1 }, 'test')
						item.insert.image = `${config.IMG_URL}${res.url}`		// 替换图片url
					}
				}
			}
			// 只需将`e`存入数据库即可
			console.log(e)
		},
		// 编辑器初始化完成后，设置需要编辑的内容
		onEditorReady(e) {
			e.setContents({"ops":[{"insert":"jsdafls\nasdljf\n"},{"attributes":{"color":"#fab410"},"insert":"ajsfdsa爱上的联发科"},{"insert":"\n拉时代峰峻"},{"attributes":{"list":"ordered"},"insert":"\n"},{"insert":"阿斯顿减肥了"},{"attributes":{"list":"ordered"},"insert":"\n"},{"insert":"埃斯蒂拉克就发"},{"attributes":{"list":"ordered"},"insert":"\n"},{"insert":"氨基酸的反馈\n啊拉开圣诞节发啦家连锁店\n"}]})
		},
		// 编辑状态返回事件，e是quill编辑器对象
		onQuillBack(e) {
			console.log(e)
			e.deleteText(0, e.getLength())
		}
	},
	components: {
		quillEditor
	}
}
</script>

<style lang="scss">
</style>