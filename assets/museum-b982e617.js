import{b as V}from"./init-22028896.js";import{i as z,g as H,c as N}from"./job-1fdfc9c6.js";import{t as s}from"./translate-22b8282f.js";import{t as i}from"./layers-e0032f78.js";import{i as J}from"./hiddenZone-8ca7275f.js";import{r as k,a as d,h as U,b as p,d as b}from"./sounds-961d1df1.js";import{o as a}from"./discussion-296f6ef1.js";import{i as j,h as W,d as L}from"./inventory-cb1b4c97.js";import{s as K}from"./hooking-f4d63078.js";import{n as q}from"./notifications-03c7fa8b.js";import{i as G,g as Q,a as X,c as Y,s as _,o as ee}from"./cameraMovingMode-3dfbb602.js";import{c as se,i as oe,o as te,d as ie}from"./digicode-c2731daf.js";import{h as ae,a as re,b as le}from"./workadventureFeatures-48ab46db.js";V();WA.onInit().then(async()=>{await z();const C=WA.sound.loadSound(`${k}/sounds/electro.mp3`),v=WA.sound.loadSound(`${k}/sounds/electroLow.mp3`);let w={volume:.4,loop:!0,rate:1,detune:1,delay:0,seek:0,mute:!1},Z={volume:1,loop:!0,rate:1,detune:1,delay:0,seek:0,mute:!1};v.play(w),WA.room.onEnterLayer("electroH").subscribe(()=>{v.stop(),C.play(Z)}),WA.room.onLeaveLayer("electroH").subscribe(()=>{C.stop(),v.play(w)}),d("retrieveMap",()=>{L({id:"secret-map",name:"museum.secretMap.title",image:"secret-map.png",description:"museum.secretMap.description"}),q("museum.mapRetrieved","utils.success","success"),i(["chestOpened"],!0),ie()}),se("chestDigicode",[{code:"160616",callback:()=>{WA.state.mapRetrieved=!0,p("retrieveMap")}}]),oe();let n=null;WA.room.onEnterLayer("chestZone").subscribe(()=>{U("retrieveMap")||(n=WA.ui.displayActionMessage({message:s("utils.executeAction",{action:s("museum.inspect")}),callback:()=>{te("chestDigicode")}}))}),WA.room.onLeaveLayer("chestZone").subscribe(()=>{n==null||n.remove(),n=null}),ae(),re(),le(),G(),j();let c=null;WA.room.onEnterLayer("start").subscribe(()=>{WA.state.mapRetrieved&&(c=WA.ui.displayActionMessage({message:s("utils.executeAction",{action:s("museum.escape")}),callback:()=>{WA.nav.goToRoom("maze.tmj")}}))}),WA.room.onLeaveLayer("start").subscribe(()=>{c==null||c.remove(),c=null});const x=()=>{R(),a(WA.player.name,"views.museum.beginDiscussion","views.choice.close","discussion","bottom","middle","50vh","90vw",()=>{WA.controls.restorePlayerControls(),I()})};(()=>{WA.controls.disablePlayerControls(),a("utils.voiceOver","views.museum.beginText","museum.go","discussion","middle","middle","50vh","90vw",()=>{x()})})();const I=()=>{WA.ui.actionBar.addButton({id:"planButton",label:s("museum.plan"),callback:()=>{x()}})},R=()=>{WA.ui.actionBar.removeButton("planButton")};let g=!1,y=null;const T=()=>{y=setInterval(()=>{i("lights/lights1",g),i("lights/lights2",!g),g=!g},300)},F=()=>{y&&clearInterval(y),y=null},P=()=>{T(),i("noLights/noLights",!1),i("noLights/conversations",!1),i("lights/conversations",!0)},M=()=>{F(),i("lights/lights1",!1),i("lights/lights2",!1),i("noLights/noLights",!0),i("noLights/conversations",!0),i("lights/conversations",!1)};K("hookingD7",()=>{const e=[];e.push({x:5,y:67,tile:null,layer:"hookingD7/collides"}),WA.room.setTiles(e)});let h=null;WA.room.onEnterLayer("closeDoorMessage").subscribe(()=>{h=WA.ui.displayActionMessage({message:s("museum.doorClosed"),callback:()=>{}})}),WA.room.onLeaveLayer("closeDoorMessage").subscribe(()=>{h==null||h.remove()}),d("keeperDoorOpen",()=>{const e=[];e.push({x:25,y:44,tile:null,layer:"bigRoomAccess/bigRoomCollides"}),e.push({x:26,y:44,tile:null,layer:"bigRoomAccess/bigRoomCollides"}),WA.room.setTiles(e),WA.room.hideLayer("doorsClosed/dc6")});let A=null;WA.room.onEnterLayer("bigRoomAccess/keeperZone").subscribe(()=>{A=WA.ui.displayActionMessage({message:s("utils.executeAction",{action:s("museum.speakToKeeper")}),callback:()=>{W("id-card")?(a("views.museum.keeperName","views.museum.bigRoomAccess"),p("keeperDoorOpen")):a("views.museum.keeperName","views.museum.bigRoomNoAccess")}})}),WA.room.onLeaveLayer("bigRoomAccess/keeperZone").subscribe(()=>{A==null||A.remove()});for(let e=1;e<8;e++)J([{stepIn:`fogsZone/fog${[e]}`,hide:`fogs/fog${[e]}`}]);const B=e=>{let o=null;WA.room.onEnterLayer(`search/s${e}`).subscribe(()=>{e===5&&!W("id-card")?o=WA.ui.displayActionMessage({message:s("utils.executeAction",{action:s("museum.search")}),callback:()=>{L({id:"id-card",name:"museum.idCardTitle",image:"indentity-card.png",description:"museum.idCardDescription"})}}):o=WA.ui.displayActionMessage({message:s("utils.executeAction",{action:s("museum.search")}),callback:()=>{o=WA.ui.displayActionMessage({message:s("museum.searchEmpty"),callback:()=>{}})}})}),WA.room.onLeaveLayer(`search/s${e}`).subscribe(()=>{o==null||o.remove()})};for(let e=1;e<8;e++)B(e);const E=e=>{let o=null;WA.room.onEnterLayer(`pickPocketInvited/i${e}`).subscribe(()=>{o=WA.ui.displayActionMessage({message:s("utils.executeAction",{action:s("museum.pickpocket")}),callback:()=>{b("switchLights")?a(s("museum.guest"),s("museum.cannotPickPocket"),"views.choice.close","discussion","middle","middle","50vh","50vh",()=>{a(s("utils.mySelf"),s("museum.needDistraction"),"views.choice.close","discussion")}):e===8&&!W("access-card")?L({id:"access-card",name:"museum.accessCard",image:"gold-key.png",description:"museum.accessCardDescription"}):o=WA.ui.displayActionMessage({message:s("museum.pickpocketEmpty"),callback:()=>{}})}})}),WA.room.onLeaveLayer(`pickPocketInvited/i${e}`).subscribe(()=>{o==null||o.remove()})};for(let e=1;e<13;e++)E(e);d("desktopDoorOpen",()=>{const e=[];e.push({x:38,y:11,tile:null,layer:"desktopCollides"}),e.push({x:39,y:11,tile:null,layer:"desktopCollides"}),WA.room.setTiles(e),WA.room.hideLayer("doorsClosed/dc4")});let r=null;WA.room.onEnterLayer("desktopAccessZone").subscribe(()=>{W("access-card")?r=WA.ui.displayActionMessage({message:s("utils.executeAction",{action:s("museum.desktopOpen")}),callback:()=>{r=WA.ui.displayActionMessage({message:s("museum.desktopOpenMsg"),callback:()=>{p("desktopDoorOpen")}})}}):r=WA.ui.displayActionMessage({message:s("museum.doorClosed"),callback:()=>{}})}),WA.room.onLeaveLayer("desktopAccessZone").subscribe(()=>{r==null||r.remove()});for(let e=0;e<9;e++){let o=null;WA.room.onEnterLayer(`desktopItems/i${e}`).subscribe(()=>{o=WA.ui.displayActionMessage({message:s("utils.executeAction",{action:s("museum.search")}),callback:()=>{e===0?a("views.museum.annuaryTitle","views.museum.annuaryContent"):o=WA.ui.displayActionMessage({message:s(`museum.desktopItems${e}`),callback:()=>{}})}})}),WA.room.onLeaveLayer(`desktopItems/i${e}`).subscribe(()=>{o==null||o.remove()})}const l=["cameraZones/cZone1","cameraZones/cZone2","cameraZones/cZone3","cameraZones/cZone4","cameraZones/cZone5","cameraZones/cZone6"],D=[{x:8*32,y:68*32},{x:26*32,y:68*32},{x:15*32,y:63*32},{x:10*32,y:27*32},{x:47*32,y:23*32},{x:47*32,y:42*32}],t=Q(),$={room1:{x:5*32,y:60*32,width:t,height:t},room2:{x:5*32,y:44*32,width:t,height:t},room3:{x:3*32,y:3*32,width:t,height:t},room4:{x:60*32,y:4*32,width:t,height:t},room5:{x:50*32,y:32*32,width:t,height:t},room6:{x:31*32,y:51*32,width:t,height:t},room7:{x:37*32,y:33*32,width:t,height:t}};let f=null;d("deactivateCamera",e=>{for(let o=0;o<l.length;o++)i(l[o],!0);i(e,!1),f===e&&WA.controls.restorePlayerControls()}),d("switchLights",e=>{e?P():M()},!0),setTimeout(()=>{b("switchLights")?P():M()},200),WA.player.state.askForSwitchLights===void 0&&(WA.player.state.askForSwitchLights=!0),WA.player.state.askForDeactivateCamera===void 0&&(WA.player.state.askForDeactivateCamera=!1),WA.player.state.askForCloseComputerWebsite===void 0&&(WA.player.state.askForCloseComputerWebsite=!1),WA.player.state.askForSeeRoom===void 0&&(WA.player.state.askForSeeRoom=!1),WA.player.state.onVariableChange("askForDeactivateCamera").subscribe(e=>{e&&p("deactivateCamera",e)}),WA.player.state.onVariableChange("askForCloseComputerWebsite").subscribe(e=>{e&&O()}),WA.player.state.onVariableChange("askForSwitchLights").subscribe(e=>{p("switchLights",e)}),WA.player.state.onVariableChange("askForSeeRoom").subscribe(e=>{const o=$["room"+e];X(o.x,o.y),i(`fogs/fog${e}`,!1)});for(let e=0;e<l.length;e++)WA.room.onEnterLayer(l[e]).subscribe(()=>{b("deactivateCamera")!==l[e]&&(H()==="spy"?a("utils.mySelf","museum.cantStayInCamera","utils.close","discussion","bottom","middle","50vh","50vh",async()=>{WA.controls.disablePlayerControls(),await WA.player.moveTo(D[e].x,D[e].y),WA.controls.restorePlayerControls()}):(f=l[e],a("utils.mySelf","museum.cannotWalkInCameras","utils.close","discussion","bottom","middle","50vh","50vh",()=>{b("deactivateCamera")!==f&&WA.controls.disablePlayerControls()})))});let m=null;const S=async()=>{m=await WA.ui.website.open({url:`${k}/views/museum/buildingMap.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"right"},size:{height:"100vh",width:"50vw"}}),WA.controls.disablePlayerControls(),WA.player.state.askForCloseComputerWebsite=!1,_(),ee()},O=()=>{m==null||m.close(),m=null,Y(),WA.controls.restorePlayerControls(),WA.camera.followPlayer(!0)};let u=null;WA.room.onEnterLayer("computerZone").subscribe(()=>{u=WA.ui.displayActionMessage({message:s("utils.executeAction",{action:s("utils.hack")}),callback:()=>{N("useComputers")?S():a("utils.mySelf","museum.cannotUseComputers","utils.close","discussion")}})}),WA.room.onLeaveLayer("computerZone").subscribe(()=>{u==null||u.remove(),u=null})});
