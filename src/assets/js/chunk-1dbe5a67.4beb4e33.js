(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dbe5a67","chunk-54592b5c"],{7147:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("h1",{staticClass:"section-title__text"},[t._v("Редагувати запис: "+t._s(t.article.title))]),i("form",{on:{submit:function(e){return e.preventDefault(),t.update(t.article.id,t.item)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"title"}},[t._v("Назва запису")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}})])]),i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"pre"}},[t._v("Прев'ю запису:")]),i("PreviewImage",{attrs:{currentImage:t.article.img},on:{getImg:t.getSrc}})],1)])]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"excerpt"}},[t._v("Короткий опис:")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.excerpt,expression:"item.excerpt"}],staticClass:"form-control",attrs:{name:"excerpt",id:"excerpt"},domProps:{value:t.item.excerpt},on:{input:function(e){e.target.composing||t.$set(t.item,"excerpt",e.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"describe"}},[t._v("Контент:")]),i("vue-editor",{attrs:{for:"describe"},model:{value:t.item.content,callback:function(e){t.$set(t.item,"content",e)},expression:"item.content"}})],1),t.draft?i("div",[i("button",{staticClass:"admin-button",on:{click:function(e){return t.deleteItem(t.article.id)}}},[t._v("Видалити чернетку")]),i("button",{staticClass:"admin-button",on:{click:function(e){return t.addPost(t.article.id,t.item)}}},[t._v("Додати запис")])]):i("button",{staticClass:"admin-button",attrs:{type:"submit"}},[t._v("Оновити запис")])]),i("router-link",{staticClass:"admin-button",attrs:{tag:"button",to:{name:"live_preview",params:{title:t.$_friendlyUrl(t.item.title),item:t.item}}},on:{click:function(e){return t.addToStorage(t.item)}}},[t._v("\n\t\t      \tПопередній перегляд\n\t\t    ")])],1)},r=[],o=i("f499"),n=i.n(o),s=i("cebc"),c=i("b3e9"),l=i("755a"),m={name:"NewPost",props:["article","draft","proId"],data:function(){return{item:JSON.parse(localStorage.getItem("item"))||{title:this.article.title,img:this.article.img,excerpt:this.article.excerpt,content:this.article.content}}},components:{VueEditor:c["VueEditor"],PreviewImage:l["default"]},methods:{update:function(t,e){if(!this.draft){new Date;this.$_db.collection("blog").doc(t).update(Object(s["a"])({},e)),localStorage.removeItem("item"),localStorage.removeItem("articleId")}},addToStorage:function(t){localStorage.setItem("item",n()(t)),localStorage.setItem("articleId",n()(this.proId))},getSrc:function(t){this.item.img=t},addPost:function(t,e){var i=new Date;this.$_db.collection("blog").add(Object(s["a"])({},e,{createdAt:i})),this.$_db.collection("draft_post").doc(t).delete(),localStorage.removeItem("item"),localStorage.removeItem("articleId")},deleteItem:function(t){this.$_db.collection("draft_post").doc(t).delete(),localStorage.removeItem("item"),localStorage.removeItem("articleId")}}},p=m,u=(i("d6d1"),i("2877")),d=Object(u["a"])(p,a,r,!1,null,"6902f566",null);e["a"]=d.exports},"755a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Image-input"},[i("div",{staticClass:"Image-input__image-wrapper"},[i("i",{directives:[{name:"show",rawName:"v-show",value:!t.imageSrc,expression:"!imageSrc"}],staticClass:"icon fa fa-picture-o"}),i("img",{staticClass:"Image-input__image",attrs:{src:t.imageSrc}})]),i("div",{staticClass:"Image-input__input-wrapper"},[t._v("\n        Вибери зображення\n        "),i("input",{staticClass:"Image-input__input",attrs:{name:"thumbnail",type:"file"},on:{change:t.previewThumbnail}})])])},r=[],o={name:"previewImage",props:["currentImage"],data:function(){return{imageSrc:""}},created:function(){this.currentImage&&(this.imageSrc=this.currentImage)},methods:{previewThumbnail:function(t){var e=t.target;if(e.files&&e.files[0]){var i=new FileReader,a=this;i.onload=function(t){a.imageSrc=t.target.result,a.$emit("getImg",a.imageSrc)},i.readAsDataURL(e.files[0])}}}},n=o,s=(i("c863"),i("2877")),c=Object(s["a"])(n,a,r,!1,null,null,null);e["default"]=c.exports},"83da":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".Image-input,.Image-input__image-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.Image-input__image-wrapper{-ms-flex-preferred-size:80%;flex-basis:80%;height:200px;-webkit-box-flex:2.5;-ms-flex:2.5;flex:2.5;margin-right:10px;overflow-y:hidden;border-radius:1px;background:#eee;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.Image-input__image-wrapper>.icon{color:#ccc;font-size:50px;cursor:default}.Image-input__image{max-width:100%;border-radius:1px}.Image-input__input-wrapper{overflow:hidden;position:relative;background:#eee;border-radius:1px;float:left;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:rgba(0,0,0,.2);-webkit-transition:background .4s;transition:background .4s}.Image-input__input-wrapper:hover{background:#e0e0e0}.Image-input__input{cursor:inherit;display:block;font-size:999px;min-height:100%;opacity:0;position:absolute;right:0;text-align:right;top:0;cursor:pointer}",""])},c066:function(t,e,i){var a=i("83da");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("499e").default;r("0491f061",a,!0,{sourceMap:!1,shadowMode:!1})},c863:function(t,e,i){"use strict";var a=i("c066"),r=i.n(a);r.a},d555:function(t,e,i){var a=i("df5e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("499e").default;r("784cd5cc",a,!0,{sourceMap:!1,shadowMode:!1})},d6d1:function(t,e,i){"use strict";var a=i("d555"),r=i.n(a);r.a},df5e:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".quillWrapper .ql-toolbar.ql-snow[data-v-6902f566]{position:-webkit-sticky!important;position:sticky!important;top:75px!important}",""])}}]);