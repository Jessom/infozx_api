webpackJsonp([31],{"2Bo2":function(t,i){},jFhP:function(t,i){},zKXP:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={props:{options:{type:Object,default:function(){return{}}}},computed:{opt:function(){return mui.extend({},{id:"action-sheet",cancel:!0,list:[]},this.options)}},methods:{cancel:function(){mui("#"+this.opt.id).popover("toggle")},onActionSheet:function(t,i){this.$emit("onActionSheet",i)}}},o={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"z-action-sheet-container mui-popover mui-popover-bottom mui-popover-action",attrs:{id:t.opt.id}},[n("ul",{staticClass:"mui-table-view"},t._l(t.opt.list,function(i,e){return n("li",{key:e,staticClass:"mui-table-view-cell",on:{tap:function(n){t.onActionSheet(n,i)}}},[n("i",{staticClass:"iconfont mr5",class:i.icon}),t._v("\n\t\t\t"+t._s(i.title)+"\n\t\t")])}),0),t._v(" "),t.cancel?n("ul",{staticClass:"mui-table-view"},[n("li",{staticClass:"mui-table-view-cell",on:{tap:t.cancel}},[n("b",[t._v("取消")])])]):t._e()])},staticRenderFns:[]};var s={data:function(){return{options:{id:"action",list:[{title:"拍照"},{title:"相册选择"}]}}},methods:{action:function(){mui("#"+this.options.id).popover("toggle")},onActionSheet:function(t){alert(t.title),mui("#"+this.options.id).popover("toggle")}},components:{ActionSheet:n("VU/8")(e,o,!1,function(t){n("2Bo2")},null,null).exports}},c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container"},[i("button",{staticClass:"mui-btn mui-btn-block mui-btn-primary",on:{tap:this.action}},[this._v("action sheet")]),this._v(" "),i("action-sheet",{attrs:{options:this.options},on:{onActionSheet:this.onActionSheet}})],1)},staticRenderFns:[]};var a=n("VU/8")(s,c,!1,function(t){n("jFhP")},null,null);i.default=a.exports}});
//# sourceMappingURL=31.504294234523bcb9ec05.js.map