import{t as r}from"./translate-ab684b55.js";import{r as c}from"./config-63dd91cb.js";const l={archaeologist:{useComputers:!1,speakAncienLanguages:!0,readRunes:!0,makeExcavation:!0,findSecretPassages:!1,makeHooking:!1},spy:{useComputers:!0,speakAncienLanguages:!1,readRunes:!1,makeExcavation:!1,findSecretPassages:!0,makeHooking:!0}},p="jobWalletButton";let o=null;const W=e=>{WA.player.state.saveVariable("job",e,{public:!0,persist:!0,scope:"world"});let a=WA.player.uuid,t=a==null?void 0:a.replaceAll(".","").replaceAll("@","");fetch(`https://weasley-project-default-rtdb.europe-west1.firebasedatabase.app/userRole/${t}.json`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({playerId:a,job:e})}).then(s=>s.json()).then(s=>console.log("response",JSON.stringify(s)))},d=()=>WA.player.state.job,A=()=>{WA.player.state.saveVariable("job",null,{public:!0,persist:!0});let e=WA.player.uuid,a=e==null?void 0:e.replaceAll(".","").replaceAll("@","");fetch(`https://weasley-project-default-rtdb.europe-west1.firebasedatabase.app/userRole/${a}.json`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({playerId:e,job:null})}).then(t=>t.json()).then(t=>console.log("response",JSON.stringify(t)))},u=async()=>{WA.controls.disablePlayerControls(),o=await WA.ui.website.open({url:`${c}/views/jobWallet/jobWallet.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForJobWalletWebsiteClose=!1},f=()=>{WA.player.state.askForJobWalletWebsiteClose=!0},b=()=>{o==null||o.close(),o=null,WA.controls.restorePlayerControls()},n=()=>{WA.ui.actionBar.addButton({id:p,label:r("modules.job.myJobWallet.label"),callback:async()=>{o?b():await u()}})},i=()=>{WA.ui.actionBar.removeButton(p)},h=async()=>{console.log("WA.player.state.job : ",WA.player.state.job);let e=WA.player.uuid,a=e==null?void 0:e.replaceAll(".","").replaceAll("@","");await fetch(`https://weasley-project-default-rtdb.europe-west1.firebasedatabase.app/userRole/${a}.json`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{WA.player.state.job=t==null?void 0:t.job,WA.player.state.job?n():i(),WA.player.state.onVariableChange("job").subscribe(s=>{s?(console.log(r("modules.job.jobChanged",{job:r(`modules.job.jobs.${s}`)})),n()):i()}),WA.player.state.onVariableChange("askForJobWalletWebsiteClose").subscribe(s=>{s&&b()})})},g=e=>WA.player.state.job&&l[WA.player.state.job][e],m=()=>WA.player.state.job&&l[WA.player.state.job]?Object.keys(l[WA.player.state.job]).filter(e=>l[WA.player.state.job][e]):null;export{m as a,f as b,g as c,d as g,h as i,A as r,W as s};
