import"./main-c7fad90a.js";import"./translate-b149c22e.js";import{f as d}from"./lobby-ef02c96a.js";import"./sounds-ea3a6419.js";const f="modulepreload",h=function(r,t){return new URL(r,t).href},u={},w=function(t,o,a){if(!o||o.length===0)return t();const c=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=h(e,a),e in u)return;u[e]=!0;const i=e.endsWith(".css"),m=i?'[rel="stylesheet"]':"";if(!!a)for(let s=c.length-1;s>=0;s--){const l=c[s];if(l.href===e&&(!i||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=i?"stylesheet":f,i||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),i)return new Promise((s,l)=>{n.addEventListener("load",s),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t())},g=()=>{console.log("modules.lobby.askforcancelinvitation"),d()};window.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(async()=>{const r=await w(()=>import("./index-9f9c3f37.js"),["./index-9f9c3f37.js","./layers-e0032f78.js","./translate-b149c22e.js"],import.meta.url),t=document.getElementById("cancelButton"),o=document.getElementById("waitingForAnswer");t&&(t.innerText=r.translations.translate("modules.lobby.cancel"),t.addEventListener("click",()=>{g()})),o&&(o.innerHTML=r.translations.translate("modules.lobby.waitingForAnswer"))})});