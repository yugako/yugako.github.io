(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f8e4b6a"],{"116f":function(e,t,a){var n=a("8afa");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("499e").default;i("2fa770e5",n,!0,{sourceMap:!1,shadowMode:!1})},"433a":function(e,t,a){"use strict";var n=a("116f"),i=a.n(n);i.a},"4fa5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"manage-personal"},[a("div",{staticClass:"manage-personal__info"},[a("header",{staticClass:"manage-personal-header"},[a("section-title",{attrs:{title:"Контактна інформація"}}),a("div",{staticClass:"admin-content__add text-right"},[a("router-link",{staticClass:"admin-button",attrs:{to:{name:"new_info"},tag:"button"}},[e._v("Нова інфа")])],1)],1),a("article",{staticClass:"grid-wrapper"},[a("div",{staticClass:"row-wrapper"},e._l(e.info,function(e){return a("div",{key:e.title,staticClass:"cl-12 cl-md-4",class:{"cl-md-12":"textarea"===e.type||"image"===e.type}},[a("render-info",{attrs:{item:e}})],1)}),0)])])])},i=[],s=function(){return Promise.all([a.e("chunk-ea0d3e10"),a.e("chunk-2d20f93b"),a.e("chunk-cfdf7d48")]).then(a.bind(null,"10ae"))},o={name:"managePersonal",data:function(){return{info:[]}},methods:{updateData:function(e){this.$_db.collection("personal").doc(id).update(e)}},firestore:function(){return{info:this.$_db.collection("personal")}},components:{renderInfo:s}},r=o,l=(a("433a"),a("2877")),c=Object(l["a"])(r,n,i,!1,null,null,null);t["default"]=c.exports},"8afa":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".manage-personal__home{border-bottom:2px solid #555;margin-bottom:20px}.manage-personal__home-input{height:200px!important}.manage-personal-text{color:#555;font-family:Merriweather,serif;font-size:18px;font-weight:700;line-height:24px;letter-spacing:.17px}.manage-personal-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])}}]);