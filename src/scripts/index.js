function ready (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(function () {
  document.querySelector('div.loading').classList.add('is-loaded')

  document.querySelectorAll('div.choice-game .container .button').forEach(function (obj, id, nodeList) {
    obj.addEventListener('click', function (evt) {
      nodeList.forEach(function (obj) {
        obj.parentElement.parentElement.classList.add('out')
      })
    })
  })
})
