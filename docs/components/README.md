# 快速开始

## 提醒
- 所有组件均以`z-`开头, 除非重写组件样式, 其他情况`请不要使用z-开头的class`

## Build Setup
```bash
# clone
git clone https://gitee.com/infozx/infozx_temp.git

# install dependencies
cd infozx_temp
npm install

# serve with hot reload at localhost:2333
npm run dev

# build for production with minification
npm run build
```

## 文档生成
这里使用的是[vuepress](http://caibaojian.com/vuepress/guide/)生成工具
```bash
vuepress dev docs

vuepress build docs
```

## 贡献代码
1. 首先`fork`代码到自己的仓库中
2. clone下自己仓库中的代码到本地
```bash
git clone your url
```
3. 修改代码后，提交的自己仓库
4. 提交`PR`至`infozx/infozx-temp`
5. 等待管理员处理

## git基本操作
这里以`https://gitee.com/infozx/infozx_temp.git`仓库为示例
```bash
# clone项目
git clone https://gitee.com/infozx/infozx_temp.git

# 提交项目一般分为以下几步

# 将所有更改的文件添加进缓存
git add .

# 提交代码，这里是提交到本地，而不是远程服务器，和SVN是有区别的
git commit -m "修改了xxx"

# 将代码提交的master仓库
git push origin master
```

## 说明
- 基于`vue cli`搭建的`多页面`开发环境
- `scss`、 `sass`预处理css文件
- `Vue`版本 `2.4.2`

## 目录结构
```
|- build
|- config
|- src
  |- common        // 资源文件(该目录下可使用ES6,ES7等语法)
    |- filters       // vue过滤器
    |- plug          // vue插件
  |- components    // 组件
  	|- ...
  |- module
  	|- ...           // 页面
|- static          // 资源文件(该目录下不可以使用ES6,ES7等语法)
	|- common          // 公共依赖
```

## Licence
MIT