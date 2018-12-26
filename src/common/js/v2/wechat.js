/**
 * 初始化微信接口
 * 	checkJsApi
 * 	onMenuShareTimeline
 * 	onMenuShareAppMessage
 * 	onMenuShareQQ
 * 	onMenuShareWeibo
 * 	hideMenuItems
 * 	chooseImage
 * 	scanQRCode
 * 	chooseWXPay
 * 	getLocation
 * 	openLocation
 * @return {[type]} [description]
 */
export const initWX = () => {
	return new Promise((resolve, reject) => {
		tools.ajax(config.ApplyShare, { url: location.href }, function(res) {
			if(res.result > 0) {
				var val = res.value;
				wx.config({
			    debug: false,
			    appId: val.appId,
			    timestamp: val.timestamp,
			    nonceStr: val.nonceStr,
			    signature: val.signature,
			    jsApiList: [ 'checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'hideMenuItems', 'chooseImage', 'scanQRCode', 'chooseWXPay', 'getLocation', 'openLocation' ]
			  })
			  resolve(val)
			} else {
				reject()
				tools.msg(res.result, res.attach);
			}
		}, function(err) {
			mui.toast('请求失败，请稍后重试');
		})
	})
}

/**
 * 微信定位
 * @return {[type]} [description]
 */
export const wxLocation = () => {
	return new Promise((resolve, reject) => {
		wx.getLocation({
      type: 'gcj02',
      success(res) {
      	resolve([res.longitude, res.latitude])
      }
    })
	})
}
