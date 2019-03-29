(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~d939e436"],{"108b":function(e,t,n){"use strict";e.exports=function(e){const t=e?e.preset:"ru",n={"а":"a","б":"b","в":"v","ґ":"g","г":"g","д":"d","е":"e","ё":"e","є":"ye","ж":"zh","з":"z","и":"i","і":"i","ї":"yi","й":"i","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh'","ъ":"","ы":"i","ь":"","э":"e","ю":"yu","я":"ya"};"uk"===t&&Object.assign(n,{"г":"h","и":"y","й":"y","х":"kh","ц":"ts","щ":"shch","'":"","’":"","ʼ":""});const o=Object.assign({},n);function r(e,r){if(!e)return"";let i="";for(let u=0;u<e.length;u++){const c=e[u]===e[u].toUpperCase();let f=e[u].toLowerCase();if(" "===f&&r){i+=r;continue}let s="uk"===t&&"г"===f&&u>0&&"з"===e[u-1].toLowerCase()?"gh":(0===u?n:o)[f];i+="undefined"===typeof s?c?f.toUpperCase():f:c?s.toUpperCase():s}return i}return"uk"===t&&Object.assign(o,{"є":"ie","ї":"i","й":"i","ю":"iu","я":"ia"}),{transform:r}}},"59ca":function(e,t,n){"use strict";function o(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}n("95c6");var r=o(n("c23d"));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e.exports=r},a59c:function(e,t,n){"use strict";(function(e){var t=setTimeout;function n(){}function o(e,t){return function(){e.apply(t,arguments)}}function r(e){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],a(e,this)}function i(e,t){while(3===e._state)e=e._value;0!==e._state?(e._handled=!0,r._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(r){return void c(t.promise,r)}u(t.promise,o)}else(1===e._state?u:c)(t.promise,e._value)})):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===typeof t||"function"===typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void f(e);if("function"===typeof n)return void a(o(n,t),e)}e._state=1,e._value=t,f(e)}catch(i){c(e,i)}}function c(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t]);e._deferreds=null}function s(e,t,n){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=n}function a(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,c(t,e))})}catch(o){if(n)return;n=!0,c(t,o)}}r.prototype["catch"]=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var o=new this.constructor(n);return i(this,new s(e,t,o)),o},r.prototype["finally"]=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})},r.all=function(e){return new r(function(t,n){if(!e||"undefined"===typeof e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,u){try{if(u&&("object"===typeof u||"function"===typeof u)){var c=u.then;if("function"===typeof c)return void c.call(u,function(t){i(e,t)},n)}o[e]=u,0===--r&&t(o)}catch(f){n(f)}}for(var u=0;u<o.length;u++)i(u,o[u])})},r.resolve=function(e){return e&&"object"===typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},r._immediateFn="function"===typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},r._unhandledRejectionFn=function(e){"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof e)return e;throw new Error("unable to locate global object")}();l.Promise||(l.Promise=r)}).call(this,n("c8ba"))},e71f:function(e,t,n){"use strict";n("e89a")},ea7b:function(e,t,n){"use strict";n("b7aa");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}]);
//# sourceMappingURL=chunk-vendors~d939e436.88ed748d.js.map