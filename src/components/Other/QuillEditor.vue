<template lang="html">
	<div class="quill-container">
		<header class="mui-bar mui-bar-nav">
			<a class="quill-back-btn mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">{{title}}</h1>
			<a class="mui-btn mui-btn-link mui-pull-right" @tap='editorSuccess'>确定</a>
		</header>

		<quillEditor
			ref='quilleditor'
			v-model='content'
			:options='quilloptions'
			@focus="onEditorFocus($event)"
			@ready="onEditorReady($event)"
			@change="onEditorChange($event)" />

		<input type="file" class='z-file-input-btn'>
	</div>

</template>

<script>
	import { quillEditor } from "vue-quill-editor";
	import { bus } from '@/common/js/bus'
	import "quill/dist/quill.snow.css"
	import { compressImage, selectImg } from '@/common/js/utils'
	export default {
		name: "quileditor",
		data() {
			// 可设置的文字、背景颜色
			let color = ['#333333', '#666666', '#999999', '#FFFFFF', '#007FFF', '#FAB410', '#19A875', '#ff0000', '' ];
			return {
				content: '',
				editorConfig: {
					placeholder: '请输入内容',
					modules: {
						toolbar: [		// 工具条
							[{ header: 1 }, { header: 2 }],
							[{ 'color': color }, { 'background': color }],
							[{ list: "ordered" }, { list: "bullet" }],
							// [{ indent: "-1" }, { indent: "+1" }],
							["image", "video"]
						]
					}
				}
			}
		},
		props: {
			title: {
				type: String,
				default: '活动编辑'
			},
			editoropt: {
				type: Object,
				default: function() { return {} }
			}
		},
		computed: {
			quilloptions() {
				return mui.extend(true, {}, this.editorConfig, this.editoropt)
			}
		},
		methods: {
			// 右上角确定事件
			editorSuccess() {
				document.activeElement.blur()		// 收回软键盘
				let content = this.editor.getContents()
				this.$emit('onEditorSuccess', content)
			},
			// 富文本编辑中
			onEditorChange(e) {
				this.$emit('onEditorChange', e)
			},
			// 初始化完成触发
			onEditorReady(obj) {
				this.editor = obj
				this.$emit('onEditorReady', this.editor)
			},
			// 获取焦点触发
			onEditorFocus(obj) {
				this.editor = obj;
			},

			// APP端插入图片
			async actionSheet() {
				try {
					let path = await selectImg({ multiple: true })
					let info = await compressImage(path)
					his.editor.insertEmbed(this.length, 'image', info.base64)
				} catch (error) {
					console.log(error)
				}
			},

			/* // 弹出actionsheet
			actionSheet() {
				const btns = [{
					title: '拍照'
				}, {
					title: '从手机相册选择'
				}];
				plus.nativeUI.actionSheet({
					cancel: '取消',
					buttons: btns
				}, e => {
					switch(e.index) {
						case 0:
							document.activeElement.blur();
							break;
						case 1:
							document.activeElement.blur();
							this._getCamera();
							break;
						case 2:
							document.activeElement.blur();
							this._getGallery();
							break;
						default:
							document.activeElement.blur();
							break;
					}
				})
			},
			// 拍照
			_getCamera() {
				const camera = plus.camera.getCamera();
				camera.captureImage(e => {
					this._insertImg(e);
				}, err => {
					console.log("error: ", err);
				});
			},
			// 相册
			_getGallery() {
				plus.gallery.pick(e => {
					const files = e.files;
					files.forEach(val => {
						this._insertImg(val);
					})
				}, err => {
					console.log("error", err);
				}, {
					multiple: true,
					system: false
				});
			},
			// 插入图片
			_insertImg(path) {
				plus.io.resolveLocalFileSystemURL(path, e => {
					let url = e.toLocalURL();
					compress.dealImage(url, {}, base64 => {
						this.editor.insertEmbed(this.length, 'image', base64);
					})
				}, err => {

				})
			} */
		},
		created() {
			mui.plusReady(function() {
				// 解决IOS下position:fixed弹出问题
				plus.webview.currentWebview().setStyle({
					softinputMode: "adjustResize"
				});
			});
			bus.$on('senContent', content => {
				this.editor.setContents(content)
			})

		},
		mounted() {
			if(mui.os.plus) {
				document.querySelector("button.ql-image").addEventListener("tap", e => {
					e.cancelBubble = true;
					e.preventDefault();
					document.activeElement.blur();
					const oImage = document.querySelector(".ql-image");
					if(!oImage.getAttribute("disabled")) {
						oImage.setAttribute("disabled", "disabled");
					}
					let range;
					if(this.editor.getSelection() != null) {
						range = this.editor.getSelection(true)
						this.length = range.index //content获取到焦点，计算光标所在位置，目的为了在该位置插入img
					} else {
						this.length = this.content.length;
					}
					console.log(this.length);
					this.actionSheet();
				})
			}

			document.querySelector(".quill-back-btn").addEventListener("tap", e => {
				this.$emit('onQuillBack', this.editor);
			})
		},
		components: {
			quillEditor,
		}
	};
</script>

<style lang="scss">
	@import 'static/common/scss/_variable';
	.quill-container {
		height: 100%;
		.mui-bar-nav {
			box-shadow: none !important;
			background-color: $baseColor;
			.mui-icon,
			.mui-title,
			.mui-btn {
				color: #fff
			}
		}
	}
	
	.quill-container,
	.quill-editor {
		height: 100%;
	}
	
	.ql-snow {
		.ql-tooltip {
			left: 0 !important;
			top: 77px !important;
			&[data-mode=video] {
				&::before {
					content: '';
					margin: 0;
				}
			}
		}
		.ql-editor {
			img {
				width: 20.6vw;
				height: 20.6vw;
				margin: 1vw;
			}
		}
		.ql-picker {
			&.ql-expanded {
				.ql-picker-options {
					margin-left: -57px;
				}
			}
			.ql-picker-item {
				width: 42px !important;
				height: 42px !important;
				border-radius: 50%;
			}
		}
	}
	
	.quill-container {
		.quill-editor {
			.ql-toolbar {
				border: none;
				position: fixed;
				top: 44px;
				z-index: 99;
				width: 100%;
				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					height: 1px;
					background-color: #c8c7cc;
					transform: scaleY(.3);
					left: 0;
					width: 100%;
				}
				&.ql-snow {
					padding: 0;
					.ql-formats {
						margin-right: 0;
						button {
							height: 44px;
							width: 36px;
							padding: 13px 7px;
						}
						.ql-picker {
							height: 44px;
							padding: 10px 3px;
						}
						.ql-color-picker {
							width: 36px;
						}
					}
				}
			}
		}
		.ql-container {
			border: none;
			padding-top: 88px;
		}
	}
	
	.ql-editor,
	.ql-clipboard,
	.ql-editor *,
	.ql-clipboard * {
		-webkit-user-select: text;
	}
	
	.quill-container {
		.guide {
			position: absolute;
			z-index: 100;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .3);
			.mui-btn {
				&:enabled:active {
					background-color: #fff;
				}
			}
			.prompt {
				margin: 140px 0;
				padding: 0 15px;
				p {
					color: #fff;
				}
			}
			.animate {
				transition: top .5s, left .5s, right .5s, bottom .5s;
			}
			.frame {
				position: absolute;
				height: 34px;
				border: 2px solid #fff;
			}
			.size {
				top: 49px;
				width: 70px;
			}
		}
	}
	
	.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
		content: '确定' !important
	}
</style>