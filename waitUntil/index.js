const isPromise = obj => (obj && (typeof obj.then === 'function'))

module.exports = (fn, interval = 200, tryTimes = 5) => {
  return new Promise((resolve, reject) => {
    let r
    let count = 0
    const runner = () => {
      r = fn()
      count++
      if (!isPromise(r)) {
        if (r) return resolve(r)
        if (count === tryTimes) return reject('timeout')
        setTimeout(runner, interval)
      } else {
        r.then(data => {
          if (data) return resolve(data)
          if (count === tryTimes) return reject('timeout')
          setTimeout(runner, interval)
        }, err => {
          reject(err)
        })
      }
    }
    runner()
  })
}
