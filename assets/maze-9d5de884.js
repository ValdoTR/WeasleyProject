import{i as u}from"./job-1d140806.js";import{i as A}from"./excavations-ce615ee2.js";import{t as e}from"./translate-a3054a4c.js";import{i as h}from"./hiddenZone-8ca7275f.js";import{i as g}from"./switchingTiles-888bfc8e.js";import{i as W,r as n,d as l}from"./inventory-c3782c83.js";import{s as b}from"./hooking-315a2a49.js";import"./sounds-0ebf4287.js";import"./notifications-05941630.js";WA.onInit().then(async()=>{for(let o=1;o<10;o++)h([{stepIn:`fogFloor/fog${[o]}`,hide:`fog/fog${[o]}`}]);WA.player.state.hasFoundBlueSeed=!1,WA.player.state.hasFoundGreenSeed=!1,WA.player.state.hasFoundRedSeed=!1,W(),await u();const c=()=>{WA.state.blueFire&&(WA.room.hideLayer("torchesTop/offTop/torcheBlueOffTop"),WA.room.hideLayer("torchesBot/offBot/torcheBlueOffBot"),WA.room.showLayer("torchesTop/onTop/torcheBlueOnTop"),WA.room.showLayer("torchesBot/onBot/torcheBlueOnBot"))};WA.state.onVariableChange("blueFire").subscribe(o=>{o&&c()}),WA.player.state.onVariableChange("hasFoundBlueSeed").subscribe(()=>{WA.room.hideLayer("blueSeed")});const d=()=>{WA.state.greenFire&&(WA.room.hideLayer("torchesTop/offTop/torcheGreenOffTop"),WA.room.hideLayer("torchesBot/offBot/torcheGreenOffBot"),WA.room.showLayer("torchesTop/onTop/torcheGreenOnTop"),WA.room.showLayer("torchesBot/onBot/torcheGreenOnBot"))};WA.state.onVariableChange("greenFire").subscribe(o=>{o&&d()}),WA.player.state.onVariableChange("hasFoundGreenSeed").subscribe(()=>{WA.room.hideLayer("excavations/exca6/found")});const m=()=>{WA.state.redFire&&(WA.room.hideLayer("torchesTop/offTop/torcheRedOffTop"),WA.room.hideLayer("torchesBot/offBot/torcheRedOffBot"),WA.room.showLayer("torchesTop/onTop/torcheRedOnTop"),WA.room.showLayer("torchesBot/onBot/torcheRedOnBot"))};WA.state.onVariableChange("redFire").subscribe(o=>{o&&m()}),WA.player.state.onVariableChange("hasFoundRedSeed").subscribe(()=>{console.log("todo")}),h([{stepIn:"hiddenZoneFloor/hiddenZoneFloor",hide:"hiddenZoneTop"}]),b("hiddenZoneFloor/hooking",()=>{l({id:"gem",name:e("maze.gem"),image:"gem.png",description:e("maze.gemDescription")}),WA.player.state.hasFoundRedSeed=!0}),A(["excavations/exca1","excavations/exca2","excavations/exca3","excavations/exca4","excavations/exca5"],[()=>{console.log("Excavation has been made !")}]);let a=null;A(["excavations/exca6"],[()=>{WA.room.onEnterLayer("excavations/exca6/found").subscribe(()=>{WA.player.state.hasFoundGreenSeed||(a=WA.ui.displayActionMessage({message:e("maze.takeSeedMsg"),callback:()=>{l({id:"graine",name:e("maze.seed"),image:"seed.png",description:e("maze.seedDescription")}),WA.player.state.hasFoundGreenSeed=!0}}))}),WA.room.onLeaveLayer("excavations/exca6/trace").subscribe(()=>{a==null||a.remove()})}]),g(["switchingTiles"],[()=>{WA.room.hideLayer("blueArtifact"),WA.room.showLayer("blueSeed"),WA.room.showLayer("switchTileVictory"),WA.room.onEnterLayer("blueSeed").subscribe(()=>{WA.player.state.hasFoundBlueSeed||(a=WA.ui.displayActionMessage({message:e("maze.takePowderMsg"),callback:()=>{l({id:"powder",name:e("maze.powder"),image:"shard.png",description:e("maze.powderDescription")}),WA.player.state.hasFoundBlueSeed=!0}}))}),WA.room.onLeaveLayer("blueSeed").subscribe(()=>{a==null||a.remove()})}]);let r=null;WA.room.onEnterLayer("triggerBlue").subscribe(()=>{WA.state.blueFire?r=WA.ui.displayActionMessage({message:e("maze.fireOn"),callback:()=>{}}):WA.player.state.hasFoundBlueSeed?r=WA.ui.displayActionMessage({message:e("maze.triggerBlue"),callback:()=>{n("powder"),WA.state.blueFire=!0}}):r=WA.ui.displayActionMessage({message:e("maze.empty"),callback:()=>{}})}),WA.room.onLeaveLayer("triggerBlue").subscribe(()=>{r==null||r.remove()});let s=null;WA.room.onEnterLayer("triggerRed").subscribe(()=>{WA.state.redFire?s=WA.ui.displayActionMessage({message:e("maze.fireOn"),callback:()=>{}}):WA.player.state.hasFoundRedSeed?s=WA.ui.displayActionMessage({message:e("maze.triggerRed"),callback:()=>{n("gem"),WA.state.redFire=!0}}):s=WA.ui.displayActionMessage({message:e("maze.empty"),callback:()=>{}})}),WA.room.onLeaveLayer("triggerRed").subscribe(()=>{s==null||s.remove()});let t=null;WA.room.onEnterLayer("triggerGreen").subscribe(()=>{WA.state.greenFire?t=WA.ui.displayActionMessage({message:e("maze.fireOn"),callback:()=>{}}):WA.player.state.hasFoundGreenSeed?t=WA.ui.displayActionMessage({message:e("maze.triggerGreen"),callback:()=>{n("seed"),WA.state.greenFire=!0}}):t=WA.ui.displayActionMessage({message:e("maze.empty"),callback:()=>{}})}),WA.room.onLeaveLayer("triggerGreen").subscribe(()=>{t==null||t.remove()}),WA.state.onVariableChange("blueFire").subscribe(()=>{i()}),WA.state.onVariableChange("redFire").subscribe(()=>{i()}),WA.state.onVariableChange("greenFire").subscribe(()=>{i()});const i=()=>{WA.state.blueFire&&WA.state.redFire&&WA.state.greenFire&&(WA.room.showLayer("dragonTopLight"),WA.room.showLayer("dragonLight"),WA.room.showLayer("mountainDoorAnimate"),WA.room.setTiles([{x:16,y:4,tile:null,layer:"collisions"}]),c(),d(),m())};i()});