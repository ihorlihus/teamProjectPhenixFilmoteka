let e;(async()=>{try{const e=await fetch("\n            https://api.themoviedb.org/3/genre/movie/list?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US\n        ");return await e.json()}catch(e){throw Error(response.statusText)}})().then((t=>{localStorage.setItem("genres",JSON.stringify(t.genres));const n=localStorage.getItem("genres");e=JSON.parse(n)}));const t=t=>t.map((({poster_path:t,title:n,name:a,release_date:o,first_air_date:r,genre_ids:s,id:i,vote_average:c})=>{let l,d=e.filter((({id:e})=>s.includes(e))).map((({name:e})=>e));l=d.length<=2?d.join(", "):d.slice(0,2).join(", ")+", Other";const u=c.toString();return`\n                <li class="card__item" data-id="${i}">\n                    <a class="card card__link" data-id="${i}">\n                        <img class="card__img" data-id="${i}" src='https://image.tmdb.org/t/p/w500${t}' alt='${n||a}' loading="lazy"/>\n                        <p class="card__title" data-id="${i}">${n||a}</p>\n                        <div class="card__inform" data-id="${i}">\n                            <p class="card__genres">${l}</p>\n                            <p class="card__date">\n                              <span></span>| \n                            ${(o||r).slice(0,4)}</p>\n                            <span class="card__vote visually-hidden">${u.slice(0,3)}</span>\n                        </div>\n                    </a>\n                </li>\n            `})).join(""),n=async e=>{try{const t=await fetch(`\n        https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=${r.currentPage}&include_adult=false&query=${e}\n            `);return await t.json()}catch(e){throw Error(response.statusText)}},a={gallery:document.querySelector(".gallery"),form:document.querySelector(".navigation__form"),notificate:document.querySelector(".navigation__notificate"),backdrop:document.querySelector(".js-backdrop"),watchButton:document.querySelector(".button-watched__modal"),queueButton:document.querySelector(".button-queue__modal"),modal:document.querySelector(".modal__content"),closeModalBtn:document.querySelector(".modal-close"),buttonsContainer:document.querySelector(".buttons-modal")};class o{getRefs(){const e={};return e.loader=document.querySelector(".loader"),e}show(){this.refs.loader.classList.remove("is-hidden")}hide(){this.refs.loader.classList.add("is-hidden")}constructor({hidden:e=!1}){this.refs=this.getRefs(),e&&this.hide()}}let r={currentPage:1};const s=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(c.show(),l().then((e=>{try{if(r.currentPage===e.total_pages)return a.gallery.insertAdjacentHTML("beforeend",t(e.results)),window.alert("Sorry this is the last page, we do not have any movies for you :("),c.hide(),void i();r.currentPage+=1,a.gallery.insertAdjacentHTML("beforeend",t(e.results))}catch(e){console.log(e)}})),n().then((e=>{try{if(r.currentPage===e.total_pages)return a.gallery.insertAdjacentHTML("beforeend",t(e.results)),window.alert("Sorry this is the last page, we do not have any movies for you :("),c.hide(),void i();r.currentPage+=1,a.gallery.insertAdjacentHTML("beforeend",t(e.results))}catch(e){console.log(e)}})))}))}),{rootMargin:"-100px",threshold:1});function i(){s.unobserve(document.querySelector(".scroll-check"))}s.observe(document.querySelector(".scroll-check"));const c=new o({loader:".loader",hidden:!0});const l=async()=>{try{return(await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a&page=${r.currentPage}`)).json()}catch(e){throw Error(response.statusText)}},d=new o({loader:".loader",hidden:!0});a.form.addEventListener("submit",(e=>{e.preventDefault();const o=e.target.elements.navigation__input.value.trim();r.currentPage=1,d.show(),n(o).then((e=>{""===o||0===e.results.length?(a.notificate.classList.remove("navigation__notificate-hidden"),document.getElementById("myForm").reset(),setTimeout((()=>{a.notificate.classList.add("navigation__notificate-hidden")}),2500)):a.gallery.innerHTML=t(e.results),d.hide()}))}));const u=document.getElementById("modalTeam"),g=document.querySelector(".modal-team");function h(e){const{vote_average:t,vote_count:n,genres:a,original_title:o,title:r,poster_path:s,original_name:i,popularity:c,overview:l,id:d}=e;return`\n        <img class="img-modal" src="https://image.tmdb.org/t/p/w500${s}" alt="" data-id=${d} />\n        <div class="container-modal">\n          <h1 class="title-modal">${r}</h1>\n          <table class="table">\n            <tr>\n              <th class="table__text">Vote / Votes</th>\n              <th><span class="vote-average">${t}</span> / <span class="vote-count">${n}</span></th>\n            </tr>\n            <tr>\n              <th class="table__text">Popularity</th>\n              <th>${c}</th>\n            </tr>\n            <tr>\n              <th class="table__text">Original Title</th>\n              <th>${o||i}</th>\n            </tr>\n            <tr>\n              <th class="table__text">Genre</th>\n              <th>${a?a.map((e=>e.name)):" "}</th>\n            </tr>\n          </table>\n          <h2 class="title-about__modal">ABOUT</h2>\n          <p class="about-text__modal">${l}\n          </p>\n        </div>\n      </div>\n    </div>`}let m;function f(){window.removeEventListener("keydown",_),a.backdrop.classList.remove("show-modal")}function p(e){e.currentTarget===e.target&&f()}function _(e){"Escape"===e.code&&f()}u.addEventListener("click",(function(e){e.preventDefault(),g.classList.toggle("visually-hidden"),g.addEventListener("keydown")})),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),1e3)},a.gallery.addEventListener("click",(e=>{e.preventDefault(),async function(e){try{return(await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=deeaaa6f7bb1ec2c1571c017660b3676`)).json()}catch(e){console.log(e.message)}}(e.target.dataset.id).then((e=>{m=e,a.modal.innerHTML="",b(),S(),window.addEventListener("keydown",_),a.backdrop.classList.add("show-modal"),a.modal.insertAdjacentHTML("afterbegin",h(e)),a.backdrop.addEventListener("click",p),a.closeModalBtn.addEventListener("click",f),a.buttonsContainer.addEventListener("click",w)})).catch((e=>{console.log(e)}))}));let y=[],v=[];function b(){localStorage.getItem("Watch")&&(y=JSON.parse(localStorage.getItem("Watch"))),localStorage.getItem("Queue")&&(v=JSON.parse(localStorage.getItem("Queue")))}function w(e){"button-watched__modal"!==e.target.className?"button-queue__modal"!==e.target.className||function(){if("ADD TO QUEUE"===a.queueButton.textContent)return L(),v.push(m),void localStorage.setItem("Queue",JSON.stringify(v));if("REMOVE FROM QUEUE"===a.queueButton.textContent){O();for(const e of v)if(e.id===m.id){const t=v.indexOf(e);v.splice(t,1);localStorage.setItem("Queue",JSON.stringify(v))}}}():function(){if(console.log(m),"ADD TO WATCHED"===a.watchButton.textContent)return E(),y.push(m),void localStorage.setItem("Watch",JSON.stringify(y));if("REMOVE FROM WATCH"===a.watchButton.textContent){k();for(const e of y)if(e.id===m.id){const t=y.indexOf(e);y.splice(t,1);localStorage.setItem("Watch",JSON.stringify(y))}}}()}function S(){k(),O();for(const e of y)if(e.id===m.id){E();break}for(const e of v)if(e.id===m.id){L();break}}function E(){a.watchButton.style.backgroundColor="red",a.watchButton.textContent="REMOVE FROM WATCH"}function k(){a.watchButton.style.backgroundColor="#FF6B01",a.watchButton.textContent="ADD TO WATCHED"}function L(){a.queueButton.style.backgroundColor="pink",a.queueButton.textContent="REMOVE FROM QUEUE"}function O(){a.queueButton.style.backgroundColor="white",a.queueButton.textContent="ADD TO QUEUE"}
//# sourceMappingURL=index-lib.c7ca3054.js.map
