import"./main-c7fad90a.js";import{t as s}from"./translate-d49d6517.js";import{a as r}from"./readRunes-abd028e9.js";import"./sounds-6be04f48.js";import"./job-280f8f30.js";document.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(async()=>{const c=window.location.search,e=new URLSearchParams(c),t=document.getElementById("title"),n=document.getElementById("content"),o=document.getElementById("closeButton"),i=e.get("canRead")==="0",a=e.get("title");t&&(a?(t.innerText=s(a),i&&t.classList.add("runes-font")):t.remove()),n&&(n.innerText=s(e.get("content")),i&&n.classList.add("runes-font")),o&&(o.innerText=s("modules.runes.close"),o.addEventListener("click",()=>{r()}))})});