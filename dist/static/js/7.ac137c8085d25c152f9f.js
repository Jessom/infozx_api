webpackJsonp([7],{"1z+c":function(e,t){},"87tG":function(e,t,i){i("JNWs"),i("sTIA")},JNWs:function(e,t,i){var a=i("/gZK"),n=i("EJsE"),r=i("/gxq"),o=n.extend({type:"series.gauge",getInitialData:function(e,t){var i=e.data||[];return r.isArray(i)||(i=[i]),e.data=i,a(this,["value"])},defaultOption:{zlevel:0,z:2,center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]],width:30}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,distance:5,color:"auto"},pointer:{show:!0,length:"80%",width:8},itemStyle:{color:"auto"},title:{show:!0,offsetCenter:[0,"-40%"],color:"#333",fontSize:15},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"auto",fontSize:30}}});e.exports=o},L8Lv:function(e,t,i){"use strict";var a=i("QHuJ"),n=i("uBAc");i("87tG");var r,o=(r=i("1KFz"))&&"object"==typeof r&&"default"in r?r.default:r,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e};var s=function(e,t,i,r){var o=i.dimension,s=void 0===o?e[0]:o,g=i.metrics,d=void 0===g?e[1]:g,u=i.digit,c=void 0===u?2:u,h=i.dataType,p=void 0===h?{}:h,f=i.labelMap,m=void 0===f?{}:f,v=i.seriesMap,y=void 0===v?{}:v,x=i.dataName,w=void 0===x?{}:x,M=r.tooltipFormatter;return{tooltip:r.tooltipVisible&&function(e){var t=e.tooltipFormatter,i=e.dataType,n=e.digit;return{formatter:function(e){var r=e.seriesName,o=e.data,l=o.value,s=o.name;if(t)return t.apply(null,arguments);var g=[];return g.push(r+": "),g.push(a.getFormated(l,i[r],n)+" "+s),g.join("")}}}({tooltipFormatter:M,dataType:p}),series:function(e){var t=e.rows,i=e.dimension,r=e.metrics,o=e.digit,s=e.dataType,g=e.labelMap,d=e.seriesMap,u=e.dataName;return t.map(function(e){var t=e[i],c=d[t],h={type:"gauge",name:null!=g[t]?g[t]:t,data:[{name:u[t]||"",value:e[r]}],detail:{formatter:function(e){return a.getFormated(e,s[t],o)}},axisLabel:{formatter:function(e){return a.getFormated(e,s[t],o)}}};return c&&Object.keys(c).forEach(function(e){n.isObject(h[e])?l(h[e],c[e]):h[e]=c[e]}),h})}({rows:t,dimension:s,metrics:d,digit:c,dataType:p,labelMap:m,seriesMap:y,dataName:w})}},g=l({},o,{name:"VeGauge",data:function(){return this.chartHandler=s,{}}});e.exports=g},MzT3:function(e,t){},hG1p:function(e,t,i){var a=i("GxVO").extend({type:"echartsGaugePointer",shape:{angle:0,width:10,r:10,x:0,y:0},buildPath:function(e,t){var i=Math.cos,a=Math.sin,n=t.r,r=t.width,o=t.angle,l=t.x-i(o)*r*(r>=n/3?1:2),s=t.y-a(o)*r*(r>=n/3?1:2);o=t.angle-Math.PI/2,e.moveTo(l,s),e.lineTo(t.x+i(o)*r,t.y+a(o)*r),e.lineTo(t.x+i(t.angle)*n,t.y+a(t.angle)*n),e.lineTo(t.x-i(o)*r,t.y-a(o)*r),e.lineTo(l,s)}});e.exports=a},pVxz:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("L8Lv"),n={props:{options:{type:Object,default:function(){return{}}}},computed:{opt:function(){var e=mui.extend(!0,{},{showDetail:!0,type:"percent",name:"",nameSize:14,min:0,max:1,stage:[[.2,"lime"],[.8,"#1e90ff"],[1,"#ff4500"]],showAxisLable:!1},this.options);console.log(e);var t={labelMap:{speed:"计划"},dataType:{speed:e.type},dataName:{speed:e.name},seriesMap:{speed:{min:e.min,max:e.max,radius:"100%",axisLine:{lineStyle:{color:e.stage,width:2}},axisLabel:{show:e.showAxisLable,textStyle:{fontSize:12,color:"#363636"}},axisTick:{length:5,lineStyle:{color:"auto"}},splitLine:{length:15,lineStyle:{color:"auto"}},pointer:{width:2},title:{textStyle:{fontSize:e.nameSize,color:"#363636"}},detail:{show:e.showDetail,offsetCenter:[0,"50%"],textStyle:{color:"#363636",fontSize:14}}}}},i=this.options.width||"33.33vw",a=this.options.height||"33.33vw";return{settings:t,res:{columns:["type","value"],rows:[{type:"speed",value:this.options.value?this.options.value:0}]},width:i,height:a}}},components:{VeGauge:i.n(a).a}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrap"},[t("ve-gauge",{attrs:{data:this.opt.res,width:this.opt.width,height:this.opt.height,settings:this.opt.settings}})],1)},staticRenderFns:[]};var o={data:function(){return{gauge1:{width:"100%",value:.26,name:"阶段计划"},gauge2:{width:"100%",value:.1,name:"月计划"},gauge3:{width:"100%",value:.83,name:"周计划"}}},methods:{},components:{Gauge:i("VU/8")(n,r,!1,function(e){i("1z+c")},null,null).exports}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container mui-clearfix"},[t("div",{staticClass:"gauge mui-pull-left"},[t("gauge",{attrs:{options:this.gauge1}})],1),this._v(" "),t("div",{staticClass:"gauge mui-pull-left"},[t("gauge",{attrs:{options:this.gauge2}})],1),this._v(" "),t("div",{staticClass:"gauge mui-pull-left"},[t("gauge",{attrs:{options:this.gauge3}})],1)])},staticRenderFns:[]};var s=i("VU/8")(o,l,!1,function(e){i("MzT3")},"data-v-fdc93e1a",null);t.default=s.exports},sTIA:function(e,t,i){var a=i("hG1p"),n=i("0sHC"),r=i("Ylhr"),o=i("wWR3"),l=o.parsePercent,s=o.round,g=o.linearMap;function d(e,t){return t&&("string"==typeof t?e=t.replace("{value}",null!=e?e:""):"function"==typeof t&&(e=t(e))),e}var u=2*Math.PI,c=r.extend({type:"gauge",render:function(e,t,i){this.group.removeAll();var a=e.get("axisLine.lineStyle.color"),n=function(e,t){var i=e.get("center"),a=t.getWidth(),n=t.getHeight(),r=Math.min(a,n);return{cx:l(i[0],t.getWidth()),cy:l(i[1],t.getHeight()),r:l(e.get("radius"),r/2)}}(e,i);this._renderMain(e,t,i,a,n)},dispose:function(){},_renderMain:function(e,t,i,a,r){for(var o=this.group,l=e.getModel("axisLine").getModel("lineStyle"),s=e.get("clockwise"),g=-e.get("startAngle")/180*Math.PI,d=((f=-e.get("endAngle")/180*Math.PI)-g)%u,c=g,h=l.get("width"),p=0;p<a.length;p++){var f=g+d*Math.min(Math.max(a[p][0],0),1),m=new n.Sector({shape:{startAngle:c,endAngle:f,cx:r.cx,cy:r.cy,clockwise:s,r0:r.r-h,r:r.r},silent:!0});m.setStyle({fill:a[p][1]}),m.setStyle(l.getLineStyle(["color","borderWidth","borderColor"])),o.add(m),c=f}var v=function(e){if(e<=0)return a[0][1];for(var t=0;t<a.length;t++)if(a[t][0]>=e&&(0===t?0:a[t-1][0])<e)return a[t][1];return a[t-1][1]};if(!s){var y=g;g=f,f=y}this._renderTicks(e,t,i,v,r,g,f,s),this._renderPointer(e,t,i,v,r,g,f,s),this._renderTitle(e,t,i,v,r),this._renderDetail(e,t,i,v,r)},_renderTicks:function(e,t,i,a,r,o,g,u){for(var c=this.group,h=r.cx,p=r.cy,f=r.r,m=+e.get("min"),v=+e.get("max"),y=e.getModel("splitLine"),x=e.getModel("axisTick"),w=e.getModel("axisLabel"),M=e.get("splitNumber"),S=x.get("splitNumber"),b=l(y.get("length"),f),T=l(x.get("length"),f),L=o,_=(g-o)/M,A=_/S,C=y.getModel("lineStyle").getLineStyle(),k=x.getModel("lineStyle").getLineStyle(),I=0;I<=M;I++){var N=Math.cos(L),z=Math.sin(L);if(y.get("show")){var G=new n.Line({shape:{x1:N*f+h,y1:z*f+p,x2:N*(f-b)+h,y2:z*(f-b)+p},style:C,silent:!0});"auto"===C.stroke&&G.setStyle({stroke:a(I/M)}),c.add(G)}if(w.get("show")){var P=d(s(I/M*(v-m)+m),w.get("formatter")),D=w.get("distance"),E=a(I/M);c.add(new n.Text({style:n.setTextStyle({},w,{text:P,x:N*(f-b-D)+h,y:z*(f-b-D)+p,textVerticalAlign:z<-.4?"top":z>.4?"bottom":"middle",textAlign:N<-.4?"left":N>.4?"right":"center"},{autoColor:E}),silent:!0}))}if(x.get("show")&&I!==M){for(var V=0;V<=S;V++){N=Math.cos(L),z=Math.sin(L);var F=new n.Line({shape:{x1:N*f+h,y1:z*f+p,x2:N*(f-T)+h,y2:z*(f-T)+p},silent:!0,style:k});"auto"===k.stroke&&F.setStyle({stroke:a((I+V/S)/M)}),c.add(F),L+=A}L-=A}else L+=_}},_renderPointer:function(e,t,i,r,o,s,d,u){var c=this.group,h=this._data;if(e.get("pointer.show")){var p=[+e.get("min"),+e.get("max")],f=[s,d],m=e.getData(),v=m.mapDimension("value");m.diff(h).add(function(t){var i=new a({shape:{angle:s}});n.initProps(i,{shape:{angle:g(m.get(v,t),p,f,!0)}},e),c.add(i),m.setItemGraphicEl(t,i)}).update(function(t,i){var a=h.getItemGraphicEl(i);n.updateProps(a,{shape:{angle:g(m.get(v,t),p,f,!0)}},e),c.add(a),m.setItemGraphicEl(t,a)}).remove(function(e){var t=h.getItemGraphicEl(e);c.remove(t)}).execute(),m.eachItemGraphicEl(function(e,t){var i=m.getItemModel(t),a=i.getModel("pointer");e.setShape({x:o.cx,y:o.cy,width:l(a.get("width"),o.r),r:l(a.get("length"),o.r)}),e.useStyle(i.getModel("itemStyle").getItemStyle()),"auto"===e.style.fill&&e.setStyle("fill",r(g(m.get(v,t),p,[0,1],!0))),n.setHoverStyle(e,i.getModel("emphasis.itemStyle").getItemStyle())}),this._data=m}else h&&h.eachItemGraphicEl(function(e){c.remove(e)})},_renderTitle:function(e,t,i,a,r){var o=e.getData(),s=o.mapDimension("value"),d=e.getModel("title");if(d.get("show")){var u=d.get("offsetCenter"),c=r.cx+l(u[0],r.r),h=r.cy+l(u[1],r.r),p=+e.get("min"),f=+e.get("max"),m=e.getData().get(s,0),v=a(g(m,[p,f],[0,1],!0));this.group.add(new n.Text({silent:!0,style:n.setTextStyle({},d,{x:c,y:h,text:o.getName(0),textAlign:"center",textVerticalAlign:"middle"},{autoColor:v,forceRich:!0})}))}},_renderDetail:function(e,t,i,a,r){var o=e.getModel("detail"),s=+e.get("min"),u=+e.get("max");if(o.get("show")){var c=o.get("offsetCenter"),h=r.cx+l(c[0],r.r),p=r.cy+l(c[1],r.r),f=l(o.get("width"),r.r),m=l(o.get("height"),r.r),v=e.getData(),y=v.get(v.mapDimension("value"),0),x=a(g(y,[s,u],[0,1],!0));this.group.add(new n.Text({silent:!0,style:n.setTextStyle({},o,{x:h,y:p,text:d(y,o.get("formatter")),textWidth:isNaN(f)?null:f,textHeight:isNaN(m)?null:m,textAlign:"center",textVerticalAlign:"middle"},{autoColor:x,forceRich:!0})}))}}});e.exports=c}});
//# sourceMappingURL=7.ac137c8085d25c152f9f.js.map