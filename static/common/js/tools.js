var immersed = 0;
var opener = null;
(function() {
	var ms = (/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
	if(ms && ms.length >= 3) { // 当前环境为沉浸式状态栏模式
		immersed = parseFloat(ms[2]); // 获取状态栏的高度
	}
})()

if(!mui.os.plus) {
	var isPageHide = false; 
  window.addEventListener('pageshow', function () {
    if (isPageHide) {
      window.location.reload(); 
    } 
  }); 
  window.addEventListener('pagehide', function () {
    isPageHide = true; 
  })
}

var tools = {
	// http://www.dcloud.io/docs/api/zh_cn/webview.html#plus.webview.create
	// 创建webview，url可以是本地地址，也可以是网络地址
	createWebivew: function(url, style) {
		if(opener) { return }
		style = style || {}
		mui.plusReady(function() {
			opener = plus.webview.create(url, url, style)
			opener.addEventListener('loaded', function() {
				opener.show('pop-in')
			}, false)
			opener.addEventListener('close', function() {
				opener = null
			}, false)
		})
	},
	// 打开原生导航头
	openWindowWithTitle: function(options, extras) {
		options = options || {};
		extras = extras || {};
		var bar = options.bar || true;
		var background = '#f60', // 原生头背景色
			id = options.id ? options.id : options.url.split('?')[0], // webview id
			statusbar = bar ? {
				background: options.barbg || background
			} : null; // 状态栏背景色
		mui.openWindow({
			url: options.url,
			id: id,
			waiting: {
				autoShow: false
			},
			styles: {
				statusbar: statusbar,
				bounce: 'vertical',
				bounceBackground: background,
				titleNView: {
					autoBackButton: options.back || true,
					titleText: options.title || '',
					titleColor: options.color || "#fff",
					titleSize: "17px",
					backgroundColor: options.background || background,
					buttons: options.buttons,
					type: options.type || 'default'
				}
			},
			extras: extras
		})
	},
	// 打印原生导航头，右侧带按钮
	openWindowWithButton: function(options, extras) {
		options = options || {}
		extras = extras || {}
		var bar = options.bar || true;
		// 原生头背景色
		var background = '#f60';
		// webview id
		var id = options.id ? options.id : options.url.split('?')[0];
		// 原生头背景色
		statusbar = bar ? { background: options.barbg || background } : null;
		// 字体图标地址
		var fontSrc = options.fontSrc || '_www/static/common/iconfont/iconfont.ttf';
		// 打开的新页面传参，注 网页上获取不到
		var params = options.params || null
		// 右上角按钮点击事件名
		var eventName = options.eventName || 'onMenuRight'
		// 右上角字号
		var fontSize = options.fontSize || '17px'

		mui.openWindow({
			url: options.url,
			id: id,
			waiting: {
				autoShow: false
			},
			styles: {
				statusbar: statusbar,
				bounce: 'vertical',
				bounceBackground: background,
				titleNView: {
					autoBackButton: options.back || true,
					titleText: options.title || '',
					titleColor: options.color || "#fff",
					titleSize: "17px",
					backgroundColor: options.background || background,
					buttons: [{
						color: '#fff',
						float: 'right',
						fontSize: fontSize,
						fontSrc: fontSrc,
						onclick: function() {
							var op = plus.webview.getWebviewById(id)
							mui.fire(op, eventName, params)
						},
						text: options.button
					}],
					type: options.type || 'default'
				}
			},
			extras: extras
		})
	},
	// 打开新页面
	openWindow: function(options, extras) {
		options = options || {};
		extras = extras || {};
		var aniShow = options.aniShow || "pop-in", // 打开页面的动画效果
			id = options.id ? options.id : options.url.split('?')[0]; // webview id
		mui.openWindow({
			url: options.url,
			id: id,
			show: {
				aniShow: aniShow
			},
			waiting: {
				autoShow: false
			},
			extras: extras
		})
	},
	// ajax异步请求
	ajax: function(url, data, successCallback, errorCallbarck) {
		var href = url === '/UploadData' ? tools.getImgUrl() + url : tools.getUrl() + url;
		mui.ajax({
			url: href,
			type: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			dataType: "json",
			data: data,
			success: successCallback,
			error: errorCallbarck
		})
	},
	// ajax同步请求
	ajax2: function(url, data, successCallback, errorCallbarck) {
		var href = url === '/UploadData' ? tools.getImgUrl() + url : tools.getUrl() + url;
		mui.ajax({
			url: href,
			type: 'POST',
			async: false,
			headers: {
				"Content-Type": "application/json"
			},
			dataType: "json",
			data: data,
			success: successCallback,
			error: errorCallbarck
		})
	},
	getAjax: function(url, data, successCallback, errorCallbarck) {
		var href = url === '/UploadData' ? tools.getImgUrl() + url : tools.getUrl() + url;
		mui.ajax({
			url: href,
			type: 'GET',
			headers: {
				"Content-Type": "application/json"
			},
			dataType: "json",
			data: data,
			success: successCallback,
			error: errorCallbarck
		})
	},
	/**
	 * 处理ajax 返回的错误
	 * -4:参数丢失
	 * -44:帐号退出
	 * -42:同步异常
	 */
	msg: function(result, attach) {
		switch(result) {
			case -1:
				mui.toast("账号或密码错误，请重新输入");
				break;
			case 0:
				//默认不提示
				break;
			case -43:
			case -44:
				mui.toast("帐号退出，请重新登录");
				tools.jumpLink("login.html?type=1");
//				var btn = ["取消", "确定"];
//				setTimeout(function() {
//					mui.confirm("帐号退出，需要重新登录吗？", "提示", btn, function(e) {
//						if(e.index == 0) {
//	
//						} else if(e.index == 1) {
//							tools.jumpLink("login.html?type=1");
//						}
//						localStorage.removeItem('isLogin')
//					})
//				}, 1000);
				break;
			case -42:
				mui.toast("登录失效，请重新登录");
//				tools.removeLogin();
				tools.jumpLink("login.html?type=1");
				break;
			case -41:
				if(mui.os.plus) {
					plus.webview.currentWebview().reload();
				} else {
					setTimeout(function() {
						location.reload();
					}, 1000);
				}
				break;
			default:
				mui.toast(attach);
				//				mui.toast('失败,请稍候再试');
				console.log(attach);
		}
	},
	//清空登录信息
	removeLogin: function() {
		localStorage.setItem('isLogin', false);
		localStorage.removeItem('uid');
		localStorage.removeItem('verifyInfo');
		localStorage.removeItem('userInfo');
		localStorage.removeItem('cid')
		localStorage.removeItem('companyInfo')
		localStorage.removeItem('staffInfo')
		localStorage.removeItem('isStaff')
	},
	// 根据不同平台，返回不同的url
	getUrl: function() {
		if(mui.os.plus) {
			return config.OS_URL;
		} else {
			return config.NODE_URL;
		}
	},
	// 根据不同平台，返回不同的图片url
	getImgUrl: function() {
		if(mui.os.plus) {
			return config.IMG_UPLOAD;
		} else {
			return config.NODE_URL;
		}
	},
	// 获取url中的参数
	getQueryString: function(key) {
		var url = window.location.search;
		var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
		var result = url.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	},
	// 当前webview向上一级webview传递信息
	sendMsg: function(msg, webview) {
		if(mui.os.plus) {
			console.log('tools, webview')
			console.log(JSON.stringify(webview));
			mui.fire(webview, 'sendMsg', msg)
		} else {
			if(tools.isObj(msg)) {
				msg = JSON.stringify(msg);
			}
			sessionStorage.setItem('sendMsg', msg);
		}
	},
	// 获取下一级webview传递过来的数据内容
	getMsg: function(callback) {
		if(mui.os.plus) {
			window.addEventListener('sendMsg', function(event) {
				callback(event.detail);
			}, false);
		} else {
			if(sessionStorage.getItem('sendMsg')) {
				callback(JSON.parse(sessionStorage.getItem('sendMsg')));
			}
		}
	},
	// 判断obj是否为json对象
	isObj: function(obj) {
		return typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
	},
	// 返回上级页面，发送reload事件
	beforeback: function(isReload) {
		mui.init({
			beforeback: function() {
				if(mui.os.plus && isReload) {
					var webview = plus.webview.currentWebview().opener();
					mui.fire(webview, 'reload');
				}
				return true;
			}
		})
	},
	// 监听beforeback发送的reload事件，执行刷新操作
	reload: function() {
		window.addEventListener("reload", function() {
			location.reload();
		});
	},
	reloadBack: function(m) {
		window.addEventListener("reload", function() {
			m();
//			tools.beforeback(true);
		});
	},
	reloadLoginBack: function(callback) {
		window.addEventListener("login", function() {
			callback();
		});
	},
	// 删除数组指点索引的元素
	arrRemoveIndex: function(arr, index) {
		arr.forEach(function(val, ind) {
			if(index === ind) {
				arr.splice(index, 1);
			}
		})
	},
	// 获取对象长度
	getLength: function(object) {
		if(!tools.isObj(object)) return;
		var count = 0;
		for(var i in object) count++;
		return count;
	},
	// 获取头像
	getImage: function(img) {
		var image;
		if(img == '' || img == null) {
			image = 'http://wx.baojiashi.cn/static/images/avatar.jpg';
		} else {
			if(img.indexOf("http") >= 0) {
				image = img;
			} else {
				if(img.indexOf("UpLoads") >= 0) {
					image = config.IMG_URL + img;
				}
			}
		}
		return image;
	},
	//手机和网站跳转链接
	jumpLink: function(url) {
		if(mui.os.plus) {
			setTimeout(function() {
				tools.openWindow({
					url: url
				})
			}, 1000);
		} else {
			setTimeout(function() {
				tools.openWindow({
					url: url
				})
			}, 1000);
		}
	},
	//网页没有浏览记录跳转
	noHistory: function(url) {
		if(mui.os.plus) {
			tools.openWindow({
				url: url
			})
		} else {
			window.location.replace(url);
		}
	},
	//手机和网站返回
	backLink: function() {
		console.log('返回');
		if(mui.os.plus) {
			tools.beforeback(true);
			mui.back();
		} else {
			setTimeout(function() {
				mui.back();
			}, 1000);
		}
	},
	//获取登陆缓存
	isLogin: function() {
		if(localStorage.getItem("isLogin") == 'true') {
			//执行自动登录
			// config.AutoLogin();
		}
	},
	// 根据value获取text
	getTextAccordingValue: function(v, jsons) {
		for(var json of jsons) {
			if(json.value == v) {
				return json.text;
			}
		}
		return "";
	},
	// 数组中取出几个不重复的随机数
	getArrayItems: function(arr, num) {
		//新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
		var temp_array = new Array();
		for(var index in arr) {
			temp_array.push(arr[index]);
		}
		//取出的数值项,保存在此数组
		var return_array = new Array();
		for(var i = 0; i < num; i++) {
			//判断如果数组还有可以取出的元素,以防下标越界
			if(temp_array.length > 0) {
				//在数组中产生一个随机索引
				var arrIndex = Math.floor(Math.random() * temp_array.length);
				//将此随机索引的对应的数组元素值复制出来
				return_array[i] = temp_array[arrIndex];
				//然后删掉此索引的数组元素,这时候temp_array变为新的数组
				temp_array.splice(arrIndex, 1);
			} else {
				//数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
				break;
			}
		}
		return return_array;
	},
	// 根据Value获取对象
	getjsonAccordingValue: function(v, jsons) {
		for(var json of jsons) {
			if(json.value == v) {
				return json;
			}
		}
		return "";
	},
	// 将图片数组，组装带有http的图片数组
	strTransArr: function(arr) {
		var rarr = [];
		arr.forEach(function(val) {
			rarr.push(config.IMG_URL + val);
		})
		return rarr;
	},
	/*字符串获取时间戳*/
	getTimestamp: function(date) {
		var date = new Date(Date.parse(date.replace(/-/g, "/")));
		date = date.getTime();
		return date;
	},
	// 根据/Date格式的时间戳获得日期格式
	getTime: function(time) {
		if(time && time.toString().indexOf('Date') >= 0) {
			time = time.replace('/Date(', '').replace(')/', '')
		} else {
			return ""
		}
		var date = new Date(parseInt(time));
		return date;
	},
	nativeSheet: function(menu, callback) {
		plus.nativeUI.actionSheet({
			cancel: "取消",
			buttons: menu
		}, callback)
	},
	// 弹出原生自定义acctionsheet
	nativeAutoSheet: function(ws, wc, page, extras, options) {
		if(wc) { // 防止快速点击可能导致多次创建
			return;
		}
		var op = mui.extend({}, {
			height: "200px",
			bottom: '0px',
			popGesture: 'none'
		}, options);
		extras = extras || {}
		ws.setStyle({
			mask: 'rgba(0,0,0,0.5)'
		});
		wc = plus.webview.create(page, page, op, extras)
		wc.addEventListener("close", function() {
			wc = null;
			ws.setStyle({
				mask: "none"
			});
		}, false);
		wc.addEventListener("loaded", function() {
			wc.show("slide-in-bottom", 200)
		})
		return wc;
	},

	// 原生(APP)图片预览
	previewImg: function(loop, indicator) {
		indicator = indicator || 'number';
		loop = loop || false;
		mui.plusReady(function() {
			var images = [].slice.call(document.querySelectorAll('.preview-img img'));
			var urls = [];
      images.forEach(function(item) {
        urls.push(item.src);
      });
      mui('.mui-content-padded').on('tap', '.item', function() {
        var index = images.indexOf(this);
        plus.nativeUI.previewImage(urls, {
          current: index,
          loop: loop,
          indicator: indicator
        });
      });
		})
	}
}