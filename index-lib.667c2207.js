!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?p:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function y(){}function g(){}function m(){}var w={};s(w,a,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(T([])));b&&b!==n&&r.call(b,a)&&(w=b);var L=m.prototype=y.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=m,s(L,"constructor",m),s(m,"constructor",g),g.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(L),s(L,c,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a,i,c=(a=t(e)(t(r).mark((function e(){var n;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("\n            https://api.themoviedb.org/3/genre/movie/list?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US\n        ");case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),Error(response.statusText);case 12:case"end":return t.stop()}}),e,null,[[0,9]])}))),function(){return a.apply(this,arguments)});c().then((function(t){localStorage.setItem("genres",JSON.stringify(t.genres));var e=localStorage.getItem("genres");i=JSON.parse(e)}));var s=function(t){return t.map((function(t){var e,n=t.poster_path,r=t.title,o=t.name,a=t.release_date,c=t.first_air_date,s=t.genre_ids,u=t.id,l=t.vote_average,d=i.filter((function(t){var e=t.id;return s.includes(e)})).map((function(t){return t.name}));e=d.length<=2?d.join(", "):d.slice(0,2).join(", ")+", Other";var f=l.toString();return'\n                <li class="card__item" data-id="'.concat(u,'">\n                    <a class="card card__link" data-id="').concat(u,'">\n                        <img class="card__img" data-id="').concat(u,"\" src='https://image.tmdb.org/t/p/w500").concat(n,"' alt='").concat(r||o,'\' loading="lazy"/>\n                        <p class="card__title" data-id="').concat(u,'">').concat(r||o,'</p>\n                        <div class="card__inform" data-id="').concat(u,'">\n                            <p class="card__genres">').concat(e,'</p>\n                            <p class="card__date">\n                              <span></span>\n                            ').concat((a||c).slice(0,4),'</p>\n                            <span class="card__vote">').concat(f.slice(0,3),"</span>\n                        </div>\n                    </a>\n                </li>\n            ")})).join("")},u=function(){var n=t(e)(t(r).mark((function e(n){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("\n        https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=1&include_adult=false&query=".concat(n,"\n            "));case 3:return o=t.sent,t.next=6,o.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),Error(response.statusText);case 12:case"end":return t.stop()}}),e,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),l={gallery:document.querySelector(".gallery"),form:document.querySelector(".navigation__form"),notificate:document.querySelector(".navigation__notificate"),backdrop:document.querySelector(".js-backdrop"),watchButton:document.querySelector(".button-watched__modal"),queueButton:document.querySelector(".button-queue__modal"),modal:document.querySelector(".modal__content"),closeModalBtn:document.querySelector(".modal-close")},d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var f={};function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(t,e,n){e&&h(t.prototype,e);n&&h(t,n);return t};var p=function(){"use strict";function e(n){var r=n.hidden,o=void 0!==r&&r;t(d)(this,e),this.refs=this.getRefs(),o&&this.hide()}return t(f)(e,[{key:"getRefs",value:function(){var t={};return t.loader=document.querySelector(".loader"),t}},{key:"show",value:function(){this.refs.loader.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.loader.classList.add("is-hidden")}}]),e}(),v={currentPage:1},y=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&m().then((function(t){try{v.currentPage+=1,l.gallery.insertAdjacentHTML("beforeend",s(t.results)),g.hide()}catch(t){console.log(t)}}))}))}),{rootMargin:"0px",threshold:1});y.observe(document.querySelector(".scroll-check"));var g=new p({loader:".loader",hidden:!0});var m=function(){var n=t(e)(t(r).mark((function e(){var n;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a");case 3:return n=t.sent,t.abrupt("return",n.json());case 7:throw t.prev=7,t.t0=t.catch(0),Error(response.statusText);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),w=new p({loader:".loader",hidden:!0});l.form.addEventListener("submit",(function(t){t.preventDefault();var e=t.target.elements.navigation__input.value.trim();u(e).then((function(t){""===e||0===t.results.length?l.notificate.classList.remove("visually-hidden"):l.gallery.innerHTML=s(t.results),w.show()}))}));var _=document.getElementById("modalTeam"),b=document.querySelector(".modal-team");function L(t){var e=t.vote_average,n=t.vote_count,r=t.genres,o=t.original_title,a=t.title,i=t.poster_path,c=t.original_name,s=t.popularity,u=t.overview,l=t.id;return'\n        <img class="img-modal" src="https://image.tmdb.org/t/p/w500'.concat(i,'" alt="" data-id=').concat(l,' />\n        <div class="container-modal">\n          <h1 class="title-modal">').concat(a,'</h1>\n          <table class="table">\n            <tr>\n              <th class="table__text">Vote / Votes</th>\n              <th><span class="vote-average">').concat(e,'</span> / <span class="vote-count">').concat(n,'</span></th>\n            </tr>\n            <tr>\n              <th class="table__text">Popularity</th>\n              <th>').concat(s,'</th>\n            </tr>\n            <tr>\n              <th class="table__text">Original Title</th>\n              <th>').concat(o||c,'</th>\n            </tr>\n            <tr>\n              <th class="table__text">Genre</th>\n              <th>').concat(r?r.map((function(t){return t.name})):" ",'</th>\n            </tr>\n          </table>\n          <h2 class="title-about__modal">ABOUT</h2>\n          <p class="about-text__modal">').concat(u,"\n          </p>\n        </div>\n      </div>\n    </div>")}function x(){return(x=t(e)(t(r).mark((function e(n){var o,a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=deeaaa6f7bb1ec2c1571c017660b3676"));case 3:return o=t.sent,a=o.json(),t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function E(){window.removeEventListener("keydown",j),l.backdrop.classList.remove("show-modal")}function k(t){t.currentTarget===t.target&&E()}function j(t){"Escape"===t.code&&E()}_.addEventListener("click",(function(t){t.preventDefault(),b.classList.toggle("visually-hidden"),b.addEventListener("keydown")})),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),1e3)},l.gallery.addEventListener("click",(function(t){t.preventDefault(),function(t){return x.apply(this,arguments)}(t.target.dataset.id).then((function(t){window.addEventListener("keydown",j),l.backdrop.classList.add("show-modal"),l.modal.innerHTML="",l.modal.insertAdjacentHTML("afterbegin",L(t)),l.backdrop.addEventListener("click",k),l.closeModalBtn.addEventListener("click",E)})).catch((function(t){console.log(t)}))}))}();
//# sourceMappingURL=index-lib.667c2207.js.map
