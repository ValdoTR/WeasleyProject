import{i as m,r as u,g as r,s as y}from"./job-7cad4490.js";import{t as e}from"./translate-80cbe278.js";import{o as g}from"./discussion-7af67d0c.js";import{i as p,g as A,d as f}from"./notifications-106b3a79.js";import"./config-63dd91cb.js";const c=async()=>(await WA.players.configureTracking(),WA.players.list()),b=async()=>{const s=await c();for(let t of s)if(!t.state.job)return!1;return WA.state.allPlayersGotJob=!0,!0};WA.onInit().then(()=>{p(),m(),WA.state.onVariableChange("allPlayersGotJob").subscribe(o=>{o&&WA.nav.goToRoom("./maze.tmj")}),u();let s;WA.room.onEnterLayer("talk").subscribe(()=>{s=WA.ui.displayActionMessage({message:e("utils.executeAction",{action:e("choice.talk")}),callback:()=>{g("views.choice.title","views.choice.text")}})}),WA.room.onLeaveLayer("talk").subscribe(()=>{s.remove()});let t;WA.room.onEnterLayer("spy").subscribe(async()=>{const o=await c();let a=!1;for(let i of o)i.state.job==="spy"&&(a=!0);!a&&!r()&&(t=WA.ui.displayActionMessage({message:e("utils.executeAction",{action:e("choice.spyMessage")}),callback:()=>{y("spy"),console.log(r()),b()}}))}),WA.room.onLeaveLayer("spy").subscribe(()=>{t.remove()});let n;WA.room.onEnterLayer("archeo").subscribe(async()=>{const o=await c();let a=!1;for(let i of o)i.state.job==="archaeologist"&&(a=!0);!a&&!r()&&(n=WA.ui.displayActionMessage({message:e("utils.executeAction",{action:e("choice.archeoMessage")}),callback:()=>{y("archaeologist"),console.log(r()),b()}}))}),WA.room.onLeaveLayer("archeo").subscribe(()=>{n.remove()});let l;WA.room.onEnterLayer("croissants").subscribe(()=>{l=WA.ui.displayActionMessage({message:e("utils.executeAction",{action:e("choice.takeCroissantMessage")}),callback:()=>{const o=A().length;f({id:`croissant${o}`,name:"Croissant",description:"choice.looksDelicious",image:"croissant.png"})}})}),WA.room.onLeaveLayer("croissants").subscribe(()=>{l.remove()})}).catch(s=>console.error(s));
