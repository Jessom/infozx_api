'use strict'

/**
 * 登录时获取设备信息
 * @param  {[type]} loginMode [description]
 * @return {[type]}           loginInfo
 */
export const deviceInfo = (loginMode=loginModes.ACCOUNT) => {
	let clientPlat, system, uuid
	if(mui.os.plus) {
		clientPlat = clientPlats.MOBILE
		if(mui.os.ios) {
			system = clientSystems.IOS
		} else if(mui.os.android) {
			system = clientSystems.ANDROID
		}
		uuid = plus.device.uuid
	} else {
		clientPlat = clientPlats.WEBSITE
		system = clientSystems.UNKNOW
		uuid = 'aaaaaaaa'
	}
	return {
		loginInfo: {
			clientPlat,
			system,
			pushCode: "",
			loginMode: loginMode,
			identCode: uuid
		}
	}
}

/**
 * [description]
 * @param  {[type]} data   登陆信息，{loginInfo: {username, password}}
 * @param  {[type]} device 设备信息
 * @return {[type]}        Promise
 */
export const userLogin = (data, device) => {
	return new Promise((resolve, reject) => {
		let params = mui.extend(true, {}, device, data)

		tools.ajax(config.UserLogin, params, res => {
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
 * [description]
 * @param  {[type]} verifyInfo [description]
 * @param  {[type]} staffLite  [description]
 * @return {[type]}            Promise
 */
export const origLoad = (verifyInfo, staffLite) => {
	let OrigLoad = {
		"verifyInfo": verifyInfo,
		"staffLite": staffLite,
		"isRevert": false
	}
	return new Promise((resolve, reject) => {
		tools.ajax(config.OrigLoad, OrigLoad, res => {
			if(res.result > 0) {
				resolve(res)
			} else {
				reject({code: res.result, err: err})
			}
		}, err => {
			reject({code: err.status, err: err})
		})
	})
}

/**
 * [description]
 * @param  {[type]} data 登陆信息，{loginInfo: {username, password}}
 * @return {[type]}      Promise
 */
/*export const login = data => {
	return new Promise(async (resolve, reject) => {
		try {
			let def = deviceInfo()
			// 第一次登陆
			let response = await userLogin(data, def)
			let val = response.value
			let verifyInfo = {
				uid: val.accountId,
				clientPlat: def.loginInfo.clientPlat,
				ident: val.ident,
				verify: val.verify,
				token: " "
			}
			let staffLites = val.staffLites
			let staffLite = null
			if(staffLites != null) {
				staffLite = val.staffLites[0]
			}

			// 获取权限
			let res = await origLoad(verifyInfo, staffLite)
			let value = res.value
			val.image = !!val.image ? 'static/common/images/avatar.jpg' : config.IMG_URL + val.image
			val.sex = !!val.sex ? '女' : '男'

			// 存储用户信息
			localStorage.setItem("menuInfos", JSON.stringify(value.menuInfos))
			localStorage.setItem("verifyInfo", JSON.stringify(verifyInfo))
			localStorage.setItem("uid", val.accountId)
			localStorage.setItem("userInfo", JSON.stringify(val))
			resolve({ first: response, second: res })
		} catch(e) {
			reject(e)
		}
	})
}*/



/***************************************************************/

/**
 * 登录
 * @param  {[type]} params 请求参数
 * @param  {[type]} type   登录方式(微信登录，账号登录，手机号登陆...)
 * @param  {[type]} scb    成功后的回调
 * @param  {[type]} ecb    失败后的回调
 * @param  {[type]} choise 成功后，弹出选择公司回调
 * @return {[type]}        [description]
 */
export const login = (params, type, scb, ecb, choise) => {
	// 记录登录方式
	localStorage.setItem('loginType', type)

	let dParams = deviceInfo()							// 获取默认登录参数
	let clientPlat = dParams.loginInfo.clientPlat 	// 保存登录平台

	let data = mui.extend(true, {}, dParams, params)		// 递归合并默认登录参数与传入参数

	tools.ajax(config.UserLogin, data, res => {
		if(res.result > 0) {
			let val = res.value
			let verifyInfo = {
				uid: val.accountId,
				clientPlat: clientPlat,
				ident: val.ident,
				verify: val.verify,
				token: ""
			}
			let staffLites = val.staffLites;
			let staffLite = null;
			if(!!staffLites) {
				staffLite = val.staffLites[0];
			}
			val.image = tools.getImage(val.image); // 头像

			secondAjax(verifyInfo, val, scb, ecb, choise)
		} else {
			ecb({code: res.result, err: res})
			tools.msg(res.result, res.attach)
		}
	}, err => {
		ech({code: err.status, err})
	})
}

const secondAjax = (verifyInfo, val, scb, ecb, choise) => {
	let data = {
		verifyInfo: verifyInfo,
		searchLite: {
			viewName: "StaffCompany",
			tableName: "StaffTable",
			frameName: "EcrpCompany"
		},
		searchGuide: {
			keyValues: {
				accountId: val.accountId
			},
			sortType: sortTypes.FIRST_DESC,
			pageCount: pageCounts.ALL,
		}
	}

	tools.ajax(config.ReadData, data, res => {
		if(res.result > 0) {
			let staffList = []
			for (let item of res.value){
				staffList.push({
					id: item.id,
					companyId: item.values.x_companyId,
					companyName: item.values.ct_name,
					subCompanyId: item.values.x_subCompanyId,
					name: item.values.x_name,
					belong: item.values.x_belong,
					staffRight: item.values.x_staffRight,
					// postKind: staff.getPostKind(item.values.x_companyId, item.values.x_belong, item.values.x_postId)
				})
			}
			if (staffList.length > 1) {
				choise(staffList, staffInfo => {
					fourAjax(verifyInfo, staffInfo, val, scb, ecb)
				})
			} else {
				fourAjax(verifyInfo, staffList[0], val, scb, ecb)
			}
		} else {
			thirdAjax(verifyInfo, val, scb, ecb)
		}
	}, err => {
		ecb({code: err.status, err})
	})
}

const thirdAjax = (verifyInfo, val, scb, ecb) => {
	let data = {
		verifyInfo: verifyInfo,
		searchLite: {
			viewName: "CompanyTable",
			tableName: "CompanyTable",
			frameName: "EcrpFirm"
		},
		searchGuide: {
			keyValues: {
				uid: val.accountId
			},
			sortType: sortTypes.FIRST_DESC,
			pageCount: pageCounts.ALL,
		}
	}

	tools.ajax(config.ReadData, data, res => {
		if(res.result > 0) {
			let item = res.value[0]
			let companyInfo = {
				id: item.id,
				image: '',
				name: item.values.x_name,
				fullName: item.values.x_fullName,
				oneName: item.values.x_name.substring(0, 1),
			}
			// localStorage.setItem('companyInfo', JSON.stringify(companyInfo))
			localStorage.setItem('cid', companyInfo.id)
			localStorage.setItem("isStaff", false)
			
			scallback(verifyInfo, val, scb)
		} else {
			scallback(verifyInfo, val, scb)
			tools.msg(res.result, res.attach)
		}
	}, err => {
		ecb({code: err.status, err})
	})
}

const fourAjax = (verifyInfo, staffInfo, val, scb, ecb) => {
	let data = {
		verifyInfo: verifyInfo,
		staffId: staffInfo.id,
	};
	tools.ajax(config.StaffLogin, data, res => {
		localStorage.setItem('cid', staffInfo.companyId);
		if(res.result > 0) {
			let item = res.value[0]
			localStorage.setItem('staffInfo', JSON.stringify(staffInfo))
			localStorage.setItem("isStaff", true)
			verifyInfo.token = res.value
			scallback(verifyInfo, val, scb)
		} else {
			scallback(verifyInfo, val, scb)
			tools.msg(res.result, res.attach)
		}
	}, err => {
		ecb({code: err.status, err})
	})
}

const scallback = (verifyInfo, val, scb) => {
	localStorage.setItem("verifyInfo", JSON.stringify(verifyInfo))
	localStorage.setItem("isLogin", true)
	localStorage.setItem("uid", val.accountId)
	localStorage.setItem("userInfo", JSON.stringify(val))

	scb({status: 1, val})
}

/***************************************************************/



/**
 * 查询StaffTable
 * @param  {[type]} verifyInfo [description]
 * @param  {[type]} accountId  [description]
 * @return {[type]}            [description]
 */
const findStaff = (verifyInfo, accountId) => {
	let data = {
		verifyInfo: verifyInfo,
		searchLite: {
			viewName: "StaffCompany",
			tableName: "StaffTable",
			frameName: "EcrpCompany"
		},
		searchGuide: {
			keyValues: {
				accountId: accountId
			},
			sortType: sortTypes.FIRST_DESC,
			pageCount: pageCounts.ALL,
		}
	}

	return new Promise((resolve, reject) => {
		tools.ajax(config.ReadData, data, res => {
			if(res.result > 0) {
				resolve(res)
			} else {
				reject({code: res.result, err: res})
			}
		}, err => {
			reject({code: err.status, err: err})
		})
	})
}

/**
 * 查询CompanyTable
 * @param  {[type]} verifyInfo [description]
 * @param  {[type]} accountId  [description]
 * @return {[type]}            [description]
 */
const findCompany = (verifyInfo, accountId) => {
	let data = {
		verifyInfo: verifyInfo,
		searchLite: {
			viewName: "CompanyTable",
			tableName: "CompanyTable",
			frameName: "EcrpFirm"
		},
		searchGuide: {
			keyValues: {
				uid: accountId
			},
			sortType: sortTypes.FIRST_DESC,
			pageCount: pageCounts.ALL,
		}
	}

	return new Promise((resolve, reject) => {
		tools.ajax(config.ReadData, data, res => {
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


export const log = (data) => {
	return new Promise(async(resolve, reject) => {
		try {
			let def = deviceInfo()
			// 第一次登陆
			let response = await userLogin(data, def)
			let val = response.value
			let verifyInfo = {
				uid: val.accountId,
				clientPlat: def.loginInfo.clientPlat,
				ident: val.ident,
				verify: val.verify,
				token: " "
			}
			let staffLites = val.staffLites
			let staffLite = null
			if(staffLites != null) {
				staffLite = val.staffLites[0]
			}

			// 查询StaffTable
			let staffres = await findStaff(verifyInfo, val.accountId)
			let staffVal = staffres.value
			let staffList = []
			for(let item of staffVal) {
				staffList.push({
					id: item.id,
					companyId: item.values.x_companyId,
					companyName: item.values.ct_name,
					subCompanyId: item.values.x_subCompanyId,
					name: item.values.x_name,
					belong: item.values.x_belong,
					staffRight: item.values.x_staffRight,
				})
			}
			


			/*let value = res.value
			val.image = !!val.image ? 'static/common/images/avatar.jpg' : config.IMG_URL + val.image
			val.sex = !!val.sex ? '女' : '男'*/
		} catch(e) {
			console.log(e);
		}
	})
}