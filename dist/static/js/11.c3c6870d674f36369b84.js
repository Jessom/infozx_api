webpackJsonp([11],{P4Oe:function(t,i){},VJHu:function(t,i){},d8Dy:function(t,i){},esW6:function(t,i){},m0Pz:function(t,i,e){"use strict";var s=e("xt+v"),c={data:function(){return{select:0}},props:{title:{type:String,default:"方式"}},mounted:function(){var t=this;mui.init(),mui(".z-hentai-scroll").scroll(),s.a.$on("select",function(i){return t.select=i})}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"z-hentai-wrap"},[e("div",{staticClass:"mui-card-header"},[e("button",{staticClass:"mui-btn mui-icon mui-icon-back",on:{tap:function(i){t.$emit("back")}}}),t._v(" "),e("span",[t._v(t._s(t.title))]),t._v(" "),e("button",{staticClass:"mui-btn mui-icon mui-icon-closeempty",on:{tap:function(i){t.$emit("close")}}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:4!=t.select,expression:"select != 4"}],staticClass:"mui-scroll-wrapper z-hentai-scroll z-hentai-sc"},[e("div",{staticClass:"mui-scroll"},[t._t("default")],2)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:4==t.select,expression:"select == 4"}],staticClass:"unscroll"},[t._t("unscroll")],2),t._v(" "),e("div",{staticClass:"button-wrap"},[e("button",{staticClass:"mui-btn mui-btn-block base-btn",on:{tap:function(i){t.$emit("success")}}},[t._v("确定")])])])},staticRenderFns:[]};var n=e("VU/8")(c,a,!1,function(t){e("P4Oe")},null,null);i.a=n.exports},wJjV:function(t,i){},"y8/H":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("mvHQ"),c=e.n(s),a=e("xt+v"),n=e("m0Pz"),l=e("MtFl"),r=e("Dd8w"),h=e.n(r),u={data:function(){return{include:!1,branch:[],history:[],actived:[]}},methods:{init:function(t){this.branch=t},cellclick:function(t){t.children&&!t.children.length||this.actived.length>0||this.include||(this.history.push(this.branch),mui(".z-hentai-sc").scroll().scrollTo(0,0,0),this.init(t.children))},inputclick:function(t,i){!t.currentTarget.checked?this.actived.push(h()({},i,{include:this.include})):this.actived.splice(this.actived.findIndex(function(t){return t.id==i.id}),1)},includeEvent:function(){var t=this;this.include=!this.include,this.actived=this.actived.map(function(i){return i.include=t.include,i})},clearHistory:function(){mui('.z-branch-wrap input[type="checkbox"]').each(function(t,i){i.checked=!1}),this.include=!1,this.branch=[],this.history=[],this.actived=[]}}},d={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"z-branch-wrap"},[e("div",{staticClass:"z-alert"},[t._v("包含子部门，将不能进入下一级或上一级")]),t._v(" "),e("div",{staticClass:"mui-table-view"},[e("div",{staticClass:"mui-table-view-cell"},[e("span",[t._v("是否包含子部门")]),t._v(" "),e("div",{staticClass:"mui-switch mui-switch-mini",class:{"mui-active":t.include}},[e("div",{staticClass:"mui-switch-handle",on:{tap:t.includeEvent}})])])]),t._v(" "),e("div",{staticClass:"mui-input-group"},t._l(t.branch,function(i,s){return e("div",{key:s,staticClass:"mui-input-row mui-checkbox mui-left",class:{"right-icon":i.children&&i.children.length}},[e("span",{staticClass:"label",on:{tap:function(e){t.cellclick(i)}}},[t._v(t._s(i.title))]),t._v(" "),e("input",{attrs:{name:"checkbox",value:"Item 1",type:"checkbox"},on:{tap:function(e){t.inputclick(e,i)}}})])}),0)])},staticRenderFns:[]};var o=e("VU/8")(u,d,!1,function(t){e("wJjV")},null,null).exports,f=e("Gu7T"),v=e.n(f),m={data:function(){return{include:!1,staff:[],branch:[],history:{staff:[],branch:[]},actived:[],clicks:[]}},methods:{init:function(t,i){this.branch=t,this.staff=i||[]},cellclick:function(t){(t.staff&&t.staff.length||t.children&&t.children.length)&&(this.actived.length>0||this.include||(this.history.branch.push(this.branch),this.history.staff.push(this.staff),this.clicks.push(t),this.init(t.children,t.staff)))},includeEvent:function(){if(!(this.actived.length>0||this.clicks.length<=0))if(this.include=!this.include,this.include){var t=this.deepStaff(this.clicks[this.clicks.length-1]);this.staff=[].concat(v()(this.staff),v()(t))}else this.staff=this.clicks.length>0?this.clicks[this.clicks.length-1].staff:[]},inputclick:function(t,i){!t.currentTarget.checked?this.actived.push(i):this.actived.splice(this.actived.findIndex(function(t){return t.id==i.id}),1)},clearHistory:function(){this.include=!1,this.staff=[],this.branch=[],this.actived=[],this.clicks=[],this.history={branch:[],staff:[]}},deepStaff:function(t){var i=[];return function t(e){for(var s=0;s<e.length;s++){var c=e[s];if(!(c.staff&&c.staff.length||c.children&&c.children.length))break;i=[].concat(v()(i),v()(c.staff)),t(c.children)}}(t.children),i}}},p={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"z-staff-wrap mui-clearfix"},[e("div",{staticClass:"mui-pull-left z-staff-left"},[e("div",{staticClass:"mui-scroll-wrapper z-hentai-scroll"},[e("div",{staticClass:"mui-scroll"},[e("ul",{staticClass:"mui-table-view"},t._l(t.branch,function(i){return e("li",{key:i.id,staticClass:"mui-table-view-cell"},[e("a",{class:{"mui-navigate-right":i.staff&&i.staff.length||i.children&&i.children.length},on:{tap:function(e){t.cellclick(i)}}},[t._v(t._s(i.title))])])}),0)])])]),t._v(" "),e("div",{staticClass:"mui-pull-left z-staff-right"},[e("div",{staticClass:"mui-scroll-wrapper z-hentai-scroll"},[e("div",{staticClass:"mui-scroll"},[e("div",{staticClass:"z-alert"},[t._v("选择子成员，将不能进入下一级或上一级")]),t._v(" "),e("div",{staticClass:"mui-table-view"},[e("div",{staticClass:"mui-table-view-cell"},[e("span",[t._v("选择子成员")]),t._v(" "),e("div",{staticClass:"mui-switch mui-switch-mini",class:{"mui-active":t.include}},[e("div",{staticClass:"mui-switch-handle",on:{tap:t.includeEvent}})])])]),t._v(" "),e("div",{staticClass:"mui-input-group"},t._l(t.staff,function(i,s){return e("div",{key:s,staticClass:"mui-input-row mui-checkbox mui-left"},[e("label",[e("img",{staticClass:"avatar",attrs:{src:i.image}}),t._v(" "),e("div",{staticClass:"desc-body"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i.title)+"\n\t\t\t\t\t\t\t\t"),e("p",{staticClass:"mui-ellipsis"},[t._v(t._s(i.desc))])])]),t._v(" "),e("input",{attrs:{name:"checkbox",value:"Item 1",type:"checkbox"},on:{tap:function(e){t.inputclick(e,i)}}})])}),0)])])])])},staticRenderFns:[]};var b=e("VU/8")(m,p,!1,function(t){e("esW6")},null,null).exports,g={data:function(){return{title:"",select:"0",source:null,branch:null,staff:null}},mounted:function(){var t=this;mui(".hentai-home").on("tap",".mui-table-view-cell",function(i){var e=this.getAttribute("data-flag")||0;t.title=this.getAttribute("data-title")||"",a.a.$emit("select",e),t.select=e,3==t.select?t.$refs.branch.init(t.branch):4==t.select&&t.$refs.staff.init(t.staff)})},methods:{init:function(t){this.source=t,this.branch=JSON.parse(c()(t)),this.staff=JSON.parse(c()(t))},back:function(){if(3==this.select){var t=this.$refs.branch;if(t.include)return;if(t.actived.length>0)return;var i=t.history;if(0==i.length)return this.title="",this.select=0;t.init(i[i.length-1]),t.history.pop()}else if(4==this.select){var e=this.$refs.staff;if(e.include)return;if(e.actived.length>0)return;var s=e.history;if(s.branch.length<=0||s.staff.length<=0)return this.title="",this.select=0,void a.a.$emit("select",this.select);e.init(s.branch[s.branch.length-1],s.staff[s.staff.length-1]),s.branch.pop(),s.staff.pop(),e.clicks.pop()}this.$emit("back",this)},success:function(){if(3==this.select){var t=this.$refs.branch;if(t.actived.length<=0)return mui.toast("请选择部门");this.$emit("success",{select:this.select,actived:t.actived,include:t.include})}else if(4==this.select){var i=this.$refs.staff;if(i.actived.length<=0)return mui.toast("请选择成员");this.$emit("success",{select:this.select,actived:i.actived})}else{if(0==this.select)return mui.toast("请至少选择一项");this.$emit("success",{select:this.select})}this.close(1)},close:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;mui("#z-main-wrap").popover("toggle"),this.select="0",a.a.$emit("select",this.select),this.$refs.branch.clearHistory(),this.$refs.staff.clearHistory(),t||this.$emit("close",this)}},components:{HentaiBody:n.a,SidePanel:l.a,Branch:o,Staff:b}},w={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("side-panel",{attrs:{options:{id:"z-main-wrap",style:"bottom",height:"80vh"}}},[e("hentai-body",{attrs:{title:t.title},on:{back:t.back,close:t.close,success:t.success}},[e("ul",{directives:[{name:"show",rawName:"v-show",value:0==t.select||1==t.select||2==t.select,expression:"select==0 || select==1 || select==2"}],staticClass:"mui-table-view hentai-home mui-table-view-radio"},[e("li",{staticClass:"mui-table-view-cell",attrs:{"data-flag":"1"}},[e("a",{staticClass:"mui-navigate-right"},[e("i",{staticClass:"mui-icon mui-icon-contact"}),t._v(" "),e("span",[t._v("全部")])])]),t._v(" "),e("li",{staticClass:"mui-table-view-cell",attrs:{"data-flag":"2"}},[e("a",{staticClass:"mui-navigate-right"},[e("i",{staticClass:"mui-icon mui-icon-contact"}),t._v(" "),e("span",[t._v("本人")])])]),t._v(" "),e("li",{staticClass:"mui-table-view-cell",attrs:{"data-flag":"3","data-title":"部门"}},[e("i",{staticClass:"mui-icon mui-icon-contact"}),t._v(" "),e("span",[t._v("部门")])]),t._v(" "),e("li",{staticClass:"mui-table-view-cell",attrs:{"data-flag":"4","data-title":"成员"}},[e("i",{staticClass:"mui-icon mui-icon-contact"}),t._v(" "),e("span",[t._v("成员")])])]),t._v(" "),e("branch",{directives:[{name:"show",rawName:"v-show",value:3==t.select,expression:"select==3"}],ref:"branch"}),t._v(" "),e("staff",{directives:[{name:"show",rawName:"v-show",value:4==t.select,expression:"select==4"}],ref:"staff",attrs:{slot:"unscroll"},slot:"unscroll"})],1)],1)},staticRenderFns:[]};var _={created:function(){var t=this;setTimeout(function(){t.$refs.hentai.init([{id:27,title:"研发部",readRight:3,children:[],staff:[{id:100006,title:"曹成学",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLv3zmjYMzwQsiac56K54ibicRRM5Mmjg85bfA3CFwpQvFLClbvibz0tBaYXhJmTudln7B3ibxnX0a7Cow/132 ",desc:"超级管理员"},{id:100023,title:"苏霞",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ79diaft3MIfUGPRmHxlVWxicFjt9vnXGd6X4UYHqXWqqf9FUWeialxx60JkSbibDmDUW00DenibvICGA/132 ",desc:"开发者"},{id:100021,title:"张田田",image:"http://61.155.203.44:60119/UpLoads/QiGuan/qiguan/100021/d170983e40a300455d8c740b17898277.jpg?scale=0 ",desc:"开发者"},{id:100019,title:"沈静敏",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIWd4ibJ7fygdc39QL27ge8pV0ZZYic3NJ5oetMciavc7dkHH5xTHdxbjib5wriclEsxhtDmJgMmqve2jQ/132 ",desc:"开发管理员"},{id:100017,title:"李敏敏",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJJnZD5eg0KBVstg7HFPp2Q5VvVnGczm7GQsYv70cg1TTG7ZBVYicJPvsrIYzU0WoJGT5MSPRKzKOg/132 ",desc:"开发管理员"},{id:100015,title:"张勇",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLlhdCLUxemEvUWxKqQSEx5SDBvUzbgk6Jjk4JvxKXvjicRQlzUQmfsUYLGzYwKSNMXSPKEMuib3RwQ/132 ",desc:"开发者"}]},{id:1,title:"安得装饰",readRight:3,children:[{id:3,title:"园区店",depId:1,isEnable:!0,describe:"园区门店",children:[{id:9,title:"设计一部",depId:3,isEnable:!0,describe:"设计师",children:[],staff:[]},{id:5,title:"市场一部",depId:3,isEnable:!0,describe:"市场营销",children:[{id:17,title:"一组",depId:5,isEnable:!0,describe:"市场",children:[],staff:[]}],staff:[]}],staff:[]},{id:2,title:"新区店",depId:1,isEnable:!0,describe:"新区店",children:[{id:14,title:"市场一部",depId:2,isEnable:!0,describe:"市场部",children:[{id:16,title:"二小组",depId:14,isEnable:!0,describe:"小组",children:[],staff:[{id:101523,title:"嘻嘻哈",image:"http://61.155.203.44:60119/UpLoads/Street/infozx/837720760f1b7d5fcaa530e52331acd8.jpg",desc:"管理员"}]},{id:15,title:"一小组",depId:14,isEnable:!0,describe:"小组",children:[],staff:[]}],staff:[]},{id:13,title:"设计一中心",depId:2,isEnable:!0,describe:"设计师",children:[],staff:[]},{id:12,title:"设计二中心",depId:2,isEnable:!0,describe:"设计师",children:[],staff:[]}],staff:[{id:100003,title:"张测测",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLlhdCLUxemEvUWxKqQSEx5SDBvUzbgk6Jjk4JvxKXvjicRQlzUQmfsUYLGzYwKSNMXSPKEMuib3RwQ/132 ",desc:"人事管理员"}]}],staff:[{id:100017,title:"李敏敏",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJJnZD5eg0KBVstg7HFPp2Q5VvVnGczm7GQsYv70cg1TTG7ZBVYicJPvsrIYzU0WoJGT5MSPRKzKOg/132 ",desc:"开发管理员"},{id:100003,title:"张测测",image:"http://61.155.203.44:60119/UpLoads/QiGuan/qiguan/100021/d170983e40a300455d8c740b17898277.jpg?scale=0",desc:"人事管理员"}]}])},1e3)},methods:{test:function(){mui("#z-main-wrap").popover("toggle")},close:function(t){console.log("close")},back:function(t){console.log("back")},success:function(t){console.log(t)}},components:{HentaiMain:e("VU/8")(g,w,!1,function(t){e("d8Dy")},null,null).exports}},C={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("hentai-main",{ref:"hentai",on:{close:t.close,back:t.back,success:t.success}}),t._v(" "),e("button",{on:{tap:t.test}},[t._v("测试")]),t._v(" "),e("p",{staticClass:"alert"},[t._v("请打开console面板，查看结果")])],1)},staticRenderFns:[]};var k=e("VU/8")(_,C,!1,function(t){e("VJHu")},null,null);i.default=k.exports}});
//# sourceMappingURL=11.c3c6870d674f36369b84.js.map