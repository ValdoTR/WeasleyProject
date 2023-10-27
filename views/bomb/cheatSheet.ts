/// <reference types="../../node_modules/@workadventure/iframe-api-typings" />
//import * as utils from '../../src/utils/index.js'
import * as modules from '../../src/modules/index.js'
import * as utils from '../../src/utils/index.js'

document.addEventListener("DOMContentLoaded", () => {
  WA.onInit().then(async () => {

    const content = document.getElementById('content')
    const note = document.getElementById('note')

    if (content) {
      content.innerText = utils.translations.translate(`views.cheatSheet.content`)
    }

    if (note) {
      note.innerText = utils.translations.translate(`views.cheatSheet.note`)
    }
  })
})

export {}