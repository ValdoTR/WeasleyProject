import"./main-c7fad90a.js";import"./translate-22b8282f.js";import"./sounds-961d1df1.js";import{a as l,b as r}from"./digicode-c2731daf.js";document.addEventListener("DOMContentLoaded",()=>{let e="";WA.onInit().then(async()=>{const s=new URLSearchParams(window.location.search).get("id"),n=document.getElementsByClassName("code-button"),c=document.getElementById("cancel"),i=document.getElementById("validate"),t=document.getElementById("codeDisplay"),a=document.getElementById("close");if(n)for(let o=0;o<n.length;o++)n[o].addEventListener("click",d=>{d.target instanceof Element&&(e+=d.target.id.replace("button","")||"",t&&(t.innerHTML=e))});c&&c.addEventListener("click",()=>{e="",t&&(t.innerHTML=e)}),i&&i.addEventListener("click",()=>{l(s,e)}),a&&a.addEventListener("click",()=>{r()})})});