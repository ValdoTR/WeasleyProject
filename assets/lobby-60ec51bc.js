import{r as s}from"./config-63dd91cb.js";const W=async()=>{await WA.player.state.saveVariable("isInviting",null,{public:!0}),await WA.player.state.saveVariable("hasBeenInvited",null,{public:!0}),await WA.player.state.saveVariable("hasAcceptedInvitation",null,{public:!0}),await WA.players.configureTracking(),WA.players.onVariableChange("isInviting").subscribe(e=>{e.value===WA.player.uuid&&(console.log("vous avez été invité par :"+e.player.name),WA.player.state.hasBeenInvited=e.value,u())}),WA.players.onVariableChange("hasBeenInvited").subscribe(e=>{!e.value&&WA.player.state.isInviting===e.player.uuid&&(console.log(e.player.name+"a refusé votre invitation"),WA.player.state.isInviting=null)}),WA.players.onVariableChange("isInviting").subscribe(e=>{!e.value&&WA.player.state.hasBeenInvited===e.player.uuid&&(console.log(e.player.name+"a annulé son invitation"),WA.player.state.hasBeenInvited=null,n(),o())}),WA.players.onVariableChange("hasAcceptedInvitation").subscribe(e=>{console.log("Someone accepted en invitation",e.player.uuid),e.value===WA.player.uuid&&(r(),console.log("REDIRECTION VERS LE JEU ! pour :"+WA.player.name+" et "+e.player.name))}),await WA.player.state.saveVariable("playerImage",await WA.player.getWokaPicture(),{public:!0}),await WA.player.state.saveVariable("isAuthenticated",WA.player.isLogged,{public:!0}),WA.player.state.onVariableChange("askForPlayersListWebsiteClose").subscribe(e=>{e&&l()}),WA.player.state.onVariableChange("askForPlayersInvitationWebsiteClose").subscribe(e=>{e&&(n(),o())}),WA.player.state.onVariableChange("askForCancelInvitation").subscribe(e=>{console.log("askForCancelInvitation changed",e),e&&(console.log("value"),y(),v())}),WA.player.state.onVariableChange("isInviting").subscribe(e=>{e&&(l(),p())}),WA.ui.actionBar.addButton({id:"playerListButton",label:"Joueurs",callback:()=>{a||(i?l():c())}})};let i=null;const c=async()=>{i=await WA.ui.website.open({url:`${s}/views/lobby/playerList.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForPlayersListWebsiteClose=!1},l=()=>{console.log("close player list",i),i==null||i.close(),i=null},A=()=>{WA.player.state.askForPlayersListWebsiteClose=!0},d=async()=>(await WA.players.configureTracking(),WA.players.list()),g=e=>!(e.state.isInviting||e.state.hasBeenInvited),h=e=>{WA.player.state.saveVariable("isInviting",e.uuid,{public:!0,persist:!0,ttl:24*3600,scope:"world"})};let t=null;const u=async()=>{t=await WA.ui.website.open({url:`${s}/views/lobby/invitationReceived.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForPlayersInvitationWebsiteClose=!1},n=()=>{console.log("close invitation"),t==null||t.close(),t=null},o=()=>{WA.player.state.hasBeenInvited=null},w=()=>{console.log("ask for close invitation"),WA.player.state.askForPlayersInvitationWebsiteClose=!0},I=()=>{console.log("has been invited",WA.player.state.hasBeenInvited),WA.player.state.hasBeenInvited?(WA.player.state.saveVariable("hasAcceptedInvitation",WA.player.state.hasBeenInvited,{public:!0}),r(),console.log("accepted invitation",WA.player.state.hasAcceptedInvitation)):console.log("Oups, une erreur est survenue (no invitor)"),n()};let a=null;const p=async()=>{console.log("open waiting for answer website"),a=await WA.ui.website.open({url:`${s}/views/lobby/waitingForAnswer.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForCancelInvitation=!1,console.log(a)},y=()=>{console.log("close waiting for answer website"),a==null||a.close(),a=null},v=()=>{console.log("RESET INVITED"),console.log("waitingForAnswerWebsite",a),WA.player.state.isInviting=null},f=()=>{WA.player.state.askForCancelInvitation=!0},r=async()=>{await WA.ui.website.open({url:`${s}/views/lobby/youAreGoingToBeRedirected.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}})};export{w as a,I as b,g as c,A as d,W as e,f,d as g,h as i};
