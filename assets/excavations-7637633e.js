import{t}from"./translate-9557bc41.js";import{c as m}from"./job-42f3db94.js";let s=null;const h=(r=["excavationZone"],o=null)=>{for(let e=0;e<r.length;e++)WA.state[`${r[e]}Discovered`]?(WA.room.hideLayer(`${r[e]}/trace`),WA.room.hideLayer(`${r[e]}/search`),WA.room.showLayer(`${r[e]}/found`),o&&o[e]&&o[e]()):(m("makeExcavation")?(WA.room.showLayer(`${r[e]}/trace`),WA.room.onEnterLayer(`${r[e]}/trace`).subscribe(()=>{WA.state[`${r[e]}Discovered`]||(s=WA.ui.displayActionMessage({message:t("utils.executeAction",{action:t("modules.excavation.makeExcavations")}),callback:()=>{WA.state[`${r[e]}Discovered`]=!0}}))}),WA.room.onLeaveLayer(`${r[e]}/trace`).subscribe(()=>{s==null||s.remove()})):(WA.room.hideLayer(`${r[e]}/trace`),WA.room.hideLayer(`${r[e]}/search`),WA.room.hideLayer(`${r[e]}/found`)),WA.state.onVariableChange(`${r[e]}Discovered`).subscribe(()=>{i(r[e],o?o[e]:null)}))},i=(r,o=null)=>{WA.room.hideLayer(`${r}/trace`),WA.room.showLayer(`${r}/search`),setTimeout(()=>{WA.room.showLayer(`${r}/found`),setTimeout(()=>{WA.room.hideLayer(`${r}/search`),o&&o()},1e3)},3e3)};export{h as i};
