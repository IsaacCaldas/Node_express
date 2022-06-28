const express = require('express')
const app = express()
const PORT = 3000

const load = require('./src/middlewares/load')


app.use((req, res, next) => {
  console.log('Loading...')
  next()
})

app.use(load('Online users'))

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