webpackJsonp([28],{My4k:function(t,e){},"O/T9":function(t,e){},UkrD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={props:{list:Array,options:{type:Object,default:function(){return{}}}},computed:{opt:function(){return mui.extend({},{border:!0,theme:!0},this.options)}},methods:{onCell:function(t,e){this.$emit("onCellClick",e)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"z-text-block-cell-contaienr horizontal",class:{"z-border":t.opt.border,"z-theme":t.opt.theme}},t._l(t.list,function(e,l){return n("div",{key:l,staticClass:"horizontal-cell z-text-block-item",on:{tap:function(n){t.onCell(n,e)}}},[n("div",[t._v(t._s(e.title))]),t._v(" "),n("div",[t._v(t._s(e.desc))])])}),0)},staticRenderFns:[]};var o={data:function(){return{list:[{desc:"按时出勤",title:"0天"},{desc:"缺勤",title:"7天"},{desc:"异常出勤",title:"3天"},{desc:"请假出差",title:"0天"},{desc:"休息",title:"2天"}]}},methods:{onCellClick:function(t){console.log(t)}},components:{TextBlockCell:n("VU/8")(l,i,!1,function(t){n("O/T9")},null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{padding:"15px 0",background:"red"}},[e("text-block-cell",{attrs:{list:this.list},on:{onCellClick:this.onCellClick}})],1)},staticRenderFns:[]};var s=n("VU/8")(o,c,!1,function(t){n("My4k")},null,null);e.default=s.exports}});
//# sourceMappingURL=28.94a0da6b701c34d14361.js.map