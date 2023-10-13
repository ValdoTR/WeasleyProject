import{i as u,g as m}from"./job-3160909b.js";import{t as e,w as g,a as c}from"./layers-e0032f78.js";import{t as r}from"./translate-a3054a4c.js";import{s as b}from"./switchingTiles-f3944a3e.js";import{o as y}from"./discussion-878e36cf.js";import{i as h,s as p}from"./readRunes-07de4646.js";import{i as A,h as t,d as f}from"./inventory-74861710.js";import{n as d}from"./notifications-629b213b.js";import{b as k,i,h as n,a as l}from"./actionForAllPlayers-42768cef.js";import"./config-63dd91cb.js";WA.onInit().then(async()=>{await u(),A(),h(),p("runesReading",{content:"treasureEnigma.runes.content"});let s=null;b("rotatingStatues",()=>{d("treasureEnigma.hammer.opened","utils.success","success"),e("hammerZoneTop",!1),WA.room.onEnterLayer("hammerZone").subscribe(()=>{t("hammer")||(s=WA.ui.displayActionMessage({message:r("utils.executeAction",{action:r("treasureEnigma.hammer.action")}),callback:()=>{f({id:"hammer",name:"treasureEnigma.hammer.name",image:"hammer.png",description:"treasureEnigma.hammer.description"}),e("hammerZone",!1)}}))}),WA.room.onLeaveLayer("hammerZone").subscribe(()=>{s==null||s.remove(),s=null})},!0,"treasureEnigma.makeTurn");let a=null;k("openTreasureDoor",["breakHourglass1","breakHourglass2"],()=>{e("torchesOnBottom",!0),e("torchesOnTop",!0),e("treasureDoor",!1),WA.room.setTiles([{x:14,y:13,tile:null,layer:"treasureDoorCollisions"},{x:15,y:13,tile:null,layer:"treasureDoorCollisions"},{x:16,y:13,tile:null,layer:"treasureDoorCollisions"}])}),i("breakHourglass1",()=>{e("hourglass1FullBottom",!1),e("hourglass1FullTop",!1),e("hourglass1BrokenTop",!0),e("hourglass1BrokenBottom",!0)}),WA.room.onEnterLayer("breakHourglass1Zone").subscribe(()=>{t("hammer")&&!n("breakHourglass1")&&(a=WA.ui.displayActionMessage({message:r("utils.executeAction",{action:r("treasureEnigma.breakHourglass")}),callback:()=>{l("breakHourglass1")}}))}),WA.room.onLeaveLayer("breakHourglass1Zone").subscribe(()=>{a==null||a.remove(),a=null}),i("breakHourglass2",()=>{e("hourglass2FullBottom",!1),e("hourglass2FullTop",!1),e("hourglass2BrokenTop",!0),e("hourglass2BrokenBottom",!0)}),WA.room.onEnterLayer("breakHourglass2Zone").subscribe(()=>{t("hammer")&&!n("breakHourglass2")&&(a=WA.ui.displayActionMessage({message:r("utils.executeAction",{action:r("treasureEnigma.breakHourglass")}),callback:()=>{l("breakHourglass2")}}))}),WA.room.onLeaveLayer("breakHourglass2Zone").subscribe(()=>{a==null||a.remove(),a=null}),i("evilGuyAppears",async()=>{WA.controls.disablePlayerControls(),WA.camera.set(15*32+16,4*32+16,50,50,!0,!0),await g(1e3),setTimeout(()=>{e("badGuy",!0)},300),await c(["pouf1","pouf2","pouf3"],100),setTimeout(()=>{y("treasureEnigma.badGuy.name","treasureEnigma.badGuy.monologue","views.choice.close","discussion","bottom","middle","30vh","100vw",()=>{WA.nav.goToRoom(`./bomb.tmj#${m()}-entry`)})},300)});let o=null;WA.room.onEnterLayer("treasure").subscribe(()=>{o=WA.ui.displayActionMessage({message:r("utils.executeAction",{action:r("treasureEnigma.takeTheTreasure")}),callback:()=>{l("evilGuyAppears")}})}),WA.room.onLeaveLayer("treasure").subscribe(()=>{o==null||o.remove(),o=null})});
