const express = require('express')
const app = express()
const PORT = 3000

const body_parser = require('body-parser')

const load = require('./src/middlewares/load')
const user_api = require('./src/api/user')
const product_api = require('./src/api/product')
product_api(app, 'PS5')
// require('./src/api/product')(app, 'PS4') OR THIS

app.post('/user', user_api.create)
app.get('/user', user_api.show)

app.use(body_parser.text())
app.use(body_parser.json())
app.use(body_parser.urlencoded({
  extended: true
}))

app.use((req, res, next) => {
  console.log('Loading...')
  next()
})

app.use(load('Online users'))

app.get('/users/report', (req, res) => {
  res.send(`
    User report complete: ${req.query.complete}
    Year report: ${req.query.year}
  `)
})

app.post('/body', (req, res) => {
  // let body = ''
  // req.on('data', function(data) {
  //   body += data
  // })

  // req.on('end', function() {
  //   res.json(JSON.parse(body))
  // })
  
  // WITH BODY PARSER
  res.send(req.body)
  // res.send(req.body.user)
})

app.get('/users/:id', (req, res) => {
  res.send(`User ${req.params.id} selected.`)
})


app.use('/', (req, res, next) => {
  let response_key = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 250; i++) {
    response_key += characters.charAt(Math.floor(Math.random() * characters.length));
  }       

  console.log(`response key:${response_key}`)
  res.json({
    online_users: [
      { id: 0, name: 'Anonymous', admin: true },
      { id: 1, name: 'John Doe', admin: true },
      { id: 2, name: 'Fulano', admin: false },
      { id: 3, name: 'Beltrano', admin: false },
      { id: 3, name: 'Ciclano', admin: false },
    ]
  })
  // res.json({
  //   name: 'Anonymous',
  //   admin: true
  // })
  // res.send(`Server is running on port=<span style="color: #22a176">${PORT}</span>`)
  next()
})

app.use((req, res) => {
  console.log('Loaded.')
})

app.listen(PORT, () => {
  console.log(`Server is running on port=${PORT}`)
})