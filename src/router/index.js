import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/views/test.vue'], resolve)
    },
    // button
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/Home.vue'], resolve)
    },
    {
      path: '/addCutImgButton',
      name: 'addCutImgButton',
      component: resolve => require(['@/views/components/button/addCutImgButton.vue'], resolve)
    },
    {
      path: '/addImgButton',
      name: 'AddImgButton',
      component: resolve => require(['@/views/components/button/addImgButton.vue'], resolve)
    },
    {
      path: '/basicButton',
      name: 'BasicButton',
      component: resolve => require(['@/views/components/button/basicButton.vue'], resolve)
    },
    {
      path: '/bubbleButton',
      name: 'BubbleButton',
      component: resolve => require(['@/views/components/button/bubbleButton.vue'], resolve)
    },
    {
      path: '/multiButton',
      name: 'MultiButton',
      component: resolve => require(['@/views/components/button/multiButton.vue'], resolve)
    },
    {
      path: '/shopButton',
      name: 'ShopButton',
      component: resolve => require(['@/views/components/button/shopButton.vue'], resolve)
    },
    // cell
    {
      path: '/avatarCell',
      name: 'avatarCell',
      component: resolve => require(['@/views/components/cell/avatarCell.vue'], resolve)
    },
    {
      path: '/badgeCell',
      name: 'badgeCell',
      component: resolve => require(['@/views/components/cell/badgeCell.vue'], resolve)
    },
    {
      path: '/blendCell',
      name: 'blendCell',
      component: resolve => require(['@/views/components/cell/blendCell.vue'], resolve)
    },
    {
      path: '/blockCell',
      name: 'blockCell',
      component: resolve => require(['@/views/components/cell/blockCell.vue'], resolve)
    },
    {
      path: '/blockSlidCell',
      name: 'blockSlidCell',
      component: resolve => require(['@/views/components/cell/blockSlidCell.vue'], resolve)
    },
    {
      path: '/centerCell',
      name: 'centerCell',
      component: resolve => require(['@/views/components/cell/centerCell.vue'], resolve)
    },
    {
      path: '/headCell',
      name: 'headCell',
      component: resolve => require(['@/views/components/cell/headCell.vue'], resolve)
    },
    {
      path: '/multiColCell',
      name: 'multiColCell',
      component: resolve => require(['@/views/components/cell/multiColCell.vue'], resolve)
    },
    {
      path: '/noticeCell',
      name: 'noticeCell',
      component: resolve => require(['@/views/components/cell/noticeCell.vue'], resolve)
    },
    {
      path: '/selectCell',
      name: 'selectCell',
      component: resolve => require(['@/views/components/cell/selectCell.vue'], resolve)
    },
    {
      path: '/selectSingle',
      name: 'selectSingle',
      component: resolve => require(['@/views/components/cell/selectSingle.vue'], resolve)
    },
    {
      path: '/slideDelCell',
      name: 'slideDelCell',
      component: resolve => require(['@/views/components/cell/slideDelCell.vue'], resolve)
    },
    {
      path: '/textBlockCell',
      name: 'textBlockCell',
      component: resolve => require(['@/views/components/cell/textBlockCell.vue'], resolve)
    },
    {
      path: '/textCell',
      name: 'textCell',
      component: resolve => require(['@/views/components/cell/textCell.vue'], resolve)
    },
    {
      path: '/timeCell',
      name: 'timeCell',
      component: resolve => require(['@/views/components/cell/timeCell.vue'], resolve)
    },
    // chart
    {
      path: '/bar',
      name: 'bar',
      component: resolve => require(['@/views/components/chart/bar.vue'], resolve)
    },
    {
      path: '/barChart',
      name: 'barChart',
      component: resolve => require(['@/views/components/chart/barChart.vue'], resolve)
    },
    {
      path: '/gauge',
      name: 'gauge',
      component: resolve => require(['@/views/components/chart/gauge.vue'], resolve)
    },
    {
      path: '/gauge2',
      name: 'gauge2',
      component: resolve => require(['@/views/components/chart/gauge2.vue'], resolve)
    },
    {
      path: '/line',
      name: 'line',
      component: resolve => require(['@/views/components/chart/line.vue'], resolve)
    },
    {
      path: '/lineChart',
      name: 'lineChart',
      component: resolve => require(['@/views/components/chart/lineChart.vue'], resolve)
    },
    {
      path: '/pie',
      name: 'pie',
      component: resolve => require(['@/views/components/chart/pie.vue'], resolve)
    },
    {
      path: '/pieChart',
      name: 'pieChart',
      component: resolve => require(['@/views/components/chart/pieChart.vue'], resolve)
    },
    {
      path: '/progressChart',
      name: 'progressChart',
      component: resolve => require(['@/views/components/chart/progressChart.vue'], resolve)
    },
    {
      path: '/ring',
      name: 'ring',
      component: resolve => require(['@/views/components/chart/ring.vue'], resolve)
    },
    // doubleHit
    {
      path: '/doubleHit',
      name: 'doubleHit',
      component: resolve => require(['@/views/components/doubleHit/doubleHit.vue'], resolve)
    },
    // head
    {
      path: '/basicHead',
      name: 'basicHead',
      component: resolve => require(['@/views/components/head/basicHead.vue'], resolve)
    },
    {
      path: '/searchHead',
      name: 'searchHead',
      component: resolve => require(['@/views/components/head/searchHead.vue'], resolve)
    },
    // map
    {
      path: '/gelocationMap',
      name: 'gelocationMap',
      component: resolve => require(['@/views/components/map/gelocationMap.vue'], resolve)
    },
    {
      path: '/geoMultiMap',
      name: 'geoMultiMap',
      component: resolve => require(['@/views/components/map/geoMultiMap.vue'], resolve)
    },
    {
      path: '/multiAddrMap',
      name: 'multiAddrMap',
      component: resolve => require(['@/views/components/map/multiAddrMap.vue'], resolve)
    },
    // other
    {
      path: '/actionSheet',
      name: 'actionSheet',
      component: resolve => require(['@/views/components/other/actionSheet.vue'], resolve)
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: resolve => require(['@/views/components/other/calendar.vue'], resolve)
    },
    {
      path: '/choise',
      name: 'choise',
      component: resolve => require(['@/views/components/other/choise.vue'], resolve)
    },
    {
      path: '/choiseMark',
      name: 'choiseMark',
      component: resolve => require(['@/views/components/other/choiseMark.vue'], resolve)
    },
    {
      path: '/cropper',
      name: 'cropper',
      component: resolve => require(['@/views/components/other/cropper.vue'], resolve)
    },
    {
      path: '/draw',
      name: 'draw',
      component: resolve => require(['@/views/components/other/draw.vue'], resolve)
    },
    {
      path: '/pickerSelect',
      name: 'pickerSelect',
      component: resolve => require(['@/views/components/other/pickerSelect.vue'], resolve)
    },
    {
      path: '/pickerSelect2',
      name: 'pickerSelect2',
      component: resolve => require(['@/views/components/other/pickerSelect2.vue'], resolve)
    },
    {
      path: '/pickerSelect3',
      name: 'pickerSelect3',
      component: resolve => require(['@/views/components/other/pickerSelect3.vue'], resolve)
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: resolve => require(['@/views/components/other/qrcode.vue'], resolve)
    },
    {
      path: '/quillEditor',
      name: 'quillEditor',
      component: resolve => require(['@/views/components/other/quillEditor.vue'], resolve)
    },
    {
      path: '/sideItem',
      name: 'sideItem',
      component: resolve => require(['@/views/components/other/sideItem.vue'], resolve)
    },
    {
      path: '/sidePanel',
      name: 'sidePanel',
      component: resolve => require(['@/views/components/other/sidePanel.vue'], resolve)
    },
    {
      path: '/sort',
      name: 'sort',
      component: resolve => require(['@/views/components/other/sort.vue'], resolve)
    },
    {
      path: '/trainTickets',
      name: 'trainTickets',
      component: resolve => require(['@/views/components/other/trainTickets.vue'], resolve)
    },
    // slide
    {
      path: '/horizontalSlide',
      name: 'horizontalSlide',
      component: resolve => require(['@/views/components/slide/horizontalSlide.vue'], resolve)
    },
    // timeAxis
    {
      path: '/verticalAxis',
      name: 'verticalAxis',
      component: resolve => require(['@/views/components/timeAxis/verticalAxis.vue'], resolve)
    },
    {
      path: '/weekCalendar',
      name: 'weekCalendar',
      component: resolve => require(['@/views/components/timeAxis/weekCalendar.vue'], resolve)
    },
    // hentai
    {
      path: '/hentai',
      name: 'hentai',
      component: resolve => require(['@/views/components/hentai/hentai.vue'], resolve)
    },
    {
      path: '/okinaHentai',
      name: 'okinaHentai',
      component: resolve => require(['@/views/components/hentai/okinaHentai.vue'], resolve)
    }
  ]
})
