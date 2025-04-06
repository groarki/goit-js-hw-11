import{a as c,S as h,i as l}from"./assets/vendor-BBSqv8W6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";function y(i){const o={params:{key:"49664766-1adf2829ec799385f1aed5797",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}};return c.get("/",o).then(r=>r.data)}const d=document.querySelector(".gallery"),u=document.querySelector(".loodie");function v(i){p();const o=i.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:f,comments:m,downloads:g})=>`<li class="galleryItem">
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
                  <p>${f}</p>
                </div>
                <div class="detailCont">
                  <p>Comments</p>
                  <p>${m}</p>
                </div>
                <div class="detailCont">
                  <p>Downloads</p>
                  <p>${g}</p>
                </div>
              </div>
            </div>
          </li>`).join("");d.insertAdjacentHTML("beforeend",o),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function p(){d.innerHTML=""}function L(){u.classList.add("loader")}function b(){u.classList.remove("loader")}const a=document.querySelector(".form"),S=a.querySelector('input[name="search-text"]');a.addEventListener("submit",i=>{i.preventDefault();const o=S.value.trim();L(),o!==""&&y(o).then(r=>{if(r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.reset(),p();return}v(r.hits),b(),console.log(r)}).catch(r=>{l.error({message:"Sorry, something went wrong!",position:"topRight"}),console.log(r)})});
//# sourceMappingURL=index.js.map
