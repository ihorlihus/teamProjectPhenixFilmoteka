!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},r.parcelRequired7c6=a),a.register("iNWLi",(function(e,t){a("6Urw1");var r=a("MjY8E");a("bK1n4");var n=a("8fRTn");a("3SEMc");var i=a("ewipB"),o=a("4Nugj"),s=(0,r.initializeApp)({apiKey:"AIzaSyC-i2jFd22bYdBwRpVoyd6tt5ycJ9HvmYQ",authDomain:"yevhen-d9b2b.firebaseapp.com",projectId:"yevhen-d9b2b",storageBucket:"yevhen-d9b2b.appspot.com",messagingSenderId:"1022606318990",appId:"1:1022606318990:web:a1c3fbf36d8f2a884818df",measurementId:"G-DETV0FXJ25"}),u=((0,n.getAnalytics)(s),(0,i.n)());(0,i.v)(u,(function(e){e&&f(e)})),o.refs.logoutButton.addEventListener("click",(function(){(0,i.y)(u).then((function(){o.refs.userInfo.classList.add("visually-hidden"),o.refs.authButtList.classList.remove("visually-hidden")})).catch((function(e){return console.log(e.message)}))})),o.refs.singupForm.addEventListener("submit",(function(e){e.preventDefault();var t=o.refs.singupForm.email.value,r=o.refs.singupForm.password.value;(0,i.a5)(u,t,r).then((function(e){f(),o.refs.singupForm.reset()})).catch((function(e){o.refs.singupForm.reset(),alert(e.message)}))})),o.refs.loginForm.addEventListener("submit",(function(e){e.preventDefault();var t=o.refs.loginForm.email.value,r=o.refs.loginForm.password.value;(0,i.a6)(u,t,r).then((function(e){f(),o.refs.loginForm.reset()})).catch((function(e){alert("".concat(e.message)),o.refs.loginForm.reset()}))}));var c=new(0,i.Q);function l(e){e.preventDefault(),(0,i.c)(u,c).then((function(e){i.Q.credentialFromResult(e).accessToken;f(e.user),o.refs.loginForm.reset(),o.refs.singupForm.reset()})).catch((function(e){e.code,e.message,i.Q.credentialFromError(e)}))}function f(e){o.refs.userImg.src=null!==e.photoURL?"".concat(e.photoURL):"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",o.refs.userName.textContent=null!==e.displayName?"".concat(e.displayName):"".concat(e.email),o.refs.authButtList.classList.add("visually-hidden"),o.refs.userInfo.classList.remove("visually-hidden"),o.refs.singupDiv.classList.add("visually-hidden"),o.refs.loginDiv.classList.add("visually-hidden")}o.refs.loginGoogle.addEventListener("click",l),o.refs.signupGoogle.addEventListener("click",l),o.refs.loginOpen.addEventListener("click",(function(e){e.preventDefault(),o.refs.loginDiv.classList.toggle("visually-hidden"),o.refs.singupDiv.classList.add("visually-hidden")})),o.refs.signupOpen.addEventListener("click",(function(e){e.preventDefault(),o.refs.singupDiv.classList.toggle("visually-hidden"),o.refs.loginDiv.classList.add("visually-hidden")}))})),a.register("6Urw1",(function(t,r){e(t.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
(0,a("MjY8E").registerVersion)("firebase","9.9.1","app")})),a.register("MjY8E",(function(r,n){e(r.exports,"_registerComponent",(function(){return T})),e(r.exports,"_getProvider",(function(){return S})),e(r.exports,"SDK_VERSION",(function(){return P})),e(r.exports,"initializeApp",(function(){return R})),e(r.exports,"getApp",(function(){return D})),e(r.exports,"registerVersion",(function(){return M}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),f=a("6ExWU"),p=a("kZfxc"),d=a("2xDiJ"),h=a("ajgRO"),v=(d=a("2xDiJ"),function(){"use strict";function e(r){t(o)(this,e),this.container=r}return t(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var m,g,y="@firebase/app",b="0.7.29",k=new(0,p.Logger)("@firebase/app"),w="[DEFAULT]",x=(m={},t(u)(m,y,"fire-core"),t(u)(m,"@firebase/app-compat","fire-core-compat"),t(u)(m,"@firebase/analytics","fire-analytics"),t(u)(m,"@firebase/analytics-compat","fire-analytics-compat"),t(u)(m,"@firebase/app-check","fire-app-check"),t(u)(m,"@firebase/app-check-compat","fire-app-check-compat"),t(u)(m,"@firebase/auth","fire-auth"),t(u)(m,"@firebase/auth-compat","fire-auth-compat"),t(u)(m,"@firebase/database","fire-rtdb"),t(u)(m,"@firebase/database-compat","fire-rtdb-compat"),t(u)(m,"@firebase/functions","fire-fn"),t(u)(m,"@firebase/functions-compat","fire-fn-compat"),t(u)(m,"@firebase/installations","fire-iid"),t(u)(m,"@firebase/installations-compat","fire-iid-compat"),t(u)(m,"@firebase/messaging","fire-fcm"),t(u)(m,"@firebase/messaging-compat","fire-fcm-compat"),t(u)(m,"@firebase/performance","fire-perf"),t(u)(m,"@firebase/performance-compat","fire-perf-compat"),t(u)(m,"@firebase/remote-config","fire-rc"),t(u)(m,"@firebase/remote-config-compat","fire-rc-compat"),t(u)(m,"@firebase/storage","fire-gcs"),t(u)(m,"@firebase/storage-compat","fire-gcs-compat"),t(u)(m,"@firebase/firestore","fire-fst"),t(u)(m,"@firebase/firestore-compat","fire-fst-compat"),t(u)(m,"fire-js","fire-js"),t(u)(m,"firebase","fire-js-all"),m),_=new Map,I=new Map;function E(e,t){try{e.container.addComponent(t)}catch(r){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function T(e){var t=e.name;if(I.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;I.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=_.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){E(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function S(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
var O=(g={},t(u)(g,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(u)(g,"bad-app-name","Illegal App name: '{$appName}"),t(u)(g,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(u)(g,"app-deleted","Firebase App named '{$appName}' already deleted"),t(u)(g,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(u)(g,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(u)(g,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),t(u)(g,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),t(u)(g,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),t(u)(g,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),g),C=new(0,d.ErrorFactory)("app","Firebase",O),A=function(){"use strict";function e(r,n,i){var a=this;t(o)(this,e),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,f.Component)("app",(function(){return a}),"PUBLIC"))}return t(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}]),e}(),P="9.9.1";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:w,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw C.create("bad-app-name",{appName:String(i)});var a=_.get(i);if(a){if((0,d.deepEqual)(e,a.options)&&(0,d.deepEqual)(n,a.config))return a;throw C.create("duplicate-app",{appName:i})}var o=new(0,f.ComponentContainer)(i),s=!0,u=!1,c=void 0;try{for(var l,p=I.values()[Symbol.iterator]();!(s=(l=p.next()).done);s=!0){var h=l.value;o.addComponent(h)}}catch(e){u=!0,c=e}finally{try{s||null==p.return||p.return()}finally{if(u)throw c}}var v=new A(e,n,o);return _.set(i,v),v}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=_.get(e);if(!t)throw C.create("no-app",{appName:e});return t}function M(e,t,r){var n,i=null!==(n=x[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(s.join(" "))}T(new(0,f.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
var N="firebase-heartbeat-store",L=null;function j(){return L||(L=(0,h.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(N)}}).catch((function(e){throw C.create("storage-open",{originalErrorMessage:e.message})}))),L}function U(e){return F.apply(this,arguments)}function F(){return(F=t(i)(t(l).mark((function e(r){var n,i;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,j();case 4:return i=e.sent,e.abrupt("return",i.transaction(N).objectStore(N).get(q(r)));case 8:throw e.prev=8,e.t0=e.catch(1),C.create("storage-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function B(e,t){return V.apply(this,arguments)}function V(){return(V=t(i)(t(l).mark((function e(r,n){var i,a,o,s;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,j();case 4:return a=e.sent,o=a.transaction(N,"readwrite"),s=o.objectStore(N),e.next=9,s.put(n,q(r));case 9:return e.abrupt("return",o.done);case 12:throw e.prev=12,e.t0=e.catch(1),C.create("storage-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function q(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */var W=function(){"use strict";function e(r){var n=this;t(o)(this,e),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new J(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return t(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(i)(t(l).mark((function r(){var n,i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=H(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(i)(t(l).mark((function r(){var n,i,a,o,s;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(n=H(),i=z(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),r)})))()}}]),e}();function H(){return(new Date).toISOString().substring(0,10)}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),G(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),G(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var K,J=function(){"use strict";function e(r){t(o)(this,e),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,d.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(i)(t(l).mark((function r(){var n;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,U(e.app);case 9:return n=t.sent,t.abrupt("return",n||{heartbeats:[]});case 11:case"end":return t.stop()}}),r)})))()}},{key:"overwrite",value:function(e){var r=this;return t(i)(t(l).mark((function n(){var i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,r._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,r.read();case 10:return a=t.sent,t.abrupt("return",B(r.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),n)})))()}},{key:"add",value:function(e){var r=this;return t(i)(t(l).mark((function n(){var i,a;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return a=n.sent,n.abrupt("return",B(r.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t(c)(a.heartbeats).concat(t(c)(e.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),e}();function G(e){return(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */K="",T(new(0,f.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),T(new(0,f.Component)("heartbeat",(function(e){return new W(e)}),"PRIVATE")),M(y,b,K),M(y,b,"esm2017"),M("fire-js","")})),a.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){r(o,i,a,s,u,"next",e)}function u(e){r(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||o.default(e)||i.default()};var r=s(a("kMC0W")),n=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new O(n||[]);return a._invoke=function(e,t,r){var n=f;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw a;return A()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?h:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(C([])));w&&w!==r&&n.call(w,a)&&(b=w);var x=y.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function r(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function C(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:t,done:!0}}return g.prototype=y,u(x,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(I.prototype),u(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new I(c(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("6ExWU",(function(r,n){e(r.exports,"Component",(function(){return p})),e(r.exports,"ComponentContainer",(function(){return v}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),f=a("2xDiJ"),p=function(){"use strict";function e(r,n,i){t(o)(this,e),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),d="[DEFAULT]",h=function(){"use strict";function e(r,n){t(o)(this,e),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new(0,f.Deferred);if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:d})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=t(u)(a.value,2),c=s[0],l=s[1],f=this.normalizeInstanceIdentifier(c);try{var p=this.getOrInitializeService({instanceIdentifier:f});l.resolve(p)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(i)(t(l).mark((function r(){var n;return t(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(e.instances.values()),r.next=3,Promise.all(t(c)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(c)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,c=void 0;try{for(var l,f=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var p=t(u)(l.value,2),d=p[0],h=p[1],v=this.normalizeInstanceIdentifier(d);i===v&&h.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===d?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.component?this.component.multipleInstances?e:d:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var v=function(){"use strict";function e(r){t(o)(this,e),this.name=r,this.providers=new Map}return t(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new h(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r.default(e)||n.default(e,t)||o.default(e,t)||i.default()};var r=s(a("8slrw")),n=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("2xDiJ",(function(r,n){e(r.exports,"base64urlEncodeWithoutPadding",(function(){return h})),e(r.exports,"base64Decode",(function(){return v})),e(r.exports,"Deferred",(function(){return m})),e(r.exports,"getUA",(function(){return g})),e(r.exports,"isMobileCordova",(function(){return y})),e(r.exports,"isBrowserExtension",(function(){return b})),e(r.exports,"isReactNative",(function(){return k})),e(r.exports,"isIE",(function(){return w})),e(r.exports,"isIndexedDBAvailable",(function(){return x})),e(r.exports,"validateIndexedDBOpenable",(function(){return _})),e(r.exports,"areCookiesEnabled",(function(){return I})),e(r.exports,"FirebaseError",(function(){return E})),e(r.exports,"ErrorFactory",(function(){return T})),e(r.exports,"isEmpty",(function(){return C})),e(r.exports,"deepEqual",(function(){return A})),e(r.exports,"querystring",(function(){return R})),e(r.exports,"querystringDecode",(function(){return D})),e(r.exports,"extractQuerystring",(function(){return M})),e(r.exports,"createSubscribe",(function(){return N})),e(r.exports,"calculateBackoffMillis",(function(){return F})),e(r.exports,"getModularInstance",(function(){return B}));var i=a("ds8z5"),o=a("8MBJY"),s=a("a2hTj"),u=a("eYQtU"),c=a("1t1Wn"),l=(a("8nrFW"),a("4c7YB")),f=a("2MbLg"),p=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,p=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(p=64)),n.push(r[l],r[f],r[p],r[d])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(p(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){return function(e){var t=p(e);return d.encodeByteArray(t,!0)}(e).replace(/\./g,"")},v=function(e){try{return d.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
var m=function(){"use strict";function e(){var r=this;t(o)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return t(s)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function b(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function k(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function w(){var e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return"object"==typeof indexedDB}function _(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function I(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
var E=function(e){"use strict";t(u)(n,e);var r=t(f)(n);function n(e,a,s){var u;return t(o)(this,n),(u=r.call(this,a)).code=e,u.customData=s,u.name="FirebaseError",Object.setPrototypeOf(t(i)(u),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(i)(u),T.prototype.create),u}return n}(t(l)(Error)),T=function(){"use strict";function e(r,n,i){t(o)(this,e),this.service=r,this.serviceName=n,this.errors=i}return t(s)(e,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?S(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new E(a,u,i);return c}}]),e}();function S(e,t){return e.replace(O,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function C(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function A(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(P(l)&&P(f)){if(!A(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var p=!0,d=!1,h=void 0;try{for(var v,m=n[Symbol.iterator]();!(p=(v=m.next()).done);p=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){d=!0,h=e}finally{try{p||null==m.return||m.return()}finally{if(d)throw h}}return!0}function P(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
function R(e){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(e,n){var i=t(c)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r.length?"&"+r.join("&"):""}function D(e){var r={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=t(c)(e.split("="),2),i=n[0],a=n[1];r[decodeURIComponent(i)]=decodeURIComponent(a)}})),r}function M(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function N(e,t){var r=new L(e,t);return r.subscribe.bind(r)}var L=function(){"use strict";function e(r,n){var i=this;t(o)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return t(s)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=j),void 0===n.error&&(n.error=j),void 0===n.complete&&(n.complete=j);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function j(){}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
var U=144e5;function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=t*Math.pow(r,e),i=Math.round(.5*n*(Math.random()-.5)*2);return Math.min(U,n+i)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function B(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r}})),a.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var r=s(a("ge8co")),n=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!n.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return r.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,a=n.default(e);if(t){var o=n.default(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i.default(this,r)}};var r=o(a("aTHs7")),n=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(a("ds8z5")),n=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("kZfxc",(function(r,n){e(r.exports,"LogLevel",(function(){return i})),e(r.exports,"Logger",(function(){return g})),e(r.exports,"setLogLevel",(function(){return y})),e(r.exports,"setUserLogHandler",(function(){return b}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),f=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var p,d={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},h=i.INFO,v=(p={},t(c)(p,i.DEBUG,"log"),t(c)(p,i.VERBOSE,"log"),t(c)(p,i.INFO,"info"),t(c)(p,i.WARN,"warn"),t(c)(p,i.ERROR,"error"),p),m=function(e,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(r<e.logLevel)){var s=(new Date).toISOString(),u=v[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(t(l)(i)))}},g=function(){"use strict";function e(r){t(s)(this,e),this.name=r,this._logLevel=h,this._logHandler=m,this._userLogHandler=null,f.push(this)}return t(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?d[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(t(l)(r))),this._logHandler.apply(this,[this,i.DEBUG].concat(t(l)(r)))}},{key:"log",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(t(l)(r))),this._logHandler.apply(this,[this,i.VERBOSE].concat(t(l)(r)))}},{key:"info",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(t(l)(r))),this._logHandler.apply(this,[this,i.INFO].concat(t(l)(r)))}},{key:"warn",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(t(l)(r))),this._logHandler.apply(this,[this,i.WARN].concat(t(l)(r)))}},{key:"error",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(t(l)(r))),this._logHandler.apply(this,[this,i.ERROR].concat(t(l)(r)))}}]),e}();function y(e){f.forEach((function(t){t.setLogLevel(e)}))}function b(e,t){var r=!0,n=!1,a=void 0;try{for(var o,s=f[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=null;t&&t.level&&(c=d[t.level]),u.userLogHandler=null===e?null:function(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");r>=(null!=c?c:t.logLevel)&&e({level:i[r].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){n=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw a}}}})),a.register("ajgRO",(function(r,n){e(r.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var f=["get","getKey","getAll","getAllKeys","count"],p=["put","add","delete","clear"],d=new Map;function h(e,r){if(e instanceof IDBDatabase&&!(r in e)&&"string"==typeof r){if(d.get(r))return d.get(r);var n=r.replace(/FromIndex$/,""),a=r!==n,o=p.includes(n);if(n in(a?IDBIndex:IDBObjectStore).prototype&&(o||f.includes(n))){var c,l=(c=t(i)(t(u).mark((function e(r){var i,c,l,f,p,d,h=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=h.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=h[l];return p=this.transaction(r,o?"readwrite":"readonly"),d=p.store,a&&(d=d.index(c.shift())),e.next=7,Promise.all([(f=d)[n].apply(f,t(s)(c)),o&&p.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return d.set(r,l),l}}}(0,c.r)((function(e){return t(o)({},e,{get:function(t,r,n){return h(t,r)||e.get(t,r,n)},has:function(t,r){return!!h(t,r)||e.has(t,r)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){n.default(e,t,r[t])}))}return e};var r,n=(r=a("hKHmD"))&&r.__esModule?r:{default:r}})),a.register("kKOTz",(function(r,n){e(r.exports,"w",(function(){return g})),e(r.exports,"r",(function(){return h}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,f=new WeakMap,p=new WeakMap;var d={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function h(e){d=e(d)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.apply(y(this),r),g(u.get(this))}:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return g(e.apply(y(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,u=(o=e).call.apply(o,[y(this),r].concat(t(s)(i)));return l.set(u,r.sort?r.sort():[r]),g(u)}}function m(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,d):e);var t}function g(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(g(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),p.set(r,t),r;var t,r;if(f.has(e))return f.get(e);var n=m(e);return n!==e&&(f.set(e,n),p.set(n,e)),n}var y=function(e){return p.get(e)}})),a.register("bK1n4",(function(t,r){e(t.exports,"getAnalytics",(function(){return a("8fRTn").getAnalytics})),a("8fRTn")})),a.register("8fRTn",(function(r,n){e(r.exports,"getAnalytics",(function(){return se}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("1t1Wn"),l=a("2TvXO"),f=a("MjY8E"),p=a("kZfxc"),d=a("2xDiJ"),h=a("6ExWU");a("450b8");
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
var v,m="analytics",g=6e4,y="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",b="https://www.googletagmanager.com/gtag/js",k=new(0,p.Logger)("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
function w(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function x(e,t){var r=document.createElement("script");r.src="".concat(b,"?l=").concat(e,"&id=").concat(t),r.async=!0,document.head.appendChild(r)}function _(e,t,r,n,i,a){return I.apply(this,arguments)}function I(){return(I=t(i)(t(l).mark((function e(r,n,i,a,o,s){var u,c,f;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=a[o],e.prev=1,!u){e.next=7;break}return e.next=5,n[u];case 5:e.next=14;break;case 7:return e.next=9,w(i);case 9:if(c=e.sent,!(f=c.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,n[f.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),k.error(e.t0);case 19:r("config",o,s);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function E(e,t,r,n,i){return T.apply(this,arguments)}function T(){return(T=t(i)(t(l).mark((function e(r,n,i,a,o){var s,u,c,f,p,d,h,v,m,g,y;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return u=o.send_to,Array.isArray(u)||(u=[u]),e.next=7,w(i);case 7:c=e.sent,f=!0,p=!1,d=void 0,e.prev=9,h=u[Symbol.iterator]();case 11:if(f=(v=h.next()).done){e.next=24;break}if(m=v.value,g=c.find((function(e){return e.measurementId===m})),!(y=g&&n[g.appId])){e.next=19;break}s.push(y),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:f=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),p=!0,d=e.t0;case 30:e.prev=30,e.prev=31,f||null==h.return||h.return();case 33:if(e.prev=33,!p){e.next=36;break}throw d;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(n)),e.next=41,Promise.all(s);case 41:r("event",a,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),k.error(e.t1);case 47:case"end":return e.stop()}}),e,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function S(e,r,n,a,o){var s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];window[a].push(arguments)};return window[o]&&"function"==typeof window[o]&&(s=window[o]),window[o]=function(e,r,n,a){function o(){return(o=t(i)(t(l).mark((function i(o,s,u){return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"event"!==o){t.next=6;break}return t.next=4,E(e,r,n,s,u);case 4:t.next=12;break;case 6:if("config"!==o){t.next=11;break}return t.next=9,_(e,r,n,a,s,u);case 9:t.next=12;break;case 11:"consent"===o?e("consent","update",u):e("set",s);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),k.error(t.t0);case 17:case"end":return t.stop()}}),i,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,r){return o.apply(this,arguments)}}(s,e,r,n),{gtagCore:s,wrappedGtag:window[o]}}function O(){var e=window.document.getElementsByTagName("script"),t=!0,r=!1,n=void 0;try{for(var i,a=Object.values(e)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.src&&o.src.includes(b))return o}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}return null}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
var C=(v={},t(u)(v,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),t(u)(v,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),t(u)(v,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),t(u)(v,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),t(u)(v,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(u)(v,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(u)(v,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),t(u)(v,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),t(u)(v,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),t(u)(v,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),v),A=new(0,d.ErrorFactory)("analytics","Analytics",C),P=function(){"use strict";function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;t(o)(this,e),this.throttleMetadata=r,this.intervalMillis=n}return t(s)(e,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),e}(),R=new P;function D(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function M(e){return N.apply(this,arguments)}function N(){return(N=t(i)(t(l).mark((function e(r){var n,i,a,o,s,u,c,f;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.appId,a=r.apiKey,o={method:"GET",headers:D(a)},s=y.replace("{app-id}",i),e.next=6,fetch(s,o);case 6:if(200===(u=e.sent).status||304===u.status){e.next=19;break}return c="",e.prev=9,e.next=12,u.json();case 12:f=e.sent,(null===(n=f.error)||void 0===n?void 0:n.message)&&(c=f.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw A.create("config-fetch-failed",{httpStatus:u.status,responseMessage:c});case 19:return e.abrupt("return",u.json());case 20:case"end":return e.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}function L(e){return j.apply(this,arguments)}function j(){return j=t(i)(t(l).mark((function e(r){var n,a,o,s,u,c,f,p,d=arguments;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:R,a=d.length>2?d[2]:void 0,o=r.options,s=o.appId,u=o.apiKey,c=o.measurementId,s){e.next=4;break}throw A.create("no-app-id");case 4:if(u){e.next=8;break}if(!c){e.next=7;break}return e.abrupt("return",{measurementId:c,appId:s});case 7:throw A.create("no-api-key");case 8:return f=n.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new H,setTimeout(t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.abort();case 1:case"end":return e.stop()}}),e)}))),void 0!==a?a:g),e.abrupt("return",U({appId:s,apiKey:u,measurementId:c},f,p,n));case 12:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function U(e,t,r){return F.apply(this,arguments)}function F(){return F=t(i)(t(l).mark((function e(r,n,i){var a,o,s,u,c,f,p,h,v,m,g,y=arguments;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.throttleEndTimeMillis,o=n.backoffCount,s=y.length>3&&void 0!==y[3]?y[3]:R,f=r.appId,p=r.measurementId,e.prev=3,e.next=6,B(i,a);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!p){e.next=13;break}return k.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(p)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===(u=e.t0)||void 0===u?void 0:u.message,"]")),e.abrupt("return",{appId:f,measurementId:p});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,M(r);case 17:return h=e.sent,s.deleteThrottleMetadata(f),e.abrupt("return",h);case 22:if(e.prev=22,e.t1=e.catch(14),V(v=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(f),!p){e.next=32;break}return k.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(p)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==v?void 0:v.message,"]")),e.abrupt("return",{appId:f,measurementId:p});case 32:throw e.t1;case 33:return m=503===Number(null===(c=null==v?void 0:v.customData)||void 0===c?void 0:c.httpStatus)?(0,d.calculateBackoffMillis)(o,s.intervalMillis,30):(0,d.calculateBackoffMillis)(o,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:o+1},s.setThrottleMetadata(f,g),k.debug("Calling attemptFetch again in ".concat(m," millis")),e.abrupt("return",U(r,g,i,s));case 38:case"end":return e.stop()}}),e,null,[[3,8],[14,22]])}))),F.apply(this,arguments)}function B(e,t){return new Promise((function(r,n){var i=Math.max(t-Date.now(),0),a=setTimeout(r,i);e.addEventListener((function(){clearTimeout(a),n(A.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function V(e){if(!(e instanceof d.FirebaseError&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var q,W,H=function(){"use strict";function e(){t(o)(this,e),this.listeners=[]}return t(s)(e,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function z(){return(z=t(i)(t(l).mark((function e(r,n,i,a,o){var s,u;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return r("event",i,a),e.abrupt("return");case 5:return e.next=7,n;case 7:s=e.sent,u=Object.assign(Object.assign({},a),{send_to:s}),r("event",i,u);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){W=e}function J(e){q=e}function G(){return Y.apply(this,arguments)}function Y(){return(Y=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(i)(t(l).mark((function e(){var r;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=6;break}return k.warn(A.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 6:return e.prev=6,e.next=9,(0,d.validateIndexedDBOpenable)();case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(6),k.warn(A.create("indexeddb-unavailable",{errorInfo:null===(r=e.t0)||void 0===r?void 0:r.toString()}).message),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[6,11]])})))).apply(this,arguments)}function Q(){return(Q=t(i)(t(l).mark((function e(r,n,i,a,o,s,u){var f,p,d,h,v,m,g;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(p=L(r)).then((function(e){i[e.measurementId]=e.appId,r.options.measurementId&&e.measurementId!==r.options.measurementId&&k.warn("The measurement ID in the local Firebase config (".concat(r.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return k.error(e)})),n.push(p),d=G().then((function(e){return e?a.getId():void 0})),e.t0=t(c),e.next=8,Promise.all([p,d]);case 8:return e.t1=e.sent,h=(0,e.t0)(e.t1,2),v=h[0],m=h[1],O()||x(s,v.measurementId),W&&(o("consent","default",W),K(void 0)),o("js",new Date),(g=null!==(f=null==u?void 0:u.config)&&void 0!==f?f:{}).origin="firebase",g.update=!0,null!=m&&(g.firebase_id=m),o("config",v.measurementId,g),q&&(o("set",q),J(void 0)),e.abrupt("return",v.measurementId);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */var X,$,Z=function(){"use strict";function e(r){t(o)(this,e),this.app=r}return t(s)(e,[{key:"_delete",value:function(){return delete ee[this.app.options.appId],Promise.resolve()}}]),e}(),ee={},te=[],re={},ne="dataLayer",ie="gtag",ae=!1;function oe(e,t,r){!function(){var e=[];if((0,d.isBrowserExtension)()&&e.push("This is a browser extension environment."),(0,d.areCookiesEnabled)()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),r=A.create("invalid-analytics-context",{errorInfo:t});k.warn(r.message)}}();var n,i,a=e.options.appId;if(!a)throw A.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw A.create("no-api-key");k.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=ee[a])throw A.create("already-exists",{id:a});if(!ae){n=ne,i=[],Array.isArray(window[n])?i=window[n]:window[n]=i;var o=S(ee,te,re,ne,ie),s=o.wrappedGtag,u=o.gtagCore;$=s,X=u,ae=!0}return ee[a]=function(e,t,r,n,i,a,o){return Q.apply(this,arguments)}(e,te,re,t,X,ne,r),new Z(e)}function se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,f.getApp)();e=(0,d.getModularInstance)(e);var t=(0,f._getProvider)(e,m);return t.isInitialized()?t.getImmediate():ue(e)}function ue(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,f._getProvider)(e,m);if(r.isInitialized()){var n=r.getImmediate();if((0,d.deepEqual)(t,r.getOptions()))return n;throw A.create("already-initialized")}var i=r.initialize({options:t});return i}function ce(e,t,r,n){e=(0,d.getModularInstance)(e),function(e,t,r,n,i){return z.apply(this,arguments)}($,ee[e.app.options.appId],t,r,n).catch((function(e){return k.error(e)}))}var le="@firebase/analytics",fe="0.8.0";(0,f._registerComponent)(new(0,h.Component)(m,(function(e,t){var r=t.options;return oe(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),r)}),"PUBLIC")),(0,f._registerComponent)(new(0,h.Component)("analytics-internal",(function(e){try{var t=e.getProvider(m).getImmediate();return{logEvent:function(e,r,n){return ce(t,e,r,n)}}}catch(e){throw A.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),(0,f.registerVersion)(le,fe),(0,f.registerVersion)(le,fe,"esm2017")})),a.register("450b8",(function(e,r){var n,i=a("bpxeT"),o=a("hKHmD"),s=a("8nrFW"),u=a("2TvXO"),c=a("MjY8E"),l=a("6ExWU"),f=a("2xDiJ"),p=a("ajgRO"),d="@firebase/installations",h="0.5.12",v=1e4,m="w:".concat(h),g="FIS_v2",y=36e5,b=(n={},t(o)(n,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),t(o)(n,"not-registered","Firebase Installation is not registered."),t(o)(n,"installation-not-found","Firebase Installation not found."),t(o)(n,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),t(o)(n,"app-offline","Could not process request. Application offline."),t(o)(n,"delete-pending-registration","Can't delete installation while there is a pending registration request."),n),k=new(0,f.ErrorFactory)("installations","Installations",b);function w(e){return e instanceof f.FirebaseError&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function x(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function _(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function I(e,t){return E.apply(this,arguments)}function E(){return(E=t(i)(t(u).mark((function e(r,n){var i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",k.create("request-failed",{requestName:r,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S(e,t){var r=t.refreshToken,n=T(e);return n.append("Authorization",function(e){return"".concat(g," ").concat(e)}(r)),n}function O(e){return C.apply(this,arguments)}function C(){return(C=t(i)(t(u).mark((function e(r){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(!((n=e.sent).status>=500&&n.status<600)){e.next=5;break}return e.abrupt("return",r());case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return P.apply(this,arguments)}function P(){return(P=
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
t(i)(t(u).mark((function e(r,n){var i,a,o,s,c,l,f,p,d,h,v,y;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.appConfig,a=r.heartbeatServiceProvider,o=n.fid,s=x(i),c=T(i),!(l=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(f=e.sent)&&c.append("x-firebase-client",f);case 9:return p={fid:o,authVersion:g,appId:i.appId,sdkVersion:m},d={method:"POST",headers:c,body:JSON.stringify(p)},e.next=13,O((function(){return fetch(s,d)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return v=e.sent,y={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:_(v.authToken)},e.abrupt("return",y);case 22:return e.next=24,I("Create Installation",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function R(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
var D=/^[cdef][\w-]{21}$/;function M(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var r=function(e){return(r=e,btoa((n=String).fromCharCode.apply(n,t(s)(r))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var r,n}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */(e);return D.test(r)?r:""}catch(e){return""}}function N(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */var L=new Map;function j(e,t){var r=N(e);U(r,t),function(e,t){var r=B();r&&r.postMessage({key:e,fid:t});V()}(r,t)}function U(e,t){var r=L.get(e);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}var F=null;function B(){return!F&&"BroadcastChannel"in self&&((F=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){U(e.data.key,e.data.fid)}),F}function V(){0===L.size&&F&&(F.close(),F=null)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */var q="firebase-installations-store",W=null;function H(){return W||(W=(0,p.openDB)("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(q)}})),W}function z(e,t){return K.apply(this,arguments)}function K(){return(K=t(i)(t(u).mark((function e(r,n){var i,a,o,s,c;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=N(r),e.next=3,H();case 3:return a=e.sent,o=a.transaction(q,"readwrite"),s=o.objectStore(q),e.next=8,s.get(i);case 8:return c=e.sent,e.next=11,s.put(n,i);case 11:return e.next=13,o.done;case 13:return c&&c.fid===n.fid||j(r,n.fid),e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return G.apply(this,arguments)}function G(){return(G=t(i)(t(u).mark((function e(r){var n,i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N(r),e.next=3,H();case 3:return i=e.sent,a=i.transaction(q,"readwrite"),e.next=7,a.objectStore(q).delete(n);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t){return Q.apply(this,arguments)}function Q(){return(Q=t(i)(t(u).mark((function e(r,n){var i,a,o,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=N(r),e.next=3,H();case 3:return a=e.sent,o=a.transaction(q,"readwrite"),s=o.objectStore(q),e.next=8,s.get(i);case 8:if(c=e.sent,void 0!==(l=n(c))){e.next=15;break}return e.next=13,s.delete(i);case 13:e.next=17;break;case 15:return e.next=17,s.put(l,i);case 17:return e.next=19,o.done;case 19:return!l||c&&c.fid===l.fid||j(r,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){return $.apply(this,arguments)}function $(){return($=
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
t(i)(t(u).mark((function e(r){var n,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Y(r.appConfig,(function(e){var t=Z(e),i=ee(r,t);return n=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,n;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:n});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return ae(e||{fid:M(),registrationStatus:0})}function ee(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(k.create("app-offline"))};var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=function(e,t){return te.apply(this,arguments)}(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:re(e)}:{installationEntry:t}}function te(){return(te=t(i)(t(u).mark((function e(r,n){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(r,n);case 3:return i=e.sent,e.abrupt("return",z(r.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!w(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,J(r.appConfig);case 12:e.next=16;break;case 14:return e.next=16,z(r.appConfig,{fid:n.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function re(e){return ne.apply(this,arguments)}function ne(){return(ne=t(i)(t(u).mark((function e(r){var n,i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(r.appConfig);case 2:n=e.sent;case 3:if(1!==n.registrationStatus){e.next=11;break}return e.next=6,R(100);case 6:return e.next=8,ie(r.appConfig);case 8:n=e.sent,e.next=3;break;case 11:if(0!==n.registrationStatus){e.next=22;break}return e.next=14,X(r);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",n);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return Y(e,(function(e){if(!e)throw k.create("installation-not-found");return ae(e)}))}function ae(e){return 1===(t=e).registrationStatus&&t.registrationTime+v<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function oe(e,t){return se.apply(this,arguments)}function se(){return(se=
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
t(i)(t(u).mark((function e(r,n){var i,a,o,s,c,l,f,p,d,h,v;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.appConfig,a=r.heartbeatServiceProvider,o=ue(i,n),s=S(i,n),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&s.append("x-firebase-client",l);case 9:return f={installation:{sdkVersion:m,appId:i.appId}},p={method:"POST",headers:s,body:JSON.stringify(f)},e.next=13,O((function(){return fetch(o,p)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return h=e.sent,v=_(h),e.abrupt("return",v);case 22:return e.next=24,I("Generate Auth Token",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e,t){var r=t.fid;return"".concat(x(e),"/").concat(r,"/authTokens:generate")}function ce(e){return le.apply(this,arguments)}function le(){return le=
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
t(i)(t(u).mark((function e(r){var n,i,a,o,s=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]&&s[1],e.next=4,Y(r.appConfig,(function(e){if(!me(e))throw k.create("not-registered");var t=e.authToken;if(!n&&ge(t))return e;if(1===t.requestStatus)return i=fe(r,n),e;if(!navigator.onLine)throw k.create("app-offline");var a=ye(e);return i=he(r,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)}))),le.apply(this,arguments)}function fe(e,t){return pe.apply(this,arguments)}function pe(){return(pe=t(i)(t(u).mark((function e(r,n){var i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(r.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,R(100);case 6:return e.next=8,de(r.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",ce(r,n));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e){return Y(e,(function(e){if(!me(e))throw k.create("not-registered");var t,r=e.authToken;return 1===(t=r).requestStatus&&t.requestTime+v<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function he(e,t){return ve.apply(this,arguments)}function ve(){return(ve=t(i)(t(u).mark((function e(r,n){var i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe(r,n);case 3:return i=e.sent,a=Object.assign(Object.assign({},n),{authToken:i}),e.next=7,z(r.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!w(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,J(r.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}),e.next=20,z(r.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function me(e){return void 0!==e&&2===e.registrationStatus}function ge(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+y}(e)}function ye(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function be(){return(be=
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
t(i)(t(u).mark((function e(r){var n,i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r,e.next=3,X(n);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):ce(n).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(){return ke=
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
t(i)(t(u).mark((function e(r){var n,i,a,o=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]&&o[1],i=r,e.next=4,we(i);case 4:return e.next=6,ce(i,n);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),e)}))),ke.apply(this,arguments)}function we(e){return xe.apply(this,arguments)}function xe(){return(xe=t(i)(t(u).mark((function e(r){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(r);case 2:if(!(n=e.sent.registrationPromise)){e.next=6;break}return e.next=6,n;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _e(e){return k.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var Ie="installations",Ee=function(e){var t=e.getProvider("app").getImmediate(),r=
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
function(e){if(!e||!e.options)throw _e("App Configuration");if(!e.name)throw _e("App Name");var t=!0,r=!1,n=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw _e(o)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:r,heartbeatServiceProvider:(0,c._getProvider)(t,"heartbeat"),_delete:function(){return Promise.resolve()}}},Te=function(e){var t=e.getProvider("app").getImmediate(),r=(0,c._getProvider)(t,Ie).getImmediate(),n={getId:function(){return function(e){return be.apply(this,arguments)}(r)},getToken:function(e){return function(e){return ke.apply(this,arguments)}(r,e)}};return n};(0,c._registerComponent)(new(0,l.Component)(Ie,Ee,"PUBLIC")),(0,c._registerComponent)(new(0,l.Component)("installations-internal",Te,"PRIVATE")),(0,c.registerVersion)(d,h),(0,c.registerVersion)(d,h,"esm2017")})),a.register("3SEMc",(function(t,r){e(t.exports,"getAuth",(function(){return a("ewipB").n})),e(t.exports,"onAuthStateChanged",(function(){return a("ewipB").v})),e(t.exports,"signOut",(function(){return a("ewipB").y})),e(t.exports,"createUserWithEmailAndPassword",(function(){return a("ewipB").a5})),e(t.exports,"signInWithEmailAndPassword",(function(){return a("ewipB").a6})),e(t.exports,"GoogleAuthProvider",(function(){return a("ewipB").Q})),e(t.exports,"signInWithPopup",(function(){return a("ewipB").c})),a("eMcUM")})),a.register("eMcUM",(function(t,r){e(t.exports,"GoogleAuthProvider",(function(){return a("ewipB").Q})),e(t.exports,"createUserWithEmailAndPassword",(function(){return a("ewipB").a5})),e(t.exports,"getAuth",(function(){return a("ewipB").n})),e(t.exports,"onAuthStateChanged",(function(){return a("ewipB").v})),e(t.exports,"signInWithEmailAndPassword",(function(){return a("ewipB").a6})),e(t.exports,"signInWithPopup",(function(){return a("ewipB").c})),e(t.exports,"signOut",(function(){return a("ewipB").y})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("ewipB")})),a.register("ewipB",(function(r,n){e(r.exports,"Q",(function(){return yt})),e(r.exports,"a5",(function(){return Nt})),e(r.exports,"a6",(function(){return jt})),e(r.exports,"v",(function(){return Ut})),e(r.exports,"y",(function(){return Ft})),e(r.exports,"c",(function(){return Ar})),e(r.exports,"n",(function(){return En}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),f=a("fVNic"),p=a("eYQtU"),d=a("1t1Wn"),h=a("8nrFW"),v=a("2MbLg"),m=a("2TvXO"),g=a("2xDiJ"),y=a("MjY8E"),b=a("4tSb9"),k=a("kZfxc"),w=a("6ExWU");function x(){return t(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var _=x,I=new(0,g.ErrorFactory)("auth","Firebase",x()),E=new(0,k.Logger)("@firebase/auth");function T(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;E.logLevel<=k.LogLevel.ERROR&&(a=E).error.apply(a,["Auth (".concat(y.SDK_VERSION,"): ").concat(e)].concat(t(h)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function S(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw P.apply(void 0,[e].concat(t(h)(n)))}function O(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return P.apply(void 0,[e].concat(t(h)(n)))}function C(e,r,n){var i=Object.assign(Object.assign({},_()),t(c)({},r,n));return new(0,g.ErrorFactory)("auth","Firebase",i).create(r,{appName:e.name})}function A(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&S(e,"argument-error"),C(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function P(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=n[0],u=t(h)(n.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(t(h)(u)))}return(a=I).create.apply(a,[e].concat(t(h)(n)))}function R(e,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!e)throw P.apply(void 0,[r].concat(t(h)(i)))}function D(e){var t="INTERNAL ASSERTION FAILED: "+e;throw T(t),new Error(t)}function M(e,t){e||D(t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var N=new Map;function L(e){M(e instanceof Function,"Expected a class definition");var t=N.get(e);return t?(M(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,N.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function j(e,t){var r=(0,y._getProvider)(e,"auth");if(r.isInitialized()){var n=r.getImmediate(),i=r.getOptions();if((0,g.deepEqual)(i,null!=t?t:{}))return n;S(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function F(){return"http:"===B()||"https:"===B()}function B(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var V=function(){"use strict";function e(r,n){t(s)(this,e),this.shortDelay=r,this.longDelay=n,M(n>r,"Short delay should be less than long delay!"),this.isMobile=(0,g.isMobileCordova)()||(0,g.isReactNative)()}return t(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(F()||(0,g.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function q(e,t){M(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var W,H=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void D("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void D("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void D("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),z=(W={},t(c)(W,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(c)(W,"MISSING_CUSTOM_TOKEN","internal-error"),t(c)(W,"INVALID_IDENTIFIER","invalid-email"),t(c)(W,"MISSING_CONTINUE_URI","internal-error"),t(c)(W,"INVALID_PASSWORD","wrong-password"),t(c)(W,"MISSING_PASSWORD","internal-error"),t(c)(W,"EMAIL_EXISTS","email-already-in-use"),t(c)(W,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(c)(W,"INVALID_IDP_RESPONSE","invalid-credential"),t(c)(W,"INVALID_PENDING_TOKEN","invalid-credential"),t(c)(W,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(c)(W,"MISSING_REQ_TYPE","internal-error"),t(c)(W,"EMAIL_NOT_FOUND","user-not-found"),t(c)(W,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(c)(W,"EXPIRED_OOB_CODE","expired-action-code"),t(c)(W,"INVALID_OOB_CODE","invalid-action-code"),t(c)(W,"MISSING_OOB_CODE","internal-error"),t(c)(W,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(c)(W,"INVALID_ID_TOKEN","invalid-user-token"),t(c)(W,"TOKEN_EXPIRED","user-token-expired"),t(c)(W,"USER_NOT_FOUND","user-token-expired"),t(c)(W,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(c)(W,"INVALID_CODE","invalid-verification-code"),t(c)(W,"INVALID_SESSION_INFO","invalid-verification-id"),t(c)(W,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(c)(W,"MISSING_SESSION_INFO","missing-verification-id"),t(c)(W,"SESSION_EXPIRED","code-expired"),t(c)(W,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(c)(W,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(c)(W,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(c)(W,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(c)(W,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(c)(W,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(c)(W,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(c)(W,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(c)(W,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(c)(W,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(c)(W,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),W),K=new V(3e4,6e4);function J(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function G(e,t,r,n){return Y.apply(this,arguments)}function Y(){return Y=t(o)(t(m).mark((function e(r,n,i,a){var s,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",Q(r,s,t(o)(t(m).mark((function e(){var o,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===n?s=a:o={body:JSON.stringify(a)}),u=(0,g.querystring)(Object.assign({key:r.config.apiKey},s)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",H.fetch()(ee(r,r.config.apiHost,i,u),Object.assign({method:n,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function Q(e,t,r){return X.apply(this,arguments)}function X(){return(X=t(o)(t(m).mark((function e(r,n,i){var a,o,s,u,c,l,f,p,h;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r._canInitEmulator=!1,a=Object.assign(Object.assign({},z),n),e.prev=2,o=new te(r),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw re(r,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=t(d)(c.split(" : "),2),f=l[0],p=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){e.next=23;break}throw re(r,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){e.next=27;break}throw re(r,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){e.next=29;break}throw re(r,"user-disabled",u);case 29:if(h=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!p){e.next=34;break}throw C(r,h,p);case 34:S(r,h);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof g.FirebaseError)){e.next=41;break}throw e.t0;case 41:S(r,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function $(e,t,r,n){return Z.apply(this,arguments)}function Z(){return Z=t(o)(t(m).mark((function e(r,n,i,a){var o,s,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,G(r,n,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&S(r,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}function ee(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?q(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var te=function(){"use strict";function e(r){var n=this;t(s)(this,e),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(O(r.auth,"network-request-failed"))}),K.get())}))}return t(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function re(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=O(e,t,n);return i.customData._tokenResponse=r,i}function ne(e,t){return ie.apply(this,arguments)}function ie(){return(ie=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,t){return oe.apply(this,arguments)}function oe(){return(oe=t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function se(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ue(){return ue=t(o)(t(m).mark((function e(r){var n,i,a,o,s,u,c=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]&&c[1],i=(0,g.getModularInstance)(r),e.next=4,i.getIdToken(n);case 4:return a=e.sent,R((o=le(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:se(ce(o.auth_time)),issuedAtTime:se(ce(o.iat)),expirationTime:se(ce(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}function ce(e){return 1e3*Number(e)}function le(e){var r,n=t(d)(e.split("."),3),i=n[0],a=n[1],o=n[2];if(void 0===i||void 0===a||void 0===o)return T("JWT malformed, contained fewer than 3 sections"),null;try{var s=(0,g.base64Decode)(a);return s?JSON.parse(s):(T("Failed to decode base64 JWT payload"),null)}catch(e){return T("Caught error parsing JWT payload as JSON",null===(r=e)||void 0===r?void 0:r.toString()),null}}function fe(e,t){return pe.apply(this,arguments)}function pe(){return pe=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(o)(t(m).mark((function e(r,n){var i=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof g.FirebaseError&&de(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),pe.apply(this,arguments)}function de(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var he=function(){"use strict";function e(r){t(s)(this,e),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(e),n=this;this.timerId=setTimeout(t(o)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),e)}))),r)}}},{key:"iteration",value:function(){var e=this;return t(o)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,e.user.getIdToken(!0);case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(n=t.t0)||void 0===n?void 0:n.code)&&e.schedule(!0),t.abrupt("return");case 10:e.schedule();case 11:case"end":return t.stop()}}),r,null,[[1,6]])})))()}}]),e}(),ve=function(){"use strict";function e(r,n){t(s)(this,e),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return t(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=se(this.lastLoginAt),this.creationTime=se(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function me(e){return ge.apply(this,arguments)}function ge(){return(ge=
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
t(o)(t(m).mark((function e(r){var n,i,a,o,s,u,c,l,f,p,d;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return a=e.sent,e.next=7,fe(r,ae(i,{idToken:a}));case 7:R(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],r._notifyReloadListener(s),u=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?ke(s.providerUserInfo):[],c=be(r.providerData,u),l=r.isAnonymous,f=!(r.email&&s.passwordHash||(null==c?void 0:c.length)),p=!!l&&f,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ve(s.createdAt,s.lastLoginAt),isAnonymous:p},Object.assign(r,d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(){return(ye=t(o)(t(m).mark((function e(r){var n;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,g.getModularInstance)(r),e.next=3,me(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(e,r){var n=e.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return t(h)(n).concat(t(h)(r))}function ke(e){return e.map((function(e){var t=e.providerId,r=(0,b.__rest)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function we(e,t){return xe.apply(this,arguments)}function xe(){return(xe=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(o)(t(m).mark((function e(r,n){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(r,{},t(o)(t(m).mark((function e(){var i,a,o,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,g.querystring)({grant_type:"refresh_token",refresh_token:n}).slice(1),a=r.config,o=a.tokenApiHost,s=a.apiKey,u=ee(r,o,"/v1/token","key=".concat(s)),e.next=5,r._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",H.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var _e=function(){"use strict";function e(){t(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){R(e.idToken,"internal-error"),R(void 0!==e.idToken,"internal-error"),R(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,R(r=le(t),"internal-error"),R(void 0!==r.exp,"internal-error"),R(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(o)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(R(!n.accessToken||n.refreshToken,e,"user-token-expired"),r||!n.accessToken||n.isExpired){t.next=3;break}return t.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){t.next=7;break}return t.next=6,n.refresh(e,n.refreshToken);case 6:return t.abrupt("return",n.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,r){var n=this;return t(o)(t(m).mark((function i(){var a,o,s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,we(e,r);case 2:a=t.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,n.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return D("not implemented")}}],[{key:"fromJSON",value:function(t,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new e;return n&&(R("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),i&&(R("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(R("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ie(e,t){R("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ee=function(){"use strict";function e(r){t(s)(this,e);var n=r.uid,i=r.auth,a=r.stsTokenManager,o=(0,b.__rest)(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new he(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?t(h)(o.providerData):[],this.metadata=new ve(o.createdAt||void 0,o.lastLoginAt||void 0)}return t(u)(e,[{key:"getIdToken",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe(r,r.stsTokenManager.getToken(r.auth,e));case 2:if(R(i=t.sent,r.auth,"internal-error"),r.accessToken===i){t.next=9;break}return r.accessToken=i,t.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ue.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ye.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(o)(t(m).mark((function i(){var a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!1,e.idToken&&e.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(e),a=!0),!r){t.next=5;break}return t.next=5,me(n);case 5:return t.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(o)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return n=t.sent,t.next=5,fe(e,ne(e.auth,{idToken:n}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,r){var n,i,a,o,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,p=null!==(i=r.email)&&void 0!==i?i:void 0,d=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,k=r.emailVerified,w=r.isAnonymous,x=r.providerData,_=r.stsTokenManager;R(b&&_,t,"internal-error");var I=_e.fromJSON(this.name,_);R("string"==typeof b,t,"internal-error"),Ie(f,t.name),Ie(p,t.name),R("boolean"==typeof k,t,"internal-error"),R("boolean"==typeof w,t,"internal-error"),Ie(d,t.name),Ie(h,t.name),Ie(v,t.name),Ie(m,t.name),Ie(g,t.name),Ie(y,t.name);var E=new e({uid:b,auth:t,email:p,emailVerified:k,displayName:f,isAnonymous:w,photoURL:h,phoneNumber:d,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(E.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(o)(t(m).mark((function a(){var o,s;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new _e).updateFromServerResponse(n),s=new e({uid:n.localId,auth:r,stsTokenManager:o,isAnonymous:i}),t.next=5,me(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),a)})))()}}]),e}(),Te=function(){"use strict";function e(){t(s)(this,e),this.type="NONE",this.storage={}}return t(u)(e,[{key:"_isAvailable",value:function(){return t(o)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,r){var n=this;return t(o)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.storage[e]=r;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),n)})))()}},{key:"_remove",value:function(e){var r=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete r.storage[e];case 1:case"end":return t.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
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
 */Te.type="NONE";var Se=Te;
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Oe(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var Ce=function(){"use strict";function e(r,n,i){t(s)(this,e),this.persistence=r,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Oe(this.userKey,o.apiKey,u),this.fullPersistenceKey=Oe("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(o)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return n=t.sent,t.abrupt("return",n?Ee._fromJSON(e.auth,n):null);case 4:case"end":return t.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,r.getCurrentUser();case 4:return i=t.sent,t.next=7,r.removeCurrentUser();case 7:if(r.persistence=e,!i){t.next=10;break}return t.abrupt("return",r.setCurrentUser(i));case 10:case"end":return t.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(o)(t(m).mark((function a(){var s,u,c,l,f,p,d,h,v,g,y,b,k;return t(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new e(L(Se),r,i));case 2:return a.next=4,Promise.all(n.map(function(){var e=t(o)(t(m).mark((function e(r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||L(Se),c=Oe(i,r.config.apiKey,r.name),l=null,f=!0,p=!1,d=void 0,a.prev=9,h=n[Symbol.iterator]();case 11:if(f=(v=h.next()).done){a.next=29;break}return g=v.value,a.prev=13,a.next=16,g._get(c);case 16:if(!(y=a.sent)){a.next=22;break}return b=Ee._fromJSON(r,y),g!==u&&(l=b),u=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),p=!0,d=a.t1;case 35:a.prev=35,a.prev=36,f||null==h.return||h.return();case 38:if(a.prev=38,!p){a.next=41;break}throw d;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new e(u,r,i));case 46:if(u=k[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var e=t(o)(t(m).mark((function e(r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===u){e.next=8;break}return e.prev=1,e.next=4,r._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,r,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ae(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Pe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Le(t))return"Blackberry";if(je(t))return"Webos";if(Re(t))return"Safari";if((t.includes("chrome/")||De(t))&&!t.includes("edge/"))return"Chrome";if(Ne(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/firefox\//i.test(e)}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/crios\//i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iemobile/i.test(e)}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/android/i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/blackberry/i.test(e)}function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/webos/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Fe(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Be(){return(0,g.isIE)()&&10===document.documentMode}function Ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(e)||Ne(e)||je(e)||Le(e)||/windows phone/i.test(e)||Me(e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function qe(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ae((0,g.getUA)());break;case"Worker":t="".concat(Ae((0,g.getUA)()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(y.SDK_VERSION,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */var We=function(){"use strict";function e(r){t(s)(this,e),this.auth=r,this.queue=[]}return t(u)(e,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i,a,o,s,u,c,l,f,p,d,h,v,g,y;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.auth.currentUser!==e){t.next=3;break}return t.abrupt("return");case 3:a=[],t.prev=4,o=!0,s=!1,u=void 0,t.prev=6,c=r.queue[Symbol.iterator]();case 8:if(o=(l=c.next()).done){t.next=16;break}return f=l.value,t.next=12,f(e);case 12:f.onAbort&&a.push(f.onAbort);case 13:o=!0,t.next=8;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),s=!0,u=t.t0;case 22:t.prev=22,t.prev=23,o||null==c.return||c.return();case 25:if(t.prev=25,!s){t.next=28;break}throw u;case 28:return t.finish(25);case 29:return t.finish(22);case 30:t.next=53;break;case 32:for(t.prev=32,t.t1=t.catch(4),a.reverse(),p=!0,d=!1,h=void 0,t.prev=36,v=a[Symbol.iterator]();!(p=(g=v.next()).done);p=!0){y=g.value;try{y()}catch(e){}}t.next=44;break;case 40:t.prev=40,t.t2=t.catch(36),d=!0,h=t.t2;case 44:t.prev=44,t.prev=45,p||null==v.return||v.return();case 47:if(t.prev=47,!d){t.next=50;break}throw h;case 50:return t.finish(47);case 51:return t.finish(44);case 52:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=t.t1)||void 0===i?void 0:i.message});case 53:case"end":return t.stop()}}),n,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),He=function(){"use strict";function e(r,n,i){t(s)(this,e),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ke(this),this.idTokenSubscription=new Ke(this),this.beforeStateQueue=new We(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return t(u)(e,[{key:"_initializeWithPersistence",value:function(e,r){r&&(this._popupRedirectResolver=L(r));var n=this;return this._initializationPromise=this.queue(t(o)(t(m).mark((function i(){var a,o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Ce.create(n,e);case 5:if(n.persistenceManager=t.sent,!n._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,n._popupRedirectResolver._initialize(n);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){t.next=21;break}return t.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(o)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(n=t.sent,e.currentUser||n){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!n||e.currentUser.uid!==n.uid){t.next=12;break}return e._currentUser._assign(n),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(n,!0);case 14:case"end":return t.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i,a,o,s,u,c,l;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,r.assertedPersistence.getCurrentUser();case 3:if(a=t.sent,o=a,s=!1,!e||!r.config.authDomain){t.next=15;break}return t.next=9,r.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,t.next=13,r.tryRedirectSignIn(e);case 13:l=t.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){t.next=17;break}return t.abrupt("return",r.directlySetCurrentUser(null));case 17:if(o._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,r.beforeStateQueue.runMiddleware(o);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),o=a,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(t.t0)}));case 28:if(!o){t.next=32;break}return t.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 32:return t.abrupt("return",r.directlySetCurrentUser(null));case 33:return R(r._popupRedirectResolver,r,"argument-error"),t.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==o._redirectEventId){t.next=38;break}return t.abrupt("return",r.directlySetCurrentUser(o));case 38:return t.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return t.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,r._popupRedirectResolver._completeRedirectFn(r,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,r._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,me(e);case 4:t.next=10;break;case 6:if(t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(i=t.t0)||void 0===i?void 0:i.code)){t.next=10;break}return t.abrupt("return",r.directlySetCurrentUser(null));case 10:return t.abrupt("return",r.directlySetCurrentUser(e));case 11:case"end":return t.stop()}}),n,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?(0,g.getModularInstance)(e):null)&&R(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),t.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return t.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(o)(t(m).mark((function i(){return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&R(n.tenantId===e.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",n.queue(t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.directlySetCurrentUser(e);case 2:n.notifyAuthListeners();case 3:case"end":return t.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),r)})))()}},{key:"setPersistence",value:function(e){var r=this;return this.queue(t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.assertedPersistence.setPersistence(L(e));case 2:case"end":return t.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,g.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,r){var n=this;return t(o)(t(m).mark((function i(){var a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return a=t.sent,t.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.redirectPersistenceManager){t.next=9;break}return R(i=e&&L(e)||r._popupRedirectResolver,r,"argument-error"),t.next=5,Ce.create(r,[L(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=t.sent,t.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=t.sent;case 9:return t.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return t.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i,a;return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(t(o)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(a=r.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(e){var r=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var r=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.currentUser&&r.currentUser!==e&&(r._currentUser._stopProactiveRefresh(),e&&r.isProactiveRefreshEnabled&&e._startProactiveRefresh()),r.currentUser=e,!e){t.next=7;break}return t.next=5,r.assertedPersistence.setCurrentUser(e);case 5:t.next=9;break;case 7:return t.next=9,r.assertedPersistence.removeCurrentUser();case 9:case"end":return t.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qe(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(o)(t(m).mark((function r(){var n,i,a;return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=t(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),r.next=5,null===(n=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=r.sent)&&(i["X-Firebase-Client"]=a),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ze(e){return(0,g.getModularInstance)(e)}var Ke=function(){"use strict";function e(r){var n=this;t(s)(this,e),this.auth=r,this.observer=null,this.addObserver=(0,g.createSubscribe)((function(e){return n.observer=e}))}return t(u)(e,[{key:"next",get:function(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var Je=function(){"use strict";function e(r,n){t(s)(this,e),this.providerId=r,this.signInMethod=n}return t(u)(e,[{key:"toJSON",value:function(){return D("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return D("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return D("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return D("not implemented")}}]),e}();function Ge(e,t){return Ye.apply(this,arguments)}function Ye(){return(Ye=t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qe(e,t){return Xe.apply(this,arguments)}function Xe(){return(Xe=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(r,"POST","/v1/accounts:signInWithPassword",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $e(e,t){return Ze.apply(this,arguments)}function Ze(){return(Ze=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(r,"POST","/v1/accounts:signInWithEmailLink",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function et(e,t){return tt.apply(this,arguments)}function tt(){return(tt=t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(r,"POST","/v1/accounts:signInWithEmailLink",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var rt=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(e,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(s)(this,n),(o=r.call(this,"password",a))._email=e,o._password=i,o._tenantId=u,o}return t(u)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var r=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Qe(e,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",$e(e,{email:r._email,oobCode:r._password}));case 5:S(e,"internal-error");case 6:case"end":return t.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(e,r){var n=this;return t(o)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Ge(e,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",et(e,{idToken:r,email:n._email,oobCode:n._password}));case 5:S(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(Je);function nt(e,t){return it.apply(this,arguments)}function it(){return(it=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(r,"POST","/v1/accounts:signInWithIdp",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var at=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(){var e;return t(s)(this,n),(e=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(u)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return nt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,nt(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,nt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,g.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):S("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=(0,b.__rest)(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(Je);function ot(e,t){return st.apply(this,arguments)}function st(){return(st=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(r,"POST","/v1/accounts:sendVerificationCode",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ut(){return(ut=t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(r,"POST","/v1/accounts:signInWithPhoneNumber",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ct(){return(ct=t(o)(t(m).mark((function e(r,n){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(r,"POST","/v1/accounts:signInWithPhoneNumber",J(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw re(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var lt=t(c)({},"USER_NOT_FOUND","user-not-found");function ft(){return(ft=t(o)(t(m).mark((function e(r,n){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",$(r,"POST","/v1/accounts:signInWithPhoneNumber",J(r,i),lt));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var pt=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(e){var i;return t(s)(this,n),(i=r.call(this,"phone","phone")).params=e,i}return t(u)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ut.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ct.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return ft.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(Je);
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var dt=function(){"use strict";function e(r){var n,i,a,o,u,c;t(s)(this,e);var l=(0,g.querystringDecode)((0,g.extractQuerystring)(r)),f=null!==(n=l.apiKey)&&void 0!==n?n:null,p=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);R(f&&p&&d,"argument-error"),this.apiKey=f,this.operation=d,this.code=p,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return t(u)(e,null,[{key:"parseLink",value:function(t){var r=function(e){var t=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).link,r=t?(0,g.querystringDecode)((0,g.extractQuerystring)(t)).deep_link_id:null,n=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).deep_link_id;return(n?(0,g.querystringDecode)((0,g.extractQuerystring)(n)).link:null)||n||r||t||e}(t);try{return new e(r)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var ht=function(){"use strict";function e(){t(s)(this,e),this.providerId=e.PROVIDER_ID}return t(u)(e,null,[{key:"credential",value:function(e,t){return rt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=dt.parseLink(t);return R(r,"argument-error"),rt._fromEmailAndCode(e,r.code,r.tenantId)}}]),e}();ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var vt=function(){"use strict";function e(r){t(s)(this,e),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return t(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),mt=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(){var e;return t(s)(this,n),(e=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(u)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(h)(this.scopes)}}]),n}(vt),gt=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(){return t(s)(this,n),r.call(this,"facebook.com")}return t(u)(n,null,[{key:"credential",value:function(e){return at._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(mt);
/**
 * @license
 * Copyright 2019 Google LLC
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
 */gt.FACEBOOK_SIGN_IN_METHOD="facebook.com",gt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var yt=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(){var e;return t(s)(this,n),(e=r.call(this,"google.com")).addScope("profile"),e}return t(u)(n,null,[{key:"credential",value:function(e,t){return at._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(mt);yt.GOOGLE_SIGN_IN_METHOD="google.com",yt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var bt=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(){return t(s)(this,n),r.call(this,"github.com")}return t(u)(n,null,[{key:"credential",value:function(e){return at._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(mt);bt.GITHUB_SIGN_IN_METHOD="github.com",bt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var kt=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(){return t(s)(this,n),r.call(this,"twitter.com")}return t(u)(n,null,[{key:"credential",value:function(e,t){return at._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(mt);function wt(e,t){return xt.apply(this,arguments)}function xt(){return(xt=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(r,"POST","/v1/accounts:signUp",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */kt.TWITTER_SIGN_IN_METHOD="twitter.com",kt.PROVIDER_ID="twitter.com";var _t=function(){"use strict";function e(r){t(s)(this,e),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return t(u)(e,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(o)(t(m).mark((function o(){var s,u,c;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee._fromIdTokenResponse(r,i,a);case 2:return s=t.sent,u=It(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:n}),t.abrupt("return",c);case 6:case"end":return t.stop()}}),o)})))()}},{key:"_forOperation",value:function(r,n,i){return t(o)(t(m).mark((function a(){var o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._updateTokensIfNecessary(i,!0);case 2:return o=It(i),t.abrupt("return",new e({user:r,providerId:o,_tokenResponse:i,operationType:n}));case 4:case"end":return t.stop()}}),a)})))()}}]),e}();function It(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var Et=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(e,a,o,u){var c,l;return t(s)(this,n),(c=r.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(t(i)(c),n.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return t(u)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(g.FirebaseError);function Tt(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw Et._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function St(e,t){return Ot.apply(this,arguments)}function Ot(){return Ot=t(o)(t(m).mark((function e(r,n){var i,a,o=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=fe,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",_t._forOperation(r,"link",a));case 14:case"end":return e.stop()}}),e)}))),Ot.apply(this,arguments)}function Ct(e,t){return At.apply(this,arguments)}function At(){return At=
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
t(o)(t(m).mark((function e(r,n){var i,a,o,s,u,c,l,f=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],o=r.auth,s="reauthenticate",e.prev=4,e.next=7,fe(r,Tt(o,s,n,r),i);case 7:return R((u=e.sent).idToken,o,"internal-error"),R(c=le(u.idToken),o,"internal-error"),l=c.sub,R(r.uid===l,o,"user-mismatch"),e.abrupt("return",_t._forOperation(r,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&S(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])}))),At.apply(this,arguments)}function Pt(e,t){return Rt.apply(this,arguments)}function Rt(){return Rt=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(o)(t(m).mark((function e(r,n){var i,a,o,s,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,Tt(r,a,n);case 4:return o=e.sent,e.next=7,_t._fromIdTokenResponse(r,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Rt.apply(this,arguments)}function Dt(e,t){return Mt.apply(this,arguments)}function Mt(){return(Mt=t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pt(ze(r),n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Nt(e,t,r){return Lt.apply(this,arguments)}function Lt(){return(Lt=t(o)(t(m).mark((function e(r,n,i){var a,o,s;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ze(r),e.next=3,wt(a,{returnSecureToken:!0,email:n,password:i});case 3:return o=e.sent,e.next=6,_t._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jt(e,t,r){return Dt((0,g.getModularInstance)(e),ht.credential(t,r))}function Ut(e,t,r,n){return(0,g.getModularInstance)(e).onAuthStateChanged(t,r,n)}function Ft(e){return(0,g.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function Bt(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:start",J(e,t))}new WeakMap;var Vt="__sak",qt=function(){"use strict";function e(r,n){t(s)(this,e),this.storageRetriever=r,this.type=n}return t(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Vt,"1"),this.storage.removeItem(Vt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
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
 */var Wt=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(){var e,i;return t(s)(this,n),(e=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,r){return e.onStorageEvent(t,r)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Re(i=(0,g.getUA)())||Ue(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Ve(),e._shouldAllowMigration=!0,e}return t(u)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);Be()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,r){var i=this,a=this;return t(o)(t(m).mark((function o(){return t(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(f)(n.prototype),"_set",i).call(a,e,r);case 2:a.localCache[e]=JSON.stringify(r);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var r=this,i=this;return t(o)(t(m).mark((function a(){var o;return t(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(f)(n.prototype),"_get",r).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var r=this,i=this;return t(o)(t(m).mark((function a(){return t(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(f)(n.prototype),"_remove",r).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(qt);Wt.type="LOCAL";var Ht=Wt,zt=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(){return t(s)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(u)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(qt);
/**
 * @license
 * Copyright 2020 Google LLC
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
 */zt.type="SESSION";var Kt=zt;
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Jt(e){return Promise.all(e.map((r=t(o)(t(m).mark((function e(r){var n;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */var Gt=function(){"use strict";function e(r){t(s)(this,e),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i,a,s,u,c,l,f,p;return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=e).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=r.handlersMap[u])?void 0:l.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),f=Array.from(l).map(function(){var e=t(o)(t(m).mark((function e(r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.next=9,Jt(f);case 9:p=n.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:p});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var r=this.receivers.find((function(e){return e.isListeningto(t)}));if(r)return r;var n=new e(t);return this.receivers.push(n),n}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function Yt(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */Gt.receivers=[];var Qt=function(){"use strict";function e(r){t(s)(this,e),this.target=r,this.handlers=new Set}return t(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(o)(t(m).mark((function a(){var o,s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,a){var c=Yt("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);u={messageChannel:o,onMessage:function(e){var r=e;if(r.data.eventId===c)switch(r.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(r.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:r},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Xt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
function $t(){return void 0!==Xt().WorkerGlobalScope&&"function"==typeof Xt().importScripts}function Zt(){return er.apply(this,arguments)}function er(){return(er=t(o)(t(m).mark((function e(){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
var tr="firebaseLocalStorageDb",rr="firebaseLocalStorage",nr="fbase_key",ir=function(){"use strict";function e(r){t(s)(this,e),this.request=r}return t(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),e}();function ar(e,t){return e.transaction([rr],t?"readwrite":"readonly").objectStore(rr)}function or(){var e=indexedDB.deleteDatabase(tr);return new ir(e).toPromise()}function sr(){var e=indexedDB.open(tr,1);return new Promise((function(r,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(rr,{keyPath:nr})}catch(e){n(e)}})),e.addEventListener("success",t(o)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(rr)){t.next=12;break}return i.close(),t.next=5,or();case 5:return t.t0=r,t.next=8,sr();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:r(i);case 13:case"end":return t.stop()}}),n)}))))}))}function ur(e,t,r){return cr.apply(this,arguments)}function cr(){return(cr=t(o)(t(m).mark((function e(r,n,i){var a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=ar(r,!0).put((a={},t(c)(a,nr,n),t(c)(a,"value",i),a)),e.abrupt("return",new ir(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function lr(e,t){return fr.apply(this,arguments)}function fr(){return(fr=t(o)(t(m).mark((function e(r,n){var i,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ar(r,!1).get(n),e.next=3,new ir(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pr(e,t){var r=ar(e,!0).delete(t);return new ir(r).toPromise()}var dr=function(){"use strict";function e(){t(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(u)(e,[{key:"_openDb",value:function(){var e=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,sr();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),r)})))()}},{key:"_withRetries",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i,a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,r._openDb();case 5:return a=t.sent,t.next=8,e(a);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",$t()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(o)(t(m).mark((function r(){return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.receiver=Gt._getInstance($t()?self:null),e.receiver._subscribe("keyChanged",function(){var r=t(o)(t(m).mark((function r(n,i){var a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(o)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var e=this;return t(o)(t(m).mark((function r(){var n,i,a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Zt();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Qt(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(e){var r=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,r.sender._send("keyChanged",{key:e},r.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(o)(t(m).mark((function e(){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,sr();case 5:return r=e.sent,e.next=8,ur(r,Vt,"1");case 8:return e.next=10,pr(r,Vt);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var r=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,r.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,r){var n=this;return t(o)(t(m).mark((function i(){return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(t(o)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return ur(t,e,r)}));case 2:return n.localCache[e]=r,t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return lr(t,e)}));case 2:return i=t.sent,r.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),n)})))()}},{key:"_remove",value:function(e){var r=this;return t(o)(t(m).mark((function n(){return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(t(o)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return pr(t,e)}));case 2:return delete r.localCache[e],t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var e=this;return t(o)(t(m).mark((function r(){var n,i,a,o,s,u,c,l,f,p,d,h,v,g,y,b,k;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=ar(e,!1).getAll();return new ir(t).toPromise()}));case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)f=l.value,p=f.fbase_key,d=f.value,a.add(p),JSON.stringify(e.localCache[p])!==JSON.stringify(d)&&(e.notifyListeners(p,d),i.push(p));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(h=!0,v=!1,g=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(h=(b=y.next()).done);h=!0)k=b.value,e.localCache[k]&&!a.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,g=t.t1;case 35:t.prev=35,t.prev=36,h||null==y.return||y.return();case 38:if(t.prev=38,!v){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(o)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();dr.type="LOCAL";var hr=dr;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function vr(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:start",J(e,t))}function mr(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=O("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function gr(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
gr("rcb"),new V(3e4,6e4);var yr="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function br(e,t,r){return kr.apply(this,arguments)}function kr(){return(kr=t(o)(t(m).mark((function e(r,n,i){var a,o,s,u,c,l,f,p;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,R("string"==typeof o,r,"argument-error"),R(i.type===yr,r,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return R("enroll"===u.type,r,"internal-error"),e.next=15,Bt(r,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return R("signin"===u.type,r,"internal-error"),R(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,vr(r,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ot(r,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var wr=function(){"use strict";function e(r){t(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=ze(r)}return t(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return br(this.auth,e,(0,g.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return pt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var r=t;return e.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?pt._fromTokenResponse(r,n):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function xr(e,t){return t?L(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */wr.PROVIDER_ID="phone",wr.PHONE_SIGN_IN_METHOD="phone";var _r=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(e){var i;return t(s)(this,n),(i=r.call(this,"custom","custom")).params=e,i}return t(u)(n,[{key:"_getIdTokenResponse",value:function(e){return nt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return nt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return nt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Je);function Ir(e){return Pt(e.auth,new _r(e),e.bypassAuthState)}function Er(e){var t=e.auth,r=e.user;return R(r,t,"internal-error"),Ct(r,new _r(e),e.bypassAuthState)}function Tr(e){return Sr.apply(this,arguments)}function Sr(){return(Sr=t(o)(t(m).mark((function e(r){var n,i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,R(i=r.user,n,"internal-error"),e.abrupt("return",St(i,new _r(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var Or=function(){"use strict";function e(r,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(s)(this,e),this.auth=r,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t(u)(e,[{key:"execute",value:function(){var e,r=this;return new Promise((e=t(o)(t(m).mark((function e(n,i){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,r){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i,a,o,s,u,c,l;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){t.next=4;break}return r.reject(u),t.abrupt("return");case 4:return l={auth:r.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:r.user,bypassAuthState:r.bypassAuthState},t.prev=5,t.t0=r,t.next=9,r.getIdpTask(c)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),r.reject(t.t2);case 16:case"end":return t.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ir;case"linkViaPopup":case"linkViaRedirect":return Tr;case"reauthViaPopup":case"reauthViaRedirect":return Er;default:S(this.auth,"internal-error")}}},{key:"resolve",value:function(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Cr=new V(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ar(e,t,r){return Pr.apply(this,arguments)}function Pr(){return(Pr=t(o)(t(m).mark((function e(r,n,i){var a,o,s;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ze(r),A(r,n,vt),o=xr(a,i),s=new Rr(a,"signInViaPopup",n,o),e.abrupt("return",s.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Rr=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(e,a,o,u,c){var l;return t(s)(this,n),(l=r.call(this,e,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=t(i)(l),l}return t(u)(n,[{key:"executeNotNull",value:function(){var e=this;return t(o)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return R(n=t.sent,e.auth,"internal-error"),t.abrupt("return",n);case 5:case"end":return t.stop()}}),r)})))()}},{key:"onExecution",value:function(){var e=this;return t(o)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return M(1===e.filter.length,"Popup operations only handle one event"),n=Yt(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],n);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=n,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(O(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(O(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(O(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Cr.get())};t()}}]),n}(Or);Rr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var Dr=new Map,Mr=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(this,n),(a=r.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return t(u)(n,[{key:"execute",value:function(){var e=this,r=this;return t(o)(t(m).mark((function i(){var a,o;return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Dr.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Nr(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(l)(t(f)(n.prototype),"execute",e).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Dr.set(r.auth._key(),a);case 21:return r.bypassAuthState||Dr.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var r=this,i=this,a=function(){return t(l)(t(f)(n.prototype),"onAuthEvent",r)};return t(o)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(n=t.sent)){t.next=16;break}return i.user=n,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),r)})))()}},{key:"onExecution",value:function(){return t(o)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),n}(Or);function Nr(e,t){return Lr.apply(this,arguments)}function Lr(){return(Lr=t(o)(t(m).mark((function e(r,n){var i,a,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Fr(n),a=Ur(r),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jr(e,t){Dr.set(e._key(),t)}function Ur(e){return L(e._redirectPersistence)}function Fr(e){return Oe("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Br(e,t){return Vr.apply(this,arguments)}function Vr(){return Vr=t(o)(t(m).mark((function e(r,n){var i,a,o,s,u,c=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=ze(r),o=xr(a,n),s=new Mr(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),Vr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var qr=function(){"use strict";function e(r){t(s)(this,e),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hr(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!Hr(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(O(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Wr(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Wr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Hr(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function zr(e){return Kr.apply(this,arguments)}function Kr(){return Kr=
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
t(o)(t(m).mark((function e(r){var n,i=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",G(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),e)}))),Kr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var Jr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gr=/^https?/;function Yr(){return(Yr=t(o)(t(m).mark((function e(r){var n,i,a,o,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,zr(r);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!Qr(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:S(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Qr(e){var t=U(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!Gr.test(n))return!1;if(Jr.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var Xr=new V(3e4,6e4);function $r(){var e=Xt().___jsl,r=!0,n=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(h)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}var Zr=null;function en(e){return Zr=Zr||function(e){return new Promise((function(t,r){var n,i,a;function o(){$r(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){$r(),r(O(e,"network-request-failed"))},timeout:Xr.get()})}if(null===(i=null===(n=Xt().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Xt().gapi)||void 0===a?void 0:a.load)){var s=gr("iframefcb");return Xt()[s]=function(){gapi.load?o():r(O(e,"network-request-failed"))},mr("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw Zr=null,e}))}(e),Zr}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var tn=new V(5e3,15e3),rn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function an(e){var t=e.config;R(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?q(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:y.SDK_VERSION},i=nn.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat((0,g.querystring)(n).slice(1))}function on(e){return sn.apply(this,arguments)}function sn(){return sn=t(o)(t(m).mark((function e(r){var n,i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,en(r);case 2:return n=e.sent,R(i=Xt().gapi,r,"internal-error"),e.abrupt("return",n.open({where:document.body,url:an(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rn,dontclear:!0},(function(e){return new Promise((n=t(o)(t(m).mark((function n(i,a){var o,s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){Xt().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:o=O(r,"network-request-failed"),s=Xt().setTimeout((function(){a(o)}),tn.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return t.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return e.stop()}}),e)}))),sn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var un={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cn="_blank",ln="http://localhost",fn=function(){"use strict";function e(r){t(s)(this,e),this.window=r,this.associatedEvent=null}return t(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function pn(e,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},un),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,g.getUA)().toLowerCase();n&&(u=De(l)?cn:n),Pe(l)&&(r=r||ln,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,r){var n=t(d)(r,2),i=n[0],a=n[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Fe(l)&&"_self"!==u)return dn(r||"",u),new fn(null);var p=window.open(r||"",u,f);R(p,e,"popup-blocked");try{p.focus()}catch(e){}return new fn(p)}function dn(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */var hn="__/auth/handler",vn="emulator/auth/handler";function mn(e,r,n,i,a,o){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:y.SDK_VERSION,eventId:a};if(r instanceof vt){r.setDefaultLanguage(e.languageCode),s.providerId=r.providerId||"",(0,g.isEmpty)(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,p=Object.entries(o||{})[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var h=t(d)(f.value,2),v=h[0],m=h[1];s[v]=m}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}}if(r instanceof mt){var b=r.getScopes().filter((function(e){return""!==e}));b.length>0&&(s.scopes=b.join(","))}e.tenantId&&(s.tid=e.tenantId);var k,w,x=s,_=!0,I=!1,E=void 0;try{for(var T,S=Object.keys(x)[Symbol.iterator]();!(_=(T=S.next()).done);_=!0){var O=T.value;void 0===x[O]&&delete x[O]}}catch(e){I=!0,E=e}finally{try{_||null==S.return||S.return()}finally{if(I)throw E}}return"".concat((k=e,w=k.config,w.emulator?q(w,vn):"https://".concat(w.authDomain,"/").concat(hn)),"?").concat((0,g.querystring)(x).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
var gn="webStorageSupport",yn=function(){"use strict";function e(){t(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kt,this._completeRedirectFn=Br,this._overrideRedirectResult=jr}return t(u)(e,[{key:"_openPopup",value:function(e,r,n,i){var a=this;return t(o)(t(m).mark((function o(){var s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return M(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=mn(e,r,n,U(),i),t.abrupt("return",pn(e,u,Yt()));case 4:case"end":return t.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,r,n,i){var a=this;return t(o)(t(m).mark((function o(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._originValidation(e);case 2:return o=mn(e,r,n,U(),i),Xt().location.href=o,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(M(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i,a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,on(e);case 2:return i=t.sent,a=new qr(e),i.register("authEvent",(function(t){return R(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[e._key()]={manager:a},r.iframes[e._key()]=i,t.abrupt("return",a);case 8:case"end":return t.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(gn,{type:gn},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),S(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Yr.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Ve()||Re()||Ue()}}]),e}(),bn=yn,kn=function(e){"use strict";t(p)(n,e);var r=t(v)(n);function n(e){var i;return t(s)(this,n),(i=r.call(this,"phone")).credential=e,i}return t(u)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:finalize",J(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:finalize",J(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function e(r){t(s)(this,e),this.factorId=r}return t(u)(e,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return D("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertion",value:function(e){return kn._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var wn,xn="@firebase/auth",_n="0.20.5",In=function(){"use strict";function e(r){t(s)(this,e),this.auth=r,this.internalListeners=new Map}return t(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var r=this;return t(o)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.assertAuthConfigured(),t.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,r.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function En(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getApp)(),t=(0,y._getProvider)(e,"auth");return t.isInitialized()?t.getImmediate():j(e,{popupRedirectResolver:bn,persistence:[hr,Ht,Kt]})}wn="Browser",(0,y._registerComponent)(new(0,w.Component)("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){R(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),R(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:wn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qe(wn)},i=new He(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(L);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),(0,y._registerComponent)(new(0,w.Component)("auth-internal",(function(e){var t=ze(e.getProvider("auth").getImmediate());return new In(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,y.registerVersion)(xn,_n,
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(wn)),(0,y.registerVersion)(xn,_n,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return i(e,t,r)};var r,n=(r=a("2mz0K"))&&r.__esModule?r:{default:r};function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=n.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(r||e):a.value}})(e,t,r)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=a("fVNic"))&&r.__esModule?r:{default:r}})),a.register("4tSb9",(function(t,r){e(t.exports,"__rest",(function(){return n}));function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create})),a.register("4Nugj",(function(t,r){e(t.exports,"refs",(function(){return n}));var n={gallery:document.querySelector(".gallery"),form:document.querySelector(".navigation__form"),notificate:document.querySelector(".navigation__notificate"),backdrop:document.querySelector(".js-backdrop"),watchButton:document.querySelector(".button-watched__modal"),queueButton:document.querySelector(".button-queue__modal"),modal:document.querySelector(".modal__content"),closeModalBtn:document.querySelector(".modal-close"),buttonsContainer:document.querySelector(".buttons-modal"),queueBtnLib:document.querySelector(".button-queue"),watchedBtnLib:document.querySelector(".button-watched"),galleryLib:document.querySelector(".gallery-lib"),fillerContainer:document.querySelector(".filler-container"),theme:document.querySelector(".main"),logoutButton:document.querySelector(".logout"),userImg:document.querySelector(".user__img"),userName:document.querySelector(".user__name"),userInfo:document.querySelector(".user-info"),signupButton:document.querySelector(".signup_button"),loginForm:document.querySelector(".login__form"),singupForm:document.querySelector(".signup__form"),loginGoogle:document.querySelector(".login_google"),signupGoogle:document.querySelector(".signup_google"),signupOpen:document.querySelector(".signup-button-open"),loginOpen:document.querySelector(".login-button-open"),authButtList:document.querySelector(".auth__button-list"),loginDiv:document.querySelector(".login"),singupDiv:document.querySelector(".signup")}})),a.register("3likm",(function(e,t){})),a.register("4smAb",(function(e,t){window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),1e3)}})),a.register("6Sco9",(function(t,r){e(t.exports,"checkStorage",(function(){return u})),e(t.exports,"addToStorage",(function(){return c})),e(t.exports,"watchButtDisOrEn",(function(){return l}));var n=a("4Nugj"),i=a("lqpIw"),o=[],s=[];function u(){localStorage.getItem("Watch")&&(o=JSON.parse(localStorage.getItem("Watch"))),localStorage.getItem("Queue")&&(s=JSON.parse(localStorage.getItem("Queue")))}function c(e){"button-watched__modal"!==e.target.className?"button-queue__modal"!==e.target.className||function(){if("ADD TO QUEUE"===n.refs.queueButton.textContent)return d(),s.push(i.cardObject),void localStorage.setItem("Queue",JSON.stringify(s));if("REMOVE FROM QUEUE"===n.refs.queueButton.textContent){h();var e=!0,t=!1,r=void 0;try{for(var a,o=s[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var u=a.value;if(u.id===i.cardObject.id){var c=s.indexOf(u);s.splice(c,1);localStorage.setItem("Queue",JSON.stringify(s))}}}catch(e){t=!0,r=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw r}}}}():function(){if("ADD TO WATCHED"===n.refs.watchButton.textContent)return f(),o.push(i.cardObject),void localStorage.setItem("Watch",JSON.stringify(o));if("REMOVE FROM WATCH"===n.refs.watchButton.textContent){p();var e=!0,t=!1,r=void 0;try{for(var a,s=o[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var u=a.value;if(u.id===i.cardObject.id){var c=o.indexOf(u);o.splice(c,1);localStorage.setItem("Watch",JSON.stringify(o))}}}catch(e){t=!0,r=e}finally{try{e||null==s.return||s.return()}finally{if(t)throw r}}}}()}function l(){p(),h();var e=!0,t=!1,r=void 0;try{for(var n,a=o[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){if(n.value.id===i.cardObject.id){f();break}}}catch(e){t=!0,r=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw r}}var u=!0,c=!1,l=void 0;try{for(var v,m=s[Symbol.iterator]();!(u=(v=m.next()).done);u=!0){if(v.value.id===i.cardObject.id){d();break}}}catch(e){c=!0,l=e}finally{try{u||null==m.return||m.return()}finally{if(c)throw l}}}function f(){n.refs.watchButton.style.backgroundColor="red",n.refs.watchButton.textContent="REMOVE FROM WATCH"}function p(){n.refs.watchButton.style.backgroundColor="#FF6B01",n.refs.watchButton.textContent="ADD TO WATCHED"}function d(){n.refs.queueButton.style.backgroundColor="pink",n.refs.queueButton.textContent="REMOVE FROM QUEUE"}function h(){n.refs.queueButton.style.backgroundColor="white",n.refs.queueButton.textContent="ADD TO QUEUE"}})),a.register("lqpIw",(function(r,n){e(r.exports,"cardObject",(function(){return i}));var i,o=a("bpxeT"),s=a("2TvXO"),u=a("4Nugj"),c=a("8e989"),l=a("6Sco9");function f(){return(f=t(o)(t(s).mark((function e(r){var n,i;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=deeaaa6f7bb1ec2c1571c017660b3676"));case 3:return n=e.sent,i=n.json(),e.abrupt("return",i);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(){window.removeEventListener("keydown",h),u.refs.backdrop.classList.remove("show-modal")}function d(e){e.currentTarget===e.target&&p()}function h(e){"Escape"===e.code&&p()}u.refs.gallery.addEventListener("click",(function(e){e.preventDefault(),e.target.dataset.id&&function(e){return f.apply(this,arguments)}(e.target.dataset.id).then((function(e){i=e,u.refs.modal.innerHTML="",(0,l.checkStorage)(),(0,l.watchButtDisOrEn)(),window.addEventListener("keydown",h),u.refs.backdrop.classList.add("show-modal"),u.refs.modal.insertAdjacentHTML("afterbegin",(0,c.openModalMovie)(e)),u.refs.backdrop.addEventListener("click",d),u.refs.closeModalBtn.addEventListener("click",p),u.refs.buttonsContainer.addEventListener("click",l.addToStorage)})).catch((function(e){console.log(e)}))}))})),a.register("8e989",(function(t,r){function n(e){var t=e.vote_average,r=e.vote_count,n=e.genres,i=e.original_title,a=e.title,o=e.poster_path,s=e.original_name,u=e.popularity,c=e.overview,l=e.id,f=Math.round(u.toString()),p=n.map((function(e){return e.name})).slice(0,2).join(", ")+", Other";return'<img class="img-modal" src="https://image.tmdb.org/t/p/w500'.concat(o,'" alt="').concat(a,'" data-id=').concat(l,' />\n        <div class="container-modal">\n          <b class="title-modal">').concat(a,'</b>\n          <table class="table">\n            <tr class="table-separator">\n              <th class="table__text">Vote / Votes</th>\n              <th><span class="vote-average">').concat(t,'</span> / <span class="vote-count">').concat(r,'</span></th>\n            </tr>\n            <tr class="table-separator">\n              <th class="table__text">Popularity</th>\n              <th>').concat(f,'</th>\n            </tr>\n            <tr class="table-separator">\n              <th class="table__text">Original Title</th>\n              <th>').concat(i||s,'</th>\n            </tr>\n            <tr class="table-separator">\n              <th class="table__text">Genre</th>\n              <th>').concat(p,'</th>\n            </tr>\n          </table>\n          <b class="title-about__modal">ABOUT</b>\n          <p class="about-text__modal about-scrollbar">').concat(c,"\n          </p>\n        </div>\n      </div>\n    </div>")}e(t.exports,"openModalMovie",(function(){return n}))})),a.register("1fJqo",(function(e,t){var r={openModalBtn:document.querySelector(".backdrop-modal"),closeModalBtn:document.querySelector(".modal-btn"),modal:document.getElementById("modalTeam")};function n(){r.openModalBtn.classList.toggle("is-hidden-modal"),window.addEventListener("keydown",i)}function i(e){"Escape"===e.code&&n()}r.modal.addEventListener("click",(function(e){e.preventDefault(),r.openModalBtn.classList.toggle("is-hidden-modal")})),r.closeModalBtn.addEventListener("click",n)})),a.register("i3Qnx",(function(r,n){e(r.exports,"createMovieCard",(function(){return s}));var i=a("XcJ0g"),o=localStorage.getItem("genres"),s=(JSON.parse(o),function(e){return e.map((function(e){var r=e.poster_path,n=e.title,a=e.name,o=e.release_date,s=e.first_air_date,u=e.genre_ids,c=e.id,l=e.vote_average,f=r?"https://image.tmdb.org/t/p/w500".concat(r):"https://via.placeholder.com/344x486/808080/FFFFFF?text=Sorry,no_image",p=o||s?o||s:"0000-00-00",d=t(i).genres.filter((function(e){var t=e.id;return u.includes(t)})).map((function(e){return e.name})),h=(d.length<=2?d.join(", "):d.slice(0,2).join(", ")+", Other")||"Other",v=l.toString();return'\n                <li class="card__item" data-id="'.concat(c,'">\n                    <a class="card card__link" data-id="').concat(c,'">\n                        <img class="card__img" data-id="').concat(c,"\" src='").concat(f,"' alt='").concat(n||a,'\' loading="lazy"/>\n                        <p class="card__title" data-id="').concat(c,'">').concat(n||a,'</p>\n                        <div class="card__inform" data-id="').concat(c,'">\n                            <p class="card__genres" data-id="').concat(c,'">').concat(h,'</p>\n                            <p class="card__date" data-id="').concat(c,'">\n                              <span></span>| \n                            ').concat(p.slice(0,4),'</p>\n                            <span class="card__vote visually-hidden">').concat(v.slice(0,3),"</span>\n                        </div>\n                    </a>\n                </li>\n            ")})).join("")})})),a.register("XcJ0g",(function(e,t){e.exports=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}')}))}();
//# sourceMappingURL=index-lib.12bbb82a.js.map
