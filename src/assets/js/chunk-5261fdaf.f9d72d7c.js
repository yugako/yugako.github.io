(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5261fdaf"],{3881:function(t,i,s){"use strict";var e=s("934a"),r=s.n(e);r.a},"934a":function(t,i,s){},"9edb":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row"},t._l(t.latest,function(i){return e("div",{key:i.id,staticClass:"col-12 col-lg-4"},[e("div",{staticClass:"flip portfolio-item"},[t.User?e("div",{staticClass:"edit"},[e("router-link",{attrs:{to:{name:"edit_work",params:{title:t.$_friendlyUrl(i.title),id:i.id}}}},[e("img",{attrs:{src:s("9fc0"),alt:"Edit"}})])],1):t._e(),e("div",{staticClass:"front",style:{"background-image":"url("+i.img+")"}},[e("h5",{staticClass:"portfolio-item__title"},[t._v(t._s(i.title))])]),e("div",{staticClass:"back",style:{"background-image":"url("+i.img+")"}},[e("div",{staticClass:"portfolio-item__links"},[e("router-link",{staticClass:"portfolio-item__link",attrs:{title:"Дивитись деталі",tag:"span",to:{name:"single-work",params:{title:t.$_friendlyUrl(i.title),id:i.id}}}},[t._v("\n                      Дивитись деталі\n                    ")]),e("a",{staticClass:"portfolio-item__link",attrs:{title:"Переглянути проект",href:i.url}},[t._v("\n                     Переглянути проект\n                    ")])],1)])])])}),0)},r=[],a={name:"LatestWorks",data:function(){return{works:[]}},methods:{},computed:{latest:function(){return this.works.slice(0,3)},User:function(){return this.$store.getters.User}},firestore:function(){return{works:this.$_db.collection("works")}}},l=a,n=(s("3881"),s("2877")),o=Object(n["a"])(l,e,r,!1,null,null,null);i["default"]=o.exports},"9fc0":function(t,i,s){t.exports=s.p+"src/assets/img/edit-regular.8aaf14b0.svg"}}]);
//# sourceMappingURL=chunk-5261fdaf.f9d72d7c.js.map