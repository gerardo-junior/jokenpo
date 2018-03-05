export default class Game {
  constructor (id) {
    this.game = this.getConfig(id)
  }

  getConfig (id) {
    return require('../config/' + id + '.conf').default
  }

  play (selection) {
    var data = {}

    // Geting CPU choice
    var cpuSelection = this.randomPlay()

    if (selection === cpuSelection.id) { // Check if player tied with CPU
      data.message = selection + ' tied with ' + selection
      data.tie = selection
    } else if (cpuSelection.defeat.indexOf(selection) !== 1) { // Check if player won
      data.message = selection + ' wins ' + cpuSelection.id
      data.winner = selection
      data.loser = cpuSelection.id
    } else { // CPU won
      data.message = selection + ' loses ' + cpuSelection.id
      data.winner = cpuSelection.id
      data.loser = selection
    }

    /* return format
      { winner: 'rock' , loser: 'paper' , message: 'rock wins scissors' }
      { tie: 'rock' , message: 'rock with rock' } */
    return data
  }

  randomPlay () {
    return this.game[Math.floor(Math.random() * this.game.length)]
  }
}
