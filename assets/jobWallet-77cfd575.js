import"./main-62ba997c.js";import{t as o}from"./translate-cf2b8c4c.js";import{g as i,a,b as m}from"./job-d2e9865b.js";import"./actionForAllPlayers-b82946da.js";const d=()=>o("views.jobWallet.title",{job:o(`views.jobWallet.jobs.${i()}.name`)}),u=()=>o(`views.jobWallet.jobs.${i()}.attributes`,{name:WA.player.name}),b=()=>o(`views.jobWallet.jobs.${i()}.description`),p=()=>{const e=document.createElement("ul"),n=a();for(let t=0;t<n.length;t++){const s=document.createElement("li");s.innerHTML=o(`views.jobWallet.jobs.${i()}.permissions.${n[t]}`),e.appendChild(s)}return e},W=()=>o("views.jobWallet.close"),g=()=>{m()};document.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(async()=>{console.log("coucou");const e=document.getElementById("photo"),n=document.getElementById("title"),t=document.getElementById("attributes"),s=document.getElementById("description"),r=document.getElementById("permissions"),l=document.getElementById("closeWalletWebsiteButton"),c=await WA.player.getWokaPicture();e&&e.setAttribute("src",c),n&&(n.innerText=d()),t&&(t.innerHTML=u()),s&&(s.innerText=b()),r&&r.appendChild(p()),l&&(l.innerText=W(),l.addEventListener("click",()=>{g()}))}).catch(e=>console.error(e))});
