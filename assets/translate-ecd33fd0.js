const u={executeAction:"[Espace] {action}",shoot:"Tirer",see:"Consulter",examine:"Examiner",seeTheRules:"Voir les règles",mySelf:"Moi",success:"Succès",failure:"Échec"},l={jobChanged:"Vous êtes maintenant {job}",jobs:{archaeologist:"Archéologue",spy:"Espion"},myJobWallet:{label:"Portefeuille"}},c={makeExcavations:"Faire des fouilles"},A={findSecretPassage:"Chercher un passage secret"},T={playersList:"Liste des joueurs autour de moi",invite:"Inviter",accept:"Accepter",refuse:"Refuser",cancel:"Annuler",players:"Joueurs",connectToInvite:"Connectez-vous pour pouvoir inviter quelqu'un",notAuthenticated:"Non-authentifié",waitingForAnswer:"En attente de réponse. Veuillez patienter.",youAreGoingToBeRedirected:"Vous allez être redirigé vers le jeu",letSGo:"C'est parti !",close:"Fermer",playerIsNotAvailable:"Le joueur n'est pas disponible",youHaveBeenInvitedBy:"Vous avez été invité par "},m={close:"Fermer",see:"Consulter"},d={inventory:"Mon inventaire",close:"Fermer",empty:"Vide",inventoryItem:"Objet n°{itemNo}",looksDelicious:"Ce croissant a l'air délicieux, mais ça n'est pas bon pour ma ligne",cannotTakeThis:"Je ne peux pas prendre cet objet",objectTaken:'Vous avez ramassé: "{object}"'},I={hook:"Crocheter"},N=Object.freeze(Object.defineProperty({__proto__:null,excavation:c,hooking:I,inventory:d,job:l,lobby:T,runes:m,secretPassage:A},Symbol.toStringTag,{value:"Module"})),S={title:"Carte d'{job}",name:"Nom",close:"Fermer",jobs:{archaeologist:{name:"Archéologue",attributes:"Nom : {name}<br> Niveau: Avancé",description:"Félicitations, vous êtes désormais membre des archéologues en herbe. Nous certifions par la délivrance de la présente carte que vous pouvez :",permissions:{speakAncienLanguages:"Parler les anciens langages",readRunes:"Lire les runes",makeExcavation:"Faire des fouilles"}},spy:{name:"Espion",attributes:"Nom : {name}<br> Matricule: 007",description:"Agent spécial d'état. Spacialisé dans :",permissions:{useComputers:"le piratage informatique",findSecretPassages:"trouver et emprunter les passages secrets",makeHooking:"Crocheter des serrures"}}}},p={title:"Madame Auriane Tassion",close:"OK !",text:`Bienvenue au bureau des métiers extraordinaires !
Vous êtes ici aujourd'hui parce que vous avez un profil complémentaire, vous ne pouvez donc pas choisir le même métier !
Choisissez votre future métier MAINTENANT :
A GAUCHE vous trouverez la porte qui vous mènera vers le métier d'ESPION.
A DROITE vous trouverez la porte qui vous mènera vers le métier d'ARCHEOLOGUE.`},R={title:"Seul celui qui fera preuve d'élégance pourra continuer son chemin",close:"OK !",text:`310143135310103
16143531043510503
1310153141340503
3165435353151051 
31014153103513416`},O={content:`1 - 5 - 3 - Rouge - Blanc - BOUM
5 - 6 - 9 - Bleu - Jaune - Noir - PRESS
Rouge - Jaune - 9 - 7 - 6 - 4 - 0 - BOUM
1 - Vert - 9 - 7 - Orange - 2 - BOUM
Jaune - Rouge - 8 - 6 - Blanc - PRESS
Orange - Bleu - 4 - 3 - Rouge - 0 - PRESS`,note:"Pour désamorcer les bombes"},h={keeperName:"Agent de Securité",bigRoomAccess:"Je ne vous avez pas reconnu ! Allez y, entrez, je vous en prie",bigRoomNoAccess:"Qui êtes vous ?! Vous ne pouvez pas rentrer si vous n'êtes pas invité, allez on dégage !",annuaryTitle:"livre super secret de la mort qui tue",annuaryContent:`Notes personnelles du 23 mai
les chevaux existent, les cornes on en trouve, alors pourquoi les licornes n'existeraient pas ! Un jour je les trouverais.

Liste de course
cape de méchant, noire ou rouge
Oranges sanguines
cervelle de singe
Dentifrice

Date d'anniversaire (A NE PAS OUBLIER CETTE FOIS !!) :
Mamounette : 11/04/48
Papounou : 28/12/51
Cerbere (Bibou chat d’amour) : 16/06/16 `,beginText:`Après tant d'années, nos deux amis se sont retrouvés dans le but de trouver un artefact qui pourrait révolutionner l'humanité.

Ils n'ont qu'un indice : l'existence d'une carte menant à l'artefact se trouverait dans le bureau d'un homme faisant partie de l'élite.

Après de nombreux mois à élaborer un plan, c'est le moment d'agir : les voilà dans la demeure dans laquelle se trouverait la précieuse carte...

`,beginDiscussion:`Enfin nous avons réussi à rentrer ! Je te rappel le plan : 
1 - Trouver la salle de contrôle pour désactiver les caméras, si on a bien visé, ça doit être la porte juste là
2 - Trouver un moyen de rentrer dans la salle du musée où se passe la fête, c'est normalement la grande salle au milieu du bâtiment
3 - Trouver le maître des lieux et lui subtiliser la clé de son bureau
4 - Trouver son bureau, y entrer et voler la carte menant au temple où se trouve l'artefact
5 - On se retrouve ici et on repart par la fenêtre qu'on vient de casser !
Facile non ? Allez c'est parti !`},g=Object.freeze(Object.defineProperty({__proto__:null,cheatSheet:O,choice:p,jobWallet:S,museum:h,music:R},Symbol.toStringTag,{value:"Module"})),L={talk:"Parler",spyMessage:"Devenir espion (ATTENTION CHOIX DEFINITIF)",archeoMessage:"Devenir archéolgue (ATTENTION CHOIX DEFINITIF)",takeCroissantMessage:"Prendre un croissant"},b={takeSeed:"Prendre la graine",seed:"Graine",seedDescription:"Cette graine semble différente, Aïe! ça pique !",takeSeedMsg:"[ESPACE] Prendre la graine magique",takePowder:"Prendre la poudre",powder:"Eclat",takePowderMsg:"[ESPACE] Prendre l'éclat de lune",powderDescription:"Ça ressemble à de la poussière d'étoile... Atchoum, oups...",takeGem:"Prendre la gemme",gem:"Gemme",takeGemMsg:"[ESPACE] Prendre la gemme de feu",gemDescription:"Ça semble brûlant... oucha, c'est chaud !",triggerBlue:"[ESPACE] Déposer l'éclat de lune",triggerGreen:"[ESPACE] Déposer la graine magique",triggerRed:"[ESPACE] Déposer la gemme de feu",empty:"Je pense qu'on doit mettre quelque chose ici...",fireOn:"Comme c'est beau !"},D={display:"Lire la stèle"},C={content:`IL ÉTAIT UNE FOIS, ALORS QUE LE MONDE ÉTAIT PLONGÉ DANS L'OBSCURITÉ ET LE DÉSESPOIR, UN GRAND ET NOBLE CHEVALIER CHOISI POUR PROTÉGER LA LUMIÈRE, LA SEULE CHOSE QUI S'OPPOSAIT À UNE VICTOIRE TOTALE DES FORCES DES TÉNÈBRES.

LE CHEVALIER ÉTAIT BRAVE ET COURAGEUX, ET AVAIT ÉTUDIÉ L'ART DE LA GUERRE PENDANT DE NOMBREUSES ANNÉES, SE PRÉPARANT AINSI À CETTE BATAILLE. GUIDÉ PAR LA CHEVALERIE ET LA JUSTICE, IL AFFRONTA LA HORDE DÉMONIAQUE AVEC COURAGE ET BRAVOURE.

AU DÉBUT, LE COURAGE DU CHEVALIER NE SEMBLE PAS LUI AVOIR SERVI À GRAND-CHOSE FACE À L'IMMENSE ARMÉE DE DÉMONS. EN MOINS D'UNE JOURNÉE, IL SEMBLAIT QUE LE CHEVALIER SERAIT SUBMERGÉ PAR LA HORDE DE MONSTRES QUI SEMBLAIT NE JAMAIS VOULOIR S'ARRÊTER. MAIS UN MIRACLE S'EST PRODUIT.

ALORS QUE L'ÉPÉE DU CHEVALIER SEMBLAIT SUR LE POINT D'ÊTRE ÉCRASÉE PAR UN PUISSANT DÉMON, UN ANGE DESCENDIT DES CIEUX, BRILLANT D'UNE LUMIÈRE BLANCHE AVEUGLANTE. DANS SA MAIN SE TROUVAIT UNE ÉPÉE FLAMBOYANTE, BRÛLANT D'UNE FLAMME IMPIE, ET L'aNGE L'ABATTIT SUR LA TÊTE DU DÉMON, L'INCINÉRANT.

CET ANGE N'ÉTAIT PAS UN SIMPLE MESSAGER, MAIS UN SERVITEUR DE LA JUSTICE DIVINE. L'ANGE AVAIT ÉTÉ ENVOYÉ PAR DIEU LUI-MÊME POUR APPORTER LA JUSTICE ET LA LUMIÈRE AU MONDE. DANS UN ÉCLAIR AVEUGLANT, L'ANGE DISPARUT, NE LAISSANT DERRIÈRE LUI QUE SON ÉPÉE ENFLAMMÉE.

LE cHEVALIER, INSPIRÉ PAR CETTE INTERVENTION DIVINE, SE BATTIT AVEC UNE FORCE NOUVELLE ET RALLIA SON ARMÉE. AVEC LE DON DE L'ANGE EN MAIN, LE CHEVALIER SE LANÇA DANS LA BATAILLE, BRANDISSANT L'ÉPÉE FLAMBOYANTE ET TERRASSANT L'ARMÉE DÉMONIAQUE AVEC UNE PRÉCISION SURNATURELLE. À LA FIN, LE CHEVALIER SORTIT VICTORIEUX DE LA BATAILLE, DEBOUT AU MILIEU DES CORPS DÉCHUS DE LA HORDE dÉMONIAQUE.

DEPUIS CE JOUR, UNE LÉGENDE S'EST RÉPANDUE PARMI LE PEUPLE DU CHEVALIER : DANS LES PÉRIODES D'OBSCURITÉ ET DE DÉSESPOIR, IL Y AURA TOUJOURS UN CHEVALIER CHOISI POUR PROTÉGER LA LUMIÈRE, ET CES GUERRIERS ÉLUS N'ONT PAS BESOIN DE SE BATTRE SEULS, CAR DANS LES MOMENTS DE DÉSESPOIR, UN ANGE VIENDRA LES SAUVER.`,title:"Texte ancien",active:"Toucher la statut",artifact:"[TOUCHER] Comme c'est beau, je ne peux pas resister à l'envie d'y toucher..."},v={doorClosed:"Cette porte semble fermée",search:"[FOUILLER]",idCardTitle:"Carte d'identité",idCardDescription:"La carte d'identité de quelqu'un qui a l'air vraiment très très important",searchEmpty:"Rien d'intéressant...",speakToKeeper:"[PARLER]",pickpocket:"[PICKPOCKETER]",pickpocketEmpty:"mmmh... non, rien d'intéressant",accessCard:"Clé dorée",accessCardDescription:"Clé dorée d'une pièce qui a l'air importante",desktopOpenMsg:"*Clic clac* c'est ouvert !",desktopOpen:"[INTRODUIRE LA CLE DOREE]",desktopItems0:"Un livre qui semble être intéressant",desktopItems1:"Je crois que je connais cette personne... ah ! c'est un mirroir",desktopItems2:"L'australie ! Oh non encore ? Et oui c'est le jeu ma pauvre Lucette...",desktopItems3:"Ce livre a pour titre 'NECRONOMICON', ça à l'air sympa",desktopItems4:"Un coffre fort... La carte doit être à l'intérieur ! Mais... quel est le code ? Il doit y avoir un indice quelque part...",desktopItems5:"Tiens c'est marrant, on dirait Narnia au fond de cette armoire ! Dommage qu'elle soit fermée à clé...",desktopItems6:"Pas mal l'armure",desktopItems7:"Franchement... mon petit neveu aurait pu faire ce tableau... avec ses pieds... et les yeux bandés !",desktopItems8:"Une carte ! Ah, par contre ça semble être celle de super mario. Je dois chercher encore",beginBtn:"Commencer l'aventure"},H={runes:{content:"L'ange fixe la pleine lune. Lorsque tout le monde lui tourne le dos, le temps est bouleversé. Lorsque le temps n'existe plus, le secret est révélé."},breakHourglass:"Briser le sablier",makeTurn:"Faire pivoter",takeTheTreasure:"Prendre le trésor",badGuy:{name:"Le méchant",monologue:"Mouahahahahaha ! J'ai enfin trouvé cet endroit ! Merci pour votre aide ! Tout cet or est pour moi. Quant à ce remède, il disparaîtra avec vous ! ... Ah, tiens ! Quelle jolie statue ! Elle ira bien dans mon entrée... Bref! Adieu !"},hammer:{name:"Marteau",description:"Je dois bien pouvoir en faire quelque chose...",action:"Prendre le marteau"}},y={story:{spy:"ARF ! Lorsquil s'est enfui, ça a déclenché un tremblement de terre qui m'a coincé sous une pierre... Et cette bombe qui va bientôt exploser... Heureusement que j'ai toujours mon antisèche pour désamorcer les bombes sur moi !",archaeologist:"Mince! l'espion est coincé sous une pierre... Il faut trouver un moyen de partir d'ici, mais je n'aurais jamais le temps de le décoincer avant que cette bombe n'explose..."},freeSpy:{noTime:"Mais qu'est-ce que je fais ?!? On a pas le temps !!! la bombe va exploser !!! Je dois vite aller la désactiver",free:"Libérer",success:{mySelf:"Vous avez été libéré",other:"L'espion a été libéré"}},bomb:{defuse:"Désamorcer",success:"La bombe a été désamorcée",wrong:"FAUX : - {number} secondes",failure:{name:"Micro dans la bombe",message:"BOUM ! HAHA non, je n'allais quand même pas utiliser une vraie bombe sur vous. De toute façon, vous ne pourrez jamais sortir d'ici vivants. Prevez-ça comme un cadeau d'adieu!"}},cheatSheet:"Antisèche"},U=Object.freeze(Object.defineProperty({__proto__:null,bomb:y,choice:L,escape:C,maze:b,modules:N,museum:v,music:D,treasureEnigma:H,utils:u,views:g},Symbol.toStringTag,{value:"Module"})),M={executeAction:"[Space] {action}",shoot:"Shoot",see:"See",examine:"Examiner",seeTheRules:"See the rules"},P={jobChanged:"You are now a(n) {job}",jobs:{archaeologist:"Archaeologist",spy:"Spy"},myJobWallet:{label:"Wallet"}},f={makeExcavations:"Make excavations"},k={findSecretPassage:"Search a secret passage"},G={playersList:"Players around me",invite:"Invite",accept:"Accept",refuse:"Refuse",cancel:"Cancel",players:"Players",connectToInvite:"Log in to invite someone",notAuthenticated:"Not authenticated",waitingForAnswer:"Waiting for an answer. Please wait.",youAreGoingToBeRedirected:"You're going to be redirected to the game",letSGo:"Let's go !",close:"Close",playerIsNotAvailable:"Player is not available",youHaveBeenInvitedBy:"You have been invited by "},B={close:"Close",see:"See"},F={inventory:"My inventory",close:"Close",empty:"Empty",inventoryItem:"Object n°{itemNo}",looksDelicious:"This croissant looks delicious, but it's not good for my figure",cannotTakeThis:"I can't take this.",objectTaken:'You took: "{object}"'},V={hook:"Hook"},j=Object.freeze(Object.defineProperty({__proto__:null,excavation:f,hooking:V,inventory:F,job:P,lobby:G,runes:B,secretPassage:k},Symbol.toStringTag,{value:"Module"})),W={title:"{job} card",name:"Name",close:"Close",jobs:{archaeologist:{name:"Archaeologist",attributes:"Name : {name}<br> Level: Advanced",description:"Congratulations, you are now a member of the Budding Archaeologists. We certify by the issuance of this card that you can :",permissions:{speakAncienLanguages:"Speak the old languages",readRunes:"Read the runes",makeExcavation:"Make excavation"}},spy:{name:"Spy",attributes:"Name : {name}<br> Registration number: 007",description:"Special state agent. Specialized in :",permissions:{useComputers:"computer hacking",findSecretPassages:"find and use the secret passages",makeHooking:"Hook"}}}},w={title:"Miss Guy Dance",close:"OK !",text:`Welcome to the office of extraordinary jobs !
You are here today because you have a complementary profile, so you can't choose the same job!
Choose your future job NOW :
On the LEFT you will find the door that will lead you to the profession of SPY.
To the RIGHT you will find the door that will lead you to the profession of ARCHAEOLOGIST.`},x={title:"Only those who show elegance will be able to continue their journey",close:"OK !",text:`310143135310103
16143531043510503
1310153141340503
3165435353151051 
31014153103513416`},q={content:`1 - 5 - 3 - Red - White - BOUM
5 - 6 - 9 - Blue - Yellow - Black - PRESS
Red - Yellow - 9 - 7 - 6 - 4 - 0 - BOUM
1 - Green - 9 - 7 - Orange - 2 - BOUM
Yellow - Red - 8 - 6 - White - PRESS
Orange - Blue - 4 - 3 - Red - 0 - PRESS`,note:"to defuse bombs"},Y={keeperName:"Security guard",bigRoomAccess:"I didn't recognize you! Go ahead, enter please",bigRoomNoAccess:"Who are you?! You can't come in if you're not invited, let's go!"},z=Object.freeze(Object.defineProperty({__proto__:null,cheatSheet:q,choice:w,jobWallet:W,museum:Y,music:x},Symbol.toStringTag,{value:"Module"})),_={talk:"Talk",spyMessage:"Become a spy (ATTENTION DEFINITIVE CHOICE)",archeoMessage:"Become an archaeologist (ATTENTION DEFINITIVE CHOICE)",takeCroissantMessage:"Take a croissant",looksDelicious:"This croissant looks delicious, but it's not good for my figure"},$={takeSeed:"Take the seed",seed:"Seed",seedDescription:"This seed seems to be different, aïe ! It stings !",takeSeedMsg:"[SPACE] Take the seed",takePowder:"Take the powder",powder:"Powder",takePowderMsg:"[SPACE] Take the moon shard",powderDescription:"It looks like stardust... Atchoum, oops...",takeGem:"Take the gem",gem:"gem",takeGemMsg:"[SPACE] Take the gem of fire",gemDescription:"It looks like burning... ouch, it's hot !",triggerBlue:"[SPACE] Drop the moon shard",triggerGreen:"[SPACE] Drop the magical seed",triggerRed:"[SPACE] Drop the fire gem",empty:"I think we need to drop something here...",fireOn:"That's beautiful !"},J={display:"Read the headstone"},K={content:`ONCE UPON A TIME, WHEN THE WORLD WAS ENVELOPED IN DARKNESS AND DESPAIR, A GREAT AND NOBLE KNIGHT WAS CHOSEN TO PROTECT THE LIGHT, THE ONLY THING THAT STOOD IN THE WAY OF A COMPLETE VICTORY BY THE FORCES OF DARKNESS.

THE KNIGHT WAS BRAVE AND COURAGEOUS, AND HAD STUDIED THE ART OF WAR FOR MANY YEARS, PREPARING HIMSELF FOR THIS BATTLE. WITH CHIVALRY AND JUSTICE AS HIS GUIDE, HE FACED THE DEMONIC HORDE WITH COURAGE AND COURAGE.

AT FIRST, THE KNIGHT'S COURAGE SEEMED TO HAVE DONE HIM LITTLE GOOD AGAINST THE VAST ARMY OF DEMONS. IN LESS THAN A DAY, IT SEEMED AS IF THE KNIGHT WOULD BE OVERWHELMED BY THE SEEMINGLY NEVER-ENDING HORDE OF MONSTERS. BUT THEN, A MIRACLE HAPPENED.

WHEN THE KNIGHT'S SWORD SEEMED ABOUT TO BE CRUSHED BY A MIGHTY DEMON, AN ANGEL DESCENDED FROM THE HEAVENS, SHINING WITH BLINDING WHITE LIGHT. IN ITS HAND WAS A FLAMING SWORD, BLAZING WITH AN UNHOLY FLAME, AND THE aNGEL BROUGHT IT DOWN UPON THE DEMON'S HEAD, INCINERATING IT.

THIS ANGEL WAS NO MERE MESSENGER, BUT A SERVANT OF DIVINE JUSTICE. THE ANGEL HAD BEEN SENT BY GOD HIMSELF, TO BRING JUSTICE AND LIGHT TO THE WORLD. IN A BLINDING FLASH, THE ANGEL DISAPPEARED, LEAVING ONLY ITS FLAMING SWORD BEHIND.

THE kNIGHT, INSPIRED BY THIS DIVINE INTERVENTION, FOUGHT WITH A NEWFOUND STRENGTH AND RALLIED HIS ARMY. WITH THE ANGEL'S GIFT IN HAND, THE KNIGHT CHARGED INTO BATTLE, WIELDING THE FLAMING SWORD AND STRIKING DOWN THE DEMONIC ARMY WITH SUPERNATURAL PRECISION. IN THE END, THE KNIGHT EMERGED FROM THE BATTLE VICTORIOUS, STANDING AMIDST THE FALLEN BODIES OF THE dEMONIC HORDE.

FROM THAT DAY FORWARD, IT BECAME A LEGEND AMONG THE KNIGHT'S PEOPLE: THAT IN TIMES OF DARKNESS AND DESPAIR, THERE WILL ALWAYS BE A KNIGHT CHOSEN TO PROTECT THE LIGHT, AND THAT THESE CHOSEN WARRIORS NEED NOT FIGHT ALONE, FOR IN TIMES OF DESPERATION, AN ANGEL WILL COME TO SAVE THEM.`,title:"Ancient text",active:"Touch the status",artifact:"[TOUCH] How beautiful, I can't resist to touch it..."},Q={doorClosed:"This door seems to be locked",search:"[TO RUMMAGE]",idCardTitle:"Identity card",idCardDescription:"The identity card of someone who looks really, really important",searchEmpty:"Nothing interesting...",pickpocket:"[PICKPOCKET]",pickpocketEmpty:"mmmh... no, nothing interresting",accessCard:"Golden key",accessCardDescription:"Golden key who seems looks really important",desktopOpenMsg:"*Clic clac* that's opened !",desktopOpen:"[TRY THE GOLDEN KEY]"},X={runes:{content:"The angel stares at the full moon. When everyone turns their backs on it, time is turned upside down. When time no longer exists, the secret is revealed"},breakHourglass:"Break the hourglass",makeTurn:"Rotate",takeTheTreasure:"Take the treasure",badGuy:{name:"The bad guy",monologue:"Mouahahahaha ! I finally found this place ! Thanks for your help! All this gold is for me. As for this remedy, it will disappear with you! Oh ! What a beautiful statue ! It will look great in the hall! ... Anyway! Farewell !"},hammer:{name:"Hammer",description:"There must be something I can do with it...",action:"Take the hammer"}},Z={story:{spy:"ARF! When he ran away, it triggered an earthquake which trapped him under a rock... And this bomb that's about to explode... Fortunately, I've always got my bomb-disarming cheat sheet with me!",archaeologist:"Damn! The spy is stuck under a rock... We've got to find a way to get out of here, but I'll never have time to get him unstuck before this bomb explodes..."},freeSpy:{noTime:"What the hell am I doing?!? There's no time! The bomb's going to explode! I've got to go and deactivate it",free:"Release",success:{mySelf:"You have been released",other:"The spy has been released"}},bomb:{defuse:"Defuse",success:"The bomb has been defused",wrong:"WRONG : - {number} seconds",failure:{name:"Microphone in bomb",message:"BOUM ! HAHA no, I wasn't going to use a real bomb on you. You'll never get out of here alive anyway. Think of it as a going-away present!"}},cheatSheet:"CheatSheet"},ee=Object.freeze(Object.defineProperty({__proto__:null,bomb:Z,choice:_,escape:K,maze:$,modules:j,museum:Q,music:J,treasureEnigma:X,utils:M,views:z},Symbol.toStringTag,{value:"Module"})),i={"fr-FR":U,"en-US":ee};let s="fr-FR";WA.onInit().then(()=>{s=WA.player.language,Object.keys(i).includes(s)||(s="en-US")});const E=(o,a={})=>{let n=o;const t=Object.keys(a);for(let e=0;e<t.length;e++)n=n.replaceAll("{"+t[e]+"}",a[t[e]]);return n},te=(o,a={})=>{const t=o.split(".").reduce((e,r)=>(!e||!e[r]?e=void 0:e=e[r],e),i[s]);return t&&typeof t=="string"?E(t,a):o},oe=Object.freeze(Object.defineProperty({__proto__:null,getSentenceWithVariables:E,get playerLanguage(){return s},translate:te},Symbol.toStringTag,{value:"Module"}));export{oe as a,te as t};
