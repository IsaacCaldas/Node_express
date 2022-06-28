function create(req, res) {
  res.send('User > create')
}

function show(req, res) {
  res.send('User > get')
}

module.exports = { 
  create,
  show
}