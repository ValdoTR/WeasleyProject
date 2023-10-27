/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import {ActionMessage} from "@workadventure/iframe-api-typings";
bootstrapExtra();

import * as utils from "./utils";

const shuffle: (array: Array<unknown>) => Array<unknown> = (array: Array<unknown>) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


WA.onInit().then(() => {
  WA.player.state.isInSelectionZone = false

  // Random launch
  const randomTeams = () => {
    WA.state.playersInSelectionZone = ''
    WA.state.randomDuos = null
    WA.state.askForRandomDuos = true
    setTimeout(() => {
      let randomDuos: Record<string, string> = {}
      let players: Array<string> = (WA.state.playersInSelectionZone as string).split('/')
      // TODO : test regex
      const emailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
      players = players.filter((str) => str !== '' && str.match(emailRegex))

      if (players.length % 2 === 0 && players.length > 0) {
        players = shuffle(players) as Array<string>

        for (let i = 0; i < players.length; i += 2) {
          const urlInstance = players[i] + '-' + players[i+1]
          randomDuos[players[i]] = urlInstance
          randomDuos[players[i+1]] = urlInstance
        }

        WA.state.randomDuos = JSON.stringify(randomDuos)
      } else {
        WA.ui.banner.openBanner({
          id: "banner-players-not-even",
          text: utils.translations.translate('lobby.notValid'),
          bgColor: "#ff0000",
          textColor: "#ffffff",
          closable: true,
        })
      }

      WA.state.askForRandomDuos = false
    }, 1000)
  }

  // Random launch activation
  let randomMessage: ActionMessage | null = null
  WA.room.onEnterLayer('random_zone').subscribe(() => {
    randomMessage = WA.ui.displayActionMessage({
      message: utils.translations.translate('utils.executeAction', {
        action: utils.translations.translate('lobby.activateRandom')
      }),
      callback: () => {
        randomTeams()
      }
    })
  })

  WA.room.onLeaveLayer('random_zone').subscribe(() => {
    randomMessage?.remove()
    randomMessage = null
  })

  // On enter selection zone
  WA.room.onEnterLayer('selection_zone').subscribe(() => {
    // Set variable to detect player is in selection zone
    WA.player.state.isInSelectionZone = true

    // Add collisions to prevent from going outside during random
    WA.room.setTiles([
      {
        x: 4,
        y: 14,
        tile: 'block',
        layer: 'collisions'
      },
      {
        x: 5,
        y: 14,
        tile: 'block',
        layer: 'collisions'
      },
      {
        x: 6,
        y: 14,
        tile: 'block',
        layer: 'collisions'
      }
    ])
  })

  WA.state.onVariableChange('askForRandomDuos').subscribe(() => {
    if (WA.player.state.isInSelectionZone) {
      // TODO : display loading
      console.log('LOADING')

      WA.state.playersInSelectionZone = WA.state.playersInSelectionZone + '/' + WA.player.uuid
    }
  })

  WA.state.onVariableChange('randomDuos').subscribe((value) => {
    if (value) {
      const randomDuos = JSON.parse(value as string)
      const urlInstance = randomDuos[WA.player.uuid as string]

      WA.nav.goToPage(`https://play.workadventu.re/_/${urlInstance}/morganehuebra.github.io/WeasleyProject/maps/choice.tmj`)
    }
  })

  // TODO : explanation
})