var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a.register("7zQK0",(function(e,t){var n,a,r,o;n=e.exports,a="localGenres",r=function(){return s},Object.defineProperty(n,a,{get:r,set:o,enumerable:!0,configurable:!0});let s;localStorage.getItem("genres")||(async()=>{try{const e=await fetch("\n            https://api.themoviedb.org/3/genre/movie/list?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US\n        ");return await e.json()}catch(e){throw Error(response.statusText)}})().then((e=>{localStorage.setItem("genres",JSON.stringify(e.genres));const t=localStorage.getItem("genres");s=JSON.parse(t)}))}));var r=a("7zQK0");const o=e=>e.map((({poster_path:e,title:t,name:n,release_date:a,first_air_date:o,genre_ids:s,id:d,vote_average:i})=>{let c,l=r.localGenres.filter((({id:e})=>s.includes(e))).map((({name:e})=>e));return c=l.length<=2?l.join(", "):l.slice(0,2).join(", ")+", Other",`\n                <li data-id="${d}">\n                    <a class="card__link" data-id="${d}">\n                        <img class="card__img" data-id="${d}" src='https://image.tmdb.org/t/p/w500${e}' alt='${t||n}' loading="lazy"/>\n                        <p class="card__title" data-id="${d}">${t||n}</p>\n                        <div class="card__inform" data-id="${d}">\n                            <p class="card__genres">${c}</p>\n                            <p class="card__date">${(a||o).slice(0,4)}</p>\n                            <span class="card__vote is-hidden">${i}</span>\n                        </div>\n                    </a>\n                </li>\n            `})).join(""),s=async e=>{try{const t=await fetch(`\n        https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=1&include_adult=false&query=${e}\n            `);return await t.json()}catch(e){throw Error(response.statusText)}},d={gallery:document.querySelector(".gallery"),form:document.querySelector(".navigation__form"),notificate:document.querySelector(".navigation__notificate")};class i{getRefs(){const e={};return e.loader=document.querySelector(".loader"),e}show(){this.refs.loader.classList.remove("is-hidden")}hide(){this.refs.loader.classList.add("is-hidden")}constructor({hidden:e=!1}){this.refs=this.getRefs(),e&&this.hide()}}let c={currentPage:1};const l=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(g().then((e=>{try{c.currentPage+=1,d.gallery.insertAdjacentHTML("beforeend",o(e.results)),u.hide()}catch(e){console.log(e)}})),s().then((e=>{try{c.currentPage+=1,d.gallery.insertAdjacentHTML("beforeend",o(e.results)),u.hide()}catch(e){console.log(e)}})))}))}),{rootMargin:"0px",threshold:1});l.observe(document.querySelector(".scroll-check"));const u=new i({loader:".loader",hidden:!0});const g=async()=>{try{return(await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a")).json()}catch(e){throw Error(response.statusText)}},f=new i({loader:".loader",hidden:!0});d.form.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.elements.navigation__input.value.trim();s(t).then((e=>{""!==t&&0!==e.results.length?(d.gallery.innerHTML=o(e.results),f.show()):d.notificate.classList.remove("visually-hidden")}))}));const h=document.getElementById("modalTeam"),m=document.querySelector(".modal-team");h.addEventListener("click",(function(e){e.preventDefault(),m.classList.toggle("visually-hidden"),m.addEventListener("keydown")}));const p={openModalBtn:document.querySelector(".modal-open"),closeModalBtn:document.querySelector(".modal-close"),backdrop:document.querySelector(".js-backdrop")};function y(){window.removeEventListener("keydown",v),p.backdrop.classList.remove("show-modal")}function v(e){"Escape"===e.code&&y()}p.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",v),p.backdrop.classList.add("show-modal")})),p.closeModalBtn.addEventListener("click",y),p.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&y()})),a("7zQK0"),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),1e3)};
//# sourceMappingURL=index-lib.a7b623ea.js.map
