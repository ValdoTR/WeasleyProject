import{b as A}from"./init-22028896.js";import{t as i}from"./translate-8d8a5063.js";import{r as d}from"./sounds-6715028d.js";import{o as u}from"./discussion-954a399d.js";A();const y=n=>{let s=n.length,l;for(;s>0;)l=Math.floor(Math.random()*s),s--,[n[s],n[l]]=[n[l],n[s]];return n},b=n=>window.btoa(n),m=new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");WA.onInit().then(()=>{WA.player.state.isInSelectionZone=!1;const n=WA.sound.loadSound(`${d}/sounds/starter.mp3`);let s={volume:.2,loop:!0,rate:1,detune:1,delay:0,seek:0,mute:!1};n.play(s);const l=()=>{WA.state.playersInSelectionZone="",WA.state.randomDuos=null,WA.state.askForRandomDuos=!0;let e=[];WA.state.onVariableChange("playersInSelectionZone").subscribe(t=>{t&&(console.log("NEW PLAYER",t),e.push(t))}),setTimeout(()=>{let t={};if(console.log("PLAYERS",e),e=e.filter(o=>o!==""&&o.match(m)),console.log("PLAYERS AFTER EMAIL REGEX",e),console.log("PLAYERS LENGTH",e.length),e.length%2===0&&e.length>0){e=y(e);for(let o=0;o<e.length;o+=2){const c=b(e[o])+"-"+b(e[o+1]);t[e[o]]=c,t[e[o+1]]=c}WA.state.randomDuos=JSON.stringify(t)}else WA.ui.banner.openBanner({id:"banner-players-not-even",text:i("lobby.notValid"),bgColor:"#ff0000",textColor:"#ffffff",closable:!0});WA.state.askForRandomDuos=!1},1e3)};let a=null;WA.room.onEnterLayer("random_zone").subscribe(()=>{a=WA.ui.displayActionMessage({message:i("utils.executeAction",{action:i("lobby.activateRandom")}),callback:()=>{l()}})}),WA.room.onLeaveLayer("random_zone").subscribe(()=>{a==null||a.remove(),a=null}),WA.room.onEnterLayer("selection_zone").subscribe(async()=>{WA.player.uuid.match(m)?(WA.player.state.isInSelectionZone=!0,WA.room.setTiles([{x:4,y:14,tile:"block",layer:"collisions"},{x:5,y:14,tile:"block",layer:"collisions"},{x:6,y:14,tile:"block",layer:"collisions"}])):(WA.controls.disablePlayerControls(),await WA.player.moveTo(5*32,15*32),WA.controls.restorePlayerControls(),u("lobby.admin","lobby.connectToParticipate"))}),WA.state.onVariableChange("askForRandomDuos").subscribe(e=>{e&&WA.player.state.isInSelectionZone&&(WA.state.playersInSelectionZone=WA.player.uuid)}),WA.state.onVariableChange("randomDuos").subscribe(e=>{if(e){const o=JSON.parse(e)[WA.player.uuid];o&&(n.stop(),WA.nav.goToPage(`https://play.workadventu.re/_/${o}/morganehuebra.github.io/WeasleyProject/maps/choice.tmj`))}});let r=null;WA.room.onEnterLayer("infos_zone").subscribe(()=>{r=WA.ui.displayActionMessage({message:i("utils.executeAction",{action:i("lobby.displayInfos")}),callback:()=>{u("lobby.infoPanel","lobby.whatIsThat")}})}),WA.room.onLeaveLayer("infos_zone").subscribe(()=>{r==null||r.remove(),r=null})});