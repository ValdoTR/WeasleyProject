const L={executeAction:"[Espace] {action}",shoot:"Tirer",see:"Consulter",examine:"Examiner",seeTheRules:"Voir les règles"},I={jobChanged:"Vous êtes maintenant {job}",jobs:{archaeologist:"Archéologue",spy:"Espion"},myJobWallet:{label:"Portefeuille"}},j={makeExcavations:"Faire des fouilles"},S={findSecretPassage:"Chercher un passage secret"},C={playersList:"Liste des joueurs autour de moi",invite:"Inviter",accept:"Accepter",refuse:"Refuser",cancel:"Annuler",players:"Joueurs",connectToInvite:"Connectez-vous pour pouvoir inviter quelqu'un",notAuthenticated:"Non-authentifié",waitingForAnswer:"En attente de réponse. Veuillez patienter.",youAreGoingToBeRedirected:"Vous allez être redirigé vers le jeu",letSGo:"C'est parti !",close:"Fermer",playerIsNotAvailable:"Le joueur n'est pas disponible",youHaveBeenInvitedBy:"Vous avez été invité par "},_=Object.freeze(Object.defineProperty({__proto__:null,job:I,excavation:j,secretPassage:S,lobby:C},Symbol.toStringTag,{value:"Module"})),k={title:"Carte d'{job}",name:"Nom",close:"Fermer",jobs:{archaeologist:{name:"Archéologue",attributes:"Nom : {name}<br> Niveau: Avancé",description:"Félicitations, vous êtes désormais membre des archéologues en herbe. Nous certifions par la délivrance de la présente carte que vous pouvez :",permissions:{speakAncienLanguages:"Parler les anciens langages",readRunes:"Lire les runes",makeExcavation:"Faire des fouilles"}},spy:{name:"Espion",attributes:"Nom : {name}<br> Matricule: 007",description:"Agent spécial d'état. Spacialisé dans :",permissions:{useComputers:"le piratage informatique",findSecretPassages:"trouver et emprunter les passages secrets"}}}},E=Object.freeze(Object.defineProperty({__proto__:null,jobWallet:k},Symbol.toStringTag,{value:"Module"})),P=Object.freeze(Object.defineProperty({__proto__:null,utils:L,modules:_,views:E},Symbol.toStringTag,{value:"Module"})),B={executeAction:"[Space] {action}",shoot:"Shoot",see:"See",examine:"Examiner",seeTheRules:"See the rules"},V={jobChanged:"You are now a(n) {job}",jobs:{archaeologist:"Archaeologist",spy:"Spy"},myJobWallet:{label:"Wallet"}},F={makeExcavations:"Make excavations"},R={findSecretPassage:"Search a secret passage"},T={playersList:"Players around me",invite:"Invite",accept:"Accept",refuse:"Refuse",cancel:"Cancel",players:"Players",connectToInvite:"Log in to invite someone",notAuthenticated:"Not authenticated",waitingForAnswer:"Waiting for an answer. Please wait.",youAreGoingToBeRedirected:"You're going to be redirected to the game",letSGo:"Let's go !",close:"Close",playerIsNotAvailable:"Player is not available",youHaveBeenInvitedBy:"You have been invited by "},z=Object.freeze(Object.defineProperty({__proto__:null,job:V,excavation:F,secretPassage:R,lobby:T},Symbol.toStringTag,{value:"Module"})),N={title:"{job} card",name:"Name",close:"Close",jobs:{archaeologist:{name:"Archaeologist",attributes:"Name : {name}<br> Level: Advanced",description:"Congratulations, you are now a member of the Budding Archaeologists. We certify by the issuance of this card that you can :",permissions:{speakAncienLanguages:"Speak the old languages",readRunes:"Read the runes",makeExcavation:"Make excavation"}},spy:{name:"Spy",attributes:"Name : {name}<br> Registration number: 007",description:"Special state agent. Specialized in :",permissions:{useComputers:"computer hacking",findSecretPassages:"find and use the secret passages"}}}},O=Object.freeze(Object.defineProperty({__proto__:null,jobWallet:N},Symbol.toStringTag,{value:"Module"})),x=Object.freeze(Object.defineProperty({__proto__:null,utils:B,modules:z,views:O},Symbol.toStringTag,{value:"Module"})),v={"fr-FR":P,"en-US":x};let p="fr-FR";WA.onInit().then(()=>{p=WA.player.language,Object.keys(v).includes(p)||(p="en-US")});const J=(e,t={})=>{let o=e;const a=Object.keys(t);for(let s=0;s<a.length;s++)o=o.replaceAll("{"+a[s]+"}",t[a[s]]);return o},n=(e,t={})=>{const a=e.split(".").reduce((s,g)=>(!s||!s[g]?s=void 0:s=s[g],s),v[p]);return a&&typeof a=="string"?J(a,t):e},u="http://localhost:5173",M={archaeologist:{useComputers:!1,speakAncienLanguages:!0,readRunes:!0,makeExcavation:!0,findSecretPassages:!1},spy:{useComputers:!0,speakAncienLanguages:!1,readRunes:!1,makeExcavation:!1,findSecretPassages:!0}},f="jobWalletButton";let r=null;const D=e=>{WA.player.state.job=e},G=async()=>{WA.controls.disablePlayerControls(),r=await WA.ui.website.open({url:`${u}/views/jobWallet/jobWallet.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForJobWalletWebsiteClose=!1},w=()=>{r==null||r.close(),r=null,WA.controls.restorePlayerControls()},A=()=>{WA.ui.actionBar.addButton({id:f,label:n("modules.job.myJobWallet.label"),callback:async()=>{r?w():await G()}})},m=()=>{WA.ui.actionBar.removeButton(f)},Y=()=>{WA.player.state.job?A():m(),WA.player.state.onVariableChange("job").subscribe(e=>{e?(console.log(n("modules.job.jobChanged",{job:n(`modules.job.jobs.${e}`)})),A()):m()}),WA.player.state.onVariableChange("askForJobWalletWebsiteClose").subscribe(e=>{e&&w()})},$=e=>WA.player.state.job&&M[WA.player.state.job][e];let b=null;const q=(e=["excavationZone"],t=null)=>{if($("makeExcavation"))for(let o=0;o<e.length;o++)WA.state[`${e[o]}Discovered`]?WA.room.showLayer(`${e[o]}/found`):(WA.room.showLayer(`${e[o]}/trace`),WA.room.onEnterLayer(`${e[o]}/trace`).subscribe(()=>{WA.state[`${e[o]}Discovered`]||(b=WA.ui.displayActionMessage({message:n("utils.executeAction",{action:n("modules.excavation.makeExcavations")}),callback:()=>{WA.state[`${e[o]}Discovered`]=!0}}))}),WA.room.onLeaveLayer(`${e[o]}/trace`).subscribe(()=>{b==null||b.remove()}),WA.state.onVariableChange(`${e[o]}Discovered`).subscribe(()=>{H(e[o],t?t[o]:null)}))},H=(e,t=null)=>{WA.room.hideLayer(`${e}/trace`),WA.room.showLayer(`${e}/search`),setTimeout(()=>{WA.room.showLayer(`${e}/found`),setTimeout(()=>{WA.room.hideLayer(`${e}/search`),t&&t()},1e3)},3e3)};let d=null;const U=e=>{const t=[];for(let o=1;o<31;o++)for(let a=1;a<21;a++)t.push({x:o,y:a,tile:null,layer:`${e}/block`});WA.room.setTiles(t),console.log("salut")},Q=(e=["secretPassageZone"],t=null)=>{if($("findSecretPassages"))for(let o=0;o<e.length;o++)WA.state[`${e[o]}Discovered`]?(WA.room.showLayer(`${e[o]}/found`),WA.room.hideLayer(`${e[o]}/disappear`)):(WA.room.showLayer(`${e[o]}/trace`),WA.room.onEnterLayer(`${e[o]}/trace`).subscribe(()=>{WA.state[`${e[o]}Discovered`]||(d=WA.ui.displayActionMessage({message:n("utils.executeAction",{action:n("modules.secretPassage.findSecretPassage")}),callback:()=>{WA.state[`${e[o]}Discovered`]=!0}}))}),WA.room.onLeaveLayer(`${e[o]}/trace`).subscribe(()=>{d==null||d.remove()}),WA.state.onVariableChange(`${e[o]}Discovered`).subscribe(()=>{X(e[o],t?t[o]:null)}))},X=(e,t=null)=>{WA.room.hideLayer(`${e}/trace`),WA.room.showLayer(`${e}/search`),setTimeout(()=>{WA.room.showLayer(`${e}/found`),WA.room.hideLayer(`${e}/disappear`),U(e),setTimeout(()=>{WA.room.hideLayer(`${e}/search`),t&&t()},1e3)},3e3)},K=e=>{for(let t=0;t<e.length;t++)WA.room.onEnterLayer(e[t].stepIn).subscribe(()=>{WA.room.hideLayer(e[t].hide)}),WA.room.onLeaveLayer(e[t].stepIn).subscribe(()=>{WA.room.showLayer(e[t].hide)})},Z=async()=>{await WA.player.state.saveVariable("isInviting",null,{public:!0}),await WA.player.state.saveVariable("hasBeenInvited",null,{public:!0}),await WA.player.state.saveVariable("hasAcceptedInvitation",null,{public:!0}),await WA.players.configureTracking(),WA.players.onVariableChange("isInviting").subscribe(e=>{e.value===WA.player.uuid&&(console.log("vous avez été invité par :"+e.player.name),WA.player.state.hasBeenInvited=e.value,te())}),WA.players.onVariableChange("hasBeenInvited").subscribe(e=>{!e.value&&WA.player.state.isInviting===e.player.uuid&&(console.log(e.player.name+"a refusé votre invitation"),WA.player.state.isInviting=null)}),WA.players.onVariableChange("isInviting").subscribe(e=>{!e.value&&WA.player.state.hasBeenInvited===e.player.uuid&&(console.log(e.player.name+"a annulé son invitation"),WA.player.state.hasBeenInvited=null,h(),W())}),WA.players.onVariableChange("hasAcceptedInvitation").subscribe(e=>{console.log("Someone accepted en invitation",e.player.uuid),e.value===WA.player.uuid&&(le(),console.log("REDIRECTION VERS LE JEU ! pour :"+WA.player.name+" et "+e.player.name))}),await WA.player.state.saveVariable("playerImage",await WA.player.getWokaPicture(),{public:!0}),await WA.player.state.saveVariable("isAuthenticated",WA.player.isLogged,{public:!0}),WA.player.state.onVariableChange("askForPlayersListWebsiteClose").subscribe(e=>{e&&y()}),WA.player.state.onVariableChange("askForPlayersInvitationWebsiteClose").subscribe(e=>{e&&(h(),W())}),WA.player.state.onVariableChange("askForCancelInvitation").subscribe(e=>{console.log("askForCancelInvitation changed",e),e&&(console.log("value"),ae(),se())}),WA.player.state.onVariableChange("isInviting").subscribe(e=>{e&&(y(),oe())}),WA.ui.actionBar.addButton({id:"playerListButton",label:"Joueurs",callback:()=>{l||(i?y():ee())}})};let i=null;const ee=async()=>{i=await WA.ui.website.open({url:`${u}/views/lobby/playerList.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForPlayersListWebsiteClose=!1},y=()=>{console.log("close player list",i),i==null||i.close(),i=null};let c=null;const te=async()=>{c=await WA.ui.website.open({url:`${u}/views/lobby/invitationReceived.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForPlayersInvitationWebsiteClose=!1},h=()=>{console.log("close invitation"),c==null||c.close(),c=null},W=()=>{WA.player.state.hasBeenInvited=null};let l=null;const oe=async()=>{console.log("open waiting for answer website"),l=await WA.ui.website.open({url:`${u}/views/lobby/waitingForAnswer.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}}),WA.player.state.askForCancelInvitation=!1,console.log(l)},ae=()=>{console.log("close waiting for answer website"),l==null||l.close(),l=null},se=()=>{console.log("RESET INVITED"),console.log("waitingForAnswerWebsite",l),WA.player.state.isInviting=null},le=async()=>{await WA.ui.website.open({url:`${u}/views/lobby/youAreGoingToBeRedirected.html`,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}})},ie=(e=["switchingTiles"])=>{for(let t=0;t<e.length;t++){const o=JSON.parse(WA.state[`${e[t]}VictoryCondition`]);for(let a=0;a<Object.keys(o).length;a++)console.log(`${e[t]}/${a}_layer/zone`),WA.room.onEnterLayer(`${e[t]}/${a}_layer/zone`).subscribe(()=>{console.log("entered layer");let s=WA.state[`${e[t]}_${a}_value`]?WA.state[`${e[t]}_${a}_value`]:0;WA.state[`${e[t]}_${a}_value`]=(s+1)%3,WA.room.hideLayer(`${e[t]}/${a}_layer`),WA.room.showLayer(`${e[t]}/${a}_layer/${WA.state[`${e[t]}_${a}_value`]}`),console.log("changed tile value to : "+WA.state[`${e[t]}_${a}_value`])})}};WA.onInit().then(()=>{console.log("INITIALISATION"),Y(),D("spy"),console.log("HERE"),q(["excavation"],[()=>{console.log("test callback after excavation")}]),Q(["secretPassage"],[()=>{console.log("test callback after finding secret passage")}]),K([{stepIn:"hiddenZoneFloor",hide:"hiddenZoneTop"}]),console.log("Initiate switching tiles"),ie(),console.log("LOBBY INITIALISATION"),Z()}).catch(e=>console.error(e));