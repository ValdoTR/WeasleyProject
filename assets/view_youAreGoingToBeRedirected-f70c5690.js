import"./main-c7fad90a.js";import{t as n}from"./translate-d0174a55.js";window.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(async()=>{const e=document.getElementById("redirectionButton"),t=document.getElementById("explanation");t&&(t.innerHTML=n("modules.lobby.youAreGoingToBeRedirected")),e&&(e.innerText=n("modules.lobby.letSGo"),e.addEventListener("click",()=>{WA.nav.goToRoom("./choice.tmj")}))})});