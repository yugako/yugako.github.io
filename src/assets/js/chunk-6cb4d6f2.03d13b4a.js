(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cb4d6f2"],{"0882":function(t,s,e){"use strict";var a=e("f664"),i=e.n(a);i.a},9134:function(t,s,e){t.exports=e.p+"src/assets/img/edit.a2dc1c3e.svg"},bae1:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"works-manage"},[a("div",{staticClass:"works-manage-header"},[t._m(0),a("div",{staticClass:"admin-content__add text-right"},[a("router-link",{staticClass:"works-manage__button admin-button",attrs:{to:{name:"new_work"},tag:"button"}},[t._v("Нова робота")])],1)]),0===t.works.length?a("div",{staticClass:"empty-list"},[t._v("\n\t\tНемає даних для відображення\n\t")]):a("div",{staticClass:"table-content table-responsive"},[a("table",[t._m(1),a("tbody",t._l(t.works,function(s){return a("tr",{key:s.id},[a("td",[a("img",{staticClass:"img-responsive",attrs:{src:s.img,alt:"product img"}})]),a("td",[t._v("\n\t                \t"+t._s(s.title)+"\n\t                ")]),a("td",[t._v("\n\t                \tОпубліковано\n\t                \t"+t._s(t._f("moment")(s.createdAt.seconds,"DD.MM.YY"))+"\n\t                ")]),a("td",{staticClass:"actions"},[a("ul",{staticClass:"actions-list"},[a("router-link",{staticClass:"actions-list__item",attrs:{tag:"li",to:{name:"edit_work",params:{title:t.$_friendlyUrl(s.title),id:s.id}}}},[a("img",{attrs:{src:e("9134"),alt:""}})]),a("li",{staticClass:"actions-list__item",on:{click:function(e){return t.deleteItem(s.id)}}},[a("img",{attrs:{src:e("bf64"),alt:""}})])],1)])])}),0)])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section-title"},[e("h2",{staticClass:"section-title__text"},[t._v("Портфоліо")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",{staticClass:"title-top"},[e("th",[t._v("Прев'ю")]),e("th",[t._v("Заголовок")]),e("th",[t._v("Дата")]),e("th",[t._v("Дії")])])])}],n={name:"manageContent",data:function(){return{works:[]}},methods:{deleteItem:function(t){this.$_db.collection("works").doc(t).delete()}},firestore:function(){return{works:this.$_db.collection("works")}}},o=n,c=(e("0882"),e("2877")),r=Object(c["a"])(o,a,i,!1,null,null,null);s["default"]=r.exports},bf64:function(t,s,e){t.exports=e.p+"src/assets/img/trash.586d9741.svg"},d679:function(t,s,e){s=t.exports=e("2350")(!1),s.push([t.i,".works-manage-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},f664:function(t,s,e){var a=e("d679");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("499e").default;i("41aae84e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);