(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1366ee5c"],{"3c98":function(t,e,r){"use strict";var i=r("5a52"),n=r.n(i);n.a},"5a52":function(t,e,r){},"9e83":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("scroll-bar"),t._l(t.articles,function(e,n){return i("article",{key:n,staticClass:"single-article"},[t.$_friendlyUrl(e.title)===t.proId?i("div",[i("div",{staticClass:"single-article__title"},[t._v("\n\t\t\t    "+t._s(e.title)+"\n\t\t\t")]),i("div",{staticClass:"single-article__img"},[i("img",{staticClass:"img-responsive",attrs:{src:e.img,alt:e.title}})]),i("div",{staticClass:"single-article__meta"},[i("span",{staticClass:"date"},[i("i",{staticClass:"fas fa-calendar-alt"}),t._v("\n\t\t\t       "+t._s(t._f("moment")(e.createdAt.seconds,"DD.MM.YY"))+"\n\t\t\t    ")])]),i("div",{staticClass:"single-article__content",domProps:{innerHTML:t._s(e.content)}}),i("div",{staticClass:"single-article__share"},[i("p",[t._v("\n\t\t\t\t\tСподобалась публікація? Поділись нею з друзями :)\n\t\t\t\t")]),i("social-sharing",{attrs:{url:t.currentUrl},inlineTemplate:{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("network",{staticClass:"facebook",attrs:{title:"facebook",network:"facebook"}},[i("img",{attrs:{src:r("ca3f"),alt:""}}),i("span",[t._v("Facebook")])]),i("network",{staticClass:"linkedin",attrs:{title:"linkedin",network:"linkedin"}},[i("img",{attrs:{src:r("a051"),alt:""}}),i("span",[t._v("LinkedIn")])]),i("network",{staticClass:"telegram",attrs:{title:"telegram",network:"telegram"}},[i("img",{attrs:{src:r("b603"),alt:""}}),i("span",[t._v("Telegram")])])],1)},staticRenderFns:[]}})],1),i("div",{staticClass:"comments"},[i("vue-disqus",{attrs:{shortname:"personal-12",identifier:e.id,url:t.currentUrl}})],1)]):t._e()])})],2)},n=[],s=(r("ac6a"),r("cadf"),r("551c"),r("f751"),r("097d"),function(){return r.e("chunk-26fd48fa").then(r.bind(null,"25c9"))}),a={data:function(){return{proId:this.$route.params.title,articles:[],currentUrl:window.location.href,current:""}},metaInfo:function(){return{title:this.currentArticle().title,meta:[{name:"robots",content:"index,follow,noodp"},{name:"googlebot",content:"index,follow"},{property:"og:locale",content:"uk_UK"},{property:"og:type",content:"article"},{property:"og:title",content:this.currentArticle().title,vmid:"og:title"},{property:"og:url",content:this.currentUrl,vmid:"og:url"},{property:"og:site_name",content:"Сайт Юрія Колцьо"},{property:"og:description",content:this.currentArticle().excerpt},{property:"og:image",content:this.currentArticle().img},{property:"twitter:image",content:this.currentArticle().img},{property:"twitter:title",content:this.currentArticle().title},{property:"twitter:description",content:this.currentArticle().excerpt}]}},methods:{currentArticle:function(){var t=this;return this.articles.forEach(function(e){t.$_friendlyUrl(e.title)===t.proId&&(t.current=e)}),this.current}},firestore:function(){return{articles:this.$_db.collection("blog").orderBy("createdAt")}},components:{ScrollBar:s}},c=a,l=(r("3c98"),r("2877")),o=Object(l["a"])(c,i,n,!1,null,null,null);e["default"]=o.exports},a051:function(t,e,r){t.exports=r.p+"src/assets/img/linkedin.d6c42e60.svg"},ac6a:function(t,e,r){for(var i=r("cadf"),n=r("0d58"),s=r("2aba"),a=r("7726"),c=r("32e9"),l=r("84f2"),o=r("2b4c"),u=o("iterator"),d=o("toStringTag"),p=l.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=n(f),m=0;m<g.length;m++){var _,h=g[m],v=f[h],L=a[h],k=L&&L.prototype;if(k&&(k[u]||c(k,u,p),k[d]||c(k,d,h),l[h]=p,v))for(_ in i)k[_]||s(k,_,i[_],!0)}},b603:function(t,e,r){t.exports=r.p+"src/assets/img/telegram.1de27fd1.svg"},ca3f:function(t,e,r){t.exports=r.p+"src/assets/img/facebook.6e6f5db8.svg"}}]);
//# sourceMappingURL=chunk-1366ee5c.6d072776.js.map