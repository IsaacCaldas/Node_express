module.exports = (app, product) => {
  function show(req, res) {
    res.send(`Product > show > ${product}`)
  }

  function create(req, res) {
    res.send(`Product > create > ${product}`)
  }

  app.post('/product', create)
  app.get('/product', show)

  // OPTIONAL
  // return {
  //   create,
  //   show
  // }
} 