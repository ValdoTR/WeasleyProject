import{t as r}from"./translate-2bf93a98.js";import{o as y}from"./discussion-7af67d0c.js";import{s as W,t as e}from"./arrayFilling-f5461f8d.js";import"./config-63dd91cb.js";WA.onInit().then(()=>{{const i=()=>{WA.room.hideLayer("notes/do"),WA.room.hideLayer("notes/re"),WA.room.hideLayer("notes/mi"),WA.room.hideLayer("notes/fa"),WA.room.hideLayer("notes/sol"),WA.room.hideLayer("notes/la"),WA.room.hideLayer("notes/si"),WA.room.showLayer("notes_grey")};WA.state.victory&&i();const o="/sounds/",s={volume:1,loop:!1,rate:1,detune:1,delay:0,seek:0,mute:!1};WA.state.onVariableChange("victory").subscribe(A=>{A&&i()}),W("musicTiles",[["fa","si","do","re","mi","fa","re","fa","re","fa","si","re","si","sol","re","si"]],()=>{WA.nav.goToRoom("./music.tmj")},()=>{WA.state.victory=!0,i()});const n=WA.sound.loadSound(`${o}do.mp3`),a=WA.sound.loadSound(`${o}re.mp3`),m=WA.sound.loadSound(`${o}mi.mp3`),l=WA.sound.loadSound(`${o}fa.mp3`),u=WA.sound.loadSound(`${o}sol.mp3`),c=WA.sound.loadSound(`${o}la.mp3`),d=WA.sound.loadSound(`${o}si.mp3`);console.log(WA.state.victory),WA.room.onEnterLayer("notes/do").subscribe(()=>{WA.state.victory||(n.play(s),e("musicTiles","do"))}),WA.room.onEnterLayer("notes/re").subscribe(()=>{WA.state.victory||(a.play(s),e("musicTiles","re"))}),WA.room.onEnterLayer("notes/mi").subscribe(()=>{WA.state.victory||(m.play(s),e("musicTiles","mi"))}),WA.room.onEnterLayer("notes/fa").subscribe(()=>{WA.state.victory||(l.play(s),e("musicTiles","fa"))}),WA.room.onEnterLayer("notes/sol").subscribe(()=>{WA.state.victory||(u.play(s),e("musicTiles","sol"))}),WA.room.onEnterLayer("notes/la").subscribe(()=>{WA.state.victory||(c.play(s),e("musicTiles","la"))}),WA.room.onEnterLayer("notes/si").subscribe(()=>{WA.state.victory||(d.play(s),e("musicTiles","si"))});let t;WA.room.onEnterLayer("infos").subscribe(()=>{t=WA.ui.displayActionMessage({message:r("utils.executeAction",{action:r("music.display")}),callback:()=>{y("views.music.title","views.music.text")}})}),WA.room.onLeaveLayer("infos").subscribe(()=>{t.remove()})}});
