import{a as i,S as c,i as l}from"./assets/vendor-BsCdK5bc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="47399675-043703f8487c7f7d0445216cc",u="https://pixabay.com/api/",m=async o=>{try{return(await i.get(u,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(s){throw console.error("Error fetching images:",s),new Error("Failed to fetch images")}},f=new c(".gallery a"),p=()=>{const o=document.querySelector(".gallery");o.innerHTML=""},y=o=>{const s=document.querySelector(".gallery"),n=o.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-item">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </a>
  `).join("");s.insertAdjacentHTML("beforeend",n),f.refresh()},g=()=>{const o=document.querySelector(".loader");o.style.display="block",o.innerHTML=`
    <p class="loader-text">Loading images, please wait...</p>
  `},h=()=>{const o=document.querySelector(".loader");o.style.display="none"},w=()=>{l.error({title:"Sorry!",message:"There are no images matching your search query. Please try again!"})},L=document.querySelector(".search-form"),S=document.querySelector(".search-input");L.addEventListener("submit",async o=>{o.preventDefault();const s=S.value.trim();if(!s){iziToast.warning({title:"Warning!",message:"Please enter a search query."});return}p(),g();const n=Date.now();try{const r=await m(s),e=Date.now()-n,t=500;if(e<t&&await new Promise(a=>setTimeout(a,t-e)),r.length===0){w();return}y(r)}catch(r){console.error("Error occurred:",r),iziToast.error({title:"Error!",message:"Something went wrong. Please try again later."})}finally{h()}});
//# sourceMappingURL=index.js.map
