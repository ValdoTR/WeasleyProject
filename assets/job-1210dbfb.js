import{t as s}from"./translate-91669017.js";import{r as i}from"./config-63dd91cb.js";const t={archaeologist:{useComputers:!1,speakAncienLanguages:!0,readRunes:!0,makeExcavation:!0,findSecretPassages:!1,makeHooking:!1},spy:{useComputers:!0,speakAncienLanguages:!1,readRunes:!1,makeExcavation:!1,findSecretPassages:!0,makeHooking:!0}},r="jobWalletButton";let a=null;const W=e=>{WA.player.state.saveVariable("job",e,{public:!0})},p=()=>WA.player.state.job,y=()=>{WA.player.state.job=null},b=async()=>{WA.controls.disablePlayerControls(),a=await WA.ui.website.open({url:`${i}/views/jobWallet/jobWallet.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForJobWalletWebsiteClose=!1},A=()=>{WA.player.state.askForJobWalletWebsiteClose=!0},n=()=>{a==null||a.close(),a=null,WA.controls.restorePlayerControls()},o=()=>{WA.ui.actionBar.addButton({id:r,label:s("modules.job.myJobWallet.label"),callback:async()=>{a?n():await b()}})},l=()=>{WA.ui.actionBar.removeButton(r)},m=()=>{WA.player.state.job?o():l(),WA.player.state.onVariableChange("job").subscribe(e=>{e?(console.log(s("modules.job.jobChanged",{job:s(`modules.job.jobs.${e}`)})),o()):l()}),WA.player.state.onVariableChange("askForJobWalletWebsiteClose").subscribe(e=>{e&&n()})},j=e=>WA.player.state.job&&t[WA.player.state.job][e],d=()=>WA.player.state.job&&t[WA.player.state.job]?Object.keys(t[WA.player.state.job]).filter(e=>t[WA.player.state.job][e]):null;export{d as a,A as b,j as c,p as g,m as i,y as r,W as s};
