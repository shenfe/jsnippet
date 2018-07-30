const type = value => {
  return Object.prototype.toString.call(value).match(/\s(.*)]$/)[1].toLowerCase()
}

const isSimple = value => {
  const t = type(value)
  switch (t) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'null':
    case 'undefined':
      return true
  }
}

const nextTick = (fn, ...args) => {
  setTimeout(() => {
    fn(...args)
  })
}

class Pubsub {
  constructor() {
    this._store = {}
    this._listeners = {}
  }

  get(proppath) {
    let target = this._store

    const parts = proppath.split('.')
    while (parts.length) {
      if (isSimple(target)) return
      let part = parts.shift()
      target = target[part]
    }
    return target
  }

  set(proppath, value, force) {
    const listeners = this._listeners

    let target = this._store

    const parts = proppath.split('.')
    const curPath = []
    let parent
    let part
    while (parts.length) {
      if (isSimple(target)) {
        if (!force) {
          return {
            code: 1,
            message: `value error, proppath '${curPath.join('.')}'`
          }
        } else {
          target = parent[part] = {}
        }
      }
      part = parts.shift()
      curPath.push(part)
      parent = target
      target = parent[part]
    }
    parent[part] = value

    nextTick(() => {
      const cbs = listeners[proppath]
      if (!cbs || !cbs.length) return
      cbs.forEach(cb => {
        if (type(cb) !== 'function') return
        cb(value)
      })
    })
  }

  watch(proppath, callback, immediate) {
    const listeners = this._listeners

    if (!listeners[proppath]) listeners[proppath] = []
    listeners[proppath].push(callback)

    immediate && callback(this.get(proppath))
  }
}

module.exports = Pubsub
