import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // button
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/Home.vue'], resolve)
    },
    {
      path: '/addCutImgButton',
      name: 'addCutImgButton',
      component: resolve => require(['@/views/button/addCutImgButton.vue'], resolve)
    },
    {
      path: '/addImgButton',
      name: 'AddImgButton',
      component: resolve => require(['@/views/button/addImgButton.vue'], resolve)
    },
    {
      path: '/basicButton',
      name: 'BasicButton',
      component: resolve => require(['@/views/button/basicButton.vue'], resolve)
    },
    {
      path: '/bubbleButton',
      name: 'BubbleButton',
      component: resolve => require(['@/views/button/bubbleButton.vue'], resolve)
    },
    {
      path: '/multiButton',
      name: 'MultiButton',
      component: resolve => require(['@/views/button/multiButton.vue'], resolve)
    },
    {
      path: '/shopButton',
      name: 'ShopButton',
      component: resolve => require(['@/views/button/shopButton.vue'], resolve)
    },
    // cell
    {
      path: '/avatarCell',
      name: 'avatarCell',
      component: resolve => require(['@/views/cell/avatarCell.vue'], resolve)
    },
    {
      path: '/badgeCell',
      name: 'badgeCell',
      component: resolve => require(['@/views/cell/badgeCell.vue'], resolve)
    },
    {
      path: '/blendCell',
      name: 'blendCell',
      component: resolve => require(['@/views/cell/blendCell.vue'], resolve)
    },
    {
      path: '/blockCell',
      name: 'blockCell',
      component: resolve => require(['@/views/cell/blockCell.vue'], resolve)
    },
    {
      path: '/blockSlidCell',
      name: 'blockSlidCell',
      component: resolve => require(['@/views/cell/blockSlidCell.vue'], resolve)
    },
    {
      path: '/centerCell',
      name: 'centerCell',
      component: resolve => require(['@/views/cell/centerCell.vue'], resolve)
    },
    {
      path: '/headCell',
      name: 'headCell',
      component: resolve => require(['@/views/cell/headCell.vue'], resolve)
    },
    {
      path: '/multiColCell',
      name: 'multiColCell',
      component: resolve => require(['@/views/cell/multiColCell.vue'], resolve)
    },
    {
      path: '/noticeCell',
      name: 'noticeCell',
      component: resolve => require(['@/views/cell/noticeCell.vue'], resolve)
    },
    {
      path: '/selectCell',
      name: 'selectCell',
      component: resolve => require(['@/views/cell/selectCell.vue'], resolve)
    },
    {
      path: '/selectSingle',
      name: 'selectSingle',
      component: resolve => require(['@/views/cell/selectSingle.vue'], resolve)
    },
    {
      path: '/slideDelCell',
      name: 'slideDelCell',
      component: resolve => require(['@/views/cell/slideDelCell.vue'], resolve)
    },
    {
      path: '/textBlockCell',
      name: 'textBlockCell',
      component: resolve => require(['@/views/cell/textBlockCell.vue'], resolve)
    },
    {
      path: '/textCell',
      name: 'textCell',
      component: resolve => require(['@/views/cell/textCell.vue'], resolve)
    },
    {
      path: '/timeCell',
      name: 'timeCell',
      component: resolve => require(['@/views/cell/timeCell.vue'], resolve)
    },
    // chart
    {
      path: '/bar',
      name: 'bar',
      component: resolve => require(['@/views/chart/bar.vue'], resolve)
    },
    {
      path: '/barChart',
      name: 'barChart',
      component: resolve => require(['@/views/chart/barChart.vue'], resolve)
    },
    {
      path: '/gauge',
      name: 'gauge',
      component: resolve => require(['@/views/chart/gauge.vue'], resolve)
    },
    {
      path: '/gauge2',
      name: 'gauge2',
      component: resolve => require(['@/views/chart/gauge2.vue'], resolve)
    },
    {
      path: '/line',
      name: 'line',
      component: resolve => require(['@/views/chart/line.vue'], resolve)
    },
    {
      path: '/lineChart',
      name: 'lineChart',
      component: resolve => require(['@/views/chart/lineChart.vue'], resolve)
    },
    {
      path: '/pie',
      name: 'pie',
      component: resolve => require(['@/views/chart/pie.vue'], resolve)
    },
    {
      path: '/pieChart',
      name: 'pieChart',
      component: resolve => require(['@/views/chart/pieChart.vue'], resolve)
    },
    {
      path: '/progressChart',
      name: 'progressChart',
      component: resolve => require(['@/views/chart/progressChart.vue'], resolve)
    },
    {
      path: '/ring',
      name: 'ring',
      component: resolve => require(['@/views/chart/ring.vue'], resolve)
    },
    // doubleHit
    {
      path: '/doubleHit',
      name: 'doubleHit',
      component: resolve => require(['@/views/doubleHit/doubleHit.vue'], resolve)
    },
    // head
    {
      path: '/basicHead',
      name: 'basicHead',
      component: resolve => require(['@/views/head/basicHead.vue'], resolve)
    },
    {
      path: '/searchHead',
      name: 'searchHead',
      component: resolve => require(['@/views/head/searchHead.vue'], resolve)
    },
    // map
    {
      path: '/gelocationMap',
      name: 'gelocationMap',
      component: resolve => require(['@/views/map/gelocationMap.vue'], resolve)
    },
    {
      path: '/geoMultiMap',
      name: 'geoMultiMap',
      component: resolve => require(['@/views/map/geoMultiMap.vue'], resolve)
    },
    {
      path: '/multiAddrMap',
      name: 'multiAddrMap',
      component: resolve => require(['@/views/map/multiAddrMap.vue'], resolve)
    },
    // other
    {
      path: '/actionSheet',
      name: 'actionSheet',
      component: resolve => require(['@/views/other/actionSheet.vue'], resolve)
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: resolve => require(['@/views/other/calendar.vue'], resolve)
    },
    {
      path: '/choise',
      name: 'choise',
      component: resolve => require(['@/views/other/choise.vue'], resolve)
    },
    {
      path: '/choiseMark',
      name: 'choiseMark',
      component: resolve => require(['@/views/other/choiseMark.vue'], resolve)
    },
    {
      path: '/cropper',
      name: 'cropper',
      component: resolve => require(['@/views/other/cropper.vue'], resolve)
    },
    {
      path: '/draw',
      name: 'draw',
      component: resolve => require(['@/views/other/draw.vue'], resolve)
    },
    {
      path: '/pickerSelect',
      name: 'pickerSelect',
      component: resolve => require(['@/views/other/pickerSelect.vue'], resolve)
    },
    {
      path: '/pickerSelect2',
      name: 'pickerSelect2',
      component: resolve => require(['@/views/other/pickerSelect2.vue'], resolve)
    },
    {
      path: '/pickerSelect3',
      name: 'pickerSelect3',
      component: resolve => require(['@/views/other/pickerSelect3.vue'], resolve)
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: resolve => require(['@/views/other/qrcode.vue'], resolve)
    },
    {
      path: '/quillEditor',
      name: 'quillEditor',
      component: resolve => require(['@/views/other/quillEditor.vue'], resolve)
    },
    {
      path: '/sideItem',
      name: 'sideItem',
      component: resolve => require(['@/views/other/sideItem.vue'], resolve)
    },
    {
      path: '/sidePanel',
      name: 'sidePanel',
      component: resolve => require(['@/views/other/sidePanel.vue'], resolve)
    },
    {
      path: '/sort',
      name: 'sort',
      component: resolve => require(['@/views/other/sort.vue'], resolve)
    },
    {
      path: '/trainTickets',
      name: 'trainTickets',
      component: resolve => require(['@/views/other/trainTickets.vue'], resolve)
    },
    // slide
    {
      path: '/horizontalSlide',
      name: 'horizontalSlide',
      component: resolve => require(['@/views/slide/horizontalSlide.vue'], resolve)
    },
    // timeAxis
    {
      path: '/verticalAxis',
      name: 'verticalAxis',
      component: resolve => require(['@/views/timeAxis/verticalAxis.vue'], resolve)
    },
    {
      path: '/weekCalendar',
      name: 'weekCalendar',
      component: resolve => require(['@/views/timeAxis/weekCalendar.vue'], resolve)
    },
  ]
})
