(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03e8605a"],{"0cfc":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.work?o("div",{staticClass:"project"},[o("div",{staticClass:"project-heading"},[o("div",{staticClass:"project-heading__title text-center"},[t._v("\n\t\t        "+t._s(t.work.title)+"\n\t\t    ")]),o("div",{staticClass:"project-heading__img"},[o("a",{attrs:{href:t.work.url}},[o("img",{staticClass:"img-responsive",attrs:{src:t.work.img,alt:t.work.title,target:"_blank"}})])])]),o("div",{staticClass:"row-wrapper"},[o("div",{staticClass:"cl-12"},[o("div",{staticClass:"project-info"},[o("div",{staticClass:"project-info__title"},[t._v("\n\t\t                Опис проекту\n\t\t            ")]),o("div",{staticClass:"project-info__descr",domProps:{innerHTML:t._s(t.work.describe)}}),o("div",{staticClass:"project-meta"},[o("div",{staticClass:"project-meta__date project-meta__item"},[o("span",[t._v("Термін розробки:")]),t._v("\n\t\t                    "+t._s(t.work.deadline)+"\n\t\t                ")])]),o("div",{staticClass:"project-info__buttons"},[o("a",{attrs:{href:t.work.url}},[o("button",{staticClass:"project-info__button show button"},[t._v("\n\t\t                        Дивитись проект\n\t\t                    ")])])])])])])]):o("div",[t._v("Нема що показувати")]),o("button",{staticClass:"admin-button",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Назад")])])},i=[],n={data:function(){return{proId:this.$route.params.title,work:JSON.parse(localStorage.getItem("workItem"))}},firestore:function(){return{works:this.$_db.collection("works").orderBy("createdAt")}}},a=n,s=(o("2538"),o("2877")),c=Object(s["a"])(a,r,i,!1,null,null,null);e["default"]=c.exports},2538:function(t,e,o){"use strict";var r=o("9964"),i=o.n(r);i.a},"918d":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'.project{margin-bottom:40px}.project-heading{margin-bottom:19px}.project-heading__title{color:#424242;font-family:Merriweather,serif;font-size:18px;font-weight:400;line-height:24px;text-transform:uppercase;letter-spacing:.22px;margin-bottom:18px}.project-heading__frame{width:100%;height:450px;border:2px solid #555;background-size:cover;margin:auto}.project-heading__frame:hover{border:2px solid #2c3e50;cursor:pointer}.project-heading__frame .frame,.project-heading__frame .locked{position:relative;width:inherit;height:100%}.project-heading__frame .locked{z-index:999999;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#2c3e50}.project-heading__frame .locked:before{content:"";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;background-color:hsla(0,0%,100%,.6)}.project-heading__buttons{margin-bottom:19px}.project-heading__buttons img{width:20px;height:20px}.project-heading .activeBtn,.project-heading__button:hover{background-color:#476481}.project-info__title{color:#424242;font-size:18px;font-weight:400;text-transform:uppercase;letter-spacing:.22px}.project-info__descr,.project-info__title{font-family:Merriweather,serif;line-height:24px;margin-bottom:18px}.project-info__descr{color:#555;font-size:14px;font-weight:300;letter-spacing:.17px}.project-info__button,.project-meta{margin-bottom:18px}.project-meta{color:#555;font-family:Merriweather,serif;font-size:14px;font-weight:300;line-height:24px;letter-spacing:.17px}.project-meta span{color:#424242;font-weight:700}.project-meta__item{margin-bottom:18px}',""])},9964:function(t,e,o){var r=o("918d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=o("499e").default;i("483e1953",r,!0,{sourceMap:!1,shadowMode:!1})}}]);