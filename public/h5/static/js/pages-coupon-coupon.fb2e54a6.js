(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon-coupon"],{"16d2":function(t,e,o){var i=o("7f7a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("4f06").default;a("6de1620d",i,!0,{sourceMap:!1,shadowMode:!1})},"2a97":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-d9dee89e]{background:#f4f6f8}body.?%PAGE?%[data-v-d9dee89e]{background:#f4f6f8}",""]),t.exports=e},"7bb4":function(t,e,o){"use strict";var i=o("16d2"),a=o.n(i);a.a},"7f7a":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.coupon-list[data-v-d9dee89e]{padding:%?30?%}.coupon-list .item[data-v-d9dee89e]{background-color:#fff;margin-bottom:%?30?%;border-radius:%?10?%}.coupon-list .item .content[data-v-d9dee89e]{padding:%?30?%;border-right:1px dashed #ddd;position:relative}.coupon-list .item .content .left[data-v-d9dee89e]{width:%?120?%;font-size:%?40?%;font-weight:700;color:#e74c3c}.coupon-list .item .content .left .small[data-v-d9dee89e]{font-size:%?15?%}.coupon-list .item .content .right[data-v-d9dee89e]{max-width:%?330?%;width:%?330?%}.coupon-list .item .content .right .priorityn[data-v-d9dee89e]{margin:0 %?5?%}.coupon-list .item .content[data-v-d9dee89e]::before{content:"";display:block;width:%?30?%;height:%?30?%;position:absolute;right:%?-15?%;top:%?-15?%;background-color:#f4f6f8;border-radius:%?100?%}.coupon-list .item .content[data-v-d9dee89e]::after{content:"";display:block;width:%?30?%;height:%?30?%;position:absolute;right:%?-15?%;bottom:%?-15?%;background-color:#f4f6f8;border-radius:%?100?%}.coupon-list .item .right-btn[data-v-d9dee89e]{min-width:%?185?%}',""]),t.exports=e},"88fe":function(t,e,o){"use strict";o.r(e);var i=o("ca37"),a=o("ae0c");for(var s in a)"default"!==s&&function(t){o.d(e,t,(function(){return a[t]}))}(s);o("e789"),o("7bb4");var n,u=o("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"d9dee89e",null,!1,i["a"],n);e["default"]=r.exports},ae0c:function(t,e,o){"use strict";o.r(e);var i=o("f007"),a=o.n(i);for(var s in i)"default"!==s&&function(t){o.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},ca37:function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return i}));var i={faNavbar:o("794d").default,uTabs:o("6933").default,uButton:o("2c0f").default,uLoadmore:o("47c8").default,uBackTop:o("4269").default,faTabbar:o("1671").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("fa-navbar",{attrs:{title:"优惠券列表","border-bottom":!1}}),i("v-uni-view",{},[i("u-tabs",{attrs:{list:t.list,activeColor:t.theme.bgColor,"bar-width":t.barwidth,"is-scroll":!1,current:t.current},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"item u-flex",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.goPage("/pages/coupon/detail?id="+e.id)}}},[i("v-uni-view",{staticClass:"content u-flex-1 u-flex"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",[t._v(t._s(e.result_data&&e.result_data.number)),i("v-uni-text",{staticClass:"small"},[t._v(t._s(1==e.result?"元":"折"))])],1)],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"u-font-30 u-m-b-5 u-line-1"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"u-m-b-5 u-tips-color"},[i("v-uni-view",{staticClass:"u-flex"},[t._v("订单满"),i("v-uni-text",{staticClass:"priorityn",style:{color:t.theme.bgColor}},[t._v(t._s(e.result_data&&e.result_data.money)+"元")]),t._v(t._s(1==e.result?"减":"打")),i("v-uni-text",{staticClass:"priorityn",style:{color:t.theme.bgColor}},[t._v(t._s(e.result_data&&e.result_data.number)+t._s(1==e.result?"元":"折"))])],1)],1),i("v-uni-view",{staticClass:"u-m-b-5 u-font-24 u-tips-color"},[t._v("每人限领"+t._s(e.allow_num)+"张")]),"fixation"==e.mode?i("v-uni-view",{staticClass:"u-m-b-10 u-tips-color u-font-24"},[t._v("领取后"+t._s(e.use_times)+"天内有效")]):i("v-uni-view",{staticClass:"u-m-b-10 u-line-1 u-tips-color u-font-24"},[t._v(t._s(t._f("formatreceive")(e.use_times)))])],1)],1),i("v-uni-view",{staticClass:"right-btn u-p-l-30 u-p-r-30"},[e.is_received?[i("u-button",{attrs:{size:"mini",disabled:!0,"hover-class":"none"}},[t._v("您已领取")])]:e.has_more?[i("u-button",{attrs:{size:"mini",disabled:!0,"hover-class":"none"}},[t._v("已被领完")])]:e.expired&&!e.is_received?[i("u-button",{attrs:{size:"mini",disabled:!0,"hover-class":"none"}},[t._v("已过期~")])]:e.online?[i("u-button",{attrs:{size:"mini",type:"primary","custom-style":{backgroundColor:t.theme.bgColor,color:t.theme.color},"hover-class":"none"},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.give(e.id)}}},[t._v("立即领取")])]:[i("u-button",{attrs:{size:"mini","hover-class":"none"}},[t._v("未可领取")])]],2)],1)})),1)],1),t.couponList.length?t._e():i("v-uni-view",{staticClass:"u-flex u-row-center fa-emmpty top-15"},[i("v-uni-image",{attrs:{src:o("5d98"),mode:""}}),i("v-uni-view",{staticClass:"u-tips-color"},[t._v("暂无可领取的优惠券~")])],1),t.couponList.length?i("v-uni-view",{staticClass:"u-p-b-30"},[i("u-loadmore",{attrs:{"bg-color":"#f4f6f8",status:t.has_more?t.status:"nomore"}})],1):t._e(),i("u-back-top",{attrs:{"scroll-top":t.scrollTop,"icon-style":{color:t.theme.bgColor},"custom-style":{backgroundColor:t.theme.lightColor}}}),i("fa-tabbar")],1)},s=[]},e5d7:function(t,e,o){var i=o("2a97");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("4f06").default;a("671974e8",i,!0,{sourceMap:!1,shadowMode:!1})},e789:function(t,e,o){"use strict";var i=o("e5d7"),a=o.n(i);a.a},f007:function(t,e,o){"use strict";var i=o("4ea4");o("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(o("2909")),s={onLoad:function(){this.getCouponList()},data:function(){return{barwidth:85,list:[{name:"全部",value:""},{name:"满减券",value:1},{name:"折扣券",value:0}],current:0,is_update:!1,status:"loadmore",has_more:!1,scrollTop:0,page:1,couponList:[]}},methods:{change:function(t){this.barwidth=30*this.$util.strlen(this.list[t].name),this.current=t,this.is_update=!0,this.getCouponList()},getCouponList:function(){var t=this;this.$api.couponList({page:this.page,result:this.list[this.current].value}).then((function(e){1==e.code&&(t.is_update&&(t.is_update=!1,t.couponList=[]),t.couponList=[].concat((0,a.default)(t.couponList),(0,a.default)(e.data.data)),t.has_more=e.data.has_more)}))},give:function(t){var e=this;this.$api.drawCoupon({id:t}).then((function(t){e.$u.toast(t.msg),1==t.code&&(e.is_update=!0,e.getCouponList())}))}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onReachBottom:function(){this.has_more&&(this.status="loading",this.page++,this.getCouponList())}};e.default=s}}]);