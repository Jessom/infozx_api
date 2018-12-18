# ES6模块导入导出

## 导入
- 只想导入源模块的部分内容
假设`a.js`为源模块
```javascript
// a.js
export let num = 10
export let name = '张三'
```

需要在`b.js`中使用a模块中的num
```javascript
// b.js
import { num } from './a'

console.log(num) 		// 10
```

<br />

- 重命名
假设`a.js`为源模块
```javascript
// a.js
export let tademingzijiaozhangsan = '张三'
```

看到这里，我都忍不住要骂人，奈何咱没权限修改模块，只能重命名了
```javascript
// b.js
import { tademingzijiaozhangsan as name } from './a'

console.log(name) 		// 张三
```

<br />

- 想把模块中的所有导出都导入进来，但模块偏偏不是以`export default`方式导出
假设`a.js`为源模块
```javascript
// a.js
export let num = 10
export let name = '张三'
```

在`b.js`中，只需要使用通配符`*`就可以把`a.js`中的模块都导入进来
```javascript
// b.js
import * as moduleA from './a'

console.log(moduleA.num) 		// 10
```

<br />

- 源模块没有对外任何导出
```javascript
// a.js
let arr = [1,2,3]
arr.push(4)
console.log(arr)
```

在`b.js`中引入整个`a.js`就可以了
```javascript
// b.js
import './a' 		// 会执行a.js中的所有逻辑
```

## 导出
- 导出部分内容
```javascript
// 导出
export let num = 10

// 导入
import { num } from './a'
```

- export default
```javascript
// 导出
const getName = () => {
	let name = '张三'
	return name
}
export default {
	getName
}

// 导入
import a from './a'
a.getName() 		// 张三
```
