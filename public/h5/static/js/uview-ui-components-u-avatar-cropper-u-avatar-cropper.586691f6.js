(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uview-ui-components-u-avatar-cropper-u-avatar-cropper"],{"1c4c":function(t,e,n){(function(e,o){n("99af"),n("cb29"),n("4160"),n("c975"),n("fb6a"),n("b64b"),n("d3b7"),n("acd8"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("159b"),
/**
 * we-cropper v1.3.9
 * (c) 2020 dlhandsome
 * @license MIT
 */
function(e,n){t.exports=n()}(0,(function(){"use strict";var t=void 0,e=["touchstarted","touchmoved","touchended"];function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}function r(t){var n=[],o=arguments.length-1;while(o-- >0)n[o]=arguments[o+1];e.forEach((function(e,o){void 0!==n[o]&&(t[e]=n[o])}))}function i(t,e){Object.defineProperties(t,e)}function a(){return t||(t=uni.getSystemInfoSync()),t}var c={},u=a(),s=u.pixelRatio,d={id:{default:"cropper",get:function(){return c.id},set:function(t){c.id=t}},width:{default:750,get:function(){return c.width},set:function(t){c.width=t}},height:{default:750,get:function(){return c.height},set:function(t){c.height=t}},pixelRatio:{default:s,get:function(){return c.pixelRatio},set:function(t){c.pixelRatio=t}},scale:{default:2.5,get:function(){return c.scale},set:function(t){c.scale=t}},zoom:{default:5,get:function(){return c.zoom},set:function(t){c.zoom=t}},src:{default:"",get:function(){return c.src},set:function(t){c.src=t}},cut:{default:{},get:function(){return c.cut},set:function(t){c.cut=t}},boundStyle:{default:{},get:function(){return c.boundStyle},set:function(t){c.boundStyle=t}},onReady:{default:null,get:function(){return c.ready},set:function(t){c.ready=t}},onBeforeImageLoad:{default:null,get:function(){return c.beforeImageLoad},set:function(t){c.beforeImageLoad=t}},onImageLoad:{default:null,get:function(){return c.imageLoad},set:function(t){c.imageLoad=t}},onBeforeDraw:{default:null,get:function(){return c.beforeDraw},set:function(t){c.beforeDraw=t}}},h=a(),p=h.windowWidth;function f(){var t=this;t.attachPage=function(){var e=getCurrentPages(),n=e[e.length-1];Object.defineProperty(n,"wecropper",{get:function(){return t},configurable:!0})},t.createCtx=function(){var e=t.id,n=t.targetId;e&&(t.ctx=t.ctx||uni.createCanvasContext(e),t.targetCtx=t.targetCtx||uni.createCanvasContext(n))},t.deviceRadio=p/750}var l="undefined"!==typeof window?window:"undefined"!==typeof o?o:"undefined"!==typeof self?self:{};function g(t,e){return e={exports:{}},t(e,e.exports),e.exports}var v=g((function(t,e){e.isStr=function(t){return"string"===typeof t},e.isNum=function(t){return"number"===typeof t},e.isArr=Array.isArray,e.isUndef=function(t){return void 0===t},e.isTrue=function(t){return!0===t},e.isFalse=function(t){return!1===t},e.isFunc=function(t){return"function"===typeof t},e.isObj=e.isObject=function(t){return null!==t&&"object"===typeof t};var n=Object.prototype.toString;e.isPlainObject=function(t){return"[object Object]"===n.call(t)};var o=Object.prototype.hasOwnProperty;e.hasOwn=function(t,e){return o.call(t,e)},e.noop=function(t,e,n){},e.isValidArrayIndex=function(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}})),b=v.isFunc,y=v.isPlainObject,w=["ready","beforeImageLoad","beforeDraw","imageLoad"];function x(){var t=this;t.on=function(e,o){return w.indexOf(e)>-1&&b(o)&&("ready"===e?o(t):t["on"+n(e)]=o),t}}function m(t){return function(e){var n=[],o=arguments.length-1;while(o-- >0)n[o]=arguments[o+1];return void 0===e&&(e={}),new Promise((function(o,r){e.success=function(t){o(t)},e.fail=function(t){r(t)},t.apply(void 0,[e].concat(n))}))}}function C(t,e){return void 0===e&&(e=!1),new Promise((function(n){t.draw(e,n)}))}var S=m(uni.getImageInfo),I=m(uni.canvasToTempFilePath),O=g((function(t,e){
/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
(function(n){var o=e,r=t&&t.exports==o&&t,i="object"==typeof l&&l;i.global!==i&&i.window!==i||(n=i);var a=function(t){this.message=t};a.prototype=new Error,a.prototype.name="InvalidCharacterError";var c=function(t){throw new a(t)},u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=/[\t\n\f\r ]/g,d=function(t){t=String(t).replace(s,"");var e=t.length;e%4==0&&(t=t.replace(/==?$/,""),e=t.length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&c("Invalid character: the string to be decoded is not correctly encoded.");var n,o,r=0,i="",a=-1;while(++a<e)o=u.indexOf(t.charAt(a)),n=r%4?64*n+o:o,r++%4&&(i+=String.fromCharCode(255&n>>(-2*r&6)));return i},h=function(t){t=String(t),/[^\0-\xFF]/.test(t)&&c("The string to be encoded contains characters outside of the Latin1 range.");var e,n,o,r,i=t.length%3,a="",s=-1,d=t.length-i;while(++s<d)e=t.charCodeAt(s)<<16,n=t.charCodeAt(++s)<<8,o=t.charCodeAt(++s),r=e+n+o,a+=u.charAt(r>>18&63)+u.charAt(r>>12&63)+u.charAt(r>>6&63)+u.charAt(63&r);return 2==i?(e=t.charCodeAt(s)<<8,n=t.charCodeAt(++s),r=e+n,a+=u.charAt(r>>10)+u.charAt(r>>4&63)+u.charAt(r<<2&63)+"="):1==i&&(r=t.charCodeAt(s),a+=u.charAt(r>>2)+u.charAt(r<<4&63)+"=="),a},p={encode:h,decode:d,version:"0.1.0"};if(o&&!o.nodeType)if(r)r.exports=p;else for(var f in p)p.hasOwnProperty(f)&&(o[f]=p[f]);else n.base64=p})(l)}));function T(t,e){return"data:"+e+";base64,"+t}function M(t){t=t.toLowerCase().replace(/jpg/i,"jpeg");var e=t.match(/png|jpeg|bmp|gif/)[0];return"image/"+e}function W(t){var e="";if("string"===typeof t)e=t;else for(var n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return O.encode(e)}function j(t,e,n,o,r,i){uni.canvasGetImageData({canvasId:t,x:e,y:n,width:o,height:r,success:function(t){i(t,null)},fail:function(t){i(null,t)}})}function _(t){var e=t.width,n=t.height,o=e*n*3,r=o+54,i=[66,77,255&r,r>>8&255,r>>16&255,r>>24&255,0,0,0,0,54,0,0,0],a=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,1,0,24,0,0,0,0,0,255&o,o>>8&255,o>>16&255,o>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=(4-3*e%4)%4,u=t.data,s="",d=e<<2,h=n,p=String.fromCharCode;do{for(var f=d*(h-1),l="",g=0;g<e;g++){var v=g<<2;l+=p(u[f+v+2])+p(u[f+v+1])+p(u[f+v])}for(var b=0;b<c;b++)l+=String.fromCharCode(0);s+=l}while(--h);var y=W(i.concat(a))+W(s);return y}function A(t,e,n,o,r,i,a){void 0===a&&(a=function(){}),void 0===i&&(i="png"),i=M(i),/bmp/.test(i)&&j(t,e,n,o,r,(function(t,e){var n=_(t);b(a)&&a(T(n,"image/"+i),e)}))}var L={convertToImage:A,convertToBMP:function(t,e){void 0===t&&(t={});var n=t.canvasId,o=t.x,r=t.y,i=t.width,a=t.height;return void 0===e&&(e=function(){}),A(n,o,r,i,a,"bmp",e)}};function P(){var t=this,e=t.width,n=t.height,o=t.id,r=t.targetId,i=t.pixelRatio,a=t.cut,c=a.x;void 0===c&&(c=0);var u=a.y;void 0===u&&(u=0);var s=a.width;void 0===s&&(s=e);var d=a.height;void 0===d&&(d=n),t.updateCanvas=function(e){return t.croperTarget&&t.ctx.drawImage(t.croperTarget,t.imgLeft,t.imgTop,t.scaleWidth,t.scaleHeight),b(t.onBeforeDraw)&&t.onBeforeDraw(t.ctx,t),t.setBoundStyle(t.boundStyle),t.ctx.draw(!1,e),t},t.pushOrigin=t.pushOrign=function(e){return t.src=e,b(t.onBeforeImageLoad)&&t.onBeforeImageLoad(t.ctx,t),S({src:e}).then((function(e){var n=e.width/e.height,o=s/d;return t.croperTarget=e.path,n<o?(t.rectX=c,t.baseWidth=s,t.baseHeight=s/n,t.rectY=u-Math.abs((d-t.baseHeight)/2)):(t.rectY=u,t.baseWidth=d*n,t.baseHeight=d,t.rectX=c-Math.abs((s-t.baseWidth)/2)),t.imgLeft=t.rectX,t.imgTop=t.rectY,t.scaleWidth=t.baseWidth,t.scaleHeight=t.baseHeight,t.update(),new Promise((function(e){t.updateCanvas(e)}))})).then((function(){b(t.onImageLoad)&&t.onImageLoad(t.ctx,t)}))},t.removeImage=function(){return t.src="",t.croperTarget="",C(t.ctx)},t.getCropperBase64=function(t){void 0===t&&(t=function(){}),L.convertToBMP({canvasId:o,x:c,y:u,width:s,height:d},t)},t.getCropperImage=function(e,n){var a=e,h={canvasId:o,x:c,y:u,width:s,height:d},p=function(){return Promise.resolve()};return y(a)&&a.original&&(p=function(){return t.targetCtx.drawImage(t.croperTarget,t.imgLeft*i,t.imgTop*i,t.scaleWidth*i,t.scaleHeight*i),h={canvasId:r,x:c*i,y:u*i,width:s*i,height:d*i},C(t.targetCtx)}),p().then((function(){y(a)&&(h=Object.assign({},h,a)),b(a)&&(n=a);var t=h.componentContext?[h,h.componentContext]:[h];return I.apply(null,t)})).then((function(e){var o=e.tempFilePath;return b(n)?n.call(t,o,null):o})).catch((function(e){if(!b(n))throw e;n.call(t,null,e)}))}}var R=function(t,e,n,o,r){var i,a,c;return i=Math.round(r.x-o.x),a=Math.round(r.y-o.y),c=Math.round(Math.sqrt(i*i+a*a)),t+.001*n*(c-e)};function H(){var t=this;t.src&&(t.__oneTouchStart=function(e){t.touchX0=Math.round(e.x),t.touchY0=Math.round(e.y)},t.__oneTouchMove=function(e){var n,o;if(t.touchended)return t.updateCanvas();n=Math.round(e.x-t.touchX0),o=Math.round(e.y-t.touchY0);var r=Math.round(t.rectX+n),i=Math.round(t.rectY+o);t.outsideBound(r,i),t.updateCanvas()},t.__twoTouchStart=function(e,n){var o,r,i;t.touchX1=Math.round(t.rectX+t.scaleWidth/2),t.touchY1=Math.round(t.rectY+t.scaleHeight/2),o=Math.round(n.x-e.x),r=Math.round(n.y-e.y),i=Math.round(Math.sqrt(o*o+r*r)),t.oldDistance=i},t.__twoTouchMove=function(e,n){var o=t.oldScale,r=t.oldDistance,i=t.scale,a=t.zoom;t.newScale=R(o,r,a,e,n),t.newScale<=1&&(t.newScale=1),t.newScale>=i&&(t.newScale=i),t.scaleWidth=Math.round(t.newScale*t.baseWidth),t.scaleHeight=Math.round(t.newScale*t.baseHeight);var c=Math.round(t.touchX1-t.scaleWidth/2),u=Math.round(t.touchY1-t.scaleHeight/2);t.outsideBound(c,u),t.updateCanvas()},t.__xtouchEnd=function(){t.oldScale=t.newScale,t.rectX=t.imgLeft,t.rectY=t.imgTop})}var k={touchStart:function(t){var e=this,n=t.touches,o=n[0],i=n[1];e.src&&(r(e,!0,null,null),e.__oneTouchStart(o),t.touches.length>=2&&e.__twoTouchStart(o,i))},touchMove:function(t){var e=this,n=t.touches,o=n[0],i=n[1];e.src&&(r(e,null,!0),1===t.touches.length&&e.__oneTouchMove(o),t.touches.length>=2&&e.__twoTouchMove(o,i))},touchEnd:function(t){var e=this;e.src&&(r(e,!1,!1,!0),e.__xtouchEnd())}};function E(){var t=this,e=t.width,n=t.height,o=t.cut,r=o.x;void 0===r&&(r=0);var i=o.y;void 0===i&&(i=0);var a=o.width;void 0===a&&(a=e);var c=o.height;void 0===c&&(c=n),t.outsideBound=function(e,n){t.imgLeft=e>=r?r:t.scaleWidth+e-r<=a?r+a-t.scaleWidth:e,t.imgTop=n>=i?i:t.scaleHeight+n-i<=c?i+c-t.scaleHeight:n},t.setBoundStyle=function(o){void 0===o&&(o={});var u=o.color;void 0===u&&(u="#04b00f");var s=o.mask;void 0===s&&(s="rgba(0, 0, 0, 0.3)");var d=o.lineWidth;void 0===d&&(d=1);var h=d/2,p=[{start:{x:r-h,y:i+10-h},step1:{x:r-h,y:i-h},step2:{x:r+10-h,y:i-h}},{start:{x:r-h,y:i+c-10+h},step1:{x:r-h,y:i+c+h},step2:{x:r+10-h,y:i+c+h}},{start:{x:r+a-10+h,y:i-h},step1:{x:r+a+h,y:i-h},step2:{x:r+a+h,y:i+10-h}},{start:{x:r+a+h,y:i+c-10+h},step1:{x:r+a+h,y:i+c+h},step2:{x:r+a-10+h,y:i+c+h}}];t.ctx.beginPath(),t.ctx.setFillStyle(s),t.ctx.fillRect(0,0,r,n),t.ctx.fillRect(r,0,a,i),t.ctx.fillRect(r,i+c,a,n-i-c),t.ctx.fillRect(r+a,0,e-r-a,n),t.ctx.fill(),p.forEach((function(e){t.ctx.beginPath(),t.ctx.setStrokeStyle(u),t.ctx.setLineWidth(d),t.ctx.moveTo(e.start.x,e.start.y),t.ctx.lineTo(e.step1.x,e.step1.y),t.ctx.lineTo(e.step2.x,e.step2.y),t.ctx.stroke()}))}}var B="1.3.9",F=function(t){var e=this,n={};return i(e,d),Object.keys(d).forEach((function(t){n[t]=d[t].default})),Object.assign(e,n,t),e.prepare(),e.attachPage(),e.createCtx(),e.observer(),e.cutt(),e.methods(),e.init(),e.update(),e};return F.prototype.init=function(){var t=this,e=t.src;return t.version=B,"function"===typeof t.onReady&&t.onReady(t.ctx,t),e?t.pushOrign(e):t.updateCanvas(),r(t,!1,!1,!1),t.oldScale=1,t.newScale=1,t},Object.assign(F.prototype,k),F.prototype.prepare=f,F.prototype.observer=x,F.prototype.methods=P,F.prototype.cutt=E,F.prototype.update=H,F}))}).call(this,n("0de9")["log"],n("c8ba"))},"46b2":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.content[data-v-40d667f5]{background:#fff}.cropper[data-v-40d667f5]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:11}.cropper-buttons[data-v-40d667f5]{background-color:#000;color:#eee}.cropper-wrapper[data-v-40d667f5]{position:relative;display:flex;flex-direction:row;flex-direction:row;justify-content:space-between;align-items:center;width:100%;background-color:#000}.cropper-buttons[data-v-40d667f5]{width:100vw;display:flex;flex-direction:row;flex-direction:row;justify-content:space-between;align-items:center;position:fixed;bottom:0;left:0;font-size:%?28?%}.cropper-buttons .upload[data-v-40d667f5],\n.cropper-buttons .getCropperImage[data-v-40d667f5]{width:50%;text-align:center}.cropper-buttons .upload[data-v-40d667f5]{text-align:left;padding-left:%?50?%}.cropper-buttons .getCropperImage[data-v-40d667f5]{text-align:right;padding-right:%?50?%}',""]),t.exports=e},6107:function(t,e,n){"use strict";var o=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("1c4c")),i={props:{boundStyle:{type:Object,default:function(){return{lineWidth:4,borderColor:"rgb(245, 245, 245)",mask:"rgba(0, 0, 0, 0.35)"}}}},data:function(){return{bottomNavHeight:50,originWidth:200,width:0,height:0,cropperOpt:{id:"cropper",targetId:"targetCropper",pixelRatio:1,width:0,height:0,scale:2.5,zoom:8,cut:{x:(this.width-this.originWidth)/2,y:(this.height-this.originWidth)/2,width:this.originWidth,height:this.originWidth},boundStyle:{lineWidth:uni.upx2px(this.boundStyle.lineWidth),mask:this.boundStyle.mask,color:this.boundStyle.borderColor}},destWidth:200,rectWidth:200,fileType:"jpg",src:""}},onLoad:function(t){var e=this,n=uni.getSystemInfoSync();if(this.width=n.windowWidth,this.height=n.windowHeight-this.bottomNavHeight,this.cropperOpt.width=this.width,this.cropperOpt.height=this.height,this.cropperOpt.pixelRatio=n.pixelRatio,t.destWidth&&(this.destWidth=t.destWidth),t.rectWidth){var o=Number(t.rectWidth);this.cropperOpt.cut={x:(this.width-o)/2,y:(this.height-o)/2,width:o,height:o}}this.rectWidth=t.rectWidth,t.fileType&&(this.fileType=t.fileType),this.cropper=new r.default(this.cropperOpt).on("ready",(function(t){})).on("beforeImageLoad",(function(t){})).on("imageLoad",(function(t){})).on("beforeDraw",(function(t,e){})),uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"}),uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){e.src=t.tempFilePaths[0],e.cropper.pushOrign(e.src)}})},methods:{touchStart:function(t){this.cropper.touchStart(t)},touchMove:function(t){this.cropper.touchMove(t)},touchEnd:function(t){this.cropper.touchEnd(t)},getCropperImage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.src)return this.$u.toast("请先选择图片再裁剪");var n={destHeight:Number(this.destWidth),destWidth:Number(this.destWidth),fileType:this.fileType};this.cropper.getCropperImage(n,(function(n,o){o?uni.showModal({title:"温馨提示",content:o.message}):e?uni.previewImage({current:"",urls:[n]}):(uni.$emit("uAvatarCropper",n),t.$u.route({type:"back"}))}))},uploadTap:function(){var t=this,e=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){e.src=n.tempFilePaths[0],e.cropper.pushOrign(t.src)}})}}};e.default=i},7327:function(t,e,n){"use strict";n.r(e);var o=n("8ed9"),r=n("afd8");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("a0f2");var a,c=n("f0c5"),u=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"40d667f5",null,!1,o["a"],a);e["default"]=u.exports},"8ed9":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"cropper-wrapper",style:{height:t.cropperOpt.height+"px"}},[n("v-uni-canvas",{staticClass:"cropper",style:{width:t.cropperOpt.width,height:t.cropperOpt.height,backgroundColor:"rgba(0, 0, 0, 0.8)"},attrs:{"disable-scroll":!0,"canvas-id":"cropper",id:"cropper"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd.apply(void 0,arguments)}}}),n("v-uni-canvas",{staticClass:"cropper",style:{position:"fixed",top:"-"+t.cropperOpt.width*t.cropperOpt.pixelRatio+"px",left:"-"+t.cropperOpt.height*t.cropperOpt.pixelRatio+"px",width:t.cropperOpt.width*t.cropperOpt.pixelRatio+"px",height:""+t.cropperOpt.height*t.cropperOpt.pixelRatio},attrs:{"disable-scroll":!0,"canvas-id":"targetId",id:"targetId"}})],1),n("v-uni-view",{staticClass:"cropper-buttons safe-area-padding",style:{height:t.bottomNavHeight+"px"}},[n("v-uni-view",{staticClass:"upload",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadTap.apply(void 0,arguments)}}},[t._v("选择图片")]),n("v-uni-view",{staticClass:"getCropperImage",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCropperImage(!1)}}},[t._v("确定")])],1)],1)},i=[]},a0f2:function(t,e,n){"use strict";var o=n("dfb5"),r=n.n(o);r.a},afd8:function(t,e,n){"use strict";n.r(e);var o=n("6107"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},cb29:function(t,e,n){var o=n("23e7"),r=n("81d5"),i=n("44d2");o({target:"Array",proto:!0},{fill:r}),i("fill")},dfb5:function(t,e,n){var o=n("46b2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("07aabc6a",o,!0,{sourceMap:!1,shadowMode:!1})}}]);