import{r as l}from"./sounds-6be04f48.js";let o={};const a=()=>{const i=Object.keys(o),e=[];for(let t=0;t<i.length;t++)e.push(o[i[t]].index);for(let t=0;t<e.length;t++)if(!e.includes(t))return t;return e.length},f=async(i,e=null,t="info")=>{const n=Date.now(),s=a();o[n]={index:s,website:await c(s,i,e,t)},setTimeout(()=>{o[n]&&(o[n].website.close(),delete o[n])},4e3)},c=async(i,e,t,n)=>await WA.ui.website.open({url:`${l}/views/notifications/notification.html?content=${e}&title=${t}&type=${n}&index=${i}`,allowApi:!0,allowPolicy:"",position:{vertical:"top",horizontal:"left"},size:{height:"100vh",width:"20vw"}});export{f as n};
