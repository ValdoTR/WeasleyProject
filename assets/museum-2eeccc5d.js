import{b as I}from"./init-22028896.js";import{i as Z,g as F,c as T}from"./job-3bdc0294.js";import{t as o}from"./translate-d5989bdc.js";import{t as a}from"./layers-e0032f78.js";import{i as E}from"./hiddenZone-8ca7275f.js";import{a as y,b as h,d as v,r as $}from"./sounds-15db48ad.js";import{o as t}from"./discussion-12432d7a.js";import{i as S,d as b,h as A}from"./inventory-dbfe792a.js";import{s as O}from"./hooking-dc4f4d6d.js";import{n as V}from"./notifications-6c9ed65a.js";import{i as z,g as B,a as N,c as H,s as J,o as U}from"./cameraMovingMode-5b59c600.js";import{h as j,a as K,b as q}from"./workadventureFeatures-48ab46db.js";I();WA.onInit().then(async()=>{await Z(),j(),K(),q(),z(),S(),WA.state.mapRetrieved&&b({id:"secret-map",name:"museum.secretMap.title",image:"secret-map.png",description:"museum.secretMap.description"}),WA.state.onVariableChange("chest").subscribe(e=>{e&&!WA.state.mapRetrieved&&(WA.state.mapRetrieved=!0)}),WA.state.onVariableChange("mapRetrieved").subscribe(e=>{e&&(V("La carte a été récupérée !","utils.success","success"),b({id:"secret-map",name:"museum.secretMap.title",image:"secret-map.png",description:"museum.secretMap.description"}))});let c=null;WA.room.onEnterLayer("start").subscribe(()=>{WA.state.mapRetrieved&&(c=WA.ui.displayActionMessage({message:o("utils.executeAction",{action:o("museum.escape")}),callback:()=>{WA.nav.goToRoom("maze.tmj")}}))}),WA.room.onLeaveLayer("start").subscribe(()=>{c==null||c.remove(),c=null}),(()=>{WA.controls.disablePlayerControls(),t("utils.voiceOver","views.museum.beginText","museum.go","discussion","middle","middle","50vh","90vw",()=>{t(WA.player.name,"views.museum.beginDiscussion","views.choice.close","discussion","bottom","middle","50vh","90vw",()=>{WA.controls.restorePlayerControls()})})})();let u=!1,d=null;const k=()=>{d=setInterval(()=>{a("lights/lights1",u),a("lights/lights2",!u),u=!u},300)},C=()=>{d&&clearInterval(d),d=null},L=()=>{k(),a("noLights/noLights",!1),a("noLights/conversations",!1),a("lights/conversations",!0)},w=()=>{C(),a("lights/lights1",!1),a("lights/lights2",!1),a("noLights/noLights",!0),a("noLights/conversations",!0),a("lights/conversations",!1)};O("hookingD7",()=>{const e=[];e.push({x:5,y:67,tile:null,layer:"hookingD7/collides"}),WA.room.setTiles(e)});let p=null;WA.room.onEnterLayer("closeDoorMessage").subscribe(()=>{p=WA.ui.displayActionMessage({message:o("museum.doorClosed"),callback:()=>{}})}),WA.room.onLeaveLayer("closeDoorMessage").subscribe(()=>{p==null||p.remove()}),y("keeperDoorOpen",()=>{const e=[];e.push({x:25,y:44,tile:null,layer:"bigRoomAccess/bigRoomCollides"}),e.push({x:26,y:44,tile:null,layer:"bigRoomAccess/bigRoomCollides"}),WA.room.setTiles(e),WA.room.hideLayer("doorsClosed/dc6")});let g=null;WA.room.onEnterLayer("bigRoomAccess/keeperZone").subscribe(()=>{g=WA.ui.displayActionMessage({message:o("museum.speakToKeeper"),callback:()=>{A("id-card")?(t("views.museum.keeperName","views.museum.bigRoomAccess"),h("keeperDoorOpen")):t("views.museum.keeperName","views.museum.bigRoomNoAccess")}})}),WA.room.onLeaveLayer("bigRoomAccess/keeperZone").subscribe(()=>{g==null||g.remove()});for(let e=1;e<8;e++)E([{stepIn:`fogsZone/fog${[e]}`,hide:`fogs/fog${[e]}`}]);const x=e=>{let s=null;WA.room.onEnterLayer(`search/s${e}`).subscribe(()=>{e===5&&!A("id-card")?s=WA.ui.displayActionMessage({message:o("museum.search"),callback:()=>{b({id:"id-card",name:"museum.idCardTitle",image:"indentity-card.png",description:"museum.idCardDescription"})}}):s=WA.ui.displayActionMessage({message:o("museum.search"),callback:()=>{s=WA.ui.displayActionMessage({message:o("museum.searchEmpty"),callback:()=>{}})}})}),WA.room.onLeaveLayer(`search/s${e}`).subscribe(()=>{s==null||s.remove()})};for(let e=1;e<8;e++)x(e);const M=e=>{let s=null;WA.room.onEnterLayer(`pickPocketInvited/i${e}`).subscribe(()=>{s=WA.ui.displayActionMessage({message:o("museum.pickpocket"),callback:()=>{v("switchLights")?t(o("museum.guest"),o("museum.cannotPickPocket"),"views.choice.close","discussion","middle","middle","50vh","50vh",()=>{t(o("utils.mySelf"),o("museum.needDistraction"),"views.choice.close","discussion")}):e===8&&!A("access-card")?b({id:"access-card",name:"museum.accessCard",image:"gold-key.png",description:"museum.accessCardDescription"}):s=WA.ui.displayActionMessage({message:o("museum.pickpocketEmpty"),callback:()=>{}})}})}),WA.room.onLeaveLayer(`pickPocketInvited/i${e}`).subscribe(()=>{s==null||s.remove()})};for(let e=1;e<13;e++)M(e);y("desktopDoorOpen",()=>{const e=[];e.push({x:38,y:11,tile:null,layer:"desktopCollides"}),e.push({x:39,y:11,tile:null,layer:"desktopCollides"}),WA.room.setTiles(e),WA.room.hideLayer("doorsClosed/dc4")});let r=null;WA.room.onEnterLayer("desktopAccessZone").subscribe(()=>{A("access-card")?r=WA.ui.displayActionMessage({message:o("museum.desktopOpen"),callback:()=>{r=WA.ui.displayActionMessage({message:o("museum.desktopOpenMsg"),callback:()=>{h("desktopDoorOpen")}})}}):r=WA.ui.displayActionMessage({message:o("museum.doorClosed"),callback:()=>{}})}),WA.room.onLeaveLayer("desktopAccessZone").subscribe(()=>{r==null||r.remove()});for(let e=0;e<9;e++){let s=null;WA.room.onEnterLayer(`desktopItems/i${e}`).subscribe(()=>{s=WA.ui.displayActionMessage({message:o("museum.search"),callback:()=>{e===0?t("views.museum.annuaryTitle","views.museum.annuaryContent"):s=WA.ui.displayActionMessage({message:o(`museum.desktopItems${e}`),callback:()=>{}})}})}),WA.room.onLeaveLayer(`desktopItems/i${e}`).subscribe(()=>{s==null||s.remove()})}const l=["cameraZones/cZone1","cameraZones/cZone2","cameraZones/cZone3","cameraZones/cZone4","cameraZones/cZone5","cameraZones/cZone6"],f=[{x:8*32,y:68*32},{x:26*32,y:68*32},{x:15*32,y:63*32},{x:10*32,y:27*32},{x:47*32,y:23*32},{x:47*32,y:42*32}],i=B(),P={room1:{x:5*32,y:60*32,width:i,height:i},room2:{x:5*32,y:44*32,width:i,height:i},room3:{x:3*32,y:3*32,width:i,height:i},room4:{x:60*32,y:4*32,width:i,height:i},room5:{x:50*32,y:32*32,width:i,height:i},room6:{x:31*32,y:51*32,width:i,height:i},room7:{x:37*32,y:33*32,width:i,height:i}};let W=null;y("deactivateCamera",e=>{for(let s=0;s<l.length;s++)a(l[s],!0);a(e,!1),W===e&&WA.controls.restorePlayerControls()}),y("switchLights",e=>{e?L():w()},!0),WA.player.state.askForSwitchLights===void 0&&(WA.player.state.askForSwitchLights=!0),WA.player.state.askForDeactivateCamera===void 0&&(WA.player.state.askForDeactivateCamera=!1),WA.player.state.askForCloseComputerWebsite===void 0&&(WA.player.state.askForCloseComputerWebsite=!1),WA.player.state.askForSeeRoom===void 0&&(WA.player.state.askForSeeRoom=!1),WA.player.state.onVariableChange("askForDeactivateCamera").subscribe(e=>{e&&h("deactivateCamera",e)}),WA.player.state.onVariableChange("askForCloseComputerWebsite").subscribe(e=>{e&&D()}),WA.player.state.onVariableChange("askForSwitchLights").subscribe(e=>{h("switchLights",e)}),WA.player.state.onVariableChange("askForSeeRoom").subscribe(e=>{const s=P["room"+e];N(s.x,s.y),a(`fogs/fog${e}`,!1)});for(let e=0;e<l.length;e++)WA.room.onEnterLayer(l[e]).subscribe(()=>{v("deactivateCamera")!==l[e]&&(F()==="spy"?t("utils.mySelf","museum.cantStayInCamera","utils.close","discussion","bottom","middle","50vh","50vh",async()=>{WA.controls.disablePlayerControls(),await WA.player.moveTo(f[e].x,f[e].y),WA.controls.restorePlayerControls()}):(W=l[e],t("utils.mySelf","museum.cannotWalkInCameras","utils.close","discussion","bottom","middle","50vh","50vh",()=>{v("deactivateCamera")!==W&&WA.controls.disablePlayerControls()})))});let n=null;const R=async()=>{n=await WA.ui.website.open({url:`${$}/views/museum/buildingMap.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"right"},size:{height:"100vh",width:"50vw"}}),WA.controls.disablePlayerControls(),WA.player.state.askForCloseComputerWebsite=!1,J(),U()},D=()=>{n==null||n.close(),n=null,H(),WA.controls.restorePlayerControls(),WA.camera.followPlayer(!0)};let m=null;WA.room.onEnterLayer("computerZone").subscribe(()=>{m=WA.ui.displayActionMessage({message:o("utils.executeAction",{action:o("utils.hack")}),callback:()=>{T("useComputers")?R():t("utils.mySelf","museum.cannotUseComputers","utils.close","discussion")}})}),WA.room.onLeaveLayer("computerZone").subscribe(()=>{m==null||m.remove(),m=null})});