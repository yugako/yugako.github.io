(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fb79f44"],{"0882":function(t,e,s){"use strict";var n=s("f664"),a=s.n(n);a.a},9134:function(t,e,s){t.exports=s.p+"src/assets/img/edit.a2dc1c3e.svg"},bae1:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"works-manage"},[s("div",{staticClass:"works-manage-header"},[s("section-title",{attrs:{title:"Портфоліо"}}),s("div",{staticClass:"admin-content__add text-right"},[s("router-link",{staticClass:"works-manage__button admin-button",attrs:{to:{name:"new_work"},tag:"button"}},[t._v("Нова робота")])],1)],1),s("table-content",{attrs:{content:t.works,edit:"edit_work"}})],1)},a=[],i=s("f5b9"),o={name:"manageContent",data:function(){return{works:[]}},methods:{deleteItem:function(t){this.$_db.collection("works").doc(t).delete()}},firestore:function(){return{works:this.$_db.collection("works")}},components:{TableContent:i["a"]}},r=o,c=(s("0882"),s("2877")),l=Object(c["a"])(r,n,a,!1,null,null,null);e["default"]=l.exports},bf64:function(t,e,s){t.exports=s.p+"src/assets/img/trash.586d9741.svg"},d679:function(t,e,s){e=t.exports=s("2350")(!1),e.push([t.i,".works-manage-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},f5b9:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[0===t.content.length?n("div",{staticClass:"empty-list"},[t._v("\n\t\tНемає даних для відображення\n\t")]):n("div",{staticClass:"table-content table-responsive"},[n("table",[t._m(0),n("tbody",t._l(t.content,function(e){return n("tr",{key:e.id},[n("td",[n("img",{staticClass:"img-responsive",attrs:{src:e.img,alt:"product img"}})]),n("td",[t._v("\n\t                \t"+t._s(e.title)+"\n\t                ")]),n("td",[t._v("\n\t                \tОпубліковано\n\t                \t"+t._s(t._f("moment")(e.createdAt.seconds,"DD.MM.YY"))+"\n\t                ")]),n("td",{staticClass:"actions"},[n("ul",{staticClass:"actions-list"},[n("router-link",{staticClass:"actions-list__item",attrs:{tag:"li",to:{name:t.edit,params:{title:t.$_friendlyUrl(e.title),id:e.id}}}},[n("img",{attrs:{src:s("9134"),alt:""}})]),n("li",{staticClass:"actions-list__item",on:{click:function(s){return t.deleteItem(e.id)}}},[n("img",{attrs:{src:s("bf64"),alt:""}})])],1)])])}),0)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"title-top"},[s("th",[t._v("Прев'ю")]),s("th",[t._v("Заголовок")]),s("th",[t._v("Дата")]),s("th",[t._v("Дії")])])])}],i={name:"tableContent",props:["content","edit"]},o=i,r=s("2877"),c=Object(r["a"])(o,n,a,!1,null,null,null);e["a"]=c.exports},f664:function(t,e,s){var n=s("d679");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=s("499e").default;a("41aae84e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);