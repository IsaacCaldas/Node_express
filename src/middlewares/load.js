function load(data_name) {
  return function(req, res, next) {
    console.log(`Fetching ${data_name}...`)
    next()
  }
}

module.exports = load