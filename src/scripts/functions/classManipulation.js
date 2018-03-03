module.exports = {
  addClass (obj, className) {
    if (obj.classList) {
      obj.classList.add(className)
    } else {
      obj.className += ' ' + className
    }
  },
  removeClass (obj, className) {
    if (obj.classList) {
      obj.classList.remove(className)
    } else {
      obj.className = obj.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    }
  }
}
