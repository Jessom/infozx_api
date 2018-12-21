module.exports = {
  title: 'わタし', // 设置网站标题
  description: 'わタしの ブログ', //描述
  dest: './api',   // 设置输出目录
  port: 2233, //端口
  base: '/infozx_api/api/',
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
      { text: '工具类', link: '/utils/' },
      { text: 'static', link: '/static/' },
      { text: 'js篇', link: '/js/' },
      { text: 'css篇', link: '/css/' },
      { text: 'gitee',        // 这里是下拉列表展现形式。
        items: [
          { text: '仓库', link: 'https://gitee.com/watasi/infozx_api' },
          { text: 'ISSUS', link: 'https://gitee.com/watasi/infozx_api/issues' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/components/': [
        {
          title: 'head组件',
          collapsable: true,
          children: [ 'head/BasicHead', 'head/SearchHead' ]
        },
        {
          title: 'cell组件',
          collapsable: true,
          children: [
            'cell/AvatarCell', 'cell/BadgeCell', 'cell/BlendCell', 'cell/BlockCell',
            'cell/BlockSlidCell', 'cell/CenterCell', 'cell/HeadCell', 'cell/MultiColCell',
            'cell/NoticeCell', 'cell/SelectCell', 'cell/SelectSingle', 'cell/SlideDelCell',
            'cell/TextBlockCell', 'cell/TextCell', 'cell/TimeCell'
          ]
        },
        {
          title: 'button组件',
          collapsable: true,
          children: [
            'button/AddCutImgButton', 'button/AddImgButton', 'button/BasicButton',
            'button/BubbleButton', 'button/MultiButton', 'button/ShopButton'
          ]
        },
        {
          title: '图表组件',
          collapsable: true,
          children: [
            'charts/Bar', 'charts/BarChart', 'charts/Gauge', 'charts/Gauge2',
            'charts/Line', 'charts/LineChart', 'charts/Pie', 'charts/PieChart',
            'charts/ProgressChart', 'charts/Ring',
          ]
        },
        {
          title: 'map地图组件',
          collapsable: true,
          children: [
            'map/GeolocationMap', 'map/GeoMultiMap', 'map/MultiAddrMap'
          ]
        },
        {
          title: 'page组件',
          collapsable: true,
          children: [
            'page/PageSlideBar', 'page/PageSlideHome'
          ]
        },
        {
          title: 'slide组件',
          collapsable: true,
          children: [ 'slide/HorizontalSlide' ]
        },
        {
          title: 'timeAxis组件',
          collapsable: true,
          children: [
            'timeAxis/VerticalAxis', 'timeAxis/WeekCalendar'
          ]
        },
        {
          title: 'DoubleHit',
          collapsable: true,
          children: [ 'DoubleHit/DoubleHit' ]
        },
        {
          title: '其他常用组件',
          collapsable: true,
          children: [
            'other/ActionSheet', 'other/Calendar', 'other/Card', 'other/Choise',
            'other/ChoiseMark', 'other/Cropper', 'other/Draw', 'other/Fgroup', 'other/PickerSelect',
            'other/PickerSelect2', 'other/PickerSelect3', 'other/PreviewImg', 'other/ProgressBar',
            'other/QRCode', 'other/QuillEditor', 'other/SideItem', 'other/SidePanel',
            'other/Sort', 'other/TrainTickets'
          ]
        },
        {
          title: 'hentai',
          collapsable: true,
          children: [ 'hentai/Main' ]
        },
      ],
      '/utils/': [
        {
          title: '工具类',
          collapsable: false,
          children: [
            'compressImage', 'getPhotoOrientation', 'login',
            'scan', 'selectImg', 'upload'
          ]
        }
      ],
      '/static/': [
        {
          title: 'static',
          collapsable: false,
          children: [
            'config', 'tools', 'zxplug'
          ]
        }
      ],
      '/js/': [
        {
          title: 'static',
          collapsable: false,
          children: [
            'deepCopy', 'export', 'geolocation', 'promise'
          ]
        }
      ],
      '/css/': [
        {
          title: 'static',
          collapsable: false,
          children: [ 'calc' ]
        }
      ]
    }
  }
}