(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbeb1"],{"4c5a":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},t._l(t.drafts,function(r){return e("div",{key:r.index,staticClass:"blog-draft"},[r.id===t.proId?e("div",[e("FormPost",{attrs:{draft:!0,article:r}})],1):t._e()])}),0)},a=[],o=e("7147"),s={data:function(){return{proId:this.$route.params.id,drafts:[]}},methods:{},firestore:function(){return{drafts:this.$_db.collection("draft_post").orderBy("createdAt")}},components:{FormPost:o["a"]}},d=s,i=e("2877"),c=Object(i["a"])(d,n,a,!1,null,null,null);r["default"]=c.exports}}]);