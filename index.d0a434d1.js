var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n("2ix2C");var o=n("csVsy"),s=n("krGWQ");class a{getRefs(){const e={};return e.loader=document.querySelector(".loader"),e}show(){this.refs.loader.classList.remove("is-hidden")}hide(){this.refs.loader.classList.add("is-hidden")}constructor({hidden:e=!1}){this.refs=this.getRefs(),e&&this.hide()}}let i={currentPage:1,currentQueryPage:1};const c=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(u(l).then((e=>{try{if(i.currentPage===e.total_pages)return s.refs.gallery.insertAdjacentHTML("beforeend",(0,o.createMovieCard)(e.results)),window.alert("Sorry this is the last page, we do not have any movies for you :("),void d();i.currentPage+=1,s.refs.gallery.insertAdjacentHTML("beforeend",(0,o.createMovieCard)(e.results))}catch(e){console.log(e)}})),console.log("is intersecting"))}))}),{rootMargin:"0px",threshold:1});function d(){c.unobserve(document.querySelector(".scroll-check"))}c.observe(document.querySelector(".scroll-check"));const l=new a({loader:".loader",hidden:!0});const u=async e=>{try{console.log(i.currentPage),e.show();const t=await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a&page=${i.currentPage}`);return e.hide(),t.json()}catch(e){throw Error(response.statusText)}},f=async e=>{try{const t=await fetch(`\n        https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=${i.currentQueryPage}&include_adult=false&query=${e}`);return i.currentQueryPage+=1,d(),await t.json()}catch(e){throw Error(response.statusText)}};o=n("csVsy"),s=n("krGWQ"),o=n("csVsy"),s=n("krGWQ");new a({loader:".loader",hidden:!0});const h=new a({loader:".loader",hidden:!0});let g="";s.refs.form.addEventListener("submit",(e=>{e.preventDefault();let t=e.target.elements.navigation__input.value;g=t.trim(),f(g).then((e=>{""===g||0===e.results.length?(s.refs.notificate.classList.remove("navigation__notificate-hidden"),document.getElementById("myForm").reset(),setTimeout((()=>{s.refs.notificate.classList.add("navigation__notificate-hidden")}),5e3)):s.refs.gallery.innerHTML=(0,o.createMovieCard)(e.results),h.show()}));new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(d(),f(g).then((e=>{try{s.refs.gallery.insertAdjacentHTML("beforeend",(0,o.createMovieCard)(e.results))}catch(e){console.log(e)}})))}))}),{rootMargin:"-100px",threshold:1}).observe(document.querySelector(".scroll-check"))}));const y=document.getElementById("modalTeam"),v=document.querySelector(".modal-team");y.addEventListener("click",(function(e){e.preventDefault(),v.classList.toggle("visually-hidden"),v.addEventListener("keydown")})),n("7zQK0"),n("ioBS9"),n("bOFJ0"),n("TEBOm"),n("6dDzJ");
//# sourceMappingURL=index.d0a434d1.js.map
