!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o("iNWLi");var a=o("bpxeT"),s=o("2TvXO"),i=o("i3Qnx"),c=o("4Nugj"),u=o("8MBJY"),l=o("a2hTj"),d=function(){"use strict";function t(r){var n=r.hidden,o=void 0!==n&&n;e(u)(this,t),this.refs=this.getRefs(),o&&this.hide()}return e(l)(t,[{key:"getRefs",value:function(){var e={};return e.loader=document.querySelector(".loader"),e}},{key:"show",value:function(){this.refs.loader.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.loader.classList.add("is-hidden")}}]),t}(),f={currentPage:1,currentQueryPage:1},h=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(y(g).then((function(e){try{if(f.currentPage===e.total_pages)return c.refs.gallery.insertAdjacentHTML("beforeend",(0,i.createMovieCard)(e.results)),c.refs.gallery.insertAdjacentHTML("afterend","Sorry this is the last page, we do not have any movies for you :("),void v();f.currentPage+=1,c.refs.gallery.insertAdjacentHTML("beforeend",(0,i.createMovieCard)(e.results))}catch(e){console.log(e)}})),console.log("is intersecting"))}))}),{rootMargin:"0px",threshold:1});function v(){h.unobserve(document.querySelector(".scroll-check"))}h.observe(document.querySelector(".scroll-check"));var g=new d({loader:".loader",hidden:!0});var p,y=(p=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(f.currentPage),r.show(),e.next=5,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a&page=".concat(f.currentPage));case 5:return n=e.sent,r.hide(),e.abrupt("return",n.json());case 10:throw e.prev=10,e.t0=e.catch(0),Error(response.statusText);case 13:case"end":return e.stop()}}),t,null,[[0,10]])}))),function(e){return p.apply(this,arguments)}),m=(a=o("bpxeT"),s=o("2TvXO"),function(){var t=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("\n        https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=".concat(f.currentQueryPage,"&include_adult=false&query=").concat(r));case 3:return n=e.sent,f.currentQueryPage+=1,v(),e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(0),Error(response.statusText);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()),b=(i=o("i3Qnx"),c=o("4Nugj"),i=o("i3Qnx"),c=o("4Nugj"),{currentPage:1,currentQueryPage:1}),w=new d({loader:".loader",hidden:!0});var T=new d({loader:".loader",hidden:!0}),L="";c.refs.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.navigation__input.value;L=t.trim(),m(L).then((function(e){""===L||0===e.results.length?(c.refs.notificate.classList.remove("navigation__notificate-hidden"),document.getElementById("myForm").reset(),setTimeout((function(){c.refs.notificate.classList.add("navigation__notificate-hidden")}),5e3)):c.refs.gallery.innerHTML=(0,i.createMovieCard)(e.results),T.show()}));new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(v(),m(L).then((function(e){try{b.currentQueryPage===e.total_pages&&(c.refs.gallery.insertAdjacentHTML("beforeend",(0,i.createMovieCard)(e.results)),c.refs.gallery.insertAdjacentHTML("afterend","Sorry this is the last page, we do not have any movies for you :("),w.hide()),c.refs.gallery.insertAdjacentHTML("beforeend",(0,i.createMovieCard)(e.results))}catch(e){console.log(e)}})))}))}),{rootMargin:"-100px",threshold:1}).observe(document.querySelector(".scroll-check"))}));var x=document.getElementById("modalTeam"),M=document.querySelector(".modal-team");x.addEventListener("click",(function(e){e.preventDefault(),M.classList.toggle("visually-hidden"),M.addEventListener("keydown")})),o("3likm"),o("4smAb"),o("6Sco9"),o("lqpIw"),o("1fJqo");var _=document.querySelector(".top_button");window.onscroll=function(){document.body.scrollTop>700||document.documentElement.scrollTop>700?_.classList.remove("is-hidden"):_.classList.add("is-hidden")},_.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}))}();
//# sourceMappingURL=index.0fd07936.js.map
