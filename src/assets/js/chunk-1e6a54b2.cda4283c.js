(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e6a54b2","chunk-9a62a55e","chunk-68fca697","chunk-0c1d6782"],{"0788":function(t,e,n){"use strict";function a(t,e){t.$emit("onClick",{label:e})}n.d(e,"a",function(){return a})},"1ad1":function(t,e,n){},"238d":function(t,e,n){"use strict";var a=n("1ad1"),s=n.n(a);s.a},"6fd4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button-social",class:t.buttonSocialDesignObject,attrs:{"page-url":t.page_url,"button-design":t.button_design,"title-social":t.title_social,"has-icon":t.has_icon,"has-square-edges":t.has_square_edges},on:{click:function(e){return e.preventDefault(),t.showShareWindow(e)}}},[this.$props.has_icon?n("i",{staticClass:"icon-telegram"}):t._e(),this.$props.title_social?n("span",{staticClass:"title-social"},[t._v("\n    "+t._s(t.title_social)+"\n  ")]):t._e()])},s=[],o=n("0788"),i=n("701e"),r=n("75ad"),c={name:"VueGoodshareTelegram",props:{page_url:{type:String,default:i["b"]},button_design:{type:String,default:function(){return"flat"}},title_social:String,has_icon:Boolean,has_square_edges:Boolean},data:function(){return{buttonSocialDesignObject:{"button-social__square_edges":this.$props.has_square_edges,telegram__design__flat:"flat"===this.$props.button_design,telegram__design__gradient:"gradient"===this.$props.button_design,telegram__design__outline:"outline"===this.$props.button_design}}},methods:{showShareWindow:function(){var t=640,e=480,n="https://telegram.me/share/url?url=".concat(encodeURIComponent(this.$props.page_url));return Object(o["a"])(this,"telegram"),Object(r["a"])(n,t,e)}}},l=c,u=(n("e3c1"),n("2877")),_=Object(u["a"])(l,a,s,!1,null,"198e6080",null);e["default"]=_.exports},"701e":function(t,e,n){"use strict";function a(){return document.location.href.replace(document.location.hash,"")}function s(){return document.location.href}n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s})},"75ad":function(t,e,n){"use strict";function a(t,e,n){let a=Math.round(screen.width/2-e/2),s=Math.round(screen.height/2-n/2);const o=`width=${e},height=${n},left=${a},top=${s}`;return window.open(t,"Share this",`${o},toolbar=no,menubar=no,scrollbars=no`)}n.d(e,"a",function(){return a})},"79b6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button-social",class:t.buttonSocialDesignObject,attrs:{"page-url":t.page_url,"page-title":t.page_title,"button-design":t.button_design,"title-social":t.title_social,"has-icon":t.has_icon,"has-square-edges":t.has_square_edges},on:{click:function(e){return e.preventDefault(),t.showShareWindow(e)}}},[this.$props.has_icon?n("i",{staticClass:"icon-twitter"}):t._e(),this.$props.title_social?n("span",{staticClass:"title-social"},[t._v(t._s(t.title_social))]):t._e()])},s=[],o=n("0788"),i=n("701e");function r(){return document.title}var c=n("75ad"),l={name:"VueGoodshareTwitter",props:{page_url:{type:String,default:i["a"]},page_title:{type:String,default:r},button_design:{type:String,default:function(){return"flat"}},title_social:String,has_icon:Boolean,has_square_edges:Boolean},data:function(){return{buttonSocialDesignObject:{"button-social__square_edges":this.$props.has_square_edges,twitter__design__flat:"flat"===this.$props.button_design,twitter__design__gradient:"gradient"===this.$props.button_design,twitter__design__outline:"outline"===this.$props.button_design}}},methods:{showShareWindow:function(){var t=640,e=480,n="https://twitter.com/share?url=".concat(encodeURIComponent(this.$props.page_url),"&text=").concat(encodeURIComponent(this.$props.page_title));return Object(o["a"])(this,"twitter"),Object(c["a"])(n,t,e)}}},u=l,_=(n("e37a"),n("2877")),d=Object(_["a"])(u,a,s,!1,null,"2dcfd48e",null);e["default"]=d.exports},"7aff":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button-social",class:t.buttonSocialDesignObject,attrs:{"page-url":t.page_url,"button-design":t.button_design,"title-social":t.title_social,"has-icon":t.has_icon,"has-square-edges":t.has_square_edges,"has-counter":t.has_counter},on:{click:function(e){return e.preventDefault(),t.showShareWindow(e)}}},[this.$props.has_icon?n("i",{staticClass:"icon-facebook"}):t._e(),this.$props.title_social?n("span",{staticClass:"title-social"},[t._v("\n    "+t._s(t.title_social)+"\n  ")]):t._e(),this.$props.has_counter?n("span",{staticClass:"counter-facebook",model:{value:t.counter_facebook,callback:function(e){t.counter_facebook=e},expression:"counter_facebook"}},[t._v("\n    "+t._s(t.counter_facebook)+"\n  ")]):t._e()])},s=[],o=n("0788"),i=n("701e");function r(t,e,n){let a=Math.floor(Math.random()*(n-e+1)+e);return`${t}_${a}`}function c(t){return`${(t/1e3).toFixed(1)}k`}var l=n("75ad"),u={name:"VueGoodshareFacebook",props:{page_url:{type:String,default:i["b"]},button_design:{type:String,default:function(){return"flat"}},title_social:String,has_icon:Boolean,has_square_edges:Boolean,has_counter:Boolean},data:function(){return{buttonSocialDesignObject:{"button-social__square_edges":this.$props.has_square_edges,facebook__design__flat:"flat"===this.$props.button_design,facebook__design__gradient:"gradient"===this.$props.button_design,facebook__design__outline:"outline"===this.$props.button_design},counter_facebook:0}},methods:{showShareWindow:function(){var t=640,e=480,n="https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(this.$props.page_url));return Object(o["a"])(this,"facebook"),Object(l["a"])(n,t,e)},getShareCounter:function(){var t=this,e=document.createElement("script"),n=r("vue_goodshare",9999,111);e.src="https://graph.facebook.com?id=".concat(encodeURIComponent(this.$props.page_url),"&callback=").concat(n),document.body.appendChild(e),window[n]=function(e){e.share&&(t.counter_facebook=e.share.share_count>=1e3?c(e.share.share_count):e.share.share_count)}}},mounted:function(){this.$props.has_counter&&this.getShareCounter()}},_=u,d=(n("238d"),n("2877")),h=Object(d["a"])(_,a,s,!1,null,"947a57b4",null);e["default"]=h.exports},"7d25":function(t,e,n){},cff8:function(t,e,n){"use strict";var a=n("7d25"),s=n.n(a);s.a},d111:function(t,e,n){},d548:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.article?n("article",{staticClass:"single-article"},[n("div",{staticClass:"single-article__title"},[t._v("\n\t\t\t    "+t._s(t.article.title)+"\n\t\t\t")]),n("div",{staticClass:"single-article__img"},[n("img",{staticClass:"img-responsive",attrs:{src:t.article.img,alt:t.article.title}})]),n("div",{staticClass:"single-article__meta"},[n("span",{staticClass:"date"},[n("i",{staticClass:"fas fa-calendar-alt"}),t._v("\n\t\t\t       "+t._s(t._f("moment")(new Date,"DD.MM.YY"))+"\n\t\t\t    ")])]),n("div",{staticClass:"single-article__content",domProps:{innerHTML:t._s(t.article.content)}}),n("div",{staticClass:"single-article__share"},[n("p",[t._v("\n\t\t\t\t\tСподобалась публікація? Поділись нею з друзями :)\n\t\t\t\t")]),n("facebook",{attrs:{page_url:t.currentUrl,title_social:"Facebook",has_icon:""}}),n("telegram",{attrs:{page_url:t.currentUrl,title_social:"Telegram",has_icon:""}}),n("twitter",{attrs:{page_url:t.currentUrl,title_social:"Twitter",has_icon:""}})],1)]):n("div",[t._v("Нема що показувати")]),n("button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("Назад")])])},s=[],o=n("7aff"),i=n("6fd4"),r=n("79b6"),c=(n("108b"),n("56d7"),{data:function(){return{article:this.$route.params.item,currentUrl:window.location.href}},methods:{},components:{Facebook:o["default"],Telegram:i["default"],Twitter:r["default"]}}),l=c,u=(n("cff8"),n("2877")),_=Object(u["a"])(l,a,s,!1,null,null,null);e["default"]=_.exports},e37a:function(t,e,n){"use strict";var a=n("d111"),s=n.n(a);s.a},e3c1:function(t,e,n){"use strict";var a=n("fc78"),s=n.n(a);s.a},fc78:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1e6a54b2.cda4283c.js.map