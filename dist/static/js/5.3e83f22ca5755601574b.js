webpackJsonp([5],{"2m1D":function(t,e,r){var a=r("EJsE"),n=r("ao1T"),i=a.extend({type:"series.__base_bar__",getInitialData:function(t,e){return n(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var r=e.dataToPoint(e.clampData(t)),a=this.getData(),n=a.getLayout("offset"),i=a.getLayout("size");return r[e.getBaseAxis().isHorizontal()?0:1]+=n+i/2,r}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}});t.exports=i},"DPh+":function(t,e,r){var a=r("2m1D").extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});t.exports=a},GbHy:function(t,e,r){var a=r("Icdr"),n=r("/gxq"),i=r("m/6y"),o=i.layout,s=i.largeLayout;r("5vFd"),r("DPh+"),r("eHPu"),r("UkNE"),a.registerLayout(n.curry(o,"bar")),a.registerLayout(s),a.registerVisual({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}})},Pobh:function(t,e,r){var a=r("RYbJ")([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),n={getBarItemStyle:function(t){var e=a(this,t);if(this.getBorderLineDash){var r=this.getBorderLineDash();r&&(e.lineDash=r)}return e}};t.exports=n},Zyun:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{bar1:{title:{text:"x轴是周"},list:[{name:"张三",data:[15,24,18,32,44,21,26]}]},bar2:{title:{text:"x轴是年",x:"left"},x:"month",list:[{name:"张三",data:[15,24,18,32,44,21,26,15,41,32,25,16]}]},bar3:{title:{text:"自定义x轴",x:"right"},x:[1,2,3,4,5,6,7],list:[{name:"张三",data:[15,24,18,32,44,21,26]}]},bar4:{title:{text:"带图例"},list:[{label:!1,name:"张三",data:[15,24,18,32,44,21,26]}],legend:{show:!0}},bar5:{title:{text:"横向的"},list:[{name:"张三",data:[15,24,18,32,44,21,26]}],dir:"horizontal"}}},methods:{onBarClick:function(t){console.log(t)}},components:{BarChart:r("zOqj").a}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("bar-chart",{attrs:{options:t.bar1},on:{onBarClick:t.onBarClick}}),t._v(" "),r("bar-chart",{attrs:{options:t.bar2},on:{onBarClick:t.onBarClick}}),t._v(" "),r("bar-chart",{attrs:{options:t.bar3},on:{onBarClick:t.onBarClick}}),t._v(" "),r("bar-chart",{attrs:{options:t.bar4},on:{onBarClick:t.onBarClick}}),t._v(" "),r("bar-chart",{attrs:{options:t.bar5},on:{onBarClick:t.onBarClick}})],1)},staticRenderFns:[]};var i=r("VU/8")(a,n,!1,function(t){r("dqOR")},null,null);e.default=i.exports},dqOR:function(t,e){},dzlV:function(t,e,r){var a=r("0sHC"),n=r("RjA7").getDefaultLabel;function i(t,e){"outside"===t.textPosition&&(t.textPosition=e)}e.setLabel=function(t,e,r,o,s,l,h){var d=r.getModel("label"),c=r.getModel("emphasis.label");a.setLabelStyle(t,e,d,c,{labelFetcher:s,labelDataIndex:l,defaultText:n(s.getData(),l),isRectText:!0,autoColor:o}),i(t),i(e)}},eHPu:function(t,e,r){r("4Nz2").__DEV__;var a=r("Icdr"),n=r("/gxq"),i=r("0sHC"),o=r("dzlV").setLabel,s=r("Pdtn"),l=r("Pobh"),h=r("GxVO"),d=["itemStyle","barBorderWidth"];n.extend(s.prototype,l);var c=a.extendChartView({type:"bar",render:function(t,e,r){this._updateDrawMode(t);var a=t.get("coordinateSystem");return"cartesian2d"!==a&&"polar"!==a||(this._isLargeDraw?this._renderLarge(t,e,r):this._renderNormal(t,e,r)),this.group},incrementalPrepareRender:function(t,e,r){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,r,a){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,r){var a,n=this.group,o=t.getData(),s=this._data,l=t.coordinateSystem,h=l.getBaseAxis();"cartesian2d"===l.type?a=h.isHorizontal():"polar"===l.type&&(a="angle"===h.dim);var d=t.isAnimationEnabled()?t:null;o.diff(s).add(function(e){if(o.hasValue(e)){var r=o.getItemModel(e),i=f[l.type](o,e,r),s=u[l.type](o,e,r,i,a,d);o.setItemGraphicEl(e,s),n.add(s),v(s,o,e,r,i,t,a,"polar"===l.type)}}).update(function(e,r){var h=s.getItemGraphicEl(r);if(o.hasValue(e)){var c=o.getItemModel(e),p=f[l.type](o,e,c);h?i.updateProps(h,{shape:p},d,e):h=u[l.type](o,e,c,p,a,d,!0),o.setItemGraphicEl(e,h),n.add(h),v(h,o,e,c,p,t,a,"polar"===l.type)}else n.remove(h)}).remove(function(t){var e=s.getItemGraphicEl(t);"cartesian2d"===l.type?e&&p(t,d,e):e&&g(t,d,e)}).execute(),this._data=o},_renderLarge:function(t,e,r){this._clear(),m(t,this.group)},_incrementalRenderLarge:function(t,e){m(e,this.group,!0)},dispose:n.noop,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,r=this._data;t&&t.get("animation")&&r&&!this._isLargeDraw?r.eachItemGraphicEl(function(e){"sector"===e.type?g(e.dataIndex,t,e):p(e.dataIndex,t,e)}):e.removeAll(),this._data=null}}),u={cartesian2d:function(t,e,r,a,o,s,l){var h=new i.Rect({shape:n.extend({},a)});if(s){var d=h.shape,c=o?"height":"width",u={};d[c]=0,u[c]=a[c],i[l?"updateProps":"initProps"](h,{shape:u},s,e)}return h},polar:function(t,e,r,a,o,s,l){var h=a.startAngle<a.endAngle,d=new i.Sector({shape:n.defaults({clockwise:h},a)});if(s){var c=d.shape,u=o?"r":"endAngle",p={};c[u]=o?0:a.startAngle,p[u]=a[u],i[l?"updateProps":"initProps"](d,{shape:p},s,e)}return d}};function p(t,e,r){r.style.text=null,i.updateProps(r,{shape:{width:0}},e,t,function(){r.parent&&r.parent.remove(r)})}function g(t,e,r){r.style.text=null,i.updateProps(r,{shape:{r:r.shape.r0}},e,t,function(){r.parent&&r.parent.remove(r)})}var f={cartesian2d:function(t,e,r){var a=t.getItemLayout(e),n=function(t,e){var r=t.get(d)||0;return Math.min(r,Math.abs(e.width),Math.abs(e.height))}(r,a),i=a.width>0?1:-1,o=a.height>0?1:-1;return{x:a.x+i*n/2,y:a.y+o*n/2,width:a.width-i*n,height:a.height-o*n}},polar:function(t,e,r){var a=t.getItemLayout(e);return{cx:a.cx,cy:a.cy,r0:a.r0,r:a.r,startAngle:a.startAngle,endAngle:a.endAngle}}};function v(t,e,r,a,s,l,h,d){var c=e.getItemVisual(r,"color"),u=e.getItemVisual(r,"opacity"),p=a.getModel("itemStyle"),g=a.getModel("emphasis.itemStyle").getBarItemStyle();d||t.setShape("r",p.get("barBorderRadius")||0),t.useStyle(n.defaults({fill:c,opacity:u},p.getBarItemStyle()));var f=a.getShallow("cursor");f&&t.attr("cursor",f);var v=h?s.height>0?"bottom":"top":s.width>0?"left":"right";d||o(t.style,g,a,c,l,r,v),i.setHoverStyle(t,g)}var y=h.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var r=e.points,a=this.__startPoint,n=this.__valueIdx,i=0;i<r.length;i+=2)a[this.__valueIdx]=r[i+n],t.moveTo(a[0],a[1]),t.lineTo(r[i],r[i+1])}});function m(t,e,r){var a=t.getData(),n=[],i=a.getLayout("valueAxisHorizontal")?1:0;n[1-i]=a.getLayout("valueAxisStart");var o=new y({shape:{points:a.getLayout("largePoints")},incremental:!!r,__startPoint:n,__valueIdx:i});e.add(o),function(t,e,r){var a=r.getVisual("borderColor")||r.getVisual("color"),n=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(n),t.style.fill=null,t.style.stroke=a,t.style.lineWidth=r.getLayout("barWidth")}(o,t,a)}t.exports=c},kRrT:function(t,e){},zOqj:function(t,e,r){"use strict";var a=r("BO1k"),n=r.n(a),i=r("ALSO"),o=(r("GbHy"),r("miEh"),r("80cc"),{data:function(){return{chartDef:{type:"bar",label:{normal:{show:!0,position:"top"}}}}},props:{options:{type:Object,default:function(){return{}}},height:{type:String,default:"300px"}},computed:{opt:function(){this.chartDef.label.normal.position="horizontal"===this.options.dir?"right":"top";var t=this.handlerData(),e=this.xHandler(this.options.x),r={},a={};"horizontal"===this.options.dir?(r={type:"value"},a={type:"category",data:e}):(r={type:"category",data:e},a={type:"value"});var n={title:{text:"",x:"center"},xAxis:r,yAxis:a,series:t.series,legend:{show:!1,data:t.names,bottom:0}};return mui.extend(!0,{},n,this.options)}},methods:{handlerData:function(){var t=[],e=[],r=!0,a=!1,i=void 0;try{for(var o,s=n()(this.options.list);!(r=(o=s.next()).done);r=!0){var l=o.value,h=mui.extend(!0,{},this.chartDef,l);e.push(h),t.push(h.name)}}catch(t){a=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return{series:e,names:t}},xHandler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"week";return"week"===t?["周一","周二","周三","周四","周五","周六","周日"]:"month"===t?["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]:t},onReady:function(t){this.$emit("onReady",t)},onClick:function(t,e,r){this.$emit("onBarClick",{event:t,instance:e,echarts:r})}},components:{IEcharts:i.a}}),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"z-chart-container",style:{height:this.height}},[e("IEcharts",{attrs:{option:this.opt},on:{ready:this.onReady,click:this.onClick}})],1)},staticRenderFns:[]};var l=r("VU/8")(o,s,!1,function(t){r("kRrT")},null,null);e.a=l.exports}});
//# sourceMappingURL=5.3e83f22ca5755601574b.js.map