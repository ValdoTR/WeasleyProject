import"./main-c7fad90a.js";import{t as m}from"./translate-d5989bdc.js";import"./sounds-15db48ad.js";import{m as e}from"./cameraMovingMode-5b59c600.js";document.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(async()=>{const t=document.getElementById("cameraMoveRight"),n=document.getElementById("cameraMoveLeft"),o=document.getElementById("cameraMoveUp"),a=document.getElementById("cameraMoveDown"),c=document.getElementById("close"),i=document.getElementById("cameraMoveTitle");t&&t.addEventListener("click",()=>{e("right")}),n&&n.addEventListener("click",()=>{e("left")}),a&&a.addEventListener("click",()=>{e("down")}),o&&o.addEventListener("click",()=>{e("up")}),c&&c.addEventListener("click",()=>{WA.player.state.askForCloseCameraMovingWebsite=!0}),i&&(i.innerText=m("views.cameraMoving.mobileCamera").toUpperCase())})});