import"./main-c7fad90a.js";import{t as i}from"./translate-a3054a4c.js";import{g as l,c as d,i as o,d as r}from"./lobby-e3fbc32a.js";import"./sounds-0ebf4287.js";const c=async e=>{if(!WA.player.isLogged){const n=document.createElement("div");n.innerText=i("modules.lobby.connectToInvite"),n.classList.add("alert"),n.classList.add("error"),n.classList.add("mb-2"),e.prepend(n)}const s=await l();for(let n of s)e.appendChild(m(n))},m=e=>{let s=document.createElement("div");s.classList.add("player-line");let n=document.createElement("img");n.setAttribute("src",e.state.playerImage);let a=document.createElement("span");a.innerText=e.name;let t;return e.state.isAuthenticated?(t=document.createElement("button"),t.innerText=i("modules.lobby.invite"),t.classList.add("btn"),t.classList.add("bg-info"),WA.player.isLogged?t.classList.add("bg-info"):(t.classList.add("bg-error"),t.setAttribute("disabled","1"))):(t=document.createElement("div"),t.innerText=i("modules.lobby.notAuthenticated"),t.classList.add("error")),t.addEventListener("click",()=>{console.log("Tentative d'inviter "+e.name+" : "+e.playerId),d(e)?o(e):console.log(i("modules.lobby.playerIsNotAvailable"))}),d(e)||t.setAttribute("disabled","disabled"),s.appendChild(n),s.appendChild(a),s.appendChild(t),s},b=()=>{r()};window.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(async()=>{const e=document.getElementById("playerList"),s=document.getElementById("close");e&&(e.innerText=i("modules.lobby.playersList"),await c(e)),s&&(s.addEventListener("click",()=>{b()}),s.innerText=i("modules.lobby.close"))})});
