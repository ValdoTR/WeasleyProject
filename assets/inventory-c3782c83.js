import{p as i,r as y}from"./sounds-0ebf4287.js";import{t as o}from"./translate-a3054a4c.js";import{n as s}from"./notifications-05941630.js";const l=3,I=()=>{WA.player.state.inventory="[]",WA.ui.actionBar.addButton({id:"inventory",label:o("modules.inventory.inventory"),callback:async()=>{r?a():await u()}}),WA.player.state.onVariableChange("askForInventoryWebsiteClose").subscribe(t=>{t&&a()})},m=t=>{const e=JSON.parse(WA.player.state.inventory);return!c(t.id)&&e.length<l?(i("successSound"),e.push(t),WA.player.state.inventory=JSON.stringify(e),s(o("modules.inventory.objectTaken",{object:o(t.name)}),null,"success"),!0):(s("modules.inventory.cannotTakeThis",null,"error"),!1)},c=t=>{const e=JSON.parse(WA.player.state.inventory);for(let n=0;n<e.length;n++)if(e[n].id===t)return!0;return!1},A=t=>{const e=v();for(let n=0;n<e.length;n++)e[n].id===t&&e.splice(n,1);return WA.player.state.inventory=JSON.stringify(e),!0};let r=null;const u=async()=>{WA.controls.disablePlayerControls(),r=await WA.ui.website.open({url:`${y}/views/inventory/inventory.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForInventoryWebsiteClose=!1},a=()=>{r==null||r.close(),r=null,WA.controls.restorePlayerControls()},W=()=>{WA.player.state.askForInventoryWebsiteClose=!0},v=()=>JSON.parse(WA.player.state.inventory),h=()=>l,g=()=>"default.png";export{g as a,W as b,h as c,m as d,v as g,c as h,I as i,A as r};