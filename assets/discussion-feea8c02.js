import{r as u}from"./config-3db041a0.js";let s=null;const p=async(e,o,i="views.choice.close",l="discussion",t="middle",a="middle",r="50vh",n="50vw")=>{WA.controls.disablePlayerControls(),s=await WA.ui.website.open({url:`${u}/views/discussions/${l}.html?title=${e}&text=${o}&close=${i}`,allowApi:!0,allowPolicy:"",position:{vertical:t,horizontal:a},size:{height:r,width:n}}),WA.player.state.askForDiscussionWebsiteClose=!1,WA.player.state.onVariableChange("askForDiscussionWebsiteClose").subscribe(c=>{c&&W()})},w=()=>{WA.player.state.askForDiscussionWebsiteClose=!0},W=()=>{s==null||s.close(),s=null,WA.controls.restorePlayerControls()};export{w as a,p as o};
