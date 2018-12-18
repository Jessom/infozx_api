module.exports = {
  title: 'わタし', // 设置网站标题
  description: 'わタしの ブログ', //描述
  // dest: './doc',   // 设置输出目录
  port: 2233, //端口
  base: '/infozx_api/',
  themeConfig: { //主题配置
    // 假定 GitHub。也可以是一个完整的 GitLab 网址
    repo: 'https://gitee.com/watasi/infozx_api',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'master',
    // 默认为 true，设置为 false 来禁用
    editLinks: true,
    // 添加导航栏
    nav: [
      { text: '组件', link: '/components/' },
      { text: 'github',        // 这里是下拉列表展现形式。
        items: [
          { text: '仓库', link: 'https://gitee.com/watasi/infozx_api' },
          { text: 'ISSUS', link: 'https://gitee.com/watasi/infozx_api/issues' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/components/': [
        /*{
          title: '快速开始',
          collapsable: false,
        }, */{
          title: 'head组件',
          collapsable: true,
          children: [ 'head/BasicHead', 'head/SearchHead' ]
        }
      ]
    }
  }
}