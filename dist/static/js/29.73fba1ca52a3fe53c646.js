webpackJsonp([29],{SRrt:function(t,e){},SndU:function(t,e){},ikU4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:{options:{type:Object,default:function(){return{}}}},computed:{opt:function(){return mui.extend({},{style:"",list:[],isRadius:!0,showAvatar:!0},this.options)}},methods:{onBadgeClick:function(t,e){this.$emit("onBadgeClick",e)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"z-badge-wrap"},[a("ul",{staticClass:"mui-table-view"},t._l(t.opt.list,function(e,i){return a("li",{key:i,staticClass:"mui-table-view-cell mui-media",on:{tap:function(a){t.onBadgeClick(a,e)}}},[a("a",{staticClass:"mui-navigate-right",attrs:{href:"javascript:;"}},[t.opt.showAvatar&&e.image?a("img",{staticClass:"mui-media-object mui-pull-left mr10",class:{radius50:t.opt.isRadius,right:t.opt.isRight},attrs:{src:e.image}}):t._e(),t._v(" "),t.opt.showAvatar&&!e.image?a("div",{staticClass:"z-badge-text mui-pull-left"},[t._v(t._s(e.text))]):t._e(),t._v(" "),a("div",{staticClass:"mui-media-body"},[a("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"mui-ellipsis"},[t._v(t._s(e.desc))])]),t._v(" "),e.badges?a("div",{staticClass:"z-badge",class:[t.opt.style,1==e.badges.length?"z-badge-one":""]},t._l(e.badges,function(i,s){return a("span",{key:s,staticClass:"z-badge-item iconfont",class:[i.active?"active":"",i.icon],style:{color:i.color,borderColor:i.color,backgroundColor:i.background},on:{tap:function(a){a.stopPropagation(),t.$emit("onBadgeItem",e)}}},[t._v(t._s(i.name))])}),0):t._e()])])}),0)])},staticRenderFns:[]};var n={data:function(){return{options:{list:[{text:"张",title:"马邦花园",desc:"6-666",badges:[{name:"签",active:!0},{name:"社",active:!0},{name:"工",active:!0},{name:"开",active:!1}]},{text:"李",title:"马邦花园",desc:"8-888",badges:[{name:"签",active:!0},{name:"社",active:!1},{name:"工",active:!1},{name:"开",active:!1}]}]},options2:{list:[{text:"张",title:"马邦花园",desc:"6-666",badges:[{name:"退",active:!1}]},{text:"李",title:"马邦花园",desc:"8-888",badges:[{name:"退",active:!0}]}]},options3:{style:"",list:[{text:"张",title:"马邦花园",desc:"6-666",badges:[{icon:"icon-dianying",active:!0}]},{text:"李",title:"马邦花园",desc:"8-888",badges:[{icon:"icon-dianying"}]}]},options4:{style:"background",list:[{text:"张",title:"马邦花园",desc:"6-666",badges:[{name:"签",active:!0},{name:"社",active:!0},{name:"工",active:!0},{name:"开",active:!1}]},{text:"李",title:"马邦花园",desc:"8-888",badges:[{name:"签",active:!0},{name:"社",active:!1},{name:"工",active:!1},{name:"开",active:!1}]}]}}},methods:{onBadgeClick:function(t){console.log(t)}},components:{BadgeCell:a("VU/8")(i,s,!1,function(t){a("SRrt")},null,null).exports}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("badge-cell",{attrs:{options:t.options},on:{onBadgeClick:t.onBadgeClick}}),t._v(" "),a("div",{staticClass:"mt10"}),t._v(" "),a("badge-cell",{attrs:{options:t.options2},on:{onBadgeClick:t.onBadgeClick}}),t._v(" "),a("div",{staticClass:"mt10"}),t._v(" "),a("badge-cell",{attrs:{options:t.options3},on:{onBadgeClick:t.onBadgeClick}}),t._v(" "),a("div",{staticClass:"mt10"}),t._v(" "),a("badge-cell",{attrs:{options:t.options4},on:{onBadgeClick:t.onBadgeClick}})],1)},staticRenderFns:[]};var c=a("VU/8")(n,o,!1,function(t){a("SndU")},null,null);e.default=c.exports}});
//# sourceMappingURL=29.73fba1ca52a3fe53c646.js.map