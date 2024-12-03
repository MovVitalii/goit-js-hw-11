import{a as i,S as l,i as d}from"./assets/vendor-BsCdK5bc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u="47399675-043703f8487c7f7d0445216cc",m="https://pixabay.com/api/",f=async r=>{try{return(await i.get(m,{params:{key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),new Error("Failed to fetch images")}},p=()=>{const r=document.querySelector(".gallery");r.innerHTML=""},y=r=>{const t=document.querySelector(".gallery"),s=r.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" />
      <div class="info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </a>
  `).join("");t.insertAdjacentHTML("beforeend",s),new l(".gallery a").refresh()},g=()=>{const r=document.querySelector(".loader");r.style.display="block",r.innerHTML='<div class="spinner"></div>'},c=()=>{const r=document.querySelector(".loader");r.style.display="none"},h=()=>{d.error({title:"Sorry!",message:"There are no images matching your search query. Please try again!"})},L=document.querySelector(".search-form"),w=document.querySelector(".search-input");L.addEventListener("submit",async r=>{r.preventDefault();const t=w.value.trim();if(t){p(),g();try{const s=await f(t);if(c(),s.length===0){h();return}y(s)}catch(s){c(),console.error("Error occurred:",s),iziToast.error({title:"Error!",message:"Something went wrong. Please try again later."})}}});
//# sourceMappingURL=index.js.map
