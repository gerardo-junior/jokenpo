module.export.Button = class {
  constructor (obj) {
    if (typeof obj !== 'object') {
      obj = document.querySelectorAll(obj)
    }

    return obj
  }
}
