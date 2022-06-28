const express = require('express')
const app = express()
const PORT = 3000

app.use('/', (req, res) => {
  res.send(`<h1>Server is running on port=<span style="color: #22a176">${PORT}</span></h1>`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port=${PORT}`)
})