import"./translate-ea8f1c55.js";import{e as d}from"./lobby-840e0083.js";import"./config-63dd91cb.js";const f="modulepreload",h=function(r,t){return new URL(r,t).href},u={},w=function(t,o,a){if(!o||o.length===0)return t();const c=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=h(e,a),e in u)return;u[e]=!0;const s=e.endsWith(".css"),m=s?'[rel="stylesheet"]':"";if(!!a)for(let i=c.length-1;i>=0;i--){const l=c[i];if(l.href===e&&(!s||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":f,s||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),s)return new Promise((i,l)=>{n.addEventListener("load",i),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t())},g=()=>{console.log("modules.lobby.askforcancelinvitation"),d()};window.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(async()=>{const r=await w(()=>import("./index-87cc02aa.js"),["./index-87cc02aa.js","./translate-ea8f1c55.js"],import.meta.url),t=document.getElementById("cancelButton"),o=document.getElementById("waitingForAnswer");t&&(t.innerText=r.translations.translate("modules.lobby.cancel"),t.addEventListener("click",()=>{g()})),o&&(o.innerHTML=r.translations.translate("modules.lobby.waitingForAnswer"))})});
