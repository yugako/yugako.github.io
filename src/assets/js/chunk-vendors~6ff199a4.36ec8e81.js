(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~6ff199a4"],{"0284":function(e,n,t){!function(n,t){e.exports=t()}(0,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function r(e){u(I,e)}function i(){return I.id?[].concat(I.id):[]}function o(){}function a(e){return new Promise(function(n,t){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");i.async=!0,i.src=e,i.charset="utf-8",r.appendChild(i),i.onload=n,i.onerror=t})}function c(e,n){var t=n.split("/"),r=e.split("/");return""===t[0]&&"/"===e[e.length-1]&&t.shift(),r.join("/")+t.join("/")}function u(e,n){return Object.keys(n).forEach(function(t){var r=e[t]&&Object.prototype.toString.call(e[t]);"[object Object]"!==r&&"[object Array]"!==r?e[t]=n[t]:u(e[t],n[t])}),e}function s(){return Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(e){return-1!==e.src.indexOf("analytics")||-1!==e.src.indexOf("gtag")}).length>0}function d(){return!(L.checkDuplicatedScript&&s())}function f(e){return e.name||e.replace(/-/gi,"")}function l(){return new Promise(function(e,n){var t=setInterval(function(){"undefined"!=typeof window&&window.ga&&(e(),clearInterval(t))},10)})}function p(e,n){return i().length>1?f(n)+"."+e:e}function h(e){var n=Object.keys(e).reduce(function(n,t,r,i){var o=r===i.length-1;return n+(t+"=")+e[t]+(o?"":"&")},"");return""!==n?"?"+n:""}function v(e){return[e.name,e.path].filter(Boolean).find(function(e){return-1!==L.ignoreRoutes.indexOf(e)})}function y(e){return e.query&&e.params}function g(e){return e.currentRoute}function m(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function w(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];"undefined"!=typeof window&&i().forEach(function(n){var r,i={m:p(e,n),a:t};window.ga?L.batch.enabled?(D.push(i),B||(B=setInterval(function(){D.length?D.splice(0,L.batch.amount).forEach(function(e){var n;(n=window).ga.apply(n,[e.m].concat(m(e.a)))}):(clearInterval(B),B=null)},L.batch.delay))):(r=window).ga.apply(r,[p(e,n)].concat(t)):L.untracked.push(i)})}function b(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];"object"!=typeof n[0]||n[0].constructor!==Object?w("set",n[0],n[1]):w("set",n[0])}function _(){var e=i();L.debug.enabled&&(window.ga_debug={trace:L.debug.trace}),e.forEach(function(n){var t=f(n),r=L.customIdFields[n]||{},i=e.length>1?F({},L.fields,r,{name:t}):L.fields;window.ga("create",n.id||n,"auto",i)}),L.beforeFirstHit();var n=L.ecommerce;if(n.enabled){var t=n.enhanced?"ec":"ecommerce";n.options?w("require",t,n.options):w("require",t)}L.linkers.length>0&&(w("require","linker"),w("linker:autoLink",L.linkers)),L.debug.sendHitTask||b("sendHitTask",null)}function k(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0];if(1===n.length&&"string"==typeof r)return w("send","screenview",{screenName:r});w.apply(void 0,["send","screenview"].concat(n))}function E(){for(var e=void 0,n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];t.length&&g(t[0])&&(e=t[0].currentRoute),t.length&&y(t[0])&&(e=t[0]),e?O(e):(b("page","object"==typeof t[0]?t[0].page:t[0]),w.apply(void 0,["send","pageview"].concat(t)))}function O(e){if(!v(e)){var n=L.autoTracking,t=e.meta.analytics,r=void 0===t?{}:t,i=r.pageviewTemplate||n.pageviewTemplate;if(n.screenview&&!e.name)throw new Error("[vue-analytics] Route name is mandatory when using screenview.");if(n.screenview)return void k(e.name);if(i)E(i(e));else{var o=L.router,a=L.autoTracking,u=a.transformQueryString,s=a.prependBase,d=h(e.query),f=o&&o.options.base,l=s&&f,p=e.path+(u?d:"");p=l?c(f,p):p,E(p)}}}function x(){var e=L.router,n=L.autoTracking;n.page&&e&&(n.pageviewOnLoad&&O(e.currentRoute),L.router.afterEach(function(t,r){var i=n.skipSamePath,o=n.shouldRouterUpdate;i&&t.path===r.path||("function"!=typeof o||o(t,r))&&L.$vue.nextTick().then(function(){O(e.currentRoute)})}))}function A(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function q(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];w.apply(void 0,["send","event"].concat(n))}function j(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];w.apply(void 0,["send","social"].concat(n))}function T(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];w.apply(void 0,["send","timing"].concat(n))}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function P(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(ae({},n,{$vue:e})),e.directive("ga",re),e.prototype.$ga=e.$ga=te,z(e),W()}Object.defineProperty(n,"__esModule",{value:!0});var $=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},C={$vue:null,id:null,router:null,fields:{},customIdFields:{},ignoreRoutes:[],linkers:[],commands:{},disabled:!1,customResourceURL:null,set:[],require:[],ecommerce:{enabled:!1,options:null,enhanced:!1},autoTracking:{screenview:!1,shouldRouterUpdate:null,skipSamePath:!1,exception:!1,exceptionLogs:!0,page:!0,transformQueryString:!0,pageviewOnLoad:!0,pageviewTemplate:null,untracked:!0,prependBase:!0},debug:{enabled:!1,trace:!1,sendHitTask:!0},batch:{enabled:!1,delay:500,amount:2},checkDuplicatedScript:!1,disableScriptLoader:!1,beforeFirstHit:o,ready:o,untracked:[]},I=$({},C),L=I,U=function(e){if(e.then)return e;if("function"==typeof e){var n=e();return n.then?n:Promise.resolve(n)}return Promise.resolve(e)},B=void 0,D=[],F=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},H=function(){2!=arguments.length?w("require",arguments.length<=0?void 0:arguments[0]):w("require",arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1])},N=function(){L.set.forEach(function(e){var n=e.field,t=e.value;if(void 0===n||void 0===t)throw new Error('[vue-analytics] Wrong configuration in the plugin options.\nThe "set" array requires each item to have a "field" and a "value" property.');b(n,t)})},V=function(){var e=["ec","ecommerce"];L.require.forEach(function(n){if(-1!==e.indexOf(n)||-1!==e.indexOf(n.name))throw new Error("[vue-analytics] The ecommerce features are built-in in the plugin. \nFollow the ecommerce instructions available in the documentation.");if("string"!=typeof n&&"object"!=typeof n)throw new Error('[vue-analytics] Wrong configuration in the plugin options. \nThe "require" array requires each item to be a string or to have a "name" and an "options" property.');var t=n.name||n;n.options?H(t,n.options):H(t)})},M=function(){N(),V()},Q=function(){L.untracked.forEach(function(e){w.apply(void 0,[e.m].concat(A(e.a)))})},J=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];"undefined"!=typeof window&&i().forEach(function(n){window["ga-disable-"+n]=e})},W=function(){if("undefined"!=typeof document&&"undefined"!=typeof window){var e=L.disableScriptLoader,n=L.ready,t=L.debug.enabled?"analytics_debug":"analytics",i=L.customResourceURL||"https://www.google-analytics.com/"+t+".js";if(!L.id)throw new Error('[vue-analytics] Missing the "id" parameter. Add at least one tracking domain ID');var o=[U(L.id),U(L.disabled)];return!d()||window.ga&&e||o.push(a(i).catch(function(){throw new Error("[vue-analytics] An error occured! Please check your connection, if you have any Google Analytics blocker installed in your browser or check your custom resource URL if you have added any.")})),Promise.all(o).then(function(e){r({id:e[0],disabled:e[1]}),J(L.disabled),_(),M(),Q(),x(),n()}).catch(function(e){console.error(e.message)})}},X=this,G=function(e){w("send","exception",{exDescription:e,exFatal:arguments.length>1&&void 0!==arguments[1]&&arguments[1]})},z=function(e){if(L.autoTracking.exception){window.addEventListener("error",function(e){G(e.message)});var n=e.config.errorHandler;e.config.errorHandler=function(e,t,r){G(e.message),L.autoTracking.exceptionLogs&&(console.error("[vue-analytics] Error in "+r+": "+e.message),console.error(e)),"function"==typeof n&&n.call(X,e,t,r)}}},K=G,Y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Z=function(e){return(L.ecommerce.enhanced?"ec":"ecommerce")+":"+e},ee=["addItem","addTransaction","addProduct","addImpression","setAction","addPromo","send"],ne=ee.reduce(function(e,n){return Y({},e,S({},n,function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];w.apply(void 0,[Z(n)].concat(t))}))},{}),te={event:q,exception:K,page:E,query:w,require:H,set:b,social:j,time:T,screenview:k,ecommerce:ne,disable:function(){return J(!0)},enable:function(){return J(!1)},commands:L.commands},re={inserted:function(e,n,t){var r=Object.keys(n.modifiers);0===r.length&&r.push("click"),r.forEach(function(r){e.addEventListener(r,function(){var e="string"==typeof n.value?L.commands[n.value]:n.value;if(!e)throw new Error("[vue-analytics] The value passed to v-ga is not defined in the commands list.");e.apply(t.context)})})}},ie=function(){function e(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&c.return&&c.return()}finally{if(i)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),oe=function(e){e.subscribe(function(e){var n=e.payload;if(n&&n.meta&&n.meta.analytics){var t=n.meta.analytics;if(!Array.isArray(t))throw new Error('The "analytics" property needs to be an array');t.forEach(function(e){var n,t=void 0,r=e.shift(),i=e;if(r.includes(":")){var o=r.split(":"),a=ie(o,2);r=a[0],t=a[1]}if(!(r in te))throw new Error('[vue-analytics:vuex] The type "'+r+"\" doesn't exist.");if(t&&!(t in te[r]))throw new Error('[vue-analytics:vuex] The type "'+r+'" has not method "'+t+'".');if("ecommerce"===r&&!t)throw new Error('[vue-analytics:vuex] The type "'+r+'" needs to call a method. Check documentation.');t?(n=te[r])[t].apply(n,R(i)):te[r].apply(te,R(i))})}})};n.default=P,t.d(n,"analyticsMiddleware",function(){return ce}),t.d(n,"onAnalyticsReady",function(){return ue}),t.d(n,"event",function(){return se}),t.d(n,"ecommerce",function(){return de}),t.d(n,"set",function(){return fe}),t.d(n,"page",function(){return le}),t.d(n,"query",function(){return pe}),t.d(n,"screenview",function(){return he}),t.d(n,"time",function(){return ve}),t.d(n,"require",function(){return ye}),t.d(n,"exception",function(){return ge}),t.d(n,"social",function(){return me});var ae=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ce=oe,ue=l,se=te.event,de=te.ecommerce,fe=te.set,le=te.page,pe=te.query,he=te.screenview,ve=te.time,ye=te.require,ge=te.exception,me=te.social}])})},"1cc7":function(e,n,t){!function(n,t){e.exports=t()}(0,function(){"use strict";var e={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"disqus_thread"}})},staticRenderFns:[],name:"vue-disqus",props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},mounted(){window.DISQUS?this.reset(window.DISQUS):this.init()},methods:{reset(e){let n=this;e.reset({reload:!0,config:function(){n.setBaseConfig(this)}})},init(){let e=this;window.disqus_config=function(){e.setBaseConfig(this)},setTimeout(()=>{let e=document,n=e.createElement("script");n.setAttribute("id","embed-disqus"),n.setAttribute("data-timestamp",+new Date),n.type="text/javascript",n.async=!0,n.src=`//${this.shortname}.disqus.com/embed.js`,(e.head||e.body).appendChild(n)},0)},setBaseConfig(e){e.page.identifier=this.identifier||this.$route.path||window.location.pathname,e.page.url=this.url||this.$el.baseURI,this.title&&(e.page.title=this.title),this.remote_auth_s3&&(e.page.remote_auth_s3=this.remote_auth_s3),this.api_key&&(e.page.api_key=this.api_key),this.sso_config&&(e.sso=this.sso_config),this.language&&(e.language=this.language),e.callbacks.onReady=[()=>{this.$emit("ready")}],e.callbacks.onNewComment=[e=>{this.$emit("new-comment",e)}]}}};function n(n){n.component("VueDisqus",e)}return"undefined"!==typeof window&&"undefined"!==typeof window.Vue&&window.Vue.use(n),n})},2877:function(e,n,t){"use strict";function r(e,n,t,r,i,o,a,c){var u,s="function"===typeof e?e.options:e;if(n&&(s.render=n,s.staticRenderFns=t,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=u):i&&(u=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(s.functional){s._injectStyles=u;var d=s.render;s.render=function(e,n){return u.call(n),d(e,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:s}}t.d(n,"a",function(){return r})}}]);
//# sourceMappingURL=chunk-vendors~6ff199a4.36ec8e81.js.map