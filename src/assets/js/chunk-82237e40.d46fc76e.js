(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82237e40","chunk-54592b5c"],{7391:function(t,e,a){"use strict";var i=a("dabb"),r=a.n(i);r.a},"755a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Image-input"},[a("div",{staticClass:"Image-input__image-wrapper"},[a("i",{directives:[{name:"show",rawName:"v-show",value:!t.imageSrc,expression:"!imageSrc"}],staticClass:"icon fa fa-picture-o"}),a("img",{staticClass:"Image-input__image",attrs:{src:t.imageSrc}})]),a("div",{staticClass:"Image-input__input-wrapper"},[t._v("\n        Вибери зображення\n        "),a("input",{staticClass:"Image-input__input",attrs:{name:"thumbnail",type:"file"},on:{change:t.previewThumbnail}})])])},r=[],s={name:"previewImage",props:["currentImage"],data:function(){return{imageSrc:""}},created:function(){this.currentImage&&(this.imageSrc=this.currentImage)},methods:{previewThumbnail:function(t){var e=t.target;if(e.files&&e.files[0]){var a=new FileReader,i=this;a.onload=function(t){i.imageSrc=t.target.result,i.$emit("getImg",i.imageSrc)},a.readAsDataURL(e.files[0])}}}},o=s,n=(a("c863"),a("2877")),l=Object(n["a"])(o,i,r,!1,null,null,null);e["default"]=l.exports},"83da":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".Image-input,.Image-input__image-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.Image-input__image-wrapper{-ms-flex-preferred-size:80%;flex-basis:80%;height:200px;-webkit-box-flex:2.5;-ms-flex:2.5;flex:2.5;margin-right:10px;overflow-y:hidden;border-radius:1px;background:#eee;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.Image-input__image-wrapper>.icon{color:#ccc;font-size:50px;cursor:default}.Image-input__image{max-width:100%;border-radius:1px}.Image-input__input-wrapper{overflow:hidden;position:relative;background:#eee;border-radius:1px;float:left;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:rgba(0,0,0,.2);-webkit-transition:background .4s;transition:background .4s}.Image-input__input-wrapper:hover{background:#e0e0e0}.Image-input__input{cursor:inherit;display:block;font-size:999px;min-height:100%;opacity:0;position:absolute;right:0;text-align:right;top:0;cursor:pointer}",""])},"8a27":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"input[data-v-0a1a9dd1],select[data-v-0a1a9dd1],textarea[data-v-0a1a9dd1]{display:block}",""])},c066:function(t,e,a){var i=a("83da");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("499e").default;r("0491f061",i,!0,{sourceMap:!1,shadowMode:!1})},c863:function(t,e,a){"use strict";var i=a("c066"),r=a.n(i);r.a},dabb:function(t,e,a){var i=a("8a27");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("499e").default;r("1f52b084",i,!0,{sourceMap:!1,shadowMode:!1})},fa53:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"}),a("h1",{staticClass:"section-title__text"},[t._v("Додати нову роботу")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.addWork(t.item)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Назва роботи")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}})])]),a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cat"}},[t._v("Категорія:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.item.cat,expression:"item.cat"}],staticClass:"form-control",attrs:{id:"cat"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.item,"cat",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("Вибери категорію")]),a("option",{attrs:{value:"sites"}},[t._v("Сайти")]),a("option",{attrs:{value:"personal"}},[t._v("Особисті проекти")])])])]),a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"client"}},[t._v("Клієнт:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.client,expression:"item.client"}],staticClass:"form-control",attrs:{type:"text",id:"client"},domProps:{value:t.item.client},on:{input:function(e){e.target.composing||t.$set(t.item,"client",e.target.value)}}})])]),a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"link"}},[t._v("Посилання на роботу:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.url,expression:"item.url"}],staticClass:"form-control",attrs:{type:"text",id:"link"},domProps:{value:t.item.url},on:{input:function(e){e.target.composing||t.$set(t.item,"url",e.target.value)}}})])]),a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tech"}},[t._v("Технології:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.tech,expression:"item.tech"}],staticClass:"form-control",attrs:{type:"text",id:"tech"},domProps:{value:t.item.tech},on:{input:function(e){e.target.composing||t.$set(t.item,"tech",e.target.value)}}})])]),a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"deadline"}},[t._v("Термін розробки:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.deadline,expression:"item.deadline"}],staticClass:"form-control",attrs:{type:"text",id:"deadline"},domProps:{value:t.item.deadline},on:{input:function(e){e.target.composing||t.$set(t.item,"deadline",e.target.value)}}})])]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"pre"}},[t._v("Прев'ю роботи:")]),a("PreviewImage",{on:{getImg:t.getSrc}})],1)])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"describe"}},[t._v("Опис роботи:")]),a("vue-editor",{attrs:{for:"describe"},model:{value:t.item.describe,callback:function(e){t.$set(t.item,"describe",e)},expression:"item.describe"}})],1),a("button",{staticClass:"admin-button",attrs:{type:"submit"}},[t._v("Додати роботу")])]),a("router-link",{staticClass:"admin-button",attrs:{tag:"button",to:{name:"work_preview",params:{title:t.$_friendlyUrl(t.item.title),item:t.item}}},on:{click:function(e){return t.addToStorage(t.item)}}},[t._v("\n\t      \tПопередній перегляд\n\t    ")])],1)},r=[],s=a("f499"),o=a.n(s),n=a("cebc"),l=a("b3e9"),c=a("755a"),m={name:"NewWork",data:function(){return{item:JSON.parse(localStorage.getItem("item"))||{title:"",img:"",cat:"",describe:"",deadline:"",client:"",url:"",tech:""}}},components:{VueEditor:l["VueEditor"],PreviewImage:c["default"]},methods:{addWork:function(t){var e=new Date;this.$_db.collection("works").add(Object(n["a"])({},t,{createdAt:e})),localStorage.removeItem("item")},addToStorage:function(t){localStorage.setItem("item",o()(t))},getSrc:function(t){this.item.img=t}}},u=m,d=(a("7391"),a("2877")),p=Object(d["a"])(u,i,r,!1,null,"0a1a9dd1",null);e["default"]=p.exports}}]);