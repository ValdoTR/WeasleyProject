import{i as t}from"./job-1d140806.js";import"./translate-a3054a4c.js";import{i as r,s as a}from"./readRunes-6236d846.js";import{i as n,p as o}from"./sounds-0ebf4287.js";import{s as m,t as e}from"./arrayFilling-3bc428d4.js";WA.onInit().then(async()=>{await t(),n([{name:"doSound",path:"do.mp3"},{name:"reSound",path:"re.mp3"},{name:"miSound",path:"mi.mp3"},{name:"faSound",path:"fa.mp3"},{name:"solSound",path:"sol.mp3"},{name:"laSound",path:"la.mp3"},{name:"siSound",path:"si.mp3"}]);{const i=()=>{WA.room.hideLayer("notes/do"),WA.room.hideLayer("notes/re"),WA.room.hideLayer("notes/mi"),WA.room.hideLayer("notes/fa"),WA.room.hideLayer("notes/sol"),WA.room.hideLayer("notes/la"),WA.room.hideLayer("notes/si"),WA.room.showLayer("notes_grey")};WA.state.victory&&i(),WA.state.onVariableChange("victory").subscribe(s=>{s&&i()}),m("musicTiles",[["fa","si","do","re","mi","fa","re","fa","re","fa","si","re","si","sol","re","si"]],()=>{o("failureSound"),WA.nav.goToRoom("./music.tmj")},()=>{WA.state.victory=!0,o("successSound"),i()}),WA.room.onEnterLayer("notes/do").subscribe(()=>{WA.state.victory||(o("doSound"),e("musicTiles","do"))}),WA.room.onEnterLayer("notes/re").subscribe(()=>{WA.state.victory||(o("reSound"),e("musicTiles","re"))}),WA.room.onEnterLayer("notes/mi").subscribe(()=>{WA.state.victory||(o("miSound"),e("musicTiles","mi"))}),WA.room.onEnterLayer("notes/fa").subscribe(()=>{WA.state.victory||(o("faSound"),e("musicTiles","fa"))}),WA.room.onEnterLayer("notes/sol").subscribe(()=>{WA.state.victory||(o("solSound"),e("musicTiles","sol"))}),WA.room.onEnterLayer("notes/la").subscribe(()=>{WA.state.victory||(o("laSound"),e("musicTiles","la"))}),WA.room.onEnterLayer("notes/si").subscribe(()=>{WA.state.victory||(o("siSound"),e("musicTiles","si"))}),r(),a("infos",{content:"views.music.text",title:"views.music.title"})}});