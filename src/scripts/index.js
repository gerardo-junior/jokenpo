function ready (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

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
})
