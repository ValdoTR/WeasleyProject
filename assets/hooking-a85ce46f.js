import{t as $}from"./translate-80cbe278.js";import{c as u}from"./job-fcfd287b.js";let s=null;const h=(e=["excavationZone"],t=null)=>{for(let r=0;r<e.length;r++)WA.state[`${e[r]}Discovered`]?(WA.room.hideLayer(`${e[r]}/trace`),WA.room.hideLayer(`${e[r]}/search`),WA.room.showLayer(`${e[r]}/found`),t&&t[r]&&t[r]()):(u("makeExcavation")?(WA.room.showLayer(`${e[r]}/trace`),WA.room.onEnterLayer(`${e[r]}/trace`).subscribe(()=>{WA.state[`${e[r]}Discovered`]||(s=WA.ui.displayActionMessage({message:$("utils.executeAction",{action:$("modules.excavation.makeExcavations")}),callback:()=>{WA.state[`${e[r]}Discovered`]=!0}}))}),WA.room.onLeaveLayer(`${e[r]}/trace`).subscribe(()=>{s==null||s.remove()})):(WA.room.hideLayer(`${e[r]}/trace`),WA.room.hideLayer(`${e[r]}/search`),WA.room.hideLayer(`${e[r]}/found`)),WA.state.onVariableChange(`${e[r]}Discovered`).subscribe(()=>{y(e[r],t?t[r]:null)}))},y=(e,t=null)=>{WA.room.hideLayer(`${e}/trace`),WA.room.showLayer(`${e}/search`),setTimeout(()=>{WA.room.showLayer(`${e}/found`),setTimeout(()=>{WA.room.hideLayer(`${e}/search`),t&&t()},1e3)},3e3)},l=e=>{for(let t=0;t<e.length;t++)WA.room.onEnterLayer(e[t].stepIn).subscribe(()=>{WA.room.hideLayer(e[t].hide)}),WA.room.onLeaveLayer(e[t].stepIn).subscribe(()=>{WA.room.showLayer(e[t].hide)})},c=(e=["switchingTiles"],t=[])=>{for(let r=0;r<e.length;r++){const W=JSON.parse(WA.state[`${e[r]}VictoryCondition`]),d=WA.state[`${e[r]}TilesNumber`];for(let a=0;a<Object.keys(W).length;a++)m(e[r],a),WA.room.onEnterLayer(`${e[r]}/${a}_layer/zone`).subscribe(()=>{if(!WA.state[`${e[r]}IsVictory`]){let A=WA.state[`${e[r]}_${a}_value`]?WA.state[`${e[r]}_${a}_value`]:0;WA.state[`${e[r]}_${a}_value`]=(A+1)%d,L(e[r],W)&&(WA.state[`${e[r]}IsVictory`]=!0)}}),WA.state.onVariableChange(`${e[r]}IsVictory`).subscribe(A=>{A&&(t!=null&&t[r])&&t[r]()}),WA.state.onVariableChange(`${e[r]}_${a}_value`).subscribe(()=>{m(e[r],a)})}},L=(e,t)=>{for(let r=0;r<Object.keys(t).length;r++)if(WA.state[`${e}_${r}_value`]!=t[r])return!1;return!0},m=(e,t)=>{WA.room.hideLayer(`${e}/${t}_layer`),WA.room.showLayer(`${e}/${t}_layer/${WA.state[`${e}_${t}_value`]}`)};let o=null;const _=(e,t=null)=>{WA.state[`${e}Discovered`]?(WA.room.hideLayer(`${e}/trace`),WA.room.hideLayer(`${e}/search`),WA.room.hideLayer(`${e}/disappear`),WA.room.showLayer(`${e}/found`),t&&t()):(u("makeHooking")?(WA.room.showLayer(`${e}/trace`),WA.room.onEnterLayer(`${e}/trace`).subscribe(()=>{WA.state[`${e}Discovered`]||(o=WA.ui.displayActionMessage({message:$("utils.executeAction",{action:$("modules.hooking.hook")}),callback:()=>{WA.state[`${e}Discovered`]=!0}}))}),WA.room.onLeaveLayer(`${e}/trace`).subscribe(()=>{o==null||o.remove()})):(WA.room.hideLayer(`${e}/trace`),WA.room.hideLayer(`${e}/search`),WA.room.hideLayer(`${e}/found`),WA.room.showLayer(`${e}/disappear`)),WA.state.onVariableChange(`${e}Discovered`).subscribe(()=>{i(e,t)}))},i=(e,t=null)=>{WA.room.hideLayer(`${e}/trace`),WA.room.showLayer(`${e}/search`),setTimeout(()=>{WA.room.showLayer(`${e}/found`),WA.room.hideLayer(`${e}/disappear`),setTimeout(()=>{WA.room.hideLayer(`${e}/search`),t&&t()},1e3)},3e3)};export{l as a,c as b,h as i,_ as s};
