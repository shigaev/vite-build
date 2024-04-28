(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(r,n="",o="",l="",e=""){const t=document.querySelector(`.${n}`);let s=r.map((a,u)=>(a.id=u,`
            <li class="${l}">
                <a class="${e}" href="${a.pathLink}">${a.title}</a>
            </li>
        `)).join("");n&&(t.innerHTML=`
        <ul class="${o}">
            ${s}
        </ul>
        `)}let p="http://localhost:8080/data.json",i=new XMLHttpRequest;i.open("GET",p,!0);i.responseType="json";i.send();function d(){const r=document.querySelector(".json");if(i.onload=setTimeout(()=>{let n=i.response;r&&(r.innerHTML=n.members.map(function(o){return`
                    <li>${o.name}</li>
            `}).join(""))},2e3),r)return r.innerHTML=`
                Download...
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            `}const f=[{title:"Home",pathLink:"/"},{title:"About",pathLink:"/pages/about/"},{title:"Node",pathLink:"/pages/node/"},{title:"ООП",pathLink:"/pages/oop/"}];c(f,"collapse","navbar-nav me-auto mb-2 mb-lg-0","nav-item","nav-link");d();
