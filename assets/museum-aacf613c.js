import{b as D}from"./init-22028896.js";import{i as I,g as F,c as Z}from"./job-1d140806.js";import{t as o}from"./translate-a3054a4c.js";import{t}from"./layers-e0032f78.js";import{i as T}from"./hiddenZone-8ca7275f.js";import{a as g,b as h,d as W,r as E}from"./sounds-0ebf4287.js";import{o as i}from"./discussion-622c14a8.js";import{i as $,d as y,h as A}from"./inventory-c3782c83.js";import{s as S}from"./hooking-315a2a49.js";import{n as O}from"./notifications-05941630.js";const V=()=>{setTimeout(()=>{WA.ui.actionBar.removeButton("pricing-btn")},200)},B=()=>{setTimeout(()=>{WA.ui.actionBar.removeButton("invite-btn")},200)};D();WA.onInit().then(async()=>{await I(),V(),B(),$(),WA.state.mapRetrieved&&y({id:"secret-map",name:"museum.secretMap.title",image:"secret-map.png",description:"museum.secretMap.description"}),WA.state.onVariableChange("chest").subscribe(e=>{e&&!WA.state.mapRetrieved&&(WA.state.mapRetrieved=!0)}),WA.state.onVariableChange("mapRetrieved").subscribe(e=>{e&&(O("La carte a été récupérée !","utils.success","success"),y({id:"secret-map",name:"museum.secretMap.title",image:"secret-map.png",description:"museum.secretMap.description"}))});let l=null;WA.room.onEnterLayer("start").subscribe(()=>{WA.state.mapRetrieved&&(l=WA.ui.displayActionMessage({message:o("utils.executeAction",{action:o("museum.escape")}),callback:()=>{WA.nav.goToRoom("maze.tmj")}}))}),WA.room.onLeaveLayer("start").subscribe(()=>{l==null||l.remove(),l=null}),(()=>{WA.controls.disablePlayerControls(),i("utils.voiceOver","views.museum.beginText","museum.go","discussion","middle","middle","50vh","90vw",()=>{i(WA.player.name,"views.museum.beginDiscussion","views.choice.close","discussion","bottom","middle","50vh","90vw",()=>{WA.controls.restorePlayerControls()})})})();let m=!1,u=null;const f=()=>{u=setInterval(()=>{t("lights/lights1",m),t("lights/lights2",!m),m=!m},300)},k=()=>{u&&clearInterval(u),u=null},L=()=>{f(),t("noLights/noLights",!1),t("noLights/conversations",!1),t("lights/conversations",!0)},C=()=>{k(),t("lights/lights1",!1),t("lights/lights2",!1),t("noLights/noLights",!0),t("noLights/conversations",!0),t("lights/conversations",!1)};S("hookingD7",()=>{const e=[];e.push({x:5,y:67,tile:null,layer:"hookingD7/collides"}),WA.room.setTiles(e)});let d=null;WA.room.onEnterLayer("closeDoorMessage").subscribe(()=>{d=WA.ui.displayActionMessage({message:o("museum.doorClosed"),callback:()=>{}})}),WA.room.onLeaveLayer("closeDoorMessage").subscribe(()=>{d==null||d.remove()}),g("keeperDoorOpen",()=>{const e=[];e.push({x:25,y:44,tile:null,layer:"bigRoomAccess/bigRoomCollides"}),e.push({x:26,y:44,tile:null,layer:"bigRoomAccess/bigRoomCollides"}),WA.room.setTiles(e),WA.room.hideLayer("doorsClosed/dc6")});let p=null;WA.room.onEnterLayer("bigRoomAccess/keeperZone").subscribe(()=>{p=WA.ui.displayActionMessage({message:o("museum.speakToKeeper"),callback:()=>{A("id-card")?(i("views.museum.keeperName","views.museum.bigRoomAccess"),h("keeperDoorOpen")):i("views.museum.keeperName","views.museum.bigRoomNoAccess")}})}),WA.room.onLeaveLayer("bigRoomAccess/keeperZone").subscribe(()=>{p==null||p.remove()});for(let e=1;e<8;e++)T([{stepIn:`fogsZone/fog${[e]}`,hide:`fogs/fog${[e]}`}]);const w=e=>{let s=null;WA.room.onEnterLayer(`search/s${e}`).subscribe(()=>{e===5&&!A("id-card")?s=WA.ui.displayActionMessage({message:o("museum.search"),callback:()=>{y({id:"id-card",name:"museum.idCardTitle",image:"indentity-card.png",description:"museum.idCardDescription"})}}):s=WA.ui.displayActionMessage({message:o("museum.search"),callback:()=>{s=WA.ui.displayActionMessage({message:o("museum.searchEmpty"),callback:()=>{}})}})}),WA.room.onLeaveLayer(`search/s${e}`).subscribe(()=>{s==null||s.remove()})};for(let e=1;e<8;e++)w(e);const x=e=>{let s=null;WA.room.onEnterLayer(`pickPocketInvited/i${e}`).subscribe(()=>{s=WA.ui.displayActionMessage({message:o("museum.pickpocket"),callback:()=>{W("switchLights")?i(o("museum.guest"),o("museum.cannotPickPocket"),"views.choice.close","discussion","middle","middle","50vh","50vh",()=>{i(o("utils.mySelf"),o("museum.needDistraction"),"views.choice.close","discussion")}):e===8&&!A("access-card")?y({id:"access-card",name:"museum.accessCard",image:"gold-key.png",description:"museum.accessCardDescription"}):s=WA.ui.displayActionMessage({message:o("museum.pickpocketEmpty"),callback:()=>{}})}})}),WA.room.onLeaveLayer(`pickPocketInvited/i${e}`).subscribe(()=>{s==null||s.remove()})};for(let e=1;e<13;e++)x(e);g("desktopDoorOpen",()=>{const e=[];e.push({x:38,y:11,tile:null,layer:"desktopCollides"}),e.push({x:39,y:11,tile:null,layer:"desktopCollides"}),WA.room.setTiles(e),WA.room.hideLayer("doorsClosed/dc4")});let a=null;WA.room.onEnterLayer("desktopAccessZone").subscribe(()=>{A("access-card")?a=WA.ui.displayActionMessage({message:o("museum.desktopOpen"),callback:()=>{a=WA.ui.displayActionMessage({message:o("museum.desktopOpenMsg"),callback:()=>{h("desktopDoorOpen")}})}}):a=WA.ui.displayActionMessage({message:o("museum.doorClosed"),callback:()=>{}})}),WA.room.onLeaveLayer("desktopAccessZone").subscribe(()=>{a==null||a.remove()});for(let e=0;e<9;e++){let s=null;WA.room.onEnterLayer(`desktopItems/i${e}`).subscribe(()=>{s=WA.ui.displayActionMessage({message:o("museum.search"),callback:()=>{s=WA.ui.displayActionMessage({message:o(`museum.desktopItems${e}`),callback:()=>{e===0&&i("views.museum.annuaryTitle","views.museum.annuaryContent")}})}})}),WA.room.onLeaveLayer(`desktopItems/i${e}`).subscribe(()=>{s==null||s.remove()})}const r=["cameraZones/cZone1","cameraZones/cZone2","cameraZones/cZone3","cameraZones/cZone4","cameraZones/cZone5","cameraZones/cZone6"],v=[{x:8*32,y:68*32},{x:26*32,y:68*32},{x:15*32,y:63*32},{x:10*32,y:27*32},{x:47*32,y:23*32},{x:47*32,y:42*32}],M={room1:{x:5*32,y:60*32,width:500,height:500},room2:{x:5*32,y:44*32,width:500,height:500},room3:{x:3*32,y:3*32,width:500,height:500},room4:{x:60*32,y:4*32,width:900,height:900},room5:{x:50*32,y:32*32,width:400,height:400},room6:{x:31*32,y:51*32,width:520,height:520},room7:{x:37*32,y:33*32,width:1e3,height:1e3}};let b=null;g("deactivateCamera",e=>{for(let s=0;s<r.length;s++)t(r[s],!0);t(e,!1),b===e&&WA.controls.restorePlayerControls()}),g("switchLights",e=>{e?L():C()},!0),WA.player.state.askForSwitchLights===void 0&&(WA.player.state.askForSwitchLights=!0),WA.player.state.askForDeactivateCamera===void 0&&(WA.player.state.askForDeactivateCamera=!1),WA.player.state.askForCloseComputerWebsite===void 0&&(WA.player.state.askForCloseComputerWebsite=!1),WA.player.state.askForSeeRoom===void 0&&(WA.player.state.askForSeeRoom=!1),WA.player.state.onVariableChange("askForDeactivateCamera").subscribe(e=>{e&&h("deactivateCamera",e)}),WA.player.state.onVariableChange("askForCloseComputerWebsite").subscribe(e=>{e&&R()}),WA.player.state.onVariableChange("askForSwitchLights").subscribe(e=>{h("switchLights",e)}),WA.player.state.onVariableChange("askForSeeRoom").subscribe(e=>{const s=M["room"+e];WA.camera.set(s.x,s.y,s.width,s.height,!1,!1),t(`fogs/fog${e}`,!1)});for(let e=0;e<r.length;e++)WA.room.onEnterLayer(r[e]).subscribe(()=>{W("deactivateCamera")!==r[e]&&(F()==="spy"?i("utils.mySelf","museum.cantStayInCamera","utils.close","discussion","bottom","middle","50vh","50vh",async()=>{WA.controls.disablePlayerControls(),await WA.player.moveTo(v[e].x,v[e].y),WA.controls.restorePlayerControls()}):(b=r[e],i("utils.mySelf","museum.cannotWalkInCameras","utils.close","discussion","bottom","middle","50vh","50vh",()=>{W("deactivateCamera")!==b&&WA.controls.disablePlayerControls()})))});let c=null;const P=async()=>{c=await WA.ui.website.open({url:`${E}/views/museum/buildingMap.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"right"},size:{height:"100vh",width:"50vw"}}),WA.controls.disablePlayerControls(),WA.player.state.askForCloseComputerWebsite=!1},R=()=>{c==null||c.close(),c=null,WA.controls.restorePlayerControls(),WA.camera.followPlayer(!0)};let n=null;WA.room.onEnterLayer("computerZone").subscribe(()=>{n=WA.ui.displayActionMessage({message:o("utils.executeAction",{action:o("utils.hack")}),callback:()=>{Z("useComputers")?P():i("utils.mySelf","museum.cannotUseComputers","utils.close","discussion")}})}),WA.room.onLeaveLayer("computerZone").subscribe(()=>{n==null||n.remove(),n=null})});
