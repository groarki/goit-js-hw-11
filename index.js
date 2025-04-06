import{a as c,S as y,i as l}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";function v(i){const r={params:{key:"49664766-1adf2829ec799385f1aed5797",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}};return c.get("/",r).then(o=>o.data)}const d=document.querySelector(".gallery"),u=document.querySelector(".loader");function L(i){p();const r=i.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:m,comments:g,downloads:h})=>`<li class="galleryItem">
            <div class="imgCont">
              <a class="gallery-link" href="${e}">
              <img src="${n}" alt="${t}" class="photo" />
              </a>
              <div class="photoDetails">
                <div class="detailCont">
                  <p>Likes</p>
                  <p>${s}</p>
                </div>
                <div class="detailCont">
                  <p>Views</p>
                  <p>${m}</p>
                </div>
                <div class="detailCont">
                  <p>Comments</p>
                  <p>${g}</p>
                </div>
                <div class="detailCont">
                  <p>Downloads</p>
                  <p>${h}</p>
                </div>
              </div>
            </div>
          </li>`).join("");d.insertAdjacentHTML("beforeend",r),new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function p(){d.innerHTML=""}function b(){u.classList.add("loader")}function f(){u.classList.remove("loader")}const a=document.querySelector(".form"),S=a.querySelector('input[name="search-text"]');f();a.addEventListener("submit",i=>{i.preventDefault();const r=S.value.trim();b(),r!==""&&v(r).then(o=>{if(o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.reset(),p();return}L(o.hits),f(),console.log(o)}).catch(o=>{l.error({message:"Sorry, something went wrong!",position:"topRight"}),console.log(o)})});
//# sourceMappingURL=index.js.map
