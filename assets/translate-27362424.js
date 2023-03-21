const c={executeAction:"[Espace] {action}",shoot:"Tirer",see:"Consulter",examine:"Examiner",seeTheRules:"Voir les règles"},u={jobChanged:"Vous êtes maintenant {job}",jobs:{archaeologist:"Archéologue",spy:"Espion"},myJobWallet:{label:"Portefeuille"}},p={makeExcavations:"Faire des fouilles"},d={findSecretPassage:"Chercher un passage secret"},g={playersList:"Liste des joueurs autour de moi",invite:"Inviter",accept:"Accepter",refuse:"Refuser",cancel:"Annuler",players:"Joueurs",connectToInvite:"Connectez-vous pour pouvoir inviter quelqu'un",notAuthenticated:"Non-authentifié",waitingForAnswer:"En attente de réponse. Veuillez patienter.",youAreGoingToBeRedirected:"Vous allez être redirigé vers le jeu",letSGo:"C'est parti !",close:"Fermer",playerIsNotAvailable:"Le joueur n'est pas disponible",youHaveBeenInvitedBy:"Vous avez été invité par "},m={close:"Fermer",see:"Consulter"},y={inventory:"Mon inventaire",close:"Fermer",empty:"Vide",inventoryItem:"Objet n°{itemNo}",looksDelicious:"Ce croissant a l'air délicieux, mais ça n'est pas bon pour ma ligne"},b=Object.freeze(Object.defineProperty({__proto__:null,job:u,excavation:p,secretPassage:d,lobby:g,runes:m,inventory:y},Symbol.toStringTag,{value:"Module"})),v={title:"Carte d'{job}",name:"Nom",close:"Fermer",jobs:{archaeologist:{name:"Archéologue",attributes:"Nom : {name}<br> Niveau: Avancé",description:"Félicitations, vous êtes désormais membre des archéologues en herbe. Nous certifions par la délivrance de la présente carte que vous pouvez :",permissions:{speakAncienLanguages:"Parler les anciens langages",readRunes:"Lire les runes",makeExcavation:"Faire des fouilles"}},spy:{name:"Espion",attributes:"Nom : {name}<br> Matricule: 007",description:"Agent spécial d'état. Spacialisé dans :",permissions:{useComputers:"le piratage informatique",findSecretPassages:"trouver et emprunter les passages secrets"}}}},h={title:"Madame Auriane Tassion",close:"OK !",text:`Bienvenue au bureau des métiers extraordinaires !
Vous êtes ici aujourd'hui parce que vous avez un profil complémentaire, vous ne pouvez donc pas choisir le même métier !
Choisissez votre future métier MAINTENANT :
A GAUCHE vous trouverez la porte qui vous mènera vers le métier d'ESPION.
A DROITE vous trouverez la porte qui vous mènera vers le métier d'ARCHEOLOGUE.`},f=Object.freeze(Object.defineProperty({__proto__:null,jobWallet:v,choice:h},Symbol.toStringTag,{value:"Module"})),j={talk:"Parler",spyMessage:"Devenir espion (ATTENTION CHOIX DEFINITIF)",archeoMessage:"Devenir archéolgue (ATTENTION CHOIX DEFINITIF)",takeCroissantMessage:"Prendre un croissant"},T=Object.freeze(Object.defineProperty({__proto__:null,utils:c,modules:b,views:f,choice:j},Symbol.toStringTag,{value:"Module"})),A={executeAction:"[Space] {action}",shoot:"Shoot",see:"See",examine:"Examiner",seeTheRules:"See the rules"},S={jobChanged:"You are now a(n) {job}",jobs:{archaeologist:"Archaeologist",spy:"Spy"},myJobWallet:{label:"Wallet"}},I={makeExcavations:"Make excavations"},O={findSecretPassage:"Search a secret passage"},E={playersList:"Players around me",invite:"Invite",accept:"Accept",refuse:"Refuse",cancel:"Cancel",players:"Players",connectToInvite:"Log in to invite someone",notAuthenticated:"Not authenticated",waitingForAnswer:"Waiting for an answer. Please wait.",youAreGoingToBeRedirected:"You're going to be redirected to the game",letSGo:"Let's go !",close:"Close",playerIsNotAvailable:"Player is not available",youHaveBeenInvitedBy:"You have been invited by "},N={close:"Close",see:"See"},C={inventory:"My inventory",close:"Close",empty:"Empty",inventoryItem:"Object n°{itemNo}"},_=Object.freeze(Object.defineProperty({__proto__:null,job:S,excavation:I,secretPassage:O,lobby:E,runes:N,inventory:C},Symbol.toStringTag,{value:"Module"})),P={title:"{job} card",name:"Name",close:"Close",jobs:{archaeologist:{name:"Archaeologist",attributes:"Name : {name}<br> Level: Advanced",description:"Congratulations, you are now a member of the Budding Archaeologists. We certify by the issuance of this card that you can :",permissions:{speakAncienLanguages:"Speak the old languages",readRunes:"Read the runes",makeExcavation:"Make excavation"}},spy:{name:"Spy",attributes:"Name : {name}<br> Registration number: 007",description:"Special state agent. Specialized in :",permissions:{useComputers:"computer hacking",findSecretPassages:"find and use the secret passages"}}}},x={title:"Miss Guy Dance",close:"OK !",text:`Welcome to the office of extraordinary jobs !
You are here today because you have a complementary profile, so you can't choose the same job!
Choose your future job NOW :
On the LEFT you will find the door that will lead you to the profession of SPY.
To the RIGHT you will find the door that will lead you to the profession of ARCHAEOLOGIST.`},k=Object.freeze(Object.defineProperty({__proto__:null,jobWallet:P,choice:x},Symbol.toStringTag,{value:"Module"})),M={talk:"Talk",spyMessage:"Become a spy (ATTENTION DEFINITIVE CHOICE)",archeoMessage:"Become an archaeologist (ATTENTION DEFINITIVE CHOICE)",takeCroissantMessage:"Take a croissant",looksDelicious:"This croissant looks delicious, but it's not good for my figure"},F=Object.freeze(Object.defineProperty({__proto__:null,utils:A,modules:_,views:k,choice:M},Symbol.toStringTag,{value:"Module"})),i={"fr-FR":T,"en-US":F};let s="fr-FR";WA.onInit().then(()=>{s=WA.player.language,Object.keys(i).includes(s)||(s="en-US")});const l=(t,a={})=>{let n=t;const o=Object.keys(a);for(let e=0;e<o.length;e++)n=n.replaceAll("{"+o[e]+"}",a[o[e]]);return n},z=(t,a={})=>{const o=t.split(".").reduce((e,r)=>(!e||!e[r]?e=void 0:e=e[r],e),i[s]);return o&&typeof o=="string"?l(o,a):t},R=Object.freeze(Object.defineProperty({__proto__:null,get playerLanguage(){return s},translate:z,getSentenceWithVariables:l},Symbol.toStringTag,{value:"Module"}));export{R as a,z as t};