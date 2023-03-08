/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {job, excavations, lobby, secretPassages, hiddenZone, switchingTiles} from './modules'
import { bootstrapExtra } from "@workadventure/scripting-api-extra";
// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('INITIALISATION')
    job.initiateJob()
    job.setPlayerJob('spy')

    console.log('HERE')
    excavations.initiateExcavations(['excavation'], [() => {console.log('test callback after excavation')}])
    secretPassages.initiateSecretPassages(['secretPassage'], [() => {console.log('test callback after finding secret passage')}])
    hiddenZone.initiateHiddenZones([{stepIn: 'hiddenZoneFloor', hide: 'hiddenZoneTop'}])

    console.log('Initiate switching tiles')
    switchingTiles.initiateSwitchingTiles()

    console.log('LOBBY INITIALISATION')
    lobby.initiateLobby()

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e))

export {};
