webpackJsonp([38],{"1eBv":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("pFYg"),a=n.n(o),i=n("6U54"),r={props:{options:{type:Object,default:function(){return{}}}},data:function(){var t=this;return{locationAddress:{},events:{init:function(e){t.options.init=!0,t.map=e}}}},computed:{opt:function(){return mui.extend(!0,{},{zoom:12,companyAddr:"苏州市金门路1200号安得装饰"},this.options)}},created:function(){var t=this;mui.plusReady(function(){t.network=getNetWorkInfo()})},methods:{geocoder:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===(void 0===t?"undefined":a()(t))){var r=mui.extend(t,n);o=mui.extend(t,o),i.b(r,this.map,function(t){e.marker=t}),i.a(o,this.map)}else{var d=new AMap.Geocoder({city:"全国"});d.getLocation(t,function(t,a){"complete"===t&&"OK"===a.info&&i.c(a,e.map,o,n)})}}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"z-map-container"},[e("el-amap",{ref:"map",staticClass:"z-amap-wrap",attrs:{vid:"amap",zoom:this.opt.zoom,events:this.events,doubleClickZoom:!1}})],1)},staticRenderFns:[]};var s={data:function(){return{addr:""}},methods:{add:function(){this.$refs.map.geocoder(this.addr,{iconLabel:{innerHTML:"我"}})},addpos:function(){this.$refs.map.geocoder({lng:120.578028,lat:31.307886},{iconLabel:{innerHTML:"公司"}})}},components:{MultiAddrMap:n("VU/8")(r,d,!1,function(t){n("DEaH")},null,null).exports}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{height:"61vh"}},[n("multi-addr-map",{ref:"map"})],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.addr,expression:"addr"}],attrs:{type:"text",placeholder:"请输入地址"},domProps:{value:t.addr},on:{input:function(e){e.target.composing||(t.addr=e.target.value)}}}),t._v(" "),n("button",{staticClass:"mui-btn-block",on:{tap:t.add}},[t._v("add")]),t._v(" "),n("button",{staticClass:"mui-btn-block",on:{tap:t.addpos}},[t._v("add position")])])},staticRenderFns:[]};var u=n("VU/8")(s,c,!1,function(t){n("Gw/n")},null,null);e.default=u.exports},DEaH:function(t,e){},"Gw/n":function(t,e){}});
//# sourceMappingURL=38.623df97e0598e76351a1.js.map