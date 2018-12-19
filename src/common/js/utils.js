'use strict'
const EXIF = require('exif-js')
const md5 = require('md5')

/**
 * 压缩图片
 * @param  {[type]}   path     图片路径
 * @param  {[type]}   options  配置参数
 * @return {[type]}            Promise
 */
export const compressImage = (path, options) => {
	return new Promise((resolve, reject) => {
		try {
			const img = new Image();
		  img.src = path;
		  img.onload = async function() {
		    var _this = this
		    let orient = await getPhotoOrientation(img)
		    let info = await compress(orient, _this, options)
		    resolve(info)
		  }
		} catch(e) {
			reject(e)
		}
	})
}

/**
 * 获取图像的拍摄方向
 * @param  {[type]} img [description]
 * @return {[type]}     Promise
 */
export const getPhotoOrientation = (img) => {
  return new Promise((resolve, reject) => {
    EXIF.getData(img, function () {
      EXIF.getAllTags(this)
      let orient = EXIF.getTag(this, 'Orientation')
      resolve(orient)
    })
  })
}

/**
 * 选择图片
 * @param  {Object} options 配置参数
 * @return {[type]}         Promise
 */
export const selectImg = (options = {}) => {
	return new Promise(async(resolve, reject) => {
		try {
			let imgs = null
			if(mui.os.plus) {
				imgs = await getAPPImg(options)
			} else {
				imgs = await getPCImg(options)
			}
			resolve(imgs)
		} catch(e) {
			reject(e)
		}
	})
}

/**
 * 上传图片
 * @param  {[type]} imgOptions [description]
 * @param  {[type]} folder     [description]
 * @return {[type]}            [description]
 */
export const upload = (imgOptions, folder) => {
	return new Promise(async(resolve, reject) => {
		let isArr = imgOptions.constructor === Array
		if(isArr) {
			// 数组，遍历上传
			let result = {code: 0, imagelist: []}
			let isbreak = false
			for(let i=0, len=imgOptions.length; i<len; i++) {
				let base = imgOptions[i]
				if(base.base64 == undefined && base.indexOf('/UpLoads') > -1) {
					result['code'] = 1
					result['imagelist'].push(base)
					continue
				}
				try {
					let res = await uploadData(base.base64, folder)
					if(res.code == 1) {
						result.code = 1
						result.imagelist.push(res.url)
					} else {
						result.code = 0
						isbreak = true
					}
				} catch(e) {
					result.code = 0
					isbreak = true
					reject(e)
				}
				if(isbreak) break
			}
			resolve(result)
		} else {
			// 非数组，单个上传
			uploadData(imgOptions.base64, folder)
			.then(res => {
				if(res.code == 1) {
					resolve({code: 1, url: res.url})
				} else {
					reject({code: 0})
				}
			}).catch(err => {
				reject(err)
			})
		}
	})
}

/**
 * 上传图片ajax
 * @param  {[type]} options 上传配置
 * @return {[type]}         Promise
 */
const uploadAjax = options => {
	return new Promise((resolve, reject) => {
		let data = {
			"fileData": {
				"md5": options.md,
				"folder": options.folder,
				"extension": "jpg",
				"name": options.md,
				"data": options.slice,
				"offset": options.offset,
				"param": options.param
			}
		}
		tools.ajax('/UploadData', data, res => {
			if(res.result > 0) {
				resolve(res)
			} else {
				reject({code: res.result, err: res})
			}
		}, err => {
			reject({code: err.status, err})
		})
	})
}

/**
 * 具体上传图片
 * @param  {[type]} base64 图片base64
 * @param  {[type]} folder 图片保存路径
 * @return {[type]}        Promise
 */
const uploadData = (base64, folder) => {
	let result = {code: 0, url: ''}
	let info = sliceBase64(base64)
	let offset = 0
	let isbreak = false
	return new Promise(async (resolve, reject) => {
		for(let i = 0; i < info.count; i++) {
			try {
				let res = await uploadAjax({ md: info.md, folder, slice: info.aBase64[i], offset, param: i })
				let kresult = res.param
				offset = res.offset
				if(kresult >= info.count - 1) {
					result.code = 1
					result.url = res.path + "?scale=" + info.scale
					resolve(result)
				}
			} catch(e) {
				isbreak = true
				reject(result)
			}
			if(isbreak) break
		}
	})
}

/**
 * 操作图片base64信息
 * @param  {[type]} base64 [description]
 * @return {[type]}        [description]
 */
const sliceBase64 = base64 => {
	let base = base64.split(',')[1]
	let dataImg = base64.split(',')[0]
	let scale = 0
	if(dataImg.indexOf("scale:") >= 0) {
		scale = dataImg.split("scale:")[1];
	}

	const md = md5(base)
	const length = base.length 						// base64的长度，用于分段上传
	let size = 2048 											// 每次上传base64的长度值
	let count = Math.ceil(length / size)  // 需要上传几次

	let aBase64 = [] 											// 保存需要分段上传的数据的每一段

	for(let i = 0; i < count; i++) {
		let part = base
		let aOffset = size * i
		if(length > size) {
			if(length - aOffset > size) {
				part = base.slice(aOffset, size * (i + 1))
			} else {
				part = base.slice(aOffset, length)
			}
		}
		aBase64.push(part)
	}
	return { aBase64, count, md, scale }
}

/**
 * 具体压缩图片放
 * @param  {[type]} orient  图片方向
 * @param  {[type]} that    图片对象
 * @param  {[type]} options 配置参数
 * @return {[type]}         Promise
 */
