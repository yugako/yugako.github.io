(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c01c3ae"],{"108b":function(t,e,r){"use strict";t.exports=function(t){const e=t?t.preset:"ru",r={"а":"a","б":"b","в":"v","ґ":"g","г":"g","д":"d","е":"e","ё":"e","є":"ye","ж":"zh","з":"z","и":"i","і":"i","ї":"yi","й":"i","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh'","ъ":"","ы":"i","ь":"","э":"e","ю":"yu","я":"ya"};"uk"===e&&Object.assign(r,{"г":"h","и":"y","й":"y","х":"kh","ц":"ts","щ":"shch","'":"","’":"","ʼ":""});const n=Object.assign({},r);function i(t,i){if(!t)return"";let c="";for(let s=0;s<t.length;s++){const o=t[s]===t[s].toUpperCase();let a=t[s].toLowerCase();if(" "===a&&i){c+=i;continue}let l="uk"===e&&"г"===a&&s>0&&"з"===t[s-1].toLowerCase()?"gh":(0===s?r:n)[a];c+="undefined"===typeof l?o?a.toUpperCase():a:o?l.toUpperCase():l}return c}return"uk"===e&&Object.assign(n,{"є":"ie","ї":"i","й":"i","ю":"iu","я":"ia"}),{transform:i}}},"3c98":function(t,e,r){"use strict";var n=r("5a52"),i=r.n(n);i.a},"5a52":function(t,e,r){},"9e83":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},t._l(t.articles,function(e,n){return r("article",{key:n,staticClass:"single-article"},[t.friendlyUrl(e.title)===t.proId?r("div",[r("div",{staticClass:"single-article__title"},[t._v("\n\t\t\t    "+t._s(e.title)+"\n\t\t\t")]),r("div",{staticClass:"single-article__img"},[r("img",{staticClass:"img-responsive",attrs:{src:e.img,alt:e.title}})]),r("div",{staticClass:"single-article__meta"},[r("span",{staticClass:"date"},[r("i",{staticClass:"fas fa-calendar-alt"}),t._v("\n\t\t\t       "+t._s(t._f("moment")(e.createdAt.seconds,"DD.MM.YY"))+"\n\t\t\t    ")])]),r("div",{staticClass:"single-article__content",domProps:{innerHTML:t._s(e.content)}}),r("div",{staticClass:"single-article__share"},[r("p",[t._v("\n\t\t\t\t\tСподобалась публікація? Поділись нею з друзями :)\n\t\t\t\t")]),r("facebook",{attrs:{page_url:t.currentUrl,title_social:"Facebook",has_icon:""}}),r("telegram",{attrs:{page_url:t.currentUrl,title_social:"Telegram",has_icon:""}}),r("twitter",{attrs:{page_url:t.currentUrl,title_social:"Twitter",has_icon:""}})],1),r("div",{staticClass:"comments"},[r("vue-disqus",{attrs:{shortname:"personal-12",identifier:e.id,url:t.currentUrl}})],1)]):t._e()])}),0)},i=[],c=(r("ac6a"),r("108b")),s=r.n(c),o=r("56d7"),a=function(){return r.e("chunk-9a62a55e").then(r.bind(null,"7aff"))},l=function(){return r.e("chunk-68fca697").then(r.bind(null,"6fd4"))},u=function(){return r.e("chunk-0c1d6782").then(r.bind(null,"79b6"))},p={data:function(){return{proId:this.$route.params.title,articles:[],currentUrl:window.location.href,current:""}},metaInfo:function(){return{title:this.currentArticle().title,meta:[{name:"robots",content:"index,follow,noodp"},{name:"googlebot",content:"index,follow"},{property:"og:locale",content:"uk_UK"},{property:"og:type",content:"article"},{property:"og:title",content:this.currentArticle().title},{property:"og:url",content:this.currentUrl},{property:"og:site_name",content:"Сайт Юрія Колцьо"},{property:"og:description",content:this.currentArticle().excerpt},{property:"og:image",content:this.currentArticle().img},{property:"twitter:image",content:this.currentArticle().img},{property:"twitter:title",content:this.currentArticle().title},{property:"twitter:description",content:this.currentArticle().excerpt}]}},methods:{friendlyUrl:function(t){return s()({preset:"uk"}).transform(t.toLowerCase(),"_")},currentArticle:function(){var t=this;return this.articles.forEach(function(e){t.friendlyUrl(e.title)===t.proId&&(t.current=e)}),this.current}},firestore:function(){return{articles:o["db"].collection("blog").orderBy("createdAt")}},components:{Facebook:a,Telegram:l,Twitter:u}},d=p,f=(r("3c98"),r("2877")),h=Object(f["a"])(d,n,i,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-3c01c3ae.443c0f46.js.map