# tools

## ajax
异步ajax

```javascript
tools.ajax('/ReadData', {id:1}, function(res) {
  console.log(res)
}, function(err) {
  console.log(err)
})
```

| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| url    |   String |  请求url  |  -   |
| data    |   JSON |  请求参数  |  -   |
| successCallback    |   Function |  成功的回调函数  |  -   |
| errorCallback    |   Function |  失败的回调函数  |  -   |


## ajax2
同步ajax

```javascript
tools.ajax2('/ReadData', {id:1}, function(res) {
  console.log(res)
}, function(err) {
  console.log(err)
})
```

| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| url    |   String |  请求url  |  -   |
| data    |   JSON |  请求参数  |  -   |
| successCallback    |   Function |  成功的回调函数  |  -   |
| errorCallback    |   Function |  失败的回调函数  |  -   |

## arrRemoveIndex
删除数组指点索引的元素

```javascript
var arr = [1,2,3,5,9]
tools.arrRemoveIndex(arr, 2)  // [1,2,5,9]
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| arr    |  Array | 需要操作的数组  |  -   |
| index    |  Number | 需要删除的索引  |  -   |

## backLink
手机和网站返回

```javascript
// app会调用beforeback
// pc会延迟一秒返回
tools.backLink()
```

## beforeback
返回上级页面，发送reload事件

> **与reload配合使用**
```javascript
var isReload = true
tools.beforeback(isReload)
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| isReload    |  Boolean | 是否触发返回前发送reload事件  |  false   |

