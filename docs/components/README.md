# cut

- [预览](https://watasi.cn/cut/dist/)
- [文档](https://watasi.cn/cut/)

::: warning 提示
`插件`库的使用，请务必在`main.js`中添加一下代码
:::

```javascript
import plug from '@/plug'

Vue.use(plug)
```

## 目录结构
``` diff
|- build
|- config
|- docs		// 文档
|- src
|  |- assets		// 资源文件
|  |- components		// vue组件
|  |- plug		// vue插件
|  |- router		// vue router配置
|  |- views		// 页面
|  |- App.vue
|  |- main.js
|- static
|- .babelrc
|- .postcssrc.js		// postcss配置
|- deploy.sh		// 编译文档
```

## Build Setup

``` bash
# clone项目
git clone https://github.com/Jessom/cut.git

# 安装依赖
cd cut && npm install

# 运行开发环境，监听8080端口
npm run dev

# 编译打包
npm run build
```

## Build doc

``` bash{8}
# 开发环境调试
npm run docs:dev

# 编译文档
npm run docs:build

# 编译项目 && 编译文档 && 提交github
npm run deploy
```
