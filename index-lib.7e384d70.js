!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function y(){}function g(){}function m(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(T([])));_&&_!==r&&n.call(_,a)&&(w=_);var L=m.prototype=y.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=m,u(L,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a,i,c=(a=t(e)(t(n).mark((function e(){var r;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("\n            https://api.themoviedb.org/3/genre/movie/list?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US\n        ");case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),Error(response.statusText);case 12:case"end":return t.stop()}}),e,null,[[0,9]])}))),function(){return a.apply(this,arguments)});c().then((function(t){localStorage.setItem("genres",JSON.stringify(t.genres));var e=localStorage.getItem("genres");i=JSON.parse(e)}));var u=function(t){return t.map((function(t){var e,r=t.poster_path,n=t.title,o=t.name,a=t.release_date,c=t.first_air_date,u=t.genre_ids,s=t.id,l=t.vote_average,f=i.filter((function(t){var e=t.id;return u.includes(e)})).map((function(t){return t.name}));return e=f.length<=2?f.join(", "):f.slice(0,2).join(", ")+", Other",'\n                <li data-id="'.concat(s,'">\n                    <a class="card__link" data-id="').concat(s,'">\n                        <img class="card__img" data-id="').concat(s,"\" src='https://image.tmdb.org/t/p/w500").concat(r,"' alt='").concat(n||o,'\' loading="lazy"/>\n                        <p class="card__title" data-id="').concat(s,'">').concat(n||o,'</p>\n                        <div class="card__inform" data-id="').concat(s,'">\n                            <p class="card__genres">').concat(e,'</p>\n                            <p class="card__date">').concat((a||c).slice(0,4),'</p>\n                            <span class="card__vote is-hidden">').concat(l,"</span>\n                        </div>\n                    </a>\n                </li>\n            ")})).join("")},s=function(){var r=t(e)(t(n).mark((function e(r){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("\n        https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=1&include_adult=false&query=".concat(r,"\n            "));case 3:return o=t.sent,t.next=6,o.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),Error(response.statusText);case 12:case"end":return t.stop()}}),e,null,[[0,9]])})));return function(t){return r.apply(this,arguments)}}(),l={gallery:document.querySelector(".gallery"),form:document.querySelector(".navigation__form")},f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var d={};function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(t,e,r){e&&h(t.prototype,e);r&&h(t,r);return t};var p=function(){"use strict";function e(r){var n=r.hidden,o=void 0!==n&&n;t(f)(this,e),this.refs=this.getRefs(),o&&this.hide()}return t(d)(e,[{key:"getRefs",value:function(){var t={};return t.loader=document.querySelector(".loader"),t}},{key:"show",value:function(){this.refs.loader.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.loader.classList.add("is-hidden")}}]),e}(),v={currentPage:1},y=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(m().then((function(t){try{v.currentPage+=1,l.gallery.insertAdjacentHTML("beforeend",u(t.results)),g.hide()}catch(t){console.log(t)}})),s().then((function(t){try{v.currentPage+=1,l.gallery.insertAdjacentHTML("beforeend",u(t.results)),g.hide()}catch(t){console.log(t)}})))}))}),{rootMargin:"0px",threshold:1});y.observe(document.querySelector(".scroll-check"));var g=new p({loader:".loader",hidden:!0});var m=function(){var r=t(e)(t(n).mark((function e(){var r;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a");case 3:return r=t.sent,t.abrupt("return",r.json());case 7:throw t.prev=7,t.t0=t.catch(0),Error(response.statusText);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),w=new p({loader:".loader",hidden:!0});l.form.addEventListener("submit",(function(t){t.preventDefault();var e=t.target.elements.navigation__input.value.trim();s(e).then((function(t){""!==e&&0!==t.results.length?(l.gallery.innerHTML=u(t.results),w.show()):window.alert("Please write correct name! ")}))}));var b=document.getElementById("modalTeam"),_=document.querySelector(".modal-team");b.addEventListener("click",(function(t){t.preventDefault(),_.classList.toggle("visually-hidden"),_.addEventListener("keydown")}));var L={openModalBtn:document.querySelector(".modal-open"),closeModalBtn:document.querySelector(".modal-close"),backdrop:document.querySelector(".js-backdrop")};function x(){window.removeEventListener("keydown",E),L.backdrop.classList.remove("show-modal")}function E(t){"Escape"===t.code&&x()}L.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",E),L.backdrop.classList.add("show-modal")})),L.closeModalBtn.addEventListener("click",x),L.backdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&x()})),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),1e3)}}();
//# sourceMappingURL=index-lib.7e384d70.js.map
