webpackJsonp([8],{"87tG":function(e,t,i){i("JNWs"),i("sTIA")},EeMT:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Dd8w"),a=i.n(n),r=i("mvHQ"),l=i.n(r),o=i("L8Lv"),s={props:{list:Array,options:{type:Object,default:function(){return{}}}},computed:{opt:function(){var e=this.creatMap(JSON.parse(l()(this.list))),t=this.setSettings(e);return{d:{columns:["key","value"],rows:this.list},settings:t}},conf:function(){return mui.extend(!0,{},{width:"100%",height:"180px",lineColor:[[.8,"#666"],[1,"#f60"]]},this.options)}},methods:{creatMap:function(e){for(var t={},i={},n={},r=this.defaultSize(e),l=0;l<e.length;l++){var o=this.defaultOpt(),s=e[l],u=s.key;t[u]=s.name,i[u]=a()({},mui.extend(!0,{},r[l],this.options[u]),o),n[u]="percent"}return e.length>=4&&(i[e[this.list.length-1].key].detail.offsetCenter=[0,"40%"],i[e[this.list.length-1].key].title.offsetCenter=[0,"130%"],i[e[this.list.length-2].key].detail.offsetCenter=[0,"-40%"]),{maps:i,names:t,types:n}},setSettings:function(e){return{dataType:e.types,dataName:e.names,seriesMap:e.maps}},defaultOpt:function(){return{axisLine:{lineStyle:{color:this.conf.lineColor,width:2}},axisLabel:{show:!1,textStyle:{color:"#363636",fontSize:12}},axisTick:{length:5,lineStyle:{color:"auto"}},splitLine:{length:15,lineStyle:{color:"auto"}},pointer:{width:2},title:{offsetCenter:[0,"-130%"],textStyle:{fontSize:14,color:"#363636"}},detail:{offsetCenter:[0,"50%"],textStyle:{color:"#363636",fontSize:12}}}},defaultSize:function(e){var t=e.length;return 1===t?[{min:0,max:1,radius:"50%"}]:2===t?[{min:0,max:1,center:["70%","70%"],radius:"50%",endAngle:0,startAngle:180},{min:0,max:1,center:["30%","70%"],radius:"50%",endAngle:0,startAngle:180}]:3===t?[{min:0,max:1,radius:"50%"},{min:0,max:1,center:["15%","70%"],radius:"40%",endAngle:45,splitNumber:7},{min:0,max:1,center:["84%","70%"],radius:"40%",startAngle:135,splitNumber:7}]:4===t?[{min:0,max:1,radius:"50%"},{min:0,max:1,center:["15%","70%"],radius:"40%",endAngle:45,splitNumber:7},{min:0,max:1,center:["84%","65%"],radius:"40%",startAngle:155,endAngle:25,splitNumber:2},{min:0,max:1,center:["84%","65%"],radius:"40%",startAngle:335,endAngle:205,splitNumber:2}]:void 0}},components:{VeGauge:i.n(o).a}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"z-gauge-wrap"},[t("ve-gauge",{attrs:{data:this.opt.d,height:this.conf.height,width:this.conf.width,settings:this.opt.settings}})],1)},staticRenderFns:[]};var d={data:function(){return{list:[{key:"a",value:.8,name:"年"},{key:"b",value:.6,name:"月"},{key:"c",value:.9,name:"周"}],list5:[{key:"a",value:.8,name:"年"},{key:"b",value:.3,name:"季"},{key:"c",value:.6,name:"月"},{key:"d",value:.9,name:"周"}],list2:[{key:"a",value:.8,name:"年计划"},{key:"b",value:.6,name:"月"}],list3:[{key:"a",value:.8}],list4:[{key:"a",value:.8,name:"年"},{key:"b",value:.6,name:"月"}],options:{a:{center:["20%","55%"]},b:{center:["80%","55%"],endAngle:0,startAngle:180},lineColor:[[.3,"#999"],[.6,"#666"],[1,"#111"]]}}},methods:{},components:{Gauge:i("VU/8")(s,u,!1,function(e){i("Vyf9")},null,null).exports}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container mui-clearfix"},[i("h4",[e._v("一个")]),e._v(" "),i("Gauge",{attrs:{list:e.list3}}),e._v(" "),i("h4",[e._v("两个")]),e._v(" "),i("Gauge",{attrs:{list:e.list2}}),e._v(" "),i("h4",[e._v("三个")]),e._v(" "),i("Gauge",{attrs:{list:e.list}}),e._v(" "),i("h4",[e._v("四个")]),e._v(" "),i("Gauge",{attrs:{list:e.list5}}),e._v(" "),i("h4",[e._v("两个，自定义")]),e._v(" "),i("Gauge",{attrs:{list:e.list4,options:e.options}})],1)},staticRenderFns:[]};var g=i("VU/8")(d,c,!1,function(e){i("qUL/")},null,null);t.default=g.exports},JNWs:function(e,t,i){var n=i("/gZK"),a=i("EJsE"),r=i("/gxq"),l=a.extend({type:"series.gauge",getInitialData:function(e,t){var i=e.data||[];return r.isArray(i)||(i=[i]),e.data=i,n(this,["value"])},defaultOption:{zlevel:0,z:2,center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]],width:30}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,distance:5,color:"auto"},pointer:{show:!0,length:"80%",width:8},itemStyle:{color:"auto"},title:{show:!0,offsetCenter:[0,"-40%"],color:"#333",fontSize:15},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"auto",fontSize:30}}});e.exports=l},L8Lv:function(e,t,i){"use strict";var n=i("QHuJ"),a=i("uBAc");i("87tG");var r,l=(r=i("1KFz"))&&"object"==typeof r&&"default"in r?r.default:r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};var s=function(e,t,i,r){var l=i.dimension,s=void 0===l?e[0]:l,u=i.metrics,d=void 0===u?e[1]:u,c=i.digit,g=void 0===c?2:c,h=i.dataType,m=void 0===h?{}:h,f=i.labelMap,p=void 0===f?{}:f,v=i.seriesMap,y=void 0===v?{}:v,x=i.dataName,w=void 0===x?{}:x,S=r.tooltipFormatter;return{tooltip:r.tooltipVisible&&function(e){var t=e.tooltipFormatter,i=e.dataType,a=e.digit;return{formatter:function(e){var r=e.seriesName,l=e.data,o=l.value,s=l.name;if(t)return t.apply(null,arguments);var u=[];return u.push(r+": "),u.push(n.getFormated(o,i[r],a)+" "+s),u.join("")}}}({tooltipFormatter:S,dataType:m}),series:function(e){var t=e.rows,i=e.dimension,r=e.metrics,l=e.digit,s=e.dataType,u=e.labelMap,d=e.seriesMap,c=e.dataName;return t.map(function(e){var t=e[i],g=d[t],h={type:"gauge",name:null!=u[t]?u[t]:t,data:[{name:c[t]||"",value:e[r]}],detail:{formatter:function(e){return n.getFormated(e,s[t],l)}},axisLabel:{formatter:function(e){return n.getFormated(e,s[t],l)}}};return g&&Object.keys(g).forEach(function(e){a.isObject(h[e])?o(h[e],g[e]):h[e]=g[e]}),h})}({rows:t,dimension:s,metrics:d,digit:g,dataType:m,labelMap:p,seriesMap:y,dataName:w})}},u=o({},l,{name:"VeGauge",data:function(){return this.chartHandler=s,{}}});e.exports=u},Vyf9:function(e,t){},hG1p:function(e,t,i){var n=i("GxVO").extend({type:"echartsGaugePointer",shape:{angle:0,width:10,r:10,x:0,y:0},buildPath:function(e,t){var i=Math.cos,n=Math.sin,a=t.r,r=t.width,l=t.angle,o=t.x-i(l)*r*(r>=a/3?1:2),s=t.y-n(l)*r*(r>=a/3?1:2);l=t.angle-Math.PI/2,e.moveTo(o,s),e.lineTo(t.x+i(l)*r,t.y+n(l)*r),e.lineTo(t.x+i(t.angle)*a,t.y+n(t.angle)*a),e.lineTo(t.x-i(l)*r,t.y-n(l)*r),e.lineTo(o,s)}});e.exports=n},"qUL/":function(e,t){},sTIA:function(e,t,i){var n=i("hG1p"),a=i("0sHC"),r=i("Ylhr"),l=i("wWR3"),o=l.parsePercent,s=l.round,u=l.linearMap;function d(e,t){return t&&("string"==typeof t?e=t.replace("{value}",null!=e?e:""):"function"==typeof t&&(e=t(e))),e}var c=2*Math.PI,g=r.extend({type:"gauge",render:function(e,t,i){this.group.removeAll();var n=e.get("axisLine.lineStyle.color"),a=function(e,t){var i=e.get("center"),n=t.getWidth(),a=t.getHeight(),r=Math.min(n,a);return{cx:o(i[0],t.getWidth()),cy:o(i[1],t.getHeight()),r:o(e.get("radius"),r/2)}}(e,i);this._renderMain(e,t,i,n,a)},dispose:function(){},_renderMain:function(e,t,i,n,r){for(var l=this.group,o=e.getModel("axisLine").getModel("lineStyle"),s=e.get("clockwise"),u=-e.get("startAngle")/180*Math.PI,d=((f=-e.get("endAngle")/180*Math.PI)-u)%c,g=u,h=o.get("width"),m=0;m<n.length;m++){var f=u+d*Math.min(Math.max(n[m][0],0),1),p=new a.Sector({shape:{startAngle:g,endAngle:f,cx:r.cx,cy:r.cy,clockwise:s,r0:r.r-h,r:r.r},silent:!0});p.setStyle({fill:n[m][1]}),p.setStyle(o.getLineStyle(["color","borderWidth","borderColor"])),l.add(p),g=f}var v=function(e){if(e<=0)return n[0][1];for(var t=0;t<n.length;t++)if(n[t][0]>=e&&(0===t?0:n[t-1][0])<e)return n[t][1];return n[t-1][1]};if(!s){var y=u;u=f,f=y}this._renderTicks(e,t,i,v,r,u,f,s),this._renderPointer(e,t,i,v,r,u,f,s),this._renderTitle(e,t,i,v,r),this._renderDetail(e,t,i,v,r)},_renderTicks:function(e,t,i,n,r,l,u,c){for(var g=this.group,h=r.cx,m=r.cy,f=r.r,p=+e.get("min"),v=+e.get("max"),y=e.getModel("splitLine"),x=e.getModel("axisTick"),w=e.getModel("axisLabel"),S=e.get("splitNumber"),M=x.get("splitNumber"),b=o(y.get("length"),f),k=o(x.get("length"),f),_=l,A=(u-l)/S,T=A/M,L=y.getModel("lineStyle").getLineStyle(),N=x.getModel("lineStyle").getLineStyle(),C=0;C<=S;C++){var G=Math.cos(_),I=Math.sin(_);if(y.get("show")){var P=new a.Line({shape:{x1:G*f+h,y1:I*f+m,x2:G*(f-b)+h,y2:I*(f-b)+m},style:L,silent:!0});"auto"===L.stroke&&P.setStyle({stroke:n(C/S)}),g.add(P)}if(w.get("show")){var E=d(s(C/S*(v-p)+p),w.get("formatter")),O=w.get("distance"),z=n(C/S);g.add(new a.Text({style:a.setTextStyle({},w,{text:E,x:G*(f-b-O)+h,y:I*(f-b-O)+m,textVerticalAlign:I<-.4?"top":I>.4?"bottom":"middle",textAlign:G<-.4?"left":G>.4?"right":"center"},{autoColor:z}),silent:!0}))}if(x.get("show")&&C!==S){for(var D=0;D<=M;D++){G=Math.cos(_),I=Math.sin(_);var V=new a.Line({shape:{x1:G*f+h,y1:I*f+m,x2:G*(f-k)+h,y2:I*(f-k)+m},silent:!0,style:N});"auto"===N.stroke&&V.setStyle({stroke:n((C+D/M)/S)}),g.add(V),_+=T}_-=T}else _+=A}},_renderPointer:function(e,t,i,r,l,s,d,c){var g=this.group,h=this._data;if(e.get("pointer.show")){var m=[+e.get("min"),+e.get("max")],f=[s,d],p=e.getData(),v=p.mapDimension("value");p.diff(h).add(function(t){var i=new n({shape:{angle:s}});a.initProps(i,{shape:{angle:u(p.get(v,t),m,f,!0)}},e),g.add(i),p.setItemGraphicEl(t,i)}).update(function(t,i){var n=h.getItemGraphicEl(i);a.updateProps(n,{shape:{angle:u(p.get(v,t),m,f,!0)}},e),g.add(n),p.setItemGraphicEl(t,n)}).remove(function(e){var t=h.getItemGraphicEl(e);g.remove(t)}).execute(),p.eachItemGraphicEl(function(e,t){var i=p.getItemModel(t),n=i.getModel("pointer");e.setShape({x:l.cx,y:l.cy,width:o(n.get("width"),l.r),r:o(n.get("length"),l.r)}),e.useStyle(i.getModel("itemStyle").getItemStyle()),"auto"===e.style.fill&&e.setStyle("fill",r(u(p.get(v,t),m,[0,1],!0))),a.setHoverStyle(e,i.getModel("emphasis.itemStyle").getItemStyle())}),this._data=p}else h&&h.eachItemGraphicEl(function(e){g.remove(e)})},_renderTitle:function(e,t,i,n,r){var l=e.getData(),s=l.mapDimension("value"),d=e.getModel("title");if(d.get("show")){var c=d.get("offsetCenter"),g=r.cx+o(c[0],r.r),h=r.cy+o(c[1],r.r),m=+e.get("min"),f=+e.get("max"),p=e.getData().get(s,0),v=n(u(p,[m,f],[0,1],!0));this.group.add(new a.Text({silent:!0,style:a.setTextStyle({},d,{x:g,y:h,text:l.getName(0),textAlign:"center",textVerticalAlign:"middle"},{autoColor:v,forceRich:!0})}))}},_renderDetail:function(e,t,i,n,r){var l=e.getModel("detail"),s=+e.get("min"),c=+e.get("max");if(l.get("show")){var g=l.get("offsetCenter"),h=r.cx+o(g[0],r.r),m=r.cy+o(g[1],r.r),f=o(l.get("width"),r.r),p=o(l.get("height"),r.r),v=e.getData(),y=v.get(v.mapDimension("value"),0),x=n(u(y,[s,c],[0,1],!0));this.group.add(new a.Text({silent:!0,style:a.setTextStyle({},l,{x:h,y:m,text:d(y,l.get("formatter")),textWidth:isNaN(f)?null:f,textHeight:isNaN(p)?null:p,textAlign:"center",textVerticalAlign:"middle"},{autoColor:x,forceRich:!0})}))}}});e.exports=g}});
//# sourceMappingURL=8.82e18029998b1c2817ac.js.map