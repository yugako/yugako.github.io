(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~13c9ec25"],{"499e":function(e,t,r){"use strict";function i(e,t){for(var r=[],i={},n=0;n<t.length;n++){var s=t[n],o=s[0],p=s[1],a=s[2],l=s[3],u={id:e+":"+n,css:p,media:a,sourceMap:l};i[o]?i[o].parts.push(u):r.push(i[o]={id:o,parts:[u]})}return r}r.r(t),r.d(t,"default",function(){return f});var n="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},o=n&&(document.head||document.getElementsByTagName("head")[0]),p=null,a=0,l=!1,u=function(){},h=null,c="data-vue-ssr-id",d="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,r,n){l=r,h=n||{};var o=i(e,t);return w(o),function(t){for(var r=[],n=0;n<o.length;n++){var p=o[n],a=s[p.id];a.refs--,r.push(a)}t?(o=i(e,t),w(o)):o=[];for(n=0;n<r.length;n++){a=r[n];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete s[a.id]}}}}function w(e){for(var t=0;t<e.length;t++){var r=e[t],i=s[r.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](r.parts[n]);for(;n<r.parts.length;n++)i.parts.push(g(r.parts[n]));i.parts.length>r.parts.length&&(i.parts.length=r.parts.length)}else{var o=[];for(n=0;n<r.parts.length;n++)o.push(g(r.parts[n]));s[r.id]={id:r.id,refs:1,parts:o}}}}function m(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function g(e){var t,r,i=document.querySelector("style["+c+'~="'+e.id+'"]');if(i){if(l)return u;i.parentNode.removeChild(i)}if(d){var n=a++;i=p||(p=m()),t=v.bind(null,i,n,!1),r=v.bind(null,i,n,!0)}else i=m(),t=b.bind(null,i),r=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else r()}}var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function v(e,t,r,i){var n=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,n);else{var s=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function b(e,t){var r=t.css,i=t.media,n=t.sourceMap;if(i&&e.setAttribute("media",i),h.ssrId&&e.setAttribute(c,t.id),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},5299:function(e,t,r){"use strict";
/*!
 * vue-social-sharing v2.4.2 
 * (c) 2019 nicolasbeauvais
 * Released under the MIT License.
 */function i(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}var n=i(r("a026")),s={functional:!0,props:{network:{type:String,default:""}},render:function(e,t){var r=t.parent._data.baseNetworks[t.props.network];return r?e(t.parent.networkTag,{staticClass:t.data.staticClass||null,staticStyle:t.data.staticStyle||null,class:t.data.class||null,style:t.data.style||null,attrs:{id:t.data.attrs.id||null,"data-link":"popup"===r.type?"#share-"+t.props.network:t.parent.createSharingUrl(t.props.network),"data-action":"popup"===r.type?null:r.action},on:{click:"popup"===r.type?function(){t.parent.share(t.props.network)}:function(){t.parent.touch(t.props.network)}}},t.children):console.warn("Network "+t.props.network+" does not exist")}},o={sharer:"mailto:?subject=@title&body=@url%0D%0A%0D%0A@description",type:"direct"},p={sharer:"https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@description&quote=@quote&hashtag=@hashtags",type:"popup"},a={sharer:"https://plus.google.com/share?url=@url",type:"popup"},l={sharer:"http://line.me/R/msg/text/?@description%0D%0A@url",type:"popup"},u={sharer:"https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description",type:"popup"},h={sharer:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@url&st.comments=@description",type:"popup"},c={sharer:"https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title",type:"popup"},d={sharer:"https://www.reddit.com/submit?url=@url&title=@title",type:"popup"},f={sharer:"https://web.skype.com/share?url=@description%0D%0A@url",type:"popup"},w={sharer:"https://t.me/share/url?url=@url&text=@description",type:"popup"},m={sharer:"https://twitter.com/intent/tweet?text=@title&url=@url&hashtags=@hashtags@twitteruser",type:"popup"},g={sharer:"viber://forward?text=@url @description",type:"direct"},y={sharer:"https://vk.com/share.php?url=@url&title=@title&description=@description&image=@media&noparse=true",type:"popup"},v={sharer:"http://service.weibo.com/share/share.php?url=@url&title=@title",type:"popup"},b={sharer:"whatsapp://send?text=@description%0D%0A@url",type:"direct",action:"share/whatsapp/share"},k={sharer:"sms:?body=@url%20@description",type:"direct"},S={email:o,facebook:p,googleplus:a,line:l,linkedin:u,odnoklassniki:h,pinterest:c,reddit:d,skype:f,telegram:w,twitter:m,viber:g,vk:y,weibo:v,whatsapp:b,sms:k},C="undefined"!==typeof window,U=C?window:null,x={props:{url:{type:String,default:C?window.location.href:""},title:{type:String,default:""},description:{type:String,default:""},quote:{type:String,default:""},hashtags:{type:String,default:""},twitterUser:{type:String,default:""},withCounts:{type:[String,Boolean],default:!1},googleKey:{type:String,default:void 0},media:{type:String,default:""},networkTag:{type:String,default:"span"},networks:{type:Object,default:function(){return{}}}},data:function(){return{baseNetworks:S,popup:{status:!1,resizable:!0,toolbar:!1,menubar:!1,scrollbars:!1,location:!1,directories:!1,width:626,height:436,top:0,left:0,window:void 0,interval:null}}},methods:{createSharingUrl:function(e){return this.baseNetworks[e].sharer.replace(/@url/g,encodeURIComponent(this.url)).replace(/@title/g,encodeURIComponent(this.title)).replace(/@description/g,encodeURIComponent(this.description)).replace(/@quote/g,encodeURIComponent(this.quote)).replace(/@hashtags/g,this.generateHashtags(e,this.hashtags)).replace(/@media/g,this.media).replace(/@twitteruser/g,this.twitterUser?"&via="+this.twitterUser:"")},generateHashtags:function(e,t){return"facebook"===e&&t.length>0?"%23"+t.split(",")[0]:t},share:function(e){this.openSharer(e,this.createSharingUrl(e)),this.$root.$emit("social_shares_open",e,this.url),this.$emit("open",e,this.url)},touch:function(e){window.open(this.createSharingUrl(e),"_self"),this.$root.$emit("social_shares_open",e,this.url),this.$emit("open",e,this.url)},openSharer:function(e,t){var r=this;this.popup.window&&this.popup.interval&&(clearInterval(this.popup.interval),this.popup.window.close(),this.$root.$emit("social_shares_change",e,this.url),this.$emit("change",e,this.url)),this.popup.window=window.open(t,"sharer","status="+(this.popup.status?"yes":"no")+",height="+this.popup.height+",width="+this.popup.width+",resizable="+(this.popup.resizable?"yes":"no")+",left="+this.popup.left+",top="+this.popup.top+",screenX="+this.popup.left+",screenY="+this.popup.top+",toolbar="+(this.popup.toolbar?"yes":"no")+",menubar="+(this.popup.menubar?"yes":"no")+",scrollbars="+(this.popup.scrollbars?"yes":"no")+",location="+(this.popup.location?"yes":"no")+",directories="+(this.popup.directories?"yes":"no")),this.popup.window.focus(),this.popup.interval=setInterval(function(){r.popup.window.closed&&(clearInterval(r.popup.interval),r.popup.window=void 0,r.$root.$emit("social_shares_close",e,r.url),r.$emit("close",e,r.url))},500)}},beforeMount:function(){this.baseNetworks=n.util.extend(this.baseNetworks,this.networks)},mounted:function(){if(C){var e=void 0!==U.screenLeft?U.screenLeft:screen.left,t=void 0!==U.screenTop?U.screenTop:screen.top,r=U.innerWidth?U.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,i=U.innerHeight?U.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;this.popup.left=r/2-this.popup.width/2+e,this.popup.top=i/2-this.popup.height/2+t}},components:{network:s},version:"2.4.2",install:function(e){e.component("social-sharing",x)}};"undefined"!==typeof window&&(window.SocialSharing=x),e.exports=x}}]);