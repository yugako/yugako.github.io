(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2304b3"],{ec54:function(r,e,o){"use strict";o.r(e);var t=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{staticClass:"container"},r._l(r.works,function(e){return o("div",{key:e.index,staticClass:"blog-work"},[e.id===r.proId?o("div",[o("FormWork",{attrs:{proId:r.proId,work:e}})],1):r._e()])}),0)},n=[],a=o("56d7"),c=function(){return Promise.all([o.e("chunk-00cdf2fa"),o.e("chunk-bbf887ea")]).then(o.bind(null,"fb34"))},i={name:"workEdit",data:function(){return{proId:JSON.parse(localStorage.getItem("workId"))||this.$route.params.id,works:[]}},firestore:function(){return{works:a["db"].collection("works").orderBy("createdAt")}},components:{FormWork:c}},s=i,d=o("2877"),u=Object(d["a"])(s,t,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d2304b3.4b499baa.js.map