function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("7zQK0"),a("ioBS9"),a("bOFJ0"),a("TEBOm"),a("6dDzJ");var i=a("krGWQ");a("csVsy"),a("csVsy");var s=a("2eUFK");const l=t=>t.map((({poster_path:t,title:n,name:r,release_date:a,first_air_date:i,id:l,vote_average:o})=>{let c;const d=t?`https://image.tmdb.org/t/p/w500${t}`:"https://via.placeholder.com/344x486",f=a||i?a||i:"0000-00-00";let p=e(s).genres.map((({name:e})=>e));c=p.length<=2?p.join(", "):p.slice(0,2).join(", ")+", Other";const g=c||"Other",u=o.toString();return`\n                <li class="card__item" data-id="${l}">\n                    <a class="card card__link" data-id="${l}">\n                        <img class="card__img" data-id="${l}" src='${d}' alt='${n||r}' loading="lazy"/>\n                        <p class="card__title" data-id="${l}">${n||r}</p>\n                        <div class="card__inform" data-id="${l}">\n                            <p class="card__genres">${g}</p>\n                            <p class="card__date">\n                              <span></span>|\n                            ${f.slice(0,4)}</p>\n                            <span class="card__vote visually-hidden">${u.slice(0,3)}</span>\n                        </div>\n                    </a>\n                </li>\n            `})).join("");i=a("krGWQ");!function(){i.refs.watchedBtnLib.classList.add("button-active");let e=localStorage.getItem("Watch");const t=JSON.parse(e);0!==t.length?(i.refs.gallery.insertAdjacentHTML("afterbegin",l(t)),i.refs.fillerContainer.innerHTML=""):i.refs.fillerContainer.innerHTML='<p class="fill-text">Your list is empty. Choose a movie.</p>'}(),i.refs.watchedBtnLib.addEventListener("click",(function(){i.refs.gallery.innerHTML="";let e=localStorage.getItem("Watch");const t=JSON.parse(e);0!==t.length?(i.refs.gallery.insertAdjacentHTML("afterbegin",l(t)),i.refs.fillerContainer.innerHTML=""):i.refs.fillerContainer.innerHTML='<p class="fill-text">Your list is empty. Choose a movie.</p>'})),i.refs.queueBtnLib.addEventListener("click",(function(){i.refs.watchedBtnLib.classList.remove("button-active"),i.refs.gallery.innerHTML="";let e=localStorage.getItem("Queue");const t=JSON.parse(e);0!==t.length?(i.refs.gallery.insertAdjacentHTML("afterbegin",l(t)),i.refs.fillerContainer.innerHTML=""):i.refs.fillerContainer.innerHTML='<p class="fill-text">Your list is empty. Choose a movie.</p>'})),a("csVsy");
//# sourceMappingURL=index-lib.f4bf842a.js.map
