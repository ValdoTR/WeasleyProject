import{t as m}from"./translate-cf2b8c4c.js";import{c as i}from"./job-d2e9865b.js";let a=null;const $=(e=["excavationZone"],r=null)=>{for(let s=0;s<e.length;s++)WA.state[`${e[s]}Discovered`]?(WA.room.hideLayer(`${e[s]}/trace`),WA.room.hideLayer(`${e[s]}/search`),WA.room.showLayer(`${e[s]}/found`),r&&r[s]&&r[s]()):(i("makeExcavation")?(WA.room.showLayer(`${e[s]}/trace`),WA.room.onEnterLayer(`${e[s]}/trace`).subscribe(()=>{WA.state[`${e[s]}Discovered`]||(a=WA.ui.displayActionMessage({message:m("utils.executeAction",{action:m("modules.excavation.makeExcavations")}),callback:()=>{WA.state[`${e[s]}Discovered`]=!0}}))}),WA.room.onLeaveLayer(`${e[s]}/trace`).subscribe(()=>{a==null||a.remove()})):(WA.room.hideLayer(`${e[s]}/trace`),WA.room.hideLayer(`${e[s]}/search`),WA.room.hideLayer(`${e[s]}/found`)),WA.state.onVariableChange(`${e[s]}Discovered`).subscribe(()=>{o(e[s],r?r[s]:null)}))},o=(e,r=null)=>{WA.room.hideLayer(`${e}/trace`),WA.room.showLayer(`${e}/search`),setTimeout(()=>{WA.room.showLayer(`${e}/found`),setTimeout(()=>{WA.room.hideLayer(`${e}/search`),r&&r()},1e3)},3e3)},L=e=>{for(let r=0;r<e.length;r++)WA.room.onEnterLayer(e[r].stepIn).subscribe(()=>{console.log("caché"),WA.room.hideLayer(e[r].hide)}),WA.room.onLeaveLayer(e[r].stepIn).subscribe(()=>{console.log("pas caché"),WA.room.showLayer(e[r].hide)})};let t=null;const u=(e,r=null)=>{WA.state[`${e}Discovered`]?(WA.room.hideLayer(`${e}/trace`),WA.room.hideLayer(`${e}/search`),WA.room.hideLayer(`${e}/disappear`),WA.room.showLayer(`${e}/found`),r&&r()):(i("makeHooking")?(WA.room.showLayer(`${e}/trace`),WA.room.onEnterLayer(`${e}/trace`).subscribe(()=>{WA.state[`${e}Discovered`]||(t=WA.ui.displayActionMessage({message:m("utils.executeAction",{action:m("modules.hooking.hook")}),callback:()=>{WA.state[`${e}Discovered`]=!0}}))}),WA.room.onLeaveLayer(`${e}/trace`).subscribe(()=>{t==null||t.remove()})):(WA.room.hideLayer(`${e}/trace`),WA.room.hideLayer(`${e}/search`),WA.room.hideLayer(`${e}/found`),WA.room.showLayer(`${e}/disappear`)),WA.state.onVariableChange(`${e}Discovered`).subscribe(()=>{A(e,r)}))},A=(e,r=null)=>{WA.room.hideLayer(`${e}/trace`),WA.room.showLayer(`${e}/search`),setTimeout(()=>{WA.room.showLayer(`${e}/found`),WA.room.hideLayer(`${e}/disappear`),setTimeout(()=>{WA.room.hideLayer(`${e}/search`),r&&r()},1e3)},3e3)};export{L as a,$ as i,u as s};