const compress = (orient, that, options={}) => {
	return new Promise((resolve, reject) => {
		if(options.quality && (options.quality > 1 || options.quality < 0)) {
			throw new Error('图片质量取值 0 - 1')
			return false
		}

		let w = that.width 			// 图片宽度
		let h = that.height 		// 图片高度
		let pixels = options.pixels || 2000000 	// 图片最大像素
		let ratio = 1 					// 宽高比
		let quality = options.quality || 0.8 			// 压缩质量
		// 像素大于最大像素
		if((ratio = w * h / pixels) > 1) {
			ratio = Math.sqrt(ratio);
	    w /= ratio;
	    h /= ratio;
		}
		let scale = w / h
		w = options.width || w
  	h = options.height || parseInt(w / scale)

  	// 创建canvas
  	let canvas = document.createElement('canvas')
  	let ctx = canvas.getContext('2d')
  	canvas.width = w
  	canvas.height = h
  	let drawWidth = w
  	let drawHeight = h

  	// 修复IOS图片旋转问题
  	let degree = 0
  	switch (orient) {
  		case 6: 						// 需要顺时针(向左)旋转90度
  			scale = h / w
	      degree = 90
	      canvas.width = h
	      canvas.height = w
	      drawHeight = -h
	      ctx.rotate(degree * Math.PI / 180)
  			break;
  		case 8: 						// 逆时针旋转90度
	  		degree = 270
	      scale = h / w
	      canvas.width = h
	      canvas.height = w
	      drawWidth = -w
	      ctx.rotate(degree * Math.PI / 180)
	      break;
  		case 3: 						// 需要180度旋转
	      degree = 180;
	      drawHeight = -h;
	      drawWidth = -w;
	      ctx.rotate(degree * Math.PI / 180);
	      break;
  	}

  	scale = scale.toFixed(2)
  	ctx.drawImage(that, 0, 0, drawWidth, drawHeight)
  	let base64 = canvas.toDataURL('image/jpeg', quality)

  	resolve({base64, scale})
	})
}

/**
 * PC端选择图片
 * @param  {[type]} options 配置参数
 * @return {[type]}         Promise
 */
const getPCImg = (options) => {
	return new Promise((resolve, reject) => {
		// 获取旋转图片的input对象
		let fileInput = document.querySelector("input.z-file-input-btn")
		let windowURL = window.URL || window.webkitURL

		// 多选
		if(options.multiple) {
			fileInput.setAttribute("multiple", "multiple");
		}

		fileInput.onchange = function(e) {
			let files = this.files // 当前选中的对象数组
			let file 							 // 保存选中的图片

			if(files && files.length) {
				if(options.multiple) { 
					// 选择多张
					let backImgs = [];
					for(let i = 0, len = files.length; i < len; i++) {
						backImgs.push(windowURL.createObjectURL(files[i]))
					}
					fileInput.value = ''		// 清楚input的值
					resolve(backImgs)
				} else {
					// 选择单张
					let img = windowURL.createObjectURL(files[0])
					fileInput.value = ''		// 清楚input的值
					resolve(img)
				}
			} else {
				reject("文件获取失败，请重新尝试")
			}
		}
		// 模拟input点击事件
		fileInput.click();
	})
}

const getAPPImg = (options) => {
	return new Promise((resolve, reject) => {
		let menu = [{ title: "拍照" }, { title: "从手机相册选择" }]
		plus.nativeUI.actionSheet({ cancel: "取消", buttons: menu }, async e => {
			try {
				let img = null
				switch (e.index) {
					case 0:
						break;
					case 1:
						img = await picture()
						resolve(img)
						break;
					case 2:
						img = await album(options)
						resolve(img)
						break;
					default:
						break;
				}
			} catch(e) {
				reject(e)
			}
		})
	})
}

/**
 * 拍照
 * @return {[type]} Promise
 */
const picture = () => {
	return new Promise((resolve, reject) => {
		const camera = plus.camera.getCamera();
		camera.captureImage(async path => {
			try {
				let loc = await toLocalUrl(path)
				resolve(loc)
			} catch(e) {
				reject(e)
			}
		}, err => {
			reject({msg: '读取拍照文件错误', err})
		});
	})
}

/**
 * 相册选择
 * @param  {[type]} options 配置参数
 * @return {[type]}         Promise
 */
const album = (options) => {
	let opt = mui.extend({}, { system: false, filter:"image" }, options)
	return new Promise((resolve, reject) => {
		plus.gallery.pick(async path => {
			try {
				if(options.multiple) {
					// 选择多张
					let backImgs = [];
					for(let i = 0, len = path.files.length; i < len; i++) {
						// 通过path参数获取目录对象或文件对象
						plus.io.resolveLocalFileSystemURL(path.files[i], entry => {
							backImgs.push(entry.toLocalURL()) // 获取目录路径转换为本地路径URL地址
							// 判断最后一次循环，执行成功的callback
							if(i === path.files.length - 1) {
								resolve(backImgs)
							}
						}, err => {
							reject({msg: '读取本地图片错误', err})
						})
					};
				} else {
					// 选择一张
					let loc = await toLocalUrl(path)
					resolve(loc)
				}
			} catch(e) {
				reject(e)
			}
		}, err => {
			reject({msg: '读取本地图片错误', err})
		}, opt)
	})
}

/**
 * 处理获取到的图片
 * @param  {[type]} path 图片地址
 * @return {[type]}      Promise
 */
const toLocalUrl = path => {
	return new Promise((resolve, reject) => {
		plus.io.resolveLocalFileSystemURL(path, entry => {
			resolve(entry.toLocalURL())
		}, err => {
			reject({msg: '图片转换失败', err})
		});
	})
}