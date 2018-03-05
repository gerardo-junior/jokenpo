import Game from './components/Game'

function ready (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

window.game = null

ready(function () {
  // Loading
  var elem = document.querySelector('div.loading')
  elem.classList.add('is-loaded')
  setTimeout(function () {
    elem.parentNode.removeChild(elem)
  }, 500)

  // Configure choice menu
  document.querySelectorAll('div.choice-game .container .button').forEach(function (obj, id, nodeList) {
    obj.addEventListener('click', function (evt) {
      // Instantiating object
      window.game = new Game(obj.getAttribute('game'))
      document.querySelector('section.game').classList.add(obj.getAttribute('game'))
      setTimeout(function () {
        document.querySelectorAll('section.game button.option').forEach(function (obj, id, nodeList) {
          obj.classList.add('in')
        })
      }, 250)

      nodeList.forEach(function (obj) {
        var elem = obj.parentElement.parentElement
        elem.classList.add('hide')
        elem.classList.remove('show')

        document.querySelector('section.game .button-back').addEventListener('click', function (evt) {
          elem.classList.add('show')
          elem.classList.remove('hide')
          setTimeout(function () {
            document.querySelectorAll('section.game button.option').forEach(function (obj, id, nodeList) {
              obj.classList.remove('in')
            })
            document.querySelector('section.game').classList.remove('a')
            document.querySelector('section.game').classList.remove('b')
            window.game = null
          }, 250)
        })
      })
    })
  })

  var result = document.getElementById('result')
  var showResultTimeout
  var hideResultTimeout
  var removeClassTimeout

  document.querySelectorAll('section.game div.container button.option').forEach(function (obj, id, nodeList) {
    obj.addEventListener('click', function (evt) {
      nodeList.forEach(function (obj) {
        obj.classList.remove('winner')
        obj.classList.remove('loser')
        obj.classList.remove('tie')
      })

      if (window.game !== null) {
        var played = window.game.play(obj.getAttribute('play'))
        if (!(played.tie instanceof Object)) {
          document.getElementById(played.winner).classList.add('winner')
          document.getElementById(played.loser).classList.add('loser')
        } else {
          document.getElementById(played.tie).classList.add('tie')
        }
        result.classList.add('hide')

        clearTimeout(showResultTimeout)
        clearTimeout(hideResultTimeout)
        clearTimeout(removeClassTimeout)

        showResultTimeout = setTimeout(function () {
          result.classList.remove('hide')
          result.innerHTML = played.message
          result.classList.add('show')
        }, 50)

        hideResultTimeout = setTimeout(function () {
          result.classList.remove('show')
          result.classList.add('hide')
          removeClassTimeout = setTimeout(function () {
            nodeList.forEach(function (obj) {
              obj.classList.remove('winner')
              obj.classList.remove('loser')
              obj.classList.remove('tie')
            })
          }, 3000)
        }, 2000)
      }
    })
  })
})
