(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a5134"],{"08c9":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},t._l(t.articles,function(e){return r("div",{key:e.index,staticClass:"blog-article"},[e.id===t.proId?r("div",[r("FormPost",{attrs:{proId:t.proId,article:e}})],1):t._e()])}),0)},i=[],a=function(){return Promise.all([r.e("chunk-2eb7d1aa"),r.e("chunk-1bc97171")]).then(r.bind(null,"7147"))},c={name:"editArticle",data:function(){return{proId:JSON.parse(localStorage.getItem("articleId"))||this.$route.params.id,articles:[]}},firestore:function(){return{articles:this.$_db.collection("blog").orderBy("createdAt")}},components:{FormPost:a}},o=c,l=r("2877"),s=Object(l["a"])(o,n,i,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0a5134.cbf90cef.js.map