(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dff3adc"],{"28b1":function(t,e,s){var n=s("6d38");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=s("499e").default;a("22a54ab6",n,!0,{sourceMap:!1,shadowMode:!1})},"6cd9":function(t,e,s){"use strict";var n=s("28b1"),a=s.n(n);a.a},"6d38":function(t,e,s){e=t.exports=s("2350")(!1),e.push([t.i,".blog-manage-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},9134:function(t,e,s){t.exports=s.p+"src/assets/img/edit.a2dc1c3e.svg"},bf64:function(t,e,s){t.exports=s.p+"src/assets/img/trash.586d9741.svg"},f009:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"blog-manage"},[s("div",{staticClass:"blog-manage-header"},[s("sectio-title",{attrs:{title:"Блог"}}),s("div",{staticClass:"admin-content__add text-right"},[s("router-link",{staticClass:"blog-manage__button admin-button",attrs:{to:{name:"new_post",path:"/admin/new_post"},tag:"button"}},[t._v("Новий запис")])],1)],1),s("table-content",{attrs:{content:t.articles,edit:"edit_post"}})],1)},a=[],i=s("f5b9"),l={name:"manageContent",data:function(){return{articles:[]}},methods:{deleteItem:function(t){this.$_db.collection("blog").doc(t).delete()}},firestore:function(){return{articles:this.$_db.collection("blog")}},components:{TableContent:i["a"]}},c=l,o=(s("6cd9"),s("2877")),r=Object(o["a"])(c,n,a,!1,null,null,null);e["default"]=r.exports},f5b9:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[0===t.content.length?n("div",{staticClass:"empty-list"},[t._v("\n\t\tНемає даних для відображення\n\t")]):n("div",{staticClass:"table-content table-responsive"},[n("table",[t._m(0),n("tbody",t._l(t.content,function(e){return n("tr",{key:e.id},[n("td",[n("img",{staticClass:"img-responsive",attrs:{src:e.img,alt:"product img"}})]),n("td",[t._v("\n\t                \t"+t._s(e.title)+"\n\t                ")]),n("td",[t._v("\n\t                \tОпубліковано\n\t                \t"+t._s(t._f("moment")(e.createdAt.seconds,"DD.MM.YY"))+"\n\t                ")]),n("td",{staticClass:"actions"},[n("ul",{staticClass:"actions-list"},[n("router-link",{staticClass:"actions-list__item",attrs:{tag:"li",to:{name:t.edit,params:{title:t.$_friendlyUrl(e.title),id:e.id}}}},[n("img",{attrs:{src:s("9134"),alt:""}})]),n("li",{staticClass:"actions-list__item",on:{click:function(s){return t.deleteItem(e.id)}}},[n("img",{attrs:{src:s("bf64"),alt:""}})])],1)])])}),0)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"title-top"},[s("th",[t._v("Прев'ю")]),s("th",[t._v("Заголовок")]),s("th",[t._v("Дата")]),s("th",[t._v("Дії")])])])}],i={name:"tableContent",props:["content","edit"]},l=i,c=s("2877"),o=Object(c["a"])(l,n,a,!1,null,null,null);e["a"]=o.exports}}]);