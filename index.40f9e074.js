!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var o,c=a("bpxeT"),i=a("2TvXO"),s=a("3likm"),l=function(e){return e.map((function(e){var t,n=e.poster_path,r=e.title,a=e.name,o=e.release_date,c=e.first_air_date,i=e.genre_ids,l=e.id,u=e.vote_average,d=s.localGenres.filter((function(e){var t=e.id;return i.includes(t)})).map((function(e){return e.name}));t=d.length<=2?d.join(", "):d.slice(0,2).join(", ")+", Other";var f=u.toString();return'\n                <li class="card__item" data-id="'.concat(l,'">\n                    <a class="card card__link" data-id="').concat(l,'">\n                        <img class="card__img" data-id="').concat(l,"\" src='https://image.tmdb.org/t/p/w500").concat(n,"' alt='").concat(r||a,'\' loading="lazy"/>\n                        <p class="card__title" data-id="').concat(l,'">').concat(r||a,'</p>\n                        <div class="card__inform" data-id="').concat(l,'">\n                            <p class="card__genres">').concat(t,'</p>\n                            <p class="card__date">\n                              <span></span>| \n                            ').concat((o||c).slice(0,4),'</p>\n                            <span class="card__vote visually-hidden">').concat(f.slice(0,3),"</span>\n                        </div>\n                    </a>\n                </li>\n            ")})).join("")},u=(c=a("bpxeT"),i=a("2TvXO"),o=e(c)(e(i).mark((function t(n){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.show(),e.next=4,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a&page=".concat(g.currentPage));case 4:return r=e.sent,n.hide(),e.abrupt("return",r.json());case 9:throw e.prev=9,e.t0=e.catch(0),Error(response.statusText);case 12:case"end":return e.stop()}}),t,null,[[0,9]])}))),function(e){return o.apply(this,arguments)}),d=a("4Nugj"),f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var h={};function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){t&&v(e.prototype,t);n&&v(e,n);return e};var p=function(){"use strict";function t(n){var r=n.hidden,a=void 0!==r&&r;e(f)(this,t),this.refs=this.getRefs(),a&&this.hide()}return e(h)(t,[{key:"getRefs",value:function(){var e={};return e.loader=document.querySelector(".loader"),e}},{key:"show",value:function(){this.refs.loader.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.loader.classList.add("is-hidden")}}]),t}(),g={currentPage:1,currentQueryPage:1},m=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(u(b).then((function(e){try{if(g.currentPage===e.total_pages)return d.refs.gallery.insertAdjacentHTML("beforeend",l(e.results)),window.alert("Sorry this is the last page, we do not have any movies for you :("),void y();g.currentPage+=1,d.refs.gallery.insertAdjacentHTML("beforeend",l(e.results))}catch(e){console.log(e)}})),console.log("is intersecting"))}))}),{rootMargin:"0px",threshold:1});function y(){m.unobserve(document.querySelector(".scroll-check"))}m.observe(document.querySelector(".scroll-check"));var b=new p({loader:".loader",hidden:!0});var _=function(){var t=e(c)(e(i).mark((function t(n){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("\n        https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=".concat(g.currentQueryPage,"&include_adult=false&query=").concat(n));case 3:return r=e.sent,g.currentQueryPage+=1,y(),e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(0),Error(response.statusText);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();d=a("4Nugj"),d=a("4Nugj"),new p({loader:".loader",hidden:!0});var w=new p({loader:".loader",hidden:!0}),x="";d.refs.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.navigation__input.value;x=t.trim(),_(x).then((function(e){""===x||0===e.results.length?(d.refs.notificate.classList.remove("navigation__notificate-hidden"),document.getElementById("myForm").reset(),setTimeout((function(){d.refs.notificate.classList.add("navigation__notificate-hidden")}),2500)):d.refs.gallery.innerHTML=l(e.results),w.show()}));new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(y(),_(x).then((function(e){try{d.refs.gallery.insertAdjacentHTML("beforeend",l(e.results))}catch(e){console.log(e)}})))}))}),{rootMargin:"-100px",threshold:1}).observe(document.querySelector(".scroll-check"))}));var E=document.getElementById("modalTeam"),k=document.querySelector(".modal-team");E.addEventListener("click",(function(e){e.preventDefault(),k.classList.toggle("visually-hidden"),k.addEventListener("keydown")})),a("3likm"),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),1e3)};var O;d=a("4Nugj"),c=a("bpxeT"),i=a("2TvXO");function T(e){var t=e.vote_average,n=e.vote_count,r=e.genres,a=e.original_title,o=e.title,c=e.poster_path,i=e.original_name,s=e.popularity,l=e.overview,u=e.id,d=s.toString();return'<img class="img-modal" src="https://image.tmdb.org/t/p/w500'.concat(c,'" alt="" data-id=').concat(u,' />\n        <div class="container-modal">\n          <h1 class="title-modal">').concat(o,'</h1>\n          <table class="table">\n            <tr class="table-separator">\n              <th class="table__text">Vote / Votes</th>\n              <th><span class="vote-average">').concat(t,'</span> / <span class="vote-count">').concat(n,'</span></th>\n            </tr>\n            <tr class="table-separator">\n              <th class="table__text">Popularity</th>\n              <th>').concat(d.slice(0,5),'</th>\n            </tr>\n            <tr class="table-separator">\n              <th class="table__text">Original Title</th>\n              <th>').concat(a||i,'</th>\n            </tr>\n            <tr class="table-separator">\n              <th class="table__text">Genre</th>\n              <th>').concat(r?r.map((function(e){return e.name})).slice(0,2):" ",'</th>\n            </tr>\n          </table>\n          <h2 class="title-about__modal">ABOUT</h2>\n          <p class="about-text__modal">').concat(l,"\n          </p>\n        </div>\n      </div>\n    </div>")}function S(){return(S=e(c)(e(i).mark((function t(n){var r,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=deeaaa6f7bb1ec2c1571c017660b3676"));case 3:return r=e.sent,a=r.json(),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function L(){window.removeEventListener("keydown",C),d.refs.backdrop.classList.remove("show-modal")}function M(e){e.currentTarget===e.target&&L()}function C(e){"Escape"===e.code&&L()}(d=a("4Nugj")).refs.gallery.addEventListener("click",(function(e){e.preventDefault(),function(e){return S.apply(this,arguments)}(e.target.dataset.id).then((function(e){O=e,d.refs.modal.innerHTML="",q(),N(),window.addEventListener("keydown",C),d.refs.backdrop.classList.add("show-modal"),d.refs.modal.insertAdjacentHTML("afterbegin",T(e)),d.refs.backdrop.addEventListener("click",M),d.refs.closeModalBtn.addEventListener("click",L),d.refs.buttonsContainer.addEventListener("click",D)})).catch((function(e){console.log(e)}))}));var j=[],B=[];function q(){localStorage.getItem("Watch")&&(j=JSON.parse(localStorage.getItem("Watch"))),localStorage.getItem("Queue")&&(B=JSON.parse(localStorage.getItem("Queue")))}function D(e){"button-watched__modal"!==e.target.className?"button-queue__modal"!==e.target.className||function(){if("ADD TO QUEUE"===d.refs.queueButton.textContent)return R(),B.push(O),void localStorage.setItem("Queue",JSON.stringify(B));if("REMOVE FROM QUEUE"===d.refs.queueButton.textContent){U();var e=!0,t=!1,n=void 0;try{for(var r,a=B[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var o=r.value;if(o.id===O.id){var c=B.indexOf(o);B.splice(c,1);localStorage.setItem("Queue",JSON.stringify(B))}}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}}():function(){if(console.log(O),"ADD TO WATCHED"===d.refs.watchButton.textContent)return I(),j.push(O),void localStorage.setItem("Watch",JSON.stringify(j));if("REMOVE FROM WATCH"===d.refs.watchButton.textContent){A();var e=!0,t=!1,n=void 0;try{for(var r,a=j[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var o=r.value;if(o.id===O.id){var c=j.indexOf(o);j.splice(c,1);localStorage.setItem("Watch",JSON.stringify(j))}}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}}()}function N(){A(),U();var e=!0,t=!1,n=void 0;try{for(var r,a=j[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){if(r.value.id===O.id){I();break}}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}var o=!0,c=!1,i=void 0;try{for(var s,l=B[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){if(s.value.id===O.id){R();break}}}catch(e){c=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(c)throw i}}}function I(){d.refs.watchButton.style.backgroundColor="red",d.refs.watchButton.textContent="REMOVE FROM WATCH"}function A(){d.refs.watchButton.style.backgroundColor="#FF6B01",d.refs.watchButton.textContent="ADD TO WATCHED"}function R(){d.refs.queueButton.style.backgroundColor="pink",d.refs.queueButton.textContent="REMOVE FROM QUEUE"}function U(){d.refs.queueButton.style.backgroundColor="white",d.refs.queueButton.textContent="ADD TO QUEUE"}}();
//# sourceMappingURL=index.40f9e074.js.map
