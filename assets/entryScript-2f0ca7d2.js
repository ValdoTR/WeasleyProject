import{c as m,i as d,s as f}from"./job-2fb66315.js";import{i as p,a as h,s as y,b as A}from"./hooking-cbbd7894.js";import{t as l}from"./translate-2bf93a98.js";import{f as g}from"./lobby-840e0083.js";import{i as I,s as W}from"./readRunes-f0a8bf88.js";import{i as L,d as c,n as u}from"./notifications-868cd5b2.js";import{s as $,t as i}from"./arrayFilling-f5461f8d.js";import"./config-63dd91cb.js";let n=null;const b=e=>{const o=WA.state.mapWidth,t=WA.state.mapHeight,s=[];for(let a=1;a<o;a++)for(let r=1;r<t;r++)s.push({x:a,y:r,tile:null,layer:`${e}/block`});WA.room.setTiles(s)},T=(e=["secretPassageZone"],o=null)=>{for(let t=0;t<e.length;t++)WA.state[`${e[t]}Discovered`]?(WA.room.hideLayer(`${e[t]}/trace`),WA.room.showLayer(`${e[t]}/found`),WA.room.hideLayer(`${e[t]}/disappear`)):(m("findSecretPassages")?(WA.room.showLayer(`${e[t]}/trace`),WA.room.onEnterLayer(`${e[t]}/trace`).subscribe(()=>{WA.state[`${e[t]}Discovered`]||(n=WA.ui.displayActionMessage({message:l("utils.executeAction",{action:l("modules.secretPassage.findSecretPassage")}),callback:()=>{WA.state[`${e[t]}Discovered`]=!0}}))}),WA.room.onLeaveLayer(`${e[t]}/trace`).subscribe(()=>{n==null||n.remove()})):(WA.room.hideLayer(`${e[t]}/trace`),WA.room.hideLayer(`${e[t]}/found`),WA.room.hideLayer(`${e[t]}/disappear`)),WA.state.onVariableChange(`${e[t]}Discovered`).subscribe(()=>{v(e[t],o?o[t]:null)}))},v=(e,o=null)=>{WA.room.hideLayer(`${e}/trace`),WA.room.showLayer(`${e}/search`),setTimeout(()=>{WA.room.showLayer(`${e}/found`),WA.room.hideLayer(`${e}/disappear`),b(e),setTimeout(()=>{WA.room.hideLayer(`${e}/search`),o&&o()},1e3)},3e3)};WA.onInit().then(()=>{console.log("INITIALISATION"),d(),f("spy"),console.log("HERE"),p(["excavation"],[()=>{console.log("test callback after excavation")}]),T(["secretPassage"],[()=>{console.log("test callback after finding secret passage")}]),h([{stepIn:"hiddenZoneFloor",hide:"hiddenZoneTop"}]),console.log("Initiate switching tiles"),y("switchingTiles",()=>console.log("OK !"),!0,"test"),console.log("Initiate runes reading !"),I(),W("runeZone",{content:"Il était une fois, dans une royaume lointain, une magnifique princesse. Il était une fois, dans une royaume lointain, une magnifique princesse. Il était une fois, dans une royaume lointain, une magnifique princesse. Il était une fois, dans une royaume lointain, une magnifique princesse. Il était une fois, dans une royaume lointain, une magnifique princesse. Il était une fois, dans une royaume lointain, une magnifique princesse. ",title:"Cendrillon"}),console.log("Initiate inventory !"),L(),c({id:"test",name:"test",description:"Ma super description de test"}),c({id:"test2",name:"test2",image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",description:"Ma super description de test2"}),console.log("Initiate Hooking"),A("hooking",()=>{console.log("Crochetage effectué !")}),console.log("NOTIFY"),u("Ceci est le contenu de ma notification d'info","Mon super titre","info"),setTimeout(()=>{u("Ceci est le contenu de ma notification d'erreur","Erreur","error")},1e3),console.log("ARRAY FILLING"),$("test",[["test","test","test"]],()=>console.log("WRONG"),()=>console.log("RIGHT")),i("test","test"),i("test","test2"),i("test","test"),i("test","test"),i("test","test2"),console.log("HERE"),i("test","test"),i("test","test"),i("test","test"),console.log("JAMBON"),i("test","jambon"),console.log("LOBBY INITIALISATION"),g()}).catch(e=>console.error(e));
