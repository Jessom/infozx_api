# 神奇的calc()
亲测，支持在`IOS8.1`系统(因为这里设备最低是`IOS8.1`)

## 语法
calc() = calc(四则运算)

## 说明
用于动态计算长度值 <br />
需要注意的是，运算符前后都需要保留一个空格，例如
```
width: calc(100% - 10px)
```
任何长度值都可以使用calc()函数进行计算 <br />
calc()函数支持`+ - * /` 运算 <br />
calc()函数使用`标准的数学运算优先级规则` <br />

## 临床试验
在写`addImgButton`组件时<br />
我是希望一排平均显示4个图片容器，每个容器的宽高相同 <br />
首先想到的就是`像素`，但是`像素`存在一个明显的缺点，不同设备分辨率不同，导致无法平均分布，抛弃 <br />
第二个想到的就是`百分比`，缺点也很明显，`高度`不好设置，抛弃 <br />

*一道闪电*， 真実はいつも一つ <br />
`calc`这个东西被这道闪电劈了下来 <br />
劈下来的不止有`calc`，还有`vm`、`vh`这俩货 <br />
事不宜迟，赶快开动(万一忘了呢) <br />
```css
.z-img-item {
	width: calc(25vw - 17.5px);
	height: calc(25vw - 17.5px);
	line-height: calc(25vw - 17.5px);
}
```
### Beautiful!!!
[点我查看效果](http://infozx.gitee.io/infozx_temp/dist/module/addImgButton.html) <br />

