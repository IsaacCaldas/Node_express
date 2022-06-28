const express = require('express')
const app = express()
const PORT = 3000

app.use('/', (req, res) => {
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
})

app.listen(PORT, () => {
  console.log(`Server is running on port=${PORT}`)
})