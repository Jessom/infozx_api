webpackJsonp([57],{"5Oqw":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={props:{options:{type:Object,default:function(){return{}}}},computed:{opt:function(){return mui.extend(!0,{},{left:{title:"1月1日",meta:"开始"},right:{title:"12月31日",meta:"结束"}},this.options)}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"z-train-ticket-wrap"},[e("div",{staticClass:"z-train-body mui-clearfix"},[e("div",{staticClass:"z-train-body-left z-train-item",on:{tap:function(i){t.$emit("click",t.opt.left)}}},[e("h2",{staticClass:"title"},[t._v(t._s(t.opt.left.title))]),t._v(" "),e("span",{staticClass:"meta"},[t._v(t._s(t.opt.left.meta))])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"z-train-body-right z-train-item",on:{tap:function(i){t.$emit("click",t.opt.right)}}},[e("h2",{staticClass:"title"},[t._v(t._s(t.opt.right.title))]),t._v(" "),e("span",{staticClass:"meta"},[t._v(t._s(t.opt.right.meta))])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"z-train-body-center z-train-item"},[i("span",{staticClass:"line"})])}]};var a={data:function(){return{opt:{left:{title:"苏州北",meta:"起始站"},right:{title:"徐州东",meta:"终点站"}}}},methods:{click:function(t){console.log(t)}},components:{TrainTickets:e("VU/8")(n,s,!1,function(t){e("J/Y2")},null,null).exports}},c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container"},[i("train-tickets",{attrs:{options:this.opt},on:{click:this.click}})],1)},staticRenderFns:[]},l=e("VU/8")(a,c,!1,null,null,null);i.default=l.exports},"J/Y2":function(t,i){}});
//# sourceMappingURL=57.7b1df56e6bc6fe7f919b.js.map