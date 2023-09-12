import{b as A}from"./init-22028896.js";import{i as y,s as h}from"./job-42f3db94.js";import{t}from"./translate-9557bc41.js";import{i as W,r as c}from"./secretPassages-cd3ee365.js";import{i as l}from"./hiddenZone-8ca7275f.js";import{i as L,s as b}from"./readRunes-5e4bee32.js";import{i as f,a as n,h as m,b as r}from"./actionForAllPlayers-0f29533a.js";import{s as g,t as d}from"./arrayFilling-3bc428d4.js";A();WA.onInit().then(()=>{y(),h("archaeologist"),W(["secretPassage"],[()=>{console.log("secret passage discovered !")}]);for(let e=1;e<11;e++)l([{stepIn:`eyes/eye${[e]}`,hide:`blackFogs/blackFog${[e]}`}]);l([{stepIn:"stepMapFog1",hide:"mapFog1"}]),l([{stepIn:"stepMapFog2",hide:"mapFogn"}]),L(),b("runeZone",{content:"escape.content",title:"escape.title"}),f("victory",["blue","yellow","red"],()=>{WA.room.hideLayer("runes/lightOff"),WA.room.showLayer("runes/lightOn"),c("victoryRunes"),WA.room.hideLayer("victoryRunesWall"),WA.room.showLayer("victoryRunes/openedWall")}),g("readRunesEscape",[["blue","yellow","red"]],()=>{u()},()=>{}),n("blue",e=>{e?(WA.room.hideLayer("runes/angel"),WA.room.showLayer("runes/angelOn")):(WA.room.hideLayer("runes/angelOn"),WA.room.showLayer("runes/angel"))},!1);let o=null;WA.room.onEnterLayer("runes/left").subscribe(()=>{!WA.state.runesVictory&&!m("blue")&&(o=WA.ui.displayActionMessage({message:t("escape.active"),callback:()=>{r("blue",!0),d("readRunesEscape","blue")}}))}),WA.room.onLeaveLayer("runes/left").subscribe(()=>{o==null||o.remove()}),n("red",e=>{e?(WA.room.hideLayer("runes/demon"),WA.room.showLayer("runes/demonOn")):(WA.room.hideLayer("runes/demonOn"),WA.room.showLayer("runes/demon"))},!1);let s=null;WA.room.onEnterLayer("runes/center").subscribe(()=>{!WA.state.runesVictory&&!WA.state.demon&&(s=WA.ui.displayActionMessage({message:t("escape.active"),callback:()=>{r("red",!0),d("readRunesEscape","red")}}))}),WA.room.onLeaveLayer("runes/center").subscribe(()=>{s==null||s.remove()}),n("yellow",e=>{e?(WA.room.hideLayer("runes/knight"),WA.room.showLayer("runes/knightOn")):(WA.room.hideLayer("runes/knightOn"),WA.room.showLayer("runes/knight"))},!1);let a=null;WA.room.onEnterLayer("runes/right").subscribe(()=>{!WA.state.runesVictory&&!WA.state.knight&&(a=WA.ui.displayActionMessage({message:t("escape.active"),callback:()=>{r("yellow",!0),d("readRunesEscape","yellow")}}))}),WA.room.onLeaveLayer("runes/right").subscribe(()=>{a==null||a.remove()});const u=()=>{setTimeout(()=>{r("red",!1),r("blue",!1),r("yellow",!1)},300)};WA.room.onEnterLayer("dalles/dK").subscribe(()=>{WA.room.showLayer("dalles/dKPush")}),WA.room.onLeaveLayer("dalles/dK").subscribe(()=>{WA.room.hideLayer("dalles/dKPush")}),WA.room.onEnterLayer("dalles/dA").subscribe(()=>{WA.room.showLayer("dalles/dAPush")}),WA.room.onLeaveLayer("dalles/dA").subscribe(()=>{WA.room.hideLayer("dalles/dAPush")}),WA.room.onEnterLayer("dalles/dD").subscribe(()=>{WA.room.showLayer("dalles/dDPush")}),WA.room.onLeaveLayer("dalles/dD").subscribe(()=>{WA.room.hideLayer("dalles/dDPush")}),n("artifactBrok",()=>{r("artifactBrok",!0),WA.room.hideLayer("artifact"),WA.room.showLayer("brokenArtifact"),c("finishedDoor"),WA.room.hideLayer("finishedWall1"),WA.room.showLayer("finishedDoor/openedDoor1"),WA.room.hideLayer("finishedWall2"),WA.room.showLayer("finishedDoor/openedDoor2"),WA.room.hideLayer("templeDoorEmpty"),WA.room.showLayer("templeDoorLight")});let i=null;WA.room.onEnterLayer("artifactZone").subscribe(()=>{m("artifactBrok")||(i=WA.ui.displayActionMessage({message:t("escape.artifact"),callback:()=>{r("artifactBrok")}}))}),WA.room.onLeaveLayer("artifactZone").subscribe(()=>{m("artifactBrok")||i==null||i.remove()})});