## createWebivew
创建webview <br />
[点击这里](http://www.dcloud.io/docs/api/zh_cn/webview.html#plus.webview.create)查看具体参数

```javascript
tools.createWebivew(url, style)
```

```javascript
// 示例
tools.createWebivew('http://www.baidu.com')
```

### 参数
|参数名|类型|默认值|描述|
|:---:|:---:|:---:|:---:|
|url|String|-|打开的url，可以是本地地址，也可以是网络地址|
|style|Object|{}|创建webview样式配置，[参考地址](http://www.dcloud.io/docs/api/zh_cn/webview.html#plus.webview.WebviewStyles)|

## getArrayItems
数组中取出几个不重复的随机数

```javascript
var arr = [1,3,8,6,4]
tools.getArrayItems(arr, 2)   // return new array
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| arr    |  Array | 需要操作的数组  |  -   |
| num    |  Number | 取几个  |  -   |

## getImage
获取头像

```javascript
var url = null
var s = tools.getImage(url)	  // http://wx.baojiashi.cn/static/images/avatar.jpg
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| img    |  String | 头像url，为空则返回默认头像  |  -   |

## getjsonAccordingValue
根据Value获取对象

```javascript
var json = {a: {text: 1}, b: {text: 2}}
tools.getTextAccordingValue('a', json)   // {text: 1}
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| key    |  String | json key  |  -   |
| json    |  JSON | json对象  |  -   |

## getLength
获取对象长度

```javascript
var obj = {id:1, age: 18, name: '张三'}
tools.getLength(obj)    // 3
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| object    |  Object | 需要获取长度的对象  |  -   |

## getMsg
获取下一级webview传递过来的数据内容

> **与sendMsg配合使用**
```javascript
tools.getMsg(function(msg) {
  console.log(msg)
})
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| callback    |  Function | 成功获取参数后的回调  |  -   |

## getQueryString
获取url中的参数

```javascript
var id = tools.getQueryString(id)
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| key    |   String |  url中的key  |  -   |

## getTextAccordingValue
根据value获取text

```javascript
var json = {a: {text: 1}, b: {text: 2}}
tools.getTextAccordingValue('a', json)   // 1
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| key    |  String | json key  |  -   |
| json    |  JSON | json对象  |  -   |

## getTimestamp
字符串获取时间戳

```javascript
tools.getTimestamp('2018-03-12')   // 1520784000000
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| date    |  String | 时间字符串，如：`2018-03-12 12:00:00`  |  -   |

## getUrl
获取请求url

```javascript
var url = mtools.getUrl()
```

> 根据不同的平台，返回不同的url
> `PC`: return config.OS_URL
> `APP`: return config.NODE_URL

## isLogin
获取登陆缓存

```javascript
// 登录状态下，会获取verifyinfo自动登录
tools.isLogin()
```

## isObj
判断obj是否为json对象

```javascript
var obj = {id: 1}
var b = tools.isObj(obj)
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| obj    |  any | 返回`Boolean`  |  -   |

## jumpLink
手机和网站跳转链接

```javascript
// app会打开新页面
// pc会延迟一秒打开新页面
tools.jumpLink('xxx.html')
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| url    |  String | 新页面url  |  -   |

## nativeSheet
原生acctionsheet

```javascript
var menu = [{title: '查看'}, {title: '编辑'}]
tools.nativeSheet(menu, function(e) {
  switch(e.index) {
	case 0:
	  break
	case 1:
	  // 查看
	  break
	case 2:
	  // 编辑
	  break
	default:
	  break
  }
})
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| menu    |  Array | 选择框上的按钮，[点击这里](http://www.dcloud.io/docs/api/zh_cn/nativeui.html#plus.nativeUI.ActionButtonStyles)查看具体参数信息 |  -   |
| callback | Function | 选择按钮框关闭后的回调函数，[点击这里](http://www.dcloud.io/docs/api/zh_cn/nativeui.html#plus.nativeUI.ActionSheetCallback)查看具体信息 |  -   |

## noHistory
网页没有浏览记录跳转

```javascript
// app会打开新页面
// pc会替换当前页面
tools.noHistory('xxx.html')
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| url    |  String | 新页面url  |  -   |

## openWindow
打开新页面 <br />
推荐使用`openWindowWithTitle`方法
```javascript
tools.openWindow({
  url: 'xxx.html',
  id: 'xxx'
}, {
  id: 1
})
```

**`options`：页面配置参数**
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| url    |   String |  打卡页面的路径  |  -   |
| id    |   String |  webview的id  |  默认为url   |
| aniShow    |   String |  打开页面的动画效果  |  pop-in   |
**`extras`：页面之间传递的参数，JSON格式**

## openWindowWithButton
打开原生导航头，右侧有一个按钮 <br />
[点击这里](http://ask.dcloud.net.cn/article/12810)查看具体参数

```javascript
tools.openWindowWithButton(options, extras)
```

```javascript
// 页面A
tools.openWindowWithButton({
  url: 'B.html',
  button: '\ue60c',			// 字体图标，也可以传'完成'之类的文字
  params: {
  	a: 'hello'
  }
})

// 页面B
mounted() {
	// 导航栏右侧按钮点击事件
	window.addEventListener('onMenuRight', e => {
		// 接收穿过来的参数
		let a = e.detail.a  // hello
	})
}
```

### options
> 页面配置参数

大部分参数请参考`openWindowWithTitle` <br />

这里列出右上角按钮需要的参数：

| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| button | String | 显示的文字，也可以是图标，图标需要以`\u`开头 | - |
| fontSrc | String | 字体图标路径 | '_www/static/common/iconfont/iconfont.ttf' |
| params | Object | 通过mui.fire传递的参数 | null |
| eventName | String | mui.fire事件名 | onMenuRight |
| fontSize | String | 显示文字的大小 | '17px' |

### extras
> 页面之间传递的参数，JSON格式

## openWindowWithTitle
打开原生导航头
> 具体配置参数，[点击这里](http://ask.dcloud.net.cn/article/12810)查看

```javascript
tools.openWindowWithTitle({
  url: 'xxx.html',
  id: 'xxx',
  title: 'xxx'
}, {
  id: 1
})
```

### options
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| url    |   String |  打卡页面的路径  |  -   |
| id    |   String |  webview的id  |  默认为url   |
| background    |   String |  原生头背景色  |  #53e3a6   |
| bar    |   Boolean |  状态栏设置，仅在沉浸式下生效  |  false   |
| barbg    |   String |  状态栏背景色  |  #53e3a6   |
| back    |   Boolean |  是否显示返回按钮  |  true   |
| title    |   String |  原生头标题  |  ''   |
| color    |   String |  原生头标题颜色  |  #ffffff  |
| type    |   String |  原生头类型，`default`:默认样式,顶部停靠显示;`transparent`:透明样式  |  default  |
| buttons    |   Array |  标题栏上的自定义按钮  |  -  |

### extras
> 页面之间传递的参数，JSON格式

## previewImg

> 原生APP图片预览


`img`标签外的`class必须是preview-img`
``` javascript
<template>
	<div class="preview-img">
		<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1063584220,310254011&fm=26&gp=0.jpg" />

		<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1063584220,310254011&fm=26&gp=0.jpg" />

		<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1063584220,310254011&fm=26&gp=0.jpg" />
	</div>
</template>

<script>
export default {
	mounted() {
		tools.previewImg()
	}
}
</script>
```

| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| loop    |   Boolean |  是否自动循环播放  |  false   |
| indicator    |   String |  指示器  |  number  |

## reload
监听beforeback发送的reload事件，执行刷新操作

> **与beforeback配合使用**
```javascript
tools.reload()
```

## sendMsg
当前webview向上一级webview传递信息

> **与getMsg配合使用**
```javascript
var opener = plus.webview.currentWebview().opener()
tools.sendMsg({id:1}, opener)
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| msg    |   JSON |  页面之间传递的参数  |  -   |
| webview    |   JSON |  父webview对象  |  -   |

## strTransArr
将图片数组，组装带有http的图片数组

```javascript
// 仅仅是演示使用，具体返回什么值，可配置 config.js下的IMG_URL
var arr = ['upload/img/1.jpg', 'upload/img/2.jpg']
tools.strTransArr(arr)    // ['http://watasi.cn/upload/img/1.jpg', ...]
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| arr    |  Array | 需要操作的数组  |  -   |

