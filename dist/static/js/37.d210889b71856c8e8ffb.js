webpackJsonp([37],{"9HK/":function(t,e){},U3qc:function(t,e){},b1Ui:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Gu7T"),a=i.n(s),c=i("MtFl"),n={data:function(){return{sp:{id:"z-picker-panel3",style:"bottom"},reading:[],belong:!1,flag:!0,active:{title:""},actived:[],guide:!0,onGuide:"",member:[],memberstaffs:[],memberSelected:[],branchSelected:[],childBranch:[]}},props:{list:Array,options:{type:Object,default:function(){return{}}}},computed:{opt:function(){return mui.extend(!0,{},{toast:"请至少选择一个人",multi:!0},this.options)}},mounted:function(){mui(".z-picker-content").scroll()},methods:{onBM:function(t,e){t.stopPropagation(),this.member=[].concat(a()(this.list)),this.guide=!1,this.flag=e,this.onGuide=""},onMumberCell:function(t,e){e.children.length||this.flag?(this.branchSelected=[],this.member=e.children,this.flag&&(this.memberstaffs=e.staff),this.actived.push(e),this.active=e,this.belong=!1,this.childBranch=[],this.clearn()):mui.toast("点不进去啦！")},selectMember:function(t,e){this.opt.multi?(t.stopPropagation(),t.currentTarget.classList.contains("mui-selected")?(t.currentTarget.classList.remove("mui-selected"),this.memberSelected.splice(this.memberSelected.findIndex(function(t){return t.id===e.id}),1)):(t.currentTarget.classList.add("mui-selected"),this.memberSelected.push(e))):this.memberSelected=e,console.log(this.memberSelected)},selectBranch:function(t,e){this.opt.multi?(t.stopPropagation(),t.currentTarget.classList.contains("mui-selected")?(t.currentTarget.classList.remove("mui-selected"),this.branchSelected.splice(this.branchSelected.findIndex(function(t){return t.id===e.id}),1)):(t.currentTarget.classList.add("mui-selected"),this.branchSelected.push(e))):this.branchSelected=e},childEvent:function(t){this.belong=!this.belong,this.branchSelected=[],this.belong?this.childBranch=this.active:this.childBranch=[],mui(".z-branch-containe .mui-selected").each(function(t,e){e.classList.remove("mui-selected")}),console.log(this.childBranch)},onGuideEvent:function(t,e){t.stopPropagation(),this.onGuide=e,t.currentTarget.classList.contains("mui-selected")&&(this.onGuide="")},menuAll:function(t){this.guide=!0,this.member=[],this.memberstaffs=[],this.memberSelected=[],this.actived=[],this.active={}},clearn:function(){this.memberSelected=[],mui(".z-picker-container .mui-selected").each(function(t,e){e.classList.remove("mui-selected")})},onMenu:function(t,e,i){var s=this;void 0!==t&&t.stopPropagation(),this.clearn(),this.active=e,this.actived.splice(i+1,this.actived.length-i),this.cdata(this.list,e.id,function(t){s.reading=t.children,s.memberstaffs=t.staff,s.member=t.children})},cdata:function(t,e,i){if(t)for(var s=0,a=t.length;s<a;s++){var c=t[s];c.id===e?i(c):this.cdata(c.children,e,i)}},success:function(){if(!1===this.onGuide||!0===this.onGuide)return this.$emit("onSuccess",{flag:this.onGuide?0:1,list:this.list}),this.close();this.flag&&this.memberSelected.length<=0?mui.toast(this.opt.toast):this.flag||this.branchSelected.length||this.childBranch.title?(this.flag?this.$emit("onSuccess",{flag:2,current:this.active,member:this.memberSelected}):this.flag||this.$emit("onSuccess",{flag:3,current:this.active,branch:this.branchSelected}),this.close()):mui.toast("请选择一个部门")},close:function(){mui("#z-picker-panel3").popover("toggle")}},components:{SidePanel:c.a}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"z-picker-container"},[i("side-panel",{attrs:{options:t.sp}},[i("div",{staticClass:"z-picker-head mui-clearfix mui-text-center"},[i("button",{staticClass:"mui-btn mui-pull-left",on:{tap:t.close}},[t._v("取消")]),t._v(" "),i("span",{staticClass:"title mui-ellipsis"},[t._v(t._s(t.active?t.active.title:""))]),t._v(" "),i("button",{staticClass:"mui-btn mui-pull-right base-btn",on:{tap:t.success}},[t._v("确定")])]),t._v(" "),i("div",{staticClass:"z-picker-body"},[i("div",{staticClass:"menu-wrap mui-clearfix"},[i("div",{staticClass:"mui-slider",class:{branch:!t.flag}},[i("div",{staticClass:"mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted",attrs:{id:"sliderSegmentedControl"}},[i("div",{staticClass:"mui-scroll"},[i("a",{staticClass:"mui-control-item",on:{tap:function(e){t.menuAll(e)}}},[t._v("全部")]),t._v(" "),t._l(t.actived,function(e,s){return i("a",{key:s,staticClass:"mui-control-item",class:{"mui-active":t.active.title===e.title},on:{tap:function(i){t.onMenu(i,e,s)}}},[t._v(t._s(e.title))])})],2)])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.flag&&t.active.title,expression:"!flag&&active.title"}],staticClass:"includes-wrap",class:{on:t.belong},on:{tap:function(e){t.childEvent(e)}}},[i("i",{staticClass:"iconfont icon-belong"})])]),t._v(" "),i("div",{staticClass:"z-picker-content mui-scroll-wrapper",staticStyle:{top:"80px"}},[i("div",{staticClass:"mui-scroll"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.guide,expression:"guide"}],staticClass:"mui-table-view z-branch-wrap mui-table-view-radio"},[i("div",{staticClass:"mui-table-view-cell mui-media z-myself",class:{"mui-selected":!0===t.onGuide},on:{tap:function(e){t.onGuideEvent(e,!0)}}},[i("a",{staticClass:"mui-navigate-right",attrs:{href:"javascript:;"}},[t._v("自己")])]),t._v(" "),i("div",{staticClass:"mui-table-view-cell",on:{tap:function(e){t.onBM(e,!0)}}},[i("a",{staticClass:"mui-navigate-right",attrs:{href:"javascript:;"}},[t._v("组员")])]),t._v(" "),i("div",{staticClass:"mui-table-view-cell",on:{tap:function(e){t.onBM(e,!1)}}},[i("a",{staticClass:"mui-navigate-right",attrs:{href:"javascript:;"}},[t._v("部门")])]),t._v(" "),i("div",{staticClass:"mui-table-view-cell mui-media z-all",class:{"mui-selected":!1===t.onGuide},on:{tap:function(e){t.onGuideEvent(e,!1)}}},[i("a",{staticClass:"mui-navigate-right",attrs:{href:"javascript:;"}},[t._v("全部")])])]),t._v(" "),i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.guide,expression:"!guide"}],staticClass:"mui-table-view"},t._l(t.member,function(e,s){return i("div",{key:s,staticClass:"mui-table-view-cell",on:{tap:function(i){t.onMumberCell(i,e)}}},[t._v(t._s(e.title))])}),0),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"mui-table-view z-staffs-wrap mui-table-view-radio"},t._l(t.memberstaffs,function(e,s){return i("li",{key:s,staticClass:"mui-table-view-cell mui-media",on:{tap:function(i){t.selectMember(i,e)}}},[i("a",{staticClass:"mui-navigate-right",attrs:{href:"javascript:;"}},[e.image?i("img",{staticClass:"mui-media-object mui-pull-left",attrs:{src:e.image}}):i("div",{staticClass:"text-wrap"},[t._v(t._s(e.title.charAt(0)))]),t._v(" "),i("div",{staticClass:"mui-media-body"},[i("span",{staticClass:"title mui-ellipsis"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"desc mui-ellipsis"},[t._v(t._s(e.desc))])])])])}),0),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:!t.flag&&!t.belong,expression:"!flag&&!belong"}],staticClass:"mui-table-view z-staffs-wrap z-branch-containe mui-table-view-radio"},[i("li",{directives:[{name:"show",rawName:"v-show",value:!!t.member.length,expression:"!!member.length"}],staticClass:"choise"},[t._v("选择部门 ↓")]),t._v(" "),t._l(t.member,function(e,s){return i("li",{key:s,staticClass:"mui-table-view-cell mui-media",on:{tap:function(i){t.selectBranch(i,e)}}},[i("a",{staticClass:"mui-navigate-right",attrs:{href:"javascript:;"}},[t._v(t._s(e.title))])])})],2)])])])])])],1)},staticRenderFns:[]};var r={data:function(){return{list:[]}},created:function(){var t=this;setTimeout(function(){t.list=[{id:1,title:"安得集团",staff:[],children:[{id:2,title:"设计部",staff:[{id:1,title:"张三",image:"",desc:"设计师"},{id:2,title:"李四",image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=586574978,3261086036&fm=27&gp=0.jpg",desc:"设计师"}],children:[{id:3,title:"设计一组",staff:[{id:3,title:"王五",image:"",desc:"设计师"}],children:[]}]}]},{id:4,title:"中系科技",staff:[],children:[{id:5,title:"市场部",staff:[{id:4,title:"白旭",image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1137298932,366992998&fm=27&gp=0.jpg",desc:"市场经理"},{id:5,title:"钱斌",image:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1810152264,2923293270&fm=27&gp=0.jpg",desc:"业务员"},{id:6,title:"陈德文",image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3466222248,28477086&fm=27&gp=0.jpg",desc:"业务员"},{id:7,title:"吴永健",image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4184649264,700756858&fm=27&gp=0.jpg",desc:"业务员"}],children:[]},{id:6,title:"研发部",staff:[{id:8,title:"李敏敏",image:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=782046930,1105099424&fm=27&gp=0.jpg",desc:"Android工程师"},{id:9,title:"张田田",image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3349769256,2152079369&fm=27&gp=0.jpg",desc:"IOS工程师"},{id:10,title:"苏霞",image:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=790506092,2369397687&fm=27&gp=0.jpg",desc:"前端工程师"},{id:11,title:"わタし",image:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2993379943,3296388548&fm=27&gp=0.jpg",desc:"前端工程师"}],children:[]}]}]},500)},methods:{test:function(){mui("#z-picker-panel3").popover("toggle")},onSuccess:function(t){console.log(t)}},components:{PickerSelect3:i("VU/8")(n,l,!1,function(t){i("9HK/")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{on:{tap:this.test}},[this._v("测试")]),this._v(" "),e("PickerSelect3",{attrs:{list:this.list,options:{self:!0}},on:{onSuccess:this.onSuccess}})],1)},staticRenderFns:[]};var u=i("VU/8")(r,o,!1,function(t){i("U3qc")},"data-v-c5ce636c",null);e.default=u.exports}});
//# sourceMappingURL=37.d210889b71856c8e8ffb.js.map