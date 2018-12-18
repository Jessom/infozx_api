# Promise简单介绍
因为在`utils.js`中，大量使用了`Promise`，这里就简单的介绍下`Promise` <br />
这里只简单的介绍下`Promise`的用法

> Promise 是异步编程的一种解决方案，比传统的`回调函数`更合理和更强大，ES6将其写进了语言标准，统一了语法，原生提供了Promise

## promise的三中状态
- pending: 进行中
- fulfilled: 已经成功
- rejected: 已经失败

### 状态改变
Promise对象的状态改变，只有两种可能：
- 从pending变为fulfilled
- 从pending变为rejected

这两种情况只要发生，状态就凝固了，不会再变了，这时就称为resolved（已定型）

## 基本用法
ES6规定，Promise对象是一个构造函数，用来生成Promise对象
```javascript
const p = new Promise((resolve, reject) => {
	// 模拟异步操作
	setTimeout(() => {
		if(true) {
			resolve(1)
		} else {
			reject(0)
		}
	}, 1500)
})
```
`resolve`函数是将Promise的状态从`未完成`状态改为`完成`状态 <br />
`reject`函数是将Promise的状态从`未完成`状态改为`失败`状态 <br />

### Promise实例生成以后，可以通过`then`、`catch`获取promise的`成功`、`失败`状态
```javascript
p.then(res => {
	constole.log(res)
}).catch(err => {
	console.log(err)
})
```

## async await
> 从最早的回调函数，到 Promise 对象，再到 Generator 函数，每次都有所改进，但又让人觉得不彻底。它们都有额外的复杂性，都需要理解抽象的底层运行机制。 <br />
> 异步编程的最高境界，就是根本不用关心它是不是异步。

很多人认为`async`函数是异步操作的终极解决方案

```javascript
<template>
</template>

<script>
export default {
	async created() {
		try {
			const res = await this.getData()
			console.log(res)
		} catch(e) {
			console.log(e)
		}
	},
	methods: {
		// ajax异步请求
		getData() {
			return new Promise((resolve, reject) => {
				tools.ajax('xxx', {id: 1}, res => {
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
	}
}
</script>
```