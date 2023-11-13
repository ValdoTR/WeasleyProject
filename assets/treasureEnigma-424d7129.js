import{i as g,g as b}from"./job-1fdfc9c6.js";import{t as e,w as y,a as p}from"./layers-e0032f78.js";import{t as r}from"./translate-22b8282f.js";import{r as d,i as h,c as A,a as t,h as l,b as i,p as u}from"./sounds-961d1df1.js";import{s as f}from"./switchingTiles-b8fa62e7.js";import{o as k}from"./discussion-296f6ef1.js";import{i as v,s as W}from"./readRunes-727a08ee.js";import{i as T,h as n,d as E}from"./inventory-cb1b4c97.js";import{n as L}from"./notifications-03c7fa8b.js";WA.onInit().then(async()=>{await g();const m=WA.sound.loadSound(`${d}/sounds/treasure.mp3`);let c={volume:.5,loop:!0,rate:1,detune:1,delay:0,seek:0,mute:!1};m.play(c),h([{name:"evilGuySound",path:"evilGuy.mp3"}]),T(),v(),W("runesReading",{content:"treasureEnigma.runes.content"});let s=null;f("rotatingStatues",()=>{L("treasureEnigma.hammer.opened","utils.success","success"),e("hammerZoneTop",!1),WA.room.onEnterLayer("hammerZone").subscribe(()=>{n("hammer")||(s=WA.ui.displayActionMessage({message:r("utils.executeAction",{action:r("treasureEnigma.hammer.action")}),callback:()=>{E({id:"hammer",name:"treasureEnigma.hammer.name",image:"hammer.png",description:"treasureEnigma.hammer.description"}),e("hammerZone",!1)}}))}),WA.room.onLeaveLayer("hammerZone").subscribe(()=>{s==null||s.remove(),s=null})},!0,"treasureEnigma.makeTurn");let a=null;A("openTreasureDoor",["breakHourglass1","breakHourglass2"],()=>{u("successSound"),e("torchesOnBottom",!0),e("torchesOnTop",!0),e("treasureDoor",!1),WA.room.setTiles([{x:14,y:13,tile:null,layer:"treasureDoorCollisions"},{x:15,y:13,tile:null,layer:"treasureDoorCollisions"},{x:16,y:13,tile:null,layer:"treasureDoorCollisions"}])}),t("breakHourglass1",()=>{e("hourglass1FullBottom",!1),e("hourglass1FullTop",!1),e("hourglass1BrokenTop",!0),e("hourglass1BrokenBottom",!0)}),WA.room.onEnterLayer("breakHourglass1Zone").subscribe(()=>{n("hammer")&&!l("breakHourglass1")&&(a=WA.ui.displayActionMessage({message:r("utils.executeAction",{action:r("treasureEnigma.breakHourglass")}),callback:()=>{i("breakHourglass1")}}))}),WA.room.onLeaveLayer("breakHourglass1Zone").subscribe(()=>{a==null||a.remove(),a=null}),t("breakHourglass2",()=>{e("hourglass2FullBottom",!1),e("hourglass2FullTop",!1),e("hourglass2BrokenTop",!0),e("hourglass2BrokenBottom",!0)}),WA.room.onEnterLayer("breakHourglass2Zone").subscribe(()=>{n("hammer")&&!l("breakHourglass2")&&(a=WA.ui.displayActionMessage({message:r("utils.executeAction",{action:r("treasureEnigma.breakHourglass")}),callback:()=>{i("breakHourglass2")}}))}),WA.room.onLeaveLayer("breakHourglass2Zone").subscribe(()=>{a==null||a.remove(),a=null}),t("evilGuyAppears",async()=>{WA.controls.disablePlayerControls(),WA.camera.set(15*32+16,4*32+16,50,50,!0,!0),u("evilGuySound"),await y(1e3),setTimeout(()=>{e("badGuy",!0)},300),await p(["pouf1","pouf2","pouf3"],100),setTimeout(()=>{k("treasureEnigma.badGuy.name","treasureEnigma.badGuy.monologue","views.choice.close","discussion","bottom","middle","30vh","100vw",()=>{WA.nav.goToRoom(`./bomb.tmj#${b()}-entry`)})},300)});let o=null;WA.room.onEnterLayer("treasure").subscribe(()=>{o=WA.ui.displayActionMessage({message:r("utils.executeAction",{action:r("treasureEnigma.takeTheTreasure")}),callback:()=>{i("evilGuyAppears")}})}),WA.room.onLeaveLayer("treasure").subscribe(()=>{o==null||o.remove(),o=null})});