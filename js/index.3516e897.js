(function(t){function e(e){for(var a,o,s=e[0],l=e[1],h=e[2],c=0,p=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,h||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={index:0},i=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pbm-viewer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var h=0;h<s.length;h++)e(s[h]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("5f5b"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("div",{staticClass:"container"},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[t._v(" PBM Viewer ")])],1)],1)]),r("div",{staticClass:"container",attrs:{id:"app"}},[r("h3",[t._v("PPM, PGM, and PBM Viewer")]),r("hr"),r("Viewer")],1),r("footer",{staticClass:"container mt-4 text-center"},[r("hr"),r("div",{staticClass:"text-muted"},[r("ul",[r("li",[t._v(t._s(t.name)+"-"+t._s(t.version))]),t._m(0),t._m(1)])])])],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://github.com/alfg/pbm-viewer"}},[t._v("Source")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://github.com/alfg/pbm-viewer/issues"}},[t._v("Report Bugs")])])}],s=r("9224"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"viewer"},[r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"Select a file:","label-for":"file"}},[r("b-input-group",[r("b-form-select",{staticClass:"protocol",model:{value:t.protocol,callback:function(e){t.protocol=e},expression:"protocol"}},t._l(t.protocols,(function(e){return r("option",{key:e.id,domProps:{value:e.value}},[t._v(t._s(e.name))])})),0),"file"===t.protocol?r("b-form-file",{attrs:{id:"file",accept:".pbm, .pgm, .ppm",state:Boolean(t.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{change:t.onFile},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}):t._e(),"url"===t.protocol?r("b-form-input",{attrs:{state:Boolean(t.url),placeholder:"Enter a URL"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}):t._e(),"example"===t.protocol?r("b-form-select",{scopedSlots:t._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!1,1780735698),model:{value:t.url,callback:function(e){t.url=e},expression:"url"}},t._l(t.examples,(function(e){return r("option",{key:e.id,domProps:{value:e.value}},[t._v(t._s(e.name))])})),0):t._e(),"file"!==t.protocol?r("b-input-group-append",[r("b-button",{on:{click:t.onDownload}},[t._v("Download")])],1):t._e()],1)],1)],1)],1),t.showProgress?r("b-progress",{attrs:{height:"2px",value:t.progress,max:"100"}}):t._e(),t.image?r("img",{attrs:{src:t.image,width:"100%"}}):t._e()],1)},h=[],u=r("d4ec"),c=r("bee2"),p=(r("466d"),r("ac1f"),r("d3b7"),r("25f0"),r("a15b"),r("1276"),function(){function t(e){Object(u["a"])(this,t),this._data=e,this._parser=null,this._formatter=null,this.width=null,this.height=null,this.init()}return Object(c["a"])(t,[{key:"init",value:function(){var t=/^(\S+)\s+(#.*?\n)*\s*(\d+)\s+(\d+)\s+(\d+)?\s*/,e=this._data.match(t);if(!e)throw new TypeError("Not a Netpbm file.");var r=this.width=parseInt(e[3],10),a=this.height=parseInt(e[4],10),n=parseInt(e[5],10),i=n<256?1:2,o=this._data.substr(e[0].length);switch(e[1]){case"P1":this._parser=new d(n+" "+o,i),this._formatter=new g(r,a);break;case"P2":this._parser=new d(o,i),this._formatter=new m(r,a,n);break;case"P3":this._parser=new d(o,i),this._formatter=new _(r,a,n);break;case"P4":this._parser=new f(o,i),this._formatter=new g(r,a);break;case"P5":this._parser=new f(o,i),this._formatter=new m(r,a,n);break;case"P6":this._parser=new f(o,i),this._formatter=new _(r,a,n);break;default:throw new TypeError("Format not supported: ",e[1])}}},{key:"getPNG",value:function(){var t=this._formatter.getCanvas(this._parser);return t.toDataURL()}}]),t}()),f=function(){function t(e,r){Object(u["a"])(this,t),this._data=e,this._bytes=r,this._pointer=0}return Object(c["a"])(t,[{key:"getNextSample",value:function(){if(this._pointer>=this._data.length)return!1;for(var t=0,e=0;e<this._bytes;e++)t=255*t+this._data.charCodeAt(this._pointer++);return t}}]),t}(),d=function(){function t(e,r){Object(u["a"])(this,t),this._data=e,this._bytes=r,this._pointer=0}return Object(c["a"])(t,[{key:"getNextSample",value:function(){if(this._pointer>=this._data.length)return!1;for(var t=0,e=0;e<this._bytes;e++)t=255*t+parseInt(this._data[this._pointer++],10);return t}}]),t}(),_=function(){function t(e,r,a){Object(u["a"])(this,t),this._width=e,this._height=r,this._maxVal=a}return Object(c["a"])(t,[{key:"getCanvas",value:function(t){var e,r=document.createElement("canvas"),a=r.getContext("2d");r.width=a.width=this._width,r.height=a.height=this._height,e=a.getImageData(0,0,this._width,this._height);for(var n=0;n<this._height;n++)for(var i=0;i<this._width;i++){var o=255/this._maxVal,s=o*t.getNextSample(),l=o*t.getNextSample(),h=o*t.getNextSample(),u=4*(n*this._width+i);e.data[u]=s,e.data[u+1]=l,e.data[u+2]=h,e.data[u+3]=255}return a.putImageData(e,0,0),r}}]),t}(),m=function(){function t(e,r,a){Object(u["a"])(this,t),this._width=e,this._height=r,this._maxVal=a}return Object(c["a"])(t,[{key:"getCanvas",value:function(t){var e,r=document.createElement("canvas"),a=r.getContext("2d");r.width=a.width=this._width,r.height=a.height=this._height,e=a.getImageData(0,0,this._width,this._height);for(var n=0;n<this._height;n++)for(var i=0;i<this._width;i++){var o=t.getNextSample()*(255/this._maxVal),s=4*(n*this._width+i);e.data[s]=o,e.data[s+1]=o,e.data[s+2]=o,e.data[s+3]=255}return a.putImageData(e,0,0),r}}]),t}(),g=function(){function t(e,r){Object(u["a"])(this,t),this._width=e,this._height=r}return Object(c["a"])(t,[{key:"getCanvas",value:function(t){var e,r=document.createElement("canvas"),a=r.getContext("2d");if(t instanceof f){for(var n,i="",o=Math.ceil(this._width/8),s=0;s<this._height;s++){for(var l=t._data.substr(s*o,o),h="",u=0;u<l.length;u++)h+=("0000000"+l.charCodeAt(u).toString(2)).substr(-8);i+=h.substr(0,this._width)}while(!1!==(n=t.getNextSample()))i+=("0000000"+n.toString(2)).substr(-8);t=new d(i.split("").join(" "),1)}r.width=a.width=this._width,r.height=a.height=this._height,e=a.getImageData(0,0,this._width,this._height);for(var c=0;c<this._height;c++)for(var p=0;p<this._width;p++){var _=255*(1-t.getNextSample()),m=4*(c*this._width+p);e.data[m]=_,e.data[m+1]=_,e.data[m+2]=_,e.data[m+3]=255}return a.putImageData(e,0,0),r}}]),t}(),v=p,b={name:"Viewer",data:function(){return{protocols:[{name:"File",value:"file"},{name:"URL",value:"url"},{name:"Example",value:"example"}],examples:[{name:"bbb-frame-1.ppm",value:"https://video-examples-public.s3.us-west-2.amazonaws.com/bbb-frame-1.ppm"}],protocol:"file",file:null,url:null,image:null,progress:0,showProgress:!1}},methods:{onFile:function(t){var e=this,r=t.dataTransfer?t.dataTransfer.files[0]:t.target.files[0],a=new FileReader;a.onload=function(t){var r=t.target.result,a=new v(r);e.image=a.getPNG()},a.readAsBinaryString(r)},onDownload:function(){var t=this;this.data=null,this.progress=0,this.showProgress=!0;var e=new FileReader;e.onload=function(e){t.progress=100;var r=e.target.result,a=new v(r);t.image=a.getPNG(),setTimeout((function(){t.showProgress=!1}),2e3)},e.onprogress=function(e){e.lengthComputable&&(t.progress=parseInt(e.loaded/e.total*100,10))};var r=new XMLHttpRequest;r.onprogress=function(e){e.lengthComputable&&(t.progress=parseInt(e.loaded/e.total*100,10))},r.onload=function(r){t.progress=100,e.readAsBinaryString(r.target.response)},r.open("GET",this.url,!0),r.responseType="blob",r.send()}}},w=b,x=(r("c926"),r("2877")),y=Object(x["a"])(w,l,h,!1,null,"547e9318",null),P=y.exports,k={name:"App",components:{Viewer:P},data:function(){return{name:s["a"],version:s["b"]}}},O=k,j=(r("034f"),Object(x["a"])(O,i,o,!1,null,null,null)),S=j.exports;r("f9e3"),r("2dd8");a["default"].use(n["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(S)}}).$mount("#app")},"85ec":function(t,e,r){},9224:function(t){t.exports=JSON.parse('{"a":"pbm-viewer","b":"0.2.0"}')},c926:function(t,e,r){"use strict";r("d93d")},d93d:function(t,e,r){}});
//# sourceMappingURL=index.3516e897.js.map