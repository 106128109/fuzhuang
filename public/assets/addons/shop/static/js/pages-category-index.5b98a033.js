(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-index"],{"07f7":function(e,t,i){"use strict";var a=i("4ea4");i("45fc"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("8680")),r=a(i("2661")),o=a(i("4ba7")),c=(uni.getSystemInfoSync(),{components:{FaCategories:n.default,FaCategory:r.default,FaCategoryThree:o.default},computed:{navbarHeight:function(){return 44},isTabbarPath:function(){var e=getCurrentPages(),t=e[e.length-1].route;return this.vuex_config.tabbar.list.some((function(e){return"/"==e.path.substr(0,1)&&e.path=="/"+t||e.path==t}))},wrapHeight:function(){return this.isTabbarPath?{height:"calc(100vh - "+this.navbarHeight+"px - "+this.$u.addUnit(this.vuex_config.tabbar.height)+")"}:{height:"calc(100vh - "+this.navbarHeight+"px)"}}},data:function(){return{}},methods:{}});t.default=c},"0f6a":function(e,t,i){"use strict";i.r(t);var a=i("cd66"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},2584:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-wrap[data-v-f56c37ca]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.u-menu-wrap[data-v-f56c37ca]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden}.u-tab-view[data-v-f56c37ca]{background:#f6f6f6;width:%?200?%;height:100%}.u-tab-item[data-v-f56c37ca]{height:%?110?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%;color:#444;font-weight:400;line-height:1}.u-tab-item-active[data-v-f56c37ca]{position:relative;color:#000;font-size:%?30?%;font-weight:600;background:#fff}.u-tab-item-active[data-v-f56c37ca]::before{content:"";position:absolute;border-left:4px solid #374486;height:%?32?%;left:0;top:%?39?%}.u-tab-view[data-v-f56c37ca]{height:100%}.right-box[data-v-f56c37ca]{background-color:#fafafa}.page-view .class-item[data-v-f56c37ca]{padding-bottom:%?30?%;background-color:#fff;border-radius:%?5?%}.page-view .class-item .item-title[data-v-f56c37ca]{font-size:%?26?%;color:#303133;font-weight:700;padding:%?30?%}.page-view .class-item .item-container[data-v-f56c37ca]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.page-view .class-item .item-container .item-menu-name[data-v-f56c37ca]{margin-top:%?15?%;font-weight:400;font-size:%?24?%;color:#303133}.page-view .class-item .item-container .thumb-box[data-v-f56c37ca]{width:33.333333%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-top:%?20?%}.page-view .class-item .item-container .item-menu-image[data-v-f56c37ca]{width:%?120?%;height:%?120?%;border-radius:%?5?%}.class-item[data-v-f56c37ca]:last-child{min-height:30vh}',""]),e.exports=t},2661:function(e,t,i){"use strict";i.r(t);var a=i("7e3a"),n=i("d155");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("b661");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"e7eb78e6",null,!1,a["a"],o);t["default"]=s.exports},"309b":function(e,t,i){"use strict";var a=i("7e84"),n=i.n(a);n.a},"32eb":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-wrap",style:[e.height]},[i("v-uni-view",{staticClass:"u-menu-wrap"},[i("v-uni-scroll-view",{staticClass:"u-tab-view menu-scroll-view",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":e.scrollTop,"scroll-into-view":e.itemId}},e._l(e.category,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-tab-item",class:[e.current==a?"u-tab-item-active":""],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.swichMenu(a)}}},[i("v-uni-text",{staticClass:"u-line-1"},[e._v(e._s(t.name))])],1)})),1),i("v-uni-scroll-view",{staticClass:"right-box",attrs:{"scroll-top":e.scrollRightTop,"scroll-y":!0,"scroll-with-animation":!0},on:{scroll:function(t){arguments[0]=t=e.$handleEvent(t),e.rightScroll.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"page-view"},e._l(e.row.childlist,(function(t,a){return i("v-uni-view",{key:a,staticClass:"class-item",attrs:{id:"item"+a}},[i("v-uni-view",{staticClass:"item-title"},[i("v-uni-text",[e._v(e._s(t.name))])],1),i("v-uni-view",{staticClass:"item-container"},e._l(t.childlist,(function(t,a){return i("v-uni-view",{key:a,staticClass:"thumb-box",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.goPage("/pages/goods/goods?category_id="+t.id)}}},[i("v-uni-image",{staticClass:"item-menu-image",attrs:{src:t.image||e.vuex_config.default_category_img,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"item-menu-name"},[e._v(e._s(t.name))])],1)})),1)],1)})),1)],1)],1)],1)},r=[]},4584:function(e,t,i){"use strict";i.r(t);var a=i("07f7"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"4a17":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-wrap",style:[e.height]},[i("v-uni-view",{staticClass:"u-menu-wrap"},[i("v-uni-scroll-view",{staticClass:"u-tab-view menu-scroll-view",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":e.scrollTop,"scroll-into-view":e.itemId}},e._l(e.category,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-tab-item",class:[e.current==a?"u-tab-item-active":""],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.swichMenu(a)}}},[i("v-uni-text",{staticClass:"u-line-1"},[e._v(e._s(t.name))])],1)})),1),i("v-uni-scroll-view",{staticClass:"right-box",attrs:{"scroll-top":e.scrollRightTop,"scroll-y":!0,"scroll-with-animation":!0},on:{scroll:function(t){arguments[0]=t=e.$handleEvent(t),e.rightScroll.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"page-view"},e._l(e.category,(function(t,a){return i("v-uni-view",{key:a,staticClass:"class-item",attrs:{id:"item"+a}},[i("v-uni-view",{staticClass:"item-title"},[i("v-uni-text",[e._v(e._s(t.name))])],1),t.childlist.length?i("v-uni-view",{staticClass:"item-container"},e._l(t.childlist,(function(t,a){return i("v-uni-view",{key:a,staticClass:"thumb-box",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.goPage("/pages/goods/goods?category_id="+t.id)}}},[i("v-uni-image",{staticClass:"item-menu-image",attrs:{src:t.image||e.vuex_config.default_category_img,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"item-menu-name"},[e._v(e._s(t.name))])],1)})),1):i("v-uni-view",{staticClass:"u-p-30"},[i("v-uni-view",{staticClass:"u-text-center u-tips-color"},[e._v("暂无更多分类~~")])],1)],1)})),1)],1)],1)],1)},r=[]},"4ba7":function(e,t,i){"use strict";i.r(t);var a=i("32eb"),n=i("96d6");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("b443");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5648f910",null,!1,a["a"],o);t["default"]=s.exports},"55f3":function(e,t,i){e.exports=i.p+"static/img/data.a97ed149.png"},"5e23":function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("1da1")),r={name:"fa-category-three",props:{height:{type:Object,default:function(){return{}}}},data:function(){return{scrollTop:0,current:0,itemId:"",category:[],row:{},scrollRightTop:0}},mounted:function(){this.getCategory()},methods:{swichMenu:function(e){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e!=t.current){i.next=2;break}return i.abrupt("return");case 2:t.row=t.category[e],t.current=e;case 4:case"end":return i.stop()}}),i)})))()},getCategory:function(){var e=this;this.$api.getCategory().then((function(t){1==t.code&&(e.category=t.data,t.data.length&&(e.row=t.data[0]))}))}}};t.default=r},6536:function(e,t,i){"use strict";var a=i("4ea4");i("d3b7"),i("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("1da1")),r={name:"fa-category",props:{height:{type:Object,default:function(){return{}}}},mounted:function(){this.current=this.vuex_current,this.getCategory()},data:function(){return{category:[],row:{},scrollTop:0,current:0,menuHeight:0,menuItemHeight:0}},methods:{swichMenu:function(e,t){var i=this;return(0,n.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t!=i.current){a.next=2;break}return a.abrupt("return");case 2:if(i.row=e,i.current=t,i.$u.vuex("vuex_current",t),0!=i.menuHeight&&0!=i.menuItemHeight){a.next=10;break}return a.next=8,i.getElRect("menu-scroll-view","menuHeight");case 8:return a.next=10,i.getElRect("u-tab-item","menuItemHeight");case 10:i.scrollTop=t*i.menuItemHeight+i.menuItemHeight/2-i.menuHeight/2;case 11:case"end":return a.stop()}}),a)})))()},getElRect:function(e,t){var i=this;new Promise((function(a,n){var r=uni.createSelectorQuery().in(i);r.select("."+e).fields({size:!0},(function(a){a?i[t]=a.height:setTimeout((function(){i.getElRect(e)}),10)})).exec()}))},getCategory:function(){var e=this;this.$api.getCategory({category_mode:1}).then((function(t){1==t.code&&(e.category=t.data,t.data.length>0&&(e.row=void 0==t.data[e.current]?t.data[0]:t.data[e.current]))}))}}};t.default=r},"6de4":function(e,t,i){var a=i("a410");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("18692717",a,!0,{sourceMap:!1,shadowMode:!1})},"7e3a":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uIcon:i("6efb").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-wrap",style:[e.height]},[a("v-uni-view",{staticClass:"u-menu-wrap"},[a("v-uni-scroll-view",{staticClass:"u-tab-view menu-scroll-view",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":e.scrollTop}},e._l(e.category,(function(t,i){return a("v-uni-view",{key:i,staticClass:"u-tab-item",class:[e.current==i?"u-tab-item-active":""],attrs:{"data-current":i},on:{click:function(a){a.stopPropagation(),arguments[0]=a=e.$handleEvent(a),e.swichMenu(t,i)}}},[a("v-uni-text",{staticClass:"u-line-1"},[e._v(e._s(t.name))])],1)})),1),e.row.id?a("v-uni-scroll-view",{staticClass:"right-box",attrs:{"scroll-y":!0}},[a("v-uni-view",{staticClass:"page-view"},[a("v-uni-view",{staticClass:"class-item"},[a("v-uni-view",{staticClass:"item-title u-flex u-row-between"},[a("v-uni-text",[e._v(e._s(e.row.name))]),a("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage("/pages/goods/goods?category_id="+e.row.id)}}},[a("v-uni-text",{staticClass:"u-tips-color"},[e._v("更多")]),a("u-icon",{attrs:{name:"arrow-right-double",color:"#999",size:"28"}})],1)],1),a("v-uni-view",{staticClass:"item-container"},[e._l(e.row.goods,(function(t,i){return a("v-uni-view",{key:i,staticClass:"thumb-box",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.goPage("/pages/goods/detail?id="+t.id)}}},[a("v-uni-image",{staticClass:"item-menu-image",attrs:{src:t.image,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"u-p-l-15 u-flex-1 goods"},[a("v-uni-view",{staticClass:"item-menu-name u-line-2 u-font-28",domProps:{textContent:e._s(t.title)}}),a("v-uni-view",{staticClass:"u-tips-color intro u-line-1"},[e._v(e._s(t.description||""))]),a("v-uni-view",{staticClass:"u-flex u-row-between"},[a("v-uni-text",{staticClass:"market_price u-tips-color"},[e._v("￥"+e._s(t.marketprice||0))]),a("v-uni-text",{staticClass:"price"},[e._v("￥"+e._s(t.price||0))])],1)],1)],1)})),e.row.goods.length?e._e():a("v-uni-view",{staticClass:"u-flex fa-emmpty top-15"},[a("v-uni-image",{attrs:{src:i("55f3"),mode:""}}),a("v-uni-view",{staticClass:"u-tips-color"},[e._v("暂无更多的商品数据~")])],1)],2)],1)],1)],1):e._e()],1)],1)},r=[]},"7e84":function(e,t,i){var a=i("2584");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("617ad454",a,!0,{sourceMap:!1,shadowMode:!1})},"7e843":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-wrap[data-v-5648f910]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.u-menu-wrap[data-v-5648f910]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden}.u-tab-view[data-v-5648f910]{background:#f6f6f6;width:%?200?%;height:100%}.u-tab-item[data-v-5648f910]{height:%?110?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%;color:#444;font-weight:400;line-height:1}.u-tab-item-active[data-v-5648f910]{position:relative;color:#000;font-size:%?30?%;font-weight:600;background:#fff}.u-tab-item-active[data-v-5648f910]::before{content:"";position:absolute;border-left:4px solid #374486;height:%?32?%;left:0;top:%?39?%}.u-tab-view[data-v-5648f910]{height:100%}.right-box[data-v-5648f910]{background-color:#fafafa}.page-view[data-v-5648f910]{padding:%?16?%}.class-item[data-v-5648f910]{margin-bottom:%?30?%;background-color:#fff;padding:%?16?%;border-radius:%?8?%}.class-item[data-v-5648f910]:last-child{min-height:30vh}.item-title[data-v-5648f910]{font-size:%?26?%;color:#303133;font-weight:700}.item-menu-name[data-v-5648f910]{margin-top:%?15?%;font-weight:400;font-size:%?24?%;color:#303133}.item-container[data-v-5648f910]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.thumb-box[data-v-5648f910]{width:33.333333%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-top:%?20?%}.item-menu-image[data-v-5648f910]{width:%?120?%;height:%?120?%;border-radius:%?5?%}',""]),e.exports=t},8680:function(e,t,i){"use strict";i.r(t);var a=i("4a17"),n=i("0f6a");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("309b");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"f56c37ca",null,!1,a["a"],o);t["default"]=s.exports},"86e3":function(e,t,i){"use strict";i.r(t);var a=i("d99f"),n=i("4584");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"2ba3bd26",null,!1,a["a"],o);t["default"]=s.exports},"96d6":function(e,t,i){"use strict";i.r(t);var a=i("5e23"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},a410:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-wrap[data-v-e7eb78e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.u-menu-wrap[data-v-e7eb78e6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden}.u-tab-view[data-v-e7eb78e6]{width:%?200?%;height:100%;background-color:#f6f6f6}.u-tab-item[data-v-e7eb78e6]{height:%?110?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%;color:#444;font-weight:400;line-height:1}.u-tab-item-active[data-v-e7eb78e6]{position:relative;color:#000;font-size:%?30?%;font-weight:600;background:#fff}.u-tab-item-active[data-v-e7eb78e6]::before{content:"";position:absolute;border-left:4px solid #374486;height:%?32?%;left:0;top:%?39?%}.u-tab-view[data-v-e7eb78e6]{height:100%}.right-box[data-v-e7eb78e6]{background-color:#fafafa;width:100%}.page-view[data-v-e7eb78e6]{background-color:#fff;padding:%?16?%;height:100%;position:relative}.class-item[data-v-e7eb78e6]{padding:%?16?%;border-radius:%?8?%;height:100%}.item-title[data-v-e7eb78e6]{font-size:%?26?%;color:#303133;font-weight:700}.item-container[data-v-e7eb78e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.item-container .thumb-box[data-v-e7eb78e6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?30?% 0}.item-container .thumb-box .item-menu-image[data-v-e7eb78e6]{width:%?200?%;height:%?150?%;border-radius:%?5?%}.item-container .thumb-box .item-menu-name[data-v-e7eb78e6]{font-weight:400;color:#303133;width:%?320?%}.item-container .thumb-box .intro[data-v-e7eb78e6]{width:%?320?%;font-size:%?20?%;padding:%?10?% 0}.item-container .thumb-box .market_price[data-v-e7eb78e6]{text-decoration:line-through}.item-container .thumb-box[data-v-e7eb78e6]:not(:last-child){border-bottom:1px solid #f4f6f8}.item-container .thumb-box .goods[data-v-e7eb78e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?150?%}',""]),e.exports=t},b443:function(e,t,i){"use strict";var a=i("d1b7"),n=i.n(a);n.a},b661:function(e,t,i){"use strict";var a=i("6de4"),n=i.n(a);n.a},cd66:function(e,t,i){"use strict";var a=i("4ea4");i("4160"),i("d81d"),i("d3b7"),i("ac1f"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("1da1")),r={name:"fa-categories",props:{height:{type:Object,default:function(){return{}}}},mounted:function(){this.current=this.vuex_current,this.getCategory(),this.getMenuItemTop()},data:function(){return{scrollTop:0,oldScrollTop:0,current:0,menuHeight:0,menuItemHeight:0,itemId:"",category:[],menuItemPos:[],arr:[],scrollRightTop:0,timer:null}},methods:{swichMenu:function(e){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(0!=t.arr.length){i.next=3;break}return i.next=3,t.getMenuItemTop();case 3:if(t.$u.vuex("vuex_current",e),e!=t.current){i.next=6;break}return i.abrupt("return");case 6:t.scrollRightTop=t.oldScrollTop,t.$nextTick((function(){this.scrollRightTop=this.arr[e],this.current=e,this.leftMenuStatus(e)}));case 8:case"end":return i.stop()}}),i)})))()},getElRect:function(e,t){var i=this;new Promise((function(a,n){var r=uni.createSelectorQuery().in(i);r.select("."+e).fields({size:!0},(function(n){n?(i[t]=n.height,a()):setTimeout((function(){i.getElRect(e)}),10)})).exec()}))},observer:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.tabbar.map((function(t,i){var a=uni.createIntersectionObserver(e);a.relativeTo(".right-box",{top:0}).observe("#item"+i,(function(t){if(t.intersectionRatio>0){var i=t.id.substring(4);e.leftMenuStatus(i)}}))}));case 1:case"end":return t.stop()}}),t)})))()},leftMenuStatus:function(e){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!(t.category[e].childlist.length<10)){i.next=2;break}return i.abrupt("return");case 2:if(t.current=e,0!=t.menuHeight&&0!=t.menuItemHeight){i.next=8;break}return i.next=6,t.getElRect("menu-scroll-view","menuHeight");case 6:return i.next=8,t.getElRect("u-tab-item","menuItemHeight");case 8:t.scrollTop=e*t.menuItemHeight+t.menuItemHeight/2-t.menuHeight/2;case 9:case"end":return i.stop()}}),i)})))()},getMenuItemTop:function(){var e=this;new Promise((function(t){var i=uni.createSelectorQuery().in(e);i.selectAll(".class-item").boundingClientRect((function(i){i.length?i.forEach((function(a){e.arr.push(a.top-i[0].top),t()})):setTimeout((function(){e.getMenuItemTop()}),10)})).exec()}))},rightScroll:function(e){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.oldScrollTop=e.detail.scrollTop,0!=t.arr.length){i.next=4;break}return i.next=4,t.getMenuItemTop();case 4:if(!t.timer){i.next=6;break}return i.abrupt("return");case 6:if(t.menuHeight){i.next=9;break}return i.next=9,t.getElRect("menu-scroll-view","menuHeight");case 9:t.timer=setTimeout((function(){t.timer=null;for(var i=e.detail.scrollTop+t.menuHeight/2,a=0;a<t.arr.length;a++){var n=t.arr[a],r=t.arr[a+1];if(!r||i>=n&&i<r)return void t.leftMenuStatus(a)}}),10);case 10:case"end":return i.stop()}}),i)})))()},getCategory:function(){var e=this;this.$api.getCategory().then((function(t){1==t.code&&(e.category=t.data)}))}}};t.default=r},d155:function(e,t,i){"use strict";i.r(t);var a=i("6536"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},d1b7:function(e,t,i){var a=i("7e843");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("89a75efa",a,!0,{sourceMap:!1,shadowMode:!1})},d99f:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={faNavbar:i("d1e5").default,faTabbar:i("7f5e").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{},[i("fa-navbar",{attrs:{title:"商品分类","border-bottom":!1}}),void 0!=e.vuex_config.category_mode?i("v-uni-view",{},[1==e.vuex_config.category_mode?i("fa-category",{attrs:{height:e.wrapHeight}}):2==e.vuex_config.category_mode?i("fa-category-three",{attrs:{height:e.wrapHeight}}):i("fa-categories",{attrs:{height:e.wrapHeight}})],1):e._e(),i("fa-tabbar")],1)},r=[]}}]);