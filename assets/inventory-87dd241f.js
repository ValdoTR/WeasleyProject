import{r as i}from"./config-63dd91cb.js";import{t as o}from"./translate-ab684b55.js";import{n as s}from"./notifications-629b213b.js";import"./actionForAllPlayers-42768cef.js";const l=3,I=()=>{WA.player.state.inventory="[]",WA.ui.actionBar.addButton({id:"inventory",label:o("modules.inventory.inventory"),callback:async()=>{r?a():await c()}}),WA.player.state.onVariableChange("askForInventoryWebsiteClose").subscribe(t=>{t&&a()})},m=t=>{const e=JSON.parse(WA.player.state.inventory);return!y(t.id)&&e.length<l?(e.push(t),WA.player.state.inventory=JSON.stringify(e),s(o("modules.inventory.objectTaken",{object:o(t.name)}),null,"success"),!0):(s("modules.inventory.cannotTakeThis",null,"error"),!1)},y=t=>{const e=JSON.parse(WA.player.state.inventory);for(let n=0;n<e.length;n++)if(e[n].id===t)return!0;return!1},A=t=>{const e=u();for(let n=0;n<e.length;n++)e[n].id===t&&e.splice(n,1);return WA.player.state.inventory=JSON.stringify(e),!0};let r=null;const c=async()=>{WA.controls.disablePlayerControls(),r=await WA.ui.website.open({url:`${i}/views/inventory/inventory.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForInventoryWebsiteClose=!1},a=()=>{r==null||r.close(),r=null,WA.controls.restorePlayerControls()},W=()=>{WA.player.state.askForInventoryWebsiteClose=!0},u=()=>JSON.parse(WA.player.state.inventory),h=()=>l,g=()=>"default.png";export{g as a,W as b,h as c,m as d,u as g,y as h,I as i,A as r};