import"./main-c7fad90a.js";import{t as s}from"./translate-a3054a4c.js";import{a as r}from"./readRunes-07de4646.js";import"./actionForAllPlayers-42768cef.js";import"./job-3160909b.js";import"./config-63dd91cb.js";document.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(async()=>{const c=window.location.search,e=new URLSearchParams(c),t=document.getElementById("title"),n=document.getElementById("content"),o=document.getElementById("closeButton"),i=e.get("canRead")==="0",a=e.get("title");t&&(a?(t.innerText=s(a),i&&t.classList.add("runes-font")):t.remove()),n&&(n.innerText=s(e.get("content")),i&&n.classList.add("runes-font")),o&&(o.innerText=s("modules.runes.close"),o.addEventListener("click",()=>{r()}))})});