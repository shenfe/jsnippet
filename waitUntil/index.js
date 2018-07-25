export default (fn, interval = 200, tryTimes = 5) => {
  return new Promise((resolve, reject) => {
    let r
    let count = 0
    const runner = () => {
      r = fn()
      count++
      if (r) return resolve(r)
      if (count === tryTimes) return reject('timeout')
      setTimeout(runner, interval)
    }
    runner()
  })
}
