webpackJsonp([11],{"4HBg":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("pFYg"),c=e.n(s),n=e("Gu7T"),a=e.n(n),l=e("Dd8w"),r=e.n(l),h=e("mvHQ"),d=e.n(h),u=e("a+6N"),o=(e("xt+v"),e("m0Pz")),f=e("MtFl"),v={data:function(){return{include:!1,branch:[],history:[],actived:[]}},methods:{init:function(t){this.branch=t},cellclick:function(t){t.children&&!t.children.length||this.actived.length>0||this.include||t.include||(this.history.push(this.branch),mui(".z-hentai-sc").scroll().scrollTo(0,0,0),this.init(t.children))},inputclick:function(t,i){!t.currentTarget.checked?this.actived.push(r()({},i,{include:this.include,select:!0})):this.actived.splice(this.actived.findIndex(function(t){return t.id==i.id}),1)},includeEvent:function(){this.include=!this.include,this.actived=[]},clearHistory:function(){mui('.z-okina-branch-wrap input[type="checkbox"]').each(function(t,i){i.checked=!1}),this.include=!1,this.branch=[],this.history=[],this.actived=[]}}},p={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"z-okina-branch-wrap"},[e("div",{staticClass:"z-alert"},[t._v("包含子部门，将不能进入下一级或上一级")]),t._v(" "),e("div",{staticClass:"mui-table-view"},[e("div",{staticClass:"mui-table-view-cell"},[e("span",[t._v("是否包含子部门")]),t._v(" "),e("div",{staticClass:"mui-switch mui-switch-mini",class:{"mui-active":t.include}},[e("div",{staticClass:"mui-switch-handle",on:{tap:t.includeEvent}})])])]),t._v(" "),e("div",{staticClass:"mui-input-group"},t._l(t.branch,function(i,s){return e("div",{key:s,staticClass:"mui-input-row mui-checkbox mui-left",class:{"right-icon":i.children&&i.children.length,include:i.include}},[e("span",{staticClass:"label",on:{tap:function(e){t.cellclick(i)}}},[t._v(t._s(i.title))]),t._v(" "),e("input",{attrs:{name:"checkbox",disabled:i.select,value:"Item 1",type:"checkbox"},domProps:{checked:i.select},on:{tap:function(e){t.inputclick(e,i)}}})])}),0)])},staticRenderFns:[]};var m=e("VU/8")(v,p,!1,function(t){e("Vvlj")},null,null).exports,b={data:function(){return{select:!1,include:!1,staff:[],branch:[],history:{staff:[],branch:[]},actived:[],clicks:[]}},methods:{init:function(t,i){this.branch=t,this.staff=i||[]},cellclick:function(t){(t.staff&&t.staff.length||t.children&&t.children.length)&&(this.actived.length>0||this.include||t.include||(this.history.branch.push(this.branch),this.history.staff.push(this.staff),this.clicks.push(t),this.select=t.select||!1,this.init(t.children,t.staff)))},includeEvent:function(){if(!(this.actived.length>0||this.clicks.length<=0))if(this.include=!this.include,this.include){var t=this.deepStaff(this.clicks[this.clicks.length-1]);this.staff=[].concat(a()(this.staff),a()(t))}else this.staff=this.clicks.length>0?this.clicks[this.clicks.length-1].staff:[]},inputclick:function(t,i){this.select||(!t.currentTarget.checked?this.actived.push(r()({},i,{select:!0})):this.actived.splice(this.actived.findIndex(function(t){return t.id==i.id}),1))},clearHistory:function(){this.include=!1,this.staff=[],this.branch=[],this.actived=[],this.clicks=[],this.history={branch:[],staff:[]}},deepStaff:function(t){var i=[];return function t(e){for(var s=0;s<e.length;s++){var c=e[s];if(!(c.staff&&c.staff.length||c.children&&c.children.length))break;c.include||(c.select||(i=[].concat(a()(i),a()(c.staff))),t(c.children))}}(t.children),i}}},g={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"z-okina-staff-wrap mui-clearfix"},[e("div",{staticClass:"mui-pull-left z-staff-left"},[e("div",{staticClass:"mui-scroll-wrapper z-hentai-scroll"},[e("div",{staticClass:"mui-scroll"},[e("ul",{staticClass:"mui-table-view"},t._l(t.branch,function(i){return e("li",{key:i.id,staticClass:"mui-table-view-cell",class:{select:i.include}},[e("a",{class:{"mui-navigate-right":i.staff&&i.staff.length||i.children&&i.children.length},on:{tap:function(e){t.cellclick(i)}}},[t._v(t._s(i.title))])])}),0)])])]),t._v(" "),e("div",{staticClass:"mui-pull-left z-staff-right"},[e("div",{staticClass:"mui-scroll-wrapper z-hentai-scroll"},[e("div",{staticClass:"mui-scroll"},[e("div",{staticClass:"z-alert"},[t._v("选择子成员，将不能进入下一级或上一级")]),t._v(" "),e("div",{staticClass:"mui-table-view"},[e("div",{staticClass:"mui-table-view-cell"},[e("span",[t._v("选择子成员")]),t._v(" "),e("div",{staticClass:"mui-switch mui-switch-mini",class:{"mui-active":t.include}},[e("div",{staticClass:"mui-switch-handle",on:{tap:t.includeEvent}})])])]),t._v(" "),e("div",{staticClass:"mui-input-group"},t._l(t.staff,function(i,s){return e("div",{key:s,staticClass:"mui-input-row mui-checkbox mui-left",class:{select:t.select}},[e("label",[e("img",{staticClass:"avatar",attrs:{src:i.image}}),t._v(" "),e("div",{staticClass:"desc-body"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i.title)+"\n\t\t\t\t\t\t\t\t"),e("p",{staticClass:"mui-ellipsis"},[t._v(t._s(i.desc))])])]),t._v(" "),e("input",{attrs:{name:"checkbox",disabled:t.select||i.select,value:"Item 1",type:"checkbox"},domProps:{checked:i.select},on:{tap:function(e){t.inputclick(e,i)}}})])}),0)])])])])},staticRenderFns:[]};var k=e("VU/8")(b,g,!1,function(t){e("W7HL")},null,null).exports,_={data:function(){return{isclick:!0,select:!1,include:!1,staff:[],branch:[],history:{staff:[],branch:[]},actived:[],clicks:[]}},methods:{init:function(t,i){this.branch=t,this.staff=i||[]},cellclick:function(t){(t.staff&&t.staff.length||t.children&&t.children.length)&&(this.actived.length>0||this.include||this.isclick&&(0==this.clicks.length&&(this.isclick=t.include),this.history.branch.push(this.branch),this.history.staff.push(this.staff),this.clicks.push(t),this.select=t.select||!1,this.init(t.children,t.staff)))},includeEvent:function(){if(!(this.actived.length>0||this.clicks.length<=0))if(this.include=!this.include,this.include){var t=this.deepStaff(this.clicks[this.clicks.length-1]);this.staff=[].concat(a()(this.staff),a()(t))}else this.staff=this.clicks.length>0?this.clicks[this.clicks.length-1].staff:[]},inputclick:function(t,i){!t.currentTarget.checked?this.actived.push(r()({},i,{select:!0})):this.actived.splice(this.actived.findIndex(function(t){return t.id==i.id}),1)},clearHistory:function(){this.include=!1,this.staff=[],this.branch=[],this.actived=[],this.clicks=[],this.history={branch:[],staff:[]}},deepStaff:function(t){var i=[];return function t(e){for(var s=0;s<e.length;s++){var c=e[s];if(!(c.staff&&c.staff.length||c.children&&c.children.length))break;c.include||(c.select||(i=[].concat(a()(i),a()(c.staff))),t(c.children))}}(t.children),i}}},C={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"z-okina-staff-wrap mui-clearfix"},[e("div",{staticClass:"mui-pull-left z-staff-left"},[e("div",{staticClass:"mui-scroll-wrapper z-hentai-scroll"},[e("div",{staticClass:"mui-scroll"},[e("ul",{staticClass:"mui-table-view"},t._l(t.branch,function(i){return e("li",{key:i.id,staticClass:"mui-table-view-cell",class:{select:!t.isclick}},[e("a",{class:{"mui-navigate-right":i.staff&&i.staff.length||i.children&&i.children.length},on:{tap:function(e){t.cellclick(i)}}},[t._v(t._s(i.title))])])}),0)])])]),t._v(" "),e("div",{staticClass:"mui-pull-left z-staff-right"},[e("div",{staticClass:"mui-scroll-wrapper z-hentai-scroll"},[e("div",{staticClass:"mui-scroll"},[e("div",{staticClass:"z-alert"},[t._v("选择子成员，将不能进入下一级或上一级")]),t._v(" "),e("div",{staticClass:"mui-table-view"},[e("div",{staticClass:"mui-table-view-cell"},[e("span",[t._v("选择子成员")]),t._v(" "),e("div",{staticClass:"mui-switch mui-switch-mini",class:{"mui-active":t.include}},[e("div",{staticClass:"mui-switch-handle",on:{tap:t.includeEvent}})])])]),t._v(" "),e("div",{staticClass:"mui-input-group"},t._l(t.staff,function(i,s){return e("div",{key:s,staticClass:"mui-input-row mui-checkbox mui-left"},[e("label",[e("img",{staticClass:"avatar",attrs:{src:i.image}}),t._v(" "),e("div",{staticClass:"desc-body"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i.title)+"\n\t\t\t\t\t\t\t\t"),e("p",{staticClass:"mui-ellipsis"},[t._v(t._s(i.desc))])])]),t._v(" "),e("input",{attrs:{name:"checkbox",disabled:i.select,value:"Item 1",type:"checkbox"},domProps:{checked:i.select},on:{tap:function(e){t.inputclick(e,i)}}})])}),0)])])])])},staticRenderFns:[]};var w=e("VU/8")(_,C,!1,function(t){e("8ci8")},null,null).exports,x={data:function(){return{title:"",select:0,source:[],branch:[],branchList:[],includeList:[],exclideList:[]}},methods:{init:function(t){this.source=t,this.branch=JSON.parse(d()(t))},getData:function(){return{branch:this.branchList,include:this.includeList,exclude:this.exclideList}},add:function(t){if(this.select=t,1==t){if(this.includeList.length>0||this.exclideList.length>0)return mui.toast("请先清空下面两项");this.$refs.branch.init(this.branch)}else{if(this.branchList.length<=0)return mui.toast("请先选择部门");2==t?this.$refs.include.init(this.branch):3==t&&this.$refs.exclude.init(this.branchList)}mui("#z-okina-hentai-wrap").popover("toggle")},deleteItem:function(t,i){1==t?(this.deepBranchAttr(this.branch,[r()({},i,{select:!1,include:!1})]),this.branchList.splice(this.branchList.findIndex(function(t){return t.id===i.id}),1)):2==t?(this.deepStaffAttr(this.branch,[r()({},i,{select:!1})]),this.includeList.splice(this.includeList.findIndex(function(t){return t.id===i.id}),1)):3==t&&(this.deepStaffAttr(this.branchList,[r()({},i,{select:!1})]),this.exclideList.splice(this.exclideList.findIndex(function(t){return t.id===i.id}),1))},back:function(){if(1==this.select){var t=this.$refs.branch;if(t.include)return;if(t.actived.length>0)return;var i=t.history;if(0==i.length)return this.title="",this.select=0;t.init(i[i.length-1]),t.history.pop()}else if(2==this.select){var e=this.$refs.include;if(e.include)return;if(e.actived.length>0)return;var s=e.history;if(s.branch.length<=0||s.staff.length<=0)return;e.init(s.branch[s.branch.length-1],s.staff[s.staff.length-1]),s.branch.pop(),s.staff.pop(),e.clicks.pop(),e.select=!!e.clicks[e.clicks.length-1]&&e.clicks[e.clicks.length-1].select}else if(3==this.select){var c=this.$refs.exclude;if(c.include)return;if(c.actived.length>0)return;var n=c.history;if(n.branch.length<=0||n.staff.length<=0)return;c.init(n.branch[n.branch.length-1],n.staff[n.staff.length-1]),n.branch.pop(),n.staff.pop(),c.clicks.pop(),c.select=!!c.clicks[c.clicks.length-1]&&c.clicks[c.clicks.length-1].select,0!=n.branch.length&&0!=n.staff.length||(c.isclick=!0,console.log(c.isclick))}this.$emit("back",this)},close:function(){this.$emit("close",this),mui("#z-okina-hentai-wrap").popover("toggle")},success:function(){if(1==this.select){var t=this.$refs.branch;if(t.actived.length<=0)return mui.toast("请选择部门");var i=this.deepBranchAttr(this.branch,t.actived);this.branchList=[].concat(a()(this.branchList),a()(i)),console.log(this.branch),t.actived=[],t.include=!1}else if(2==this.select){var e=this.$refs.include;if(e.actived.length<=0)return mui.toast("请选择成员");this.deepStaffAttr(this.branch,e.actived);this.includeList=[].concat(a()(this.includeList),a()(e.actived)),e.include=!1,e.actived=[]}else if(3==this.select){var s=this.$refs.exclude;if(s.actived.length<=0)return mui.toast("请选择成员");this.deepStaffAttr(this.branchList,s.actived);this.exclideList=[].concat(a()(this.exclideList),a()(s.actived)),s.include=!1,s.isclick=!0,s.actived=[]}mui("#z-okina-hentai-wrap").popover("toggle")},deepBranchAttr:function(t,i){var e=[],s=this;return function t(n){var a=function(a){var l=n[a],r=i.find(function(t){return t.id===l.id});"object"===(void 0===r?"undefined":c()(r))&&(s.$set(l,"select",r.select),s.$set(l,"include",r.include),e.push(l)),t(l.children)};for(var l in n)a(l)}(t),e},deepStaffAttr:function(t,i){var e=[],s=this;return function t(n){for(var a in n){var l=n[a],r=function(t){var n=l.staff[t],a=i.find(function(t){return t.id===n.id});"object"===(void 0===a?"undefined":c()(a))&&(s.$set(n,"select",a.select),e.push(n))};for(var h in l.staff)r(h);t(l.children)}}(t),e}},components:{HeadCell:u.a,HentaiBody:o.a,SidePanel:f.a,branch:m,include:k,Exclude:w}},z={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"z-okina-hentai-wrap"},[e("div",{staticClass:"z-okina-hentai-group"},[e("head-cell",{attrs:{options:{data:{title:"选择部门",icon:"icon-Plus"}}},on:{onCellMenuClick:function(i){t.add(1)}}}),t._v(" "),e("div",{staticClass:"z-okina-hentai-list"},t._l(t.branchList,function(i,s){return e("span",{key:s,staticClass:"z-okina-hentai-list-item"},[t._v("\n\t\t\t\t"+t._s(i.title)+"\n\t\t\t\t"),e("i",{staticClass:"z-okina-close-btn iconfont icon-wrong",on:{tap:function(e){t.deleteItem(1,i)}}})])}),0)],1),t._v(" "),e("div",{staticClass:"z-okina-hentai-group"},[e("head-cell",{attrs:{options:{data:{title:"包含谁",icon:"icon-Plus"}}},on:{onCellMenuClick:function(i){t.add(2)}}}),t._v(" "),e("div",{staticClass:"z-okina-hentai-list"},t._l(t.includeList,function(i,s){return e("span",{key:s,staticClass:"z-okina-hentai-list-item"},[t._v("\n\t\t\t\t"+t._s(i.title)+"\n\t\t\t\t"),e("i",{staticClass:"z-okina-close-btn iconfont icon-wrong",on:{tap:function(e){t.deleteItem(2,i)}}})])}),0)],1),t._v(" "),e("div",{staticClass:"z-okina-hentai-group"},[e("head-cell",{attrs:{options:{data:{title:"排除谁",icon:"icon-Plus"}}},on:{onCellMenuClick:function(i){t.add(3)}}}),t._v(" "),e("div",{staticClass:"z-okina-hentai-list"},t._l(t.exclideList,function(i,s){return e("span",{key:s,staticClass:"z-okina-hentai-list-item"},[t._v("\n\t\t\t\t"+t._s(i.title)+"\n\t\t\t\t"),e("i",{staticClass:"z-okina-close-btn iconfont icon-wrong",on:{tap:function(e){t.deleteItem(3,i)}}})])}),0)],1),t._v(" "),e("side-panel",{attrs:{options:{id:"z-okina-hentai-wrap",style:"bottom",height:"80vh"}}},[e("hentai-body",{attrs:{title:t.title},on:{back:t.back,close:t.close,success:t.success}},[e("branch",{directives:[{name:"show",rawName:"v-show",value:1==t.select,expression:"select == 1"}],ref:"branch"}),t._v(" "),e("include",{directives:[{name:"show",rawName:"v-show",value:2==t.select,expression:"select == 2"}],ref:"include"}),t._v(" "),e("exclude",{directives:[{name:"show",rawName:"v-show",value:3==t.select,expression:"select == 3"}],ref:"exclude"})],1)],1)],1)},staticRenderFns:[]};var L={created:function(){var t=this;setTimeout(function(){t.$refs.okinahentai.init([{id:27,title:"研发部",readRight:3,children:[],staff:[{id:100006,title:"曹成学",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLv3zmjYMzwQsiac56K54ibicRRM5Mmjg85bfA3CFwpQvFLClbvibz0tBaYXhJmTudln7B3ibxnX0a7Cow/132 ",desc:"超级管理员"},{id:100023,title:"苏霞",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ79diaft3MIfUGPRmHxlVWxicFjt9vnXGd6X4UYHqXWqqf9FUWeialxx60JkSbibDmDUW00DenibvICGA/132 ",desc:"开发者"},{id:100021,title:"张田田",image:"http://61.155.203.44:60119/UpLoads/QiGuan/qiguan/100021/d170983e40a300455d8c740b17898277.jpg?scale=0 ",desc:"开发者"},{id:100019,title:"沈静敏",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIWd4ibJ7fygdc39QL27ge8pV0ZZYic3NJ5oetMciavc7dkHH5xTHdxbjib5wriclEsxhtDmJgMmqve2jQ/132 ",desc:"开发管理员"},{id:100017,title:"李敏敏",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJJnZD5eg0KBVstg7HFPp2Q5VvVnGczm7GQsYv70cg1TTG7ZBVYicJPvsrIYzU0WoJGT5MSPRKzKOg/132 ",desc:"开发管理员"},{id:100015,title:"张勇",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLlhdCLUxemEvUWxKqQSEx5SDBvUzbgk6Jjk4JvxKXvjicRQlzUQmfsUYLGzYwKSNMXSPKEMuib3RwQ/132 ",desc:"开发者"}]},{id:1,title:"安得装饰",readRight:3,children:[{id:3,title:"园区店",depId:1,isEnable:!0,describe:"园区门店",children:[{id:9,title:"设计一部",depId:3,isEnable:!0,describe:"设计师",children:[],staff:[]},{id:5,title:"市场一部",depId:3,isEnable:!0,describe:"市场营销",children:[{id:17,title:"一组",depId:5,isEnable:!0,describe:"市场",children:[],staff:[]}],staff:[]}],staff:[]},{id:2,title:"新区店",depId:1,isEnable:!0,describe:"新区店",children:[{id:14,title:"市场一部",depId:2,isEnable:!0,describe:"市场部",children:[{id:16,title:"二小组",depId:14,isEnable:!0,describe:"小组",children:[],staff:[{id:101523,title:"嘻嘻哈",image:"http://61.155.203.44:60119/UpLoads/Street/infozx/837720760f1b7d5fcaa530e52331acd8.jpg",desc:"管理员"}]},{id:15,title:"一小组",depId:14,isEnable:!0,describe:"小组",children:[],staff:[]}],staff:[]},{id:13,title:"设计一中心",depId:2,isEnable:!0,describe:"设计师",children:[],staff:[]},{id:12,title:"设计二中心",depId:2,isEnable:!0,describe:"设计师",children:[],staff:[]}],staff:[{id:100003,title:"张测测",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLlhdCLUxemEvUWxKqQSEx5SDBvUzbgk6Jjk4JvxKXvjicRQlzUQmfsUYLGzYwKSNMXSPKEMuib3RwQ/132 ",desc:"人事管理员"}]}],staff:[{id:100017,title:"李敏敏",image:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJJnZD5eg0KBVstg7HFPp2Q5VvVnGczm7GQsYv70cg1TTG7ZBVYicJPvsrIYzU0WoJGT5MSPRKzKOg/132 ",desc:"开发管理员"},{id:100003,title:"张测测",image:"http://61.155.203.44:60119/UpLoads/QiGuan/qiguan/100021/d170983e40a300455d8c740b17898277.jpg?scale=0",desc:"人事管理员"}]}])},1e3)},methods:{getData:function(){console.log(this.$refs.okinahentai.getData())}},components:{OkinaHentai:e("VU/8")(x,z,!1,function(t){e("HOA7")},null,null).exports}},y={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("okina-hentai",{ref:"okinahentai"}),this._v(" "),i("button",{staticClass:"mui-btn mui-btn-block base-btn",on:{tap:this.getData}},[this._v("获取数据")])],1)},staticRenderFns:[]},T=e("VU/8")(L,y,!1,null,null,null);i.default=T.exports},"8ci8":function(t,i){},HOA7:function(t,i){},P4Oe:function(t,i){},Vvlj:function(t,i){},W7HL:function(t,i){},m0Pz:function(t,i,e){"use strict";var s=e("xt+v"),c={data:function(){return{select:0}},props:{title:{type:String,default:"方式"}},mounted:function(){var t=this;mui.init(),mui(".z-hentai-scroll").scroll(),s.a.$on("select",function(i){return t.select=i})}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"z-hentai-wrap"},[e("div",{staticClass:"mui-card-header"},[e("button",{staticClass:"mui-btn mui-icon mui-icon-back",on:{tap:function(i){t.$emit("back")}}}),t._v(" "),e("span",[t._v(t._s(t.title))]),t._v(" "),e("button",{staticClass:"mui-btn mui-icon mui-icon-closeempty",on:{tap:function(i){t.$emit("close")}}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:4!=t.select,expression:"select != 4"}],staticClass:"mui-scroll-wrapper z-hentai-scroll z-hentai-sc"},[e("div",{staticClass:"mui-scroll"},[t._t("default")],2)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:4==t.select,expression:"select == 4"}],staticClass:"unscroll"},[t._t("unscroll")],2),t._v(" "),e("div",{staticClass:"button-wrap"},[e("button",{staticClass:"mui-btn mui-btn-block base-btn",on:{tap:function(i){t.$emit("success")}}},[t._v("确定")])])])},staticRenderFns:[]};var a=e("VU/8")(c,n,!1,function(t){e("P4Oe")},null,null);i.a=a.exports}});
//# sourceMappingURL=11.1bc4c2168dd4474d9cf3.js.map