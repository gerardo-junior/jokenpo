export default class Game {
  constructor (id) {
    this.game = this.getConfig(id)
  }

  play (selection) {
    var data = {}
    var game = {}
    var cpuSelection = this.randomPlay(game)

    // Check if player tied with CPU
    if (selection === cpuSelection) {
      data.message = selection + ' tied with ' + selection
      data.tie = selection
    }

    // Check if player won
    if (this.game.winners[cpuSelection].indexOf(selection) == -1) {
      data.message = selection + ' wins ' + cpuSelection
      data.winner = selection
      data.loser = cpuSelection
    }

    // Check if CPU won
    if (this.game.winners[selection].indexOf(cpuSelection) == -1) {
      data.message = selection + ' loses ' + cpuSelection
      data.winner = cpuSelection
      data.loser = selection
    }

    /* return format
      { winner: 'rock' , loser: 'paper' , message: 'rock wins scissors' }
      { tie: 'rock' , message: 'rock with rock' } */
    return data
  }

  randomPlay (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
}
