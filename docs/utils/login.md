# 登录
::: danger 警告
目前，请不要使用该模块中的任何方法
:::
[[TOC]]

## deviceInfo(登录需要的设备信息)
### 用法
```
deviceInfo([loginMode]) 	// 可选参数`loginMode`, 默认loginModes.ACCOUNT(4)
```

### 示例
```javascript
import { deviceInfo } from '@/common/js/login'

console.log(deviceInfo())
/*
loginInfo: {
	clientPlat: xx,
	system: xx,
	pushCode: xx,
	loginMode: xx,
	identCode: xx
}
 */
```

### 参数
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|loginMode|Number|4|可选，登录方式|

### 返回值
object

## userLogin(用户登录)
### 用法
```
userLogin(data, device) 		// `data`登录信息, `device`设备信息
// 内部会进行`mui.extend(true, {}, device, data)`操作
```
有关`mui.extend`相关用法, [点我查看](http://dev.dcloud.net.cn/mui/util/#extend)

### 示例
```javascript
import { userLogin, deviceInfo } from '@/common/js/login'

let data = { username: 'watasi', password: '123456' }
let device = deviceInfo()

userLogin(data, device)
```

### 参数
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|data|Object|-|登录参数，具体请参考老大给的那张纸|
|device|Object|-|上面的`deviceInfo()`方法返回了部分登录参数，主要是设备信息|

### 返回值
返回一个`Promise`对象 <br />
- 成功: 后台返回的数据
- 失败: {code: 错误码, err: 错误信息}


## origLoad(登录鉴权)
### 用法
```
origLoad(verifyInfo, staffLite) 		// `verifyInfo`: verifyInfo, `staffLite`第一次登陆获取的staffLites
```

### 示例
```javascript
import { origLoad, userLogin, deviceInfo } from '@/common/js/login'

let data = { username: 'watasi', password: '123456' }
let device = deviceInfo()

const res = await userLogin(data, device)
let verifyInfo = {
	// ...
}
let staffLite = res.value.staffLites

origLoad(verifyInfo, staffLite)
```

### 参数
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|verifyInfo|Object|-|请参考老大那张纸|
|staffLite|Object|-|第一次请求的时候会返回一个`staffLites`，就是这个数组的第一项|

### 返回值
返回一个`Promise`对象 <br />
- 成功: 后台返回的数据
- 失败: {code: 错误码, err: 错误信息}


## login(登录+鉴权)
::: tip 该方法在执行成功后，会进行一下操作
- 修改userInfo中用户头像，头像为空时使用默认头像(static/common/images/avatar.jpg)
- 头像不为空时，会添加图片对应的url头部(config.IMG_URL);
- 修改userInfo中性别( !!sex ? '女' : '男' )
- localStorage.setItem("menuInfos", JSON.stringify(value.menuInfos))
- localStorage.setItem("verifyInfo", JSON.stringify(verifyInfo))
- localStorage.setItem("uid", val.accountId)
- localStorage.setItem("userInfo", JSON.stringify(val))
:::

### 用法
```
login(data) 			// `data`登录信息
```

### 示例
```javascript
import { login } from '@/common/js/login'

let data = { username: 'watasi', password: '123456 }

login(data)
```

### 参数
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|data|Object|-|登录参数，具体请参考老大给的那张纸|

### 返回值
返回一个`Promise`对象 <br />
- 成功: {first: 第一次请求成功后台返回值, second: 第二次请求成功后台返回值}
- 失败: {code: 错误码, err: 错误信息}
