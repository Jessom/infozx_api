# js中对象的深浅copy
::: tip 提示
内有彩蛋哦
:::
在开发中，用到的最多的就是对象(`Array`、`Json`)，经常会在对象上进行各种操作；有时候我们需要保存原始对象，然后再新的对象上进行操作，这时就涉及到了对象的`深拷贝`、`浅拷贝`的问题了

::: tip 提示
希望大家牢牢记住: **在js中，对象之间都是引用的关系**
:::

## 浅拷贝
> 简单来说，浅拷贝只复制一层对象的属性

下面看一个例子<br />
```javascript
var a = { name: '张三', age: 18 };
var b = a;

b.age = 25;

console.log(a)	// { name: '张三', age: 25 }
console.log(b)	// { name: '张三', age: 25 }
```
直接把变量a赋值给变量b，当改变变量b中的属性时，变量a中的属性也会改变，这是因为`变量a和变量b指向的都是同一内存地址` <br />
如果要实现对对象a的拷贝，传统的做法是写个`copy`方法，遍历copy<br />
随着`ES6`的发布，出现了`扩展运算符(...)`，就可以很轻松的实现对象的浅拷贝<br />

```javascript
var a = { name: '张三', age: 18 };
var b = { ...a };

b.age = 25;

console.log(a)	// { name: '张三', age: 18 }
console.log(b)	// { name: '张三', age: 25 }
```
这里就实现了对象的浅拷贝(数组也是使用相同方法)

## 深拷贝
刚刚也说了，`浅拷贝只复制一层对象的属性`，那如果我们的对象复杂一点的时候会怎么样呢？
```javascript
var a = [{ name: '张三', age: 18 }];
var b = [...a]

b[0].age = 25

console.log(a)	// [{ name: '张三', age: 25 }]
console.log(b)	// [{ name: '张三', age: 25 }]
```

还是出现了相同的问题 <br />
没关系，我们可以通过`递归`来实现对象的`深拷贝`<br />
方法这里我就不写出来了，请自行[google](https://www.google.com/)、[baidu](https://www.baidu.com/)，主要是写起来太麻烦了(其实是不会)<br /><br />
### 哈哈哈，我来说个投机取巧的办法

```javascript
var a = [{ name: '张三', age: 18 }];
var b = JSON.parse(JSON.stringify(a));

b[0].age = 25

console.log(a)	// [{ name: '张三', age: 18 }]
console.log(b)	// [{ name: '张三', age: 25 }]
```

先把需要拷贝的对象转换成字符串，字符串是没有引用关系的，然后把字符串转换成对象，就很beautiful滴解决了`对象深拷贝`的问题了

<br /><br /><br /><br /><br /><br /><br />

## 彩蛋
有a和b两个对象
```javascript
var a = {name: '张三', age: 18}
var b = {age: 25, addr: '天上人间'}
```
需要把`a对象`和`b对象`合并起来，效果如下
```javascript
{ name: '张三', age: 25, addr: '天上人间' }
```
这个该怎么实现呢？<br /><br />
具体方法还是去[google](https://www.google.com/)、[baidu](https://www.baidu.com/)吧

```javascript
var a = { name: '张三', age: 18 }
var b = { age: 25, address: '天上人间' }

console.log(mui.extend({}, a, b))		// { name: '张三', age: 25, address: '天上人间' }
```

<br />
嘻嘻嘻，这里用了`mui.extend`方法，[点我查看](http://dev.dcloud.net.cn/mui/util/#extend)具体用法

### 留个小问题

```javascript
var a = { p: { name: '张三', age: 18 } }
var b = { p: { age: 25, address: '天上人间' } }

console.log(mui.extend({}, a, b)) 	// { p: { age: 25, address: '天上人间' } }
```

对象b直接把对象a覆盖了，这该怎么搞呢？ <br />
好记性不如烂笔头，自己动手试试吧。(注意查看`mui.extend`的文档哦)