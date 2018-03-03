function ready (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

// components
// import button from './components/Button'

// functions
// var classManipulation = require('./functions/classManipulation')

ready(function () {
  document.querySelector('div.loading').classList.add('is-loaded')
  // document.querySelector('div.loading').remove()
  // document.querySelector('div.choice').classList.add('is-loaded')
})
