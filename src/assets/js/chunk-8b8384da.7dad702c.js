(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b8384da"],{1261:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".facebook,.linkedin,.telegram{color:#fff;padding:10px;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Merriweather,serif}.facebook{background-color:#3b5998}.linkedin{background-color:#0077b5}.telegram{background-color:#0099d4}.single-article{margin-top:15px;margin-bottom:15px}.single-article__img img{border-top-left-radius:20px;border-top-right-radius:20px;display:block;height:300px;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center}.single-article__title{color:#2c3e50;font-size:26px;letter-spacing:.22px}.single-article__meta,.single-article__title{font-family:Merriweather,serif;font-weight:400}.single-article__meta{font-size:14px;letter-spacing:.16px;line-height:24px;color:#acacac;margin-bottom:15px}.single-article__preview{padding:15px 20px}.single-article__content,.single-article__excerpt,.single-article__share{color:#555;text-align:justify;font-family:Merriweather,serif;font-size:14px;font-weight:300;line-height:24px;letter-spacing:.17px}.single-article__content{text-align:justify}.single-article__content p{color:#555}.single-article__content p img{display:block;height:350px;width:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:center center;object-position:center center}.single-article__content pre{background:#f4f4f4;border:1px solid #ddd;border-left:3px solid #2c3e50;color:#666;page-break-inside:avoid;font-family:monospace;font-size:15px;line-height:1.6;margin-bottom:1.6em;max-width:100%;overflow:auto;padding:1em 1.5em;display:block;word-wrap:break-word}.single-article__info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 20px;border-top:1px solid #e5e5e5;font-family:Merriweather,serif;font-size:14px;font-weight:300;line-height:24px;color:#555}.single-article__share{margin-bottom:30px}.single-article__more_button{background-color:transparent;border:2px solid #2c3e50;color:#2c3e50;border-radius:25px;cursor:pointer;font-family:Merriweather,serif;padding:10px 15px}.single-article__link{color:#555}.single-article__share img{width:20px;height:20px;margin-right:5px}.button-social{color:#fff!important}.button-social:hover{color:#e6e6e6!important}.ql-align-center{text-align:center!important}.ql-align-left{text-align:left!important}.ql-align-right{text-align:right!important}.ql-align-justify{text-align:justify!important}",""])},1371:function(t,e,i){"use strict";var r=i("382a"),n=i.n(r);n.a},3318:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".progress{position:fixed;bottom:0;left:0;z-index:1;width:100%;height:8px;border-radius:0}.progress-container{width:100%;height:8px;background:#ccc}.progress-bar{height:8px;background:#2c3e50;width:0}",""])},"382a":function(t,e,i){var r=i("3318");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("010c7596",r,!0,{sourceMap:!1,shadowMode:!1})},"3c98":function(t,e,i){"use strict";var r=i("8290"),n=i.n(r);n.a},5606:function(t,e,i){var r=i("8753");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("4d85ed34",r,!0,{sourceMap:!1,shadowMode:!1})},8286:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"toTop",style:{display:t.show},on:{click:function(e){return t.scrollTo(0,1250)}}},[i("i-top",{attrs:{width:"30px",height:"30px",fill:"#2c3e50"}})],1)},n=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"svg-container"},[i("svg",{staticClass:"svg-inline--fa fa-arrow-circle-up fa-w-16",attrs:{"aria-hidden":"true",width:t.width,height:t.height,focusable:"false","data-prefix":"fas","data-icon":"arrow-circle-up",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:t.fill,d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"}})])])},l=[],c={name:"i_top",props:{width:{type:String,default:"20px"},height:{type:String,default:"20px"},fill:{type:String,default:"#fff"}}},a=c,s=i("2877"),p=Object(s["a"])(a,o,l,!1,null,null,null),d=p.exports,u={name:"toTop",data:function(){return{show:"none"}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{scrollTo:function(t,e){var i=document.documentElement,r=i.scrollTop,n=t-r,o=0,l=20,c=function(t,e,i,r){return t/=r/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)},a=function t(){o+=l;var a=c(o,r,n,e);i.scrollTop=a,o<e&&setTimeout(t,l)};a()},handleScroll:function(){var t=document.documentElement.scrollTop;this.show=t>200?"block":"none"}},components:{iTop:d}},f=u,g=(i("bebd"),Object(s["a"])(f,r,n,!1,null,null,null));e["a"]=g.exports},8290:function(t,e,i){var r=i("1261");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("5336d956",r,!0,{sourceMap:!1,shadowMode:!1})},8753:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".toTop{cursor:pointer;position:fixed;bottom:30px;right:30px;z-index:999999999}.toTop img{width:32px;height:32px}",""])},"9e83":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ToTop"),t.article?i("div",[i("scroll-bar"),i("article",{staticClass:"single-article"},[i("div",{staticClass:"single-article__title"},[t._v("\n\t\t\t\t    "+t._s(t.article.title)+"\n\t\t\t\t")]),i("div",{staticClass:"single-article__img"},[i("img",{staticClass:"img-responsive",attrs:{src:t.article.img,alt:t.article.title}})]),i("div",{staticClass:"single-article__meta"},[i("span",{staticClass:"date"},[i("i",{staticClass:"fas fa-calendar-alt"}),t._v("\n\t\t\t\t       "+t._s(t._f("moment")(t.article.createdAt.seconds,"DD.MM.YY"))+"\n\t\t\t\t    ")])]),i("div",{staticClass:"single-article__content",domProps:{innerHTML:t._s(t.article.content)}}),i("div",{staticClass:"single-article__share"},[i("p",[t._v("\n\t\t\t\t\t\tСподобалась публікація? Поділись нею з друзями :)\n\t\t\t\t\t")]),i("social-sharing",{attrs:{url:t.currentUrl,title:t.article.title,description:t.article.excerpt},inlineTemplate:{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("network",{staticClass:"facebook",attrs:{title:"facebook",network:"facebook"}},[i("span",[t._v("Facebook")])]),i("network",{staticClass:"telegram",attrs:{title:"telegram",network:"telegram"}},[i("span",[t._v("Telegram")])])],1)},staticRenderFns:[]}})],1),i("div",{staticClass:"comments"},[i("vue-disqus",{attrs:{shortname:"personal-12",identifier:t.article.id,url:t.currentUrl}})],1)])],1):i("not-found")],1)},n=[],o=(i("ac6a"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"progress"},[i("div",{staticClass:"progress-container"},[i("div",{staticClass:"progress-bar",attrs:{id:"myBar"}})])])}],c={name:"scrollBar",methods:{handleScroll:function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=t/e*100;document.getElementById("myBar").style.width=i+"%"}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},a=c,s=(i("1371"),i("2877")),p=Object(s["a"])(a,o,l,!1,null,null,null),d=p.exports,u=i("8286"),f=function(){return i.e("chunk-794ea3ea").then(i.bind(null,"9703"))},g={firestore:function(){return{articles:this.$_db.collection("blog").orderBy("createdAt")}},data:function(){return{proId:this.$route.params.title,articles:[],currentUrl:window.location.href,current:""}},metaInfo:function(){return{title:this.currentArticle().title||"Упс...запис не знайдено",meta:[{name:"robots",content:"index,follow,noodp"},{name:"googlebot",content:"index,follow"},{property:"og:locale",content:"uk_UK"},{property:"og:type",content:"article"},{property:"og:title",content:this.currentArticle().title||"Упс...запис не знайдено",vmid:"og:title"},{property:"og:url",content:this.currentUrl,vmid:"og:url"},{property:"og:site_name",content:"Сайт Юрія Колцьо"},{property:"og:description",content:this.currentArticle().excerpt||"Упс...запис не знайдено"},{property:"og:image",content:this.currentArticle().img},{property:"twitter:image",content:this.currentArticle().img},{property:"twitter:title",content:this.currentArticle().title||"Упс...запис не знайдено"},{property:"twitter:description",content:this.currentArticle().excerpt||"Упс...запис не знайдено"}]}},methods:{currentArticle:function(){var t=this;return this.articles.forEach(function(e){t.$_friendlyUrl(e.title)===t.proId&&(t.current=e)}),this.current}},computed:{article:function(){return this.currentArticle()}},components:{ScrollBar:d,NotFound:f,ToTop:u["a"]}},h=g,m=(i("3c98"),Object(s["a"])(h,r,n,!1,null,null,null));e["default"]=m.exports},bebd:function(t,e,i){"use strict";var r=i("5606"),n=i.n(r);n.a}}]);