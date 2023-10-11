import{i as n,h as s,a as c,r as y}from"./actionForAllPlayers-1b20265c.js";import{i as f,g as t}from"./job-de34a330.js";import{t as e}from"./translate-ab684b55.js";import{t as m}from"./layers-e0032f78.js";import{i as p}from"./secretPassages-6c20403d.js";import{o as b}from"./discussion-2918c9d6.js";import{n as A}from"./notifications-85d89afd.js";let a=null,l=null;const d=async()=>{const o=await WA.player.getPosition();WA.camera.set(o.x,o.y,100,100)};WA.onInit().then(()=>{WA.camera.followPlayer(!0),WA.camera.set(665,838),f(),d(),b(e("utils.mySelf"),e(`bomb.story.${t()}`),"views.choice.close","discussion","middle","middle","50vh","50vh",()=>{s("freeSpy")?(m("rock",!1),WA.room.setTiles([{x:15,y:7,tile:null,layer:"rockCollisions"},{x:15,y:8,tile:null,layer:"rockCollisions"}])):t()==="spy"&&(WA.controls.disablePlayerControls(),WA.player.setOutlineColor(255,0,0))}),WA.player.state.askForDefuseBomb===void 0&&(WA.player.state.askForDefuseBomb=!1),WA.player.state.askForBoom===void 0&&(WA.player.state.askForBoom=!1),p(["secretPassage"],[()=>{console.log("secret passage discovered !")}]),n("freeSpy",()=>{m("rock",!1),WA.room.setTiles([{x:15,y:7,tile:null,layer:"rockCollisions"},{x:15,y:8,tile:null,layer:"rockCollisions"}]),t()==="spy"&&(WA.player.removeOutlineColor(),WA.controls.restorePlayerControls())}),n("boom",()=>{b(e("bomb.bomb.failure.name"),e("bomb.bomb.failure.message"),"views.choice.close","discussion")}),n("defuseBomb",()=>{m("bomb",!1),u(),A(e("bomb.success"),e("utils.success"),"success")}),t()==="spy"&&WA.ui.actionBar.addButton({id:"cheatSheetButton",label:e("bomb.cheatSheet"),callback:async()=>{l?W():await h()}});let o=null;WA.room.onEnterLayer("saveSpyZone").subscribe(()=>{!s("boom")&&!s("defuseBomb")?b(e("utils.mySelf"),e("bomb.freeSpy.noTime"),"views.choice.close","discussion"):s("freeSpy")||(o=WA.ui.displayActionMessage({message:e("utils.executeAction",{action:e("bomb.freeSpy.free")}),callback:()=>{c("freeSpy")}}),WA.room.onLeaveLayer("saveSpyZone").subscribe(()=>{o==null||o.remove(),o=null}))});let i=null;WA.room.onEnterLayer("bombZone").subscribe(()=>{!s("boom")&&!s("defuseBomb")&&(i=WA.ui.displayActionMessage({message:e("utils.executeAction",{action:e("bomb.bomb.defuse")}),callback:async()=>{WA.controls.disablePlayerControls(),a=await WA.ui.website.open({url:`${y}/views/bomb/bomb.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}})}})),WA.room.onLeaveLayer("bombZone").subscribe(()=>{i==null||i.remove(),i=null})}),WA.player.state.onVariableChange("askForBoom").subscribe(r=>{r&&(u(),c("boom"))}),WA.player.state.onVariableChange("askForDefuseBomb").subscribe(r=>{r&&c("defuseBomb")})});const h=async()=>{l=await WA.ui.website.open({url:`${y}/views/bomb/cheatSheet.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}})},W=()=>{l==null||l.close(),l=null},u=()=>{a==null||a.close(),a=null,WA.controls.restorePlayerControls()};
