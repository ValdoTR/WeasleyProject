import{r as y}from"./config-63dd91cb.js";import{t as a}from"./translate-80cbe278.js";const u=3,I=()=>{WA.player.state.inventory="[]",WA.ui.actionBar.addButton({id:"inventory",label:a("modules.inventory.inventory"),callback:async()=>{s?l():await d()}}),WA.player.state.onVariableChange("askForInventoryWebsiteClose").subscribe(n=>{n&&l()})},b=n=>{const e=JSON.parse(WA.player.state.inventory);return!v(n.id)&&e.length<u?(e.push(n),WA.player.state.inventory=JSON.stringify(e),c(a("modules.inventory.objectTaken",{object:a(n.name)}),null,"success"),!0):(c("modules.inventory.cannotTakeThis",null,"error"),!1)},v=n=>{const e=JSON.parse(WA.player.state.inventory);for(let t=0;t<e.length;t++)if(e[t].id===n)return!0;return!1},A=n=>{const e=p();for(let t=0;t<e.length;t++)e[t].id===n&&e.splice(t,1);return WA.player.state.inventory=JSON.stringify(e),!0};let s=null;const d=async()=>{WA.controls.disablePlayerControls(),s=await WA.ui.website.open({url:`${y}/views/inventory/inventory.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForInventoryWebsiteClose=!1},l=()=>{s==null||s.close(),s=null,WA.controls.restorePlayerControls()},W=()=>{WA.player.state.askForInventoryWebsiteClose=!0},p=()=>JSON.parse(WA.player.state.inventory),m=()=>u,k=()=>"default.png";let o={};const f=()=>{const n=Object.keys(o);console.log("keys",n);const e=[];for(let t=0;t<n.length;t++)e.push(o[n[t]].index);console.log("taken indexes",e);for(let t=0;t<e.length;t++)if(!e.includes(t))return t;return e.length},c=async(n,e=null,t="info")=>{const r=Date.now(),i=f();console.log("notificationWebsite",o),console.log("new Index",i),o[r]={index:i,website:await h(i,n,e,t)},setTimeout(()=>{o[r]&&(o[r].website.close(),delete o[r])},4e3)},h=async(n,e,t,r)=>await WA.ui.website.open({url:`${y}/views/notifications/notification.html?content=${e}&title=${t}&type=${r}&index=${n}`,allowApi:!0,allowPolicy:"",position:{vertical:"top",horizontal:"right"},size:{height:"100vh",width:"20vw"}});export{k as a,W as b,m as c,b as d,p as g,I as i,c as n,A as r};
